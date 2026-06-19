import { manualProjects } from "@/data/projects";
import type { Project, ProjectLifecycleStatus, ProjectManual, ProjectType } from "@/types/project";

export type ProjectFilterKey =
  | "all"
  | "platform"
  | "system"
  | "extension"
  | "experiment"
  | "development";

export type ProjectFilterDefinition = {
  key: ProjectFilterKey;
  label: string;
};

export type ProjectOverviewStat = {
  label: string;
  value: number;
};

const FILTER_ORDER: ProjectFilterKey[] = [
  "all",
  "platform",
  "system",
  "extension",
  "experiment",
  "development",
];

const FILTER_LABELS: Record<ProjectFilterKey, string> = {
  all: "Todos",
  platform: "Plataformas",
  system: "Sistemas",
  extension: "Extensões",
  experiment: "Experimentos",
  development: "Em desenvolvimento",
};

function isValidExternalLink(link?: string | null) {
  if (!link) {
    return false;
  }

  const normalizedLink = link.trim();

  return normalizedLink.length > 0 && normalizedLink !== "#";
}

export function getProjects(): Project[] {
  return manualProjects;
}

export function getProjectStatusLabel(status: ProjectLifecycleStatus) {
  switch (status) {
    case "published":
      return "Publicado";
    case "evolving":
      return "Publicado e em evolução";
    case "development":
      return "Em desenvolvimento";
    case "experiment":
      return "Experimento";
    case "archived":
      return "Arquivado";
    default:
      return "Projeto";
  }
}

export function getProjectFilters(projects: Project[]) {
  return FILTER_ORDER.filter((filterKey) => {
    if (filterKey === "all") {
      return true;
    }

    if (filterKey === "development") {
      return projects.some((project) => project.lifecycleStatus === "development");
    }

    return projects.some((project) => project.projectType === filterKey);
  }).map((filterKey) => ({
    key: filterKey,
    label: FILTER_LABELS[filterKey],
  })) satisfies ProjectFilterDefinition[];
}

export function matchesProjectFilter(project: Project, filter: ProjectFilterKey) {
  if (filter === "all") {
    return true;
  }

  if (filter === "development") {
    return project.lifecycleStatus === "development";
  }

  return project.projectType === filter;
}

export function getProjectsOverviewStats(projects: Project[]): ProjectOverviewStat[] {
  const publishedProjects = projects.filter(
    (project) =>
      project.lifecycleStatus === "published" || project.lifecycleStatus === "evolving",
  ).length;
  const developmentProjects = projects.filter(
    (project) => project.lifecycleStatus === "development",
  ).length;
  const publishedExtensions = projects.filter(
    (project) =>
      project.projectType === "extension" &&
      (project.lifecycleStatus === "published" || project.lifecycleStatus === "evolving"),
  ).length;

  return [
    { label: "Projetos cadastrados", value: projects.length },
    { label: "Projetos publicados", value: publishedProjects },
    { label: "Em desenvolvimento", value: developmentProjects },
    { label: "Extensões publicadas", value: publishedExtensions },
  ].filter((stat) => stat.value > 0);
}

export function getProjectPrimaryAction(project: ProjectManual) {
  if (isValidExternalLink(project.links.store)) {
    return { href: project.links.store, label: "Chrome Web Store" };
  }

  if (isValidExternalLink(project.links.demo)) {
    return {
      href: project.links.demo,
      label: project.lifecycleStatus === "development" ? "Conhecer o projeto" : "Ver demonstração",
    };
  }

  if (isValidExternalLink(project.links.management)) {
    return { href: project.links.management, label: "Conhecer o projeto" };
  }

  if (isValidExternalLink(project.links.github)) {
    return { href: project.links.github, label: "Ver código" };
  }

  if (isValidExternalLink(project.links.readme)) {
    return { href: project.links.readme, label: "README" };
  }

  return null;
}

export function getProjectTypeLabel(projectType: ProjectType) {
  switch (projectType) {
    case "platform":
      return "Plataforma";
    case "system":
      return "Sistema";
    case "extension":
      return "Extensão";
    case "experiment":
      return "Experimento";
    default:
      return "Projeto";
  }
}
