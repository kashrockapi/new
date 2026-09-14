import type { Metadata } from "next"

import { JsonLd } from "@/components/seo/JsonLd"
import { MarketingShell } from "@/components/seo/MarketingShell"
import { DATA_API_DESCRIPTION, DATA_API_FAQS, DATA_API_TITLE } from "@/lib/seo/copy"
import { GAME_LOGOS } from "@/lib/seo/game-logos"
import { faqPageLd, softwareApplicationLd } from "@/lib/seo/schema"

export const metadata: Metadata = {
  title: { absolute: DATA_API_TITLE },
  description: DATA_API_DESCRIPTION,
  alternates: { canonical: "https://www.kashrock.com/esports-data-api" },
  keywords: [
    "esports api",
    "esports data api",
    "esports stats api",
    "esports match api",
    "esports score api",
    "cs2 api",
    "lol esports api",
    "dota 2 api",
  ],
  openGraph: {
    title: DATA_API_TITLE,
    description: DATA_API_DESCRIPTION,
    url: "https://www.kashrock.com/esports-data-api",
    siteName: "KashRock",
  },
  twitter: { card: "summary_large_image", title: DATA_API_TITLE, description: DATA_API_DESCRIPTION },
}

const PILLARS = [
  { title: "Props and lines", body: "Live ingested player props across CS2, Valorant, LoL, Dota 2, COD, R6, MLBB, and Deadlock. One schema, many books." },
  { title: "Matches and stats", body: "Schedules, box scores, game logs, and map-level stats — not just who won." },
  { title: "Stable IDs", body: "Players, teams, matches, and props keep the same ID when a book spells the name differently." },
]

export default function EsportsDataApiPage() {
  const url = "https://www.kashrock.com/esports-data-api"
  return (
    <MarketingShell>
      <JsonLd
        data={[
          softwareApplicationLd({
            name: "KashRock Esports API",
            url,
            description: DATA_API_DESCRIPTION,
          }),
          faqPageLd(DATA_API_FAQS),
        ]}
      />
      <section className="relative pt-24 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 seo-grid opacity-30 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
            Esports API.<br />
            <span className="seo-grad">Props, odds &amp; stats for 8 titles.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            One affordable esports API: normalized props, lines, matches, live scores, and player stats. Instant key. No enterprise quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/pricing" className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-base font-medium rounded-sm hover:bg-zinc-200">
              Get API Key
            </a>
            <a href="/dfs-esports-api" className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-zinc-700 text-white text-base font-medium rounded-sm hover:bg-zinc-900">
              DFS Esports API — PrizePicks & Underdog
            </a>
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {GAME_LOGOS.map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} className={`h-8 w-auto ${logo.invert ? "invert" : ""}`} />
            ))}
          </div>
          <p className="text-base text-zinc-400 mt-10">
            Python:{" "}
            <a href="https://github.com/ovitalszn-cyber/kashrock-python" className="text-white underline">kashrock-python</a>
            {" "}· JS:{" "}
            <a href="https://github.com/ovitalszn-cyber/kashrock-js" className="text-white underline">kashrock-js</a>
          </p>
        </div>
      </section>
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-10">
          What the esports API covers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((item) => (
            <div key={item.title} className="bg-[#0C0D0F] border border-white/10 rounded-sm p-8">
              <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
              <p className="text-base text-zinc-400 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="text-base text-zinc-400 mt-10">
          Shipping this weekend? Start on{" "}
          <a href="/build-esports-app" className="text-white underline">Build an esports app</a>
          {" "}or the{" "}
          <a href="/quickstart" className="text-white underline">quickstart</a>. Working on a specific
          build? Jump to the{" "}
          <a href="/cs2-props-api" className="text-white underline">CS2 player props API</a>, the{" "}
          <a href="/prizepicks-api" className="text-white underline">PrizePicks API</a>,{" "}
          <a href="/underdog-api" className="text-white underline">Underdog API</a>,{" "}
          <a href="/sleeper-api" className="text-white underline">Sleeper API</a>,{" "}
          <a href="/betr-api" className="text-white underline">Betr API</a>,{" "}
          <a href="/boom-api" className="text-white underline">Boom API</a>,{" "}
          <a href="/pick6-api" className="text-white underline">Pick6 API</a>,{" "}
          <a href="/thunderpick-api" className="text-white underline">Thunderpick API</a>,{" "}
          <a href="/kalshi-api" className="text-white underline">Kalshi API</a>, or{" "}
          <a href="/polymarket-api" className="text-white underline">Polymarket API</a>. Line shopping
          lives on the{" "}
          <a href="/esports-odds-api" className="text-white underline">esports odds API</a>. Full board:{" "}
          <a href="/dfs-esports-api" className="text-white underline">DFS Esports API</a>. Backtests use{" "}
          <a href="/historical-esports-data-api" className="text-white underline">historical esports data</a>. Use it from Cursor via the{" "}
          <a href="/mcp" className="text-white underline">esports MCP</a>. See{" "}
          <a href="/coverage" className="text-white underline">coverage</a> for titles and books.
        </p>
      </section>
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
          Esports Match API
        </h2>
        <p className="text-base text-zinc-400 max-w-3xl leading-relaxed">
          Upcoming, live, and finished fixtures on{" "}
          <code className="text-white">GET /v6/esports/{"{sport}"}/matches</code>
          {" "}— status, start time, and stable match IDs, not just a winner flag. Filter by{" "}
          <code className="text-zinc-300">upcoming</code>, <code className="text-zinc-300">live</code>, or{" "}
          <code className="text-zinc-300">finished</code>. Field reference:{" "}
          <a href="/docs/endpoints/matches" className="text-white underline">matches docs</a>.
        </p>
      </section>
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
          Esports Score API
        </h2>
        <p className="text-base text-zinc-400 max-w-3xl leading-relaxed">
          Live scores and in-game boxscores on{" "}
          <code className="text-white">GET /v6/esports/{"{sport}"}/live/games</code>
          {" "}and{" "}
          <code className="text-white">GET /v6/esports/{"{sport}"}/live/{"{game_id}"}/boxscore</code>
          {" "}— map score, round clock, and player K/D/A while the map is on. Field reference:{" "}
          <a href="/docs/endpoints/live" className="text-white underline">live scores docs</a>.
        </p>
      </section>
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-8">Frequently asked questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {DATA_API_FAQS.map((faq) => (
            <div key={faq.q} className="bg-[#0C0D0F] border border-white/10 rounded-sm p-8">
              <h3 className="text-lg font-medium text-white mb-2">{faq.q}</h3>
              <p className="text-base text-zinc-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </MarketingShell>
  )
}
