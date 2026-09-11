import Image from "next/image";
import Link from "next/link";

// Place your logo at: /public/logo.png

const importantLinksLeft = [
  { label: "About", href: "/about" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Our Branches", href: "/branches" },
  { label: "Mission Statement", href: "/mission" },
];

const importantLinksRight = [
  { label: "Blogs", href: "/blogs" },
  { label: "Top Destinations", href: "/countries" },
  { label: "Sitemap", href: "/sitemap" },
];

const socials = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    path: "M6.9 8.4H3.6V20h3.3V8.4ZM5.3 3.5A1.9 1.9 0 1 0 5.3 7.3 1.9 1.9 0 0 0 5.3 3.5ZM20.4 20h-3.3v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V20H9.3V8.4h3.2v1.6h.1c.4-.8 1.6-1.7 3.3-1.7 3.5 0 4.2 2.3 4.2 5.3V20Z",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    path: "M13 22v-8h2.7l.4-3H13V9c0-.9.2-1.5 1.5-1.5H16V5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.5v3H9.8v8H13Z",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/",
    path: "M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.5.1-1.4-.7-2.3-1.3-3.2-2.9-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.5s-.6-1.5-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.8c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    path: "M21.8 8.1s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.9 5 12 5 12 5s-3.9 0-6.9.2c-.4 0-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2 9.9 2 11.6v1.4c0 1.7.2 3.5.2 3.5s.2 1.5.8 2.1c.8.8 1.9.8 2.4.9 1.7.2 6.6.2 6.6.2s3.9 0 6.9-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.5v-1.4c0-1.7-.2-3.5-.2-3.5ZM9.9 15V8.9l5.6 3-5.6 3.1Z",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    path: "M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.5.5.7.3 1.2.6 1.8 1.2.6.6.9 1.1 1.2 1.8.3.7.5 1.4.5 2.5.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.5 2.5-.3.7-.6 1.2-1.2 1.8-.6.6-1.1.9-1.8 1.2-.7.3-1.4.5-2.5.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.5-.5-.7-.3-1.2-.6-1.8-1.2-.6-.6-.9-1.1-1.2-1.8-.3-.7-.5-1.4-.5-2.5C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1.1.2-1.8.5-2.5.3-.7.6-1.2 1.2-1.8.6-.6 1.1-.9 1.8-1.2.7-.3 1.4-.5 2.5-.5C8.9 2 9.3 2 12 2Zm0 1.8c-2.6 0-3 0-4 .1-.9 0-1.4.2-1.7.3-.4.2-.7.3-1 .6-.3.3-.5.6-.6 1-.1.3-.3.8-.3 1.7-.1 1-.1 1.4-.1 4s0 3 .1 4c0 .9.2 1.4.3 1.7.2.4.3.7.6 1 .3.3.6.5 1 .6.3.1.8.3 1.7.3 1 .1 1.4.1 4 .1s3 0 4-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.3 1-.6.3-.3.5-.6.6-1 .1-.3.3-.8.3-1.7.1-1 .1-1.4.1-4s0-3-.1-4c0-.9-.2-1.4-.3-1.7-.2-.4-.3-.7-.6-1-.3-.3-.6-.5-1-.6-.3-.1-.8-.3-1.7-.3-1-.1-1.4-.1-4-.1Zm0 3.5a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm4.9-2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z",
  },
];

function PinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#E0483E"
      className="mt-0.5 shrink-0"
    >
      <path d="M12 2C7.86 2 4.5 5.36 4.5 9.5c0 5.25 6.19 11.44 6.46 11.7a1.5 1.5 0 0 0 2.08 0c.27-.26 6.46-6.45 6.46-11.7C19.5 5.36 16.14 2 12 2Zm0 10.5A3 3 0 1 1 12 6.5a3 3 0 0 1 0 6Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#E0483E"
      className="mt-0.5 shrink-0"
    >
      <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#E0483E"
      className="mt-0.5 shrink-0"
    >
      <path d="M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm1.4 2 6.1 5.2a1 1 0 0 0 1 0L18.6 6H5.4ZM4 8.4V18h16V8.4l-6.7 5.7a3 3 0 0 1-3.6 0L4 8.4Z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto container rounded-4xl px-6 py-14 bg-[#F5F5F3]">
      <div className=" ">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Admission OnBoard"
                width={180}
                height={40}
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#5B5B5B]">
              Admission OnBoard is a trusted study abroad consultancy offering
              complete A-Z guidance and support to help students turn their
              overseas education goals into reality, all without any hidden
              service charges.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-base font-semibold text-[#1B1B1B]">
              Important Links
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-light">
              <div className="flex flex-col gap-3">
                {importantLinksLeft.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[#5B5B5B] transition-colors hover:text-black"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {importantLinksRight.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[#5B5B5B] transition-colors hover:text-black"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold text-[#1B1B1B]">Contact</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#5B5B5B]">
              <div className="flex items-start gap-2">
                <PinIcon />
                <span>
                  1st Floor, 165 Lake Circus (Abed Dhali Road), Dhaka 1205
                </span>
              </div>
              <div className="flex items-start gap-2">
                <PhoneIcon />
                <span>09610883388</span>
              </div>
              <div className="flex items-start gap-2">
                <MailIcon />
                <a
                  href="mailto:info@admissiononboard.com"
                  className="hover:text-[#E0483E]"
                >
                  info@admissiononboard.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/[.06] px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-[#5B5B5B]">
            &copy;{year} Admission OnBoard Ltd. All rights reserved.
          </p>

          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1B1B1B] text-white transition-colors hover:bg-[#E0483E]"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
