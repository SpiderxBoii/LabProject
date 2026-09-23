"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const methods = [
  {
    code: "TM-001",
    title: "Chemical Composition Analysis",
    description:
      "Quantitative analysis for determining the elemental and chemical composition of material samples.",
    material: "Chemicals",
    standard: "ASTM / ISO",
    type: "Chemical",
  },
  {
    code: "TM-002",
    title: "Metals & Alloy Characterization",
    description:
      "Analytical testing to identify composition and characterize metallic materials and alloys.",
    material: "Metals",
    standard: "ASTM / ISO",
    type: "Materials",
  },
  {
    code: "TM-003",
    title: "Polymer Material Testing",
    description:
      "Physical and thermal characterization of polymeric materials and finished products.",
    material: "Polymers",
    standard: "ASTM / ISO",
    type: "Materials",
  },
  {
    code: "TM-004",
    title: "Water Quality Analysis",
    description:
      "Laboratory analysis for chemical parameters, contaminants, and water quality requirements.",
    material: "Water",
    standard: "ISO / EPA",
    type: "Environmental",
  },
  {
    code: "TM-005",
    title: "Contaminant Identification",
    description:
      "Analytical investigation to identify unknown substances, impurities, and potential contaminants.",
    material: "Contaminants",
    standard: "ASTM / ISO",
    type: "Chemical",
  },
  {
    code: "TM-006",
    title: "Microbiological Examination",
    description:
      "Laboratory examination supporting microbial quality, safety, and product requirements.",
    material: "Microbiology",
    standard: "ISO",
    type: "Microbiology",
  },
];

const categories = [
  "All",
  "Metals",
  "Polymers",
  "Water",
  "Chemicals",
  "Contaminants",
];

export default function TestMethodSearch() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMethods = useMemo(() => {
    const query = search.trim().toLowerCase();

    return methods.filter((method) => {
      const matchesCategory =
        activeCategory === "All" || method.material === activeCategory;

      const matchesSearch =
        query === "" ||
        method.title.toLowerCase().includes(query) ||
        method.description.toLowerCase().includes(query) ||
        method.material.toLowerCase().includes(query) ||
        method.standard.toLowerCase().includes(query) ||
        method.type.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("All");
  };

  return (
    <section
      id="test-methods"
      className="relative overflow-hidden border-b border-slate-200 bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Technical background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15, 23, 42, 0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.7) 1px, transparent 1px)",
            backgroundSize: "76px 76px",
          }}
        />

        <div className="absolute -left-48 top-32 h-[420px] w-[420px] rounded-full bg-cyan-400/[0.055] blur-[130px]" />

        <div className="absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-sky-300/[0.06] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping bg-cyan-400 opacity-40" />
                <span className="relative h-2 w-2 bg-cyan-500" />
              </span>

              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-700 sm:text-xs">
                Testing Capabilities
              </p>

              <span className="hidden h-px w-12 bg-cyan-500/30 sm:block" />
            </div>

            <h2 className="max-w-xl text-3xl font-semibold leading-[1.06] tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
              Find the right analytical method.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:justify-self-end">
            Search by test, material, analyte, or technical requirement to
            identify the laboratory capability that best matches your project.
          </p>
        </div>

        {/* Search Panel */}
        <div className="relative mt-12 overflow-hidden border border-slate-200 bg-slate-50 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:p-7 lg:mt-14 lg:p-8">
          {/* Panel top accent */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

          {/* Panel technical label */}
          <div className="mb-5 flex items-center justify-between">
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
              METHOD DATABASE
            </p>

            <p className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-slate-300 sm:block">
              SEARCH / ACTIVE
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <circle cx="11" cy="11" r="6.5" />
                  <path strokeLinecap="round" d="m16 16 4.5 4.5" />
                </svg>
              </span>

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search test methods, materials or analytes..."
                className="min-h-14 w-full border border-slate-300 bg-white pl-12 pr-4 text-sm text-slate-950 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-400 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.10)]"
              />
            </div>

            <button
              type="button"
              onClick={() => setSearch(search.trim())}
              className="group min-h-14 bg-slate-950 px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-lg hover:shadow-cyan-500/15"
            >
              Search
              <span
                aria-hidden="true"
                className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </button>
          </div>

          {/* Categories */}
          <div className="mt-6 border-t border-slate-200 pt-6">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Browse by material
              </p>

              <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-slate-300">
                FILTER
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={
                      isActive
                        ? "border border-cyan-500 bg-cyan-500 px-3.5 py-2 text-xs font-semibold text-slate-950 shadow-sm"
                        : "border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-700"
                    }
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="mt-10 flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-cyan-500" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700 sm:text-xs">
                Available methods
              </p>
            </div>

            <p className="mt-1.5 text-sm text-slate-500">
              {filteredMethods.length} testing capabilities found
            </p>
          </div>

          {(search !== "" || activeCategory !== "All") && (
            <button
              type="button"
              onClick={clearFilters}
              className="self-start text-xs font-semibold text-slate-600 underline decoration-cyan-500 underline-offset-4 transition-colors hover:text-cyan-700 sm:self-auto"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Results */}
        {filteredMethods.length > 0 && (
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {filteredMethods.map((method) => (
              <article
                key={method.code}
                className="group relative overflow-hidden border border-slate-200 bg-white p-6 text-slate-950 shadow-sm transition-all duration-400 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-7"
              >
                {/* Hover accent */}
                <div className="absolute left-0 top-0 h-px w-0 bg-cyan-500 transition-all duration-500 group-hover:w-full" />

                {/* Subtle card glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/[0.04] blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700">
                      {method.code}
                    </span>

                    <span className="border border-slate-200 bg-slate-50 px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500 transition-colors duration-300 group-hover:border-cyan-100 group-hover:text-cyan-700">
                      {method.type}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.025em] text-slate-950 transition-colors duration-300 group-hover:text-cyan-700 sm:text-2xl">
                    {method.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {method.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 border-t border-slate-200 pt-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                        Material
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-900">
                        {method.material}
                      </p>
                    </div>

                    <div className="border-l border-slate-200 pl-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                        Standards
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-900">
                        {method.standard}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xs font-semibold text-cyan-700">
                      View method details
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-600"
                    >
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredMethods.length === 0 && (
          <div className="mt-6 border border-slate-200 bg-white p-10 text-center shadow-sm sm:p-14">
            <div className="mx-auto flex h-12 w-12 items-center justify-center border border-cyan-200 bg-cyan-50">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5 text-cyan-600"
              >
                <circle cx="11" cy="11" r="6.5" />
                <path strokeLinecap="round" d="m16 16 4.5 4.5" />
              </svg>
            </div>

            <p className="mt-5 text-lg font-semibold text-slate-950">
              No matching methods found.
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Try another material, test type, analyte, or technical
              requirement.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-500 hover:text-slate-950"
            >
              Reset Search
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col gap-5 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-slate-500">
            Can't find the method you're looking for? Our technical team can
            help determine an appropriate testing approach for your sample or
            application.
          </p>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-slate-950 transition-colors hover:text-cyan-700"
          >
            Discuss your requirement
            <span
              aria-hidden="true"
              className="text-cyan-500 transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
