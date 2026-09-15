'use client'

import { useEffect } from 'react'

const SUPPORT_MAILTO = 'mailto:support@kashrock.com'

/** Old 2025 ticket UI removed — /support opens email to support. */
export default function SupportPage() {
  useEffect(() => {
    window.location.href = SUPPORT_MAILTO
  }, [])

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center space-y-4 max-w-md">
        <h1 className="text-2xl font-semibold tracking-tight">Contact support</h1>
        <p className="text-zinc-400 text-sm">
          Opening your email client to{' '}
          <a href={SUPPORT_MAILTO} className="text-white underline underline-offset-2">
            support@kashrock.com
          </a>
          …
        </p>
        <a
          href={SUPPORT_MAILTO}
          className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium"
        >
          Email support
        </a>
      </div>
    </main>
  )
}
