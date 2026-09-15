import { NextRequest, NextResponse } from "next/server"

import {
  fetchLiveDemoResults,
  isDemoSport,
} from "@/lib/demo/live-demo-results"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 30
const hits = new Map<string, { count: number; resetAt: number }>()

function clientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  )
}

function rateLimited(ip: string) {
  const now = Date.now()
  const row = hits.get(ip)
  if (!row || now >= row.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }
  row.count += 1
  return row.count > MAX_PER_WINDOW
}

export async function GET(request: NextRequest) {
  if (rateLimited(clientIp(request))) {
    return NextResponse.json(
      { detail: "Too many demo requests. Try again in a minute." },
      { status: 429 },
    )
  }

  const sport = request.nextUrl.searchParams.get("sport") || "cs2"
  if (!isDemoSport(sport)) {
    return NextResponse.json({ detail: `Unknown sport '${sport}'` }, { status: 404 })
  }

  try {
    const sample = await fetchLiveDemoResults(sport)
    return NextResponse.json(sample, {
      headers: { "Cache-Control": "no-store" },
    })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to load live results"
    return NextResponse.json({ detail: message }, { status: 502 })
  }
}
