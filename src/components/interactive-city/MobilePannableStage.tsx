"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./CityViewport.module.css";
import { InteractiveCityLayer } from "./InteractiveCityLayer";

const MOBILE_BREAKPOINT = "(max-width: 900px)";

export function MobilePannableStage() {
  const stageScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT);

    if (!mediaQuery.matches) {
      return;
    }

    const centerScrollableMap = () => {
      const stageScroll = stageScrollRef.current;

      if (!stageScroll) {
        return;
      }

      stageScroll.scrollLeft = Math.max(
        (stageScroll.scrollWidth - stageScroll.clientWidth) / 2,
        0,
      );
    };

    const frameId = window.requestAnimationFrame(centerScrollableMap);
    window.addEventListener("resize", centerScrollableMap);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", centerScrollableMap);
    };
  }, []);

  return (
    <div data-testid="city-stage" className={styles.stageRoot}>
      <div
        ref={stageScrollRef}
        data-testid="city-stage-scroll"
        className={styles.stageScroll}
      >
        <div className={styles.stageCanvas}>
          <div className={`select-none ${styles.stage} ${styles.stageMap}`}>
            <Image
              src="/images/city/city-map-v2.png"
              alt="Cidade interativa com os projetos do portfólio"
              fill
              priority
              sizes="100vw"
              draggable={false}
              className="pointer-events-none select-none object-cover"
            />
          </div>
          <div
            data-testid="interactive-stage-overlay"
            className={`${styles.stage} ${styles.stageOverlay}`}
          >
            <InteractiveCityLayer />
          </div>
        </div>
      </div>
      <p data-testid="city-map-pan-hint" className={styles.panHint}>
        Mova o mapa para ver todos os distritos.
      </p>
    </div>
  );
}
