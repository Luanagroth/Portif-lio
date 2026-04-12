import { manualProjects } from "@/data/projects";
import { fetchGitHubRepositoryData } from "@/lib/github";
import type { Project, ProjectGithubData, ProjectManual } from "@/types/project";

function createGithubFallback(project: ProjectManual): ProjectGithubData {
  return {
    htmlUrl: project.repositoryUrl,
    updatedAt: null,
    language: null,
    stars: null,
  };
}

function mergeProject(project: ProjectManual, github: ProjectGithubData | null): Project {
  return {
    ...project,
    github: github ?? createGithubFallback(project),
  };
}

export async function getProjects(): Promise<Project[]> {
  const githubResponses = await Promise.allSettled(
    manualProjects.map((project) => fetchGitHubRepositoryData(project.repositoryUrl)),
  );

  return manualProjects.map((project, index) => {
    const githubResponse = githubResponses[index];

    if (githubResponse?.status === "fulfilled") {
      return mergeProject(project, githubResponse.value);
    }

    return mergeProject(project, null);
  });
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getProjects();

  return projects.filter((project) => project.featured);
}

export function formatGithubUpdatedAt(updatedAt: string | null) {
  if (!updatedAt) {
    return null;
  }

  return new Intl.DateTimeFormat("pt-BR", {
    month: "short",
    year: "numeric",
  }).format(new Date(updatedAt));
}
