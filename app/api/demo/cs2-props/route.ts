import { NextResponse } from "next/server"

import { fetchLiveDemoProp } from "@/lib/demo/live-demo-props"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const sample = await fetchLiveDemoProp("cs2")
    return NextResponse.json(sample, {
      headers: { "Cache-Control": "no-store" },
    })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to load live props"
    return NextResponse.json({ detail: message }, { status: 502 })
  }
}
