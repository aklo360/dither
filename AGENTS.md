# Repository Guidelines

## Project Structure & Module Organization
- Source in `src/`: `components/` (UI and app components, shadcn in `components/ui`), `pages/`, `hooks/`, `lib/` (utilities), entry in `main.tsx`, root app in `App.tsx`.
- Static assets in `public/` (copied as‑is).
- Build artifacts in `dist/` (do not commit).
- Tooling: Vite (`vite.config.ts`), Tailwind (`tailwind.config.ts`, `postcss.config.js`), ESLint (`eslint.config.js`), TypeScript (`tsconfig*.json`). SPA routing via `_redirects`/`netlify.toml` and Cloudflare `wrangler.toml`.

## Build, Test, and Development Commands
- `npm run dev` — Start Vite dev server with HMR.
- `npm run build` — Production build to `dist/`.
- `npm run build:dev` — Development‑mode build (useful for debugging prod pathing).
- `npm run preview` — Serve the built `dist/` locally.
- `npm run lint` — Run ESLint on the project.

## Coding Style & Naming Conventions
- Language: TypeScript + React 18; 2‑space indentation.
- Components: `PascalCase.tsx` in `src/components/`; prefer named exports.
- Hooks: `useThing.ts` in `src/hooks/`.
- Utils: `camelCase.ts` in `src/lib/`.
- Tailwind CSS: use utility classes in `className`; compose with `clsx` and dedupe with `tailwind-merge` when needed.
- ESLint uses JS/TS recommended + React Hooks rules; `@typescript-eslint/no-unused-vars` is disabled — remove dead code manually.

## Testing Guidelines
- This repo does not include a test runner yet. If adding tests, prefer Vitest + React Testing Library.
- Name tests `*.test.ts`/`*.test.tsx` alongside source or under `src/__tests__/`.
- Keep tests fast and deterministic; cover core logic and critical UI states.

## Commit & Pull Request Guidelines
- Commits: concise, imperative mood (e.g., “Add About section”, “Fix routing”). Group related changes.
- PRs: include a clear description, linked issues, screenshots/GIFs for UI changes, and steps to validate.
- Before opening PRs: `npm run lint`, `npm run build`, and (if added) run tests.

## Security & Configuration Tips
- Do not commit secrets or `.env` files. Configure env vars in Netlify/Cloudflare dashboards.
- SPA routing: keep `_redirects` and `wrangler.toml` rules aligned when altering routes.
