import type { Metadata } from 'next'
import { selfAlternates } from '@/lib/seo/site'
import { DocsShell } from '@/components/docs/DocsShell'
import { Curl, JsonBlock, Params, Route } from '@/components/docs/Code'


export const metadata: Metadata = {
  title: 'Live endpoint',
  description: 'GET live matches and live boxscore frames.',
  alternates: selfAlternates('/docs/endpoints/live'),
}

const GAMES = {
  sport: 'cs2',
  total: 1,
  games: [
    {
      game_id: '2397756',
      match_id: '2397756',
      blue_code: 'Voca',
      red_code: 'Liquid',
    },
  ],
}

const BOX = {
  sport: 'cs2',
  game_id: '2397756',
  boxscore: {
    map_name: 'Anubis',
    round: 16,
    round_phase: 'bomb',
    round_clock: '0:07',
    blue: { map_score: 10, kills: 69 },
    red: { map_score: 5, kills: 44 },
    players: [
      { nickname: 'Jorko', side: 'blue', kills: 17, deaths: 7, assists: 2, alive: true },
      { nickname: 'dare', side: 'red', kills: 10, deaths: 14, assists: 2, alive: true },
    ],
  },
}

const ODDS_GAMES = {
  sport: 'cs2',
  status: 'all',
  total: 31,
  games: [
    {
      kr_match_id: 'kr_cs2_sashi-vs-color-14-09-2026',
      match_slug: 'sashi-vs-color-14-09-2026',
      home_team: 'Sashi',
      away_team: 'Color',
      status: 'live',
      score: { home: '0', away: '1', current_period: 2 },
      open_markets: 134,
      shifts_count: 100,
      stream_url: 'https://player.kick.com/cct_cs2',
      updated_at: '2026-09-14T14:07:25.205791+00:00',
    },
    {
      kr_match_id: 'kr_cs2_ecstatic-vs-linx-legaxy-14-09-2026',
      match_slug: 'ecstatic-vs-linx-legaxy-14-09-2026',
      home_team: 'Ecstatic',
      away_team: 'Linx Legaxy',
      status: 'prematch',
      event_time: '2026-09-14T17:00:00.000Z',
      books: ['betwinner', 'novibet', 'onexbet'],
      open_markets: 1,
      shifts_count: 0,
      updated_at: '2026-09-14T14:01:49.088378+00:00',
    },
  ],
}

const MATCH_ODDS = {
  sport: 'cs2',
  match_slug: 'sashi-vs-color-14-09-2026',
  kr_match_id: 'kr_cs2_sashi-vs-color-14-09-2026',
  status: 'live',
  book: 'thunderpick',
  total_open_markets: 134,
  shifts_count: 100,
  markets: [
    {
      id: '208878254',
      name: 'Match Winner',
      market_type: 'match_winner',
      selections: [
        { id: '522916345', name: 'Sashi', odds: 2.15, american_odds: 115, movement: 'steady' },
        { id: '522916344', name: 'Color', odds: 1.62, american_odds: -161, movement: 'steady' },
      ],
    },
  ],
  updated_at: '2026-09-14T14:07:25.205791+00:00',
}

const ODDS_HISTORY = {
  sport: 'cs2',
  game_id: 'kr_cs2_sashi-vs-color-14-09-2026',
  total_shifts: 1,
  history: [
    {
      market_id: '208878320',
      market_name: 'Map winner & Total rounds - Map 3',
      selection_id: '522916560',
      selection_name: 'Color - Over',
      prev_odds: 4.4,
      new_odds: 3.5,
      odds_delta: -0.9,
      movement: 'shortening',
      prev_line: 22.5,
      new_line: 21.5,
      ts: '2026-09-14T14:07:25.205454+00:00',
    },
  ],
}

export default function LiveInGamePage() {
  return (
    <DocsShell active="live">
      <h1 className="text-4xl font-semibold text-white mb-4 tracking-tight">Live in-game</h1>
      <p className="text-lg text-zinc-400 mb-8">
        Mid-map K/D/A, alive state, round clock. Redis-backed telemetry — not the finished-match
        boxscore path. Builder plan. MCP: <code className="text-white">get_live_boxscore</code>.
      </p>

      <h2 className="text-xl font-semibold text-white mb-4">List live games</h2>
      <Route path="/v6/esports/{sport}/live/games" />
      <Params rows={[
        { name: 'sport', type: 'path', required: true, note: 'cs2, valorant, lol, dota2, cod, r6, …' },
      ]} />
      <Curl path="/v6/esports/cs2/live/games" />
      <JsonBlock title="200 · live" data={GAMES} />

      <h2 className="text-xl font-semibold text-white mb-4">Live boxscore</h2>
      <Route path="/v6/esports/{sport}/live/{game_id}/boxscore" />
      <Params rows={[
        { name: 'sport', type: 'path', required: true, note: 'Same sport slugs as matches.' },
        { name: 'game_id', type: 'path', required: true, note: 'From /live/games.' },
      ]} />
      <Curl path="/v6/esports/cs2/live/2397756/boxscore" />
      <JsonBlock title="200 · live" data={BOX} />

      <h2 className="text-xl font-semibold text-white mb-4">Frame & events</h2>
      <p className="text-sm text-zinc-400 mb-4">
        Also: <code className="text-zinc-300">/{'{sport}'}/live/{'{game_id}'}/frames</code>,{' '}
        <code className="text-zinc-300">/{'{sport}'}/live/{'{game_id}'}/events</code>.
      </p>
      <p className="text-sm text-zinc-500 mb-12">
        Finished series stats stay on{' '}
        <code className="text-zinc-300">/{'{sport}'}/matches/{'{slug}'}/boxscore</code> (MCP{' '}
        <code className="text-zinc-300">get_boxscore</code>).
      </p>

      <h2 className="text-xl font-semibold text-white mb-4">Shifting betting odds (live & prematch)</h2>
      <p className="text-sm text-zinc-400 mb-4">
        Real-time shifting odds across sportsbooks (Bovada, Thunderpick, Cloudbet, BetRivers, and quality sharp books) + prediction markets (Kalshi, Polymarket) with automated shift detection. Filter by match state with <code className="text-zinc-300">status=all|live|prematch</code>.
      </p>
      <Route path="/v6/esports/{sport}/live/odds" />
      <Params rows={[
        { name: 'sport', type: 'path', required: true, note: 'cs2, lol, dota2, valorant, …' },
        { name: 'status', type: 'query', required: false, note: 'Filter: all (default) | live | prematch' },
      ]} />
      <Curl path="/v6/esports/cs2/live/odds?status=all" />
      <JsonBlock title="200 · odds games" data={ODDS_GAMES} />

      <h2 className="text-xl font-semibold text-white mb-4 mt-8">Match odds & market tree</h2>
      <Route path="/v6/esports/{sport}/live/{game_id}/odds" />
      <Params rows={[
        { name: 'sport', type: 'path', required: true, note: 'Sport key.' },
        { name: 'game_id', type: 'path', required: true, note: 'KashRock slug or kr_match_id.' },
      ]} />
      <Curl path="/v6/esports/cs2/live/kr_cs2_sashi-vs-color-14-09-2026/odds" />
      <JsonBlock title="200 · match odds" data={MATCH_ODDS} />

      <h2 className="text-xl font-semibold text-white mb-4 mt-8">Odds shift history (audit log)</h2>
      <p className="text-sm text-zinc-400 mb-4">
        Complete timeline of odds movements, price shortenings/lengthenings, and line changes recorded for the match.
      </p>
      <Route path="/v6/esports/{sport}/live/{game_id}/odds/history" />
      <Params rows={[
        { name: 'sport', type: 'path', required: true, note: 'Sport key.' },
        { name: 'game_id', type: 'path', required: true, note: 'KashRock slug or kr_match_id.' },
      ]} />
      <Curl path="/v6/esports/cs2/live/kr_cs2_sashi-vs-color-14-09-2026/odds/history" />
      <JsonBlock title="200 · shift history" data={ODDS_HISTORY} />

      <h2 className="text-xl font-semibold text-white mb-4 mt-12">WebSocket wire</h2>
      <p className="text-sm text-zinc-400 mb-4">
        Push updates under 2s after Redis write. Builder+. Auth via{' '}
        <code className="text-zinc-300">?api_key=</code> or Bearer on handshake.
      </p>
      <Route path="WS /v6/esports/live/ws" />
      <pre className="p-4 font-mono text-xs text-zinc-300 bg-[#0C0D0F] border border-white/10 rounded-lg overflow-x-auto mb-4">{`{"op":"subscribe","sport":"cs2","game_id":"2397756"}
{"op":"subscribe","sport":"cs2","game_id":"*"}
{"op":"ping"}`}</pre>
      <p className="text-sm text-zinc-500">
        Server sends <code className="text-zinc-300">snapshot</code>, then{' '}
        <code className="text-zinc-300">update</code> / <code className="text-zinc-300">event</code> /{' '}
        <code className="text-zinc-300">odds</code> / <code className="text-zinc-300">games_list</code> ticks.
      </p>
    </DocsShell>
  )
}
