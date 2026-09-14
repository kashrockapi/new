import type { Metadata } from "next"

import { AlternativePage } from "@/components/seo/AlternativePage"
import {
  PANDASCORE_CALLS,
  PANDASCORE_FEATURE,
  PANDASCORE_MIGRATION,
  PANDASCORE_PRICE,
} from "@/lib/seo/alternatives"
import { PANDASCORE_DESCRIPTION, PANDASCORE_FAQS, PANDASCORE_TITLE } from "@/lib/seo/cluster-copy"
import { selfAlternates } from "@/lib/seo/site"

export const metadata: Metadata = {
  title: { absolute: PANDASCORE_TITLE },
  description: PANDASCORE_DESCRIPTION,
  keywords: [
    "pandascore alternative",
    "pandascore api alternative",
    "pandascore betting",
    "esports props api",
  ],
  alternates: selfAlternates("/pandascore-alternative"),
  openGraph: {
    title: PANDASCORE_TITLE,
    description: PANDASCORE_DESCRIPTION,
    url: "https://www.kashrock.com/pandascore-alternative",
    siteName: "KashRock",
  },
}

export default function PandaScoreAlternativePage() {
  return (
    <AlternativePage
      jsonLdFaqs={PANDASCORE_FAQS}
      h1={
        <>
          The PandaScore alternative.
          <br />
          <span className="seo-grad">Props and stats, no betting-use block.</span>
        </>
      }
      lede="PandaScore stats plans are for non-betting use, billed per videogame. KashRock is the switch for DFS, pick'em, and props: PrizePicks and Underdog boards, published prices, instant key."
      compareTitle="KashRock vs PandaScore"
      headers={PANDASCORE_FEATURE.headers}
      rows={PANDASCORE_FEATURE.rows}
      priceTitle="Price: per game vs flat"
      priceHeaders={PANDASCORE_PRICE.headers}
      priceRows={PANDASCORE_PRICE.rows}
      callTitle="The same call in both APIs"
      calls={PANDASCORE_CALLS}
      migrationTitle="Migrate from PandaScore"
      migrationSteps={PANDASCORE_MIGRATION}
      reasonsTitle="Who it's for"
      reasons={[
        "You're building pick'em, an optimizer, or a props tool that PandaScore stats terms exclude.",
        "You do not want to pay 400€+ per title when you need CS2, LoL, Dota, and Valorant together.",
        "You need DFS-book lines, not just fixtures and post-match stats.",
      ]}
      related={
        <>
          Also compare{" "}
          <a href="/abios-alternative" className="text-white underline">
            Abios
          </a>
          . DFS board:{" "}
          <a href="/dfs-esports-api" className="text-white underline">
            DFS Esports API
          </a>
          .
        </>
      }
    />
  )
}
