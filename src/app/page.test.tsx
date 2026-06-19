import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import Home from "@/app/page";
import { getPortfolioSummaryMetrics } from "@/lib/portfolio-summary";

const MAP_WIDTH = 1672;
const MAP_HEIGHT = 941;
const CARD_SIDE_MARGIN_PX = 20;
const CARD_TOP_SAFE_AREA = "var(--city-top-safe-area, 96px)";
const CARD_BOTTOM_MARGIN_PX = 28;
const COMPACT_CARD_WIDTH_PX = 198;
const ACTIVE_COMPACT_CARD_HEIGHT_PX = 66;
const FUTURE_LABEL_HEIGHT_PX = 44;
const EXPANDED_CARD_WIDTH_PX = 304;
const ACTIVE_EXPANDED_CARD_HEIGHT_PX = 228;
const FUTURE_EXPANDED_CARD_HEIGHT_PX = 146;

function getCardByDistrict(testId: string, districtId: string) {
  return screen
    .getAllByTestId(testId)
    .find((card) => card.getAttribute("data-card-district") === districtId);
}

function getExpectedClamp(x: number, y: number, width: number, height: number) {
  return {
    left: `clamp(${CARD_SIDE_MARGIN_PX}px, calc(${(x / MAP_WIDTH) * 100}% - ${width / 2}px), calc(100% - ${width}px - ${CARD_SIDE_MARGIN_PX}px))`,
    top: `clamp(${CARD_TOP_SAFE_AREA}, calc(${(y / MAP_HEIGHT) * 100}% - ${height / 2}px), calc(100% - ${height}px - ${CARD_BOTTOM_MARGIN_PX}px))`,
  };
}

describe("Home page", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  function mockDesktopLayout() {
    vi.stubGlobal(
      "matchMedia",
      vi.fn((query: string) => ({
        matches: query === "(min-width: 901px)",
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    );
  }

  it("keeps the district cards interactive without the discovery system", async () => {
    vi.useFakeTimers();
    globalThis.__TEST_PATHNAME__ = "/";
    mockDesktopLayout();

    render(<Home />);

    const cityStage = screen.getByTestId("city-stage");
    const hudRoot = screen.getByTestId("city-hud-root");
    const interactiveStageOverlay = screen.getByTestId("interactive-stage-overlay");
    const moviOuterZone = screen.getByTestId("district-outer-movi");
    const moviInnerZone = screen.getByTestId("district-inner-movi");
    const atlasInnerZone = screen.getByTestId("district-inner-atlas");
    const futureInnerZone = screen.getByTestId("district-inner-future-island");
    const mainMap = screen.getByAltText(/Cidade interativa com os projetos/i);

    await act(async () => {
      await Promise.resolve();
    });

    const leftHud = screen.getByTestId("left-portfolio-hud");
    const compass = screen.getByTestId("map-compass");

    expect(screen.getByTestId("left-readability-gradient")).toBeInTheDocument();
    expect(screen.getByTestId("portfolio-chrome")).toBeInTheDocument();
    expect(screen.getByTestId("fixed-page-header")).toBeInTheDocument();
    expect(screen.getByTestId("portfolio-brand")).toBeInTheDocument();
    expect(hudRoot).toContainElement(leftHud);
    expect(cityStage).not.toContainElement(leftHud);
    expect(cityStage).toContainElement(interactiveStageOverlay);
    expect(screen.getAllByText("LUANA GROTH")).toHaveLength(1);
    expect(screen.getByText(/Portf.*v2\.0/i)).toBeInTheDocument();
    expect(screen.getByAltText("Avatar ilustrado de Luana Groth")).toBeInTheDocument();
    expect(screen.getByText(/Ol.+visitante/i)).toBeInTheDocument();
    expect(screen.getByText(/Cada ponto no mapa representa algo que eu constru/i)).toBeInTheDocument();
    expect(
      within(screen.getByTestId("portfolio-intro-title")).getByText("Explore meus"),
    ).toBeInTheDocument();
    expect(screen.getByText("projetos.")).toBeInTheDocument();
    expect(screen.getAllByText("projetos.")).toHaveLength(1);
    expect(screen.getByTestId("portfolio-intro-projects-link")).toHaveAttribute(
      "href",
      "/projetos",
    );
    expect(screen.getByTestId("top-nav-link-cidade")).toHaveAttribute("href", "/");
    expect(screen.getByTestId("top-nav-link-projetos")).toHaveAttribute(
      "href",
      "/projetos",
    );
    expect(screen.getByTestId("header-action-link-sobre")).toHaveAttribute("href", "/sobre");
    expect(screen.getByTestId("header-action-link-contato")).toHaveAttribute(
      "href",
      "/contato",
    );
    expect(screen.queryByTestId("district-aura-movi")).not.toBeInTheDocument();
    expect(screen.queryByTestId("portfolio-social-actions")).not.toBeInTheDocument();
    expect(screen.queryByTestId("social-link-github")).not.toBeInTheDocument();
    expect(screen.queryByTestId("social-link-linkedin")).not.toBeInTheDocument();
    expect(screen.queryByTestId("side-navigation")).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /alternar tema|ativar modo/i }),
    ).not.toBeInTheDocument();
    expect(compass).toBeInTheDocument();
    expect(compass).toHaveAttribute("aria-hidden", "true");
    expect(compass).toHaveStyle({ pointerEvents: "none" });
    expect(within(compass).getByText("N")).toBeInTheDocument();
    expect(within(compass).getByText("S")).toBeInTheDocument();
    expect(within(compass).getByText("W")).toBeInTheDocument();
    expect(within(compass).getByText("E")).toBeInTheDocument();
    expect(mainMap).toHaveAttribute(
      "src",
      expect.stringContaining("city-map-v2.png"),
    );
    expect(screen.queryByTestId("discovery-counter")).not.toBeInTheDocument();
    expect(screen.queryByTestId("discovery-toast")).not.toBeInTheDocument();
    expect(screen.queryByText("PROJETOS DESCOBERTOS")).not.toBeInTheDocument();
    expect(screen.queryByText("CIDADE EXPLORADA")).not.toBeInTheDocument();
    expect(screen.queryByText(/2 em constru/i)).not.toBeInTheDocument();
    expect(screen.queryByText("Novo distrito descoberto")).not.toBeInTheDocument();
    expect(screen.getByText("Resumo do sistema")).toBeInTheDocument();
    expect(screen.getByText("Atividade recente")).toBeInTheDocument();
    expect(screen.getByText("Atualizado")).toBeInTheDocument();
    for (const metric of getPortfolioSummaryMetrics()) {
      expect(screen.getByLabelText(`${metric.value} — ${metric.label}`)).toBeInTheDocument();
    }
    expect(screen.getByText(/Nova experi/i)).toBeInTheDocument();
    expect(screen.getByText("Plataforma publicada")).toBeInTheDocument();
    expect(screen.getByText(/Sistema de gest/i)).toBeInTheDocument();
    expect(screen.getByText(/Em edi/i)).toBeInTheDocument();
    expect(screen.getByText("Publicado")).toBeInTheDocument();
    expect(screen.getByText("Em desenvolvimento")).toBeInTheDocument();
    expect(screen.getAllByTestId("project-district-card")).toHaveLength(5);
    expect(screen.getAllByTestId("future-district-label")).toHaveLength(2);
    expect(within(leftHud).getByTestId("portfolio-intro")).toBeInTheDocument();
    expect(within(leftHud).getByTestId("portfolio-summary-panel")).toBeInTheDocument();
    expect(within(leftHud).getByTestId("portfolio-activity-panel")).toBeInTheDocument();
    expect(within(leftHud).getAllByTestId("portfolio-summary-metric")).toHaveLength(4);
    expect(within(leftHud).getAllByTestId("portfolio-activity-item")).toHaveLength(3);

    fireEvent.pointerEnter(moviOuterZone);
    expect(getCardByDistrict("project-district-card", "movi")).toHaveAttribute(
      "data-card-mode",
      "highlighted",
    );
    expect(screen.getByTestId("district-aura-movi")).toHaveAttribute(
      "data-aura-state",
      "highlighted",
    );

    fireEvent.pointerEnter(moviInnerZone);

    const moviCard = getCardByDistrict("project-district-card", "movi");

    expect(moviCard).toHaveAttribute("data-card-mode", "expanded");
    expect(screen.getByTestId("district-aura-movi")).toHaveAttribute(
      "data-aura-state",
      "expanded",
    );
    expect(moviCard).toHaveStyle(
      getExpectedClamp(615, 315, EXPANDED_CARD_WIDTH_PX, ACTIVE_EXPANDED_CARD_HEIGHT_PX),
    );

    act(() => {
      vi.advanceTimersByTime(10000);
    });

    expect(getCardByDistrict("project-district-card", "movi")).toHaveAttribute(
      "data-card-mode",
      "expanded",
    );

    fireEvent.pointerEnter(moviOuterZone);
    expect(getCardByDistrict("project-district-card", "movi")).toHaveAttribute(
      "data-card-mode",
      "highlighted",
    );

    fireEvent.pointerLeave(moviOuterZone);

    act(() => {
      vi.advanceTimersByTime(141);
    });

    expect(getCardByDistrict("project-district-card", "movi")).toHaveAttribute(
      "data-card-mode",
      "static",
    );
    expect(screen.queryByTestId("district-aura-movi")).not.toBeInTheDocument();

    fireEvent.pointerEnter(futureInnerZone);

    const initialProjectCards = screen.getAllByTestId("project-district-card");
    const extensionsCard = getCardByDistrict("project-district-card", "extensions");

    expect(extensionsCard).toHaveStyle(
      getExpectedClamp(910, 520, COMPACT_CARD_WIDTH_PX, ACTIVE_COMPACT_CARD_HEIGHT_PX),
    );
    expect(getCardByDistrict("future-district-card", "future-cathedral")).toHaveStyle(
      getExpectedClamp(1235, 710, COMPACT_CARD_WIDTH_PX, FUTURE_LABEL_HEIGHT_PX),
    );

    const futureLeftCard = getCardByDistrict("future-district-card", "future-island");
    expect(futureLeftCard).toHaveAttribute("data-card-mode", "expanded");
    expect(futureLeftCard).toHaveStyle(
      getExpectedClamp(560, 650, EXPANDED_CARD_WIDTH_PX, FUTURE_EXPANDED_CARD_HEIGHT_PX),
    );

    fireEvent.pointerLeave(futureInnerZone);

    act(() => {
      vi.advanceTimersByTime(141);
    });

    expect(getCardByDistrict("future-district-card", "future-island")).toHaveAttribute(
      "data-card-mode",
      "label",
    );

    fireEvent.pointerEnter(atlasInnerZone);
    expect(getCardByDistrict("project-district-card", "atlas")).toHaveAttribute(
      "data-card-mode",
      "expanded",
    );
    expect(screen.getByTestId("district-aura-atlas")).toHaveAttribute(
      "data-aura-state",
      "expanded",
    );

    for (const card of initialProjectCards) {
      expect(card).toHaveStyle({ pointerEvents: "auto" });
    }
  });

  it("keeps the intro and projects link visible without any discovery persistence", async () => {
    vi.useFakeTimers();
    globalThis.__TEST_PATHNAME__ = "/";
    mockDesktopLayout();

    render(<Home />);

    expect(screen.getByTestId("city-hud-root")).toBeInTheDocument();

    await act(async () => {
      await Promise.resolve();
    });

    expect(screen.queryByTestId("discovery-counter")).not.toBeInTheDocument();
    expect(screen.queryByTestId("discovery-toast")).not.toBeInTheDocument();
    expect(screen.getByTestId("left-portfolio-hud")).toBeInTheDocument();
    expect(screen.getByTestId("fixed-page-header")).toBeInTheDocument();
    expect(screen.getByTestId("map-compass")).toBeInTheDocument();
    expect(screen.getByAltText("Avatar ilustrado de Luana Groth")).toBeInTheDocument();
    expect(screen.getByTestId("header-action-link-sobre")).toHaveAttribute("href", "/sobre");
    expect(screen.getByTestId("header-action-link-contato")).toHaveAttribute(
      "href",
      "/contato",
    );
    expect(screen.getByTestId("portfolio-intro-projects-link")).toHaveAttribute(
      "href",
      "/projetos",
    );
    expect(
      screen.queryByRole("button", { name: /alternar tema|ativar modo/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Mova o cursor pela cidade para explorar."),
    ).not.toBeInTheDocument();
    expect(screen.getByText("Resumo do sistema")).toBeInTheDocument();
    expect(screen.getByText("Atividade recente")).toBeInTheDocument();
    const activityPanel = screen.getByTestId("portfolio-activity-panel");
    expect(within(activityPanel).getByText(/Portf/i)).toBeInTheDocument();
    expect(within(activityPanel).getByText("ATLAS")).toBeInTheDocument();
    expect(within(activityPanel).getByText("Farol")).toBeInTheDocument();

    const moviCard = getCardByDistrict("project-district-card", "movi");
    const futureExpandedTrigger = screen.getByTestId("district-inner-future-island");

    expect(moviCard).toHaveStyle(
      getExpectedClamp(555, 390, COMPACT_CARD_WIDTH_PX, ACTIVE_COMPACT_CARD_HEIGHT_PX),
    );

    fireEvent.pointerEnter(futureExpandedTrigger);

    const expandedFutureCard = getCardByDistrict(
      "future-district-card",
      "future-island",
    );

    expect(expandedFutureCard).toHaveAttribute("data-card-mode", "expanded");
    expect(expandedFutureCard).toHaveStyle(
      getExpectedClamp(560, 650, EXPANDED_CARD_WIDTH_PX, FUTURE_EXPANDED_CARD_HEIGHT_PX),
    );
    expect(
      within(expandedFutureCard!).getByTestId("project-district-card-expanded"),
    ).toHaveAttribute("data-expanded", "true");
    expect(screen.getAllByTestId("project-district-card")).toHaveLength(5);
  });

  it("moves the selected district details to a safe mobile panel", async () => {
    vi.useFakeTimers();
    globalThis.__TEST_PATHNAME__ = "/";

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

    render(<Home />);

    await act(async () => {
      await Promise.resolve();
    });

    const brandMenuButton = screen.getByTestId("brand-menu-button");

    expect(brandMenuButton).toBeInTheDocument();
    expect(brandMenuButton).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByTestId("header-action-link-sobre")).not.toBeInTheDocument();
    expect(screen.queryByTestId("header-action-link-contato")).not.toBeInTheDocument();
    expect(screen.getByText("LUANA GROTH")).toBeInTheDocument();
    expect(screen.getByTestId("top-nav-link-cidade")).toBeInTheDocument();
    expect(screen.getByTestId("top-nav-link-projetos")).toBeInTheDocument();

    fireEvent.click(brandMenuButton);

    const brandMenu = screen.getByTestId("brand-menu");

    expect(brandMenuButton).toHaveAttribute("aria-expanded", "true");
    expect(brandMenu).toBeInTheDocument();
    expect(within(brandMenu).getByText("Luana Groth")).toBeInTheDocument();
    expect(within(brandMenu).getByText(/Portf.*v2\.0/i)).toBeInTheDocument();
    expect(within(brandMenu).getByTestId("brand-menu-link-sobre")).toHaveAttribute(
      "href",
      "/sobre",
    );
    expect(within(brandMenu).getByTestId("brand-menu-link-contato")).toHaveAttribute(
      "href",
      "/contato",
    );

    fireEvent.keyDown(document, { key: "Escape" });

    expect(screen.queryByTestId("brand-menu")).not.toBeInTheDocument();

    expect(screen.getByTestId("mobile-home-intro")).toBeInTheDocument();
    expect(screen.getByTestId("mobile-home-details")).toBeInTheDocument();
    expect(screen.getByTestId("city-mobile-project-root")).toBeInTheDocument();
    expect(screen.getByTestId("city-stage-scroll")).toBeInTheDocument();
    expect(screen.getByTestId("city-map-pan-hint")).toHaveTextContent(
      /mova o mapa para ver todos os distritos/i,
    );

    fireEvent.click(screen.getByTestId("district-inner-atlas"));

    const mobileSelectedCard = screen.getByTestId("mobile-selected-project-card");

    expect(mobileSelectedCard).toBeInTheDocument();
    expect(within(mobileSelectedCard).getByText("Distrito em foco")).toBeInTheDocument();
    expect(within(mobileSelectedCard).getByText("Atlas")).toBeInTheDocument();
    expect(
      within(mobileSelectedCard).getByText("Auditoria e conformidade"),
    ).toBeInTheDocument();
    expect(
      within(mobileSelectedCard).getByText(/Gest.+o de auditorias, checklists/i),
    ).toBeInTheDocument();
  });
});
