"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { getDistrictProjectHref } from "./district-project-links";
import { DistrictLayer } from "./DistrictLayer";
import styles from "./InteractiveCityLayer.module.css";
import { LeftPortfolioHud } from "./LeftPortfolioHud";
import { MobileSelectedProjectCard } from "./MobileSelectedProjectCard";
import { ProjectDistrictCard } from "./ProjectDistrictCard";
import { districts } from "./districts";
import type { ActiveDistrictState, DistrictId, DistrictZone } from "./district-types";

const CLOSE_DELAY_MS = 140;
const DESKTOP_BREAKPOINT = "(min-width: 901px)";

export function InteractiveCityLayer() {
  const router = useRouter();
  const [activeDistrict, setActiveDistrict] = useState<ActiveDistrictState>(null);
  const [focusedDistrictId, setFocusedDistrictId] = useState<DistrictId | null>(null);
  const [hudRoot, setHudRoot] = useState<HTMLElement | null>(null);
  const [mobileProjectRoot, setMobileProjectRoot] = useState<HTMLElement | null>(null);
  const [isDesktopNavigationEnabled, setIsDesktopNavigationEnabled] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  function clearPendingClose() {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }

  function scheduleClose() {
    clearPendingClose();

    closeTimeoutRef.current = window.setTimeout(() => {
      closeTimeoutRef.current = null;
      setActiveDistrict(null);
    }, CLOSE_DELAY_MS);
  }

  function handleActivateDistrict(districtId: DistrictId, zone: DistrictZone) {
    clearPendingClose();
    setActiveDistrict((current) => {
      if (current?.districtId === districtId && current.zone === zone) {
        return current;
      }

      return { districtId, zone };
    });
  }

  function navigateToDistrictProject(districtId: DistrictId) {
    const projectHref = getDistrictProjectHref(districtId);

    if (!projectHref) {
      return;
    }

    clearPendingClose();
    router.push(projectHref);
  }

  useEffect(
    () => () => {
      clearPendingClose();
    },
    [],
  );

  useEffect(() => {
    queueMicrotask(() => {
      setHudRoot(document.getElementById("city-hud-root"));
      setMobileProjectRoot(document.getElementById("city-mobile-project-root"));
    });
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_BREAKPOINT);
    const syncDesktopNavigation = () => {
      setIsDesktopNavigationEnabled(mediaQuery.matches);
    };

    syncDesktopNavigation();
    mediaQuery.addEventListener("change", syncDesktopNavigation);

    return () => {
      mediaQuery.removeEventListener("change", syncDesktopNavigation);
    };
  }, []);

  const activeDistrictData = activeDistrict
    ? districts.find((district) => district.id === activeDistrict.districtId) ?? null
    : null;

  const districtCards = districts.map((district) => (
    <ProjectDistrictCard
      key={district.id}
      district={district}
      activeDistrict={activeDistrict}
      isKeyboardFocused={focusedDistrictId === district.id}
      isDesktopNavigationEnabled={isDesktopNavigationEnabled}
      onActivateExpandedDistrict={(districtId) => handleActivateDistrict(districtId, "inner")}
      onRequestClose={scheduleClose}
    />
  ));

  return (
    <>
      <DistrictLayer
        activeDistrict={activeDistrict}
        onActivateDistrict={handleActivateDistrict}
        onNavigateToDistrictProject={navigateToDistrictProject}
        onRequestClose={scheduleClose}
        onFocusDistrictChange={setFocusedDistrictId}
        isDesktopNavigationEnabled={isDesktopNavigationEnabled}
      />
      <LeftPortfolioHud />
      {hudRoot
        ? createPortal(
            <div className={styles.cardHudLayer}>
              <div className={styles.cardStage}>{districtCards}</div>
            </div>,
            hudRoot,
          )
        : null}
      {mobileProjectRoot
        ? createPortal(
            <MobileSelectedProjectCard
              activeDistrict={activeDistrict}
              district={activeDistrictData}
            />,
            mobileProjectRoot,
          )
        : null}
    </>
  );
}
