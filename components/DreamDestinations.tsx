
import Image from "next/image";
import Link from "next/link";

// Place your images at:
// /public/destinations/romania.png
// /public/destinations/malta.png
// /public/destinations/hungary.png
// /public/destinations/cyprus.png
// /public/destinations/united-kingdom.png
// /public/destinations/greece.png

const destinations = [
  { name: "Romania", slug: "romania", image: "/romania.png" },
  { name: "Malta", slug: "malta", image: "/malta.png" },
  { name: "Hungary", slug: "hungary", image: "/hungary.png" },
  { name: "Cyprus", slug: "cyprus", image: "/cyprus.png" },
  {
    name: "United Kingdom",
    slug: "united-kingdom",
    image: "/united-kingdom.png",
  },
  { name: "Greece", slug: "greece", image: "/greece.png" },
];

export default function DreamDestinations() {
  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-20">
      <div className="mx-auto container">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-[#1B1B1B] sm:text-4xl">
          Explore Your Ideal Study{" "}
          <span className="text-[#E0483E]">Destination</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <Link
              key={destination.slug}
              href={`/countries/${destination.slug}`}
              className="group relative block aspect-[4/3] overflow-hidden rounded-3xl"
            >
              <Image
                src={destination.image}
                alt={`Study in ${destination.name}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-colors duration-500 group-hover:from-black/70" />
              <span className="absolute inset-x-0 bottom-6 text-center text-lg font-semibold text-white sm:text-xl">
                {destination.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/countries"
            className="inline-flex items-center gap-2 rounded-full border border-[#1B1B1B] bg-white px-6 py-3 text-sm font-semibold text-[#1B1B1B] transition-colors hover:bg-[#1B1B1B] hover:text-white"
          >
            View All Destinations
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="shrink-0"
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
        </div>
      </div>
    </section>
  );
}
