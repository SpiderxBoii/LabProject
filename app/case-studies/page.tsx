import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageCTA from "@/components/PageCTA";

const cases = [
  {
    slug: "material-failure-investigation",
    category: "Failure Analysis",
    title: "Material Failure Investigation",
  },
  {
    slug: "polymer-characterization",
    category: "Polymer Testing",
    title: "Polymer Characterization",
  },
  {
    slug: "coating-performance",
    category: "Coating Testing",
    title: "Coating Performance Evaluation",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Case Studies"
          title="Technical investigations and testing applications."
          description="Explore examples of how structured testing can support product development, quality investigations and failure analysis."
        />

        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
        />

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-3">
              {cases.map((item, index) => (
                <Link
                  key={item.slug}
                  href={`/case-studies/${item.slug}`}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-44 items-end bg-slate-900 p-6">
                    <span className="text-6xl font-semibold text-white/10">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="p-7">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {item.category}
                    </p>

                    <h2 className="mt-3 text-xl font-semibold text-slate-950">
                      {item.title}
                    </h2>

                    <p className="mt-5 text-sm font-semibold">
                      Read case study →
                    </p>
                  </div>
                </Link>
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
