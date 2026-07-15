# TigerHost

Full-stack site for TigerHost — a Discord-run VPS/Minecraft hosting reseller.
Built with **Next.js 14 (App Router)** on the frontend and API side, and
**SQLite** (via `better-sqlite3`) as the database.

## What's here

- Clean, real routes — no hash-routing. `/`, `/plans`, `/about`, `/rules`,
  `/policy`, `/terms`, `/contact` are each their own page + URL, the same way
  `claude.ai` and `claude.ai/chat` are separate pages of one app.
- `data/tigerhost.db` — SQLite database with two tables:
  - `plans` — every hosting tier (boost, invite, free Minecraft, premium
    Minecraft, cloud VPS) with specs and pricing.
  - `tickets` — support/claim requests submitted through `/contact`.
- `/api/plans` and `/api/tickets` — REST API routes the frontend calls.
- Design system in `app/globals.css`: dark ink/charcoal base, tiger-orange
  accent, condensed display type for headings, monospace for specs and
  pricing (styled like a server status readout), with a diagonal
  "stripe" divider as the recurring signature motif.

## Run it locally

```bash
npm install
npm run seed     # populates data/tigerhost.db from the current price list
npm run dev      # http://localhost:3000
```

Visiting the site now behaves like:

- `localhost:3000/` → home
- `localhost:3000/plans` → all plans, grouped, pulled live from SQLite
- `localhost:3000/contact` → ticket form that writes to the `tickets` table

## Editing prices

Edit `scripts/seed.js` and re-run `npm run seed` — it clears and re-inserts
the `plans` table. For day-to-day price tweaks without touching code, you
could instead build a small `/admin` page that runs `UPDATE` queries through
`lib/db.ts`; the schema already supports it.

## Deploying

This is a normal Next.js app, so it deploys anywhere Next.js does (Vercel,
Railway, Render, a VPS with `pm2`, etc.). Two things to know:

1. `better-sqlite3` is a native module — on serverless platforms (like
   Vercel) the filesystem is read-only/ephemeral, so SQLite won't persist.
   For serverless hosting, swap `lib/db.ts` for a hosted database (Postgres
   via Neon/Supabase, Turso for SQLite-compatible, etc.) — the query shapes
   stay almost identical.
2. For a plain VPS (which, fittingly, TigerHost sells), `npm run build &&
   npm start` behind Nginx works as-is, and the SQLite file just lives on
   disk.

## Notes on the business rules encoded in the UI

- Boost/invite tiers show as "Free — earned reward" instead of a price,
  since they're unlocked by boosting or inviting, not paid.
- The privacy policy, terms/AUP, and rules pages are pulled from the
  policies you provided, reformatted as real pages instead of pasted
  Discord announcements.
