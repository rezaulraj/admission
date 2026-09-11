import Image from "next/image";
import Link from "next/link";

// Place your blog cover images at, e.g.:
// /public/blogs/canada-visa-2026.jpg
// /public/blogs/uk-reasons.jpg
// /public/blogs/malaysia-guide.jpg

const blogs = [
  {
    slug: "canada-visa-approval-guide-2026",
    title: "Canada Just Reopened Its Doors: A 2026 Visa Approval Guide",
    excerpt:
      "If you have been holding off on your Canadian study permit, 2026 has opened a window worth acting on. Here is what changed and how to move fast...",
    image: "/uk-reasons.png",
  },
  {
    slug: "top-reasons-bangladeshi-students-uk",
    title: "Top 7 Reasons Bangladeshi Students Are Picking the UK",
    excerpt:
      "Deciding where to study abroad usually comes down to one question: which country actually delivers the best return. Here is why the UK keeps winning...",
    image: "/uk-reasons.png",
  },
  {
    slug: "study-in-malaysia-from-bangladesh-2026-guide",
    title: "Malaysia From Bangladesh: Your Complete 2026 Study Guide",
    excerpt:
      "Malaysia has quietly become one of the fastest-growing destinations for Bangladeshi students, with thousands enrolling in the first quarter of 2026 alone...",
    image: "/uk-reasons.png",
  },
];

export default function LatestBlogs() {
  return (
    <section className="w-full bg-[#FFFEFA] px-6 py-20">
      <div className="mx-auto container">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1B1B1B] sm:text-4xl">
            Latest <span className="text-[#E0483E]">Blogs</span>
          </h2>
          <p className="mt-3 text-sm font-semibold text-[#6B6B6B] sm:text-base">
            Stay in the loop with fresh updates and insights from our team
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group flex flex-col"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold leading-snug text-[#1B1B1B] transition-colors group-hover:text-[#E0483E] sm:text-xl">
                {blog.title}
              </h3>

              <p className="mt-3 text-sm text-[#6B6B6B] sm:text-base">
                {blog.excerpt}
              </p>

              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#1B1B1B] transition-colors group-hover:text-[#E0483E]">
                Read more
                <svg
                  width="14"
                  height="14"
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
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 rounded-full border border-[#1B1B1B] bg-white px-6 py-3 text-sm font-semibold text-[#1B1B1B] transition-colors hover:bg-[#1B1B1B] hover:text-white"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
