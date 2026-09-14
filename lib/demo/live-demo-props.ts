/** Live one-prop samples for the landing try-me — never the full board. */

import { GAME_LOGOS } from "@/lib/seo/game-logos"

export const DEMO_SPORTS = [
  "cs2",
  "lol",
  "dota2",
  "valorant",
  "cod",
  "r6",
  "mlbb",
  "deadlock",
  "apex",
] as const

export type DemoSport = (typeof DEMO_SPORTS)[number]

export type DemoSportLogo = {
  id: DemoSport
  src: string
  alt: string
  invert: boolean
}

/** Chips render the real game logo — same asset set as the sport logo row. */
export const DEMO_SPORT_LOGOS: DemoSportLogo[] = DEMO_SPORTS.map((id) => {
  const logo = GAME_LOGOS.find((entry) => entry.id === id)
  if (!logo) {
    throw new Error(`Missing game logo for demo sport '${id}'`)
  }
  return { id, src: logo.src, alt: logo.alt, invert: logo.invert }
})

export type DemoProp = {
  propId: string
  player_name: string
  stat_type: string
  line: number
  odds: number | null
  direction: string
  team: string
  book_name: string
  event_time: string
  links: { market: string }
}

export type DemoPropsResponse = {
  source: "kashrock"
  sport: string
  props: DemoProp[]
  message?: string
  ms?: number
}

const API_BASE =
  process.env.KASHROCK_API_BASE?.replace(/\/$/, "") ||
  "https://kashrock.up.railway.app"

export function isDemoSport(value: string): value is DemoSport {
  return (DEMO_SPORTS as readonly string[]).includes(value)
}

export async function fetchLiveDemoProp(sport: DemoSport): Promise<DemoPropsResponse> {
  const started = Date.now()
  const response = await fetch(`${API_BASE}/v6/demo/${sport}-prop`, {
    headers: { Accept: "application/json" },
    cache: "no-store",
  })
  if (!response.ok) {
    throw new Error(`Upstream demo returned ${response.status}`)
  }
  const data = (await response.json()) as DemoPropsResponse
  if (data?.sport !== sport || !Array.isArray(data.props)) {
    throw new Error("Demo response was not a live prop sample")
  }
  return {
    source: "kashrock",
    sport,
    props: data.props.slice(0, 1),
    message: data.message,
    ms: Date.now() - started,
  }
}
