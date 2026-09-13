import { DocsShell } from '@/components/docs/DocsShell'
import { Curl, JsonBlock, Params, Route } from '@/components/docs/Code'

const MATCH = {
  source: 'kashrock',
  kr_match_id: 'kr_cs2_imperial-vs-bestia-2026-08-15',
  slug: 'imperial-vs-bestia-2026-08-15',
  sport: 'esports_cs2',
  status: 'not_started',
  event_time: '2026-08-15T20:00:00Z',
}

const FIXTURE = {
  fixture_id: 'fix_1634179',
  kr_match_id: 'kr_cs2_wave-esports-vs-drama-esports-2026-08-14',
  sport: 'esports_cs2',
  discipline: 'cs2',
  status: 'finished',
  slug: 'wave-esports-vs-drama-esports-2026-08-14',
}

const PREP = {
  source: 'kashrock',
  sport: 'esports_cs2',
  rdy_match_id: '10016056',
  team_stats: [{ team: 'Misa Esports', sample_size: 92, map_winrate: 46.74 }],
  map_pools: [{ team: 'Misa Esports', maps: [{ map: 'Dust2', pick_rate: 48.6, ban_rate: 4.0, win_rate: 49.8 }] }],
  form: [{ team: 'Misa Esports', results: ['WIN', 'WIN', 'WIN', 'WIN', 'WIN'] }],
}

const PLAYER_BOARD = {
  source: 'kashrock',
  sport: 'esports_cs2',
  teams: [
    {
      team: 'Misa Esports',
      players: [
        {
          nickname: 'EMSTAR',
          kd: 0.9241,
          adr: 83.7777,
          favourite_weapons: [
            { name: 'M4A4', kills: 0.4955 },
            { name: 'AK-47', kills: 0.4289 },
            { name: 'Glock-18', kills: 0.3333 },
          ],
        },
      ],
    },
  ],
}

export default function MatchesPage() {
  return (
    <DocsShell active="matches">
      <h1 className="text-4xl font-semibold text-white mb-4 tracking-tight">Matches & fixtures</h1>
      <p className="text-lg text-zinc-400 mb-8">
        Upcoming, live, and finished games. Fixtures is the full schedule board. Matches is the filtered list for one status.
      </p>

      <h2 className="text-xl font-semibold text-white mb-4">Matches</h2>
      <Route path="/v6/esports/{sport}/matches" />
      <Params rows={[
        { name: 'sport', type: 'path', required: true, note: 'cs2, valorant, lol, dota2, cod, r6, mlbb, deadlock' },
        { name: 'status', type: 'string', note: 'upcoming (default), live, finished' },
        { name: 'start_date', type: 'date', note: 'YYYY-MM-DD' },
        { name: 'end_date', type: 'date', note: 'YYYY-MM-DD' },
        { name: 'limit', type: 'int', note: 'Page size. Default 50.' },
        { name: 'offset', type: 'int', note: 'Skip N rows.' },
      ]} />
      <Curl path="/v6/esports/cs2/matches?status=upcoming&limit=1" />
      <JsonBlock title="200 · live" data={MATCH} />

      <h2 className="text-xl font-semibold text-white mb-4">Fixtures</h2>
      <Route path="/v6/esports/{sport}/fixtures" />
      <Params rows={[
        { name: 'sport', type: 'path', required: true, note: 'Same sport slugs as matches.' },
        { name: 'status', type: 'string', note: 'upcoming, live, ended (also accepts not_started / running / finished)' },
        { name: 'start_date', type: 'date', note: 'YYYY-MM-DD' },
        { name: 'end_date', type: 'date', note: 'YYYY-MM-DD' },
      ]} />
      <Curl path="/v6/esports/cs2/fixtures" />
      <JsonBlock title="200 · live" data={FIXTURE} />

      <h2 className="text-xl font-semibold text-white mb-4">CS2 match prep</h2>
      <p className="text-zinc-400 mb-4">
        Team stats, map pool, form, and head-to-head for a CS2 match. Accepts a KashRock{' '}
        <code className="text-zinc-300">-vs-</code> slug or numeric match id.
      </p>
      <Route path="/v6/esports/cs2/matches/{match_slug}/prep" />
      <Params rows={[
        { name: 'match_slug', type: 'path', required: true, note: 'KR slug or numeric match id' },
        { name: 'team1', type: 'string', note: 'Optional resolve override' },
        { name: 'team2', type: 'string', note: 'Optional resolve override' },
        { name: 'date', type: 'date', note: 'Optional YYYY-MM-DD resolve override' },
      ]} />
      <Curl path="/v6/esports/cs2/matches/10016056/prep" />
      <JsonBlock title="200 · live (truncated)" data={PREP} />

      <h2 className="text-xl font-semibold text-white mb-4">CS2 player board + favourite weapons</h2>
      <Route path="/v6/esports/cs2/matches/{match_slug}/player-board" />
      <Curl path="/v6/esports/cs2/matches/10016056/player-board" />
      <JsonBlock title="200 · live (truncated)" data={PLAYER_BOARD} />

      <h2 className="text-xl font-semibold text-white mb-4">CS2 tournament maps</h2>
      <Route path="/v6/esports/cs2/tournaments/{tournament_id}/maps" />
      <Curl path="/v6/esports/cs2/tournaments/117367/maps" />

      <p className="text-sm text-zinc-500">
        Also: <code className="text-zinc-300">/{'{sport}'}/matches/live</code>,{' '}
        <code className="text-zinc-300">/{'{sport}'}/upcoming/matches</code>,{' '}
        <code className="text-zinc-300">/{'{sport}'}/completed/matches</code>,{' '}
        <code className="text-zinc-300">/{'{sport}'}/schedule</code>,{' '}
        <code className="text-zinc-300">/{'{sport}'}/streams</code>,{' '}
        <code className="text-zinc-300">/{'{sport}'}/teams/h2h</code>. Live in-game KDA:{' '}
        <a href="/docs/endpoints/live" className="text-white underline">
          /docs/endpoints/live
        </a>
        .
      </p>
    </DocsShell>
  )
}
