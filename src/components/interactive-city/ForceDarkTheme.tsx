"use client";

import { useEffect } from "react";

export function ForceDarkTheme() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = "dark";
    root.style.colorScheme = "dark";
  }, []);

  return null;
}
