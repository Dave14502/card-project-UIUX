# Quick reminder (for future me)

- What this is: a Next.js starter wired to Supabase (cloud database + auth). It’s the base to build pages, forms, and data flows on.
- Where things live:
  - `app/`: routes and pages (e.g., auth screens, protected area).
  - `components/`: UI pieces, auth forms, tutorial bits.
  - `lib/supabase/`: client/server helpers that read the env vars to talk to Supabase.
  - `.env.local`: your Supabase URL + publishable key (not committed).
- Run it locally: `npm install` then `npm run dev` inside `cardsetup/`, open `http://localhost:3000`.
- Repo: Git is on `main` with origin `https://github.com/Dave14502/card-project-setup-v2.git`.
