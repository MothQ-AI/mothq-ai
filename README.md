# MothQ

**Reasoning, optimized.**

MothQ is an open-source-first deep-tech AI organization building efficient, edge-native reasoning architectures. The work is oriented around capable local intelligence: models and tooling that can run where the work happens, without treating brute-force centralization as the only path to useful AI.

## Website

The landing page is published with GitHub Pages:

<https://mothq-ai.github.io/mothq-ai/>

The Pages workflow builds the source project automatically whenever `main` changes.

## What this repository contains

- `index.html` and `assets/` — current static export of the landing page.
- `mothq-prototype/src/` — editable React/Vite source for the page.
- `mothq-prototype/public/` — supplied MothQ mark files used by the page.
- `.github/workflows/deploy-pages.yml` — GitHub Pages build and deployment workflow.

## Local development

```powershell
cd mothq-prototype
npm ci
npm run dev
```

Open the local URL printed by Vite. Build the production version with:

```powershell
npm run build
```

To reproduce the GitHub Pages build locally:

```powershell
npm run build:pages
```

## Design principles

- Open-source reasoning models and tools.
- Edge-native deployment and local-first inference.
- Serious research presentation, not speculative AI marketing.
- Resource-aware engineering for finite planetary resources.

## Community

- [GitHub](https://github.com/mothq-dev)
- [X](https://x.com/mothqdev)
- [Email](mailto:mothq.labs@gmail.com)

## Contributing

Issues, experiments, and thoughtful implementation notes are welcome. Keep changes focused, document user-visible behavior, and verify the site build before opening a pull request.
