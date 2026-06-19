import { NextResponse } from "next/server";
import { profile } from "@/data/profile";
import {
  normalizeContactQuoteFormValues,
  validateContactQuoteFormValues,
  type ContactQuoteFormValues,
} from "@/lib/contact-form";

const CONTACT_SUBJECT = "Solicitação de orçamento — Portfólio Luana Groth";

function buildContactMessage(values: ContactQuoteFormValues) {
  return [
    `Nome: ${values.name}`,
    `E-mail: ${values.email}`,
    `WhatsApp: ${values.whatsapp || "Não informado"}`,
    `Tipo de projeto: ${values.projectType}`,
    `Prazo desejado: ${values.deadline || "Indeterminado"}`,
    `Investimento estimado: ${values.budget ? `R$ ${values.budget}` : "Não informado"}`,
    "",
    "Descrição da ideia:",
    values.description,
  ].join("\n");
}

export async function POST(request: Request) {
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

  const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: CONTACT_SUBJECT,
      _captcha: "false",
      _template: "table",
      name: normalizedValues.name,
      email: normalizedValues.email,
      whatsapp: normalizedValues.whatsapp || "Não informado",
      projectType: normalizedValues.projectType,
      deadline: normalizedValues.deadline,
      budget: normalizedValues.budget ? `R$ ${normalizedValues.budget}` : "Não informado",
      message: buildContactMessage(normalizedValues),
    }),
  });

  if (!formSubmitResponse.ok) {
    return NextResponse.json(
      {
        message:
          "Não foi possível enviar sua mensagem agora. Tente novamente em instantes.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Mensagem enviada com sucesso. Vou responder o quanto antes.",
    values: normalizeContactQuoteFormValues(normalizedValues),
  });
}
