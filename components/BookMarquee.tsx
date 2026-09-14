import { DFS_BOOK_LOGOS, SPORTSBOOK_LOGOS } from "@/lib/seo/book-logos"

export default function BookMarquee() {
  return (
    <div
      aria-label="Books on KashRock: PrizePicks, Underdog, Betr, Sleeper, Dabble, Boom, Pick6, ParlayPlay, Thunderpick, Cloudbet, BetRivers, Pinnacle, Bovada, Kalshi, Polymarket"
      className="mt-14 mb-8 flex flex-col items-center justify-center gap-y-4"
    >
      {/* DFS Books */}
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {DFS_BOOK_LOGOS.map((book) => (
          <img
            key={book.name}
            src={book.src}
            alt={book.name}
            className="h-14 w-14 rounded-sm border border-white/10 object-cover"
          />
        ))}
      </div>

      {/* Sportsbooks & Prediction Markets */}
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {SPORTSBOOK_LOGOS.map((book) => (
          <img
            key={book.name}
            src={book.src}
            alt={book.name}
            className="h-14 w-14 rounded-sm border border-white/10 object-cover"
          />
        ))}
      </div>
    </div>
  )
}
