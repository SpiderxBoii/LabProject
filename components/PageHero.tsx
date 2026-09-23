interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 text-white">
      {/* Technical grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Soft laboratory-style glow */}
      <div className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              {eyebrow}
            </p>
          </div>

          {/* Title */}
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            {description}
          </p>

          {/* Technical indicator */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px w-12 bg-cyan-400" />

            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
              Laboratory & Technical Services
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
