import type { ProjectTechnology, TechSlug } from "@/types/project";

type TechnologyBadgeProps = {
  technology: ProjectTechnology;
};

const techStyles: Record<
  TechSlug,
  { tint: string; ring: string; label: string }
> = {
  chrome: { tint: "from-emerald-400 to-yellow-300", ring: "border-emerald-300/30", label: "CH" },
  css: { tint: "from-sky-400 to-blue-500", ring: "border-sky-300/30", label: "CSS" },
  express: {
    tint: "from-zinc-300 to-stone-500",
    ring: "border-zinc-300/20",
    label: "EX",
  },
  eslint: { tint: "from-violet-400 to-indigo-500", ring: "border-violet-300/30", label: "ES" },
  leaflet: {
    tint: "from-emerald-300 to-lime-400",
    ring: "border-emerald-300/30",
    label: "LF",
  },
  "github-actions": {
    tint: "from-sky-300 to-cyan-400",
    ring: "border-cyan-300/30",
    label: "CI",
  },
  html: { tint: "from-orange-400 to-red-500", ring: "border-orange-300/30", label: "HTML" },
  jest: { tint: "from-rose-400 to-red-500", ring: "border-rose-300/30", label: "J" },
  javascript: {
    tint: "from-amber-300 to-yellow-400",
    ring: "border-amber-300/30",
    label: "JS",
  },
  next: { tint: "from-zinc-200 to-zinc-500", ring: "border-white/15", label: "N" },
  node: { tint: "from-lime-300 to-green-500", ring: "border-lime-300/30", label: "ND" },
  prisma: {
    tint: "from-slate-300 to-indigo-400",
    ring: "border-slate-300/25",
    label: "PR",
  },
  react: { tint: "from-cyan-300 to-sky-400", ring: "border-cyan-300/30", label: "R" },
  rtl: { tint: "from-pink-300 to-rose-400", ring: "border-pink-300/30", label: "TL" },
  sqlite: {
    tint: "from-blue-300 to-sky-500",
    ring: "border-blue-300/25",
    label: "SQ",
  },
  tailwind: {
    tint: "from-cyan-300 to-teal-400",
    ring: "border-cyan-300/30",
    label: "TW",
  },
  typescript: {
    tint: "from-blue-400 to-indigo-500",
    ring: "border-blue-300/30",
    label: "TS",
  },
  vercel: { tint: "from-white to-zinc-400", ring: "border-white/15", label: "V" },
  vite: { tint: "from-fuchsia-400 to-amber-300", ring: "border-fuchsia-300/30", label: "VT" },
  vitest: { tint: "from-lime-300 to-emerald-400", ring: "border-lime-300/30", label: "VS" },
  zod: { tint: "from-indigo-300 to-violet-400", ring: "border-indigo-300/30", label: "ZD" },
};

export function TechnologyBadge({ technology }: TechnologyBadgeProps) {
  const style = techStyles[technology.slug];

  return (
    <span
      className={`tech-badge inline-flex items-center gap-3 rounded-full border ${style.ring} px-3 py-2 text-sm`}
    >
      <span
        aria-hidden="true"
        className={`inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${style.tint} text-[0.62rem] font-extrabold uppercase tracking-[0.12em] text-slate-950`}
      >
        {style.label}
      </span>
      {technology.name}
    </span>
  );
}
