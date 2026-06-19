import { profile } from "@/data/profile";

export type ContactAvailability = {
  eyebrow: string;
  description: string;
  items: string[];
};

export type ContactChannel = {
  id: "email" | "linkedin" | "github" | "portfolio";
  label: string;
  value: string;
  description: string;
  href: string;
  accentColor: string;
  external?: boolean;
};

export type ContactService = {
  title: string;
  description: string;
  accentColor: string;
  icon:
    | "building"
    | "megaphone"
    | "frame"
    | "monitor"
    | "bar-chart"
    | "wrench";
};

export type ContactQuickLink = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

export type QuickContact = {
  title: string;
  description: string;
  availability: string;
  links: ContactQuickLink[];
};

export type ContactAudienceCard = {
  id: "opportunities" | "budgets";
  title: string;
  description: string;
  accentColor: string;
  items: string[];
  ctaLabel: string;
  href: string;
};

const linkedInLink = profile.socialLinks.find((link) => link.label === "LinkedIn");
const githubLink = profile.socialLinks.find((link) => link.label === "GitHub");

if (!linkedInLink || !githubLink) {
  throw new Error("Profile social links must include LinkedIn and GitHub for the contact page.");
}

export const contactAvailability: ContactAvailability = {
  eyebrow: "DISPONIBILIDADE",
  description:
    "Aberta a oportunidades de estágio, desenvolvimento Front-end, Full Stack e novos projetos digitais.",
  items: [
    "Oportunidades profissionais",
    "Projetos e colaborações",
    "Sites e sistemas",
    "Trabalho remoto",
  ],
};

export const contactAudienceCards: ContactAudienceCard[] = [
  {
    id: "opportunities",
    title: "Oportunidades profissionais",
    description:
      "Para recrutadores, empresas e equipes que buscam uma desenvolvedora em evolução contínua, com experiência prática na construção de produtos digitais.",
    accentColor: "#8B5CF6",
    items: [
      "Estágio",
      "Front-end",
      "Full Stack em desenvolvimento",
      "Trabalho remoto",
      "Colaboração em equipe",
    ],
    ctaLabel: "Enviar e-mail profissional",
    href: `mailto:${profile.email}`,
  },
  {
    id: "budgets",
    title: "Projetos e orçamentos",
    description:
      "Para quem precisa transformar uma ideia em site, sistema, dashboard, portfólio ou solução digital personalizada.",
    accentColor: "#22D3EE",
    items: [
      "Sites institucionais",
      "Landing pages",
      "Portfólios",
      "Sistemas web",
      "Dashboards",
      "Manutenção e melhorias",
    ],
    ctaLabel: "Solicitar orçamento",
    href: "#orcamento",
  },
];

export const contactChannels: ContactChannel[] = [
  {
    id: "email",
    label: "E-mail",
    value: profile.email,
    description: "Oportunidades, propostas e contatos profissionais.",
    href: `mailto:${profile.email}`,
    accentColor: "#22D3EE",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/luanagroth",
    description: "Conexões profissionais e processos seletivos.",
    href: linkedInLink.href,
    accentColor: "#60A5FA",
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/Luanagroth",
    description: "Código, repositórios e evolução técnica.",
    href: githubLink.href,
    accentColor: "#A78BFA",
    external: true,
  },
  {
    id: "portfolio",
    label: "Portfólio",
    value: "Cidade interativa e vitrine de projetos",
    description: "Visão geral do portfólio e dos distritos ativos.",
    href: "/",
    accentColor: "#F472B6",
  },
];

export const contactServices: ContactService[] = [
  {
    title: "Site institucional",
    description: "Presença digital clara, confiável e alinhada à identidade do negócio.",
    accentColor: "#8B5CF6",
    icon: "building",
  },
  {
    title: "Landing page",
    description: "Páginas focadas em apresentação, captação e comunicação objetiva.",
    accentColor: "#22D3EE",
    icon: "megaphone",
  },
  {
    title: "Portfólio profissional",
    description: "Estruturas autorais para destacar posicionamento, trabalho e resultado.",
    accentColor: "#EC4899",
    icon: "frame",
  },
  {
    title: "Sistema web",
    description: "Interfaces e fluxos para organizar dados, operação e experiência de uso.",
    accentColor: "#60A5FA",
    icon: "monitor",
  },
  {
    title: "Dashboard",
    description: "Painéis com leitura visual mais clara para métricas, controle e decisão.",
    accentColor: "#2DD4BF",
    icon: "bar-chart",
  },
  {
    title: "Manutenção e melhorias",
    description: "Ajustes, refinamentos e evolução contínua de projetos já existentes.",
    accentColor: "#F59E0B",
    icon: "wrench",
  },
];

export const projectTypeOptions = [
  "Site institucional",
  "Landing page",
  "Portfólio",
  "Sistema web",
  "Dashboard",
  "Manutenção ou melhoria",
  "Outro",
] as const;

export const quickContact: QuickContact = {
  title: "Prefere falar diretamente?",
  description: "Você também pode entrar em contato pelo e-mail ou LinkedIn.",
  availability: "Disponibilidade atual: aberta a oportunidades e novos projetos digitais.",
  links: [
    {
      label: "E-mail",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/luanagroth",
      href: linkedInLink.href,
      external: true,
    },
  ],
};
