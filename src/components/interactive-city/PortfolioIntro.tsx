import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./PortfolioIntro.module.css";

export function PortfolioIntro() {
  return (
    <section data-testid="portfolio-intro" className={styles.intro}>
      <div className={styles.contentBlock}>
        <div className={styles.greeting}>Olá, visitante! 👋</div>
        <h1 data-testid="portfolio-intro-title" className={styles.title}>
          <span className={styles.titleFirstLine}>Explore meus</span>
          <span className={styles.titleAccent}>projetos.</span>
        </h1>

        <p className={styles.description}>
          Cada ponto no mapa representa algo que eu construí, aprendi e evoluí.
        </p>

        <Link
          href="/projetos"
          data-testid="portfolio-intro-projects-link"
          className={styles.projectsButton}
        >
          <span className={styles.projectsButtonDot} aria-hidden="true">
            ◉
          </span>
          <span>Ver projetos</span>
          <ArrowRight size={15} strokeWidth={1.9} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
