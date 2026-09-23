interface PageCTAProps {
  title?: string;
  description?: string;
}

export default function PageCTA({
  title = "Have a testing requirement?",
  description = "Share your material, product and testing requirements with our technical team.",
}: PageCTAProps) {
  return (
    <section className="bg-slate-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
          {description}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="/request-a-quote"
            className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 hover:bg-slate-200"
          >
            Request a Quote
          </a>

          <a
            href="/contact"
            className="rounded-full border border-slate-700 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
