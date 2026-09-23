const steps = [
  {
    number: "01",
    code: "REQ",
    title: "Discuss your requirements",
    description:
      "Tell our technical team what you need to test, your objectives, sample details, and any required specifications.",
  },
  {
    number: "02",
    code: "METHOD",
    title: "Select the right method",
    description:
      "We review your requirements and identify the appropriate analytical method, testing approach, and reporting requirements.",
  },
  {
    number: "03",
    code: "SAMPLE",
    title: "Submit your samples",
    description:
      "Samples are received, identified, documented, and prepared according to the requirements of the selected testing program.",
  },
  {
    number: "04",
    code: "TEST",
    title: "Testing & analysis",
    description:
      "Our laboratory team performs the agreed testing using controlled procedures and appropriate analytical equipment.",
  },
  {
    number: "05",
    code: "RESULT",
    title: "Review the results",
    description:
      "Results are reviewed and compiled into clear technical documentation for your team to evaluate and use.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-b border-slate-200 bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Ambient technical background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15, 23, 42, 0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.7) 1px, transparent 1px)",
            backgroundSize: "76px 76px",
          }}
        />

        <div className="absolute -right-48 top-24 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.055] blur-[140px]" />

        <div className="absolute -left-56 bottom-[-180px] h-[420px] w-[420px] rounded-full bg-sky-400/[0.035] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping bg-cyan-400 opacity-30" />
                <span className="relative h-2 w-2 bg-cyan-500" />
              </span>

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700 sm:text-sm">
                Our Process
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-1 hidden h-12 w-px bg-gradient-to-b from-cyan-400 to-transparent sm:block" />

              <h2 className="max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
                From sample to result, with a clear process.
              </h2>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="mb-4 hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400 sm:flex">
              <span>WORKFLOW</span>
              <span className="text-cyan-500/60">/</span>
              <span>LAB</span>
              <span className="text-cyan-500/60">/</span>
              <span>01—05</span>
            </div>

            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              We make laboratory testing straightforward by combining technical
              guidance, controlled sample handling, analytical testing, and
              clear reporting.
            </p>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="relative mt-12 sm:mt-14">
          {/* Desktop connecting line */}
          <div className="pointer-events-none absolute left-[39px] right-[39px] top-[39px] hidden h-px bg-gradient-to-r from-cyan-200 via-slate-200 to-cyan-200 lg:block" />

          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 lg:grid-cols-5">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="group relative flex min-h-[350px] flex-col overflow-hidden bg-white p-6 transition-all duration-300 hover:bg-slate-50 sm:p-7 lg:min-h-[390px] lg:p-6 xl:p-7"
              >
                {/* Top hover indicator */}
                <div className="absolute left-0 right-0 top-0 h-px bg-cyan-500/0 transition-all duration-500 group-hover:bg-cyan-500/80" />

                {/* Soft hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/0 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.10]" />

                {/* Corner marker */}
                <div className="absolute right-0 top-0 h-8 w-8 border-l border-b border-slate-200 transition-colors duration-300 group-hover:border-cyan-200" />

                {/* Number + Code */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center border border-cyan-200 bg-cyan-50 text-xs font-bold tracking-[0.08em] text-cyan-700 transition-all duration-300 group-hover:border-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950">
                    {step.number}
                  </div>

                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    {step.code}
                  </span>
                </div>

                {/* Timeline indicator */}
                <div className="relative z-10 mt-8 hidden lg:block">
                  <div className="flex items-center">
                    <span className="h-2 w-2 bg-cyan-500 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.55)]" />

                    {index < steps.length - 1 && (
                      <span className="h-px flex-1 bg-transparent" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-10 lg:mt-8">
                  <h3 className="text-lg font-semibold leading-6 tracking-[-0.02em] text-slate-950 transition-colors duration-200 group-hover:text-cyan-700 sm:text-xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>

                {/* Bottom label */}
                <div className="relative z-10 mt-auto border-t border-slate-200 pt-5 transition-colors duration-300 group-hover:border-slate-300">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Laboratory Workflow
                  </p>

                  <div className="mt-1 flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold text-slate-700">
                      Stage {step.number} of 05
                    </p>

                    <span className="font-mono text-[8px] tracking-[0.12em] text-slate-300 transition-colors duration-300 group-hover:text-cyan-400">
                      STEP / {step.code}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Supporting Information */}
        <div className="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-3">
          <div className="group bg-slate-50 p-5 transition-colors duration-300 hover:bg-white sm:p-6">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-cyan-500 transition-all duration-300 group-hover:scale-125" />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                Sample Handling
              </p>
            </div>

            <p className="mt-3 text-sm font-semibold text-slate-900">
              Controlled and documented
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Sample information and handling requirements are considered
              throughout the testing workflow.
            </p>
          </div>

          <div className="group bg-slate-50 p-5 transition-colors duration-300 hover:bg-white sm:p-6">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-cyan-500 transition-all duration-300 group-hover:scale-125" />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                Technical Support
              </p>
            </div>

            <p className="mt-3 text-sm font-semibold text-slate-900">
              Guidance throughout your project
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Technical requirements and testing considerations can be discussed
              before the laboratory work begins.
            </p>
          </div>

          <div className="group bg-slate-50 p-5 transition-colors duration-300 hover:bg-white sm:p-6">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-cyan-500 transition-all duration-300 group-hover:scale-125" />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                Reporting
              </p>
            </div>

            <p className="mt-3 text-sm font-semibold text-slate-900">
              Clear, decision-ready results
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Results are organized into technical documentation for review and
              evaluation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
