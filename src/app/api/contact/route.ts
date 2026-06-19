import { NextResponse } from "next/server";
import { Resend } from "resend";
import { profile } from "@/data/profile";
import {
  normalizeContactQuoteFormValues,
  validateContactQuoteFormValues,
  type ContactQuoteFormValues,
} from "@/lib/contact-form";

const CONTACT_SUBJECT = "Solicitacao de orcamento - Portfolio Luana Groth";
const CONTACT_ERROR_MESSAGE =
  "Nao foi possivel enviar sua mensagem agora. Tente novamente em instantes.";
const CONTACT_CONFIG_ERROR_MESSAGE =
  "O envio de mensagens ainda nao esta configurado no servidor.";

function getProviderErrorMessage(error: unknown) {
  if (typeof error === "object" && error && "message" in error) {
    const message = error.message;

    if (typeof message === "string" && message.trim().length > 0) {
      return message;
    }
  }

  return CONTACT_ERROR_MESSAGE;
}

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return null;
  }

  return new Resend(apiKey);
}

function getSenderEmail() {
  return process.env.RESEND_FROM_EMAIL ?? "Portfolio Luana Groth <onboarding@resend.dev>";
}

function buildContactMessage(values: ContactQuoteFormValues) {
  return [
    `Nome: ${values.name}`,
    `E-mail: ${values.email}`,
    `WhatsApp: ${values.whatsapp || "Nao informado"}`,
    `Tipo de projeto: ${values.projectType}`,
    `Prazo desejado: ${values.deadline || "Indeterminado"}`,
    `Investimento estimado: ${values.budget ? `R$ ${values.budget}` : "Nao informado"}`,
    "",
    "Descricao da ideia:",
    values.description,
  ].join("\n");
}

function buildContactEmailHtml(values: ContactQuoteFormValues) {
  const whatsapp = values.whatsapp || "Nao informado";
  const budget = values.budget ? `R$ ${values.budget}` : "Nao informado";

  return `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
      <h1 style="margin-bottom: 16px;">Nova solicitacao de projeto</h1>
      <p><strong>Nome:</strong> ${values.name}</p>
      <p><strong>E-mail:</strong> ${values.email}</p>
      <p><strong>WhatsApp:</strong> ${whatsapp}</p>
      <p><strong>Tipo de projeto:</strong> ${values.projectType}</p>
      <p><strong>Prazo desejado:</strong> ${values.deadline || "Indeterminado"}</p>
      <p><strong>Investimento estimado:</strong> ${budget}</p>
      <h2 style="margin: 24px 0 8px;">Descricao da ideia</h2>
      <p style="white-space: pre-wrap;">${values.description}</p>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactQuoteFormValues;
    const { errors, normalizedValues } = validateContactQuoteFormValues(payload);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          message: "Revise os campos destacados antes de enviar.",
          fieldErrors: errors,
        },
        { status: 400 },
      );
    }

    const resend = getResendClient();

    if (!resend) {
      return NextResponse.json(
        {
          message: CONTACT_CONFIG_ERROR_MESSAGE,
        },
        { status: 503 },
      );
    }

    const { error } = await resend.emails.send({
      from: getSenderEmail(),
      to: [profile.email],
      replyTo: normalizedValues.email,
      subject: CONTACT_SUBJECT,
      text: buildContactMessage(normalizedValues),
      html: buildContactEmailHtml(normalizedValues),
    });

    if (error) {
      console.error("Contact form provider error", error);

      return NextResponse.json(
        {
          message: getProviderErrorMessage(error),
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message: "Mensagem enviada com sucesso. Vou responder o quanto antes.",
      values: normalizeContactQuoteFormValues(normalizedValues),
    });
  } catch (error) {
    console.error("Contact form request failed", error);

    return NextResponse.json(
      {
        message: CONTACT_ERROR_MESSAGE,
      },
      { status: 500 },
    );
  }
}
