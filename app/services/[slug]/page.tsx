import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageCTA from "@/components/PageCTA";
import { services } from "@/lib/data";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

function createSlug(value: string) {
  return value.toLowerCase().replaceAll(" ", "-").replaceAll("/", "-");
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: createSlug(service.title),
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  const service = services.find((item) => createSlug(item.title) === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Testing Service"
          title={service.title}
          description={service.description}
        />

        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
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

            <div className="absolute -left-40 top-20 h-[440px] w-[440px] rounded-full bg-cyan-400/[0.055] blur-[135px]" />

            <div className="absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-sky-400/[0.05] blur-[145px]" />

            <div className="service-detail-ring-one absolute left-1/2 top-[38%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/[0.035]" />

            <div className="service-detail-ring-two absolute left-1/2 top-[38%] h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-500/[0.035]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            {/* Technical header */}
            <div className="mb-8 flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping bg-cyan-400 opacity-30" />
                  <span className="relative h-2 w-2 bg-cyan-500" />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700">
                  Service Specification
                </span>
              </div>

              <div className="hidden items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] text-slate-400 sm:flex">
                <span>SERVICE</span>
                <span className="text-cyan-500/50">/</span>
                <span>DETAIL</span>
                <span className="text-cyan-500/50">/</span>
                <span>ACTIVE</span>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
              {/* Service overview */}
              <article className="service-detail-card group relative overflow-hidden border border-slate-200 bg-white p-7 shadow-[0_15px_50px_rgba(15,23,42,0.05)] sm:p-8 lg:p-9">
                <div className="absolute left-0 right-0 top-0 h-px bg-cyan-500" />

                <div className="absolute right-0 top-0 h-10 w-10 border-b border-l border-slate-200 transition-colors duration-300 group-hover:border-cyan-200" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700">
                      Service Overview
                    </p>

                    <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.15em] text-slate-400">
                      SERVICE / {service.number}
                    </p>
                  </div>

                  <span className="font-mono text-5xl font-semibold tracking-[-0.08em] text-slate-100 transition-colors duration-300 group-hover:text-cyan-100">
                    {service.number}
                  </span>
                </div>

                <div className="mt-8">
                  <div className="mb-5 h-px w-10 bg-cyan-400 transition-all duration-300 group-hover:w-16" />

                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-slate-200 pt-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Technical Scope
                  </p>

                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    Material and product testing based on project requirements
                  </p>
                </div>

                <div className="absolute bottom-4 right-5 font-mono text-[7px] uppercase tracking-[0.14em] text-slate-200 transition-colors duration-300 group-hover:text-cyan-200">
                  LAB / OVERVIEW
                </div>
              </article>

              {/* Typical testing */}
              <article className="relative overflow-hidden border border-slate-200 bg-white p-7 shadow-[0_15px_50px_rgba(15,23,42,0.05)] sm:p-8 lg:p-9">
                <div className="absolute left-0 right-0 top-0 h-px bg-cyan-500" />

                <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700">
                      Testing Scope
                    </p>

                    <h2 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-2xl">
                      Typical testing
                    </h2>
                  </div>

                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-slate-400">
                    TEST / 01
                  </span>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  Testing scope should be selected based on the material,
                  product, application, applicable method and project
                  requirements. Technical review can be used where project
                  requirements vary.
                </p>

                <div className="mt-7 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
                  {service.tests.map((test, index) => (
                    <div
                      key={test}
                      className="service-test-card group relative bg-slate-50 p-5 transition-all duration-300 hover:bg-white sm:p-6"
                    >
                      <div className="absolute left-0 right-0 top-0 h-px bg-cyan-500/0 transition-all duration-300 group-hover:bg-cyan-500" />

                      <div className="flex items-start gap-4">
                        <span className="font-mono text-[9px] font-semibold tracking-[0.12em] text-cyan-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-sm font-semibold leading-6 text-slate-800 transition-colors duration-200 group-hover:text-cyan-700">
                          {test}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            {/* What to provide */}
            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
              <article className="relative overflow-hidden border border-slate-200 bg-white p-7 shadow-[0_15px_50px_rgba(15,23,42,0.04)] sm:p-8">
                <div className="absolute left-0 right-0 top-0 h-px bg-cyan-500/70" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700">
                      Project Preparation
                    </p>

                    <h2 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-2xl">
                      What to provide
                    </h2>
                  </div>

                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-slate-400">
                    DATA / 02
                  </span>
                </div>

                <div className="mt-6 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
                  {[
                    "Material or product description",
                    "Requested test or objective",
                    "Applicable standard, if known",
                    "Sample information",
                    "Testing conditions",
                    "Required turnaround",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="group flex items-start gap-3 bg-slate-50 p-4 transition-colors duration-300 hover:bg-white"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-cyan-500 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.7)]" />

                      <div>
                        <span className="font-mono text-[8px] text-slate-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="mt-1 text-xs font-medium leading-5 text-slate-700">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* Technical review panel */}
              <article className="service-review-panel relative overflow-hidden border border-slate-800 bg-slate-950 p-7 text-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] sm:p-8">
                <div className="pointer-events-none absolute inset-0">
                  <div
                    className="absolute inset-0 opacity-[0.045]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(148,163,184,0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.7) 1px, transparent 1px)",
                      backgroundSize: "58px 58px",
                    }}
                  />

                  <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/[0.07] blur-[80px]" />
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping bg-cyan-400 opacity-30" />
                        <span className="relative h-2 w-2 bg-cyan-400" />
                      </span>

                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                        Technical Review
                      </p>
                    </div>

                    <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-slate-600">
                      REVIEW / 03
                    </span>
                  </div>

                  <h2 className="mt-7 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                    Need help defining the testing scope?
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                    Share your material, product details, testing objective and
                    available technical information. The requirement can then be
                    reviewed before quotation.
                  </p>

                  <a
                    href="/request-a-quote"
                    className="group mt-7 inline-flex min-h-14 items-center justify-center gap-3 bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_12px_40px_rgba(34,211,238,0.18)]"
                  >
                    Request a Quote
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>

                  <div className="mt-7 flex items-center gap-3 border-t border-white/[0.08] pt-4">
                    <span className="h-px w-8 bg-cyan-400/50" />

                    <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-500">
                      LAB / SERVICE REVIEW / READY
                    </span>
                  </div>
                </div>
              </article>
            </div>

            {/* Bottom status strip */}
            <div className="mt-6 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-3">
              <div className="group bg-white p-5 transition-colors duration-300 hover:bg-slate-50 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-cyan-500 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.7)]" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                    Service
                  </p>
                </div>

                <p className="mt-2 text-sm font-semibold text-slate-900">
                  {service.title}
                </p>
              </div>

              <div className="group bg-white p-5 transition-colors duration-300 hover:bg-slate-50 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-cyan-500 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.7)]" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                    Scope
                  </p>
                </div>

                <p className="mt-2 text-sm font-semibold text-slate-900">
                  {service.tests.length} testing areas
                </p>
              </div>

              <div className="group bg-white p-5 transition-colors duration-300 hover:bg-slate-50 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-cyan-500 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.7)]" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                    Status
                  </p>
                </div>

                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Technical Review Available
                </p>
              </div>
            </div>
          </div>
        </section>

        <PageCTA
          title={`Request ${service.title}`}
          description="Submit your technical requirements for review and quotation."
        />
      </main>

      <Footer />
    </>
  );
}
