import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Chemical Analysis",
    description:
      "Quantitative and qualitative analytical services for complex chemical and material samples.",
    tags: ["Composition", "Contaminants", "Identification"],
  },
  {
    number: "02",
    title: "Materials Testing",
    description:
      "Characterization and performance testing to help teams understand materials and products.",
    tags: ["Physical", "Thermal", "Mechanical"],
  },
  {
    number: "03",
    title: "Microbiology",
    description:
      "Laboratory analysis supporting quality, safety, environmental, and product requirements.",
    tags: ["Microbial", "Safety", "Quality"],
  },
  {
    number: "04",
    title: "Specialized Testing",
    description:
      "Custom analytical programs designed around difficult samples and specific technical questions.",
    tags: ["Custom", "R&D", "Consulting"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-slate-200 bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      {/* Subtle technical background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15, 23, 42, 0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.7) 1px, transparent 1px)",
            backgroundSize: "76px 76px",
          }}
        />

        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.07] blur-[140px]" />

        <div className="absolute -left-48 bottom-0 h-[380px] w-[380px] rounded-full bg-sky-300/[0.05] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping bg-cyan-400 opacity-40" />
              <span className="relative h-2 w-2 bg-cyan-500" />
            </span>

            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-700 sm:text-xs">
              Laboratory Services
            </p>

            <span className="hidden h-px w-16 bg-cyan-500/30 sm:block" />
          </div>

          <h2 className="max-w-3xl text-3xl font-semibold leading-[1.06] tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl xl:text-6xl">
            Testing built around your technical requirements.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            From routine analysis to complex investigations, our laboratory
            services are designed to provide useful, decision-ready data for
            materials, products, and technical applications.
          </p>
        </div>

        {/* Featured Image + Capabilities */}
        <div className="mt-12 overflow-hidden border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition-shadow duration-500 hover:shadow-[0_24px_80px_rgba(15,23,42,0.09)] lg:mt-16">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* Laboratory Image */}
            <div className="group relative min-h-[320px] overflow-hidden bg-slate-100 sm:min-h-[430px] lg:min-h-[540px]">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=90"
                alt="Scientist working with laboratory equipment"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
              />

              {/* Image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/15 via-transparent to-cyan-400/10" />

              {/* Technical scan line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

              {/* Image frame */}
              <div className="pointer-events-none absolute inset-4 border border-white/0 transition-all duration-700 group-hover:inset-5 group-hover:border-white/20" />

              {/* Corner markers */}
              <div className="pointer-events-none absolute left-4 top-4 h-7 w-7 border-l border-t border-white/60 transition-all duration-500 group-hover:left-5 group-hover:top-5 group-hover:h-9 group-hover:w-9 group-hover:border-cyan-300" />

              <div className="pointer-events-none absolute right-4 top-4 h-7 w-7 border-r border-t border-white/60 transition-all duration-500 group-hover:right-5 group-hover:top-5 group-hover:h-9 group-hover:w-9 group-hover:border-cyan-300" />

              <div className="pointer-events-none absolute bottom-4 left-4 h-7 w-7 border-b border-l border-white/60 transition-all duration-500 group-hover:bottom-5 group-hover:left-5 group-hover:h-9 group-hover:w-9 group-hover:border-cyan-300" />

              <div className="pointer-events-none absolute bottom-4 right-4 h-7 w-7 border-b border-r border-white/60 transition-all duration-500 group-hover:bottom-5 group-hover:right-5 group-hover:h-9 group-hover:w-9 group-hover:border-cyan-300" />

              {/* Image information card */}
              <div className="absolute bottom-5 left-5 max-w-[calc(100%-2.5rem)] border border-white/30 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-cyan-200 sm:bottom-7 sm:left-7 sm:max-w-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700">
                  Laboratory Environment
                </p>

                <p className="mt-1 text-sm font-semibold leading-5 text-slate-950">
                  Precision testing & technical expertise
                </p>
              </div>

              {/* Image status */}
              <div className="absolute right-5 top-5 hidden items-center gap-2 border border-white/20 bg-slate-950/40 px-3 py-2 backdrop-blur-md sm:flex">
                <span className="h-1.5 w-1.5 animate-pulse bg-cyan-400" />
                <span className="font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-white/80">
                  LAB / ACTIVE
                </span>
              </div>
            </div>

            {/* Capabilities Panel */}
            <div className="flex flex-col justify-between border-t border-slate-200 bg-white p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-cyan-500" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-700 sm:text-xs">
                    Testing Capabilities
                  </p>
                </div>

                <h3 className="mt-5 max-w-md text-2xl font-semibold leading-[1.12] tracking-[-0.025em] text-slate-950 sm:text-3xl">
                  Reliable data for better technical decisions.
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  Our testing programs combine analytical methods, laboratory
                  expertise, and technical interpretation to help you understand
                  materials and products with greater confidence.
                </p>
              </div>

              {/* Capability Statistics */}
              <div className="mt-10 grid grid-cols-2 border-t border-slate-200 pt-7">
                <div>
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                    100+
                  </p>

                  <p className="mt-1 text-xs text-slate-500">Testing methods</p>
                </div>

                <div className="border-l border-slate-200 pl-6">
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                    04
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Core service areas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative bg-white p-6 transition-all duration-300 hover:bg-cyan-50/30 sm:p-8 lg:p-9"
            >
              {/* Cyan hover indicator */}
              <span className="absolute left-0 top-0 h-px w-0 bg-cyan-500 transition-all duration-500 group-hover:w-full" />

              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-cyan-700">
                  {service.number}
                </span>

                <span
                  aria-hidden="true"
                  className="text-lg text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-600"
                >
                  →
                </span>
              </div>

              <h3 className="mt-7 text-xl font-semibold tracking-[-0.025em] text-slate-950 transition-colors duration-300 group-hover:text-cyan-700 sm:text-2xl">
                {service.title}
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 transition-colors duration-300 group-hover:border-cyan-100 group-hover:bg-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Technical index */}
              <span className="absolute bottom-4 right-5 font-mono text-[8px] tracking-[0.12em] text-slate-300 transition-colors duration-300 group-hover:text-cyan-300">
                SERVICE / {service.number}
              </span>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col gap-6 border border-cyan-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-cyan-500" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700 sm:text-xs">
                Have a specific requirement?
              </p>
            </div>

            <p className="mt-3 max-w-2xl text-base font-medium leading-6 text-slate-900 sm:text-lg">
              Tell us what you need to test and our technical team can help
              identify the appropriate laboratory approach.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-full shrink-0 items-center justify-center gap-2 bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-lg hover:shadow-cyan-500/15 sm:w-auto"
          >
            Discuss Your Requirement
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
