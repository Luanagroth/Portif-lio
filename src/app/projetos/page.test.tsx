import { render, screen } from "@testing-library/react";
import ProjectsRoute from "@/app/projetos/page";

describe("Projects page", () => {
  it("renders the complete project showcase", async () => {
    render(await ProjectsRoute());

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /projetos tratados como produto/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "CityLine - Mobilidade urbana em um só lugar",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Palavri-metro" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Extension Guard" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "FlowTrack" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /Testes Unit/i })).toBeInTheDocument();
    expect(screen.getByText("Em desenvolvimento ativo")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Ver código" })).toHaveLength(5);
  });
});
