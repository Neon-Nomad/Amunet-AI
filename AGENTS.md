# Repository Guidelines

## Project Structure & Module Organization
- `src/` — application code
  - `components/` React components (PascalCase, `.tsx`)
  - `pages/` page-level views selected in `src/App.tsx`
  - `hooks/` custom hooks (prefix with `use`)
  - `lib/supabase.ts` Supabase client (reads `VITE_` env vars)
- `public/` static assets and `index.html`
- `docs/` production build output (`npm run build` writes here; used for GitHub Pages)
- `supabase/migrations/` SQL migrations for backend tables
- Config: `vite.config.ts`, `tailwind.config.js`, `eslint.config.js`, `tsconfig*.json`

## Build, Test, and Development Commands
- `npm install` — install dependencies
- `npm run dev` — start Vite dev server with HMR
- `npm run build` — build for production to `docs/` (Vite `base` is `./`)
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint on TS/TSX sources
- `npm run typecheck` — TypeScript type-check without emit

## Coding Style & Naming Conventions
- TypeScript + React; follow rules in `eslint.config.js` (run `npm run lint`).
- Indentation: 2 spaces; avoid unused vars and dead code.
- Components: PascalCase filenames in `src/components` and `src/pages`.
- Hooks: `useSomething.ts` in `src/hooks`.
- Variables/functions: camelCase; constants: UPPER_SNAKE_CASE.
- Styles: Tailwind utility classes via `className`; keep UI logic in components.

## Testing Guidelines
- No test runner is configured yet. If adding tests, prefer Vitest + React Testing Library.
- Place tests as `*.test.ts(x)` next to source or under `src/__tests__/`.
- Add an `npm test` script and ensure `typecheck` and `lint` pass before PRs.

## Commit & Pull Request Guidelines
- Commits: imperative, present tense, concise (e.g., "Add ROI form validation").
- Reference issues with `#123` when relevant.
- PRs should include: clear description, screenshots/GIFs for UI changes, and notes on any env/config changes.
- Before opening a PR, run: `npm run typecheck`, `npm run lint`, `npm run build`.

## Security & Configuration Tips
- Do not commit secrets. Use `.env.local`/`.env` with `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
- Only variables prefixed with `VITE_` are exposed to the client.
- Supabase schema changes live in `supabase/migrations/`; apply via Supabase CLI or Dashboard.
