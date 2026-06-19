"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./InteractivePortfolioChrome.module.css";

const actionLinks = [
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
] as const;

const MOBILE_BREAKPOINT = "(max-width: 900px)";

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

export function HeaderActionLinks({ className }: { className: string }) {
  const pathname = usePathname();
  const isMobile = useIsMobileHeader();

  if (isMobile) {
    return null;
  }

  return (
    <div data-testid="header-action-links" className={className}>
      {actionLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            data-testid={`header-action-link-${link.label.toLowerCase()}`}
            aria-current={isActive ? "page" : undefined}
            className={[
              styles.headerActionLink,
              isActive ? styles.headerActionLinkActive : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
