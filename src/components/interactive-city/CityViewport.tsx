import Image from "next/image";
import { MobileHomeDetails, MobileHomeIntro } from "./MobileHomePanels";
import styles from "./CityViewport.module.css";
import { InteractivePortfolioChrome } from "./InteractivePortfolioChrome";
import { MobilePannableStage } from "./MobilePannableStage";

export function CityViewport() {
  return (
    <main
      data-testid="city-viewport"
      className={`fixed inset-0 overflow-hidden bg-[#020617] ${styles.cityViewport}`}
    >
      <Image
        src="/images/city/city-map-v2.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        draggable={false}
        className={`pointer-events-none select-none ${styles.ambientMap}`}
      />
      <div
        data-testid="city-ambient-overlay"
        aria-hidden="true"
        className={styles.ambientOverlay}
      />
      <MobileHomeIntro />
      <MobilePannableStage />
      <div data-testid="city-hud-root" id="city-hud-root" className={styles.hudRoot} />
      <MobileHomeDetails />
      <InteractivePortfolioChrome />
    </main>
  );
}
