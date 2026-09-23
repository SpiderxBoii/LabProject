import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageCTA from "@/components/PageCTA";
import { services } from "@/lib/data";

export const metadata = {
  title: "Testing Services | Material & Product Testing",
  description:
    "Explore mechanical, chemical, thermal, electrical, environmental, analytical, coating, polymer, metal and failure analysis testing services.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Testing Services"
          title="Material and product testing across multiple technical disciplines."
          description="Explore testing categories, applicable materials, typical applications and technical capabilities."
        />

        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Services" }]}
        />

        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 py-16 sm:py-20 lg:py-24">
          {/* Technical background */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(15,23,42,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.8) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
              }}
            />

            <div className="absolute -left-40 top-10 h-[460px] w-[460px] rounded-full bg-cyan-400/[0.055] blur-[140px]" />

            <div className="absolute -right-48 bottom-0 h-[480px] w-[480px] rounded-full bg-sky-400/[0.045] blur-[150px]" />

            <div className="services-ring-one absolute left-1/2 top-[42%] h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/[0.035]" />

            <div className="services-ring-two absolute left-1/2 top-[42%] h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-500/[0.035]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="mb-8 flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping bg-cyan-400 opacity-30" />
                  <span className="relative h-2 w-2 bg-cyan-500" />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700">
                  Laboratory Service Matrix
                </span>
              </div>

              <div className="hidden items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] text-slate-400 sm:flex">
                <span>LAB</span>
                <span className="text-cyan-500/50">/</span>
                <span>SERVICES</span>
                <span className="text-cyan-500/50">/</span>
                <span>ACTIVE</span>
              </div>
            </div>

            {/* Services grid */}
            <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <a
                  key={service.title}
                  href={`/services/${service.title
                    .toLowerCase()
                    .replaceAll(" ", "-")
                    .replaceAll("/", "-")}`}
                  className="service-card group relative flex min-h-[320px] flex-col overflow-hidden bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50 hover:shadow-[0_20px_55px_rgba(15,23,42,0.08)] sm:p-8"
                >
                  {/* Top scan line */}
                  <div className="absolute left-0 right-0 top-0 h-px bg-cyan-500/0 transition-all duration-500 group-hover:bg-cyan-500" />

                  {/* Corner detail */}
                  <div className="absolute right-0 top-0 h-9 w-9 border-b border-l border-slate-200 transition-colors duration-300 group-hover:border-cyan-200" />

                  {/* Ambient hover glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-400/0 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.10]" />

                  {/* Header */}
                  <div className="relative flex items-start justify-between">
                    <div>
                      <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
                        SERVICE
                      </span>

                      <span className="ml-3 font-mono text-[9px] tracking-[0.15em] text-slate-400">
                        {service.number}
                      </span>
                    </div>

                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center border border-slate-200 text-lg text-slate-300 transition-all duration-300 group-hover:border-cyan-300 group-hover:bg-cyan-50 group-hover:text-cyan-600"
                    >
                      →
                    </span>
                  </div>

                  {/* Service number */}
                  <div className="relative mt-8">
                    <span className="font-mono text-6xl font-semibold tracking-[-0.08em] text-slate-100 transition-colors duration-300 group-hover:text-cyan-100">
                      {service.number}
                    </span>

                    <div className="absolute bottom-1 left-0 h-px w-8 bg-slate-200 transition-all duration-300 group-hover:w-14 group-hover:bg-cyan-300" />
                  </div>

                  {/* Content */}
                  <div className="relative mt-auto pt-6">
                    <h2 className="text-xl font-semibold tracking-[-0.025em] text-slate-950 transition-colors duration-200 group-hover:text-cyan-700 sm:text-2xl">
                      {service.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {service.description}
                    </p>

                    {/* Test tags */}
                    <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200 pt-5">
                      {service.tests.map((test) => (
                        <span
                          key={test}
                          className="border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[10px] font-medium text-slate-600 transition-all duration-200 group-hover:border-slate-300 group-hover:bg-white"
                        >
                          {test}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technical footer */}
                  <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                    <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-slate-300 transition-colors duration-300 group-hover:text-cyan-400">
                      LAB / SERVICE
                    </span>

                    <span className="text-[10px] font-semibold text-slate-400 transition-colors duration-200 group-hover:text-cyan-700">
                      Explore
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Bottom information strip */}
            <div className="mt-6 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-3">
              <div className="group bg-white p-5 transition-colors duration-300 hover:bg-slate-50 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-cyan-500 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.7)]" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                    Technical Scope
                  </p>
                </div>

                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Testing across multiple laboratory disciplines
                </p>
              </div>

              <div className="group bg-white p-5 transition-colors duration-300 hover:bg-slate-50 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-cyan-500 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.7)]" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                    Method Selection
                  </p>
                </div>

                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Requirements reviewed against applicable methods
                </p>
              </div>

              <div className="group bg-white p-5 transition-colors duration-300 hover:bg-slate-50 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-cyan-500 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.7)]" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                    Technical Support
                  </p>
                </div>

                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Discuss your project with our technical team
                </p>
              </div>
            </div>
          </div>
        </section>

        <PageCTA />
      </main>

      <Footer />
    </>
  );
}
