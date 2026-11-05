# The Marginalia

**Essays, fiction, and reflections from the edges of an idea.**

The Marginalia is an independent literary journal built around
philosophy, literature, ethics, and the questions that stay with us. It
is a space for following an idea beyond its first answer, sitting with
uncertainty, and giving unfinished thoughts room to breathe.

**Live site:**
[hemang-jindall.github.io/the-marginalia](https://hemang-jindall.github.io/the-marginalia/)\
**Repository:**
[github.com/Hemang-Jindall/the-marginalia](https://github.com/Hemang-Jindall/the-marginalia)

---

## About the project

The Marginalia is designed as a quiet, editorial reading experience
rather than a conventional blog. Its visual language takes inspiration
from printed literary journals: warm paper textures, restrained rust
accents, expressive serif typography, generous whitespace, and subtle
motion.

The journal brings together:

- **Philosophy** --- essays exploring ideas, thinkers, and the
  assumptions behind everyday life.
- **Fiction** --- stories and literary experiments.
- **Reflections** --- shorter pieces on reading, observation, and the
  ordinary details of being human.

The project is created and edited by **Hemang Jindal**.

## Features

- Editorial-style layouts with responsive typography and spacing.
- Markdown-based articles managed through Astro content collections.
- Article metadata, categories, publication dates, and draft/pinned
  settings.
- Optional section indexes and marginalia annotations within articles.
- Reading progress indicator and smooth scrolling.
- Responsive navigation and layouts for desktop and mobile.
- Custom visual details, including the journal's animated monogram and
  cursor treatment.
- RSS feed and sitemap support.

## Built with

- [Astro](https://astro.build/) --- static site framework.
- [TypeScript](https://www.typescriptlang.org/) --- typed scripts and
  content tooling.
- [Markdown](https://www.markdownguide.org/) --- article writing and
  content.
- [Zod](https://zod.dev/) --- content schema validation.
- [Lenis](https://lenis.darkroom.engineering/) --- smooth scrolling.
- [Google Fonts](https://fonts.google.com/) --- Libre Baskerville and
  DM Sans.

## Getting started

### Requirements

- [Node.js](https://nodejs.org/) (use a current supported LTS
  release).
- npm, which is included with Node.js.
- Git.

### Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/Hemang-Jindall/the-marginalia.git
cd the-marginalia
npm install
```

Start the local development server:

```bash
npm run dev
```

Astro will print the local development URL in the terminal (usually
`http://localhost:4321`).

### Available commands

Run these commands from the project root:

Command Description

---

`npm install` Install project dependencies.
`npm run dev` Start the local development server.
`npm run build` Build the production site into `dist/`.
`npm run preview` Preview the production build locally.
`npm run astro -- --help` Show the Astro CLI help.

## Writing and managing articles

Articles are written as Markdown files in:

```text
src/content/posts/
```

Each article uses frontmatter for its metadata. A basic example:

```yaml
---
title: "A Question Worth Keeping"
description: "A short description of the essay."
pubDate: 2026-11-05
category: "Philosophy"
draft: false
pinned: false
---
```

The available categories are:

- `Philosophy`
- `Fiction`
- `Reflections`

The content collection also supports optional `sections` and
`annotations` fields for article navigation and marginalia. See the
content schema in the project for the exact structure.

To keep an article out of the published build, set `draft: true`.

## Project structure

The project is an Astro application. Its main areas include:

```text
the-marginalia/
├── public/                 # Static assets served as-is
├── src/
│   ├── content/
│   │   └── posts/          # Markdown articles
│   ├── layouts/            # Shared page and article layouts
│   ├── pages/              # Astro routes
│   └── ...
├── astro.config.mjs        # Astro configuration
├── package.json            # Scripts and dependencies
└── README.md
```

The exact contents of `src/` may grow as the journal develops.

## Deployment

The site is configured for GitHub Pages and is published from the `main`
branch through the repository's deployment workflow.

The Astro configuration uses the GitHub Pages project-site base path:

```js
export default defineConfig({
  site: "https://hemang-jindall.github.io",
  base: "/the-marginalia",
});
```

If you deploy the project under a different GitHub account or repository
name, update `site` and `base` in `astro.config.mjs` to match the new
destination.

Before publishing, build the site locally:

```bash
npm run build
```

Then commit and push your changes:

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

## Contributing

The Marginalia is a personal editorial project. Suggestions, thoughtful
feedback, and issue reports are welcome. If you spot a problem with the
site, open an issue in the repository with a clear description and,
where useful, steps to reproduce it.

## License

Unless a separate license is added to a specific part of the repository,
the writing and original creative content published through The
Marginalia remain the property of their respective author. Please ask
before reproducing or republishing them.

---

_Read slowly. Question everything._
