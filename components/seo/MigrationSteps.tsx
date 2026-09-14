type Step = { title: string; body: string }

export function MigrationSteps({ steps }: { steps: readonly Step[] }) {
  return (
    <ol className="space-y-6 max-w-3xl">
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-4">
          <span className="shrink-0 w-8 h-8 rounded-sm border border-white/15 text-white text-sm flex items-center justify-center">
            {i + 1}
          </span>
          <div>
            <h3 className="text-lg font-medium text-white mb-1">{step.title}</h3>
            <p className="text-base text-zinc-400 leading-relaxed">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
