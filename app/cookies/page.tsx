import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CookiesPage() {
  return (
    <>
      <Header />

      <main className="bg-white py-20">
        <article className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold text-slate-950">
            Cookie Policy
          </h1>

          <p className="mt-6 leading-7 text-slate-600">
            Add the laboratory's approved cookie policy here, including
            analytics and other technologies used by the production website.
          </p>
        </article>
      </main>

      <Footer />
    </>
  );
}
