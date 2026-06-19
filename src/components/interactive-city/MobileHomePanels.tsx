"use client";

import { useEffect, useState } from "react";
import {
  portfolioRecentActivity,
  portfolioSummaryMetrics,
} from "@/data/portfolio-hud";
import { PortfolioIntro } from "./PortfolioIntro";
import styles from "./MobileHomePanels.module.css";

const MOBILE_BREAKPOINT = "(max-width: 900px)";

function useIsMobileLayout() {
  const [isMobileLayout, setIsMobileLayout] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT);
    const syncLayoutMode = () => {
      setIsMobileLayout(mediaQuery.matches);
    };

    syncLayoutMode();
    mediaQuery.addEventListener("change", syncLayoutMode);

    return () => {
      mediaQuery.removeEventListener("change", syncLayoutMode);
    };
  }, []);

  return isMobileLayout;
}

export function MobileHomeIntro() {
  const isMobileLayout = useIsMobileLayout();

  if (!isMobileLayout) {
    return null;
  }

  return (
    <section
      data-testid="mobile-home-intro"
      aria-label="Introducao do portfolio"
      className={styles.mobileIntro}
    >
      <PortfolioIntro />
    </section>
  );
}

export function MobileHomeDetails() {
  const isMobileLayout = useIsMobileLayout();

  if (!isMobileLayout) {
    return null;
  }

  return (
    <section
      data-testid="mobile-home-details"
      aria-label="Informacoes do portfolio"
      className={styles.mobileDetails}
    >
      <div
        id="city-mobile-project-root"
        data-testid="city-mobile-project-root"
        className={styles.selectedProjectRoot}
      />

      <div className={styles.panelStack}>
        <section
          data-testid="mobile-portfolio-summary-panel"
          className={styles.panel}
          aria-label="Resumo do sistema"
        >
          <div className={styles.panelHeader}>
            <h2 className={styles.panelTitle}>Resumo do sistema</h2>
            <div className={styles.panelStatus}>
              <span className={styles.panelStatusDot} aria-hidden="true" />
              <span>Atualizado</span>
            </div>
          </div>

          <div className={styles.summaryGrid}>
            {portfolioSummaryMetrics.map((metric) => (
              <div
                key={metric.label}
                data-testid="mobile-portfolio-summary-metric"
                className={styles.summaryMetric}
                aria-label={`${metric.value} - ${metric.label}`}
              >
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section
          data-testid="mobile-portfolio-activity-panel"
          className={styles.panel}
          aria-label="Atividade recente"
        >
          <div className={styles.panelHeader}>
            <h2 className={styles.panelTitle}>Atividade recente</h2>
          </div>

          <div className={styles.activityList}>
            {portfolioRecentActivity.map((item) => (
              <div
                key={`${item.title}-${item.status}`}
                data-testid="mobile-portfolio-activity-item"
                className={styles.activityItem}
              >
                <div className={styles.activityCopy}>
                  <span className={styles.activityTitle}>{item.title}</span>
                  <span className={styles.activityDescription}>{item.description}</span>
                </div>
                <span className={styles.activityStatus}>{item.status}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
