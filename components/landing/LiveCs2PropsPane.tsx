"use client"

import { useCallback, useState } from "react"

import { TryMePropJson } from "@/components/landing/TryMePropJson"
import {
  DEMO_SPORT_LOGOS,
  type DemoPropsResponse,
  type DemoSport,
} from "@/lib/demo/live-demo-props"

export function LiveCs2PropsPane() {
  const [sport, setSport] = useState<DemoSport>("cs2")
  const [data, setData] = useState<DemoPropsResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const selectSport = (next: DemoSport) => {
    if (next === sport && data !== null) return
    setSport(next)
    setData(null)
    setError(null)
  }

  const load = useCallback(async () => {
    setData(null)
    setError(null)
    setLoading(true)
    try {
      const response = await fetch(`/api/demo/props?sport=${sport}`, {
        cache: "no-store",
      })
      const body = (await response.json()) as DemoPropsResponse & {
        detail?: string
      }
      if (!response.ok) {
        throw new Error(body.detail || `Demo failed (${response.status})`)
      }
      if (!Array.isArray(body.props)) {
        throw new Error("No live prop returned")
      }
      setData(body)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load live props")
    } finally {
      setLoading(false)
    }
  }, [sport])

  const currentLogo = DEMO_SPORT_LOGOS.find((l) => l.id === sport)
  const sportLabel = currentLogo ? currentLogo.alt : sport.toUpperCase()

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {DEMO_SPORT_LOGOS.map((logo) => (
          <button
            key={logo.id}
            type="button"
            onClick={() => selectSport(logo.id)}
            title={logo.alt}
            aria-label={logo.alt}
            aria-pressed={sport === logo.id}
            className={`h-9 px-3 flex items-center justify-center rounded-sm border transition-colors ${
              sport === logo.id
                ? "border-white/40 bg-white/10"
                : "border-white/10 hover:border-white/25"
            }`}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className={`h-4 w-auto max-w-[64px] object-contain ${
                logo.invert ? "invert" : ""
              } ${sport === logo.id ? "opacity-100" : "opacity-55"}`}
            />
          </button>
        ))}
      </div>
      <p className="font-mono text-[11px] text-zinc-500 mb-3">
        GET /v6/esports/{sport}/props
      </p>
      <pre className="font-mono text-xs leading-normal min-h-[220px]">
        {loading ? (
          <code className="text-zinc-500">{`// loading live ${sportLabel} prop…`}</code>
        ) : error ? (
          <code className="text-red-300">{`// ${error}`}</code>
        ) : data ? (
          <TryMePropJson data={data} />
        ) : (
          <code className="text-zinc-500">
            {`// one live prop. no signup.\n// press Try me`}
          </code>
        )}
      </pre>
      <button
        type="button"
        onClick={() => void load()}
        disabled={loading}
        className="mt-4 px-4 py-2 text-sm font-medium text-black bg-white hover:bg-zinc-200 disabled:opacity-60 rounded-sm"
      >
        Try me
      </button>
    </div>
  )
}
