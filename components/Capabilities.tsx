import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    code: "CHEM",
    number: "01",
    title: "Chemical Analysis",
    description:
      "Qualitative and quantitative analysis for chemicals, products, raw materials, and complex samples.",
    items: [
      "Composition analysis",
      "Contaminant testing",
      "Chemical identification",
    ],
  },
  {
    code: "MAT",
    number: "02",
    title: "Materials Characterization",
    description:
      "Testing and characterization services designed to understand material properties and performance.",
    items: [
      "Material identification",
      "Physical properties",
      "Thermal characterization",
    ],
  },
  {
    code: "ENV",
    number: "03",
    title: "Environmental Testing",
    description:
      "Analytical services supporting environmental monitoring, investigation, and compliance programs.",
    items: ["Water analysis", "Soil analysis", "Environmental contaminants"],
  },
  {
    code: "MICRO",
    number: "04",
    title: "Microbiological Testing",
    description:
      "Laboratory testing supporting product quality, safety, and microbiological assessment.",
    items: ["Microbial analysis", "Product testing", "Quality assessment"],
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden border-b border-slate-200 bg-slate-50 py-20 sm:py-24 lg:py-28"
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

        <div className="absolute -right-48 top-0 h-[520px] w-[520px] rounded-full bg-cyan-400/[0.055] blur-[145px]" />

        <div className="absolute -left-48 bottom-[-180px] h-[420px] w-[420px] rounded-full bg-sky-400/[0.035] blur-[130px]" />
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
                Laboratory Capabilities
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-1 hidden h-12 w-px bg-gradient-to-b from-cyan-400 to-transparent sm:block" />

              <h2 className="max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
                Technical capabilities for complex testing requirements.
              </h2>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="mb-4 hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400 sm:flex">
              <span>CAPABILITIES</span>
              <span className="text-cyan-500/60">/</span>
              <span>LAB</span>
              <span className="text-cyan-500/60">/</span>
              <span>01—04</span>
            </div>

            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Our laboratory capabilities cover analytical, characterization,
              environmental, and microbiological testing requirements across a
              range of materials and applications.
            </p>
          </div>
        </div>

        {/* Capability Grid */}
        <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:mt-14 md:grid-cols-2">
          {capabilities.map((capability) => (
            <article
              key={capability.code}
              className="group relative flex min-h-[360px] flex-col overflow-hidden bg-white p-6 transition-all duration-300 hover:bg-slate-50 sm:p-8 lg:p-9"
            >
              {/* Top accent */}
              <div className="absolute left-0 right-0 top-0 h-px bg-cyan-500/0 transition-all duration-500 group-hover:bg-cyan-500/80" />

              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/0 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.09]" />

              {/* Technical corner */}
              <div className="absolute right-0 top-0 h-10 w-10 border-l border-b border-slate-200 transition-colors duration-300 group-hover:border-cyan-200" />

              {/* Header */}
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-bold tracking-[0.2em] text-cyan-700">
                    {capability.code}
                  </span>

                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Capability {capability.number}
                  </p>
                </div>

                <span className="font-mono text-5xl font-semibold tracking-[-0.08em] text-slate-100 transition-colors duration-300 group-hover:text-cyan-100">
                  {capability.number}
                </span>
              </div>

              {/* Capability marker */}
              <div className="relative mt-9 flex items-center gap-2">
                <span className="h-2 w-2 bg-cyan-500 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.55)]" />

                <span className="h-px w-10 bg-slate-200 transition-all duration-300 group-hover:w-16 group-hover:bg-cyan-300" />
              </div>

              {/* Title */}
              <h3 className="relative mt-7 text-xl font-semibold tracking-[-0.02em] text-slate-950 transition-colors duration-200 group-hover:text-cyan-700 sm:text-2xl">
                {capability.title}
              </h3>

              {/* Description */}
              <p className="relative mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                {capability.description}
              </p>

              {/* Services */}
              <div className="relative mt-auto border-t border-slate-200 pt-5 transition-colors duration-300 group-hover:border-slate-300">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Typical Services
                </p>

                <ul className="mt-4 grid gap-2 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                  {capability.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs leading-5 text-slate-700 sm:text-sm"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cyan-500 transition-transform duration-200 group-hover:scale-110" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Link */}
              <Link
                href="/contact"
                className="relative mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-950 transition-colors hover:text-cyan-700"
              >
                Discuss this capability
                <span
                  aria-hidden="true"
                  className="text-cyan-500 transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              {/* Technical identifier */}
              <span className="absolute bottom-4 right-5 font-mono text-[8px] tracking-[0.14em] text-slate-300 transition-colors duration-300 group-hover:text-cyan-300">
                LAB / {capability.code}
              </span>
            </article>
          ))}
        </div>

        {/* Image + Technical Support */}
        <div className="mt-8 grid overflow-hidden border border-slate-200 bg-white shadow-sm lg:mt-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Image */}
          <div className="group relative min-h-[320px] overflow-hidden bg-slate-100 sm:min-h-[400px] lg:min-h-[480px]">
            <Image
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=90"
              alt="Scientist working with laboratory equipment"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />

            {/* Technical image marker */}
            <div className="absolute left-5 top-5 border border-white/50 bg-slate-950/65 px-3 py-2 font-mono text-[8px] uppercase tracking-[0.18em] text-white backdrop-blur-sm sm:left-7 sm:top-7">
              LAB / CAPABILITY
            </div>

            {/* Image Label */}
            <div className="absolute bottom-5 left-5 border border-white/60 bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm sm:bottom-7 sm:left-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700">
                Laboratory Capability
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-950">
                Analytical expertise & technical support
              </p>
            </div>
          </div>

          {/* Information */}
          <div className="relative flex flex-col justify-center overflow-hidden p-7 sm:p-10 lg:p-14">
            {/* Subtle panel glow */}
            <div className="pointer-events-none absolute -right-24 top-[-80px] h-64 w-64 rounded-full bg-cyan-400/[0.06] blur-[90px]" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping bg-cyan-400 opacity-30" />
                  <span className="relative h-2 w-2 bg-cyan-500" />
                </span>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
                  Need Something Specific?
                </p>
              </div>

              <h3 className="mt-6 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.025em] text-slate-950 sm:text-3xl lg:text-4xl">
                Talk to our technical team about your testing requirement.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                If you do not see the exact analysis you need, contact us.
                Specialized testing programs can be evaluated based on your
                sample, objectives, and technical requirements.
              </p>

              {/* Technical Details */}
              <div className="mt-8 grid grid-cols-2 border-y border-slate-200 py-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Scope
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    Customized
                  </p>
                </div>

                <div className="border-l border-slate-200 pl-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Support
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    Technical Team
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-7 inline-flex w-fit items-center gap-2 bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_8px_30px_rgba(6,182,212,0.18)]"
              >
                Talk to a Scientist
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
