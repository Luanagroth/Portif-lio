"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  window.localStorage.setItem(STORAGE_KEY, theme);
}

function readDocumentTheme(): Theme {
  const rootTheme = document.documentElement.dataset.theme;
  return rootTheme === "light" ? "light" : "dark";
}

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setTheme(readDocumentTheme());
      setMounted(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const nextTheme: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={mounted ? `Ativar modo ${nextTheme === "dark" ? "escuro" : "claro"}` : "Alternar tema"}
      title={mounted ? `Ativar modo ${nextTheme === "dark" ? "escuro" : "claro"}` : "Alternar tema"}
      onClick={() => {
        if (!mounted) {
          return;
        }

        applyTheme(nextTheme);
        setTheme(nextTheme);
      }}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {!mounted ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
            <path
              d="M4 12h16M12 4v16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : theme === "dark" ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
            <path
              d="M12 3.75v1.5M12 18.75v1.5M5.64 5.64l1.06 1.06M17.3 17.3l1.06 1.06M3.75 12h1.5M18.75 12h1.5M5.64 18.36l1.06-1.06M17.3 6.7l1.06-1.06M15.75 12a3.75 3.75 0 1 1-7.5 0a3.75 3.75 0 0 1 7.5 0Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </button>
  );
}
