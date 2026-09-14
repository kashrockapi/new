import type { Metadata } from "next"

import { AlternativePage } from "@/components/seo/AlternativePage"
import {
  ABIOS_CALLS,
  ABIOS_FEATURE,
  ABIOS_MIGRATION,
  ABIOS_PRICE,
} from "@/lib/seo/alternatives"
import { ABIOS_DESCRIPTION, ABIOS_FAQS, ABIOS_TITLE } from "@/lib/seo/cluster-copy"
import { selfAlternates } from "@/lib/seo/site"

export const metadata: Metadata = {
  title: { absolute: ABIOS_TITLE },
  description: ABIOS_DESCRIPTION,
  keywords: [
    "abios alternative",
    "abios gaming api alternative",
    "kambi esports api",
    "esports data api pricing",
  ],
  alternates: selfAlternates("/abios-alternative"),
  openGraph: {
    title: ABIOS_TITLE,
    description: ABIOS_DESCRIPTION,
    url: "https://www.kashrock.com/abios-alternative",
    siteName: "KashRock",
  },
}

export default function AbiosAlternativePage() {
  return (
    <AlternativePage
      jsonLdFaqs={ABIOS_FAQS}
      h1={
        <>
          The Abios alternative.
          <br />
          <span className="seo-grad">Starts free. No enterprise quote.</span>
        </>
      }
      lede="Abios (Kambi) sells esports data to sportsbooks through sales. No public rate card. KashRock is the developer path: CS2, Valorant, LoL, Dota and more props, lines, and stats — published pricing, instant key."
      compareTitle="KashRock vs Abios"
      headers={ABIOS_FEATURE.headers}
      rows={ABIOS_FEATURE.rows}
      priceTitle="Price: sales quote vs starts free"
      priceHeaders={ABIOS_PRICE.headers}
      priceRows={ABIOS_PRICE.rows}
      callTitle="The same call in both APIs"
      calls={ABIOS_CALLS}
      migrationTitle="Migrate from Abios"
      migrationSteps={ABIOS_MIGRATION}
      reasonsTitle="Why developers switch"
      reasons={[
        "You can see the price before you commit — no procurement cycle.",
        "You're building today, not next quarter after a contract.",
        "You need DFS-book props, not just a sportsbook feed.",
      ]}
      related={
        <>
          Also compare{" "}
          <a href="/pandascore-alternative" className="text-white underline">
            PandaScore
          </a>
          . Jump to the{" "}
          <a href="/dfs-esports-api" className="text-white underline">
            DFS Esports API
          </a>
          .
        </>
      }
    />
  )
}
