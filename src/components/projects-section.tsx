import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import type { Project } from "@/types/project";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="home-section-frame section-shell p-6 sm:p-7 xl:p-8">
      <div className="home-projects-heading grid gap-5 xl:grid-cols-[minmax(0,1.18fr)_minmax(18rem,0.82fr)] xl:gap-8">
        <SectionHeading
          eyebrow="Projetos"
          title="Projetos apresentados como vitrine de produto, não como lista de links."
          description="Na home, a seleção prioriza os cases com maior impacto visual e densidade técnica. A página completa aprofunda arquitetura, stack, diferenciais e sinais de entrega profissional."
        />

        <div className="subtle-card flex h-full flex-col justify-between gap-5 rounded-[1.8rem] p-5 sm:p-6 xl:min-h-[15.5rem]">
          <div className="space-y-3">
            <p className="text-muted text-xs font-semibold uppercase tracking-[0.24em]">
              Navegação completa
            </p>
            <p className="text-soft max-w-[28rem] text-sm leading-7 sm:text-[0.98rem]">
              Explore a página de projetos para ver mais contexto, execução prática e detalhes de cada case sem deixar a home sobrecarregada.
            </p>
          </div>

          <div className="flex justify-start xl:justify-end">
            <Link href="/projetos" className="button-secondary w-full sm:w-auto">
              Ver todos os projetos
            </Link>
          </div>
        </div>
      </div>

      <div className="projects-grid">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            priority={index === 0}
            featuredLead={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
