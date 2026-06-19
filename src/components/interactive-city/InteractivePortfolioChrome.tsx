import { getExistingProfileAvatar } from "@/lib/profile-assets.server";
import { ForceDarkTheme } from "./ForceDarkTheme";
import { HeaderActionLinks } from "./HeaderActionLinks";
import { MapCompass } from "./MapCompass";
import { ResponsiveBrand } from "./ResponsiveBrand";
import { TopNavigation } from "./TopNavigation";
import styles from "./InteractivePortfolioChrome.module.css";

type InteractivePortfolioChromeProps = {
  variant?: "overlay" | "page";
};

function BrandBlock() {
  const avatarSrc = getExistingProfileAvatar();

  return <ResponsiveBrand avatarSrc={avatarSrc} />;
}

function SharedChrome({ variant }: InteractivePortfolioChromeProps) {
  const isHome = variant === "overlay";

  return (
    <>
      <div
        data-testid="left-readability-gradient"
        aria-hidden="true"
        className={styles.readabilityGradient}
      />

      <div data-testid="portfolio-chrome" className={styles.pageChrome}>
        <header
          data-testid="fixed-page-header"
          className={[styles.pageHeader, isHome ? styles.homeHeader : styles.pageHeaderSolid]
            .filter(Boolean)
            .join(" ")}
        >
          <BrandBlock />

          <div className={styles.pageHeaderCenter}>
            <TopNavigation variant="page" />
          </div>

          <HeaderActionLinks className={styles.pageHeaderActions} />
        </header>

        <MapCompass />
      </div>
    </>
  );
}

export function InteractivePortfolioChrome({
  variant = "overlay",
}: InteractivePortfolioChromeProps) {
  return (
    <>
      <ForceDarkTheme />
      <SharedChrome variant={variant} />
    </>
  );
}
