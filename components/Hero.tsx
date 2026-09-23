import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden   bg-white">
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-glow hero-glow-left absolute -left-40 top-0 h-[460px] w-[460px] rounded-full bg-cyan-300/10 blur-[130px]" />

        <div className="hero-glow hero-glow-right absolute -right-48 -top-40 h-[680px] w-[680px] rounded-full bg-sky-300/10 blur-[150px]" />

        <div className="absolute bottom-[-260px] left-[30%] h-[520px] w-[520px] rounded-full bg-cyan-200/10 blur-[140px]" />
      </div>

      {/* Technical grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="hero-grid absolute inset-[-80px] opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15,23,42,0.9) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15,23,42,0.9) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* Technical rings */}
      <div className="pointer-events-none absolute right-[2%] top-[4%] hidden h-[560px] w-[560px] lg:block">
        <div className="hero-ring absolute inset-0 rounded-full border border-cyan-500/[0.07]" />

        <div className="hero-ring-reverse absolute inset-[60px] rounded-full border border-cyan-500/[0.055]" />

        <div className="absolute inset-[125px] rounded-full border border-slate-400/[0.07]" />

        <div className="hero-ring-small absolute inset-[190px] rounded-full border border-cyan-500/[0.07]" />

        <div className="hero-center-glow absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.06] blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/40 shadow-[0_0_18px_rgba(6,182,212,0.4)]" />
      </div>

      {/* Background scan */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[52%] overflow-hidden lg:block">
        <div className="hero-scan absolute left-0 top-[-10%] h-px w-full bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <span className="hero-particle-one absolute left-[8%] top-[24%] h-1.5 w-1.5 rounded-full bg-cyan-500/35" />

        <span className="hero-particle-two absolute left-[29%] top-[17%] h-1 w-1 rounded-full bg-cyan-400/40" />

        <span className="hero-particle-three absolute left-[43%] top-[72%] h-1.5 w-1.5 rounded-full bg-sky-500/25" />

        <span className="hero-particle-one absolute right-[30%] top-[25%] h-1 w-1 rounded-full bg-cyan-500/40" />

        <span className="hero-particle-two absolute right-[13%] top-[68%] h-1.5 w-1.5 rounded-full bg-cyan-400/25" />
      </div>

      {/* Technical corners */}
      <div className="pointer-events-none absolute left-6 top-8 hidden h-12 w-12 border-l border-t border-cyan-500/15 sm:block lg:left-10" />

      <div className="pointer-events-none absolute bottom-8 right-6 hidden h-12 w-12 border-b border-r border-cyan-500/15 sm:block lg:right-10" />

      {/* =========================================================
          HERO CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-8 sm:gap-14 sm:py-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:py-12 xl:gap-20 xl:py-14">
          {" "}
          {/* =====================================================
              LEFT
          ====================================================== */}
          <div className="relative z-10 max-w-xl">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />

                <span className="relative h-2 w-2 rounded-full bg-cyan-500" />
              </span>

              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-700 sm:text-xs">
                Material & Product Testing Laboratory
              </p>
            </div>

            {/* Main heading */}
            <h1 className="max-w-[620px] text-[2.7rem] font-semibold leading-[0.97] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-[4.15rem] xl:text-[4.55rem]">
              Reliable Testing.
              <span className="relative mt-2 block text-cyan-600">
                Better Decisions.
                <span className="hero-heading-line absolute -bottom-3 left-0 h-px w-full bg-cyan-500/45" />
              </span>
            </h1>

            {/* Supporting copy */}
            <p className="mt-8 max-w-[550px] text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-7 lg:text-[17px] lg:leading-[1.8]">
              We provide comprehensive material and product testing services
              with industry-recognized methods, advanced equipment, and expert
              technical support.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <Link
                href="/services"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-6 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-600/20"
              >
                Explore Our Services
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <Link
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white/80 px-6 text-sm font-semibold text-slate-900 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-600 hover:shadow-md"
              >
                Contact Us
                <span
                  aria-hidden="true"
                  className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                >
                  →
                </span>
              </Link>
            </div>

            {/* Trust / standards */}
            <div className="mt-9 flex max-w-sm items-center gap-4 border-l-2 border-cyan-500 bg-white/50 py-3 pl-4 backdrop-blur-sm sm:pl-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5 text-cyan-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3l7 3v5c0 4.5-3 7.8-7 10-4-2.2-7-5.5-7-10V6l7-3z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4"
                  />
                </svg>
              </div>

              <div>
                <p className="text-sm font-semibold leading-5 text-slate-950">
                  Accurate Results
                </p>

                <p className="mt-0.5 text-xs leading-5 text-slate-500">
                  ISO / ASTM / IEC Standards
                </p>
              </div>
            </div>
          </div>
          {/* =====================================================
              RIGHT IMAGE
          ====================================================== */}
          <div className="group relative lg:mt-0">
            {/* Outer glow */}
            <div
              className="
                pointer-events-none
                absolute
                -inset-4
                rounded-xl
                bg-cyan-400/[0.04]
                opacity-0
                blur-3xl
                transition-all
                duration-700
                group-hover:opacity-100
                group-hover:bg-cyan-400/[0.09]
              "
            />

            {/* Image container */}
            <div
              className="
                relative
                min-h-[300px]
                overflow-hidden
                border
                border-slate-200
                bg-slate-100
                shadow-xl
                shadow-slate-200/50
                transition-all
                duration-700
                ease-out
                group-hover:-translate-y-1
                group-hover:border-cyan-300
                group-hover:shadow-2xl
                group-hover:shadow-cyan-900/10
                sm:min-h-[430px]
                lg:min-h-[550px]
              "
            >
              <Image
                src="https://images.pexels.com/photos/5726698/pexels-photo-5726698.jpeg?auto=compress&cs=tinysrgb&w=2200"
                alt="Scientist examining samples with a microscope in a modern laboratory"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-[1400ms]
                  ease-out
                  group-hover:scale-[1.045]
                "
              />

              {/* Image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/10 via-transparent to-cyan-400/10" />

              {/* Light sweep */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -left-[120%]
                  top-0
                  h-full
                  w-[55%]
                  skew-x-[-18deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  opacity-0
                  transition-all
                  duration-[1200ms]
                  ease-out
                  group-hover:left-[140%]
                  group-hover:opacity-100
                "
              />

              {/* Scan line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent hero-image-scan" />

              {/* Inner frame */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-3
                  border
                  border-white/0
                  transition-all
                  duration-700
                  group-hover:inset-5
                  group-hover:border-white/25
                "
              />

              {/* Corner markers */}
              <div
                className="
                  absolute
                  left-4
                  top-4
                  h-8
                  w-8
                  border-l
                  border-t
                  border-white/60
                  transition-all
                  duration-500
                  group-hover:left-5
                  group-hover:top-5
                  group-hover:h-10
                  group-hover:w-10
                  group-hover:border-cyan-300
                "
              />

              <div
                className="
                  absolute
                  right-4
                  top-4
                  h-8
                  w-8
                  border-r
                  border-t
                  border-white/60
                  transition-all
                  duration-500
                  group-hover:right-5
                  group-hover:top-5
                  group-hover:h-10
                  group-hover:w-10
                  group-hover:border-cyan-300
                "
              />

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  h-8
                  w-8
                  border-b
                  border-l
                  border-white/60
                  transition-all
                  duration-500
                  group-hover:bottom-5
                  group-hover:left-5
                  group-hover:h-10
                  group-hover:w-10
                  group-hover:border-cyan-300
                "
              />

              <div
                className="
                  absolute
                  bottom-4
                  right-4
                  h-8
                  w-8
                  border-b
                  border-r
                  border-white/60
                  transition-all
                  duration-500
                  group-hover:bottom-5
                  group-hover:right-5
                  group-hover:h-10
                  group-hover:w-10
                  group-hover:border-cyan-300
                "
              />

              {/* Analysis status */}
              <div
                className="
                  pointer-events-none
                  absolute
                  right-5
                  top-5
                  hidden
                  items-center
                  gap-2
                  border
                  border-white/20
                  bg-slate-950/40
                  px-3
                  py-2
                  backdrop-blur-md
                  transition-all
                  duration-500
                  group-hover:border-cyan-300/40
                  sm:flex
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />

                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/80">
                  Analysis Active
                </span>
              </div>

              {/* Technical ID */}
              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-5
                  right-5
                  hidden
                  border
                  border-white/15
                  bg-slate-950/35
                  px-3
                  py-2
                  backdrop-blur-md
                  sm:block
                "
              >
                <p className="font-mono text-[9px] tracking-[0.15em] text-white/70">
                  LAB / 01
                </p>

                <p className="mt-1 font-mono text-[8px] tracking-[0.12em] text-cyan-300/80">
                  PRECISION MODE
                </p>
              </div>
            </div>

            {/* Image caption */}
            <div
              className="
                absolute
                bottom-4
                left-4
                right-4
                border
                border-white/30
                bg-white/95
                p-4
                shadow-lg
                backdrop-blur-sm
                transition-all
                duration-500
                sm:bottom-5
                sm:left-5
                sm:right-auto
                sm:min-w-[270px]
                group-hover:-translate-y-1
                group-hover:border-cyan-200
                group-hover:shadow-xl
              "
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600">
                    Laboratory Excellence
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-5 text-slate-950">
                    Precision testing backed by technical expertise.
                  </p>
                </div>

                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-500 opacity-50 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.5)]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          STATISTICS
      ========================================================== */}

      <div className="relative z-10 border-t border-slate-200 bg-slate-950">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
          <Stat value="25+" label="Years of Experience" />
          <Stat value="500+" label="Projects Completed" />
          <Stat value="100+" label="Testing Methods" />
          <Stat value="Global" label="Service Coverage" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-4 py-5 sm:px-6 sm:py-7">
      <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {value}
      </p>

      <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
        {label}
      </p>
    </div>
  );
}
