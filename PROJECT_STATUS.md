# Pranav's Portfolio: Project Status & Handoff

_Last updated: 2026-07-30_

Personal portfolio site, cross-linked with the Potato Projects hub.

---

## ⏯️ Pick up here (current state)

- **Local / committed:** v1.0.0
- **Deployed to prod:** Vercel
- **To deploy:** `git push` → Vercel auto-deploys.
- **Last thing built:** none

---

## ⚠️ Critical constraints (READ FIRST)

1. No database and no auth: nothing here touches the shared Postgres.
2. **Zero-cost rule.** No paid services.
3. Keep in step with `potato-projects` when project names or URLs change; the two
   cross-link.
4. Google Drive mount: restart `next dev` after editing `globals.css`.

## How to run locally

```bash
npm install
npm run dev          # next dev --port 3007
```
