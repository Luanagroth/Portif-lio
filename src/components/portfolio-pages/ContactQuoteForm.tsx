"use client";

import { useState } from "react";
import styles from "./ContactQuoteForm.module.css";
import {
  CONTACT_DEADLINE_OPTIONS,
  getInitialContactQuoteFormValues,
  sanitizeContactBudget,
  sanitizeContactName,
  sanitizeContactWhatsapp,
  validateContactQuoteFormValues,
  type ContactQuoteFormErrors,
  type ContactQuoteFormValues,
} from "@/lib/contact-form";

type ContactQuoteFormProps = {
  projectTypes: readonly string[];
};

function getDescribedBy(fieldName: keyof ContactQuoteFormErrors, errors: ContactQuoteFormErrors) {
  return errors[fieldName] ? `${fieldName}-error` : undefined;
}

export function ContactQuoteForm({ projectTypes }: ContactQuoteFormProps) {
  const [values, setValues] = useState<ContactQuoteFormValues>(getInitialContactQuoteFormValues);
  const [errors, setErrors] = useState<ContactQuoteFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  function clearFieldError(fieldName: keyof ContactQuoteFormErrors) {
    setErrors((currentErrors) => {
      if (!currentErrors[fieldName]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[fieldName];
      return nextErrors;
    });
  }

  function handleChange<K extends keyof ContactQuoteFormValues>(
    fieldName: K,
    nextValue: ContactQuoteFormValues[K],
  ) {
    setValues((currentValues) => ({
      ...currentValues,
      [fieldName]: nextValue,
    }));
    setSubmitMessage(null);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { errors: nextErrors, normalizedValues } = validateContactQuoteFormValues(values);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(normalizedValues),
      });

      const responseBody = (await response.json()) as {
        message?: string;
        fieldErrors?: ContactQuoteFormErrors;
      };

      if (!response.ok) {
        if (responseBody.fieldErrors) {
          setErrors(responseBody.fieldErrors);
        }

        setSubmitMessage({
          type: "error",
          text:
            responseBody.message ??
            "Não foi possível enviar sua mensagem agora. Tente novamente em instantes.",
        });
        return;
      }

      setValues(getInitialContactQuoteFormValues());
      setErrors({});
      setSubmitMessage({
        type: "success",
        text:
          responseBody.message ??
          "Mensagem enviada com sucesso. Vou responder o quanto antes.",
      });
    } catch {
      setSubmitMessage({
        type: "error",
        text: "Não foi possível enviar sua mensagem agora. Tente novamente em instantes.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      data-testid="contact-quote-form"
      className={styles.formShell}
      noValidate
      onSubmit={handleSubmit}
    >
      <div className={styles.grid}>
        <label className={styles.field} htmlFor="quote-name">
          <span className={styles.label}>Nome *</span>
          <input
            id="quote-name"
            name="name"
            className={styles.input}
            value={values.name}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={getDescribedBy("name", errors)}
            autoComplete="name"
            onChange={(event) => {
              handleChange("name", sanitizeContactName(event.currentTarget.value));
              clearFieldError("name");
            }}
          />
          {errors.name ? (
            <span id="name-error" className={styles.errorText}>
              {errors.name}
            </span>
          ) : null}
        </label>

        <label className={styles.field} htmlFor="quote-email">
          <span className={styles.label}>E-mail *</span>
          <input
            id="quote-email"
            type="email"
            name="email"
            className={styles.input}
            value={values.email}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={getDescribedBy("email", errors)}
            autoComplete="email"
            onChange={(event) => {
              handleChange("email", event.currentTarget.value);
              clearFieldError("email");
            }}
          />
          {errors.email ? (
            <span id="email-error" className={styles.errorText}>
              {errors.email}
            </span>
          ) : null}
        </label>

        <label className={styles.field} htmlFor="quote-whatsapp">
          <span className={styles.label}>WhatsApp</span>
          <input
            id="quote-whatsapp"
            name="whatsapp"
            className={styles.input}
            value={values.whatsapp}
            inputMode="numeric"
            autoComplete="tel"
            maxLength={11}
            aria-invalid={errors.whatsapp ? "true" : "false"}
            aria-describedby={getDescribedBy("whatsapp", errors)}
            onChange={(event) => {
              handleChange("whatsapp", sanitizeContactWhatsapp(event.currentTarget.value));
              clearFieldError("whatsapp");
            }}
          />
          {errors.whatsapp ? (
            <span id="whatsapp-error" className={styles.errorText}>
              {errors.whatsapp}
            </span>
          ) : null}
        </label>

        <label className={styles.field} htmlFor="quote-project-type">
          <span className={styles.label}>Tipo de projeto *</span>
          <select
            id="quote-project-type"
            name="projectType"
            className={styles.select}
            value={values.projectType}
            aria-invalid={errors.projectType ? "true" : "false"}
            aria-describedby={getDescribedBy("projectType", errors)}
            onChange={(event) => {
              handleChange("projectType", event.currentTarget.value);
              clearFieldError("projectType");
            }}
          >
            <option value="" disabled>
              Selecione uma opção
            </option>
            {projectTypes.map((projectType) => (
              <option key={projectType} value={projectType}>
                {projectType}
              </option>
            ))}
          </select>
          {errors.projectType ? (
            <span id="projectType-error" className={styles.errorText}>
              {errors.projectType}
            </span>
          ) : null}
        </label>

        <label className={styles.field} htmlFor="quote-deadline">
          <span className={styles.label}>Prazo desejado</span>
          <select
            id="quote-deadline"
            name="deadline"
            className={styles.select}
            value={values.deadline}
            onChange={(event) => handleChange("deadline", event.currentTarget.value)}
          >
            {CONTACT_DEADLINE_OPTIONS.map((deadlineOption) => (
              <option key={deadlineOption} value={deadlineOption}>
                {deadlineOption}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.field} htmlFor="quote-budget">
          <span className={styles.label}>Investimento</span>
          <div className={styles.prefixedInput}>
            <span className={styles.inputPrefix}>R$</span>
            <input
              id="quote-budget"
              name="budget"
              className={`${styles.input} ${styles.inputWithPrefix}`}
              value={values.budget}
              inputMode="decimal"
              placeholder="1.500,00"
              aria-invalid={errors.budget ? "true" : "false"}
              aria-describedby={getDescribedBy("budget", errors)}
              onChange={(event) => {
                handleChange("budget", sanitizeContactBudget(event.currentTarget.value));
                clearFieldError("budget");
              }}
            />
          </div>
          {errors.budget ? (
            <span id="budget-error" className={styles.errorText}>
              {errors.budget}
            </span>
          ) : null}
        </label>

        <label className={styles.fieldFull} htmlFor="quote-description">
          <span className={styles.label}>Descrição da ideia *</span>
          <textarea
            id="quote-description"
            name="description"
            className={styles.textarea}
            value={values.description}
            aria-invalid={errors.description ? "true" : "false"}
            aria-describedby={getDescribedBy("description", errors)}
            onChange={(event) => {
              handleChange("description", event.currentTarget.value);
              clearFieldError("description");
            }}
          />
          {errors.description ? (
            <span id="description-error" className={styles.errorText}>
              {errors.description}
            </span>
          ) : null}
        </label>
      </div>

      <div className={styles.actions}>
        <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar solicitação"}
        </button>
        <div className={styles.feedbackStack}>
          <p className={styles.hint}>
            Sua mensagem será enviada diretamente por aqui, sem abrir outro aplicativo.
          </p>
          {submitMessage ? (
            <p
              data-testid="contact-quote-submit-message"
              className={
                submitMessage.type === "success" ? styles.successText : styles.errorText
              }
            >
              {submitMessage.text}
            </p>
          ) : null}
        </div>
      </div>
    </form>
  );
}
