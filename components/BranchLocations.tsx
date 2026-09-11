const branches = [
  {
    name: "Kalabagan",
    address: "1st Floor, 165 Lake Circus (Abed Dhali Road), Dhaka 1205",
    phones: ["01713243433", "01713243437"],
    email: "info@admissiononboard.com",
  },
  {
    name: "Banani",
    address:
      "Taneem Square (1st Fl), 158/E Kamal Ataturk Avenue, Banani, Dhaka-1213",
    phones: ["01713243416", "01713243420"],
    email: "info@admissiononboard.com",
  },
  {
    name: "Mirpur",
    address:
      "House 14, Main Road Section 7 (Beside Mirpur 11 Central Mosque), Pallabi, Mirpur, Dhaka",
    phones: ["01713243413"],
    email: "info@admissiononboard.com",
  },
];

function PinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#E0483E"
      className="shrink-0"
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
      className="shrink-0"
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
      className="shrink-0"
    >
      <path d="M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm1.4 2 6.1 5.2a1 1 0 0 0 1 0L18.6 6H5.4ZM4 8.4V18h16V8.4l-6.7 5.7a3 3 0 0 1-3.6 0L4 8.4Z" />
    </svg>
  );
}

export default function BranchLocations() {
  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-20">
      <div className="mx-auto container">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1B1B1B] sm:text-4xl">
            Start Your Journey <span className="text-[#E0483E]">With Us</span>
          </h2>
          <p className="mt-3 text-sm font-semibold text-[#6B6B6B] sm:text-base">
            Find the branch closest to you
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="rounded-2xl border border-[#ECECEC] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-[#1B1B1B]">
                {branch.name}
              </h3>

              <div className="mt-4 flex items-start gap-3">
                <PinIcon />
                <p className="text-sm text-[#4B4B4B]">{branch.address}</p>
              </div>

              <div className="mt-3 flex items-start gap-3">
                <PhoneIcon />
                <p className="text-sm text-[#4B4B4B]">
                  {branch.phones.join(", ")}
                </p>
              </div>

              <div className="mt-3 flex items-start gap-3">
                <MailIcon />
                <a
                  href={`mailto:${branch.email}`}
                  className="text-sm text-[#4B4B4B] hover:text-[#E0483E]"
                >
                  {branch.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
