"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ProfileAvatar } from "@/components/shared/ProfileAvatar";
import styles from "./InteractivePortfolioChrome.module.css";

const MOBILE_BREAKPOINT = "(max-width: 900px)";

type ResponsiveBrandProps = {
  avatarSrc: string | null;
};

function useIsMobileHeader() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT);
    const sync = () => setIsMobile(mediaQuery.matches);

    sync();
    mediaQuery.addEventListener("change", sync);

    return () => {
      mediaQuery.removeEventListener("change", sync);
    };
  }, []);

  return isMobile;
}

export function ResponsiveBrand({ avatarSrc }: ResponsiveBrandProps) {
  const pathname = usePathname();
  const isMobile = useIsMobileHeader();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isMobile || !isMenuOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobile, isMenuOpen]);

  if (!isMobile) {
    return (
      <div data-testid="portfolio-brand" className={styles.pageBrand}>
        <ProfileAvatar
          src={avatarSrc}
          size="medium"
          animated
          className={styles.headerAvatar}
        />

        <div className={styles.brandCopy}>
          <div className={styles.brandName}>LUANA GROTH</div>
          <div className={styles.brandVersion}>Portfólio v2.0</div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      data-testid="portfolio-brand"
      className={`${styles.pageBrand} ${styles.pageBrandMobileWrap}`}
    >
      <button
        type="button"
        data-testid="brand-menu-button"
        aria-expanded={isMenuOpen}
        aria-controls={menuId}
        className={styles.brandButton}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <ProfileAvatar
          src={avatarSrc}
          size="medium"
          animated
          className={styles.headerAvatar}
        />

        <span className={styles.brandCopy}>
          <span className={styles.brandName}>LUANA GROTH</span>
          <span className={styles.brandVersion}>Portfólio v2.0</span>
        </span>

        <ChevronDown
          aria-hidden="true"
          size={14}
          strokeWidth={2}
          className={`${styles.brandButtonChevron} ${
            isMenuOpen ? styles.brandButtonChevronOpen : ""
          }`}
        />
      </button>

      {isMenuOpen ? (
        <div
          id={menuId}
          data-testid="brand-menu"
          className={styles.brandMenu}
          role="menu"
          aria-label="Menu da marca"
        >
          <div className={styles.brandMenuHeader}>
            <ProfileAvatar
              src={avatarSrc}
              size="medium"
              animated
              className={styles.brandMenuAvatar}
            />

            <div className={styles.brandMenuCopy}>
              <div className={styles.brandMenuName}>Luana Groth</div>
              <div className={styles.brandMenuSubtitle}>Portfólio v2.0</div>
            </div>
          </div>

          <div className={styles.brandMenuLinks}>
            <Link
              href="/sobre"
              role="menuitem"
              data-testid="brand-menu-link-sobre"
              aria-current={pathname === "/sobre" ? "page" : undefined}
              className={[
                styles.brandMenuLink,
                pathname === "/sobre" ? styles.brandMenuLinkActive : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Sobre</span>
            </Link>
            <Link
              href="/contato"
              role="menuitem"
              data-testid="brand-menu-link-contato"
              aria-current={pathname === "/contato" ? "page" : undefined}
              className={[
                styles.brandMenuLink,
                pathname === "/contato" ? styles.brandMenuLinkActive : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Contato</span>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
