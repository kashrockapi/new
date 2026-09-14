export const DFS_BOOK_LOGOS = [
  { name: "PrizePicks", src: "/logos/prizepicks.png" },
  { name: "Underdog", src: "/logos/underdog.png" },
  { name: "Betr", src: "/logos/betr.png" },
  { name: "Sleeper", src: "/logos/sleeper.png" },
  { name: "Dabble", src: "/logos/dabble.png" },
  { name: "Boom", src: "/logos/boom.png" },
  { name: "Pick6", src: "/logos/pick6.png" },
  { name: "ParlayPlay", src: "/logos/parlayplay.png" },
] as const

export const SPORTSBOOK_LOGOS = [
  { name: "Thunderpick", src: "/logos/thunderpick.png" },
  { name: "Cloudbet", src: "/logos/cloudbet.png" },
  { name: "BetRivers", src: "/logos/betrivers.png" },
  { name: "Pinnacle", src: "/logos/pinnacle.png" },
  { name: "Bovada", src: "/logos/bovada.png" },
  { name: "Kalshi", src: "/logos/kalshi.png" },
  { name: "Polymarket", src: "/logos/polymarket.png" },
] as const

export const BOOK_LOGOS = [
  ...DFS_BOOK_LOGOS,
  ...SPORTSBOOK_LOGOS,
] as const
