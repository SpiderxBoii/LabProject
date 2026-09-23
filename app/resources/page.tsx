import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageCTA from "@/components/PageCTA";

const resources = [
  "ASTM D638 vs ISO 527",
  "What is tensile testing?",
  "How much material is required for ASTM testing?",
  "What is TGA testing?",
  "SEM vs EDS: What is the difference?",
  "What is PFAS testing?",
  "ASTM E8 sample requirements",
  "ASTM D4060 Taber abrasion testing",
  "How to select a material testing laboratory",
];

export default function ResourcesPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Resources"
          title="Technical resources for material and product testing."
          description="Educational content, FAQs and practical information about testing methods, samples and laboratory services."
        />

        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Resources" }]}
        />

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-2">
              {resources.map((resource, index) => (
                <a
                  key={resource}
                  href="#"
                  className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-400"
                >
                  <span className="text-xs font-bold tracking-widest text-slate-400">
                    ARTICLE {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2 className="mt-5 font-semibold text-slate-950">
                    {resource}
                  </h2>

                  <p className="mt-4 text-sm text-slate-500">
                    Read technical resource →
                  </p>
                </a>
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
