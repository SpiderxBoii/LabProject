import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageCTA from "@/components/PageCTA";

export const metadata = {
  title: "About | Material & Product Testing Laboratory",
  description:
    "Learn about our material and product testing capabilities, technical expertise and laboratory services.",
};

const values = [
  {
    number: "01",
    title: "Technical Expertise",
    description:
      "Testing requirements are approached from a technical perspective, with attention to materials, methods and project requirements.",
  },
  {
    number: "02",
    title: "Recognized Methods",
    description:
      "Testing services can be organized around applicable ASTM, ISO, IEC and other recognized methods.",
  },
  {
    number: "03",
    title: "Confidentiality",
    description:
      "Customer projects, materials, specifications and technical information should be handled with appropriate confidentiality.",
  },
  {
    number: "04",
    title: "Flexible Support",
    description:
      "Testing requirements may vary by material, application, specimen geometry and project objective.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="About"
          title="Technical testing built around your material and product requirements."
          description="A professional B2B testing platform connecting customers with material characterization, testing capabilities, recognized methods and technical support."
        />

        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "About" }]}
        />

        {/* Our approach */}
        <section className="border-b border-slate-200 bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">
                  Our Approach
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  More than a laboratory directory.
                </h2>

                <div className="mt-6 h-px w-16 bg-cyan-500" />
              </div>

              <div className="space-y-5 text-base leading-7 text-slate-600">
                <p>
                  The platform is designed to help customers identify relevant
                  testing services, understand applicable methods, provide
                  technical requirements and move toward quotation and testing.
                </p>

                <p>
                  Testing information should be organized around practical
                  customer questions: what is being evaluated, which materials
                  are applicable, which standards may apply, what samples are
                  required and what deliverables can be expected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-b border-slate-200 bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">
                Our principles
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                A practical approach to technical testing.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                The platform is organized around the technical requirements
                customers need to understand when planning material and product
                testing.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2">
              {values.map((value) => (
                <article
                  key={value.title}
                  className="group bg-white p-7 transition hover:bg-slate-50 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.2em] text-cyan-700">
                      {value.number}
                    </span>

                    <span className="text-xs uppercase tracking-[0.15em] text-slate-400">
                      Principle
                    </span>
                  </div>

                  <h3 className="mt-9 text-xl font-semibold text-slate-950 transition group-hover:text-cyan-700">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PageCTA />
      </main>

      <Footer />
    </>
  );
}
