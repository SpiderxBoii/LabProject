import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageCTA from "@/components/PageCTA";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const caseStudies = {
  "material-failure-investigation": {
    title: "Material Failure Investigation",
    category: "Failure Analysis",
  },

  "polymer-characterization": {
    title: "Polymer Characterization",
    category: "Polymer Testing",
  },

  "coating-performance": {
    title: "Coating Performance Evaluation",
    category: "Coating Testing",
  },
};

/**
 * Generate all dynamic case-study pages at build time.
 * Required when using Next.js static export.
 */
export function generateStaticParams() {
  return [
    {
      slug: "material-failure-investigation",
    },
    {
      slug: "polymer-characterization",
    },
    {
      slug: "coating-performance",
    },
  ];
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  const item = caseStudies[slug as keyof typeof caseStudies];

  if (!item) {
    return null;
  }

  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow={item.category}
          title={item.title}
          description="Example case-study structure for documenting a testing investigation."
        />

        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Case Studies", href: "/case-studies" },
            { label: item.title },
          ]}
        />

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
            <div className="space-y-10">
              <CaseSection
                title="Customer Problem"
                text="Describe the customer problem or technical question."
              />

              <CaseSection
                title="Material / Product"
                text="Identify the material or product involved."
              />

              <CaseSection
                title="Testing Performed"
                text="Document the testing and analytical techniques used."
              />

              <CaseSection
                title="Applicable Method"
                text="Identify the applicable ASTM, ISO or other method where appropriate."
              />

              <CaseSection
                title="Key Findings"
                text="Summarize the important technical findings."
              />

              <CaseSection
                title="Outcome / Recommendation"
                text="Describe the outcome and any supported recommendations."
              />
            </div>
          </div>
        </section>

        <PageCTA />
      </main>

      <Footer />
    </>
  );
}

function CaseSection({ title, text }: { title: string; text: string }) {
  return (
    <section className="border-b border-slate-200 pb-8">
      <h2 className="text-xl font-semibold text-slate-950">{title}</h2>

      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </section>
  );
}
