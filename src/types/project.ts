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
  | "webpack"
  | "vitest"
  | "zod";

export type ProjectTechnology = {
  name: string;
  slug: TechSlug;
};

export type ProjectLifecycleStatus =
  | "published"
  | "evolving"
  | "development"
  | "experiment"
  | "archived";

export type ProjectType = "platform" | "system" | "extension" | "experiment";

export type ProjectSection = "main" | "lab";

export type ProjectPreview =
  | {
      kind: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
    }
  | {
      kind: "gallery";
      images: Array<{
        src: string;
        alt: string;
        title: string;
      }>;
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

export type ProjectImage = {
  src: string;
  alt: string;
  title?: string;
};

export type ProjectActionLinks = {
  demo?: string;
  github?: string;
  store?: string;
  readme?: string;
  management?: string;
};

export type ProjectManual = {
  id: string;
  slug: string;
  name: string;
  category: string;
  projectType: ProjectType;
  lifecycleStatus: ProjectLifecycleStatus;
  section: ProjectSection;
  featured: boolean;
  accentColor: string;
  shortDescription: string;
  problem: string;
  solution: string;
  learning: string;
  impact?: string;
  summary: string;
  professionalDescription?: string;
  preview: ProjectPreview;
  images: ProjectImage[];
  technologies: ProjectTechnology[];
  differentiators: string[];
  execution?: string[];
  architecture?: string[];
  metrics: string[];
  links: ProjectActionLinks;
  managementAccess?: {
    login: string;
    password: string;
  };
};

export type Project = ProjectManual;
