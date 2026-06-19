import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

async function renderAboutPageWithStoryPhoto(storyPhotoSrc: string | null) {
  vi.resetModules();
  vi.doMock("@/lib/profile-assets.server", async (importOriginal) => {
    const actual = await importOriginal<typeof import("@/lib/profile-assets.server")>();

    return {
      ...actual,
      getExistingProfileStoryImage: () => storyPhotoSrc,
    };
  });

  const { default: AboutPage } = await import("@/app/sobre/page");
  render(<AboutPage />);
}

describe("About page", () => {
  afterEach(() => {
    vi.resetModules();
    vi.doUnmock("@/lib/profile-assets.server");
  });

  it("keeps the approved structure while applying the final hero refinements", async () => {
    globalThis.__TEST_PATHNAME__ = "/sobre";

    await renderAboutPageWithStoryPhoto(null);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Transformando ideias em experi/i,
      }),
    ).toBeInTheDocument();
    expect(screen.queryByText(/Voltar para a cidade/i)).not.toBeInTheDocument();
    expect(screen.getByText(/ME CONHE/i)).toBeInTheDocument();
    expect(screen.getByTestId("about-story-card")).toBeInTheDocument();
    expect(screen.getByText(/Minha hist/i)).toBeInTheDocument();
    expect(screen.getByText(/Currículo profissional|Curriculo profissional/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Baixar curr/i })).toHaveAttribute(
      "href",
      "/Curriculo_Luana_Groth_Estagio.pdf",
    );

    expect(screen.getByTestId("journey-timeline")).toBeInTheDocument();
    expect(screen.getByTestId("featured-projects")).toBeInTheDocument();
    expect(screen.getByText("MOVI")).toBeInTheDocument();
    expect(screen.getByText("Atlas")).toBeInTheDocument();
    expect(screen.getByText("Essenza")).toBeInTheDocument();
    expect(screen.getByText("Farol")).toBeInTheDocument();
    expect(screen.getByTestId("about-featured-project-movi").getAttribute("style")).toContain(
      "--project-accent: #38BDF8",
    );
    expect(screen.getByTestId("about-featured-project-atlas").getAttribute("style")).toContain(
      "--project-accent: #8B5CF6",
    );
    expect(
      screen.getByTestId("about-featured-project-essenza").getAttribute("style"),
    ).toContain("--project-accent: #EC4899");
    expect(screen.getByTestId("about-featured-project-farol").getAttribute("style")).toContain(
      "--project-accent: #2DD4BF",
    );

    const pageShell = screen.getByTestId("page-shell");
    const fixedHeader = screen.getByTestId("fixed-page-header");
    const scrollArea = screen.getByTestId("page-scroll-area");
    expect(pageShell).toContainElement(fixedHeader);
    expect(pageShell).toContainElement(scrollArea);
    expect(scrollArea.style.top).toBe("var(--header-height)");
    expect(scrollArea.style.left).toBe("0px");

    expect(screen.getByTestId("top-nav-link-cidade")).toHaveAttribute("href", "/");
    expect(screen.getByTestId("top-nav-link-projetos")).toHaveAttribute("href", "/projetos");
    expect(screen.getByAltText("Avatar ilustrado de Luana Groth")).toBeInTheDocument();
    expect(screen.getByText(/Portf.*v2\.0/i)).toBeInTheDocument();
    expect(screen.getByTestId("header-action-link-sobre")).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByTestId("header-action-link-contato")).toHaveAttribute(
      "href",
      "/contato",
    );
  });

  it("renders the story photo when the profile asset exists", async () => {
    globalThis.__TEST_PATHNAME__ = "/sobre";

    await renderAboutPageWithStoryPhoto("/images/profile/luana-profile.png");

    const storyPhoto = screen.getByAltText("Foto profissional de Luana Groth");
    expect(storyPhoto).toBeInTheDocument();
    expect(screen.getByText(/Minha hist/i)).toBeInTheDocument();
    expect(storyPhoto).toHaveAttribute(
      "src",
      expect.stringContaining(encodeURIComponent("/images/profile/luana-profile.png")),
    );
  });
});
