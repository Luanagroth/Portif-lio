import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";

const highlights = [
  "Organização e componentes",
  "Interfaces modernas e usáveis",
  "Projetos práticos e evolução contínua",
];

export function AboutSection() {
  return (
    <div className="home-section-frame grid gap-6 p-6 sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-8 xl:p-8">
      <SectionHeading
        eyebrow="Sobre mim"
        title="Trajetória full stack em construção, com base sólida em interface, produto e qualidade técnica."
        description="Minha formação em ADS e os projetos práticos do portfólio refletem uma evolução orientada a produto, experiência do usuário e estrutura de código consistente."
      />

      <div className="grid gap-4 sm:gap-5">
        <div className="surface-card p-6 sm:p-7 lg:p-8">
          <div className="space-y-4">
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-[--ink-soft]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={item}
              className={`surface-card flex min-h-36 items-start p-5 sm:min-h-40 sm:p-6 ${
                index === 1 ? "border-fuchsia-400/18 shadow-[0_0_26px_rgba(168,85,247,0.1)]" : ""
              }`}
            >
              <div className="flex min-h-16 w-full items-start sm:min-h-[4.75rem]">
                <p className="max-w-[13rem] text-lg font-semibold leading-7 text-[--ink] sm:max-w-[12rem] sm:text-[1.22rem]">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
