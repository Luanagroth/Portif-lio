import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders the hero copy and project showcase actions", async () => {
    render(await Home());

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Luana Groth",
    );
    expect(
      screen.getByText(/Construindo interfaces modernas com foco em clareza/i),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Ver projetos" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Ver detalhes" })).toHaveLength(2);
    expect(
      screen.getByRole("link", { name: "Ver todos os projetos" }),
    ).toBeInTheDocument();
  });
});
