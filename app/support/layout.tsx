import type { Metadata } from "next"

import { selfAlternates } from "@/lib/seo/site"

export const metadata: Metadata = {
  title: "Support",
  description: "Email KashRock support at support@kashrock.com.",
  alternates: selfAlternates("/support"),
  robots: { index: true, follow: true },
}

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
