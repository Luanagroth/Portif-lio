import type { ProjectGithubData } from "@/types/project";

const GITHUB_REPOSITORY_REGEX = /^https:\/\/github\.com\/([^/]+)\/([^/#?]+)/i;

function extractRepositoryCoordinates(repositoryUrl: string) {
  const match = repositoryUrl.match(GITHUB_REPOSITORY_REGEX);

  if (!match) {
    return null;
  }

  const [, owner, repository] = match;

  return { owner, repository };
}

export async function fetchGitHubRepositoryData(
  repositoryUrl: string,
): Promise<ProjectGithubData | null> {
  const coordinates = extractRepositoryCoordinates(repositoryUrl);

  if (!coordinates) {
    return null;
  }

  try {
    const response = await fetch(
      `https://api.github.com/repos/${coordinates.owner}/${coordinates.repository}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN
            ? {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
              }
            : {}),
        },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return null;
    }

    const repository = (await response.json()) as {
      html_url?: string;
      updated_at?: string;
      language?: string | null;
      stargazers_count?: number;
    };

    return {
      htmlUrl: repository.html_url ?? repositoryUrl,
      updatedAt: repository.updated_at ?? null,
      language: repository.language ?? null,
      stars:
        typeof repository.stargazers_count === "number"
          ? repository.stargazers_count
          : null,
    };
  } catch {
    return null;
  }
}
