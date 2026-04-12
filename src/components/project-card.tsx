import Link from "next/link";
import { ProjectPreview } from "@/components/project-preview";
import { ProjectStatusBadge } from "@/components/project-status-badge";
import { TechnologyBadge } from "@/components/technology-badge";
import { formatGithubUpdatedAt } from "@/lib/projects";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  featuredLead?: boolean;
};

export function ProjectCard({
  project,
  priority = false,
  featuredLead = false,
}: ProjectCardProps) {
  const updatedAt = formatGithubUpdatedAt(project.github.updatedAt);
  const isCityLineHome = featuredLead && project.preview.kind === "panel";
  const isFlowTrackHome = !featuredLead && project.slug === "flowtrack";
  const visibleDifferentials = project.differentiators.slice(0, isCityLineHome ? 3 : featuredLead ? 4 : 3);
  const differentialsGridClass = isFlowTrackHome
    ? "sm:grid-cols-3"
    : featuredLead
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 xl:grid-cols-3";
  const footerBlock = (
    <div
      className={`home-project-footer grid gap-4 ${isFlowTrackHome ? "xl:col-span-2 xl:mt-1" : ""}`}
    >
      <div className="flex flex-wrap items-center gap-3">
        {project.technologies.slice(0, featuredLead ? 6 : 4).map((technology) => (
          <TechnologyBadge
            key={`${project.slug}-${technology.slug}-${technology.name}`}
            technology={technology}
          />
        ))}
      </div>

      <div className="home-project-meta-row flex flex-wrap items-center gap-3 xl:flex-nowrap">
        <div className="flex flex-wrap items-center gap-2.5">
          {project.github.language ? (
            <span className="chip-muted rounded-full px-3 py-1 text-xs font-medium">
              {project.github.language}
            </span>
          ) : null}
          {updatedAt ? (
            <span className="chip-muted rounded-full px-3 py-1 text-xs font-medium">
              Atualizado em {updatedAt}
            </span>
          ) : null}
          <a
            href={project.github.htmlUrl}
            target="_blank"
            rel="noreferrer"
            className="text-muted inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em] transition hover:text-[var(--color-main)]"
          >
            Repositório
          </a>
        </div>

        <div className="xl:ml-auto">
          <Link className="button-primary w-full sm:w-auto" href={`/projetos#${project.slug}`}>
            Ver detalhes
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <article
      className={`home-project-card project-spotlight project-shell group grid w-full items-stretch gap-5 overflow-hidden rounded-[2rem] p-5 transition duration-300 hover:-translate-y-1 sm:p-6 ${
        isCityLineHome
          ? "xl:grid-cols-1"
          : isFlowTrackHome
            ? "xl:grid-cols-[minmax(24rem,0.92fr)_minmax(0,1.08fr)]"
            : "xl:grid-cols-[minmax(21rem,0.92fr)_minmax(0,1.08fr)]"
      } xl:p-7 ${
        featuredLead ? "featured-lead-card" : ""
      }`}
    >
      <div className={`flex h-full flex-col ${isFlowTrackHome ? "justify-start gap-5" : "justify-center"}`}>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            {featuredLead ? (
              <span className="chip-muted rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em]">
                Projeto principal
              </span>
            ) : null}
            <span className="accent-pill rounded-full border px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.24em]">
              {project.category}
            </span>
            {project.status ? <ProjectStatusBadge status={project.status} /> : null}
            {(isCityLineHome ? [] : project.metrics).map((metric) => (
              <span key={metric} className="metric-pill rounded-full px-3 py-1 text-xs font-medium">
                {metric}
              </span>
            ))}
          </div>

          <div className="mt-5 space-y-3">
            <h3
              className={`text-main font-display ${
                featuredLead
                  ? "text-[2.2rem] leading-[0.94] sm:text-[2.9rem]"
                  : "text-[2rem] leading-none sm:text-[2.45rem]"
              }`}
            >
              {project.name}
            </h3>
            <p
              className={`text-soft ${
                featuredLead
                  ? "max-w-[34rem] text-base leading-8 sm:text-[1.04rem]"
                  : "max-w-[30rem] text-[0.98rem] leading-7 sm:text-base sm:leading-8"
              }`}
            >
              {project.shortDescription}
            </p>
          </div>
        </div>

        {isFlowTrackHome ? (
          <div className={`grid gap-3 ${differentialsGridClass}`}>
            {visibleDifferentials.map((differential) => (
              <div
                key={differential}
                className={`subtle-card rounded-[1.35rem] p-4 ${isFlowTrackHome ? "home-flowtrack-card" : ""}`}
              >
                <p className="text-soft text-sm leading-7">{differential}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {!isCityLineHome ? (
        <ProjectPreview
          preview={project.preview}
          priority={priority}
          className={isFlowTrackHome ? "home-project-preview home-flowtrack-preview" : "home-project-preview"}
        />
      ) : null}

      <div
        className={`home-project-lower grid gap-4 ${
          isCityLineHome ? "" : isFlowTrackHome ? "xl:col-start-1 xl:row-start-2" : "xl:col-span-2"
        }`}
      >
        {!isFlowTrackHome ? (
          <div className={`grid gap-3 ${differentialsGridClass}`}>
            {visibleDifferentials.map((differential) => (
              <div
                key={differential}
                className={`subtle-card rounded-[1.35rem] p-4 ${isFlowTrackHome ? "home-flowtrack-card" : ""}`}
              >
                <p className="text-soft text-sm leading-7">{differential}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {footerBlock}
    </article>
  );
}
