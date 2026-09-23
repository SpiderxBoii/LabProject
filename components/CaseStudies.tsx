import Link from "next/link";

const caseStudies = [
  {
    category: "Materials",
    code: "MAT",
    number: "01",
    title: "Material characterization for product development",
    description:
      "A structured analytical program helped a technical team understand material properties and evaluate performance during development.",
    result: "Faster technical decision-making",
    focus: "Characterization · Performance",
  },
  {
    category: "Environmental",
    code: "ENV",
    number: "02",
    title: "Analytical testing for environmental investigation",
    description:
      "A targeted testing program provided analytical data required to evaluate samples and support an environmental investigation.",
    result: "Clear analytical evidence",
    focus: "Analysis · Investigation",
  },
  {
    category: "Quality",
    code: "QA",
    number: "03",
    title: "Testing support for quality assurance",
    description:
      "Routine and specialized laboratory testing supported a quality program requiring consistent analytical results and technical reporting.",
    result: "More consistent quality control",
    focus: "Testing · Reporting",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative overflow-hidden border-b border-slate-200 bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Technical background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15, 23, 42, 0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.7) 1px, transparent 1px)",
            backgroundSize: "76px 76px",
          }}
        />

        <div className="absolute -left-48 top-10 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.05] blur-[140px]" />

        <div className="absolute -right-48 bottom-[-180px] h-[420px] w-[420px] rounded-full bg-sky-400/[0.035] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping bg-cyan-400 opacity-30" />
                <span className="relative h-2 w-2 bg-cyan-500" />
              </span>

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700 sm:text-sm">
                Applications
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-1 hidden h-12 w-px bg-gradient-to-b from-cyan-400 to-transparent sm:block" />

              <h2 className="max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
                Laboratory expertise applied to real-world challenges.
              </h2>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="mb-4 hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400 sm:flex">
              <span>APPLICATIONS</span>
              <span className="text-cyan-500/60">/</span>
              <span>LAB</span>
              <span className="text-cyan-500/60">/</span>
              <span>01—03</span>
            </div>

            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Explore examples of how analytical testing can support product
              development, quality programs, environmental investigations, and
              technical decision-making.
            </p>

            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:text-cyan-700"
            >
              Discuss your project
              <span
                aria-hidden="true"
                className="text-cyan-500 transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:mt-14 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.number}
              className="group relative flex min-h-[430px] flex-col overflow-hidden bg-white p-6 transition-all duration-300 hover:bg-slate-50 sm:p-8"
            >
              {/* Top hover accent */}
              <div className="absolute left-0 right-0 top-0 h-px bg-cyan-500/0 transition-all duration-500 group-hover:bg-cyan-500/80" />

              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/0 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.09]" />

              {/* Technical corner */}
              <div className="absolute right-0 top-0 h-9 w-9 border-l border-b border-slate-200 transition-colors duration-300 group-hover:border-cyan-200" />

              {/* Technical Header */}
              <div className="relative flex items-start justify-between">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
                    {study.code}
                  </span>

                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Application {study.number}
                  </p>
                </div>

                <span className="font-mono text-5xl font-semibold tracking-[-0.08em] text-slate-100 transition-colors duration-300 group-hover:text-cyan-100">
                  {study.number}
                </span>
              </div>

              {/* Application marker */}
              <div className="relative mt-9 flex items-center gap-2">
                <span className="h-2 w-2 bg-cyan-500 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.55)]" />

                <span className="h-px w-10 bg-slate-200 transition-all duration-300 group-hover:w-16 group-hover:bg-cyan-300" />
              </div>

              {/* Category */}
              <div className="relative mt-6 flex items-center gap-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  {study.category}
                </p>
              </div>

              {/* Content */}
              <div className="relative mt-5">
                <h3 className="text-xl font-semibold leading-7 tracking-[-0.02em] text-slate-950 transition-colors duration-200 group-hover:text-cyan-700 sm:text-2xl">
                  {study.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {study.description}
                </p>
              </div>

              {/* Technical Details */}
              <div className="relative mt-auto border-t border-slate-200 pt-5 transition-colors duration-300 group-hover:border-slate-300">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      Focus
                    </p>

                    <p className="mt-1 text-xs font-semibold leading-5 text-slate-700">
                      {study.focus}
                    </p>
                  </div>

                  <div className="border-l border-slate-200 pl-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      Outcome
                    </p>

                    <p className="mt-1 text-xs font-semibold leading-5 text-slate-700">
                      {study.result}
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:text-cyan-700"
                >
                  Discuss this application
                  <span
                    aria-hidden="true"
                    className="text-cyan-500 transition-transform duration-200 group-hover/link:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>

              {/* Technical identifier */}
              <span className="absolute bottom-4 right-5 font-mono text-[8px] tracking-[0.14em] text-slate-300 transition-colors duration-300 group-hover:text-cyan-300">
                LAB / {study.code}
              </span>
            </article>
          ))}
        </div>

        {/* Bottom Information Strip */}
        <div className="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-3">
          <div className="group bg-slate-50 p-5 transition-colors duration-300 hover:bg-white sm:p-6">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-cyan-500 transition-all duration-300 group-hover:scale-125" />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                Application Focus
              </p>
            </div>

            <p className="mt-3 text-sm font-semibold text-slate-900">
              Product & material understanding
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Analytical testing can help teams understand materials,
              properties, and product performance.
            </p>
          </div>

          <div className="group bg-slate-50 p-5 transition-colors duration-300 hover:bg-white sm:p-6">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-cyan-500 transition-all duration-300 group-hover:scale-125" />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                Technical Evaluation
              </p>
            </div>

            <p className="mt-3 text-sm font-semibold text-slate-900">
              Data for informed decisions
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Testing programs can provide analytical evidence for development,
              investigation, and quality activities.
            </p>
          </div>

          <div className="group bg-slate-50 p-5 transition-colors duration-300 hover:bg-white sm:p-6">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-cyan-500 transition-all duration-300 group-hover:scale-125" />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                Custom Programs
              </p>
            </div>

            <p className="mt-3 text-sm font-semibold text-slate-900">
              Testing around your requirements
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Testing scope can be discussed around your sample, objectives,
              specifications, and analytical needs.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 grid overflow-hidden border border-cyan-200 bg-cyan-50/50 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="relative p-7 sm:p-9 lg:p-10">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping bg-cyan-400 opacity-30" />
                <span className="relative h-2 w-2 bg-cyan-500" />
              </span>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700 sm:text-sm">
                Have a difficult sample?
              </p>
            </div>

            <h3 className="mt-4 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.025em] text-slate-950 sm:text-3xl">
              Let us help determine the right analytical approach.
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Share your testing objective and sample information with our
              technical team.
            </p>
          </div>

          <div className="px-7 pb-7 sm:px-9 sm:pb-9 lg:px-10 lg:py-10">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_8px_30px_rgba(6,182,212,0.18)] sm:w-auto"
            >
              Start a Conversation
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
