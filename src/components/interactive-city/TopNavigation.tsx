"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./TopNavigation.module.css";

type TopNavigationProps = {
  variant?: "overlay" | "page";
};

export function TopNavigation({ variant = "overlay" }: TopNavigationProps) {
  const pathname = usePathname();
  const navigationClassName =
    variant === "page"
      ? `${styles.topNavigation} ${styles.topNavigationPage}`
      : styles.topNavigation;

  return (
    <nav
      data-testid="top-navigation"
      className={navigationClassName}
      aria-label="Navegação superior"
    >
      <div className={styles.segmentedControl}>
        <Link
          href="/"
          data-testid="top-nav-link-cidade"
          aria-current={pathname === "/" ? "page" : undefined}
          className={[styles.segment, pathname === "/" ? styles.segmentActive : ""].join(" ")}
        >
          Cidade
        </Link>
        <Link
          href="/projetos"
          data-testid="top-nav-link-projetos"
          aria-current={pathname === "/projetos" ? "page" : undefined}
          className={[
            styles.segment,
            pathname === "/projetos" ? styles.segmentActive : "",
          ].join(" ")}
        >
          Projetos
        </Link>
      </div>
    </nav>
  );
}
