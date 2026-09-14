import type { ReactNode } from "react"

import { CallCompare } from "@/components/seo/CallCompare"
import { CompareTable } from "@/components/seo/CompareTable"
import { EsportsApiLink } from "@/components/seo/EsportsApiLink"
import { FaqGrid } from "@/components/seo/FaqGrid"
import { JsonLd } from "@/components/seo/JsonLd"
import { MarketingShell } from "@/components/seo/MarketingShell"
import { MigrationSteps } from "@/components/seo/MigrationSteps"
import { faqPageLd, howToLd } from "@/lib/seo/schema"

type Faq = { q: string; a: string }
type CallPair = {
  them: { label: string; code: string }
  us: { label: string; code: string }
  note?: string
}
type Step = { title: string; body: string }

type AlternativePageProps = {
  jsonLdFaqs: readonly Faq[]
  h1: ReactNode
  lede: ReactNode
  compareTitle: string
  headers: readonly string[]
  rows: readonly (readonly string[])[]
  priceTitle?: string
  priceHeaders?: readonly string[]
  priceRows?: readonly (readonly string[])[]
  callTitle?: string
  calls?: readonly CallPair[]
  migrationTitle?: string
  migrationSteps?: readonly Step[]
  reasonsTitle: string
  reasons: string[]
  related: ReactNode
}

export function AlternativePage({
  jsonLdFaqs,
  h1,
  lede,
  compareTitle,
  headers,
  rows,
  priceTitle,
  priceHeaders,
  priceRows,
  callTitle,
  calls,
  migrationTitle,
  migrationSteps,
  reasonsTitle,
  reasons,
  related,
}: AlternativePageProps) {
  const jsonLd: unknown[] = [faqPageLd(jsonLdFaqs)]
  if (migrationTitle && migrationSteps?.length) {
    jsonLd.push(howToLd({ name: migrationTitle, steps: migrationSteps }))
  }

  return (
    <MarketingShell>
      <JsonLd data={jsonLd} />
      <Hero h1={h1} lede={lede} />

      <Block title={compareTitle}>
        <CompareTable headers={headers} rows={rows} />
      </Block>

      {priceTitle && priceHeaders && priceRows ? (
        <Block title={priceTitle}>
          <CompareTable headers={priceHeaders} rows={priceRows} />
        </Block>
      ) : null}

      {callTitle && calls?.length ? (
        <Block title={callTitle}>
          {calls.map((pair) => (
            <CallCompare key={pair.us.label} {...pair} />
          ))}
        </Block>
      ) : null}

      {migrationTitle && migrationSteps?.length ? (
        <Block title={migrationTitle}>
          <MigrationSteps steps={migrationSteps} />
          <a
            href="/pricing"
            className="inline-block mt-10 px-8 py-3.5 bg-white text-black text-base font-medium rounded-sm hover:bg-zinc-200"
          >
            Get a free key
          </a>
        </Block>
      ) : null}

      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-8">
          {reasonsTitle}
        </h2>
        <ul className="space-y-4 max-w-3xl">
          {reasons.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base text-zinc-300">
              <span className="text-white mt-0.5">—</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-base text-zinc-400 mt-10">
          {related} Full product: the <EsportsApiLink />.
        </p>
      </section>

      <FaqGrid faqs={jsonLdFaqs} />
    </MarketingShell>
  )
}

function Hero({ h1, lede }: { h1: ReactNode; lede: ReactNode }) {
  return (
    <section className="relative pt-24 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 seo-grid opacity-30 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
          {h1}
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          {lede}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/pricing"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-base font-medium rounded-sm hover:bg-zinc-200"
          >
            Get API Key
          </a>
          <a
            href="/docs"
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-zinc-700 text-white text-base font-medium rounded-sm hover:bg-zinc-900"
          >
            Read Documentation
          </a>
        </div>
      </div>
    </section>
  )
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-10">{title}</h2>
      {children}
    </section>
  )
}
