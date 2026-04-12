import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";

const iconMap = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5ZM.5 8h4V24h-4V8Zm7 0h3.84v2.18h.06c.53-1.01 1.84-2.08 3.78-2.08 4.04 0 4.78 2.66 4.78 6.12V24h-4v-7.8c0-1.86-.03-4.25-2.59-4.25-2.6 0-3 2.03-3 4.12V24h-4V8Z" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.18c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.69.08-.69 1.16.08 1.77 1.19 1.77 1.19 1.02 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.27 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a10.97 10.97 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.26 5.67.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  ),
  "E-mail": (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.1-.5L12 11.07 19.9 5H4.1ZM20 6.28l-7.39 5.67a1 1 0 0 1-1.22 0L4 6.28V18.5c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V6.28Z" />
    </svg>
  ),
} as const;

const subtitles = {
  LinkedIn: "Perfil profissional",
  GitHub: "Projetos e código",
  "E-mail": "Canal direto",
} as const;

export function ContactSection() {
  return (
    <div className="dark-panel home-section-frame grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:p-9">
      <SectionHeading
        eyebrow="Contato"
        title="Disponível para oportunidades em desenvolvimento web, projetos e conexões profissionais."
        description="A proposta final do portfólio é transmitir clareza, intenção estética e prontidão para contribuir em ambientes de produto com boa base técnica."
        invert
      />

      <div className="contact-cards-grid grid gap-4 md:grid-cols-3">
        {profile.socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
            className="contact-link-card rounded-[1.7rem] p-5 transition-transform duration-300"
          >
            <span
              className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white ${link.accent}`}
            >
              {iconMap[link.label]}
            </span>
            <p className="text-main mt-7 text-lg font-semibold">{link.label}</p>
            <p className="text-soft mt-2 text-sm leading-6">{subtitles[link.label]}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
