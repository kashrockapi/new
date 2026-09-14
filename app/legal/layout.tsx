import type { Metadata } from "next"

import { selfAlternates } from "@/lib/seo/site"

export const metadata: Metadata = {
  title: "Legal",
  description: "KashRock privacy policy, terms of service, and refunds.",
  alternates: selfAlternates("/legal"),
}

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
