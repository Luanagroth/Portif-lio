import { districts } from "@/components/interactive-city/districts";
import { manualProjects } from "@/data/projects";

export type PortfolioSummaryMetric = {
  value: string;
  label: string;
};

function formatMetricValue(value: number) {
  return value.toString().padStart(2, "0");
}

function getUniqueTechnologyCount() {
  return new Set(
    manualProjects.flatMap((project) => project.technologies.map((technology) => technology.slug)),
  ).size;
}

export function getPortfolioSummaryMetrics(): PortfolioSummaryMetric[] {
  const futureDistrictCount = districts.filter((district) => district.status === "future").length;

  return [
    {
      value: formatMetricValue(manualProjects.length),
      label: "Projetos",
    },
    {
      value: formatMetricValue(getUniqueTechnologyCount()),
      label: "Tecnologias",
    },
    {
      value: formatMetricValue(districts.length),
      label: "Distritos",
    },
    {
      value: formatMetricValue(futureDistrictCount),
      label: "Em construção",
    },
  ];
}
