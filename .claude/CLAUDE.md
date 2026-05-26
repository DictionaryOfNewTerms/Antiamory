# Antiamory — Landing Page

> **Type**: Public landing page (https://antiamory.org)
> **Real project**: `roar-gits/Antiamory` (private). All product work happens there.

This working directory is a **presentation artifact**, not a project. It hosts only the public-facing description of "antiamory." Edits are limited to landing-page content, design tokens, and deploy config.

For project-level work (architecture, initiatives, integrations, users, doctrine sweeps), switch to `roar-gits/Antiamory`. Do **not** rebuild `.claude/docs/` infrastructure here.

See also `.project-meta` at the working-dir root.

---

## Stack

Next.js 16 (static export to `./out`) → GitHub Pages via GitHub Actions on push to `main`.

## Quick commands

```bash
npm run dev          # Local development
npm run build        # Static export
```

## Deploy

Automatic on push to `main` via `.github/workflows/deploy.yml`.

## Credentials

Handled by `.envrc` + global doctrine — no project-level setup needed.
