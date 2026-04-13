import Link from "next/link";
import { profile } from "@/data/profile";

const proofPoints = ["4+ projetos reais", "CI/CD • Testes • Deploy"];

const highlights = [
  {
    label: "Abordagem",
    value: "Interfaces objetivas, bem resolvidas e prontas para evoluir.",
  },
  {
    label: "Foco atual",
    value: "Full stack com atenção à experiência, estrutura e sustentação da aplicação.",
  },
  {
    label: "Momento",
    value: "Construindo repertório com consistência e visão de produto digital.",
  },
];

export function Hero() {
  return (
    <section className="grid gap-5 lg:grid-cols-[minmax(0,1.02fr)_minmax(19rem,0.88fr)] lg:items-stretch xl:gap-5 2xl:grid-cols-[minmax(0,1fr)_minmax(20rem,0.84fr)]">
      <div className="hero-shell px-5 py-7 sm:px-7 sm:py-8 lg:px-8 lg:py-9 xl:px-9 xl:py-10">
        <div aria-hidden="true" className="hero-shell__glow" />
        <div aria-hidden="true" className="hero-shell__grid" />

        <div className="relative flex h-full flex-col gap-6 lg:gap-7">
          <div className="space-y-4">
            <span className="eyebrow accent-pill">{profile.role}</span>

            <div className="space-y-3">
              <h1 className="text-main max-w-[16ch] font-display text-4xl leading-[0.92] sm:text-5xl lg:text-[3.6rem] xl:text-[3.9rem] 2xl:text-[4rem]">
                {profile.name}
              </h1>
              <p className="text-main max-w-[34rem] text-base leading-7 sm:text-lg sm:leading-8 lg:max-w-[35rem] lg:text-[1.12rem]">
                {profile.tagline}
              </p>
              <p className="text-soft max-w-[32rem] text-sm leading-7 sm:text-base lg:max-w-[33rem] lg:text-[1.02rem]">
                {profile.heroSubtext}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {proofPoints.map((item) => (
              <span key={item} className="chip-muted rounded-full px-3.5 py-2 text-sm font-medium">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link className="button-primary" href="/projetos">
              Ver projetos
            </Link>
          </div>
        </div>
      </div>

      <aside className="hero-side-panel p-5 sm:p-6 lg:p-7">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.7),transparent)]"
        />

        <div className="relative flex h-full flex-col gap-5">
          <div className="space-y-3">
            <p className="text-muted text-xs font-semibold uppercase tracking-[0.28em]">
              Presença profissional
            </p>
            <h2 className="text-main font-display text-[2rem] leading-tight sm:text-[2.2rem]">
              Menos discurso. Mais entrega visível.
            </h2>
            <p className="text-soft text-sm leading-7">
              Uma apresentação direta para mostrar repertório prático, organização de código e
              evolução contínua em produtos digitais.
            </p>
          </div>

          <div className="grid gap-3.5">
            {highlights.map((item) => (
              <div key={item.label} className="subtle-card rounded-[1.3rem] p-4 sm:p-5">
                <p className="text-muted text-xs font-semibold uppercase tracking-[0.24em]">
                  {item.label}
                </p>
                <p className="text-main mt-3 text-[0.97rem] leading-7">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}
