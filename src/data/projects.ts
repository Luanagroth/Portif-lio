import type { ProjectManual } from "@/types/project";

const githubRaw = (repository: string, path: string) =>
  `https://raw.githubusercontent.com/Luanagroth/${repository}/main/${path}`;

export const manualProjects: ProjectManual[] = [
  {
    slug: "cityline",
    name: "CityLine - Mobilidade urbana em um só lugar",
    category: "Mobilidade Urbana",
    status: {
      label: "Em desenvolvimento ativo",
      tone: "active",
    },
    shortDescription:
      "Plataforma de mobilidade urbana para consultar linhas, horários, tarifas e paradas com mais clareza em uma única interface.",
    summary:
      "CityLine reúne informações essenciais de transporte em uma interface única, deixando mais claro como encontrar linhas, consultar horários, entender tarifas e se orientar por mapa.",
    professionalDescription:
      "O projeto combina frontend, backend e organização de dados com foco em utilidade real para mobilidade urbana, transformando informações dispersas em um produto mais acessível para qualquer usuário.",
    featured: true,
    preview: {
      kind: "panel",
      alt: "Preview do CityLine mostrando consulta de linhas e horários, informações de tarifas e paradas, além de orientação visual por mapa.",
      eyebrow: "Projeto principal",
      title: "CityLine - Mobilidade urbana em um só lugar",
      description: "Consulte linhas, horários, tarifas e pontos de parada com apoio visual em mapa.",
      bullets: [
        "Linhas e horários para encontrar rapidamente a opção de deslocamento desejada.",
        "Tarifas e paradas organizadas de forma direta para reduzir dúvidas na consulta.",
        "Mapa para orientação visual e contexto espacial antes de sair de casa.",
      ],
      stats: [
        { label: "Linhas e horários", value: "Consulta rápida por linha e faixa de saída" },
        { label: "Tarifas e paradas", value: "Valores e pontos de embarque em leitura direta" },
        { label: "Mapa para orientação", value: "Apoio visual para localizar paradas e trajetos" },
      ],
      routes: ["Linha Azul 204", "Circular Centro", "Intermunicipal Norte"],
      mapLabels: ["Terminal Central", "Rodoviária", "Universidade", "Hospital"],
    },
    technologies: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "next" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind CSS", slug: "tailwind" },
      { name: "Leaflet", slug: "leaflet" },
      { name: "Node.js", slug: "node" },
      { name: "Express", slug: "express" },
      { name: "Prisma", slug: "prisma" },
      { name: "SQLite", slug: "sqlite" },
      { name: "Vitest", slug: "vitest" },
    ],
    differentiators: [
      "Centraliza informações de transporte em um único lugar.",
      "Facilita a consulta de linhas e horários do dia a dia.",
      "Deixa tarifas e paradas mais fáceis de entender.",
      "Usa mapa para orientar o trajeto com apoio visual.",
    ],
    impactPoints: [
      "Transforma informação dispersa de transporte em uma consulta mais clara para o dia a dia.",
      "Mostra capacidade de estruturar frontend, backend e dados em torno de um problema real de uso.",
      "Cria uma base técnica pronta para crescer como plataforma de mobilidade entre cidades.",
    ],
    architectureNotes: {
      title: "Arquitetura e decisões",
      points: [
        "Frontend em Next.js com componentes focados em leitura rápida da consulta e navegação mais acessível.",
        "Backend em Express com Prisma para organizar entidades como linhas, horários, tarifas e pontos de parada.",
        "Modelagem pensada para começar simples, mas preparada para evoluir com novas cidades, filtros e mapas.",
      ],
    },
    metrics: ["Linhas e horários", "Tarifas e paradas", "Mapa interativo"],
    repositoryUrl: "https://github.com/Luanagroth/CityLine",
    repositoryLabel: "Ver código",
    readmeUrl: "https://github.com/Luanagroth/CityLine",
  },
  {
    slug: "palavri-metro",
    name: "Palavri-metro",
    category: "Chrome Extension",
    shortDescription:
      "Análise textual local no navegador para leitura crítica, SEO e revisão editorial.",
    summary:
      "Extensão para Google Chrome que transforma páginas e seleções em relatórios rápidos de frequência de palavras, idioma e recorrência sem depender de backend.",
    professionalDescription:
      "O Palavri-metro foi estruturado como um produto enxuto, mas com sinais claros de maturidade técnica: motor de análise modular, foco em privacidade por execução local, suporte multilíngue e experiência orientada a uso recorrente no navegador. O resultado é uma ferramenta com utilidade prática imediata para pesquisa, estudo e análise de conteúdo.",
    featured: false,
    preview: {
      kind: "image",
      src: githubRaw("Palavri-metro", "assets/screenshots/pt-page.png"),
      alt: "Tela da extensão Palavri-metro mostrando análise de frequência de palavras em uma página.",
      width: 1600,
      height: 1000,
    },
    technologies: [
      { name: "JavaScript", slug: "javascript" },
      { name: "HTML5", slug: "html" },
      { name: "CSS3", slug: "css" },
      { name: "Chrome API", slug: "chrome" },
      { name: "Node Test", slug: "node" },
    ],
    differentiators: [
      "Execução 100% local no navegador, sem envio de conteúdo para serviços externos.",
      "Motor de análise desacoplado da interface, facilitando manutenção e evolução incremental.",
      "Detecção automática de idioma com suporte a português, inglês e espanhol.",
      "Testes unitários cobrindo normalização, tokenização, filtro de stopwords e cenários de idioma.",
    ],
    impactPoints: [
      "Reduz o tempo de leitura exploratória em páginas longas com resumo imediato de termos-chave.",
      "Demonstra cuidado com privacidade e escopo de permissões ao operar com `activeTab`, `scripting` e `storage`.",
      "Funciona como case técnico de extensão Chrome com foco em utilidade real, não apenas prova de conceito.",
    ],
    metrics: ["Manifest V3", "6 testes", "Chrome Web Store"],
    repositoryUrl: "https://github.com/Luanagroth/Palavri-metro",
    demoUrl: "https://chromewebstore.google.com/detail/mlclmnddpiindgejpacchiapplmnmaek",
    demoLabel: "Ver extensão",
    readmeUrl: "https://github.com/Luanagroth/Palavri-metro/blob/main/README.md",
  },
  {
    slug: "extension-guard",
    name: "Extension Guard",
    category: "Segurança e Privacidade",
    shortDescription:
      "Auditoria local de extensões instaladas com score heurístico de risco e side panel executivo.",
    summary:
      "Extensão Chrome pensada como produto de segurança: analisa permissões sensíveis, explica o risco encontrado e organiza auditorias em uma interface profissional.",
    professionalDescription:
      "O Extension Guard transforma um tema técnico e geralmente opaco em uma experiência legível para tomada de decisão. A aplicação separa claramente domínio, adapters, persistência e interface React, o que reforça testabilidade, escalabilidade e consistência entre background, side panel e armazenamento local.",
    featured: false,
    preview: {
      kind: "image",
      src: githubRaw("Extension-Guard", "docs/images/overview.png"),
      alt: "Visão geral da interface do Extension Guard em side panel com resumo de risco.",
      width: 1600,
      height: 1000,
    },
    technologies: [
      { name: "React 19", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Vite", slug: "vite" },
      { name: "Tailwind", slug: "tailwind" },
      { name: "Vitest", slug: "vitest" },
      { name: "Zod", slug: "zod" },
    ],
    differentiators: [
      "Arquitetura em camadas com separação entre domínio, adapters, repositories e UI.",
      "Score heurístico explicável, com recomendações textuais e leitura executiva das permissões.",
      "Persistência local de auditorias e configurações com repositories dedicados.",
      "Cobertura de testes unitários, de integração e de componente.",
    ],
    impactPoints: [
      "Traduz permissões técnicas em sinais acionáveis para o usuário, melhorando clareza e confiança.",
      "Mostra domínio de produtos Chrome mais complexos, com múltiplas entradas e service worker.",
      "Evidencia disciplina de engenharia com tipagem forte, validação em runtime e desenho orientado à manutenção.",
    ],
    metrics: ["Manifest V3", "Arquitetura em camadas", "Histórico local"],
    repositoryUrl: "https://github.com/Luanagroth/Extension-Guard",
    demoUrl: "https://chromewebstore.google.com/detail/jihknbnaipjpaeffdmpfiiicpmmlkjdb",
    demoLabel: "Ver extensão",
    readmeUrl: "https://github.com/Luanagroth/Extension-Guard/blob/main/README.md",
  },
  {
    slug: "flowtrack",
    name: "FlowTrack",
    category: "Produtividade SaaS",
    shortDescription:
      "Aplicação de produtividade com tarefas, hábitos e foco diário em uma experiência prática e evolutiva.",
    summary:
      "Aplicação de produtividade com abordagem prática para organização de tarefas, hábitos e foco diário. Inclui gestão de tarefas, acompanhamento de hábitos e timer Pomodoro, com persistência local e estrutura preparada para evolução como produto SaaS.",
    professionalDescription:
      "Foco em organização de estado, componentização e experiência do usuário em cenários reais.",
    featured: true,
    preview: {
      kind: "image",
      src: "/images/flowtrack-dashboard.png",
      alt: "Dashboard do FlowTrack com visão de produtividade, hábitos, tarefas e foco diário.",
      width: 792,
      height: 881,
    },
    technologies: [
      { name: "Next.js", slug: "next" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind", slug: "tailwind" },
      { name: "Jest", slug: "jest" },
      { name: "RTL", slug: "rtl" },
      { name: "GitHub Actions", slug: "github-actions" },
      { name: "Vercel", slug: "vercel" },
    ],
    differentiators: [
      "Produto multi-feature com tarefas, hábitos, metas e pomodoro em uma linguagem SaaS coesa.",
      "Hooks reutilizáveis para persistência local, relógio em tempo real e timer com notificações.",
      "Pipeline de CI/CD com lint, testes e build antes do deploy em produção.",
      "Base preparada para evolução futura com backend, autenticação e analytics.",
    ],
    impactPoints: [
      "Traduz um problema real de foco e disciplina em jornada clara e responsiva.",
      "Abre conversa técnica sobre trade-offs entre localStorage, backend futuro e experiência offline.",
      "Reforça capacidade de entregar produto e não apenas tela isolada.",
    ],
    metrics: ["Deploy ativo", "GitHub Actions", "App Router"],
    repositoryUrl: "https://github.com/Luanagroth/flowtrack",
    demoUrl: "https://flowtrack-seven.vercel.app",
    readmeUrl: "https://github.com/Luanagroth/flowtrack/blob/main/README.md",
  },
  {
    slug: "testes-unitarios",
    name: "Testes Unitários",
    category: "Next.js Full Stack",
    shortDescription:
      "Aplicação de tarefas com App Router, API local e persistência em JSON para demonstrar base full stack.",
    summary:
      "Projeto focado em organização arquitetural, contratos tipados e testes automatizados para uma experiência CRUD completa em Next.js.",
    professionalDescription:
      "Este case organiza frontend, backend e persistência local de forma didática, mas profissional. A estrutura separa componentes, hooks, rotas de API e camada de dados, criando uma base sólida para discutir escalabilidade, qualidade e evolução de um produto full stack simples para cenários mais robustos.",
    featured: false,
    preview: {
      kind: "image",
      src: githubRaw("Teste_unit-tio_EBAC", "docs/preview.png"),
      alt: "Tela da aplicação de tarefas desenvolvida em Next.js com painel de gerenciamento.",
      width: 1600,
      height: 1000,
    },
    technologies: [
      { name: "Next.js 15", slug: "next" },
      { name: "React 19", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Jest", slug: "jest" },
      { name: "Testing Library", slug: "rtl" },
      { name: "ESLint", slug: "eslint" },
    ],
    differentiators: [
      "Separação explícita entre camada Next.js, frontend, backend e persistência local.",
      "API local com operações CRUD completas e contrato tipado entre as camadas.",
      "Persistência em JSON como solução simples, útil para simular fluxo full stack sem infraestrutura externa.",
      "Testes cobrindo página, componentes e hook customizado.",
    ],
    impactPoints: [
      "Mostra domínio da organização do App Router para interface e endpoints no mesmo projeto.",
      "Ajuda a conversar sobre modelagem, persistência e evolução para banco de dados real.",
      "Entrega uma peça de portfólio que combina clareza didática com estrutura sustentável.",
    ],
    metrics: ["API local", "Persistência em JSON", "CRUD completo"],
    repositoryUrl: "https://github.com/Luanagroth/Teste_unit-tio_EBAC",
    readmeUrl: "https://github.com/Luanagroth/Teste_unit-tio_EBAC/blob/main/README.md",
  },
];
