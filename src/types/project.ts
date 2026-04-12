export type TechSlug =
  | "chrome"
  | "css"
  | "express"
  | "eslint"
  | "leaflet"
  | "github-actions"
  | "html"
  | "jest"
  | "javascript"
  | "next"
  | "node"
  | "prisma"
  | "react"
  | "rtl"
  | "sqlite"
  | "tailwind"
  | "typescript"
  | "vercel"
  | "vite"
  | "vitest"
  | "zod";

export type ProjectTechnology = {
  name: string;
  slug: TechSlug;
};

export type ProjectStatus = {
  label: string;
  tone: "active" | "neutral";
};

export type ProjectPreview =
  | {
      kind: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
    }
  | {
      kind: "panel";
      alt: string;
      eyebrow: string;
      title: string;
      description?: string;
      bullets: string[];
      stats?: Array<{
        label: string;
        value: string;
      }>;
      routes?: string[];
      mapLabels?: string[];
    };

export type ProjectGithubData = {
  htmlUrl: string;
  updatedAt: string | null;
  language: string | null;
  stars: number | null;
};

export type ProjectManual = {
  slug: string;
  name: string;
  category: string;
  status?: ProjectStatus;
  shortDescription: string;
  summary: string;
  professionalDescription: string;
  featured: boolean;
  preview: ProjectPreview;
  technologies: ProjectTechnology[];
  differentiators: string[];
  impactPoints: string[];
  metrics: string[];
  repositoryUrl: string;
  repositoryLabel?: string;
  demoUrl?: string;
  demoLabel?: string;
  readmeUrl: string;
};

export type Project = ProjectManual & {
  github: ProjectGithubData;
};
