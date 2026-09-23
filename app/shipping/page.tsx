import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageCTA from "@/components/PageCTA";

const topics = [
  "Sample labeling instructions",
  "Packaging requirements",
  "Fragile sample handling",
  "Sample IDs and PO/reference number",
  "International shipping guidance",
  "Customs/material description guidance",
  "Sample retention and disposal policy",
];

export default function ShippingPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Sample Shipping"
          title="Prepare and ship samples with the required information."
          description="Review labeling, packaging, identification and shipping considerations before sending samples."
        />

        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Shipping" }]}
        />

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9">
              <div className="space-y-4">
                {topics.map((topic, index) => (
                  <div
                    key={topic}
                    className="flex gap-4 border-b border-slate-100 pb-4 last:border-0"
                  >
                    <span className="text-xs font-bold text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm font-medium text-slate-700">
                      {topic}
                    </p>
                  </div>
                ))}
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
