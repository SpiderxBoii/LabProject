import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageCTA from "@/components/PageCTA";

const faqs = [
  {
    question: "How do I request a quote?",
    answer:
      "Use the Request a Quote page and provide your material, product, requested test and available technical information.",
  },
  {
    question: "How many samples do I need?",
    answer:
      "Sample requirements can vary by test, material, specimen geometry and project requirements. Confirm requirements during technical review.",
  },
  {
    question: "Can you test according to ASTM standards?",
    answer:
      "Applicable ASTM testing can be requested where the laboratory supports the required method.",
  },
  {
    question: "Can you test according to ISO standards?",
    answer:
      "Applicable ISO testing can be requested where the laboratory supports the required method.",
  },
  {
    question: "Can you accept international samples?",
    answer:
      "International sample shipping should be reviewed based on packaging, material description, customs and applicable requirements.",
  },
  {
    question: "How long does testing take?",
    answer:
      "Turnaround depends on the testing scope, sample requirements, equipment availability and project requirements.",
  },
  {
    question: "Can you provide expedited testing?",
    answer:
      "Expedited turnaround can be discussed during technical review where feasible.",
  },
  {
    question: "Do you return samples after testing?",
    answer:
      "Sample retention and disposal requirements should be agreed as part of the project.",
  },
  {
    question: "Can you test proprietary materials?",
    answer:
      "Proprietary material testing can be discussed with the technical team.",
  },
  {
    question: "Can you follow a customer-specific procedure?",
    answer:
      "Customer-specific or non-standard procedures can be reviewed for technical feasibility.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="FAQ"
          title="Frequently asked testing questions."
          description="Answers to common questions about testing, samples, standards, turnaround and project requirements."
        />

        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl space-y-4 px-5 sm:px-6 lg:px-8">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6"
              >
                <summary className="cursor-pointer list-none font-semibold text-slate-950">
                  <div className="flex items-center justify-between gap-5">
                    {faq.question}

                    <span className="text-xl text-slate-400 group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <PageCTA />
      </main>

      <Footer />
    </>
  );
}
