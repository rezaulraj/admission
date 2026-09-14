import Image from "next/image";
import Link from "next/link";

const countries = [
  "Romania",
  "Malta",
  "Hungary",
  "Cyprus",
  "United Kingdom",
  "greece",
];

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/contact", label: "Contact" },
];

const about = ["Our Story", "Our Gallery", "Careers", "Our Blogs"];

const partner = ["Institution Partner", "Recruitment Partner"];
export default function Header() {
  return (
    <div className="sticky top-0 z-50 w-full px-4 pt-4">
      <header className="mx-auto max-w-7xl rounded-full border border-black/5 bg-linear-to-b from-white/80 via-white/70 to-[#FFFEFA] shadow-lg shadow-black/5 backdrop-blur-xl">
        <div className="flex h-16 w-full items-center justify-between px-6">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-black"
          >
            <Image
              src={"/logo.png"}
              alt="admition on board"
              width={180}
              height={22}
            />
          </Link>

          <nav className="hidden items-center gap-8 text-base font-light text-zinc-900 lg:flex">
            <div className="group relative">
              <Link
                href={"/countries"}
                className="flex cursor-pointer items-center gap-1.5 py-2 transition-colors duration-200 group-hover:text-black"
              >
                Countries
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="mt-0.5 transition-transform duration-300 group-hover:rotate-180"
                >
                  <path
                    d="M2.5 4.5L6 8L9.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-black transition-transform duration-300 group-hover:scale-x-100" />
              </Link>

              <div className="invisible absolute left-1/2 top-full z-50 w-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-xl backdrop-blur-xl">
                  <div className="grid grid-cols-1 gap-1">
                    {countries.map((country) => (
                      <Link
                        key={country}
                        href={`/countries/${country
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="rounded-lg px-3 py-2 text-base font-medium text-zinc-600 transition-colors duration-150 hover:bg-[#0D7CE1]/8 hover:text-black"
                      >
                        {country}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative">
              <button className="flex cursor-pointer items-center gap-1.5 py-2 transition-colors duration-200 group-hover:text-black">
                About
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="mt-0.5 transition-transform duration-300 group-hover:rotate-180"
                >
                  <path
                    d="M2.5 4.5L6 8L9.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-black transition-transform duration-300 group-hover:scale-x-100" />
              </button>

              <div className="invisible absolute left-1/2 top-full z-50 w-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-xl backdrop-blur-xl">
                  <div className="grid grid-cols-1 gap-1">
                    {about.map((about) => (
                      <Link
                        key={about}
                        href={`/about/${about
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="rounded-lg px-3 py-2 text-base font-medium text-zinc-600 transition-colors duration-150 hover:bg-[#0D7CE1]/8 hover:text-black"
                      >
                        {about}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group/link relative py-2 transition-colors duration-200 hover:text-black"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-black transition-transform duration-300 group-hover/link:scale-x-100" />
              </Link>
            ))}
            <div className="group relative">
              <button className="flex cursor-pointer items-center gap-1.5 py-2 transition-colors duration-200 group-hover:text-black">
                Partners
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="mt-0.5 transition-transform duration-300 group-hover:rotate-180"
                >
                  <path
                    d="M2.5 4.5L6 8L9.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-black transition-transform duration-300 group-hover:scale-x-100" />
              </button>

              <div className="invisible absolute left-1/2 top-full z-50 w-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-xl backdrop-blur-xl">
                  <div className="grid grid-cols-1 gap-1">
                    {partner.map((partner) => (
                      <Link
                        key={partner}
                        href={`/partner/${partner
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="rounded-lg px-3 py-2 text-base font-medium text-zinc-600 transition-colors duration-150 hover:bg-[#0D7CE1]/8 hover:text-black"
                      >
                        {partner}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/auth/login"
              className="flex h-10 items-center justify-center rounded-full border border-black px-5 text-[15px] font-semibold tracking-wide text-black transition-colors duration-200 hover:border-black/25 hover:bg-black/5"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="flex h-10 items-center justify-center rounded-full bg-black px-5 text-[15px] font-semibold tracking-wide text-white shadow-sm shadow-[#F68F29]/30 transition-colors duration-200 hover:bg-gray-950"
            >
              Register as a Student
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
