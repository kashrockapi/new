export const CONSENSUS_TITLE =
  "Esports Consensus Odds API — Fair Lines from Sportsbooks, DFS Teams & Prediction Markets | KashRock"
export const CONSENSUS_DESCRIPTION =
  "Esports consensus odds API for CS2, Valorant, LoL, Dota & more. De-vig sportsbooks, DFS Teams (PrizePicks / Underdog / Sleeper), Kalshi, and Polymarket into one fair probability via GET /v6/esports/{sport}/lines."

export const CONSENSUS_FAQS = [
  {
    q: "What is an esports consensus odds API?",
    a: "It turns multiple venues into one fair probability per outcome. KashRock de-vigs sportsbook prices, DFS Teams mainlines, plus Kalshi and Polymarket prediction-market prices, then returns a weighted consensus and edge vs that fair number.",
  },
  {
    q: "Which endpoint returns consensus lines?",
    a: "GET /v6/esports/{sport}/lines. Pass market=match_winner, map_winner, total_maps, or map_handicap. Hobby plan or higher.",
  },
  {
    q: "How is consensus calculated?",
    a: "Each source is de-vigged so outcomes sum to 1.0. Consensus is a weighted mean — prediction markets default to weight 1.5 vs sportsbooks and DFS Teams. Edge is consensus × decimal − 1 (informational EV, not betting advice).",
  },
  {
    q: "Why mix sportsbooks, DFS Teams, and prediction markets?",
    a: "A single book can be stale or skewed. Kalshi and Polymarket are probability-priced; sportsbooks and DFS Teams publish live American prices. Together they reduce single-venue bias.",
  },
  {
    q: "What quality gates keep bad edges out?",
    a: "Liquidity floors on Kalshi and Polymarket, at least three sources for top_edges, max disagreement of 12 points, and raw edge capped at 8%. Ranking uses confidence × liquidity × edge — not raw edge alone.",
  },
  {
    q: "Is there a free tier for /lines?",
    a: "Sandbox cannot call /lines. Hobby and up can. Start free on props, then upgrade to Hobby for consensus.",
  },
] as const
