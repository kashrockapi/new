import { Snippet } from "@/components/docs/Code"
import type { SdkGuide } from "@/lib/sdk"

export function SdkPanel({ sdk }: { sdk: SdkGuide }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-white mb-3">{sdk.name}</h2>
      <p className="text-sm text-zinc-400 mb-2">
        <a href={sdk.registry} className="text-white underline">
          {sdk.registryLabel}
        </a>
        {" "}·{" "}
        <a href={sdk.repo} className="text-white underline">
          GitHub
        </a>
      </p>
      <p className="text-sm text-zinc-400 mb-4">{sdk.note}</p>
      <Snippet title="Install" code={sdk.install} />
      <Snippet title="First call" code={sdk.usage} />
    </section>
  )
}
