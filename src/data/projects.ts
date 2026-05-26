import type { ProjectManual } from "@/types/project";

const githubRaw = (repository: string, path: string) =>
  `https://raw.githubusercontent.com/Luanagroth/${repository}/main/${path}`;

export const manualProjects: ProjectManual[] = [
  {
    slug: "movi",
    name: "MOVI - Plataforma de mobilidade urbana",
    category: "Mobilidade Urbana e PWA",
    status: {
      label: "Publicado e em evolução",
      tone: "active",
    },
    shortDescription:
      "Plataforma pública de mobilidade urbana para consultar linhas, horários, paradas, rotas, bilhetes, tarifas, notícias e modais hidroviários em uma experiência responsiva.",
    summary:
      "MOVI centraliza dados públicos de transporte de São Francisco do Sul e região, reunindo linhas, horários, mapa, bilhetes, tarifas, clima, notícias e avisos em uma consulta mais rápida, organizada e acessível.",
    professionalDescription:
      "O projeto combina frontend, backend, dados reais, autenticação, favoritos por usuário, mapa interativo, central de notícias, consulta de tarifas e estrutura PWA para entregar um produto completo de mobilidade urbana com utilidade prática no dia a dia.",
    featured: true,
    preview: {
      kind: "gallery",
      images: [
        {
          src: "/images/movi/home.png",
          alt: "Home do MOVI com ônibus amarelo em destaque, chamada São Chico em movimento e card de clima.",
          title: "Home e clima",
        },
        {
          src: "/images/movi/linhas.png",
          alt: "Tela de linhas e horários do MOVI com busca, lista de linhas, indicadores da linha selecionada e mapa interativo.",
          title: "Linhas, horários e mapa",
        },
        {
          src: "/images/movi/bilhetes.png",
          alt: "Tela de bilhetes e tarifas do MOVI com valores de transporte terrestre e hidroviário.",
          title: "Bilhetes e tarifas",
        },
        {
          src: "/images/movi/noticias.png",
          alt: "Tela de notícias e avisos do MOVI com destaque para travessia hidroviária e comunicados importantes.",
          title: "Notícias e avisos",
        },
      ],
    },
    technologies: [
      { name: "Next.js 15", slug: "next" },
      { name: "React 19", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind CSS", slug: "tailwind" },
      { name: "Leaflet", slug: "leaflet" },
      { name: "Node.js", slug: "node" },
      { name: "Express", slug: "express" },
      { name: "Prisma", slug: "prisma" },
      { name: "SQLite", slug: "sqlite" },
      { name: "Vitest", slug: "vitest" },
      { name: "Zod", slug: "zod" },
    ],
    differentiators: [
      "Centraliza informações públicas de mobilidade que antes ficavam espalhadas em múltiplas fontes.",
      "Organiza linhas, horários, sentidos, paradas, rotas, bilhetes e tarifas em uma interface única.",
      "Integra mapa interativo, clima, notícias, favoritos por usuário e autenticação para aproximar o produto do uso real.",
      "Inclui estrutura PWA com cache de assets estáticos e fallback offline básico.",
    ],
    impactPoints: [
      "Reduz a fricção para encontrar horários, rotas e pontos de embarque em dispositivos móveis.",
      "Mostra capacidade de estruturar frontend, backend, dados, autenticação e experiência PWA em torno de um problema real.",
      "Cria uma base técnica pronta para evoluir com novas cidades, modais, filtros, notícias e integrações públicas.",
    ],
    architectureNotes: {
      title: "Arquitetura e decisões",
      points: [
        "Monorepo com apps de frontend e backend, além de pacote compartilhado para organizar contratos e evolução do domínio.",
        "Frontend em Next.js, React, Tailwind e React-Leaflet, com navegação responsiva e foco em consulta rápida no celular.",
        "Backend em Express, Prisma e SQLite para organizar entidades como linhas, horários, sentidos, paradas, favoritos e usuários.",
      ],
    },
    metrics: ["Dados reais", "Mapa interativo", "Bilhetes e notícias"],
    repositoryUrl: "https://github.com/Luanagroth/Movi",
    demoUrl: "https://movi-frontend.vercel.app/",
    repositoryLabel: "Ver código",
    readmeUrl: "https://github.com/Luanagroth/Movi/blob/main/README.md",
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
    status: {
      label: "Atualizado recentemente",
      tone: "active",
    },
    shortDescription:
      "Dashboard de produtividade pessoal com tarefas, hábitos, metas semanais e Pomodoro em uma interface reformulada e pronta para evolução.",
    summary:
      "Aplicação de produtividade pessoal com foco em rotina, organização e constância. O FlowTrack centraliza tarefas, hábitos diários, metas da semana, horário local e um ciclo de Pomodoro com persistência local em uma experiência mais clara e madura.",
    professionalDescription:
      "A versão mais recente reforça leitura de produto: dashboard reorganizado, hierarquia visual refinada, placeholders mais orientativos, notas opcionais nas entidades principais e Pomodoro com notificações nativas e controle de som. O resultado mostra evolução real de UX sem perder disciplina técnica.",
    featured: false,
    preview: {
      kind: "image",
      src: "/images/flowtrack-dashboard.png",
      alt: "Dashboard reformulado do FlowTrack com cards de tarefas, hábitos, metas semanais e Pomodoro.",
      width: 1265,
      height: 874,
    },
    technologies: [
      { name: "Next.js 16", slug: "next" },
      { name: "React 19", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind CSS 4", slug: "tailwind" },
      { name: "ESLint 9", slug: "eslint" },
      { name: "Jest", slug: "jest" },
      { name: "RTL", slug: "rtl" },
      { name: "GitHub Actions", slug: "github-actions" },
      { name: "Vercel", slug: "vercel" },
    ],
    differentiators: [
      "Dashboard reformulado com hierarquia visual mais clara e ordem dos cards pensada para uso recorrente.",
      "Tarefas, hábitos e metas com notas opcionais, edição e estados de conclusão mais objetivos.",
      "Pomodoro com ciclo automático, notificações nativas do navegador e som configurável.",
      "Base modular com hooks reutilizáveis para persistência local, horário em tempo real e foco diário.",
    ],
    impactPoints: [
      "Traduz rotina pessoal e constância em um fluxo de uso claro, responsivo e realmente acionável no dia a dia.",
      "Evidencia iteração de produto com melhorias funcionais e de interface aplicadas sobre uma base já publicada.",
      "Abre conversa técnica sobre persistência local, evolução para backend, analytics e experiência offline futura.",
    ],
    architectureNotes: {
      title: "Arquitetura e evolução",
      points: [
        "Estrutura organizada em app, components, hooks, lib, types e testes para separar UI, comportamento e domínio.",
        "Hooks como useLocalStorage, usePomodoro e useCurrentTime reduzem acoplamento e facilitam evolução incremental.",
        "Pipeline com lint, testes, build e deploy em produção reforça consistência entre iteração visual e qualidade técnica.",
      ],
    },
    metrics: ["Next.js 16", "Pomodoro com notificações", "CI/CD em produção"],
    repositoryUrl: "https://github.com/Luanagroth/flowtrack",
    demoUrl: "https://flowtrack-seven.vercel.app",
    readmeUrl: "https://github.com/Luanagroth/flowtrack/blob/main/README.md",
  },
  {
    slug: "essenza-bistro",
    name: "Essenza Bistrô",
    category: "Micro Frontends",
    status: {
      label: "Projeto publicado",
      tone: "active",
    },
    shortDescription:
      "Plataforma de operação para restaurante com painel interno, site público, comandas, reservas, cardápio e backend modular.",
    summary:
      "Sistema completo para o Essenza Bistrô, conectando a experiência pública do cliente com a operação interna do restaurante por meio de micro frontends, API REST e persistência local em SQLite.",
    professionalDescription:
      "O projeto explora uma arquitetura mais próxima de produto real: frontends separados por responsabilidade, integração via Webpack Module Federation, backend em Express com Prisma, deploy em Vercel e Railway e fluxos de negócio para reservas, comandas, cardápio, relatórios e currículos.",
    featured: true,
    preview: {
      kind: "gallery",
      images: [
        {
          src: githubRaw("microfrontends-cardapio", "screenshots/Login-interno.png"),
          alt: "Tela de login administrativo do Essenza Bistrô.",
          title: "Login interno",
        },
        {
          src: githubRaw("microfrontends-cardapio", "screenshots/dashboard.png"),
          alt: "Dashboard interno do Essenza Bistrô com indicadores de operação.",
          title: "Painel geral",
        },
        {
          src: githubRaw("microfrontends-cardapio", "screenshots/mapa-mesas.png"),
          alt: "Mapa de mesas do Essenza Bistrô com status de atendimento.",
          title: "Mapa de mesas",
        },
        {
          src: githubRaw("microfrontends-cardapio", "screenshots/comanda.png"),
          alt: "Comanda aberta do Essenza Bistrô com itens selecionados.",
          title: "Comanda aberta",
        },
        {
          src: githubRaw("microfrontends-cardapio", "screenshots/comanda-pagamento.png"),
          alt: "Tela de pagamento e fechamento de comanda do Essenza Bistrô.",
          title: "Pagamento",
        },
        {
          src: githubRaw("microfrontends-cardapio", "screenshots/gestao-cardapio.png"),
          alt: "Gestão de cardápio do Essenza Bistrô com produtos e categorias.",
          title: "Gestão de cardápio",
        },
        {
          src: githubRaw("microfrontends-cardapio", "screenshots/relatorios.png"),
          alt: "Tela de relatórios operacionais do Essenza Bistrô.",
          title: "Relatórios",
        },
        {
          src: githubRaw("microfrontends-cardapio", "screenshots/curriculos.png"),
          alt: "Painel de currículos recebidos pelo site público do Essenza Bistrô.",
          title: "Currículos",
        },
        {
          src: githubRaw("microfrontends-cardapio", "screenshots/publico-home-1.png"),
          alt: "Primeira parte da home pública do Essenza Bistrô.",
          title: "Home pública",
        },
        {
          src: githubRaw("microfrontends-cardapio", "screenshots/publico-home-2.png"),
          alt: "Segunda parte da home pública do Essenza Bistrô.",
          title: "Cardápio público",
        },
        {
          src: githubRaw("microfrontends-cardapio", "screenshots/publico-reservas.png"),
          alt: "Formulário público de reservas do Essenza Bistrô.",
          title: "Reservas",
        },
        {
          src: githubRaw("microfrontends-cardapio", "screenshots/publico-curriculos-contato.png"),
          alt: "Tela pública de currículos e contato do Essenza Bistrô.",
          title: "Currículos e contato",
        },
      ],
    },
    technologies: [
      { name: "React 18", slug: "react" },
      { name: "JavaScript", slug: "javascript" },
      { name: "Webpack 5", slug: "webpack" },
      { name: "Node.js", slug: "node" },
      { name: "Express", slug: "express" },
      { name: "Prisma", slug: "prisma" },
      { name: "SQLite", slug: "sqlite" },
      { name: "CSS3", slug: "css" },
      { name: "Vitest", slug: "vitest" },
      { name: "Vercel", slug: "vercel" },
    ],
    differentiators: [
      "Separa painel interno, micro frontend de comandas, site público e backend em módulos com responsabilidades claras.",
      "Integra micro frontends com Webpack Module Federation e contratos compartilhados para reduzir acoplamento.",
      "Conecta reservas, cardápio, comandas, relatórios e currículos a uma API REST com persistência via Prisma e SQLite.",
      "Publica frontends na Vercel e backend na Railway, com integração real entre site público e sistema interno.",
    ],
    impactPoints: [
      "Demonstra capacidade de transformar um domínio de negócio completo em uma aplicação modular e navegável.",
      "Mostra domínio de integração entre múltiplos frontends, backend e banco de dados em um mesmo produto.",
      "Cria uma base pronta para evoluir com autenticação, histórico operacional, painel de cozinha e deploy de backend.",
    ],
    architectureNotes: {
      title: "Arquitetura em micro frontends",
      points: [
        "Container principal orquestra a experiência interna e consome módulos remotos publicados via Module Federation.",
        "Backend em Express organiza domínios como reservas, pedidos, produtos, categorias, currículos e uploads.",
        "Shared centraliza contratos, helpers e configurações usadas entre frontends para manter a comunicação consistente.",
      ],
    },
    metrics: ["Module Federation", "API REST", "Vercel + Railway"],
    repositoryUrl: "https://github.com/Luanagroth/microfrontends-cardapio",
    demoUrl: "https://microfrontends-cardapio.vercel.app",
    demoLabel: "Ver site público",
    managementUrl: "https://microfrontends-cardapio-pvda.vercel.app",
    managementLabel: "Ver gestão",
    managementAccess: {
      login: "admin@essenza.local",
      password: "admin123",
    },
    readmeUrl: "https://github.com/Luanagroth/microfrontends-cardapio/blob/main/README.md",
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
    demoUrl: "https://teste-unitario-tarefas.vercel.app",
    readmeUrl: "https://github.com/Luanagroth/Teste_unit-tio_EBAC/blob/main/README.md",
  },
];
