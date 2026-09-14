type Call = { label: string; code: string }

type CallCompareProps = {
  them: Call
  us: Call
  note?: string
}

export function CallCompare({ them, us, note }: CallCompareProps) {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CodePanel tone="them" {...them} />
        <CodePanel tone="us" {...us} />
      </div>
      {note ? <p className="text-sm text-zinc-500 mt-3">{note}</p> : null}
    </div>
  )
}

function CodePanel({
  label,
  code,
  tone,
}: Call & { tone: "them" | "us" }) {
  const us = tone === "us"
  return (
    <div
      className={`bg-[#0C0D0F] border rounded-sm overflow-hidden ${
        us ? "border-white/25" : "border-white/10"
      }`}
    >
      <div className="px-4 py-2 border-b border-white/5 flex justify-between items-center">
        <span className={us ? "text-white text-sm font-medium" : "text-zinc-500 text-sm"}>
          {label}
        </span>
        <span className="text-[10px] uppercase text-zinc-600">
          {code.trim().startsWith("curl") ? "GET" : ""}
        </span>
      </div>
      <pre className="p-4 font-mono text-xs leading-relaxed overflow-x-auto text-zinc-300 whitespace-pre-wrap">
        {code}
      </pre>
    </div>
  )
}
