import type { Metadata } from "next"

import { Snippet } from "@/components/docs/Code"
import { DocsShell } from "@/components/docs/DocsShell"
import { SdkPanel } from "@/components/docs/SdkPanel"
import { JS_SDK, PY_SDK, SDKS } from "@/lib/sdk"
import { selfAlternates } from "@/lib/seo/site"

export const metadata: Metadata = {
  title: "SDKs",
  description:
    "Official KashRock JavaScript and Python SDKs. npm install kashrock, first live LoL prop, no signup.",
  alternates: selfAlternates("/docs/sdk"),
}

export default function SdkDocsPage() {
  return (
    <DocsShell active="sdk">
      <h1 className="text-4xl font-semibold text-white mb-4 tracking-tight">SDKs</h1>
      <p className="text-lg text-zinc-400 leading-relaxed mb-10">
        Install the package, paste the snippet, get a live LoL prop. The demo key is in the
        example — no signup. Same KashRock IDs as HTTP.
      </p>
      {SDKS.map((sdk) => (
        <SdkPanel key={sdk.name} sdk={sdk} />
      ))}

      <h2 className="text-2xl font-semibold text-white mb-3">What you can call</h2>
      <p className="text-sm text-zinc-400 mb-4">
        Props is the first call, not the whole SDK. Lines, matches, live, research, and history
        tape are on the client. Demo key is LoL props only; Hobby+ unlocks lines; Builder+
        unlocks matches, live, research, and history.
      </p>
      <Snippet title="JavaScript" code={JS_SDK.methods} />
      <Snippet title="Python" code={PY_SDK.methods} />

      <h2 className="text-2xl font-semibold text-white mb-3 mt-12">Contributing</h2>
      <p className="text-sm text-zinc-400 mb-4">
        Clone only if you are changing the client. App users should install from npm / PyPI.
      </p>
      <Snippet title="JavaScript" code={JS_SDK.clone} />
      <Snippet title="Python" code={PY_SDK.clone} />
    </DocsShell>
  )
}
