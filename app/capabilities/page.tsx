import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageCTA from "@/components/PageCTA";
import { capabilities } from "@/lib/data";

export default function CapabilitiesPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Capabilities & Equipment"
          title="Equipment and techniques connected to testing requirements."
          description="Explore representative capabilities, equipment and applicable material areas."
        />

        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Capabilities" }]}
        />

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2">
              {capabilities.map((item) => (
                <article
                  key={item.name}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Capability
                  </p>

                  <h2 className="mt-3 text-xl font-semibold text-slate-950">
                    {item.name}
                  </h2>

                  <div className="mt-6 space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-slate-950">
                        Equipment / Technique
                      </p>
                      <p className="mt-1 text-slate-600">{item.equipment}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-slate-950">
                        Typical Materials
                      </p>
                      <p className="mt-1 text-slate-600">{item.materials}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-slate-950">Standards</p>
                      <p className="mt-1 text-slate-600">{item.standards}</p>
                    </div>
                  </div>
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
