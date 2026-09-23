import Link from "next/link";

const industries = [
  {
    number: "01",
    code: "PHARMA",
    title: "Pharmaceuticals",
    description:
      "Analytical testing and laboratory support for pharmaceutical products, raw materials, and development programs.",
    focus: "Quality · Development · Analysis",
  },
  {
    number: "02",
    code: "F&B",
    title: "Food & Beverage",
    description:
      "Testing services supporting product quality, safety, compliance, characterization, and development.",
    focus: "Safety · Quality · Compliance",
  },
  {
    number: "03",
    code: "ENV",
    title: "Environmental",
    description:
      "Laboratory analysis for water, soil, waste, and environmental monitoring and investigation programs.",
    focus: "Water · Soil · Contaminants",
  },
  {
    number: "04",
    code: "MFG",
    title: "Manufacturing",
    description:
      "Materials and chemical analysis supporting manufacturing quality, troubleshooting, and product performance.",
    focus: "Materials · Quality · Performance",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden border-b border-slate-200 bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15, 23, 42, 0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.8) 1px, transparent 1px)",
            backgroundSize: "76px 76px",
          }}
        />

        <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-cyan-400/[0.055] blur-[140px]" />

        <div className="absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-sky-400/[0.045] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping bg-cyan-400 opacity-30" />
                <span className="relative h-2 w-2 bg-cyan-500" />
              </span>

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700 sm:text-sm">
                Industries We Serve
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-1 hidden h-12 w-px bg-gradient-to-b from-cyan-400 to-transparent sm:block" />

              <h2 className="max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
                Laboratory expertise across demanding industries.
              </h2>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="mb-4 hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400 sm:flex">
              <span>INDUSTRY</span>
              <span className="text-cyan-500/60">/</span>
              <span>APPLICATION</span>
              <span className="text-cyan-500/60">/</span>
              <span>01—04</span>
            </div>

            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Our analytical services support organizations that need dependable
              laboratory data for quality, development, compliance, and
              technical decision-making.
            </p>
          </div>
        </div>

        {/* Industry Grid */}
        <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <article
              key={industry.number}
              className="group relative flex min-h-[360px] flex-col overflow-hidden bg-white p-6 transition-all duration-300 hover:bg-slate-50 sm:p-7 lg:p-8"
            >
              {/* Top hover indicator */}
              <div className="absolute left-0 right-0 top-0 h-px bg-cyan-500/0 transition-all duration-500 group-hover:bg-cyan-500/80" />

              {/* Soft hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/0 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.10]" />

              {/* Corner marker */}
              <div className="absolute right-0 top-0 h-8 w-8 border-l border-b border-slate-200 transition-colors duration-300 group-hover:border-cyan-200" />

              {/* Top Row */}
              <div className="relative flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700">
                    {industry.code}
                  </span>

                  <p className="mt-2 font-mono text-[10px] font-medium tracking-[0.12em] text-slate-400">
                    INDUSTRY {industry.number}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center border border-slate-200 text-lg text-slate-300 transition-all duration-300 group-hover:border-cyan-300 group-hover:bg-cyan-50 group-hover:text-cyan-600"
                >
                  →
                </span>
              </div>

              {/* Large Number */}
              <div className="relative mt-10">
                <span className="font-mono text-6xl font-semibold tracking-[-0.08em] text-slate-100 transition-colors duration-300 group-hover:text-cyan-100">
                  {industry.number}
                </span>

                <div className="absolute bottom-1 left-0 h-px w-8 bg-slate-200 transition-all duration-300 group-hover:w-14 group-hover:bg-cyan-300" />
              </div>

              {/* Content */}
              <div className="relative mt-auto pt-6">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-slate-950 transition-colors duration-200 group-hover:text-cyan-700 sm:text-2xl">
                  {industry.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {industry.description}
                </p>

                <div className="mt-5 border-t border-slate-200 pt-4 transition-colors duration-300 group-hover:border-slate-300">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Typical Focus
                  </p>

                  <p className="mt-1 text-xs font-semibold text-slate-700">
                    {industry.focus}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-all duration-200 hover:text-cyan-700"
                >
                  Discuss your requirement
                  <span
                    aria-hidden="true"
                    className="text-cyan-500 transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>

              {/* Technical bottom marker */}
              <div className="absolute bottom-3 right-4 font-mono text-[8px] tracking-[0.15em] text-slate-300 transition-colors duration-300 group-hover:text-cyan-300">
                LAB / {industry.number}
              </div>
            </article>
          ))}
        </div>

        {/* Supporting Strip */}
        <div className="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-3">
          <div className="group bg-slate-50 p-5 transition-colors duration-300 hover:bg-white sm:p-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-cyan-500" />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                Technical Support
              </p>
            </div>

            <p className="mt-2 text-sm font-semibold text-slate-900">
              Guidance from testing scope to results
            </p>
          </div>

          <div className="group bg-slate-50 p-5 transition-colors duration-300 hover:bg-white sm:p-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-cyan-500" />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                Testing Approach
              </p>
            </div>

            <p className="mt-2 text-sm font-semibold text-slate-900">
              Methods selected around your requirements
            </p>
          </div>

          <div className="group bg-slate-50 p-5 transition-colors duration-300 hover:bg-white sm:p-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-cyan-500" />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                Technical Reporting
              </p>
            </div>

            <p className="mt-2 text-sm font-semibold text-slate-900">
              Clear information for technical decisions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
