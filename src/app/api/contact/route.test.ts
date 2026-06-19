// @vitest-environment node

import { beforeEach, describe, expect, it, vi } from "vitest";

const sendMock = vi.fn();

vi.mock("resend", () => {
  return {
    Resend: vi.fn().mockImplementation(() => ({
      emails: {
        send: sendMock,
      },
    })),
  };
});

describe("POST /api/contact", () => {
  beforeEach(() => {
    sendMock.mockReset();
    process.env.RESEND_API_KEY = "re_test_key";
    delete process.env.RESEND_FROM_EMAIL;
  });

  it("sends the contact request to Luana's email and uses the visitor email as reply-to", async () => {
    sendMock.mockResolvedValue({ data: { id: "email_123" }, error: null });

    const { POST } = await import("./route");

    const response = await POST(
      new Request("http://localhost/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Bruno Pereira",
          email: "bruno@example.com",
          whatsapp: "47999999999",
          projectType: "Landing page",
          deadline: "30 dias",
          budget: "1.500,00",
          description: "Preciso de uma pagina de vendas.",
        }),
      }),
    );

    expect(response.status).toBe(200);
    expect(sendMock).toHaveBeenCalledWith(
      expect.objectContaining({
        from: "Portfolio Luana Groth <onboarding@resend.dev>",
        to: ["luanaeulalia56@gmail.com"],
        replyTo: "bruno@example.com",
        subject: "Solicitacao de orcamento - Portfolio Luana Groth",
      }),
    );
  });

  it("returns 503 when the resend key is missing", async () => {
    delete process.env.RESEND_API_KEY;

    const { POST } = await import("./route");

    const response = await POST(
      new Request("http://localhost/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Bruno Pereira",
          email: "bruno@example.com",
          whatsapp: "47999999999",
          projectType: "Landing page",
          deadline: "30 dias",
          budget: "1.500,00",
          description: "Preciso de uma pagina de vendas.",
        }),
      }),
    );

    expect(response.status).toBe(503);
    expect(sendMock).not.toHaveBeenCalled();
  });
});
