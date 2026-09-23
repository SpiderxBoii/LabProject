import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageCTA from "@/components/PageCTA";
import { industries } from "@/lib/data";

export default function IndustriesPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Industries"
          title="Testing capabilities organized around industry applications."
          description="Explore material and product testing capabilities relevant to demanding industries."
        />

        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Industries" }]}
        />

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, index) => {
                const slug = industry
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replaceAll("&", "and");

                return (
                  <a
                    key={industry}
                    href={`/industries/${slug}`}
                    className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span className="text-xs font-bold tracking-widest text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h2 className="mt-8 text-xl font-semibold text-slate-950">
                      {industry}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Explore materials, applications, relevant services and
                      applicable testing methods.
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <PageCTA />
      </main>

      <Footer />
    </>
  );
}
