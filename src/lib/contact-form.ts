export const CONTACT_DEADLINE_OPTIONS = [
  "5 dias",
  "10 dias",
  "15 dias",
  "20 dias",
  "30 dias",
  "60 dias",
  "Indeterminado",
] as const;

export type ContactQuoteFormValues = {
  name: string;
  email: string;
  whatsapp: string;
  projectType: string;
  description: string;
  deadline: string;
  budget: string;
};

export type ContactQuoteFormErrors = Partial<
  Record<"name" | "email" | "whatsapp" | "projectType" | "description" | "budget", string>
>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
const WHATSAPP_REGEX = /^\d{10,11}$/;
const BUDGET_REGEX = /^\d{1,3}(\.\d{3})*(,\d{1,2})?$|^\d+(,\d{1,2})?$/;

export function getInitialContactQuoteFormValues(): ContactQuoteFormValues {
  return {
    name: "",
    email: "",
    whatsapp: "",
    projectType: "",
    description: "",
    deadline: "Indeterminado",
    budget: "",
  };
}

export function sanitizeContactName(value: string) {
  return value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
}

export function sanitizeContactWhatsapp(value: string) {
  return value.replace(/\D/g, "").slice(0, 11);
}

export function sanitizeContactBudget(value: string) {
  return value.replace(/[^\d.,]/g, "");
}

export function normalizeContactQuoteFormValues(
  values: ContactQuoteFormValues,
): ContactQuoteFormValues {
  return {
    name: values.name.trim().replace(/\s+/g, " "),
    email: values.email.trim(),
    whatsapp: sanitizeContactWhatsapp(values.whatsapp),
    projectType: values.projectType.trim(),
    description: values.description.trim(),
    deadline: values.deadline.trim() || "Indeterminado",
    budget: sanitizeContactBudget(values.budget.trim()),
  };
}

export function validateContactQuoteFormValues(values: ContactQuoteFormValues) {
  const normalizedValues = normalizeContactQuoteFormValues(values);
  const errors: ContactQuoteFormErrors = {};

  if (!normalizedValues.name) {
    errors.name = "Informe seu nome.";
  } else if (!NAME_REGEX.test(normalizedValues.name)) {
    errors.name = "O nome deve conter apenas letras.";
  }

  if (!normalizedValues.email) {
    errors.email = "Informe seu e-mail.";
  } else if (!EMAIL_REGEX.test(normalizedValues.email)) {
    errors.email = "Informe um e-mail válido.";
  }

  if (normalizedValues.whatsapp && !WHATSAPP_REGEX.test(normalizedValues.whatsapp)) {
    errors.whatsapp = "Informe apenas números do WhatsApp com DDD.";
  }

  if (!normalizedValues.projectType) {
    errors.projectType = "Selecione o tipo de projeto.";
  }

  if (!normalizedValues.description) {
    errors.description = "Descreva a sua ideia.";
  }

  if (normalizedValues.budget && !BUDGET_REGEX.test(normalizedValues.budget)) {
    errors.budget = "Informe apenas valores válidos, como 1500 ou 1.500,00.";
  }

  return {
    errors,
    normalizedValues,
  };
}
