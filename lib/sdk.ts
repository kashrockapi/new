export const DEMO_API_KEY = "kr_demo_swagger_public_readonly"

export type SdkGuide = {
  name: string
  repo: string
  registry: string
  registryLabel: string
  clone: string
  install: string
  usage: string
  methods: string
  note: string
}

export const JS_SDK: SdkGuide = {
  name: "JavaScript SDK",
  repo: "https://github.com/kashrockapi/kashrock-js",
  registry: "https://www.npmjs.com/package/kashrock",
  registryLabel: "npm",
  clone: "git clone https://github.com/kashrockapi/kashrock-js.git",
  install: "npm install kashrock",
  note: "Node 18+. Native fetch. Demo key is read-only: live LoL props, one prop per call, 2 requests/min. Your own key or KASHROCK_API_KEY for everything else.",
  usage: `import { KashRock } from "kashrock"

const kr = new KashRock("${DEMO_API_KEY}")
console.log((await kr.props("lol")).props[0])`,
  methods: `await kr.props("lol")
await kr.lines("lol")
await kr.matches("lol")
await kr.liveGames("lol")
await kr.researchBoard()
await kr.historyTape()`,
}

export const PY_SDK: SdkGuide = {
  name: "Python SDK",
  repo: "https://github.com/kashrockapi/kashrock-python",
  registry: "https://pypi.org/project/kashrock/",
  registryLabel: "PyPI",
  clone: "git clone https://github.com/kashrockapi/kashrock-python.git",
  install: "pip install kashrock",
  note: "Demo key is read-only: live LoL props, one prop per call, 2 requests/min. Your own key or KASHROCK_API_KEY for everything else.",
  usage: `from kashrock import KashRock

kr = KashRock("${DEMO_API_KEY}")
print(kr.props("lol")["props"][0])`,
  methods: `kr.props("lol")
kr.lines("lol")
kr.matches("lol")
kr.live_games("lol")
kr.research_board()
kr.history_tape()`,
}

export const SDKS = [JS_SDK, PY_SDK] as const
