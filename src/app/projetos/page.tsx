import type { Metadata } from "next";
import { ProjectPage } from "@/components/project-page";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projetos | Luana Groth",
  description:
    "Vitrine completa de projetos com foco em produto, arquitetura, testes, CI/CD e impacto visual.",
};

export default async function ProjectsRoute() {
  const projects = await getProjects();

  return <ProjectPage projects={projects} />;
}
