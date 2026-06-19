import type { ProjectManual } from "@/types/project";

const githubRaw = (repository: string, path: string) =>
  `https://raw.githubusercontent.com/Luanagroth/${repository}/main/${path}`;

export const manualProjects: ProjectManual[] = [
  {
    id: "movi",
    slug: "movi",
    name: "MOVI",
    category: "Plataforma de mobilidade urbana",
    projectType: "platform",
    lifecycleStatus: "evolving",
    section: "main",
    featured: true,
    accentColor: "#38BDF8",
    shortDescription:
      "Plataforma pública para consultar linhas, horários, paradas, rotas, tarifas, notícias e modais em uma experiência responsiva.",
    problem:
      "Informações de transporte urbano estavam espalhadas, lentas de consultar e pouco adaptadas ao uso diário no celular.",
    solution:
      "Uma plataforma única com linhas, horários, mapa interativo, tarifas, bilhetes, favoritos por usuário e central de avisos.",
    learning:
      "Integração de dados reais, autenticação, mapa, backend e experiência mobile em um produto com utilidade prática.",
    impact:
      "Reduz a fricção para encontrar rotas, horários e pontos de embarque em uma consulta mais clara e acessível.",
    summary:
      "MOVI centraliza dados públicos de transporte de São Francisco do Sul e região em um produto pensado para consulta rápida.",
    professionalDescription:
      "O projeto combina frontend, backend, dados reais, autenticação, favoritos por usuário, mapa interativo, central de notícias, consulta de tarifas e estrutura PWA para entregar um produto completo de mobilidade urbana.",
    preview: {
      kind: "gallery",
      images: [
        {
          src: "/images/movi/home.png",
          alt: "Home do MOVI com destaque para ônibus, clima e navegação principal.",
          title: "Home e clima",
        },
        {
          src: "/images/movi/linhas.png",
          alt: "Tela de linhas e horários do MOVI com busca, lista de linhas e mapa interativo.",
          title: "Linhas e mapa",
        },
        {
          src: "/images/movi/bilhetes.png",
          alt: "Tela de bilhetes e tarifas do MOVI com valores do transporte terrestre e hidroviário.",
          title: "Bilhetes e tarifas",
        },
        {
          src: "/images/movi/noticias.png",
          alt: "Tela de notícias e avisos do MOVI com comunicados e travessia hidroviária.",
          title: "Notícias e avisos",
        },
      ],
    },
    images: [
      {
        src: "/images/movi/home.png",
        alt: "Home do MOVI com destaque para ônibus, clima e navegação principal.",
        title: "Home e clima",
      },
      {
        src: "/images/movi/linhas.png",
        alt: "Tela de linhas e horários do MOVI com busca, lista de linhas e mapa interativo.",
        title: "Linhas e mapa",
      },
      {
        src: "/images/movi/bilhetes.png",
        alt: "Tela de bilhetes e tarifas do MOVI com valores do transporte terrestre e hidroviário.",
        title: "Bilhetes e tarifas",
      },
      {
        src: "/images/movi/noticias.png",
        alt: "Tela de notícias e avisos do MOVI com comunicados e travessia hidroviária.",
        title: "Notícias e avisos",
      },
    ],
    technologies: [
      { name: "Next.js 15", slug: "next" },
      { name: "React 19", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind CSS", slug: "tailwind" },
      { name: "Leaflet", slug: "leaflet" },
      { name: "Express", slug: "express" },
      { name: "Prisma", slug: "prisma" },
      { name: "SQLite", slug: "sqlite" },
      { name: "Vitest", slug: "vitest" },
      { name: "Zod", slug: "zod" },
    ],
    differentiators: [
      "Centraliza informações públicas de mobilidade que antes estavam espalhadas em múltiplas fontes.",
      "Combina linhas, horários, sentidos, paradas, tarifas, clima e avisos em uma interface única.",
      "Inclui favoritos por usuário, mapa interativo e estrutura PWA com utilidade prática no dia a dia.",
    ],
    execution: [
      "Integra dados reais de transporte com navegação responsiva pensada para consulta rápida no celular.",
      "Organiza autenticação, favoritos, rotas e notícias em fluxos coerentes para uso recorrente.",
    ],
    architecture: [
      "Monorepo com frontend, backend e contratos compartilhados para separar domínio e interface.",
      "Backend em Express, Prisma e SQLite para organizar linhas, horários, sentidos, paradas e usuários.",
      "Frontend com Next.js, React, Tailwind e Leaflet para unir consulta textual e mapa interativo.",
    ],
    metrics: ["Dados reais", "Mapa interativo", "PWA"],
    links: {
      demo: "https://movi-frontend.vercel.app/",
      github: "https://github.com/Luanagroth/Movi",
      readme: "https://github.com/Luanagroth/Movi/blob/main/README.md",
    },
  },
  {
    id: "atlas",
    slug: "atlas",
    name: "Atlas",
    category: "Sistema de auditoria e conformidade",
    projectType: "system",
    lifecycleStatus: "published",
    section: "main",
    featured: true,
    accentColor: "#8B5CF6",
    shortDescription:
      "Solução para organizar auditorias, checklists, evidências, não conformidades e planos de ação com leitura operacional clara.",
    problem:
      "Processos de auditoria e conformidade costumam ficar dispersos, difíceis de acompanhar e pouco priorizados na operação.",
    solution:
      "Uma experiência de gestão focada em auditorias, dossiês, evidências e planos de ação com visão mais organizada do processo.",
    learning:
      "Modelagem de fluxos internos, clareza de sistema e hierarquia de informação aplicada a um domínio operacional complexo.",
    impact:
      "Transforma um tema técnico e burocrático em uma leitura mais objetiva para tomada de decisão e acompanhamento.",
    summary:
      "Atlas traduz processos de auditoria e conformidade em uma interface de gestão com foco em leitura operacional e acompanhamento.",
    professionalDescription:
      "O projeto reforça leitura de produto B2B, priorização de estados críticos e organização de dados de acompanhamento em um fluxo mais legível.",
    preview: {
      kind: "image",
      src: "/images/projects/atlas-dashboard.png",
      alt: "Dashboard do projeto Atlas exibindo indicadores e gestão de auditorias",
      width: 1909,
      height: 944,
    },
    images: [
      {
        src: "/images/projects/atlas-dashboard.png",
        alt: "Dashboard do projeto Atlas exibindo indicadores e gestão de auditorias",
        title: "Dashboard operacional",
      },
    ],
    technologies: [
      { name: "Next.js", slug: "next" },
      { name: "React", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
    ],
    differentiators: [
      "Foco em leitura operacional, estados críticos e acompanhamento de ações corretivas.",
      "Estrutura pensada para auditorias, evidências, não conformidades e planos de ação em um mesmo fluxo.",
    ],
    execution: [
      "Explora priorização visual e hierarquia de interface para um domínio com muitas etapas e responsabilidades.",
    ],
    architecture: [
      "Conceito orientado a sistema interno com organização de módulos, estados e entidades operacionais.",
    ],
    metrics: ["Dossiês", "Auditorias", "Planos"],
    links: {
      demo: "https://projeto-atlas-1-0-bgs8.vercel.app/",
      github: "https://github.com/Luanagroth/Projeto-ATLAS-1.0.git",
      readme: "https://github.com/Luanagroth/Projeto-ATLAS-1.0/blob/master/README.md",
    },
  },
  {
    id: "essenza",
    slug: "essenza-bistro",
    name: "Essenza",
    category: "Plataforma modular para restaurante",
    projectType: "platform",
    lifecycleStatus: "published",
    section: "main",
    featured: true,
    accentColor: "#EC4899",
    shortDescription:
      "Plataforma para operação de restaurante com site público, painel interno, comandas, reservas, cardápio e relatórios.",
    problem:
      "Era necessário separar jornadas públicas e internas sem perder consistência de produto nem integração operacional.",
    solution:
      "Uma arquitetura modular com site público, gestão interna e backend compartilhado para reservas, comandas, cardápio e relatórios.",
    learning:
      "Arquitetura em micro frontends, integração entre domínios e publicação distribuída para uma operação mais próxima de produto real.",
    impact:
      "Conecta experiência do cliente e operação interna em uma plataforma navegável, modular e pronta para evoluções.",
    summary:
      "Sistema completo para o Essenza Bistrô, conectando a experiência pública do cliente com a operação interna do restaurante.",
    professionalDescription:
      "O projeto explora uma arquitetura mais próxima de produto real: frontends separados por responsabilidade, integração via Module Federation, backend em Express com Prisma e deploy distribuído.",
    preview: {
      kind: "gallery",
      images: [
        {
          src: "/images/projects/essenza-home.png",
          alt: "Home pública do Essenza Bistrô com hero principal, navegação e botões de cardápio e reservas.",
          title: "Home pública",
        },
        {
          src: githubRaw("microfrontends-cardapio", "screenshots/dashboard.png"),
          alt: "Dashboard interno do Essenza Bistrô com indicadores operacionais.",
          title: "Painel geral",
        },
        {
          src: githubRaw("microfrontends-cardapio", "screenshots/mapa-mesas.png"),
          alt: "Mapa de mesas do Essenza Bistrô com status de atendimento.",
          title: "Mapa de mesas",
        },
        {
          src: githubRaw("microfrontends-cardapio", "screenshots/publico-home-1.png"),
          alt: "Home pública do Essenza Bistrô com apresentação do restaurante.",
          title: "Home pública",
        },
      ],
    },
    images: [
      {
        src: "/images/projects/essenza-home.png",
        alt: "Home pública do Essenza Bistrô com hero principal, navegação e botões de cardápio e reservas.",
        title: "Home pública",
      },
      {
        src: githubRaw("microfrontends-cardapio", "screenshots/dashboard.png"),
        alt: "Dashboard interno do Essenza Bistrô com indicadores operacionais.",
        title: "Painel geral",
      },
      {
        src: githubRaw("microfrontends-cardapio", "screenshots/mapa-mesas.png"),
        alt: "Mapa de mesas do Essenza Bistrô com status de atendimento.",
        title: "Mapa de mesas",
      },
      {
        src: githubRaw("microfrontends-cardapio", "screenshots/publico-home-1.png"),
        alt: "Home pública do Essenza Bistrô com apresentação do restaurante.",
        title: "Home pública",
      },
    ],
    technologies: [
      { name: "React 18", slug: "react" },
      { name: "JavaScript", slug: "javascript" },
      { name: "Webpack 5", slug: "webpack" },
      { name: "Node.js", slug: "node" },
      { name: "Express", slug: "express" },
      { name: "Prisma", slug: "prisma" },
      { name: "SQLite", slug: "sqlite" },
      { name: "Vitest", slug: "vitest" },
      { name: "Vercel", slug: "vercel" },
    ],
    differentiators: [
      "Separa painel interno, comandas, site público e backend em módulos com responsabilidades claras.",
      "Integra reservas, cardápio, comandas, relatórios e currículos em uma API REST com persistência real.",
      "Publica frontends na Vercel e backend na Railway com fluxo mais próximo de produto em operação.",
    ],
    execution: [
      "Conecta jornada pública e operação interna sem perder consistência de experiência nem contexto de gestão.",
      "Inclui acesso de demonstração para a área administrativa do sistema.",
    ],
    architecture: [
      "Module Federation para orquestrar frontends remotos publicados separadamente.",
      "Backend em Express com Prisma para reservas, pedidos, produtos, categorias, currículos e uploads.",
      "Contratos e utilitários compartilhados para manter a comunicação consistente entre módulos.",
    ],
    metrics: ["Module Federation", "API REST", "Vercel + Railway"],
    links: {
      demo: "https://microfrontends-cardapio.vercel.app/",
      github: "https://github.com/Luanagroth/microfrontends-cardapio",
      readme: "https://github.com/Luanagroth/microfrontends-cardapio/blob/main/README.md",
      management: "https://microfrontends-cardapio-pvda.vercel.app/",
    },
    managementAccess: {
      login: "admin@essenza.local",
      password: "admin123",
    },
  },
  {
    id: "farol",
    slug: "farol",
    name: "Farol",
    category: "Sistema de gestão para pequenos negócios",
    projectType: "system",
    lifecycleStatus: "development",
    section: "main",
    featured: true,
    accentColor: "#2DD4BF",
    shortDescription:
      "Solução para organizar vendas, estoque e indicadores de pequenos negócios com leitura mais clara do que está acontecendo na operação.",
    problem:
      "Pequenos negócios precisam visualizar vendas, estoque e indicadores sem depender de planilhas confusas ou fluxos fragmentados.",
    solution:
      "Um sistema de gestão com foco em leitura de operação, organização de dados e painéis mais acionáveis para o dia a dia.",
    learning:
      "Design de dashboard orientado a uso, hierarquia de informação e priorização de métricas realmente úteis para a rotina do negócio.",
    impact:
      "A proposta reduz ruído operacional e aponta um caminho claro para controle, acompanhamento e tomada de decisão.",
    summary:
      "Farol organiza vendas, estoque e indicadores em uma solução de gestão pensada para leitura objetiva e evolução incremental.",
    professionalDescription:
      "O projeto aprofunda leitura de produto, organização de dados e desenho de interface para um sistema operacional mais claro.",
    preview: {
      kind: "panel",
      alt: "Painel conceitual do Farol com vendas, estoque e indicadores.",
      eyebrow: "Gestão para negócios",
      title: "Farol",
      description: "Controle de vendas, estoque e indicadores com leitura mais clara da operação.",
      bullets: ["Vendas", "Estoque", "Indicadores", "Dashboard"],
      stats: [
        { label: "Status", value: "Em desenvolvimento" },
        { label: "Foco", value: "Operação" },
      ],
    },
    images: [],
    technologies: [
      { name: "Next.js", slug: "next" },
      { name: "Node.js", slug: "node" },
      { name: "Prisma", slug: "prisma" },
    ],
    differentiators: [
      "Foco em operação de pequenos negócios com leitura visual mais simples e útil.",
      "Prioriza indicadores, controle de estoque e visão de vendas em um único sistema.",
    ],
    execution: [
      "Explora organização de dashboard, estados de operação e visão de acompanhamento para uso recorrente.",
    ],
    architecture: ["Conceito de sistema web orientado a dados, painéis e fluxos de gestão."],
    metrics: ["Vendas", "Estoque", "Indicadores"],
    links: {},
  },
  {
    id: "palavri-metro",
    slug: "palavri-metro",
    name: "Palavri-metro",
    category: "Extensão de análise textual",
    projectType: "extension",
    lifecycleStatus: "published",
    section: "lab",
    featured: false,
    accentColor: "#F59E0B",
    shortDescription:
      "Extensão Chrome para análise textual local com leitura crítica, SEO e revisão editorial sem depender de backend.",
    problem:
      "Leitura exploratória e análise de conteúdo costumam exigir ferramentas externas ou processos manuais lentos.",
    solution:
      "Uma extensão que transforma páginas e seleções em relatórios rápidos de frequência de palavras, idioma e recorrência.",
    learning:
      "Motor de análise modular, foco em privacidade por execução local e suporte multilíngue em uma ferramenta de uso real.",
    impact:
      "Reduz o tempo de leitura exploratória e demonstra cuidado com utilidade imediata e permissões enxutas.",
    summary:
      "Produto enxuto, mas maduro, para pesquisa, estudo e análise de conteúdo diretamente no navegador.",
    professionalDescription:
      "O Palavri-metro foi estruturado como um produto enxuto, com execução local, suporte a múltiplos idiomas e experiência orientada a uso recorrente.",
    preview: {
      kind: "image",
      src: githubRaw("Palavri-metro", "assets/screenshots/pt-page.png"),
      alt: "Tela da extensão Palavri-metro mostrando análise de frequência de palavras em uma página.",
      width: 1600,
      height: 1000,
    },
    images: [
      {
        src: githubRaw("Palavri-metro", "assets/screenshots/pt-page.png"),
        alt: "Tela da extensão Palavri-metro mostrando análise de frequência de palavras em uma página.",
        title: "Análise textual",
      },
    ],
    technologies: [
      { name: "JavaScript", slug: "javascript" },
      { name: "HTML5", slug: "html" },
      { name: "CSS3", slug: "css" },
      { name: "Chrome API", slug: "chrome" },
      { name: "Node Test", slug: "node" },
    ],
    differentiators: [
      "Execução 100% local no navegador, sem envio de conteúdo para serviços externos.",
      "Detecção automática de idioma com suporte a português, inglês e espanhol.",
      "Testes cobrindo normalização, tokenização, filtro de stopwords e cenários de idioma.",
    ],
    execution: [
      "Permite análise rápida de páginas e seleções com foco em privacidade, revisão editorial e SEO.",
    ],
    architecture: [
      "Motor de análise desacoplado da interface para facilitar manutenção e evolução incremental.",
    ],
    metrics: ["Manifest V3", "Execução local", "Chrome Web Store"],
    links: {
      store: "https://chromewebstore.google.com/detail/mlclmnddpiindgejpacchiapplmnmaek",
      github: "https://github.com/Luanagroth/Palavri-metro",
      readme: "https://github.com/Luanagroth/Palavri-metro/blob/main/README.md",
    },
  },
  {
    id: "extension-guard",
    slug: "extension-guard",
    name: "Extension Guard",
    category: "Extensão de segurança e privacidade",
    projectType: "extension",
    lifecycleStatus: "published",
    section: "lab",
    featured: false,
    accentColor: "#F97316",
    shortDescription:
      "Extensão para auditoria local de permissões instaladas com score heurístico de risco e side panel executivo.",
    problem:
      "Permissões de extensões costumam ser opacas para o usuário comum, dificultando entender risco real e prioridade de ação.",
    solution:
      "Uma auditoria local que analisa permissões sensíveis, atribui score heurístico e explica o risco encontrado.",
    learning:
      "Arquitetura em camadas, tipagem forte, validação em runtime e produto Chrome mais complexo com múltiplas entradas.",
    impact:
      "Traduz permissões técnicas em sinais acionáveis para o usuário, melhorando clareza e confiança.",
    summary:
      "Produto de segurança que transforma um tema técnico e opaco em uma experiência legível para tomada de decisão.",
    professionalDescription:
      "O Extension Guard separa claramente domínio, adapters, persistência e interface React, reforçando testabilidade, escalabilidade e consistência.",
    preview: {
      kind: "image",
      src: githubRaw("Extension-Guard", "docs/images/overview.png"),
      alt: "Visão geral da interface do Extension Guard em side panel com resumo de risco.",
      width: 1600,
      height: 1000,
    },
    images: [
      {
        src: githubRaw("Extension-Guard", "docs/images/overview.png"),
        alt: "Visão geral da interface do Extension Guard em side panel com resumo de risco.",
        title: "Resumo de risco",
      },
    ],
    technologies: [
      { name: "React 19", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Vite", slug: "vite" },
      { name: "Tailwind", slug: "tailwind" },
      { name: "Vitest", slug: "vitest" },
      { name: "Zod", slug: "zod" },
    ],
    differentiators: [
      "Score heurístico explicável com recomendações textuais e leitura executiva das permissões.",
      "Persistência local de auditorias e configurações com repositories dedicados.",
      "Cobertura de testes unitários, de integração e de componente.",
    ],
    execution: [
      "Usa background, side panel e armazenamento local para estruturar uma experiência de segurança mais clara.",
    ],
    architecture: ["Arquitetura em camadas com separação entre domínio, adapters, repositories e UI."],
    metrics: ["Manifest V3", "Arquitetura em camadas", "Histórico local"],
    links: {
      store: "https://chromewebstore.google.com/detail/jihknbnaipjpaeffdmpfiiicpmmlkjdb",
      github: "https://github.com/Luanagroth/Extension-Guard",
      readme: "https://github.com/Luanagroth/Extension-Guard/blob/main/README.md",
    },
  },
  {
    id: "flowtrack",
    slug: "flowtrack",
    name: "FlowTrack",
    category: "Experimento de produtividade",
    projectType: "experiment",
    lifecycleStatus: "evolving",
    section: "lab",
    featured: false,
    accentColor: "#F97316",
    shortDescription:
      "Dashboard de produtividade com tarefas, hábitos, metas semanais e Pomodoro em uma interface reformulada e pronta para evoluir.",
    problem:
      "Rotinas pessoais de produtividade tendem a se espalhar entre ferramentas e perder clareza de prioridade no uso diário.",
    solution:
      "Um dashboard que centraliza tarefas, hábitos, metas da semana, horário local e Pomodoro com persistência local.",
    learning:
      "Evolução real de UX, organização modular em hooks reutilizáveis e melhoria incremental sem perder consistência técnica.",
    impact:
      "Traduz rotina pessoal em um fluxo claro, responsivo e realmente acionável para uso recorrente.",
    summary:
      "Aplicação de produtividade pessoal com foco em rotina, organização e constância em uma experiência mais madura.",
    professionalDescription:
      "A versão mais recente reforça leitura de produto com dashboard reorganizado, hierarquia visual refinada e Pomodoro com notificações nativas.",
    preview: {
      kind: "image",
      src: "/images/flowtrack-dashboard.png",
      alt: "Dashboard reformulado do FlowTrack com tarefas, hábitos, metas semanais e Pomodoro.",
      width: 1265,
      height: 874,
    },
    images: [
      {
        src: "/images/flowtrack-dashboard.png",
        alt: "Dashboard reformulado do FlowTrack com tarefas, hábitos, metas semanais e Pomodoro.",
        title: "Dashboard",
      },
    ],
    technologies: [
      { name: "Next.js 16", slug: "next" },
      { name: "React 19", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind CSS 4", slug: "tailwind" },
      { name: "Jest", slug: "jest" },
      { name: "RTL", slug: "rtl" },
      { name: "GitHub Actions", slug: "github-actions" },
      { name: "Vercel", slug: "vercel" },
    ],
    differentiators: [
      "Dashboard reformulado com hierarquia visual mais clara e ordem dos cards pensada para uso recorrente.",
      "Tarefas, hábitos e metas com notas opcionais, edição e estados de conclusão mais objetivos.",
      "Pomodoro com ciclo automático, notificações nativas do navegador e som configurável.",
    ],
    execution: [
      "Persiste dados localmente e organiza rotinas com foco em produtividade pessoal e clareza de acompanhamento.",
    ],
    architecture: [
      "Estrutura organizada em app, components, hooks, lib, types e testes para separar UI, comportamento e domínio.",
      "Hooks como useLocalStorage, usePomodoro e useCurrentTime reduzem acoplamento e facilitam evolução incremental.",
    ],
    metrics: ["Pomodoro", "Persistência local", "CI/CD"],
    links: {
      demo: "https://flowtrack-seven.vercel.app",
      github: "https://github.com/Luanagroth/flowtrack",
      readme: "https://github.com/Luanagroth/flowtrack/blob/main/README.md",
    },
  },
  {
    id: "testes-unitarios",
    slug: "testes-unitarios",
    name: "Testes Unitários",
    category: "Experimento full stack com App Router",
    projectType: "experiment",
    lifecycleStatus: "published",
    section: "lab",
    featured: false,
    accentColor: "#60A5FA",
    shortDescription:
      "Aplicação de tarefas com App Router, API local e persistência em JSON para demonstrar base full stack e qualidade.",
    problem:
      "Projetos pequenos costumam perder clareza arquitetural ao crescer, especialmente quando frontend, backend e persistência convivem no mesmo repositório.",
    solution:
      "Uma aplicação de tarefas com CRUD completo, API local, contratos tipados e testes para mostrar base full stack bem organizada.",
    learning:
      "Estruturação de App Router, rotas de API, persistência simples e testes automatizados em uma arquitetura didática, mas profissional.",
    impact:
      "Entrega uma peça de portfólio que combina clareza didática com estrutura sustentável para evoluções futuras.",
    summary:
      "Projeto focado em organização arquitetural, contratos tipados e testes automatizados para uma experiência CRUD completa em Next.js.",
    professionalDescription:
      "Este case organiza frontend, backend e persistência local de forma didática, criando uma base sólida para discutir escalabilidade e qualidade.",
    preview: {
      kind: "image",
      src: githubRaw("Teste_unit-tio_EBAC", "docs/preview.png"),
      alt: "Tela da aplicação de tarefas desenvolvida em Next.js com painel de gerenciamento.",
      width: 1600,
      height: 1000,
    },
    images: [
      {
        src: githubRaw("Teste_unit-tio_EBAC", "docs/preview.png"),
        alt: "Tela da aplicação de tarefas desenvolvida em Next.js com painel de gerenciamento.",
        title: "CRUD de tarefas",
      },
    ],
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
      "Testes cobrindo página, componentes e hook customizado.",
    ],
    execution: [
      "Organiza a experiência de tarefas em uma base full stack simples, clara e pronta para evoluir.",
    ],
    architecture: [
      "App Router e API local convivem no mesmo projeto para demonstrar fluxo full stack com baixo atrito de infraestrutura.",
    ],
    metrics: ["API local", "Persistência em JSON", "CRUD completo"],
    links: {
      demo: "https://teste-unitario-tarefas.vercel.app",
      github: "https://github.com/Luanagroth/Teste_unit-tio_EBAC",
      readme: "https://github.com/Luanagroth/Teste_unit-tio_EBAC/blob/main/README.md",
    },
  },
];
