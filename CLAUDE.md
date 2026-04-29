# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm build        # Production build (vite build)
```

There is no dev server script in `package.json`. To run locally, add `"dev": "vite"` to the scripts or run `npx vite` directly.

## Architecture

**Chief** is a Hebrew-language (RTL) document management SPA. All layouts use `dir="rtl"`.

### Stack
- React 18 + TypeScript, built with Vite 6
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- shadcn/ui component primitives (`src/app/components/ui/`) wrapping Radix UI
- MUI (`@mui/material`) and `lucide-react` for icons
- Path alias: `@` → `src/`

### Routing
Custom client-side router in [src/app/App.tsx](src/app/App.tsx) using `window.history.pushState` / `popstate`. Routes:
- `/` → `DesignPage` — main dashboard (TopNavbar + RightSidebar + MainContent)
- `/personal` → `PersonalPage`
- `/catalog` → `Catalog`
- `/edit` → `Edit`

Navigation is passed as a `navigate: (path: string) => void` prop down to every page and component that needs it.

### Component layers
- `src/app/pages/` — page-level components, each receives `navigate` prop
- `src/app/components/` — shared layout components (`TopNavbar`, `MainContent`, `RightSidebar`, `PersonalArea`, `ImportDropdown`)
- `src/app/components/ui/` — unstyled shadcn/ui primitives, do not edit these directly
- `src/app/components/figma/` — Figma-specific helpers (e.g. `ImageWithFallback`)

### Styling conventions
- All pages share the same diagonal gradient background: `linear-gradient(135deg, #F6F9FC → #F9F3ED)` with `backgroundAttachment: fixed`
- Brand colors: `#1B3A6B` (dark blue), `#2D9B8A` (teal), `#F2F2F4` (light gray pill backgrounds)
- Mix of Tailwind classes and inline styles — use Tailwind for layout/spacing, inline styles for the fixed gradient backgrounds
- `cn()` utility is in `src/app/components/ui/utils.ts` for merging Tailwind classes
