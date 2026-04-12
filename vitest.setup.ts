import "@testing-library/jest-dom/vitest";
import { afterEach, beforeAll, vi } from "vitest";

const githubRepositoryResponses = new Map([
  [
    "Luanagroth/Palavri-metro",
    {
      html_url: "https://github.com/Luanagroth/Palavri-metro",
      updated_at: "2026-03-18T11:24:00.000Z",
      language: "JavaScript",
      stargazers_count: 3,
    },
  ],
  [
    "Luanagroth/Extension-Guard",
    {
      html_url: "https://github.com/Luanagroth/Extension-Guard",
      updated_at: "2026-04-01T09:15:00.000Z",
      language: "TypeScript",
      stargazers_count: 5,
    },
  ],
  [
    "Luanagroth/CityLine",
    {
      html_url: "https://github.com/Luanagroth/CityLine",
      updated_at: "2026-04-05T17:40:00.000Z",
      language: "TypeScript",
      stargazers_count: 2,
    },
  ],
  [
    "Luanagroth/flowtrack",
    {
      html_url: "https://github.com/Luanagroth/flowtrack",
      updated_at: "2026-04-08T14:12:00.000Z",
      language: "TypeScript",
      stargazers_count: 4,
    },
  ],
  [
    "Luanagroth/Teste_unit-tio_EBAC",
    {
      html_url: "https://github.com/Luanagroth/Teste_unit-tio_EBAC",
      updated_at: "2026-02-20T08:05:00.000Z",
      language: "TypeScript",
      stargazers_count: 1,
    },
  ],
]);

beforeAll(() => {
  vi.stubGlobal(
    "fetch",
    vi.fn(async (input: RequestInfo | URL) => {
      const url = typeof input === "string" ? input : input.toString();

      if (url.startsWith("https://api.github.com/repos/")) {
        const repositoryKey = url.replace("https://api.github.com/repos/", "");
        const repository = githubRepositoryResponses.get(repositoryKey);

        if (repository) {
          return {
            ok: true,
            json: async () => repository,
          } satisfies Partial<Response>;
        }
      }

      return {
        ok: false,
        json: async () => ({}),
      } satisfies Partial<Response>;
    }),
  );
});

afterEach(() => {
  vi.clearAllMocks();
});
