import { ProjectPreview } from "@/components/project-preview";
import { ProjectStatusBadge } from "@/components/project-status-badge";
import { TechnologyBadge } from "@/components/technology-badge";
import { formatGithubUpdatedAt } from "@/lib/projects";
import type { Project } from "@/types/project";

type ProjectSectionProps = {
  project: Project;
  index: number;
};

export function ProjectSection({ project, index }: ProjectSectionProps) {
  const updatedAt = formatGithubUpdatedAt(project.github.updatedAt);

  return (
    <article
      id={project.slug}
      className={`project-section-card project-immersive project-immersive-shell grid gap-5 rounded-[2.2rem] p-5 sm:p-6 lg:gap-6 xl:grid-cols-[minmax(21rem,0.9fr)_minmax(0,1.1fr)] xl:p-7 ${
        index === 0 ? "featured-detail-shell" : ""
      }`}
    >
      <div className="project-section-preview-wrap">
        <ProjectPreview
          preview={project.preview}
          priority={index === 0}
          className="project-section-preview"
          variant="project-page"
        />
      </div>

      <div className="project-section-content flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-3">
          <span className="accent-pill rounded-full border px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.24em]">
            {project.category}
          </span>
          {project.status ? <ProjectStatusBadge status={project.status} /> : null}
          {project.metrics.map((metric) => (
            <span key={metric} className="metric-pill rounded-full px-3 py-1 text-xs font-medium">
              {metric}
            </span>
          ))}
        </div>

        <div className="mt-5 space-y-3">
          <h2 className="text-main font-display text-[2rem] leading-none sm:text-[2.5rem]">
            {project.name}
          </h2>
          <p className="text-soft max-w-[46rem] text-base leading-7 sm:text-[1.02rem] sm:leading-8">
            {project.summary}
          </p>
          <p className="text-soft max-w-[46rem] text-[0.98rem] leading-7 sm:text-base sm:leading-8">
            {project.professionalDescription}
          </p>
        </div>
      </div>

      <div className="project-section-lower grid gap-4 xl:col-span-2">
        <div className="grid gap-4 xl:grid-cols-2">
          <div className="subtle-card rounded-[1.7rem] p-5">
            <p className="text-muted text-sm font-semibold uppercase tracking-[0.22em]">
              Diferenciais
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.differentiators.map((differential) => (
                <li key={differential} className="text-soft flex gap-3 text-sm leading-7">
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                  <span>{differential}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="subtle-card rounded-[1.7rem] p-5">
            <p className="text-muted text-sm font-semibold uppercase tracking-[0.22em]">
              Execução prática
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.impactPoints.map((point) => (
                <li key={point} className="text-soft flex gap-3 text-sm leading-7">
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {project.architectureNotes ? (
          <div className="subtle-card rounded-[1.7rem] p-5">
            <p className="text-muted text-sm font-semibold uppercase tracking-[0.22em]">
              {project.architectureNotes.title}
            </p>
            <ul className="mt-4 grid gap-3 lg:grid-cols-3">
              {project.architectureNotes.points.map((point) => (
                <li key={point} className="text-soft flex gap-3 text-sm leading-7">
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-sky-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="project-section-footer grid gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {project.technologies.map((technology) => (
              <TechnologyBadge
                key={`${project.slug}-${technology.slug}-${technology.name}`}
                technology={technology}
              />
            ))}
          </div>

          <div className="project-section-meta-row flex flex-wrap items-center gap-3 xl:flex-nowrap">
            <div className="flex flex-wrap items-center gap-2.5">
              {project.github.language ? (
                <span className="chip-muted rounded-full px-3 py-1 text-xs font-medium">
                  Linguagem principal: {project.github.language}
                </span>
              ) : null}
              {updatedAt ? (
                <span className="chip-muted rounded-full px-3 py-1 text-xs font-medium">
                  Última atualização: {updatedAt}
                </span>
              ) : null}
              {typeof project.github.stars === "number" && project.github.stars > 0 ? (
                <span className="chip-muted rounded-full px-3 py-1 text-xs font-medium">
                  {project.github.stars} estrela{project.github.stars > 1 ? "s" : ""}
                </span>
              ) : null}
            </div>

            <div className="project-section-actions grid gap-3 sm:grid-cols-3 xl:ml-auto xl:min-w-[25rem]">
              <a
                href={project.github.htmlUrl}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                {project.repositoryLabel ?? "Ver código"}
              </a>
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary"
                >
                  {project.demoLabel ?? "Ver demo"}
                </a>
              ) : (
                <span className="button-disabled">Demo privada ou indisponível</span>
              )}
              <a
                href={project.readmeUrl}
                target="_blank"
                rel="noreferrer"
                className="button-dark"
              >
                README
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
