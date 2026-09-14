import type { Metadata } from "next"

import { SportReferencePage } from "@/components/seo/SportReferencePage"
import { LINE_GAPS_REF } from "@/lib/seo/line-gaps"

export const metadata: Metadata = {
  title: { absolute: LINE_GAPS_REF.title },
  description: LINE_GAPS_REF.description,
  keywords: LINE_GAPS_REF.keywords,
  alternates: { canonical: LINE_GAPS_REF.path },
  openGraph: {
    title: LINE_GAPS_REF.title,
    description: LINE_GAPS_REF.description,
    url: `https://www.kashrock.com${LINE_GAPS_REF.path}`,
    siteName: "KashRock",
  },
}

export default function EsportsLineGapsApiPage() {
  return <SportReferencePage content={LINE_GAPS_REF} />
}
