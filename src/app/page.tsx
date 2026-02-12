export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white flex flex-col items-center justify-center relative overflow-hidden font-[family-name:var(--font-geist-sans)]">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-amber-900/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-slate-700/5 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-xl mx-auto">
        <div className="mb-8 text-4xl opacity-40">
          <span className="inline-block">&#x25CB;</span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-light tracking-tight mb-6 text-slate-200">
          Antiamory
        </h1>

        <p className="text-lg text-slate-500 font-light leading-relaxed mb-4 italic">
          /an-tee-AM-uh-ree/
        </p>

        <p className="text-base text-slate-400 leading-relaxed mb-10 max-w-md mx-auto">
          The practice of obstructing love&apos;s flow &mdash; for oneself or others &mdash; out of inner scarcity. A lens for recognizing when fear narrows what could be boundless.
        </p>

        {/* Concept pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['Awareness', 'Scarcity', 'Recognition'].map((label) => (
            <span
              key={label}
              className="px-4 py-1.5 rounded-full text-xs tracking-wide border border-slate-700 text-slate-500 bg-slate-800/30"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-amber-800/30 mx-auto mb-12" />

        <div className="inline-block px-8 py-3 rounded-full bg-slate-800/40 border border-slate-700/50 text-sm text-slate-400 tracking-wide">
          Coming Soon
        </div>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-8 text-xs text-slate-700 tracking-widest uppercase">
        antiamory.com
      </div>
    </div>
  )
}
