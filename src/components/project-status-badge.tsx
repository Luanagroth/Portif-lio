import type { ProjectStatus } from "@/types/project";

type ProjectStatusBadgeProps = {
  status: ProjectStatus;
};

export function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
  const toneClass = status.tone === "active" ? "status-active" : "chip-muted";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.24em] ${toneClass}`}
    >
      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-current opacity-90" />
      {status.label}
    </span>
  );
}
