import type { Metadata } from "next"

import { selfAlternates } from "@/lib/seo/site"

export const metadata: Metadata = {
  alternates: selfAlternates("/"),
  openGraph: {
    url: "https://www.kashrock.com/",
  },
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
