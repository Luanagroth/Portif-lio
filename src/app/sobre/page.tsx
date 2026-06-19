import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpenText,
  Download,
  GraduationCap,
  Layers3,
  Sparkles,
  Timeline,
} from "lucide-react";
import {
  aboutHeroContent,
  aboutStory,
  certificationItems,
  educationItems,
  featuredProjectCards,
  journeyItems,
  profileHighlights,
  resumeConfig,
  technologyGroups,
} from "@/data/about";
import { profile } from "@/data/profile";
import { getExistingProfileStoryImage } from "@/lib/profile-assets.server";
import { PortfolioPageShell } from "@/components/portfolio-pages/PortfolioPageShell";
import styles from "./about-page.module.css";

export const metadata: Metadata = {
  title: "Sobre | Luana Groth",
  description: "Formação, trajetória, tecnologias e experiência profissional de Luana Groth.",
};

export default function AboutPage() {
  const storyPhotoSrc = getExistingProfileStoryImage();

  return (
    <PortfolioPageShell
      eyebrow={aboutHeroContent.eyebrow}
      title={aboutHeroContent.title}
      description={aboutHeroContent.description}
      contentVariant="wide"
      heroContent={
        <section className={`${styles.section} ${styles.heroGrid}`} data-testid="about-hero">
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>{aboutHeroContent.eyebrow}</span>
            <h1 className={styles.heroTitle} aria-label={aboutHeroContent.title}>
              <span className={styles.heroTitleLine}>Transformando ideias em</span>
              <span className={styles.heroTitleGradient}>experiências digitais.</span>
            </h1>
            <p className={styles.heroDescription}>{aboutHeroContent.description}</p>
          </div>

          <aside className={styles.storyCard} data-testid="about-story-card">
            <div
              className={[
                styles.storyCardContent,
                storyPhotoSrc ? "" : styles.storyCardContentFull,
              ].join(" ")}
            >
              {storyPhotoSrc ? (
                <div className={styles.storyPhotoWrapper} data-testid="about-story-photo">
                  <Image
                    src={storyPhotoSrc}
                    alt="Foto profissional de Luana Groth"
                    fill
                    sizes="(max-width: 820px) 112px, 128px"
                    className={styles.storyPhoto}
                  />
                </div>
              ) : null}

              <div className={styles.storyCardInner}>
                <span className={styles.storyEyebrow}>{aboutStory.eyebrow}</span>
                <div className={styles.storyParagraphs}>
                  {aboutStory.paragraphs.map((paragraph) => (
                    <p key={paragraph} className={styles.storyParagraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </section>
      }
    >
      <section className={`${styles.section} ${styles.highlightsGrid}`} aria-label="Destaques">
        {profileHighlights.map((highlight) => (
          <article key={highlight.title} className={styles.highlightCard}>
            <h2 className={styles.highlightCardTitle}>{highlight.title}</h2>
            <p className={styles.highlightCardDescription}>{highlight.description}</p>
          </article>
        ))}
      </section>

      <section className={`${styles.section} ${styles.splitGrid}`}>
        <article className={styles.panel}>
          <div className={styles.panelHeader}>
            <Sparkles size={18} strokeWidth={1.9} className={styles.panelIcon} />
            <h2 className={styles.panelTitle}>Perfil profissional</h2>
          </div>
          <p className={styles.panelText}>{profile.about[0]}</p>
          <p className={styles.panelText}>{profile.about[1]}</p>
          <p className={`${styles.panelText} ${styles.interestText}`}>
            Tenho interesse em oportunidades, estágios e projetos que envolvam React,
            Next.js, TypeScript, construção de sistemas e interfaces com leitura clara de
            produto.
          </p>
        </article>

        <article className={`${styles.panel} ${styles.educationPanel}`}>
          <div className={styles.panelHeader}>
            <GraduationCap size={18} strokeWidth={1.9} className={styles.panelIcon} />
            <h2 className={styles.panelTitle}>Formação</h2>
          </div>
          {educationItems.map((item) => (
            <div key={item.title}>
              <h3 className={styles.courseTitle}>{item.title}</h3>
              <p className={styles.courseInstitution}>{item.institution}</p>
              <p className={styles.heroAccentText}>{item.status}</p>
              {item.description ? <p className={styles.courseDescription}>{item.description}</p> : null}
            </div>
          ))}
        </article>
      </section>

      <section className={`${styles.section} ${styles.stackGrid}`}>
        <article className={styles.panel}>
          <div className={styles.panelHeader}>
            <BookOpenText size={18} strokeWidth={1.9} className={styles.panelIcon} />
            <h2 className={styles.panelTitle}>Cursos e certificações</h2>
          </div>
          <div className={styles.courseGrid}>
            {certificationItems.map((item) => {
              const statusClassName =
                item.status === "Concluído"
                  ? `${styles.courseStatus} ${styles.courseStatusDone}`
                  : `${styles.courseStatus} ${styles.courseStatusProgress}`;

              return (
                <article key={item.title} className={styles.courseCard}>
                  <div className={styles.courseHeader}>
                    <div>
                      <h3 className={styles.courseTitle}>{item.title}</h3>
                      <p className={styles.courseInstitution}>{item.institution}</p>
                    </div>
                    <span className={statusClassName}>{item.status}</span>
                  </div>
                  {item.description ? (
                    <p className={styles.courseDescription}>{item.description}</p>
                  ) : null}
                </article>
              );
            })}
          </div>
        </article>

        <article className={`${styles.panel} ${styles.technologyPanel}`}>
          <div className={styles.panelHeader}>
            <Layers3 size={18} strokeWidth={1.9} className={styles.panelIcon} />
            <h2 className={styles.panelTitle}>Tecnologias</h2>
          </div>
          <div className={styles.technologyGroups}>
            {technologyGroups.map((group) => (
              <div key={group.title} className={styles.technologyGroup}>
                <h3 className={styles.technologyGroupTitle}>{group.title}</h3>
                <div className={styles.technologyChips}>
                  {group.items.map((item) => (
                    <span key={item} className={styles.technologyChip}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className={styles.section} data-testid="journey-timeline">
        <article className={styles.panel}>
          <div className={styles.panelHeader}>
            <Timeline size={18} strokeWidth={1.9} className={styles.panelIcon} />
            <h2 className={styles.panelTitle}>Experiência e trajetória</h2>
          </div>
          <div className={styles.timeline}>
            {journeyItems.map((item) => (
              <article key={item.title} className={styles.timelineItem}>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineDescription}>{item.description}</p>
                {item.related?.length ? (
                  <div className={styles.timelineRelated}>
                    {item.related.slice(0, 3).map((relatedItem) => (
                      <span key={relatedItem} className={styles.timelineTag}>
                        {relatedItem}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className={styles.section} data-testid="featured-projects">
        <div className={styles.featuredHeader}>
          <h2 className={styles.featuredTitle}>Projetos que representam minha evolução</h2>
          <p className={styles.featuredDescription}>
            Uma leitura mais direta dos projetos que melhor mostram produto, execução e
            amadurecimento técnico.
          </p>
        </div>

        <div className={styles.featuredGrid}>
          {featuredProjectCards.map((project) => (
            <article
              key={project.id}
              className={styles.featureCard}
              data-testid={`about-featured-project-${project.id}`}
              style={{ "--project-accent": project.accentColor } as CSSProperties}
            >
              <div className={styles.featureCardHeader}>
                <div>
                  <h3 className={styles.featureName}>{project.name}</h3>
                  <p className={styles.featureSubtitle}>{project.category}</p>
                </div>
                <span className={styles.featureStatus}>{project.status}</span>
              </div>

              <dl className={styles.featureStory}>
                <div className={styles.featureStoryBlock}>
                  <dt className={styles.featureStoryLabel}>Dor</dt>
                  <dd className={styles.featureStoryText}>{project.motivation}</dd>
                </div>
                <div className={styles.featureStoryBlock}>
                  <dt className={styles.featureStoryLabel}>Solução</dt>
                  <dd className={styles.featureStoryText}>{project.solution}</dd>
                </div>
                <div className={styles.featureStoryBlock}>
                  <dt className={styles.featureStoryLabel}>Evolução</dt>
                  <dd className={styles.featureStoryText}>{project.learning}</dd>
                </div>
              </dl>

              <div className={styles.featureTechList}>
                {project.technologies.map((technology) => (
                  <span key={technology} className={styles.featureTech}>
                    {technology}
                  </span>
                ))}
              </div>
              <Link href={project.href} className={styles.featureLink}>
                <span>Ver projeto</span>
                <ArrowUpRight size={15} strokeWidth={1.9} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <article className={styles.resumePanel}>
          <div>
            <div className={styles.panelHeader}>
              <Download size={18} strokeWidth={1.9} className={styles.panelIcon} />
              <h2 className={styles.resumeTitle}>Currículo profissional</h2>
            </div>
            <p className={styles.resumeDescription}>{resumeConfig.description}</p>
          </div>

          {resumeConfig.resumeUrl ? (
            <a href={resumeConfig.resumeUrl} className={styles.primaryButton} download>
              Baixar currículo
            </a>
          ) : (
            <div>
              <button
                type="button"
                disabled
                aria-disabled="true"
                className={styles.disabledButton}
              >
                {resumeConfig.unavailableLabel}
              </button>
              <span className={styles.disabledButtonCopy}>{resumeConfig.availableSoonLabel}</span>
            </div>
          )}
        </article>
      </section>
    </PortfolioPageShell>
  );
}
