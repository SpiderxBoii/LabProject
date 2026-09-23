const trustItems = [
  {
    value: "25+",
    label: "Years",
    detail: "Technical experience",
  },
  {
    value: "500+",
    label: "Projects",
    detail: "Completed programs",
  },
  {
    value: "100+",
    label: "Methods",
    detail: "Testing capabilities",
  },
  {
    value: "ISO",
    label: "Standards",
    detail: "Recognized methods",
  },
];

export default function TrustBar() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 text-white">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-[12%] top-0 h-40 w-40 rounded-full bg-cyan-500/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] bottom-0 h-48 w-48 rounded-full bg-sky-500/[0.05] blur-3xl" />

      {/* Technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.9) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.9) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Top technical line */}
        <div className="flex items-center justify-between border-b border-white/[0.08] py-3">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-slate-400 sm:text-[10px]">
              Laboratory Performance
            </span>
          </div>

          <div className="hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600 sm:flex">
            <span>LAB</span>
            <span className="text-cyan-500/60">/</span>
            <span>01</span>
            <span className="text-cyan-500/60">/</span>
            <span>VERIFIED</span>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 divide-x divide-white/[0.08] sm:grid-cols-4">
          {trustItems.map((item, index) => (
            <div
              key={item.value}
              className="group relative px-4 py-7 transition-colors duration-300 hover:bg-white/[0.025] sm:px-6 sm:py-8 lg:px-8"
            >
              {/* Top accent */}
              <div
                className={`absolute left-0 right-0 top-0 h-px bg-cyan-400/0 transition-all duration-500 group-hover:bg-cyan-400/60 ${
                  index === 0 ? "sm:group-hover:bg-cyan-400/60" : ""
                }`}
              />

              {/* Number */}
              <div className="flex items-end gap-2">
                <p className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl lg:text-[2rem]">
                  {item.value}
                </p>

                <span className="mb-1 h-1.5 w-1.5 rounded-full bg-cyan-400/50 transition-all duration-300 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
              </div>

              {/* Label */}
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-400 sm:text-[11px]">
                {item.label}
              </p>

              {/* Detail */}
              <p className="mt-2 text-xs leading-5 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                {item.detail}
              </p>

              {/* Technical index */}
              <span className="absolute bottom-3 right-4 font-mono text-[8px] tracking-[0.12em] text-slate-700 sm:right-6">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
