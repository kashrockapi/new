"use client"

import { useCallback, useState } from "react"

import type { DemoGradeRow } from "@/lib/demo/live-demo-results"

function badgeClass(badge: string) {
  const b = badge.toUpperCase()
  if (b === "VERIFIED" || b === "HIT") return "text-emerald-400"
  if (b === "MISS") return "text-red-400"
  if (b === "PUSH") return "text-yellow-400"
  if (b === "UNMATCHED" || b === "PENDING") return "text-zinc-400"
  return "text-zinc-300"
}

export function LiveTryMeGrading() {
  const [rows, setRows] = useState<DemoGradeRow[] | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const load = useCallback(async () => {
    setError(null)
    setMessage(null)
    setLoading(true)
    try {
      const response = await fetch("/api/demo/results?sport=cs2", {
        cache: "no-store",
      })
      const body = (await response.json()) as {
        results?: DemoGradeRow[]
        message?: string
        detail?: string
      }
      if (!response.ok) {
        throw new Error(body.detail || `Demo failed (${response.status})`)
      }
      const next = Array.isArray(body.results) ? body.results : []
      setRows(next)
      setMessage(body.message || null)
    } catch (err) {
      setRows(null)
      setError(err instanceof Error ? err.message : "Failed to load live grades")
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <div className="w-full md:w-72 bg-[#08090A] border border-white/10 rounded-sm p-4 font-mono text-xs">
      <div className="flex justify-between mb-2 pb-2 border-b border-white/5">
        <span className="text-zinc-500">Live grades</span>
        <span className="text-zinc-500">Result</span>
      </div>
      {loading ? (
        <p className="text-zinc-500 py-2">Loading live CS2 grades…</p>
      ) : error ? (
        <p className="text-red-300 py-2">{error}</p>
      ) : rows && rows.length > 0 ? (
        <div className="space-y-2">
          {rows.map((row) => (
            <div
              key={row.propId || row.label}
              className="flex justify-between gap-3"
            >
              <span className="text-zinc-300 truncate" title={row.label}>
                {row.label}
              </span>
              <span className={`shrink-0 ${badgeClass(row.badge)}`}>
                {row.badge}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-zinc-500 py-2">
          {message || "Press Try me for live hit / miss / push grades."}
        </p>
      )}
      <button
        type="button"
        onClick={() => void load()}
        disabled={loading}
        className="mt-3 w-full px-3 py-2 text-sm font-medium text-black bg-white hover:bg-zinc-200 disabled:opacity-60 rounded-sm"
      >
        Try me
      </button>
    </div>
  )
}
