import type { Metadata } from "next"

import { selfAlternates } from "@/lib/seo/site"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "KashRock notes on esports data APIs, DFS props, and building without scrapers.",
  alternates: selfAlternates("/blog"),
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
