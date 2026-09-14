type EsportsMcpLinkProps = {
  className?: string
}

export function EsportsMcpLink({
  className = "text-white underline",
}: EsportsMcpLinkProps) {
  return (
    <a href="/mcp" className={className}>
      esports MCP
    </a>
  )
}
