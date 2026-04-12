import Link from "next/link";
import { Container } from "@/components/container";
import { HeaderMenu } from "@/components/header-menu";
import { ProjectSection } from "@/components/project-section";
import { ThemeToggle } from "@/components/theme-toggle";
import type { Project } from "@/types/project";

type ProjectPageProps = {
  projects: Project[];
};

export function ProjectPage({ projects }: ProjectPageProps) {
  return (
    <div className="relative overflow-x-hidden pb-20">
      <div aria-hidden="true" className="page-aurora" />

      <div className="site-header-shell">
        <Container className="pt-4 sm:pt-5">
          <header className="glass-nav">
            <Link href="/" className="brand-signature" aria-label="Voltar para a página inicial">
              <span className="text-main text-sm font-semibold uppercase tracking-[0.18em] sm:text-base">
                Luana Groth · Full Stack
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <nav
                aria-label="Navegação principal"
                className="text-muted hidden items-center gap-4 text-sm font-semibold lg:flex"
              >
                <Link href="/" className="nav-link">
                  Home
                </Link>
                <Link href="/projetos" className="nav-link">
                  Projetos
                </Link>
                <Link href="/#contato" className="nav-link">
                  Contato
                </Link>
              </nav>

              <HeaderMenu
                items={[
                  { href: "/", label: "Home", external: true },
                  { href: "/projetos", label: "Projetos", external: true },
                  { href: "/#contato", label: "Contato", external: true },
                ]}
              />
              <ThemeToggle />
            </div>
          </header>
        </Container>
      </div>

      <main className="space-y-10 pt-24 sm:space-y-14 sm:pt-28 lg:space-y-16 xl:pt-30">
        <Container>
          <section className="project-page-hero grid gap-6 overflow-hidden rounded-[2.4rem] px-5 py-8 sm:px-7 sm:py-10 lg:grid-cols-[1.15fr_0.85fr] xl:gap-8 xl:px-8 xl:py-11 2xl:grid-cols-[1.22fr_0.78fr]">
            <div className="max-w-[52rem] space-y-4">
              <span className="eyebrow accent-pill">Projetos</span>
              <div className="space-y-3">
                <h1 className="text-main font-display text-[2.2rem] leading-[0.96] sm:text-[2.7rem] lg:text-[3.15rem]">
                  Projetos tratados como produto, com contexto técnico, impacto e evidência de
                  execução.
                </h1>
                <p className="text-soft max-w-3xl text-[0.98rem] leading-7 sm:text-[1.04rem] sm:leading-8">
                  A vitrine abaixo prioriza leitura de produto real: cada case destaca proposta de
                  valor, imagem de interface, stack principal e sinais concretos de maturidade como
                  testes, arquitetura, CI/CD e deploy.
                </p>
              </div>
            </div>

            <div className="grid gap-3.5 self-end sm:grid-cols-3 lg:grid-cols-3">
              <div className="subtle-card rounded-[1.6rem] p-5">
                <p className="text-muted text-xs font-semibold uppercase tracking-[0.24em]">
                  Total de cases
                </p>
                <p className="text-main mt-3 font-display text-4xl sm:text-[2.8rem]">{projects.length}</p>
              </div>
              <div className="subtle-card rounded-[1.6rem] p-5">
                <p className="text-muted text-xs font-semibold uppercase tracking-[0.24em]">
                  Deploy / loja
                </p>
                <p className="text-soft mt-3 text-lg leading-7">
                  Produtos publicados em produção e Chrome Web Store.
                </p>
              </div>
              <div className="subtle-card rounded-[1.6rem] p-5">
                <p className="text-muted text-xs font-semibold uppercase tracking-[0.24em]">
                  Sinais de qualidade
                </p>
                <p className="text-soft mt-3 text-lg leading-7">
                  Testes, App Router, arquitetura em camadas e pipelines de entrega.
                </p>
              </div>
            </div>
          </section>
        </Container>

        <Container id="lista-projetos" className="project-page-list space-y-5 sm:space-y-6">
          {projects.map((project, index) => (
            <ProjectSection key={project.slug} project={project} index={index} />
          ))}
        </Container>
      </main>
    </div>
  );
}
