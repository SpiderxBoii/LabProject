import Link from "next/link";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

const testingLinks = [
  { label: "Testing Services", href: "/services" },
  { label: "Test Methods", href: "/test-methods" },
  { label: "Sample Requirements", href: "/sample-requirements" },
  { label: "Sample Shipping", href: "/shipping" },
];

const resourceLinks = [
  { label: "Technical Resources", href: "/resources" },
  { label: "FAQs", href: "/faq" },
  { label: "Request a Quote", href: "/request-a-quote" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Technical background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148, 163, 184, 0.65) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.65) 1px, transparent 1px)",
            backgroundSize: "76px 76px",
          }}
        />

        <div className="absolute -left-48 top-[-180px] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.045] blur-[140px]" />

        <div className="absolute -right-48 bottom-[-180px] h-[500px] w-[500px] rounded-full bg-sky-500/[0.035] blur-[140px]" />
      </div>

      {/* Top accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        <div className="h-px w-48 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent sm:w-72" />
      </div>

      {/* Main footer */}
      <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        {/* Footer top metadata */}
        <div className="mb-7 flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping bg-cyan-400 opacity-30" />
              <span className="relative h-1.5 w-1.5 bg-cyan-400" />
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-slate-500 sm:text-[10px]">
              Laboratory & Technical Services
            </span>
          </div>

          <div className="hidden items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700 sm:flex">
            <span>LAB</span>
            <span className="text-cyan-500/40">/</span>
            <span>FINAL</span>
            <span className="text-cyan-500/40">/</span>
            <span>END</span>
          </div>
        </div>

        {/* Main footer */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-8">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="group inline-block"
              aria-label="Material Testing Laboratory home"
            >
              <div className="flex items-center gap-3">
                <span className="h-8 w-1 bg-cyan-400 transition-all duration-300 group-hover:h-10 group-hover:bg-cyan-300" />

                <div>
                  <div className="text-sm font-bold tracking-[0.08em] text-white">
                    MATERIAL TESTING
                  </div>

                  <div className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.22em] text-slate-500">
                    Laboratory
                  </div>
                </div>
              </div>
            </Link>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Material and product testing services supporting technical
              decision-making, product development, quality investigations, and
              laboratory requirements.
            </p>

            <Link
              href="/request-a-quote"
              className="group mt-5 inline-flex items-center gap-2 border border-slate-700 bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_8px_30px_rgba(34,211,238,0.12)]"
            >
              Request a Quote
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          {/* Company */}
          <FooterColumn title="Company" links={companyLinks} />

          {/* Testing */}
          <FooterColumn title="Testing" links={testingLinks} />

          {/* Resources */}
          <FooterColumn title="Resources" links={resourceLinks} />
        </div>

        {/* Technical divider */}
        <div className="mt-8 flex items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-slate-800" />

          <div className="flex items-center gap-2">
            <span className="h-1 w-1 bg-cyan-400/60" />

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700">
              Technical Laboratory
            </span>

            <span className="h-1 w-1 bg-cyan-400/60" />
          </div>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-800 to-slate-800" />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-3.5 text-xs text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Material Testing Laboratory. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-1.5">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-cyan-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="h-1.5 w-1.5 bg-cyan-400" />

        <h2 className="text-sm font-semibold text-white">{title}</h2>
      </div>

      <div className="mt-4 space-y-2.5">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex w-fit items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-300"
          >
            <span className="h-px w-0 bg-cyan-400 transition-all duration-200 group-hover:w-3" />

            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
