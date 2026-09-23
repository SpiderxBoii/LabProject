import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageCTA from "@/components/PageCTA";
import { industries } from "@/lib/data";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

function createSlug(value: string) {
  return value.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
}

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: createSlug(industry),
  }));
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;

  const industry = industries.find((item) => createSlug(item) === slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Industry"
          title={industry}
          description={`Material and product testing capabilities relevant to ${industry} applications.`}
        />

        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Industries", href: "/industries" },
            { label: industry },
          ]}
        />

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2">
              <Info title="Industry Overview">
                Describe the materials, products and testing challenges relevant
                to this industry.
              </Info>

              <Info title="Materials Commonly Tested">
                Add the actual materials supported by the laboratory.
              </Info>

              <Info title="Testing Capabilities">
                Connect relevant mechanical, chemical, thermal, analytical and
                environmental testing services.
              </Info>

              <Info title="Applications">
                Describe the product-development, quality, qualification or
                failure-analysis applications supported.
              </Info>
            </div>
          </div>
        </section>

        <PageCTA />
      </main>

      <Footer />
    </>
  );
}

function Info({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 p-7">
      <h2 className="text-xl font-semibold text-slate-950">{title}</h2>

      <p className="mt-3 text-sm leading-6 text-slate-600">{children}</p>
    </div>
  );
}
