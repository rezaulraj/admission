import React from "react";
import Link from "next/link";

const offices = [
  { name: "Bangladesh", slug: "bangladesh" },
  { name: "Ghana", slug: "ghana" },
  { name: "India", slug: "india" },
  { name: "Kenya", slug: "kenya" },
  { name: "Nepal", slug: "nepal" },
  { name: "Nigeria", slug: "nigeria" },
  { name: "Pakistan", slug: "pakistan" },
  { name: "Sri Lanka", slug: "sri-lanka" },
  { name: "United Kingdom", slug: "united-kingdom" },
];

export default function GlobalNetwork() {
  return (
    <section className="w-full bg-black px-6 py-20">
      <div className="mx-auto container">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1.3fr] md:gap-16">
          {/* Left: copy */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#E0483E]">
              Global Network
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Present Across Three Continents
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60 sm:text-base">
              Globally connected, locally focused. Find an Admission OnBoard
              team wherever you are.
            </p>
          </div>

          {/* Right: office grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {offices.map((office) => (
              <Link
                key={office.slug}
                href={`/countries/${office.slug}`}
                className="group relative flex items-center justify-between overflow-hidden rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E0483E]/60 hover:bg-white/10"
              >
                <span
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-[#E0483E]/0 via-[#E0483E]/15 to-[#E0483E]/0 transition-transform duration-700 group-hover:translate-x-full"
                  aria-hidden
                />
                <span className="relative">{office.name}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="relative shrink-0 -translate-x-1 text-white/40 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-[#E0483E] group-hover:opacity-100"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
