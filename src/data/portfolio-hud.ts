import { getPortfolioSummaryMetrics } from "@/lib/portfolio-summary";

export const portfolioSummaryMetrics = getPortfolioSummaryMetrics();

export const portfolioRecentActivity = [
  {
    title: "Portfólio",
    description: "Nova experiência interativa",
    status: "Em edição",
  },
  {
    title: "ATLAS",
    description: "Plataforma publicada",
    status: "Publicado",
  },
  {
    title: "Farol",
    description: "Sistema de gestão",
    status: "Em desenvolvimento",
  },
] as const;
