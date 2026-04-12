import Image from "next/image";
import type { ProjectPreview } from "@/types/project";

type ProjectPreviewProps = {
  preview: ProjectPreview;
  priority?: boolean;
  className?: string;
  variant?: "default" | "project-page";
};

export function ProjectPreview({
  preview,
  priority = false,
  className = "",
  variant = "default",
}: ProjectPreviewProps) {
  if (preview.kind === "panel") {
    if (variant === "project-page") {
      return (
        <div
          className={`preview-panel project-preview-column relative overflow-hidden rounded-[2rem] p-4 lg:p-5 ${className}`}
        >
          <div className="absolute inset-x-4 top-4 h-px bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent" />
          <div className="grid gap-4 pt-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="accent-pill inline-flex rounded-full border px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.24em]">
                {preview.eyebrow}
              </span>
              {preview.stats?.slice(0, 3).map((stat) => (
                <span key={stat.label} className="chip-muted rounded-full px-3 py-1 text-xs font-medium">
                  {stat.label}
                </span>
              ))}
            </div>

            <div className="cityline-map-shell cityline-map-shell--showcase">
              <div className="cityline-map-grid" />
              <div className="cityline-map-line cityline-map-line--primary" />
              <div className="cityline-map-line cityline-map-line--secondary" />
              <div className="cityline-map-line cityline-map-line--accent" />

              {preview.mapLabels?.map((label, index) => (
                <span key={label} className={`cityline-stop cityline-stop--${(index % 4) + 1}`}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        className={`preview-panel project-preview-column relative overflow-hidden rounded-[2rem] p-5 lg:p-6 ${className}`}
      >
        <div className="absolute inset-x-5 top-5 h-px bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent" />
        <div className="grid h-full gap-5 pt-7">
          <div className="space-y-3">
            <span className="accent-pill inline-flex rounded-full border px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.24em]">
              {preview.eyebrow}
            </span>
            <h3 className="text-main max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
              {preview.title}
            </h3>
            {preview.description ? (
              <p className="text-soft max-w-2xl text-sm leading-7 sm:text-[1rem]">
                {preview.description}
              </p>
            ) : null}
          </div>

          {preview.stats?.length || preview.routes?.length || preview.mapLabels?.length ? (
            <div className="cityline-editorial grid h-full gap-4 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                {preview.stats?.map((stat) => (
                  <div key={stat.label} className="subtle-card rounded-[1.35rem] p-4">
                    <p className="text-muted text-[0.68rem] font-semibold uppercase tracking-[0.24em]">
                      {stat.label}
                    </p>
                    <p className="text-main mt-3 text-sm font-semibold leading-6">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="cityline-map-shell">
                <div className="cityline-map-grid" />
                <div className="cityline-map-line cityline-map-line--primary" />
                <div className="cityline-map-line cityline-map-line--secondary" />
                <div className="cityline-map-line cityline-map-line--accent" />

                {preview.mapLabels?.map((label, index) => (
                  <span key={label} className={`cityline-stop cityline-stop--${(index % 4) + 1}`}>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {preview.routes?.length ? (
            <div className="grid gap-3 sm:grid-cols-3">
              {preview.routes.map((route, index) => (
                <div key={route} className="subtle-card rounded-[1.35rem] p-4">
                  <span className="text-muted text-xs font-semibold uppercase tracking-[0.24em]">
                    Exemplo {index + 1}
                  </span>
                  <p className="text-main mt-3 text-sm font-semibold leading-6">{route}</p>
                </div>
              ))}
            </div>
          ) : null}

          <div className="grid gap-3 sm:grid-cols-3">
            {preview.bullets.map((bullet, index) => (
              <div key={bullet} className="subtle-card rounded-[1.35rem] p-4">
                <span className="text-muted text-xs font-semibold uppercase tracking-[0.24em]">
                  Recurso 0{index + 1}
                </span>
                <p className="text-soft mt-3 text-sm leading-7">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`project-preview-frame project-preview-column relative overflow-hidden rounded-[2rem] ${className}`}
    >
      <div className="absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-black/10 to-transparent" />
      <Image
        src={preview.src}
        alt={preview.alt}
        width={preview.width}
        height={preview.height}
        priority={priority}
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}
