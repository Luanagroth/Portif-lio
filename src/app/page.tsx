import Link from "next/link";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { HeaderMenu } from "@/components/header-menu";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ThemeToggle } from "@/components/theme-toggle";
import { getFeaturedProjects } from "@/lib/projects";

export default async function Home() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <div className="relative overflow-x-hidden">
      <div aria-hidden="true" className="page-aurora" />

      <div className="site-header-shell">
        <Container className="pt-4 sm:pt-5">
          <header className="glass-nav">
            <a href="#top" className="brand-signature" aria-label="Página inicial">
              <span className="text-main text-sm font-semibold uppercase tracking-[0.18em] sm:text-base">
                Luana Groth · Full Stack
              </span>
            </a>

            <div className="flex items-center gap-3">
              <nav
                aria-label="Navegação principal"
                className="text-muted hidden items-center gap-6 text-sm font-semibold lg:flex"
              >
                <a href="#sobre" className="nav-link">
                  Sobre
                </a>
                <a href="#habilidades" className="nav-link">
                  Habilidades
                </a>
                <Link href="/projetos" className="nav-link">
                  Projetos
                </Link>
                <a href="#contato" className="nav-link">
                  Contato
                </a>
              </nav>

              <HeaderMenu
                items={[
                  { href: "#sobre", label: "Sobre" },
                  { href: "#habilidades", label: "Habilidades" },
                  { href: "/projetos", label: "Projetos", external: true },
                  { href: "#contato", label: "Contato" },
                ]}
              />
              <ThemeToggle />
            </div>
          </header>
        </Container>
      </div>

      <main id="top" className="space-y-12 pb-14 pt-24 sm:space-y-16 sm:pb-16 sm:pt-28 lg:space-y-18 xl:pt-30">
        <Container>
          <Hero />
        </Container>

        <section className="themed-divider rounded-t-[2.5rem] border-t border-[var(--surface-card-border)] pt-12 sm:pt-14 lg:pt-16">
          <Container id="sobre">
            <AboutSection />
          </Container>

          <Container id="habilidades" className="pt-12 sm:pt-14 lg:pt-16">
            <SkillsSection />
          </Container>

          <Container id="projetos" className="pt-12 sm:pt-14 lg:pt-16">
            <ProjectsSection projects={featuredProjects} />
          </Container>

          <Container id="contato" className="py-12 sm:py-14 lg:py-16">
            <ContactSection />
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
