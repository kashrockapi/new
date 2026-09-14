type EsportsApiLinkProps = {
  className?: string
}

export function EsportsApiLink({
  className = "text-white underline",
}: EsportsApiLinkProps) {
  return (
    <a href="/esports-data-api" className={className}>
      Esports API
    </a>
  )
}
