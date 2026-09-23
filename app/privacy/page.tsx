import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="bg-white py-20">
        <article className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold text-slate-950">
            Privacy Policy
          </h1>

          <p className="mt-6 leading-7 text-slate-600">
            Add the laboratory's approved privacy policy here. This page should
            explain how personal information, inquiry information and uploaded
            technical documents are handled.
          </p>
        </article>
      </main>

      <Footer />
    </>
  );
}
