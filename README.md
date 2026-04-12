# Luana Groth | Portfólio

Portfólio profissional desenvolvido para apresentar a atuação de Luana Groth em desenvolvimento front-end e full stack, com foco em clareza visual, experiência do usuário, organização técnica e apresentação estratégica de projetos reais.

## Visão geral

O projeto foi estruturado como uma vitrine profissional na web, com home editorial, seção de projetos em destaque e página dedicada para aprofundamento dos cases.

A proposta é comunicar:

- repertório técnico real
- cuidado com interface e hierarquia visual
- visão de produto
- consistência entre conteúdo, layout e execução

## Stack utilizada

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Vitest
- Testing Library
- ESLint

## Principais seções

- `Hero`: apresentação principal com posicionamento profissional
- `Sobre mim`: trajetória, formação e direcionamento
- `Habilidades`: stack organizada por grupos de competência
- `Projetos`: destaque para os cases principais na home
- `Página /projetos`: vitrine completa com todos os projetos
- `Contato`: canais profissionais para networking e oportunidades

## Projetos em destaque

Atualmente a home prioriza dois projetos principais:

- `CityLine`: produto de mobilidade urbana com foco em consulta de linhas, horários, tarifas e paradas
- `FlowTrack`: aplicação de produtividade com tarefas, hábitos e foco diário

A página `/projetos` mantém a listagem completa com todos os cases do portfólio.

## Estrutura do projeto

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
    page.test.tsx
    projetos/
      page.tsx
      page.test.tsx
  components/
    about-section.tsx
    contact-section.tsx
    container.tsx
    footer.tsx
    header-menu.tsx
    hero.tsx
    project-card.tsx
    project-page.tsx
    project-preview.tsx
    project-section.tsx
    projects-section.tsx
    section-heading.tsx
    skills-section.tsx
    theme-toggle.tsx
  data/
    profile.ts
    projects.ts
  lib/
    github.ts
    projects.ts
  types/
    project.ts
```

## Como executar localmente

```bash
npm install
npm run dev
```

Depois, acesse:

```bash
http://localhost:3000
```

## Scripts disponíveis

- `npm run dev`: inicia o ambiente de desenvolvimento
- `npm run build`: gera a build de produção
- `npm run start`: inicia a aplicação já buildada
- `npm run lint`: executa a validação com ESLint
- `npm run test`: roda os testes com Vitest
- `npm run test:watch`: roda os testes em modo observação

## Qualidade e organização

- componentização por responsabilidade
- separação entre dados, tipos, lógica e UI
- layout responsivo para mobile e desktop
- testes básicos para home e página de projetos
- estrutura pronta para deploy na Vercel

## Validação do projeto

Validação executada com sucesso usando:

```bash
npm run lint
npm run test
npm run build
```

## Objetivo do portfólio

Este projeto foi pensado para funcionar como presença profissional na web, reunindo:

- identidade visual consistente
- leitura clara para recrutadores e lideranças técnicas
- projetos apresentados como produto, e não apenas como links
- base técnica sólida para evolução contínua

## Contato

- LinkedIn: [linkedin.com/in/luanagroth](https://www.linkedin.com/in/luanagroth/)
- GitHub: [github.com/Luanagroth](https://github.com/Luanagroth)
- E-mail: [luanaeulalia56@gmail.com](mailto:luanaeulalia56@gmail.com)

## Autora

**Luana Groth**  
Desenvolvedora em evolução com foco em interfaces modernas, produto digital e qualidade técnica.
