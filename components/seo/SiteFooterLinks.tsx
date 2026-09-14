const LINKS = [
  { href: "/build-esports-app", label: "Build an esports app" },
  { href: "/quickstart", label: "Quickstart" },
  { href: "/esports-data-api", label: "Esports API" },
  { href: "/dfs-esports-api", label: "DFS Esports API" },
  { href: "/mcp", label: "Esports MCP" },
  { href: "/docs", label: "Docs" },
  { href: "/docs/sdk", label: "SDKs" },
  { href: "/legal", label: "Privacy Policy" },
  { href: "/legal?tab=terms", label: "Terms of Service" },
] as const

export function SiteFooterLinks({ className }: { className?: string }) {
  return (
    <div className={className}>
      {LINKS.map((item) => (
        <a key={item.href} href={item.href} className="text-sm text-zinc-600 hover:text-white transition-colors">
          {item.label}
        </a>
      ))}
    </div>
  )
}
