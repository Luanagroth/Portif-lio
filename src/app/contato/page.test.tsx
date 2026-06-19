import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ContactPage from "@/app/contato/page";

describe("Contact page", () => {
  beforeEach(() => {
    globalThis.__TEST_PATHNAME__ = "/contato";
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          message: "Mensagem enviada com sucesso. Vou responder o quanto antes.",
        }),
      }),
    );
  });

  it("renders the contact structure, hides raw channel urls, and submits the quote form inline", async () => {
    render(<ContactPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Vamos transformar ideias em solu/i,
      }),
    ).toBeInTheDocument();
    expect(screen.queryByText(/Voltar para a cidade/i)).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /Oportunidades profissionais/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /Projetos e or/i }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("contact-channel-email")).toHaveAttribute(
      "href",
      "mailto:luanaeulalia56@gmail.com",
    );
    expect(screen.getByTestId("contact-channel-linkedin")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/luanagroth/",
    );
    expect(screen.getByTestId("contact-channel-github")).toHaveAttribute(
      "href",
      "https://github.com/Luanagroth",
    );
    expect(screen.getByTestId("contact-channel-portfolio")).toHaveAttribute("href", "/");
    expect(
      within(screen.getByTestId("contact-channel-linkedin")).queryByText(/linkedin\.com/i),
    ).not.toBeInTheDocument();
    expect(
      within(screen.getByTestId("contact-channel-github")).queryByText(/github\.com/i),
    ).not.toBeInTheDocument();

    const nameInput = screen.getByLabelText(/Nome \*/i);
    const emailInput = screen.getByLabelText(/E-mail \*/i);
    const projectTypeSelect = screen.getByLabelText(/Tipo de projeto \*/i);
    const descriptionInput = screen.getByLabelText(/Descrição da ideia \*/i);
    const whatsappInput = screen.getByLabelText(/^WhatsApp$/i);
    const deadlineInput = screen.getByLabelText(/Prazo desejado/i);
    const budgetInput = screen.getByLabelText(/Investimento/i);

    fireEvent.click(screen.getByRole("button", { name: /Enviar solicita/i }));

    expect(screen.getByText(/Informe seu nome\./i)).toBeInTheDocument();
    expect(screen.getByText(/Informe seu e-mail\./i)).toBeInTheDocument();
    expect(screen.getByText(/Selecione o tipo de projeto\./i)).toBeInTheDocument();
    expect(screen.getByText(/Descreva a sua ideia\./i)).toBeInTheDocument();

    fireEvent.change(nameInput, { target: { value: "Luana123" } });
    expect(nameInput).toHaveValue("Luana");

    fireEvent.change(emailInput, { target: { value: "luana@teste.com" } });
    fireEvent.change(whatsappInput, { target: { value: "(49) 99999-9999" } });
    expect(whatsappInput).toHaveValue("49999999999");
    fireEvent.change(projectTypeSelect, { target: { value: "Dashboard" } });
    fireEvent.change(deadlineInput, { target: { value: "15 dias" } });
    fireEvent.change(budgetInput, { target: { value: "R$ 1.500,00" } });
    expect(budgetInput).toHaveValue("1.500,00");
    fireEvent.change(descriptionInput, {
      target: { value: "Preciso de um dashboard para operação." },
    });

    fireEvent.click(screen.getByRole("button", { name: /Enviar solicita/i }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        "/api/contact",
        expect.objectContaining({
          method: "POST",
        }),
      );
    });

    expect(screen.getByTestId("contact-quote-submit-message")).toHaveTextContent(
      /mensagem enviada com sucesso/i,
    );
    expect(screen.getByTestId("header-action-link-contato")).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByTestId("header-action-link-sobre")).toHaveAttribute(
      "href",
      "/sobre",
    );

    const scrollArea = screen.getByTestId("page-scroll-area");
    expect(scrollArea.style.overflowX).not.toBe("scroll");
  });
});
