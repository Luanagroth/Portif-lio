import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { InteractivePortfolioChrome } from "@/components/interactive-city/InteractivePortfolioChrome";
import styles from "./PortfolioPageShell.module.css";

type PortfolioPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  heroContent?: ReactNode;
  contentVariant?: "default" | "wide";
};

export function PortfolioPageShell({
  eyebrow,
  title,
  description,
  children,
  heroContent,
  contentVariant = "default",
}: PortfolioPageShellProps) {
  const pageShellStyle = {
    "--sidebar-width": "0px",
    "--header-height": "92px",
  } as CSSProperties;
  const scrollAreaStyle = {
    top: "var(--header-height)",
    left: "0",
  } as CSSProperties;
  const contentShellClassName =
    contentVariant === "wide"
      ? `${styles.contentShell} ${styles.contentShellWide}`
      : styles.contentShell;
  const contentInnerClassName =
    contentVariant === "wide"
      ? `${styles.contentInner} ${styles.contentInnerWide}`
      : styles.contentInner;

  return (
    <div className={styles.pageRoot}>
      <div className={styles.backgroundWrap} aria-hidden="true">
        <Image
          src="/images/city/city-map-v2.png"
          alt=""
          fill
          priority
          sizes="100vw"
          draggable={false}
          className={styles.backgroundImage}
        />
        <div className={styles.backgroundOverlay} />
      </div>

      <div data-testid="page-shell" className={styles.pageShell} style={pageShellStyle}>
        <InteractivePortfolioChrome variant="page" />

        <main
          data-testid="page-scroll-area"
          className={contentShellClassName}
          style={scrollAreaStyle}
        >
          <div className={contentInnerClassName}>
            {heroContent ? (
              <div className={styles.customHero}>{heroContent}</div>
            ) : (
              <header className={styles.hero}>
                <span className={styles.eyebrow}>{eyebrow}</span>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
              </header>
            )}

            <div className={styles.body}>{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
