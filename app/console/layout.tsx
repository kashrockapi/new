import type { Metadata } from "next"

import ConsoleChrome from "@/components/console/ConsoleChrome"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function ConsoleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ConsoleChrome>{children}</ConsoleChrome>
}
