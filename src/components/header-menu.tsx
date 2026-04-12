"use client";

import Link from "next/link";
import { useState } from "react";

type HeaderMenuItem = {
  href: string;
  label: string;
  external?: boolean;
};

type HeaderMenuProps = {
  items: HeaderMenuItem[];
};

export function HeaderMenu({ items }: HeaderMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="header-menu lg:hidden">
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-label={open ? "Fechar menu de navegação" : "Abrir menu de navegação"}
        title={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="menu-toggle__icon" aria-hidden="true">
          {open ? (
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
      </button>

      {open ? (
        <div className="menu-panel" role="menu" aria-label="Navegação móvel">
          {items.map((item) =>
            item.external ? (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className="menu-item"
                role="menuitem"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={`${item.href}-${item.label}`}
                href={item.href}
                className="menu-item"
                role="menuitem"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ),
          )}
        </div>
      ) : null}
    </div>
  );
}
