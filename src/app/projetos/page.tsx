import type { Metadata } from "next";
import { PortfolioPageShell } from "@/components/portfolio-pages/PortfolioPageShell";
import { ProjectsShowcase } from "@/components/portfolio-pages/ProjectsShowcase";
import { getProjects, getProjectsOverviewStats } from "@/lib/projects";
import styles from "./projects-page.module.css";

export const metadata: Metadata = {
  title: "Projetos | Luana Groth",
  description:
    "Projetos construídos a partir de necessidades reais, com foco em produto, execução técnica e evolução prática.",
};

export default function ProjectsRoute() {
  const projects = getProjects();
  const overviewStats = getProjectsOverviewStats(projects);

  return (
    <PortfolioPageShell
      eyebrow="Projetos"
      title="Ideias que saíram do papel."
      description="Projetos construídos a partir de necessidades reais, combinando experiência do usuário, organização técnica e visão de produto."
      contentVariant="wide"
      heroContent={
        <div className={styles.projectsHeroShell}>
          <section className={styles.heroGrid} data-testid="projects-hero">
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>MEUS PROJETOS</span>
              <h1
                className={styles.projectsHeroTitle}
                data-testid="projects-hero-title"
                aria-label="Ideias que saíram do papel."
              >
                <span className={styles.titleLine}>Ideias que saíram</span>
                <span className={styles.titleGradient}>do papel.</span>
              </h1>
              <div className={styles.heroTextBlock}>
                <p className={styles.heroDescription}>
                  Projetos construídos a partir de necessidades reais, combinando experiência
                  do usuário, organização técnica e visão de produto.
                </p>
                <p className={styles.heroSupport}>
                  Explore plataformas, sistemas, extensões e experimentos que representam
                  diferentes etapas da minha evolução.
                </p>
              </div>
            </div>

            <aside className={styles.overviewCard} data-testid="projects-overview-card">
              <span className={styles.overviewEyebrow}>VISÃO DO PORTFÓLIO</span>
              <div className={styles.overviewGrid}>
                {overviewStats.map((stat) => (
                  <div key={stat.label} className={styles.overviewItem}>
                    <span className={styles.overviewLabel}>{stat.label}</span>
                    <span className={styles.overviewValue}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </aside>
          </section>
        </div>
      }
    >
      <div className={styles.projectsBody}>
        <ProjectsShowcase projects={projects} />
      </div>
    </PortfolioPageShell>
  );
}
