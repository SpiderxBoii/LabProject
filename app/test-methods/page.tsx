"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageCTA from "@/components/PageCTA";
import { testMethods } from "@/lib/data";
import { useState } from "react";

export default function TestMethodsPage() {
  const [query, setQuery] = useState("");

  const results = testMethods.filter((method) =>
    `${method.standard} ${method.title} ${method.category}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );

  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="ASTM / ISO / IEC"
          title="Find a test method."
          description="Search our test-method directory by standard number, test name or testing category."
        />

        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Test Methods" }]}
        />

        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 py-16 sm:py-20 lg:py-24">
          {/* Technical background */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(15, 23, 42, 0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.8) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
              }}
            />

            <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/[0.07] blur-[130px]" />

            <div className="absolute -right-40 bottom-0 h-[440px] w-[440px] rounded-full bg-sky-400/[0.055] blur-[140px]" />

            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/[0.05]" />

            <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/[0.04]" />
          </div>

          <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            {/* Section heading */}
            <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 lg:flex-row lg:items-end">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping bg-cyan-400 opacity-30" />
                    <span className="relative h-2 w-2 bg-cyan-500" />
                  </span>

                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-700 sm:text-xs">
                    Test Method Database
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-1 hidden h-12 w-px bg-gradient-to-b from-cyan-400 to-transparent sm:block" />

                  <div>
                    <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl lg:text-4xl">
                      Search available methods.
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                      Find a testing method by standard number, method name, or
                      testing category.
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400 lg:flex">
                <span>METHODS</span>
                <span className="text-cyan-500/60">/</span>
                <span>DATABASE</span>
                <span className="text-cyan-500/60">/</span>
                <span>ACTIVE</span>
              </div>
            </div>

            {/* Search panel */}
            <div className="relative overflow-hidden border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
              {/* Animated top scan line */}
              <div className="pointer-events-none absolute left-0 right-0 top-0 h-px overflow-hidden bg-slate-200">
                <div className="test-method-scan absolute left-0 top-0 h-px w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
              </div>

              {/* Panel header */}
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-3.5 sm:px-6">
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 bg-cyan-500" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    Method Search
                  </span>
                </div>

                <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-slate-400">
                  SEARCH / READY
                </span>
              </div>

              {/* Search input */}
              <div className="p-4 sm:p-5">
                <div className="group relative flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-mono text-xs text-cyan-500">
                      /
                    </span>

                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search ASTM D638, tensile, polymer..."
                      className="h-14 w-full border border-slate-200 bg-slate-50 pl-9 pr-12 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]"
                    />

                    {query && (
                      <button
                        type="button"
                        onClick={() => setQuery("")}
                        aria-label="Clear search"
                        className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-xs text-slate-400 transition-colors duration-200 hover:text-cyan-600"
                      >
                        ESC
                      </button>
                    )}
                  </div>

                  <button
                    type="button"
                    className="group/button inline-flex h-14 items-center justify-center gap-3 bg-slate-950 px-7 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_10px_35px_rgba(34,211,238,0.18)]"
                  >
                    Search
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover/button:translate-x-1"
                    >
                      →
                    </span>
                  </button>
                </div>

                {/* Search status */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping bg-cyan-400 opacity-30" />
                      <span className="relative h-1.5 w-1.5 bg-cyan-500" />
                    </span>

                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      {query ? "Filtered Results" : "All Methods"}
                    </span>
                  </div>

                  <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-400">
                    {results.length}{" "}
                    {results.length === 1 ? "METHOD" : "METHODS"} FOUND
                  </div>
                </div>
              </div>
            </div>

            {/* Results heading */}
            <div className="mt-10 flex items-center justify-between border-b border-slate-200 pb-4 sm:mt-12">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-cyan-500" />

                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-700">
                  Available Methods
                </h3>
              </div>

              <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-slate-400">
                DIRECTORY / 01
              </span>
            </div>

            {/* Results */}
            <div className="mt-5 grid gap-3">
              {results.map((method, index) => (
                <a
                  key={method.standard}
                  href={`/test-methods/${method.standard
                    .toLowerCase()
                    .replaceAll("/", "-")
                    .replaceAll(" ", "-")}`}
                  className="test-method-card group relative block overflow-hidden border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-slate-50 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-6"
                  style={{
                    animationDelay: `${index * 70}ms`,
                  }}
                >
                  {/* Hover accent */}
                  <div className="absolute left-0 right-0 top-0 h-px bg-cyan-500/0 transition-all duration-500 group-hover:bg-cyan-500" />

                  {/* Technical corner */}
                  <div className="absolute right-0 top-0 h-8 w-8 border-b border-l border-slate-200 transition-colors duration-300 group-hover:border-cyan-200" />

                  {/* Ambient hover glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/0 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.10]" />

                  <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                          {method.standard}
                        </span>

                        <span className="h-1 w-1 bg-slate-300 transition-colors duration-300 group-hover:bg-cyan-400" />

                        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                          {method.category}
                        </span>
                      </div>

                      <h2 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-slate-950 transition-colors duration-200 group-hover:text-cyan-700 sm:text-xl">
                        {method.title}
                      </h2>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        Testing method available through our laboratory
                        directory.
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center justify-between gap-5 sm:justify-end">
                      <div className="hidden text-right sm:block">
                        <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-slate-400">
                          METHOD
                        </p>

                        <p className="mt-1 font-mono text-[10px] font-semibold text-slate-600">
                          0{index + 1}
                        </p>
                      </div>

                      <span
                        aria-hidden="true"
                        className="flex h-11 w-11 items-center justify-center border border-slate-200 bg-white text-lg text-slate-300 transition-all duration-300 group-hover:border-cyan-300 group-hover:bg-cyan-50 group-hover:text-cyan-600"
                      >
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Bottom technical line */}
                  <div className="relative mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                    <span className="h-px w-5 bg-slate-200 transition-all duration-300 group-hover:w-10 group-hover:bg-cyan-300" />

                    <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-slate-400">
                      LAB / TEST METHOD
                    </span>

                    <span className="ml-auto font-mono text-[8px] uppercase tracking-[0.12em] text-slate-300 transition-colors duration-300 group-hover:text-cyan-400">
                      VIEW →
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Empty state */}
            {results.length === 0 && (
              <div className="relative mt-5 overflow-hidden border border-slate-200 bg-white p-10 text-center sm:p-14">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

                <div className="mx-auto flex h-12 w-12 items-center justify-center border border-slate-200 bg-slate-50">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping bg-cyan-400 opacity-30" />
                    <span className="relative h-2 w-2 bg-cyan-500" />
                  </span>
                </div>

                <p className="mt-5 text-lg font-semibold text-slate-950">
                  No matching methods found.
                </p>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                  Try another standard number, testing category, or method
                  keyword.
                </p>

                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-cyan-700 transition-colors hover:text-cyan-500"
                >
                  Clear Search →
                </button>
              </div>
            )}

            {/* Bottom information strip */}
            <div className="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-3">
              <div className="bg-white p-5 transition-colors duration-300 hover:bg-slate-50 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-cyan-500" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                    Standards
                  </p>
                </div>

                <p className="mt-2 text-sm font-semibold text-slate-900">
                  ASTM · ISO · IEC methods
                </p>
              </div>

              <div className="bg-white p-5 transition-colors duration-300 hover:bg-slate-50 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-cyan-500" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                    Search
                  </p>
                </div>

                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Standard or method keyword
                </p>
              </div>

              <div className="bg-white p-5 transition-colors duration-300 hover:bg-slate-50 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-cyan-500" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                    Technical Review
                  </p>
                </div>

                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Discuss method requirements
                </p>
              </div>
            </div>
          </div>

          {/* Local animation styles */}
          <style jsx global>{`
            @keyframes testMethodScan {
              0% {
                transform: translateX(-140px);
                opacity: 0;
              }

              15% {
                opacity: 1;
              }

              85% {
                opacity: 1;
              }

              100% {
                transform: translateX(700px);
                opacity: 0;
              }
            }

            @keyframes testMethodCardIn {
              from {
                opacity: 0;
                transform: translateY(8px);
              }

              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .test-method-scan {
              animation: testMethodScan 4.5s ease-in-out infinite;
            }

            .test-method-card {
              animation: testMethodCardIn 0.45s ease-out both;
            }

            @media (prefers-reduced-motion: reduce) {
              .test-method-scan,
              .test-method-card {
                animation: none !important;
              }
            }
          `}</style>
        </section>

        <PageCTA />
      </main>

      <Footer />
    </>
  );
}
