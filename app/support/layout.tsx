import type { Metadata } from "next"

import { selfAlternates } from "@/lib/seo/site"

export const metadata: Metadata = {
  title: "Support",
  description: "KashRock support and ticket help for the esports data API.",
  alternates: selfAlternates("/support"),
  robots: { index: false, follow: false },
}

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
