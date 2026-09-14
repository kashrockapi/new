import { API_BASE } from "@/lib/docs"

export const PANDASCORE_PRICE = {
  headers: ["", "PandaScore", "KashRock"] as const,
  rows: [
    ["Free", "0€ schedules / game. 1k req/hr", "Sandbox $0. CS2 props, instant key"],
    ["Historical stats", "From 400€ per game / mo", "Hobby $29/mo. All 8 titles"],
    ["Live", "From 1,000€ per game / mo", "Builder $99/mo. Live K/D/A"],
    ["CS2 + LoL + Dota + Valorant, historical", "From 1,600€ / mo", "$29/mo"],
    ["Betting / DFS use", "Blocked on stats plans", "Built for it"],
    ["DFS book props", "Not on the stats API", "PrizePicks, Underdog, Betr, Sleeper…"],
  ] as const,
}

export const PANDASCORE_FEATURE = {
  headers: ["", "PandaScore", "KashRock"] as const,
  rows: [
    ["Betting / DFS use", "Restricted on stats plans", "Built for pick'em, props, models"],
    ["Pricing", "Per videogame, per month", "Flat: free, then $29+/mo"],
    ["Onboarding", "Account + plan per title", "Instant key. First call in ~30s"],
    ["CS2 path", "/csgo/ (legacy prefix)", "/v6/esports/cs2/…"],
    ["Auth", "token= query param", "X-API-Key header"],
    ["DFS-book props", "Not the product", "PrizePicks, Underdog, Betr, Sleeper, Dabble, Boom, Pick6, ParlayPlay"],
    ["Free schedule", "Yes — 0€ calendar plan", "Sandbox is CS2 props; matches are Builder"],
    ["Settlement", "Fixtures / post-match stats", "Hit / miss / push on the same stat_type"],
  ] as const,
}

export const PANDASCORE_CALLS = [
  {
    them: {
      label: "PandaScore — upcoming CS",
      code: `curl "https://api.pandascore.co/csgo/matches/upcoming?token=YOUR_TOKEN"`,
    },
    us: {
      label: "KashRock — same job",
      code: `curl -H "X-API-Key: YOUR_API_KEY" \\\n  "${API_BASE}/v6/esports/cs2/matches?status=upcoming"`,
    },
    note: "PandaScore still uses /csgo/ for CS2. KashRock uses cs2 in the path. Matches are Builder.",
  },
  {
    them: {
      label: "PandaScore — DFS player props",
      code: "Not on stats plans.\nBetting-related use is blocked.\nOdds is a separate sales product.",
    },
    us: {
      label: "KashRock — the board you actually need",
      code: `curl -H "X-API-Key: YOUR_API_KEY" \\\n  "${API_BASE}/v6/esports/cs2/props"`,
    },
    note: "Sandbox covers CS2 props. Hobby unlocks the other titles.",
  },
] as const

export const PANDASCORE_MIGRATION = [
  {
    title: "Get a key. Skip the per-game quote.",
    body: "Create a Sandbox key in the console. No card. CS2 props work immediately so you can prove the schema.",
  },
  {
    title: "Swap host and auth.",
    body: "PandaScore: api.pandascore.co with ?token=. KashRock: X-API-Key on every /v6 call. Do not put the key in the query string.",
  },
  {
    title: "Replace /csgo/matches/upcoming.",
    body: "Call GET /v6/esports/cs2/matches?status=upcoming. Sport slug is cs2, not csgo. Keep your own match UUID mapped to kr_match_id / slug.",
  },
  {
    title: "If you were blocked for betting use, add the board.",
    body: "GET /v6/esports/{sport}/props for DFS lines. Grade with GET /v6/esports/{sport}/results on the same stat_type.",
  },
] as const

export const ABIOS_PRICE = {
  headers: ["", "Abios / Kambi", "KashRock"] as const,
  rows: [
    ["See the price", "Contact sales. No public rate card", "On the page. Starts free, then $29/mo"],
    ["Time to first call", "After a contract and region review", "Under 30 seconds"],
    ["Free tier", "No self-serve sandbox", "Sandbox $0. CS2 props"],
    ["Who it's sold to", "Licensed sportsbooks and media", "Devs, tools, models"],
    ["DFS book props", "Not the indie path", "PrizePicks, Underdog, Betr, Sleeper…"],
    ["Outcome grades", "Build your own", "Hit / miss / push"],
  ] as const,
}

export const ABIOS_FEATURE = {
  headers: ["", "Abios / Kambi", "KashRock"] as const,
  rows: [
    ["Pricing", "Quote-based. Enterprise-gated", "Starts free, then $29+/mo"],
    ["Onboarding", "Sales call + vetting", "Instant key. Sandbox in ~60s"],
    ["DFS-book props", "Not the focus", "PrizePicks, Underdog, Betr, Sleeper, Dabble, Boom, Pick6, ParlayPlay"],
    ["Outcome verification", "Build your own", "Hit / miss / push built in"],
    ["IDs", "Abios series / match IDs", "kr_ event, prop, and offer IDs across books"],
    ["Best fit", "Large sportsbooks", "Indie devs, small tools, models"],
  ] as const,
}

export const ABIOS_CALLS = [
  {
    them: {
      label: "Abios Atlas — upcoming series",
      code: `curl -H "Abios-Secret: YOUR_SECRET" \\\n  "https://atlas.abiosgaming.com/v3/series?filter=start!=null,end=null,deleted_at=null&order=start-asc"`,
    },
    us: {
      label: "KashRock — same job",
      code: `curl -H "X-API-Key: YOUR_API_KEY" \\\n  "${API_BASE}/v6/esports/cs2/matches?status=upcoming"`,
    },
    note: "Abios calls a BO3 a series. KashRock returns that as a match. Matches are Builder.",
  },
  {
    them: {
      label: "Abios — DFS player props",
      code: "Odds and widgets are sportsbook packages.\nSold through sales. No self-serve DFS board.",
    },
    us: {
      label: "KashRock — PrizePicks / Underdog board",
      code: `curl -H "X-API-Key: YOUR_API_KEY" \\\n  "${API_BASE}/v6/esports/cs2/props"`,
    },
    note: "One propId across books. Over and under share it.",
  },
] as const

export const ABIOS_MIGRATION = [
  {
    title: "Stop waiting on a quote.",
    body: "Create a Sandbox key now. If you already have an Abios quote, you can compare it to published KashRock plans on /pricing.",
  },
  {
    title: "Swap host and auth.",
    body: "Abios Atlas: atlas.abiosgaming.com with Abios-Secret. KashRock: X-API-Key on https://kashrock.up.railway.app.",
  },
  {
    title: "Map series → matches.",
    body: "GET /v3/series becomes GET /v6/esports/{sport}/matches?status=upcoming|live|finished. Store kr_match_id next to the old Abios series id.",
  },
  {
    title: "Add the board you could not buy a la carte.",
    body: "GET /v6/esports/{sport}/props for DFS lines. GET /v6/esports/{sport}/results to grade hit / miss / push.",
  },
] as const
