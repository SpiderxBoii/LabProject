import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="quote"
      className="relative overflow-hidden border-t border-slate-800 bg-slate-950 py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Technical background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148, 163, 184, 0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.6) 1px, transparent 1px)",
            backgroundSize: "76px 76px",
          }}
        />

        <div className="absolute left-1/2 top-[-180px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[150px]" />

        <div className="absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-sky-500/[0.035] blur-[130px]" />

        <div className="absolute -right-32 top-32 h-[360px] w-[360px] rounded-full bg-cyan-400/[0.03] blur-[120px]" />
      </div>

      {/* Technical top line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        <div className="h-px w-40 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent sm:w-64" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex items-center justify-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping bg-cyan-400 opacity-30" />
              <span className="relative h-2 w-2 bg-cyan-400" />
            </span>

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300 sm:text-sm">
              Request a Quote
            </p>
          </div>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3 font-mono text-[8px] uppercase tracking-[0.2em] text-slate-600 sm:text-[9px]">
            <span>LAB</span>
            <span className="text-cyan-500/50">/</span>
            <span>TECHNICAL REVIEW</span>
            <span className="text-cyan-500/50">/</span>
            <span>READY</span>
          </div>

          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Have a material or product that needs testing?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Share your technical requirements and our team can review the
            requested testing scope, applicable standards, and sample
            requirements.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/request-a-quote"
            className="group inline-flex min-h-14 w-full items-center justify-center gap-2 bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_10px_40px_rgba(34,211,238,0.2)] sm:w-auto"
          >
            Request a Quote
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>

          <Link
            href="/contact"
            className="group inline-flex min-h-14 w-full items-center justify-center gap-2 border border-slate-600 bg-slate-950/40 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-white/[0.04] hover:text-cyan-300 sm:w-auto"
          >
            Talk to a Technical Expert
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        {/* Technical information strip */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-px overflow-hidden border border-slate-700 bg-slate-700 sm:grid-cols-3">
          <div className="group relative bg-slate-900 px-5 py-6 transition-colors duration-300 hover:bg-slate-800 sm:px-6">
            <div className="absolute left-0 right-0 top-0 h-px bg-cyan-400/0 transition-colors duration-300 group-hover:bg-cyan-400/70" />

            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-cyan-400" />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Testing Scope
              </p>
            </div>

            <p className="mt-2 text-sm font-medium text-slate-200">
              Reviewed by technical staff
            </p>

            <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-slate-600">
              SCOPE / REVIEW
            </p>
          </div>

          <div className="group relative bg-slate-900 px-5 py-6 transition-colors duration-300 hover:bg-slate-800 sm:px-6">
            <div className="absolute left-0 right-0 top-0 h-px bg-cyan-400/0 transition-colors duration-300 group-hover:bg-cyan-400/70" />

            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-cyan-400" />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Standards
              </p>
            </div>

            <p className="mt-2 text-sm font-medium text-slate-200">
              Method requirements considered
            </p>

            <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-slate-600">
              METHOD / REVIEW
            </p>
          </div>

          <div className="group relative bg-slate-900 px-5 py-6 transition-colors duration-300 hover:bg-slate-800 sm:px-6">
            <div className="absolute left-0 right-0 top-0 h-px bg-cyan-400/0 transition-colors duration-300 group-hover:bg-cyan-400/70" />

            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-cyan-400" />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Samples
              </p>
            </div>

            <p className="mt-2 text-sm font-medium text-slate-200">
              Requirements discussed upfront
            </p>

            <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-slate-600">
              SAMPLE / READY
            </p>
          </div>
        </div>

        {/* Bottom technical marker */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-slate-700" />
          <span className="h-1 w-1 bg-cyan-400/60" />
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-600">
            Laboratory Technical Services
          </span>
          <span className="h-1 w-1 bg-cyan-400/60" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-slate-700" />
        </div>
      </div>
    </section>
  );
}
