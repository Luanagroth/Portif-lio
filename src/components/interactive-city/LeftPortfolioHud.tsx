"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  portfolioRecentActivity,
  portfolioSummaryMetrics,
} from "@/data/portfolio-hud";
import { PortfolioIntro } from "./PortfolioIntro";
import styles from "./LeftPortfolioHud.module.css";

export function LeftPortfolioHud() {
  const [hudRoot, setHudRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    queueMicrotask(() => {
      setHudRoot(document.getElementById("city-hud-root"));
    });
  }, []);

  if (!hudRoot) {
    return null;
  }

  return createPortal(
    <div data-testid="left-portfolio-hud" className={styles.leftHud}>
      <div className={styles.contentColumn}>
        <div className={styles.brandSpacer} aria-hidden="true" />

        <div className={styles.introShell}>
          <PortfolioIntro />
        </div>

        <div className={styles.panelGroup}>
          <section
            data-testid="portfolio-summary-panel"
            className={[styles.panel, styles.summaryPanel].join(" ")}
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
                  data-testid="portfolio-summary-metric"
                  className={styles.summaryMetric}
                  aria-label={`${metric.value} — ${metric.label}`}
                >
                  <span className={styles.metricValue}>{metric.value}</span>
                  <span className={styles.metricLabel}>{metric.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section
            data-testid="portfolio-activity-panel"
            className={[styles.panel, styles.activityPanel].join(" ")}
            aria-label="Atividade recente"
          >
            <div className={styles.panelHeader}>
              <h2 className={styles.panelTitle}>Atividade recente</h2>
            </div>

            <div className={styles.activityList}>
              {portfolioRecentActivity.map((item) => (
                <div
                  key={`${item.title}-${item.status}`}
                  data-testid="portfolio-activity-item"
                  className={styles.activityItem}
                >
                  <div className={styles.activityCopy}>
                    <span className={styles.activityTitle}>{item.title}</span>
                    <span className={styles.activitySeparator}>—</span>
                    <span className={styles.activityDescription}>
                      {item.description}
                    </span>
                  </div>
                  <span className={styles.activityStatus}>{item.status}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>,
    hudRoot,
  );
}
