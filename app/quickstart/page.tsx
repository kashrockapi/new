import type { Metadata } from "next"

import { SdkPanel } from "@/components/docs/SdkPanel"
import { FaqGrid } from "@/components/seo/FaqGrid"
import { JsonLd } from "@/components/seo/JsonLd"
import { MarketingShell } from "@/components/seo/MarketingShell"
import { DEMO_API_KEY, SDKS } from "@/lib/sdk"
import { faqPageLd } from "@/lib/seo/schema"

export const metadata: Metadata = {
  title: {
    absolute: "Esports Data API Quickstart — First Call in Under 30 Seconds | KashRock",
  },
  description:
    "Get an instant API key and pull normalized esports props, matches, and stats in under 30 seconds. curl, Python, and JavaScript examples. Free tier, no sales call.",
  alternates: { canonical: "https://www.kashrock.com/quickstart" },
  openGraph: {
    title: "Esports Data API Quickstart — First Call in Under 30 Seconds | KashRock",
    description:
      "Instant API key and normalized esports props in under 30 seconds. curl, Python, and JavaScript examples.",
    url: "https://www.kashrock.com/quickstart",
    siteName: "KashRock",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esports Data API Quickstart | KashRock",
    description:
      "Instant API key and normalized esports props in under 30 seconds. Free tier, no sales call.",
  },
}

const faqs = [
  {
    q: "Can I try it without signing up?",
    a: "Yes. The snippets include a read-only demo key that returns a live LoL prop. Create your own key in the console when you need the rest of the board.",
  },
  {
    q: "What's the base URL?",
    a: "All endpoints live under /v6/esports/. Pass your key in the X-API-Key header.",
  },
  {
    q: "What are the rate limits on the free tier?",
    a: "The demo key is 2 requests/minute. Sandbox is for development; paid plans from $29/mo raise the limits for production.",
  },
] as const

const STEPS = [
  {
    name: "Install and run",
    text: "npm install kashrock (or pip install kashrock) and run the snippet with the demo key.",
  },
  {
    name: "Get your own key",
    text: "Create a key in the console when you need more than the demo LoL prop.",
  },
  {
    name: "Read the live prop",
    text: "The first object is a live LoL prop: player, stat, line, direction, book.",
  },
] as const

export default function QuickstartPage() {
  return (
    <MarketingShell>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Make your first KashRock esports API call",
            step: STEPS.map((step, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: step.name,
              text: step.text,
            })),
          },
          faqPageLd(faqs),
        ]}
      />
      <section className="relative pt-24 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 seo-grid opacity-30 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
            Quickstart.
            <br />
            <span className="seo-grad">First call in under 30 seconds.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-12 font-light leading-relaxed">
            Paste the snippet. Live LoL prop, no signup.
          </p>

          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
            1. Install and run
          </h2>
          <p className="text-base text-zinc-400 mb-6 leading-relaxed">
            Demo key is in the example. Full clients on{" "}
            <a href="/docs/sdk" className="text-white underline">
              SDKs
            </a>
            .
          </p>
          {SDKS.map((sdk) => (
            <SdkPanel key={sdk.name} sdk={sdk} />
          ))}
          <pre className="bg-[#0C0D0F] border border-white/10 rounded-sm p-5 font-mono text-xs text-zinc-300 overflow-x-auto mb-10">{`# curl
curl -H "X-API-Key: ${DEMO_API_KEY}" \\
  "https://kashrock.up.railway.app/v6/esports/lol/props"`}</pre>

          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
            2. Get your own key
          </h2>
          <p className="text-base text-zinc-400 mb-10 leading-relaxed">
            Create a key in the{" "}
            <a href="/console" className="text-white underline">
              console
            </a>{" "}
            when you need more than the demo LoL prop — instant, no card.
          </p>

          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
            3. That&apos;s a live LoL prop
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed mb-8">
            Player, stat, line, book, KashRock IDs. Matches, live, research, and history tape
            are on the same client — see{" "}
            <a href="/docs/sdk" className="text-white underline">
              SDKs
            </a>
            .
          </p>
          <p className="text-base text-zinc-400 leading-relaxed">
            That&apos;s it. Full endpoints in the{" "}
            <a href="/docs" className="text-white underline">
              docs
            </a>
            ; see what you can build on{" "}
            <a href="/build-esports-app" className="text-white underline">
              Build an esports app
            </a>
            .
          </p>
        </div>
      </section>
      <FaqGrid faqs={faqs} />
    </MarketingShell>
  )
}
