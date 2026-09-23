"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Services", href: "/services" },
  { name: "Test Methods", href: "/test-methods" },
  { name: "Industries", href: "/industries" },
  { name: "Capabilities", href: "/capabilities" },
  { name: "Process", href: "/process" },
  { name: "Case Studies", href: "/case-studies" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 overflow-hidden border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      {/* Technical top accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
        <div className="header-scan-line absolute inset-y-0 left-[-20%] w-[20%] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      </div>

      {/* Subtle technical atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="header-grid absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15,23,42,0.8) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15,23,42,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="absolute -right-32 top-[-180px] h-[360px] w-[360px] rounded-full bg-cyan-400/[0.035] blur-[100px]" />

        <div className="absolute left-[-180px] top-[-220px] h-[320px] w-[320px] rounded-full bg-sky-400/[0.025] blur-[100px]" />
      </div>

      {/* Main Header */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[76px] items-center justify-between gap-5 sm:min-h-[82px] lg:min-h-[84px]">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group relative flex shrink-0 items-center"
            aria-label="Matestlab Laboratory home"
          >
            {/* Logo hover glow */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 bg-cyan-400/0 blur-xl transition-all duration-500 group-hover:bg-cyan-400/[0.08]"
            />

            <Image
              src="/LabProject/matestlab-logo-transparent.png"
              alt="Matestlab Laboratory"
              width={330}
              height={120}
              priority
              className="relative h-auto w-[125px] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:opacity-95 sm:w-[155px] lg:w-[180px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center lg:flex"
            aria-label="Main navigation"
          >
            <div className="flex items-center border-l border-slate-200 pl-4 xl:pl-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="header-nav-link group relative px-2.5 py-4 text-[11px] font-semibold tracking-wide text-slate-600 transition-all duration-300 hover:text-slate-950 xl:px-3.5 xl:text-[12px]"
                >
                  {link.name}

                  {/* Animated underline */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-1.5 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-cyan-500 shadow-[0_0_0_rgba(34,211,238,0)] transition-all duration-300 group-hover:w-[calc(100%-1.25rem)] group-hover:shadow-[0_0_10px_rgba(34,211,238,0.45)]"
                  />

                  {/* Small hover point */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 translate-y-1 scale-0 bg-cyan-400 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>

            {/* Desktop Quote Button */}
            <Link
              href="/request-a-quote"
              className="header-quote-button group relative ml-4 inline-flex min-h-11 items-center gap-2 overflow-hidden bg-slate-950 px-4 text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_8px_30px_rgba(34,211,238,0.16)] xl:ml-5 xl:px-5 xl:text-[11px]"
            >
              {/* Button scan */}
              <span
                aria-hidden="true"
                className="header-button-scan pointer-events-none absolute inset-y-0 left-[-40%] w-[35%] skew-x-[-20deg] bg-white/20"
              />

              <span className="relative">Request a Quote</span>

              <span
                aria-hidden="true"
                className="relative text-cyan-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-950"
              >
                →
              </span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="group relative flex h-11 w-11 shrink-0 items-center justify-center border border-slate-200 bg-white transition-all duration-300 hover:border-cyan-400 hover:bg-slate-50 hover:shadow-[0_6px_20px_rgba(34,211,238,0.08)] lg:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {/* Corner accents */}
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-2 w-2 border-l border-t border-cyan-400 opacity-0 transition-all duration-300 group-hover:opacity-100"
            />

            <span
              aria-hidden="true"
              className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-cyan-400 opacity-0 transition-all duration-300 group-hover:opacity-100"
            />

            <span className="relative block h-5 w-5">
              {/* Top */}
              <span
                className={`absolute left-0 block h-px w-5 bg-slate-950 transition-all duration-300 ${
                  menuOpen
                    ? "top-2.5 rotate-45"
                    : "top-1 group-hover:bg-cyan-600"
                }`}
              />

              {/* Middle */}
              <span
                className={`absolute left-0 top-2.5 block h-px w-5 bg-slate-950 transition-all duration-200 ${
                  menuOpen
                    ? "translate-x-2 opacity-0"
                    : "translate-x-0 opacity-100 group-hover:bg-cyan-600"
                }`}
              />

              {/* Bottom */}
              <span
                className={`absolute left-0 block h-px w-5 bg-slate-950 transition-all duration-300 ${
                  menuOpen
                    ? "top-2.5 -rotate-45"
                    : "top-4 group-hover:bg-cyan-600"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden border-t border-slate-200 bg-white">
          {/* Mobile technical atmosphere */}
          <div className="relative overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.018]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(15,23,42,0.8) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(15,23,42,0.8) 1px, transparent 1px)
                `,
                backgroundSize: "48px 48px",
              }}
            />

            <div className="relative mx-auto max-w-7xl px-4 pb-6 pt-4 sm:px-6">
              {/* Mobile Navigation Label */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping bg-cyan-400 opacity-30" />

                    <span className="relative h-1.5 w-1.5 bg-cyan-500" />
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Laboratory Navigation
                  </span>
                </div>

                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-300">
                  NAV / 01
                </span>
              </div>

              {/* Mobile Links */}
              <nav
                className="border-y border-slate-200"
                aria-label="Mobile navigation"
              >
                {links.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="header-mobile-link group flex min-h-14 items-center justify-between border-b border-slate-100 last:border-b-0"
                    style={{
                      animationDelay: `${index * 45}ms`,
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-cyan-600 transition-transform duration-300 group-hover:translate-x-1">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm font-semibold text-slate-800 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-700">
                        {link.name}
                      </span>
                    </div>

                    <span
                      aria-hidden="true"
                      className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-500"
                    >
                      →
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Mobile Quote Button */}
              <Link
                href="/request-a-quote"
                onClick={closeMenu}
                className="group relative mt-5 flex min-h-13 items-center justify-center gap-2 overflow-hidden bg-slate-950 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)]"
              >
                <span
                  aria-hidden="true"
                  className="header-button-scan pointer-events-none absolute inset-y-0 left-[-40%] w-[35%] skew-x-[-20deg] bg-white/20"
                />

                <span className="relative">Request a Quote</span>

                <span
                  aria-hidden="true"
                  className="relative text-cyan-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-950"
                >
                  →
                </span>
              </Link>

              {/* Mobile Footer Details */}
              <div className="mt-5 flex flex-col gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Analytical Testing
                </span>

                <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping bg-cyan-400 opacity-30" />

                    <span className="relative h-1.5 w-1.5 bg-cyan-500" />
                  </span>
                  Technical Services
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
