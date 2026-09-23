"use client";

import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FormEvent } from "react";

export default function ContactPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert("Frontend demo: contact form submitted.");
  }

  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Contact"
          title="Talk to the testing team."
          description="Contact us for general inquiries or use the Request a Quote form for technical testing requirements."
        />

        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        />

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="rounded-2xl bg-slate-950 p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                Laboratory
              </p>

              <h2 className="mt-5 text-3xl font-semibold">
                Contact information
              </h2>

              <div className="mt-8 space-y-6 text-sm">
                <div>
                  <p className="text-slate-500">Business Email</p>
                  <p className="mt-1">your-email@example.com</p>
                </div>

                <div>
                  <p className="text-slate-500">Phone</p>
                  <p className="mt-1">+1 XXX XXX XXXX</p>
                </div>

                <div>
                  <p className="text-slate-500">Business Hours</p>
                  <p className="mt-1">Monday – Friday</p>
                </div>

                <div>
                  <p className="text-slate-500">Address</p>
                  <p className="mt-1">Add laboratory address here</p>
                </div>
              </div>

              <Link
                href="/request-a-quote"
                className="mt-10 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950"
              >
                Request a Quote
              </Link>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8"
            >
              <h2 className="text-2xl font-semibold text-slate-950">
                General Inquiry
              </h2>

              <div className="mt-7 space-y-5">
                <Input label="Name" name="name" required />
                <Input label="Company" name="company" />
                <Input label="Email" name="email" type="email" required />
                <Input label="Phone" name="phone" />

                <div>
                  <label className="text-sm font-semibold text-slate-950">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Input({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-950">{label}</label>

      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-slate-500"
      />
    </div>
  );
}
