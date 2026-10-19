# Wellington Nobre · Portfólio

Portfólio em React, TypeScript, Vite, Tailwind CSS 4, Lucide React e Motion. Interface escura, responsiva e em português, com projetos agrupados por produto e detalhes técnicos navegáveis por hash.

## Desenvolvimento

Requisito: Node.js 24 e npm.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Abra a URL exibida pelo Vite com `/Portifolio-dev/`. O build executa a checagem estrita do TypeScript e gera `dist/`.

## Conteúdo

- `src/data/profile.ts`: GitHub, LinkedIn, e-mail e `resumeUrl`. Para um PDF local, adicione o arquivo em `public/` e configure `/Portifolio-dev/curriculo.pdf`. Enquanto vazio, o CTA solicita o currículo por e-mail.
- `src/data/projects.ts`: descrições, tecnologias, status, escopo, repositórios, imagens e demonstrações.
- `src/data/experiences.ts`: experiências e durações aproximadas.
- `src/data/skills.ts`: destaques com evidências e repertório adicional, sem níveis inventados.
- `src/sections/Projects.tsx`: filtros, cards e detalhes com elementos nativos `details`/`summary`.
- `src/styles/global.css`: identidade visual, responsividade e redução de movimento.
- `public/images/`: imagens originais e mapas SVG ilustrativos de escopo, editáveis como texto.
- `docs/research.md`: fontes e limites da verificação de conteúdo.

As imagens originais e os arquivos HTML/CSS/JS antigos permanecem no repositório para preservar o histórico, mas não são usados como aplicação. As imagens reutilizadas estão em `public/images/`.

## GitHub Pages

Destino: https://wellpt.github.io/Portifolio-dev/

O caminho-base está configurado em `vite.config.ts`. A navegação usa âncoras, incluindo `#projeto-loja`, evitando dependência de fallback de rotas do GitHub Pages. Os detalhes do projeto abrem automaticamente ao acessar a âncora.

O workflow `.github/workflows/deploy-pages.yml` é **exclusivamente manual**. Para publicar após revisar e enviar as alterações, selecione GitHub Actions em Settings → Pages e execute o workflow na aba Actions. Este trabalho não realiza commit, push ou publicação.

Antes de publicar, revise especialmente os contatos, o currículo e a classificação das competências. O conteúdo de carreira veio do briefing; projetos privados foram descritos apenas a partir dos checkouts disponíveis.
