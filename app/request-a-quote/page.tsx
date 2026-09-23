"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FormEvent } from "react";

export default function RequestQuotePage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert(
      "Frontend demo: your request has been captured. Backend and CRM integration will be added next.",
    );
  }

  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Request a Quote"
          title="Tell us what you need tested."
          description="Provide your material, product, testing requirements and available technical information for review."
        />

        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Request a Quote" }]}
        />

        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 py-16 sm:py-20 lg:py-24">
          {/* Technical background */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(15,23,42,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.8) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
              }}
            />

            <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/[0.06] blur-[130px]" />

            <div className="absolute -right-40 bottom-0 h-[440px] w-[440px] rounded-full bg-sky-400/[0.05] blur-[140px]" />
          </div>

          <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="mb-8 flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping bg-cyan-400 opacity-30" />
                  <span className="relative h-2 w-2 bg-cyan-500" />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700">
                  Technical Request
                </span>
              </div>

              <div className="hidden items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] text-slate-400 sm:flex">
                <span>LAB</span>
                <span className="text-cyan-500/50">/</span>
                <span>QUOTE</span>
                <span className="text-cyan-500/50">/</span>
                <span>01</span>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
              {/* Information panel */}
              <div className="group relative overflow-hidden border border-slate-200 bg-white p-7 shadow-[0_15px_50px_rgba(15,23,42,0.05)] sm:p-8 lg:p-9">
                <div className="absolute left-0 right-0 top-0 h-px bg-cyan-500" />

                <div className="absolute right-0 top-0 h-10 w-10 border-b border-l border-slate-200 transition-colors duration-300 group-hover:border-cyan-200" />

                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700">
                    Before You Submit
                  </p>

                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-slate-300">
                    INFO / 01
                  </span>
                </div>

                <h2 className="mt-7 text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl">
                  Help us understand your testing requirement.
                </h2>

                <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  Providing technical details helps our team understand the
                  requested scope and determine the appropriate testing
                  approach.
                </p>

                <div className="mt-8 space-y-5">
                  {[
                    {
                      number: "01",
                      title: "Material or product",
                      text: "Tell us what needs to be tested.",
                    },
                    {
                      number: "02",
                      title: "Testing requirement",
                      text: "Include the test, property, method or standard if known.",
                    },
                    {
                      number: "03",
                      title: "Sample information",
                      text: "Quantity, dimensions and sample condition are useful.",
                    },
                    {
                      number: "04",
                      title: "Project timeline",
                      text: "Include any required testing or reporting deadline.",
                    },
                  ].map((item) => (
                    <div
                      key={item.number}
                      className="group/item flex gap-4 border-t border-slate-200 pt-4"
                    >
                      <span className="font-mono text-[9px] font-semibold tracking-[0.12em] text-cyan-600">
                        {item.number}
                      </span>

                      <div>
                        <p className="text-sm font-semibold text-slate-900 transition-colors duration-200 group-hover/item:text-cyan-700">
                          {item.title}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-slate-200 pt-5">
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-400">
                    LAB / TECHNICAL REVIEW / READY
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="relative overflow-hidden border border-slate-200 bg-white shadow-[0_15px_50px_rgba(15,23,42,0.06)]">
                <div className="absolute left-0 right-0 top-0 h-px bg-cyan-500" />

                <div className="border-b border-slate-200 px-7 py-6 sm:px-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700">
                        Project Information
                      </p>

                      <h2 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-slate-950">
                        Request details
                      </h2>
                    </div>

                    <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-slate-400">
                      FORM / 02
                    </span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-7 sm:p-8 lg:p-9">
                  {/* Contact information */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="First Name" name="firstName" required />

                    <Field label="Last Name" name="lastName" required />

                    <Field label="Company" name="company" required />

                    <Field
                      label="Business Email"
                      name="email"
                      type="email"
                      required
                    />

                    <Field label="Phone" name="phone" />

                    <Field label="Country" name="country" />
                  </div>

                  {/* Testing requirements */}
                  <div className="mt-9 border-t border-slate-200 pt-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700">
                          Testing Scope
                        </p>

                        <h2 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-slate-950">
                          Testing Requirements
                        </h2>
                      </div>

                      <span className="hidden font-mono text-[8px] uppercase tracking-[0.15em] text-slate-400 sm:block">
                        SPEC / 03
                      </span>
                    </div>

                    <div className="mt-6 grid gap-5">
                      <Field
                        label="Material / Product"
                        name="material"
                        required
                      />

                      <Field label="Test Requested" name="test" required />

                      <Field
                        label="ASTM / ISO / IEC Standard"
                        name="standard"
                      />

                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field
                          label="Number of Samples"
                          name="sampleQuantity"
                        />

                        <Field label="Sample Dimensions" name="dimensions" />

                        <Field label="Sample Condition" name="condition" />

                        <Field label="Testing Temperature" name="temperature" />

                        <Field label="Testing Environment" name="environment" />

                        <Field label="Required Turnaround" name="turnaround" />
                      </div>

                      <Field
                        label="Acceptance Criteria"
                        name="acceptanceCriteria"
                      />

                      <TextArea
                        label="Project Description"
                        name="description"
                        required
                      />

                      <TextArea
                        label="Special Requirements"
                        name="specialRequirements"
                      />

                      {/* Attachment */}
                      <div className="relative border border-slate-200 bg-slate-50 p-5 transition-colors duration-300 hover:border-cyan-200">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <label
                              htmlFor="attachment"
                              className="text-sm font-semibold text-slate-950"
                            >
                              Attachments
                            </label>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                              Drawings, specifications, SOWs, datasheets,
                              previous reports or photos.
                            </p>
                          </div>

                          <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-slate-400">
                            FILES
                          </span>
                        </div>

                        <input
                          id="attachment"
                          name="attachment"
                          type="file"
                          multiple
                          className="mt-4 block w-full cursor-pointer border border-slate-200 bg-white p-3 text-sm text-slate-600 file:mr-4 file:border-0 file:bg-slate-950 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-slate-800"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="mt-9 border-t border-slate-200 pt-7">
                    <button
                      type="submit"
                      className="group inline-flex min-h-14 w-full items-center justify-center gap-3 bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_12px_40px_rgba(34,211,238,0.18)]"
                    >
                      Submit Request
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </button>

                    <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                      Your technical requirements will be reviewed before
                      quotation.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Bottom information strip */}
            <div className="mt-6 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-3">
              <div className="group bg-white p-5 transition-colors duration-300 hover:bg-slate-50 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-cyan-500" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                    Scope Review
                  </p>
                </div>

                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Testing requirements reviewed technically
                </p>
              </div>

              <div className="group bg-white p-5 transition-colors duration-300 hover:bg-slate-50 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-cyan-500" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                    Method Selection
                  </p>
                </div>

                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Appropriate methods considered for the requirement
                </p>
              </div>

              <div className="group bg-white p-5 transition-colors duration-300 hover:bg-slate-50 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-cyan-500" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                    Next Step
                  </p>
                </div>

                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Technical discussion and quotation
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Field({
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
      <label
        htmlFor={name}
        className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600"
      >
        {label}
        {required && <span className="ml-1 text-cyan-600">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 min-h-12 w-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-400/10"
      />
    </div>
  );
}

function TextArea({
  label,
  name,
  required = false,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600"
      >
        {label}
        {required && <span className="ml-1 text-cyan-600">*</span>}
      </label>

      <textarea
        id={name}
        name={name}
        required={required}
        rows={5}
        className="mt-2 w-full resize-y border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-400/10"
      />
    </div>
  );
}
