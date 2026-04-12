import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";

export function SkillsSection() {
  return (
    <div className="home-section-frame section-shell p-6 sm:p-7 xl:p-8">
      <div className="skills-section-layout gap-6 xl:items-start xl:gap-8">
        <SectionHeading
          eyebrow="Habilidades"
          title="Stack organizada por função, com leitura mais clara e apresentação consistente."
          description="Cada grupo mostra como as ferramentas se conectam à forma como Luana constrói interfaces, estrutura o código e sustenta evolução técnica."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
          {profile.skillGroups.map((group, index) => (
            <article
              key={group.title}
              className={`surface-card flex h-full min-h-[21rem] flex-col p-5 sm:min-h-[22rem] sm:p-6 lg:p-7 ${
                index === 1
                  ? "border-fuchsia-400/18 shadow-[0_0_28px_rgba(168,85,247,0.1)]"
                  : index === 2
                    ? "border-cyan-400/18 shadow-[0_0_28px_rgba(56,189,248,0.1)]"
                    : ""
              }`}
            >
              <div className="flex flex-col items-start gap-4">
                <div className="icon-tile flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.2rem] text-2xl">
                  <span aria-hidden="true">{group.icon}</span>
                </div>

                <div className="w-full space-y-2">
                  <h3 className="text-main max-w-[12rem] text-[1.32rem] font-semibold leading-[1.14] sm:max-w-[13rem] sm:text-[1.52rem]">
                    {group.title}
                  </h3>
                  <p className="text-soft max-w-[18rem] text-sm leading-7">{group.description}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-1 content-start flex-wrap gap-3">
                {group.items.map((item) => (
                  <span key={item} className="skill-pill rounded-full px-4 py-2 text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
