import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageCTA from "@/components/PageCTA";

const requirements = [
  {
    title: "Tensile Testing",
    items: [
      "Material",
      "Applicable standard",
      "Specimen geometry",
      "Quantity",
      "Temperature",
      "Testing speed",
    ],
  },
  {
    title: "Chemical Testing",
    items: [
      "Sample type",
      "Quantity",
      "Expected composition",
      "Matrix",
      "Required detection limit",
    ],
  },
  {
    title: "SEM / EDS",
    items: [
      "Sample dimensions",
      "Material type",
      "Surface of interest",
      "Coating / substrate information",
    ],
  },
  {
    title: "Thermal Testing",
    items: ["Sample form", "Quantity", "Atmosphere", "Temperature range"],
  },
];

export default function SampleRequirementsPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Sample Requirements"
          title="Prepare your samples for testing."
          description="Sample requirements can vary by testing method, material and project scope. Use these categories as an initial guide."
        />

        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Sample Requirements" },
          ]}
        />

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2">
              {requirements.map((requirement) => (
                <article
                  key={requirement.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7"
                >
                  <h2 className="text-xl font-semibold text-slate-950">
                    {requirement.title}
                  </h2>

                  <ul className="mt-5 space-y-3 text-sm text-slate-600">
                    {requirement.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <p className="mt-8 text-center text-sm leading-6 text-slate-500">
              Requirements may vary. Confirm project-specific requirements
              during technical review.
            </p>
          </div>
        </section>

        <PageCTA />
      </main>

      <Footer />
    </>
  );
}
