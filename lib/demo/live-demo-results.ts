/** Live graded rows for the landing outcome-verification try-me. */

import { DEMO_SPORTS, type DemoSport, isDemoSport } from "@/lib/demo/live-demo-props"

export type DemoGradeRow = {
  propId?: string
  label: string
  grade: string
  badge: string
  player_name?: string
  stat_type?: string
  line?: number | null
  direction?: string
  book_name?: string
  actual_value?: number | null
}

export type DemoResultsResponse = {
  source: "kashrock"
  sport: string
  results: DemoGradeRow[]
  message?: string
  ms?: number
}

const API_BASE =
  process.env.KASHROCK_API_BASE?.replace(/\/$/, "") ||
  "https://kashrock.up.railway.app"

export { isDemoSport, DEMO_SPORTS }
export type { DemoSport }

export async function fetchLiveDemoResults(
  sport: DemoSport,
): Promise<DemoResultsResponse> {
  const started = Date.now()
  const response = await fetch(`${API_BASE}/v6/demo/${sport}-results`, {
    headers: { Accept: "application/json" },
    cache: "no-store",
  })
  if (!response.ok) {
    throw new Error(`Upstream demo returned ${response.status}`)
  }
  const data = (await response.json()) as DemoResultsResponse
  if (data?.sport !== sport || !Array.isArray(data.results)) {
    throw new Error("Demo response was not a live results sample")
  }
  return {
    source: "kashrock",
    sport,
    results: data.results.slice(0, 3),
    message: data.message,
    ms: Date.now() - started,
  }
}
