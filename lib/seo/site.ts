/** Site origin + self-canonical helpers for SEO pages. */

export const SITE_ORIGIN = "https://www.kashrock.com"

export function pageCanonical(path: string): string {
  const raw = String(path || "/").trim() || "/"
  if (raw === "/") return `${SITE_ORIGIN}/`
  const normalized = raw.startsWith("/") ? raw : `/${raw}`
  return `${SITE_ORIGIN}${normalized}`
}

export function selfAlternates(path: string): { canonical: string } {
  return { canonical: pageCanonical(path) }
}
