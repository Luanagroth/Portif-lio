"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, ExternalLink } from "lucide-react";
import { ProjectImageCarousel } from "@/components/project-image-carousel";
import {
  getProjectFilters,
  getProjectPrimaryAction,
  getProjectStatusLabel,
  matchesProjectFilter,
  type ProjectFilterKey,
} from "@/lib/projects";
import type { Project } from "@/types/project";
import styles from "./ProjectsShowcase.module.css";

type ProjectsShowcaseProps = {
  projects: Project[];
};

type ProjectCardVariant = "featured" | "lab";

function getRenderableLink(link?: string | null) {
  if (!link) {
    return null;
  }

  const normalizedLink = link.trim();

  return normalizedLink.length > 0 && normalizedLink !== "#" ? normalizedLink : null;
}

function getVisibleTechnologies(project: Project) {
  const visibleTechnologies = project.technologies.slice(0, 4);
  const hiddenCount = Math.max(project.technologies.length - visibleTechnologies.length, 0);

  return { visibleTechnologies, hiddenCount };
}

function ProjectPreviewMedia({
  project,
  variant,
}: {
  project: Project;
  variant: ProjectCardVariant;
}) {
  const imageClassName =
    variant === "featured" ? styles.projectImageFeatured : styles.projectImageLab;

  if (project.preview.kind === "gallery" && project.preview.images.length > 0) {
    return (
      <ProjectImageCarousel
        images={project.preview.images}
        className={`${styles.projectImage} ${imageClassName}`}
        priority={project.section === "main"}
      />
    );
  }

  if (project.preview.kind === "image") {
    return (
      <div className={`${styles.projectImage} ${imageClassName}`}>
        <Image
          src={project.preview.src}
          alt={project.preview.alt}
          fill
          sizes="(min-width: 1280px) 32rem, (min-width: 768px) 45vw, 92vw"
          className={styles.imageMedia}
        />
      </div>
    );
  }

  if (project.preview.kind !== "panel") {
    return null;
  }

  return (
    <div
      className={`${styles.projectImage} ${imageClassName}`}
      data-testid={`project-panel-${project.slug}`}
    >
      <div
        className={`${styles.panelPreview} ${
          variant === "featured" ? styles.panelPreviewFeatured : styles.panelPreviewLab
        }`}
      >
        <div className={styles.panelPreviewHeader}>
          <span className={styles.panelPreviewEyebrow}>{project.preview.eyebrow}</span>
          <div className={styles.panelPreviewTitle}>{project.preview.title}</div>
          {project.preview.description ? (
            <p className={styles.panelPreviewDescription}>{project.preview.description}</p>
          ) : null}
        </div>

        <div className={styles.panelPreviewFooter}>
          <div className={styles.panelPreviewBullets}>
            {project.preview.bullets.map((bullet) => (
              <span key={bullet} className={styles.panelPreviewBullet}>
                {bullet}
              </span>
            ))}
          </div>

          {project.preview.stats?.length ? (
            <div className={styles.panelPreviewStats}>
              {project.preview.stats.map((stat) => (
                <div key={stat.label} className={styles.panelPreviewStat}>
                  <span className={styles.panelPreviewStatLabel}>{stat.label}</span>
                  <span className={styles.panelPreviewStatValue}>{stat.value}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ProjectActions({ project }: { project: Project }) {
  const primaryAction = getProjectPrimaryAction(project);
  const githubLink = getRenderableLink(project.links.github);
  const readmeLink = getRenderableLink(project.links.readme);
  const managementLink = getRenderableLink(project.links.management);

  return (
    <div className={styles.actions}>
      {primaryAction ? (
        <a
          href={primaryAction.href}
          target="_blank"
          rel="noreferrer noopener"
          className={`${styles.actionLink} ${styles.actionLinkPrimary}`}
        >
          <span>{primaryAction.label}</span>
          <ExternalLink size={15} strokeWidth={1.9} aria-hidden="true" />
        </a>
      ) : null}

      {githubLink ? (
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer noopener"
          className={styles.actionLink}
        >
          <span>Ver código</span>
          <ExternalLink size={15} strokeWidth={1.9} aria-hidden="true" />
        </a>
      ) : null}

      {readmeLink ? (
        <a
          href={readmeLink}
          target="_blank"
          rel="noreferrer noopener"
          className={styles.actionLink}
        >
          <span>README</span>
          <ExternalLink size={15} strokeWidth={1.9} aria-hidden="true" />
        </a>
      ) : null}

      {managementLink ? (
        <a
          href={managementLink}
          target="_blank"
          rel="noreferrer noopener"
          className={styles.actionLink}
        >
          <span>Ver gestão</span>
          <ExternalLink size={15} strokeWidth={1.9} aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}

function ProjectCard({
  project,
  variant,
}: {
  project: Project;
  variant: ProjectCardVariant;
}) {
  const { visibleTechnologies, hiddenCount } = getVisibleTechnologies(project);
  const cardClassName =
    variant === "featured"
      ? `${styles.projectCard} ${styles.projectCardFeatured}`
      : `${styles.projectCard} ${styles.projectCardLab}`;

  return (
    <article
      id={project.slug}
      data-testid={`project-card-${project.slug}`}
      className={`${cardClassName} ${styles.projectAnchorTarget}`}
      style={{ "--project-accent": project.accentColor } as CSSProperties}
    >
      <ProjectPreviewMedia project={project} variant={variant} />

      <div className={styles.metaRow}>
        <div className={styles.category}>{project.category}</div>
        <span className={styles.status}>{getProjectStatusLabel(project.lifecycleStatus)}</span>
      </div>

      <div>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.description}>{project.shortDescription}</p>
      </div>

      <div className={styles.storyGrid}>
        <div className={styles.storyBlock}>
          <div className={styles.storyLabel}>Problema</div>
          <p className={styles.storyText}>{project.problem}</p>
        </div>
        <div className={styles.storyBlock}>
          <div className={styles.storyLabel}>Solução</div>
          <p className={styles.storyText}>{project.solution}</p>
        </div>
        <div className={styles.storyBlock}>
          <div className={styles.storyLabel}>Evolução</div>
          <p className={styles.storyText}>{project.learning}</p>
        </div>
      </div>

      <div className={styles.techList}>
        {visibleTechnologies.map((technology) => (
          <span key={technology.slug} className={styles.techChip}>
            {technology.name}
          </span>
        ))}
        {hiddenCount > 0 ? <span className={styles.techChip}>+{hiddenCount}</span> : null}
      </div>

      <ProjectActions project={project} />

      <details data-testid={`project-details-${project.slug}`} className={styles.details}>
        <summary className={styles.detailsSummary}>
          <span>Detalhes técnicos</span>
          <ChevronDown size={15} strokeWidth={1.9} aria-hidden="true" />
        </summary>

        <div className={styles.detailsContent}>
          {project.differentiators.length > 0 ? (
            <section className={styles.detailSection}>
              <h4 className={styles.detailSectionTitle}>Diferenciais</h4>
              <ul className={styles.detailList}>
                {project.differentiators.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.execution?.length ? (
            <section className={styles.detailSection}>
              <h4 className={styles.detailSectionTitle}>Execução prática</h4>
              <ul className={styles.detailList}>
                {project.execution.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.architecture?.length ? (
            <section className={styles.detailSection}>
              <h4 className={styles.detailSectionTitle}>Arquitetura e qualidade</h4>
              <ul className={styles.detailList}>
                {project.architecture.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.managementAccess ? (
            <div className={styles.accessPanel}>
              <div className={styles.accessTitle}>Acesso de demonstração</div>
              <div className={styles.accessText}>
                Login: {project.managementAccess.login}
                <br />
                Senha: {project.managementAccess.password}
              </div>
            </div>
          ) : null}

          <section className={styles.detailSection}>
            <h4 className={styles.detailSectionTitle}>Tecnologias completas</h4>
            <div className={styles.techList}>
              {project.technologies.map((technology) => (
                <span key={technology.slug} className={styles.techChip}>
                  {technology.name}
                </span>
              ))}
            </div>
          </section>
        </div>
      </details>
    </article>
  );
}

export function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterKey>("all");
  const filters = getProjectFilters(projects);
  const visibleProjects = projects.filter((project) => matchesProjectFilter(project, activeFilter));
  const mainProjects = visibleProjects.filter((project) => project.section === "main");
  const labProjects = visibleProjects.filter((project) => project.section === "lab");

  useEffect(() => {
    function scrollToProjectHash() {
      const projectHash = window.location.hash.slice(1);

      if (!projectHash) {
        return;
      }

      const target = document.getElementById(decodeURIComponent(projectHash));

      if (!target) {
        return;
      }

      requestAnimationFrame(() => {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }

    scrollToProjectHash();
    window.addEventListener("hashchange", scrollToProjectHash);

    return () => {
      window.removeEventListener("hashchange", scrollToProjectHash);
    };
  }, []);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.filtersBar} data-testid="projects-filters">
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              aria-pressed={activeFilter === filter.key}
              data-testid={`projects-filter-${filter.key}`}
              className={[
                styles.filterButton,
                activeFilter === filter.key ? styles.filterButtonActive : "",
              ].join(" ")}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {mainProjects.length > 0 ? (
        <section
          className={`${styles.section} ${styles.projectsSectionShell}`}
          data-testid="projects-main-section"
        >
          <div className={styles.groupHeader}>
            <span className={styles.groupEyebrow}>PROJETOS PRINCIPAIS</span>
            <h2 className={styles.groupTitle}>Projetos principais</h2>
            <p className={styles.groupDescription}>
              Soluções com maior profundidade de produto, arquitetura e experiência de uso.
            </p>
          </div>

          <div className={styles.mainGrid} data-testid="projects-main-grid">
            {mainProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="featured" />
            ))}
          </div>
        </section>
      ) : null}

      {labProjects.length > 0 ? (
        <section
          className={`${styles.section} ${styles.projectsSectionShell}`}
          data-testid="projects-lab-section"
        >
          <div className={styles.groupHeader}>
            <span className={styles.groupEyebrow}>LABORATÓRIO E ESTUDOS</span>
            <h2 className={styles.groupTitle}>Laboratório, extensões e estudos</h2>
            <p className={styles.groupDescription}>
              Projetos menores, extensões publicadas e estudos técnicos que mostram
              prática, testes e evolução contínua.
            </p>
          </div>

          <div className={styles.labGrid} data-testid="projects-lab-grid">
            {labProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="lab" />
            ))}
          </div>
        </section>
      ) : null}

      {visibleProjects.length === 0 ? (
        <section className={styles.section}>
          <div className={styles.emptyState}>
            Nenhum projeto corresponde ao filtro atual. Tente explorar outra categoria.
          </div>
        </section>
      ) : null}

      <section className={styles.section}>
        <div className={styles.footerCard}>
          <div>
            <div className={styles.footerTitle}>Continue explorando</div>
            <p className={styles.footerText}>
              Conheça minha trajetória ou entre em contato para oportunidades e projetos.
            </p>
          </div>

          <div className={styles.footerLinks}>
            <Link href="/sobre" className={styles.footerLink}>
              <span>Sobre</span>
              <ArrowUpRight size={15} strokeWidth={1.9} aria-hidden="true" />
            </Link>
            <Link href="/contato" className={styles.footerLink}>
              <span>Contato</span>
              <ArrowUpRight size={15} strokeWidth={1.9} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
