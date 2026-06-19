import { fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ProjectsRoute from "@/app/projetos/page";

describe("Projects page", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("renders the shared shell, keeps the refined structure and preserves filter behavior", () => {
    globalThis.__TEST_PATHNAME__ = "/projetos";

    render(<ProjectsRoute />);

    expect(screen.getByTestId("page-shell")).toBeInTheDocument();
    expect(screen.queryByText(/LUANA GROTH · FULL STACK/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Voltar para a cidade/i)).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /alternar tema|ativar modo/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Ideias que saíram do papel\./i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("projects-hero-title")).toBeInTheDocument();
    expect(screen.getByText(/MEUS PROJETOS/i)).toBeInTheDocument();
    expect(screen.getByTestId("projects-overview-card")).toBeInTheDocument();

    expect(screen.getByTestId("projects-filter-all")).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByTestId("projects-filter-platform")).toBeInTheDocument();
    expect(screen.getByTestId("projects-filter-system")).toBeInTheDocument();
    expect(screen.getByTestId("projects-filter-extension")).toBeInTheDocument();
    expect(screen.getByTestId("projects-filter-experiment")).toBeInTheDocument();
    expect(screen.getByTestId("projects-filter-development")).toBeInTheDocument();

    expect(screen.getByTestId("projects-main-section")).toBeInTheDocument();
    expect(screen.getByTestId("projects-lab-section")).toBeInTheDocument();
    expect(screen.getByTestId("projects-main-grid")).toBeInTheDocument();
    expect(screen.getByTestId("projects-lab-grid")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /Projetos principais/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /Laboratório, extensões e estudos/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByTestId("project-card-movi")).toBeInTheDocument();
    expect(screen.getByTestId("project-card-atlas")).toBeInTheDocument();
    expect(screen.getByTestId("project-card-essenza-bistro")).toBeInTheDocument();
    expect(screen.getByTestId("project-card-farol")).toBeInTheDocument();
    expect(screen.getByTestId("project-card-palavri-metro")).toBeInTheDocument();
    expect(screen.getByTestId("project-card-extension-guard")).toBeInTheDocument();
    expect(screen.getByTestId("project-card-flowtrack")).toBeInTheDocument();
    expect(screen.getByTestId("project-card-testes-unitarios")).toBeInTheDocument();

    const moviCard = screen.getByTestId("project-card-movi");
    expect(moviCard.getAttribute("style")).toContain("--project-accent: #38BDF8");
    expect(within(moviCard).getByText("Problema")).toBeInTheDocument();
    expect(within(moviCard).getByText("Solução")).toBeInTheDocument();
    expect(within(moviCard).getByText("Evolução")).toBeInTheDocument();

    const moviDetails = screen.getByTestId("project-details-movi");
    expect(moviDetails).not.toHaveAttribute("open");
    fireEvent.click(within(moviDetails).getByText(/Detalhes técnicos/i));
    expect(moviDetails).toHaveAttribute("open");
    expect(within(moviDetails).getByText(/Diferenciais/i)).toBeInTheDocument();
    expect(within(moviDetails).getByText(/Arquitetura e qualidade/i)).toBeInTheDocument();

    const atlasCard = screen.getByTestId("project-card-atlas");
    expect(atlasCard.getAttribute("style")).toContain("--project-accent: #8B5CF6");
    expect(screen.queryByTestId("project-panel-atlas")).not.toBeInTheDocument();
    expect(within(atlasCard).getByRole("img")).toHaveAttribute(
      "alt",
      "Dashboard do projeto Atlas exibindo indicadores e gestão de auditorias",
    );
    expect(within(atlasCard).getByRole("link", { name: /Ver demonstração/i })).toHaveAttribute(
      "href",
      "https://projeto-atlas-1-0-bgs8.vercel.app/",
    );
    expect(within(atlasCard).getByRole("link", { name: /Ver código/i })).toHaveAttribute(
      "href",
      "https://github.com/Luanagroth/Projeto-ATLAS-1.0.git",
    );

    const farolCard = screen.getByTestId("project-card-farol");
    expect(screen.getByTestId("project-panel-farol")).toBeInTheDocument();
    expect(within(farolCard).queryByRole("img")).not.toBeInTheDocument();
    expect(within(farolCard).queryAllByRole("link")).toHaveLength(0);

    const moviDemoLink = within(moviCard).getByRole("link", { name: /Ver demonstração/i });
    expect(moviDemoLink).toHaveAttribute("target", "_blank");
    expect(moviDemoLink).toHaveAttribute("rel", "noreferrer noopener");

    const moviGallery = within(moviCard).getByLabelText(/Galeria de imagens/i);
    expect(
      within(moviGallery).getByRole("button", { name: /Imagem anterior/i }),
    ).toBeInTheDocument();
    expect(
      within(moviGallery).getByRole("button", { name: /Proxima imagem/i }),
    ).toBeInTheDocument();

    const extensionGuardCard = screen.getByTestId("project-card-extension-guard");
    expect(
      within(extensionGuardCard).queryByRole("button", { name: /Imagem anterior/i }),
    ).not.toBeInTheDocument();
    expect(
      within(extensionGuardCard).queryByRole("button", { name: /Proxima imagem/i }),
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId("projects-filter-extension"));
    expect(screen.getByTestId("projects-filter-extension")).toHaveAttribute("aria-pressed", "true");
    expect(screen.queryByTestId("project-card-movi")).not.toBeInTheDocument();
    expect(screen.getByTestId("project-card-palavri-metro")).toBeInTheDocument();
    expect(screen.getByTestId("project-card-extension-guard")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("projects-filter-development"));
    expect(screen.getByTestId("project-card-farol")).toBeInTheDocument();
    expect(screen.queryByTestId("project-card-atlas")).not.toBeInTheDocument();

    const scrollArea = screen.getByTestId("page-scroll-area");
    expect(scrollArea.style.overflowX).not.toBe("scroll");
    expect(screen.getByTestId("projects-hero-title")).not.toHaveStyle({
      overflow: "hidden",
    });
    expect(screen.getByTestId("fixed-page-header")).toBeInTheDocument();
    expect(screen.getByTestId("top-nav-link-projetos")).toHaveAttribute("aria-current", "page");
    expect(screen.getByTestId("header-action-link-sobre")).toHaveAttribute("href", "/sobre");
    expect(screen.getByTestId("header-action-link-contato")).toHaveAttribute(
      "href",
      "/contato",
    );
  });

  it("moves about and contact into the brand menu on mobile while preserving the full name", () => {
    globalThis.__TEST_PATHNAME__ = "/projetos";

    const matchMediaMock = vi.fn((query: string) => ({
      matches: query === "(max-width: 900px)",
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    vi.stubGlobal("matchMedia", matchMediaMock);

    render(<ProjectsRoute />);

    const brandMenuButton = screen.getByTestId("brand-menu-button");

    expect(brandMenuButton).toBeInTheDocument();
    expect(screen.getByText("LUANA GROTH")).toBeInTheDocument();
    expect(screen.queryByTestId("header-action-link-sobre")).not.toBeInTheDocument();
    expect(screen.queryByTestId("header-action-link-contato")).not.toBeInTheDocument();
    expect(screen.getByTestId("top-nav-link-cidade")).toBeInTheDocument();
    expect(screen.getByTestId("top-nav-link-projetos")).toBeInTheDocument();

    fireEvent.click(brandMenuButton);

    const brandMenu = screen.getByTestId("brand-menu");

    expect(brandMenuButton).toHaveAttribute("aria-expanded", "true");
    expect(within(brandMenu).getByTestId("brand-menu-link-sobre")).toHaveAttribute(
      "href",
      "/sobre",
    );
    expect(within(brandMenu).getByTestId("brand-menu-link-contato")).toHaveAttribute(
      "href",
      "/contato",
    );

    fireEvent.pointerDown(document.body);

    expect(screen.queryByTestId("brand-menu")).not.toBeInTheDocument();
  });
});
