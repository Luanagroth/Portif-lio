import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  Frame,
  GitBranch,
  Globe2,
  Mail,
  Megaphone,
  MonitorSmartphone,
  Network,
  Wrench,
} from "lucide-react";
import { ContactQuoteForm } from "@/components/portfolio-pages/ContactQuoteForm";
import { PortfolioPageShell } from "@/components/portfolio-pages/PortfolioPageShell";
import {
  contactAudienceCards,
  contactAvailability,
  contactChannels,
  contactServices,
  projectTypeOptions,
  quickContact,
} from "@/data/contact";
import styles from "./contact-page.module.css";

export const metadata: Metadata = {
  title: "Contato | Luana Groth",
  description: "Entre em contato para oportunidades, projetos e solicitações de orçamento.",
};

const channelIcons = {
  email: Mail,
  linkedin: Network,
  github: GitBranch,
  portfolio: Globe2,
} as const;

const serviceIcons = {
  building: Building2,
  megaphone: Megaphone,
  frame: Frame,
  monitor: MonitorSmartphone,
  "bar-chart": BarChart3,
  wrench: Wrench,
} as const;

export default function ContactPage() {
  return (
    <PortfolioPageShell
      eyebrow="Contato"
      title="Vamos transformar ideias em soluções reais."
      description="Estou disponível para oportunidades profissionais, colaborações e desenvolvimento de novos projetos digitais."
      contentVariant="wide"
      heroContent={
        <div className={styles.contactMain}>
          <section className={`${styles.section} ${styles.heroGrid}`} data-testid="contact-hero">
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>CONTATO</span>
              <h1
                className={styles.contactTitle}
                aria-label="Vamos transformar ideias em soluções reais."
              >
                <span className={styles.titleLine}>Vamos transformar</span>
                <span className={styles.titleGradient}>ideias em soluções reais.</span>
              </h1>
              <p className={styles.heroDescription}>
                Estou disponível para oportunidades profissionais, colaborações e
                desenvolvimento de novos projetos digitais.
              </p>
              <p className={styles.heroSupportText}>
                Escolha abaixo a forma de contato mais adequada para você.
              </p>
            </div>

            <aside
              className={styles.availabilityCard}
              style={{ "--accent-color": "#8B5CF6" } as CSSProperties}
            >
              <span className={styles.panelEyebrow}>{contactAvailability.eyebrow}</span>
              <p className={styles.availabilityDescription}>{contactAvailability.description}</p>
              <div className={styles.availabilityList}>
                {contactAvailability.items.map((item) => (
                  <span key={item} className={styles.availabilityItem}>
                    {item}
                  </span>
                ))}
              </div>
            </aside>
          </section>
        </div>
      }
    >
      <div className={styles.contactMain}>
        <section className={`${styles.section} ${styles.audienceGrid}`} data-testid="contact-paths">
          {contactAudienceCards.map((card) => (
            <article
              key={card.id}
              className={styles.audienceCard}
              style={{ "--accent-color": card.accentColor } as CSSProperties}
            >
              <h2 className={styles.cardTitle}>{card.title}</h2>
              <p className={styles.cardDescription}>{card.description}</p>
              <div className={styles.audienceList}>
                {card.items.map((item) => (
                  <span key={item} className={styles.audienceItem}>
                    {item}
                  </span>
                ))}
              </div>
              <Link href={card.href} className={styles.cardCta}>
                <span>{card.ctaLabel}</span>
                {card.id === "budgets" ? (
                  <ArrowDownRight size={16} strokeWidth={1.9} aria-hidden="true" />
                ) : (
                  <ArrowUpRight size={16} strokeWidth={1.9} aria-hidden="true" />
                )}
              </Link>
            </article>
          ))}
        </section>

        <section className={styles.section} data-testid="contact-channels-section">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Escolha como falar comigo</h2>
            <p className={styles.sectionDescription}>
              Cada canal abaixo atende um tipo de conversa, desde oportunidades
              profissionais até análise de projeto e orçamento.
            </p>
          </div>

          <div className={styles.channelsGrid}>
            {contactChannels.map((channel) => {
              const Icon = channelIcons[channel.id];

              return (
                <a
                  key={channel.id}
                  href={channel.href}
                  data-testid={`contact-channel-${channel.id}`}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noreferrer noopener" : undefined}
                  className={styles.channelCard}
                  style={{ "--accent-color": channel.accentColor } as CSSProperties}
                >
                  <div className={styles.channelHeader}>
                    <div className={styles.channelMeta}>
                      <span className={styles.channelIcon}>
                        <Icon size={18} strokeWidth={1.9} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className={styles.channelLabel}>{channel.label}</h3>
                      </div>
                    </div>
                    {channel.external ? <ArrowUpRight size={16} aria-hidden="true" /> : null}
                  </div>
                  <p className={styles.channelDescription}>{channel.description}</p>
                  <span className={styles.channelLink}>
                    <span>Acessar canal</span>
                    <ArrowUpRight size={15} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        <section className={styles.section} data-testid="contact-services-section">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Como posso ajudar</h2>
            <p className={styles.sectionDescription}>
              Formatos de entrega que fazem sentido para negócios, profissionais e produtos
              digitais em evolução.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {contactServices.map((service) => {
              const Icon = serviceIcons[service.icon];

              return (
                <article
                  key={service.title}
                  className={styles.serviceCard}
                  style={{ "--accent-color": service.accentColor } as CSSProperties}
                >
                  <div className={styles.serviceHeader}>
                    <div className={styles.serviceMeta}>
                      <span className={styles.serviceIcon}>
                        <Icon size={18} strokeWidth={1.9} aria-hidden="true" />
                      </span>
                      <h3 className={styles.serviceTitle}>{service.title}</h3>
                    </div>
                  </div>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="orcamento" className={styles.section} data-testid="contact-quote-section">
          <div className={styles.quoteGrid}>
            <article
              className={styles.formPanel}
              style={{ "--accent-color": "#8B5CF6" } as CSSProperties}
            >
              <div className={styles.formPanelHeader}>
                <h2 className={styles.panelTitle}>Conte um pouco sobre o seu projeto</h2>
                <p className={styles.formDescription}>
                  Preencha as informações abaixo para organizar sua ideia e iniciar uma
                  conversa.
                </p>
              </div>

              <ContactQuoteForm projectTypes={projectTypeOptions} />
            </article>

            <aside
              className={styles.quickContact}
              data-testid="quick-contact-panel"
              style={{ "--accent-color": "#22D3EE" } as CSSProperties}
            >
              <h2 className={styles.panelTitle}>{quickContact.title}</h2>
              <p className={styles.quickDescription}>{quickContact.description}</p>
              <p className={styles.quickAvailability}>{quickContact.availability}</p>
              <div className={styles.quickContactList}>
                {quickContact.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={styles.quickLink}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer noopener" : undefined}
                  >
                    <span className={styles.quickLinkLabel}>{link.label}</span>
                    <span className={styles.quickLinkValue}>
                      <span>{link.value}</span>
                      {link.external ? (
                        <ArrowUpRight size={14} strokeWidth={1.9} aria-hidden="true" />
                      ) : null}
                    </span>
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </div>
    </PortfolioPageShell>
  );
}
