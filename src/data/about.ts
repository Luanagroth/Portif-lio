export type EducationItem = {
  title: string;
  institution: string;
  status: string;
  description?: string;
};

export type CertificationItem = {
  title: string;
  institution: string;
  status: string;
  description?: string;
};

export type JourneyItem = {
  title: string;
  description: string;
  related?: string[];
};

export type TechnologyGroup = {
  title: string;
  items: string[];
};

export type ProfileHighlight = {
  title: string;
  description: string;
};

export type AboutFeaturedProject = {
  id: "movi" | "atlas" | "essenza" | "farol";
  name: string;
  category: string;
  motivation: string;
  solution: string;
  learning: string;
  technologies: string[];
  status: string;
  href: string;
  accentColor: string;
  sourceSlug?: string;
};

export type AboutHeroContent = {
  eyebrow: string;
  title: string;
  description: string;
};

export type AboutStory = {
  eyebrow: string;
  paragraphs: string[];
};

export const aboutHeroContent: AboutHeroContent = {
  eyebrow: "ME CONHEÇA MELHOR",
  title: "Transformando ideias em experiências digitais.",
  description:
    "Sou Luana Groth, desenvolvedora Front-end e Full Stack em desenvolvimento. Crio soluções digitais funcionais, intuitivas e construídas a partir de necessidades reais.",
};

export const aboutStory: AboutStory = {
  eyebrow: "Minha história",
  paragraphs: [
    "Minha transição para a tecnologia começou com a vontade de transformar ideias e problemas reais em soluções que pudessem facilitar a vida das pessoas.",
    "Atualmente curso Análise e Desenvolvimento de Sistemas e concluí minha formação Front-end pela EBAC. Sigo ampliando meus conhecimentos na formação Full Stack Java, estudando backend, arquitetura, bancos de dados e qualidade de software.",
    "Foi construindo projetos independentes que passei a unir aprendizado técnico, experiência do usuário e visão de produto. Cada solução do meu portfólio representa uma etapa dessa evolução: identificar uma necessidade, planejar uma resposta e transformá-la em uma aplicação funcional.",
  ],
};

export const educationItems: EducationItem[] = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Uniasselvi",
    status: "Cursando",
    description:
      "Formação direcionada a produto, arquitetura de aplicações e construção de soluções digitais consistentes.",
  },
];

export const certificationItems: CertificationItem[] = [
  {
    title: "Formação Front-end",
    institution: "EBAC",
    status: "Concluído",
    description:
      "Base prática em interfaces modernas, responsividade e construção de experiências digitais.",
  },
  {
    title: "Full Stack Java",
    institution: "EBAC",
    status: "Em andamento",
    description:
      "Formação em evolução para ampliar repertório de backend, arquitetura e desenvolvimento full stack.",
  },
];

export const technologyGroups: TechnologyGroup[] = [
  {
    title: "Front-end",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Back-end",
    items: ["Node.js", "Express"],
  },
  {
    title: "Banco de dados",
    items: ["Prisma", "SQLite"],
  },
  {
    title: "Testes e qualidade",
    items: ["Vitest", "Jest", "Testing Library", "ESLint", "CI/CD"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "GitHub", "Vercel", "GitHub Actions"],
  },
];

export const journeyItems: JourneyItem[] = [
  {
    title: "Transição para tecnologia",
    description:
      "Construindo uma trajetória em desenvolvimento com foco em produto, clareza visual e qualidade técnica.",
    related: ["Base sólida em interfaces", "Estudo contínuo", "Leitura de produto"],
  },
  {
    title: "Projetos independentes",
    description:
      "Desenvolvimento de soluções reais como MOVI, FlowTrack, Essenza Bistrô e extensões publicadas.",
    related: ["Portfólio autoral", "Problemas reais", "Entrega visual e técnica"],
  },
  {
    title: "Evolução full stack",
    description:
      "Estudos contínuos em frontend, backend, arquitetura e testes para assumir desafios cada vez mais completos.",
    related: ["React e Next.js", "APIs e persistência", "Qualidade e testes"],
  },
];

export const profileHighlights: ProfileHighlight[] = [
  {
    title: "Formação em ADS",
    description: "Base em sistemas, estrutura e produto.",
  },
  {
    title: "Front-end - EBAC",
    description: "Interfaces, responsividade e experiência.",
  },
  {
    title: "Full Stack em andamento",
    description: "Backend, arquitetura e evolução técnica.",
  },
  {
    title: "Projetos independentes",
    description: "Produtos autorais com leitura real de uso.",
  },
];

export const featuredProjectCards: AboutFeaturedProject[] = [
  {
    id: "movi",
    name: "MOVI",
    category: "Mobilidade urbana",
    motivation: "Informações de transporte fragmentadas e difíceis de consultar.",
    solution: "Uma plataforma pública com linhas, horários, mapas e dados reais.",
    learning: "Integração de dados, mapas, autenticação, testes e experiência mobile.",
    technologies: ["Next.js", "TypeScript", "Leaflet"],
    status: "Publicado e em evolução",
    href: "/projetos",
    accentColor: "#38BDF8",
    sourceSlug: "movi",
  },
  {
    id: "atlas",
    name: "Atlas",
    category: "Auditoria e conformidade",
    motivation: "Processos de auditoria espalhados, difíceis de acompanhar e priorizar.",
    solution: "Uma experiência de gestão para auditorias, planos, evidências e operação.",
    learning: "Modelagem de fluxos internos, hierarquia de sistema e clareza operacional.",
    technologies: ["Next.js", "React", "TypeScript"],
    status: "Conceito aplicado ao portfólio",
    href: "/projetos",
    accentColor: "#8B5CF6",
  },
  {
    id: "essenza",
    name: "Essenza",
    category: "Microfrontends",
    motivation: "Separar jornadas públicas e internas sem perder integração de produto.",
    solution: "Uma plataforma modular para operação, atendimento, reservas e cardápio.",
    learning: "Arquitetura em microfrontends, integração de domínios e deploy distribuído.",
    technologies: ["React", "Webpack", "Prisma"],
    status: "Projeto publicado",
    href: "/projetos",
    accentColor: "#EC4899",
    sourceSlug: "essenza-bistro",
  },
  {
    id: "farol",
    name: "Farol",
    category: "Gestão para negócios",
    motivation: "Pequenos negócios precisam visualizar operação com menos fricção.",
    solution: "Um painel para organizar vendas, estoque e indicadores de forma mais legível.",
    learning: "Leitura de produto, organização de dados e design de dashboard orientado a uso.",
    technologies: ["Next.js", "Node.js", "Prisma"],
    status: "Distrito conceitual do portfólio",
    href: "/projetos",
    accentColor: "#2DD4BF",
  },
];

export const resumeConfig = {
  resumeUrl: "/Curriculo_Luana_Groth_Estagio.pdf" as string | null,
  plannedHref: "/documents/curriculo-luana-groth.pdf",
  unavailableLabel: "Currículo em atualização",
  availableSoonLabel: "Disponível em breve",
  description:
    "Formação, experiências, cursos, tecnologias e projetos reunidos em um documento.",
} as const;
