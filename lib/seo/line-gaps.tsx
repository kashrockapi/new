import type { SportRefContent } from "@/components/seo/SportReferencePage"
import { RefBullets, RefCallout, RefSub } from "@/components/seo/reference"

/** Live CS2 board sample (Redis prove 2026-09-12): khaN maps 1–2 kills across 5 DFS books. */
const SAMPLE = {
  source: "kashrock",
  sport: "cs2",
  min_gap: 0.5,
  total: 70,
  returned: 1,
  offset: 0,
  limit: 1,
  has_more: true,
  gaps: [
    {
      gap_id: "gap_ce3fbab1ef1e",
      player_id: "kr_pl_6b8fc7792bfe",
      player_name: "khaN",
      team: "Nemiga",
      opponent: "Just_Players",
      event_id: "kr_ev_5886cc9220e5",
      event_time: "2026-09-12T17:00:00.000Z",
      stat_type: "CS2_KILLS_MAPS_1_2",
      market: "kills",
      line: 31.5,
      line_min: 30.5,
      line_max: 32.5,
      line_gap: 2.0,
      book_count: 5,
      books: [
        { book: "sleeper", line: 30.5, propId: "kr_prop_aa230791ff25", direction: "over" },
        { book: "betr", line: 31.5, propId: "kr_prop_0a7fec48daa2", direction: "over" },
        { book: "boom", line: 31.5, propId: "kr_prop_0a7fec48daa2", direction: "over" },
        { book: "prizepicks", line: 31.5, propId: "kr_prop_0a7fec48daa2", direction: "over" },
        { book: "underdog", line: 32.5, propId: "kr_prop_67030b9dbc0f", direction: "over" },
      ],
    },
  ],
}

export const LINE_GAPS_REF: SportRefContent = {
  path: "/esports-line-gaps-api",
  title: "Esports Line Gaps API — DFS Book-vs-Book Spreads | KashRock",
  description:
    "Find DFS esports props with different lines across PrizePicks, Underdog, Betr, Sleeper, Boom, ParlayPlay & more. GET /v6/esports/{sport}/gaps returns line_gap = max − min. Hobby+.",
  keywords: [
    "esports line gaps api",
    "dfs line shopping api",
    "prizepicks underdog line difference",
    "cs2 props line gap",
    "dfs book vs book lines",
    "esports arbitrage lines api",
  ],
  jsonLdName: "KashRock Esports Line Gaps API",
  h1: (
    <>
      Esports line gaps API.
      <br />
      <span className="seo-grad">Same prop. Different DFS lines.</span>
    </>
  ),
  lede:
    "PrizePicks posts 31.5. Underdog posts 32.5. Sleeper posts 30.5. That two-kill spread is the product — not a model projection, not a consensus moneyline. A line gaps API joins the same player, event, and market across DFS books and returns line_min, line_max, and line_gap in one row.",
  toc: [
    { id: "why", label: "Why book-vs-book gaps matter" },
    { id: "schema", label: "What we normalize" },
    { id: "endpoints", label: "Core endpoint" },
    { id: "ids", label: "Identity and join keys" },
    { id: "sample", label: "Sample JSON (live DFS board)" },
    { id: "sources", label: "Which books count" },
    { id: "grading", label: "Using gaps responsibly" },
    { id: "ops", label: "Operational practices" },
    { id: "quick", label: "Quick reference" },
  ],
  samplePath: "/v6/esports/cs2/gaps?min_gap=0.5&limit=1",
  sample: SAMPLE,
  endpointRows: [
    [
      "GET /v6/esports/{sport}/gaps",
      "DFS book-vs-book line spreads (Hobby+)",
      "min_gap, player, market, book, limit",
    ],
    [
      "GET /v6/esports/{sport}/props",
      "Full live board per book",
      "book=prizepicks|underdog|…",
    ],
    ["GET /v6/esports/{sport}/lines", "Consensus mainlines (not DFS gaps)", "Hobby+"],
    ["MCP get_gaps", "Same surface from Cursor/Claude", "Hobby+"],
  ],
  fieldRows: [
    ["line_gap", "2.0", "line_max − line_min across DFS books"],
    ["line", "31.5", "Median of the DFS lines in the row"],
    ["line_min / line_max", "30.5 / 32.5", "Softest and hardest posted lines"],
    ["books[]", "sleeper…underdog", "One entry per book, sorted by line"],
    ["stat_type", "CS2_KILLS_MAPS_1_2", "Exact market — map1 ≠ maps 1–2"],
    ["gap_id", "gap_ce3fbab1ef1e", "Stable hash of sport|event|player|stat"],
  ],
  sourceRows: [
    ["Scrape each DFS app", "Fragile, blocked, drift", "DIY line shopping"],
    ["Props-only API", "You join books yourself", "Custom scanners"],
    ["KashRock /gaps", "Joined + line_gap ready", "Boards, bots, research"],
  ],
  faqs: [
    {
      q: "What is an esports line gaps API?",
      a: "An API that finds the same DFS player prop priced at different lines across books and returns the spread (line_gap = max − min) with every book’s line in one object.",
    },
    {
      q: "Is line_gap the same as stack/edge gap?",
      a: "No. Edge/stack gap is model projection minus one app line. This endpoint is book-vs-book only. Field name is always line_gap.",
    },
    {
      q: "Which books are included?",
      a: "DFS apps: PrizePicks, Underdog, Dabble, ParlayPlay, Sleeper, Betr, Boom, Pick6. Kalshi, Polymarket, and Thunderpick moneylines are not in this join.",
    },
    {
      q: "What plan do I need?",
      a: "Hobby or higher. Sandbox stays on props schema checks. Prefer MCP get_gaps after Google login.",
    },
  ],
  relatedLinks: [
    { href: "/dfs-esports-api", label: "DFS Esports API" },
    { href: "/docs/endpoints/gaps", label: "Gaps docs" },
    { href: "/docs/endpoints/props", label: "Props docs" },
    { href: "/mcp", label: "Esports MCP" },
    { href: "/coverage", label: "Coverage" },
  ],
  sections: {
    why: (
      <>
        <p>
          DFS apps do not share a clearing price. The same kill market on the same map window can
          sit a full kill (or more) apart. If you only read one book, you never see the softest
          line. If you scrape five apps, you rebuild player/event joins forever.
        </p>
        <RefCallout>
          line_gap is arithmetic on posted floats — max minus min. We do not invent lines or average
          books into a fake “true” number.
        </RefCallout>
      </>
    ),
    schema: (
      <>
        <p>
          One gap row = one player, one event, one exact <code className="text-zinc-200">stat_type</code>,
          two or more DFS books with parseable lines. Over/under pairs on the same book collapse to
          one book entry (prefer over).
        </p>
        <RefSub id="median" title="What does line mean?">
          <p>
            <code className="text-zinc-200">line</code> is the median of the DFS lines in that row.
            Soft and hard prints stay explicit as <code className="text-zinc-200">line_min</code> /{" "}
            <code className="text-zinc-200">line_max</code>.
          </p>
        </RefSub>
      </>
    ),
    endpoints: (
      <p>
        Path-style <code className="text-zinc-200">GET /v6/esports/{"{sport}"}/gaps</code>. Default{" "}
        <code className="text-zinc-200">min_gap=0.5</code>. Filter with{" "}
        <code className="text-zinc-200">player</code>, <code className="text-zinc-200">market</code>,{" "}
        <code className="text-zinc-200">market_contains</code>, or{" "}
        <code className="text-zinc-200">book</code> (book must appear in the row; full{" "}
        <code className="text-zinc-200">books[]</code> still returned).
      </p>
    ),
    ids: (
      <RefBullets
        items={[
          <>player_key prefers canonical player id, then slug, then name</>,
          <>event_key prefers sorted matchup_key so books still join when event ids diverge</>,
          <>exact canonicalize_stat_type — Map 1 does not merge into Maps 1–2</>,
          <>gap_id = sha1(sport|event_key|player_key|stat_type)[:12]</>,
        ]}
      />
    ),
    sample: (
      <p>
        Live CS2 maps 1–2 kills for khaN: Sleeper 30.5 through Underdog 32.5 →{" "}
        <code className="text-zinc-200">line_gap: 2.0</code> from{" "}
        <code className="text-zinc-200">/v6/esports/cs2/gaps</code>.
      </p>
    ),
    sources: (
      <p>
        Only DFS apps with float player props. Zero or null lines (including moneyline rows) never
        enter the gap math. Promo sentinel lines ≤ 0 are excluded.
      </p>
    ),
    grading: (
      <>
        <p>
          A large line_gap is a shopping signal, not automatic edge. Grade against settled results
          and your own model — do not confuse this with stack <code className="text-zinc-200">gap</code>{" "}
          (model − app line).
        </p>
        <RefCallout>
          sort is line_gap desc, then book_count desc — softest spreads surface first.
        </RefCallout>
      </>
    ),
    ops: (
      <RefBullets
        items={[
          <>Hobby+ required; sandbox returns 403 on /gaps</>,
          <>Computed on-request from Redis prop boards — no upstream scrape</>,
          <>Prefer MCP get_gaps so agents do not invent endpoints</>,
          <>Empty board → gaps: [] — never mock rows</>,
        ]}
      />
    ),
    quick: (
      <p>
        Curl: <code className="text-zinc-200">/v6/esports/cs2/gaps?min_gap=0.5</code>. Docs:{" "}
        <a href="/docs/endpoints/gaps" className="text-white underline">
          /docs/endpoints/gaps
        </a>
        . DFS hub:{" "}
        <a href="/dfs-esports-api" className="text-white underline">
          /dfs-esports-api
        </a>
        .
      </p>
    ),
  },
}
