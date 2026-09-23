import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageCTA from "@/components/PageCTA";
import { testMethods } from "@/lib/data";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

function createSlug(value: string) {
  return value.toLowerCase().replaceAll("/", "-").replaceAll(" ", "-");
}

export function generateStaticParams() {
  return testMethods.map((method) => ({
    slug: createSlug(method.standard),
  }));
}

export default async function TestMethodPage({ params }: Props) {
  const { slug } = await params;

  const method = testMethods.find((item) => createSlug(item.standard) === slug);

  if (!method) {
    notFound();
  }

  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow={method.standard}
          title={method.title}
          description={`Service-oriented information for ${method.standard} and its application to material and product testing.`}
        />

        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Test Methods", href: "/test-methods" },
            { label: method.standard },
          ]}
        />

        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 py-16 sm:py-20 lg:py-24">
          {/* Background grid */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(15,23,42,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.8) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
              }}
            />

            <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/[0.06] blur-[130px]" />

            <div className="absolute -right-40 bottom-0 h-[440px] w-[440px] rounded-full bg-sky-400/[0.05] blur-[140px]" />

            <div className="method-ring-one absolute left-1/2 top-[35%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/[0.045]" />

            <div className="method-ring-two absolute left-1/2 top-[35%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-500/[0.045]" />
          </div>

          <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            {/* Status header */}
            <div className="mb-8 flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping bg-cyan-400 opacity-30" />
                  <span className="relative h-2 w-2 bg-cyan-500" />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700">
                  Test Method Specification
                </span>
              </div>

              <div className="hidden items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] text-slate-400 sm:flex">
                <span>METHOD</span>
                <span className="text-cyan-500/50">/</span>
                <span>DETAIL</span>
                <span className="text-cyan-500/50">/</span>
                <span>ACTIVE</span>
              </div>
            </div>

            {/* Specification cards */}
            <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
              <InfoCard
                title="Standard"
                value={method.standard}
                code="STD / 01"
              />

              <InfoCard
                title="Testing Category"
                value={method.category}
                code="CAT / 02"
              />

              <InfoCard
                title="Method Description"
                value="Provide an original service-oriented explanation of what the method evaluates."
                code="DESC / 03"
                large
              />

              <InfoCard
                title="Sample Requirements"
                value="Requirements can vary by specimen geometry, material and project scope. Technical review should confirm project-specific requirements."
                code="SAMPLE / 04"
                large
              />

              <InfoCard
                title="Testing Conditions"
                value="Conditions depend on the applicable method and agreed project requirements."
                code="COND / 05"
              />

              <InfoCard
                title="Deliverables"
                value="Final report and applicable test data, with additional requested data where available."
                code="DATA / 06"
              />
            </div>

            {/* Request panel */}
            <div className="method-request-panel relative mt-6 overflow-hidden border border-slate-800 bg-slate-950 p-7 text-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] sm:p-9 lg:p-10">
              {/* Animated scan line */}
              <div className="pointer-events-none absolute left-0 right-0 top-0 h-px overflow-hidden bg-slate-800">
                <div className="method-scan absolute left-0 top-0 h-px w-40 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
              </div>

              {/* Background glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/[0.06] blur-[80px]" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 bg-cyan-400" />

                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                      Technical Review
                    </p>
                  </div>

                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                    Request this test
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                    Tell us about your material, number of samples and project
                    requirements so the testing scope can be reviewed.
                  </p>
                </div>

                <a
                  href="/request-a-quote"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_12px_40px_rgba(34,211,238,0.18)]"
                >
                  Request a Quote
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>

              <div className="relative mt-7 flex items-center gap-3 border-t border-white/[0.08] pt-4">
                <span className="h-px w-8 bg-cyan-400/50" />

                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-500">
                  LAB / METHOD REVIEW / READY
                </span>
              </div>
            </div>

            {/* Bottom information strip */}
            <div className="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-3">
              <div className="group bg-white p-5 transition-all duration-300 hover:bg-slate-50 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-cyan-500 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.7)]" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                    Method
                  </p>
                </div>

                <p className="mt-2 font-mono text-xs font-semibold text-slate-800">
                  {method.standard}
                </p>
              </div>

              <div className="group bg-white p-5 transition-all duration-300 hover:bg-slate-50 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-cyan-500 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.7)]" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                    Category
                  </p>
                </div>

                <p className="mt-2 text-xs font-semibold text-slate-800">
                  {method.category}
                </p>
              </div>

              <div className="group bg-white p-5 transition-all duration-300 hover:bg-slate-50 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-cyan-500 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.7)]" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                    Status
                  </p>
                </div>

                <p className="mt-2 text-xs font-semibold text-slate-800">
                  Technical Review Available
                </p>
              </div>
            </div>
          </div>
        </section>

        <PageCTA
          title={`Request ${method.standard}`}
          description="Submit your project requirements for technical review."
        />
      </main>

      <Footer />
    </>
  );
}

function InfoCard({
  title,
  value,
  code,
  large = false,
}: {
  title: string;
  value: string;
  code: string;
  large?: boolean;
}) {
  return (
    <article
      className={`method-info-card group relative overflow-hidden border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-slate-50 hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)] sm:p-7 ${
        large ? "lg:min-h-[205px]" : "lg:min-h-[170px]"
      }`}
    >
      {/* Top hover line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-cyan-500/0 transition-all duration-500 group-hover:bg-cyan-500" />

      {/* Technical corner */}
      <div className="absolute right-0 top-0 h-8 w-8 border-b border-l border-slate-200 transition-colors duration-300 group-hover:border-cyan-200" />

      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/0 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.10]" />

      <div className="relative flex items-center justify-between gap-4">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-700">
          {title}
        </p>

        <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-slate-300 transition-colors duration-300 group-hover:text-cyan-400">
          {code}
        </span>
      </div>

      <div className="relative mt-5">
        <div className="mb-4 h-px w-7 bg-slate-200 transition-all duration-300 group-hover:w-12 group-hover:bg-cyan-300" />

        <p className="text-sm leading-6 text-slate-700 transition-colors duration-300 group-hover:text-slate-900">
          {value}
        </p>
      </div>

      <div className="absolute bottom-3 right-4 font-mono text-[7px] uppercase tracking-[0.12em] text-slate-200 transition-colors duration-300 group-hover:text-cyan-200">
        LAB / SPEC
      </div>
    </article>
  );
}
