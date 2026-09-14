import type { ReactNode } from "react"

import type { DemoPropsResponse } from "@/lib/demo/live-demo-props"

function JsonLine({ children }: { children: ReactNode }) {
  return <>{children}{"\n"}</>
}

export function TryMePropJson({ data }: { data: DemoPropsResponse }) {
  const prop = data.props[0]
  if (!prop) {
    return (
      <code>
        <span className="text-zinc-400">
          {`// ${data.message || `No active props on the board right now for ${data.sport.toUpperCase()}.`}`}
        </span>
      </code>
    )
  }
  return (
    <code>
      <JsonLine>
        <span className="text-white">{"{"}</span>
      </JsonLine>
      <JsonLine>
        {"  "}
        <span className="token-key">&quot;source&quot;</span>:{" "}
        <span className="token-string">&quot;{data.source}&quot;</span>,
      </JsonLine>
      <JsonLine>
        {"  "}
        <span className="token-key">&quot;sport&quot;</span>:{" "}
        <span className="token-string">&quot;{data.sport}&quot;</span>,
      </JsonLine>
      <JsonLine>
        {"  "}
        <span className="token-key">&quot;props&quot;</span>:{" "}
        <span className="text-white">[</span>
      </JsonLine>
      <JsonLine>
        {"    "}
        <span className="text-white">{"{"}</span>
      </JsonLine>
      <JsonLine>
        {"      "}
        <span className="token-key">&quot;propId&quot;</span>:{" "}
        <span className="token-string">&quot;{prop.propId}&quot;</span>,
      </JsonLine>
      <JsonLine>
        {"      "}
        <span className="token-key">&quot;player_name&quot;</span>:{" "}
        <span className="token-string">&quot;{prop.player_name}&quot;</span>,
      </JsonLine>
      <JsonLine>
        {"      "}
        <span className="token-key">&quot;stat_type&quot;</span>:{" "}
        <span className="token-string">&quot;{prop.stat_type}&quot;</span>,
      </JsonLine>
      <JsonLine>
        {"      "}
        <span className="token-key">&quot;line&quot;</span>:{" "}
        <span className="token-number">{prop.line}</span>,
      </JsonLine>
      <JsonLine>
        {"      "}
        <span className="token-key">&quot;odds&quot;</span>:{" "}
        <span className="token-number">
          {prop.odds === null ? "null" : prop.odds}
        </span>
        ,
      </JsonLine>
      <JsonLine>
        {"      "}
        <span className="token-key">&quot;direction&quot;</span>:{" "}
        <span className="token-string">&quot;{prop.direction}&quot;</span>,
      </JsonLine>
      <JsonLine>
        {"      "}
        <span className="token-key">&quot;team&quot;</span>:{" "}
        <span className="token-string">&quot;{prop.team}&quot;</span>,
      </JsonLine>
      <JsonLine>
        {"      "}
        <span className="token-key">&quot;book_name&quot;</span>:{" "}
        <span className="token-string">&quot;{prop.book_name}&quot;</span>,
      </JsonLine>
      <JsonLine>
        {"      "}
        <span className="token-key">&quot;event_time&quot;</span>:{" "}
        <span className="token-string">&quot;{prop.event_time}&quot;</span>,
      </JsonLine>
      <JsonLine>
        {"      "}
        <span className="token-key">&quot;links&quot;</span>:{" "}
        <span className="text-white">{"{"}</span>
      </JsonLine>
      <JsonLine>
        {"        "}
        <span className="token-key">&quot;market&quot;</span>:{" "}
        {prop.links.market ? (
          <a
            href={prop.links.market}
            target="_blank"
            rel="noopener noreferrer"
            className="token-string underline decoration-zinc-500 hover:decoration-white hover:text-white transition-colors"
          >
            &quot;{prop.links.market}&quot;
          </a>
        ) : (
          <span className="token-string">&quot;&quot;</span>
        )}
      </JsonLine>
      <JsonLine>
        {"      "}
        <span className="text-white">{"}"}</span>
      </JsonLine>
      <JsonLine>
        {"    "}
        <span className="text-white">{"}"}</span>
      </JsonLine>
      <JsonLine>
        {"  "}
        <span className="text-white">]</span>
      </JsonLine>
      <span className="text-white">{"}"}</span>
    </code>
  )
}
