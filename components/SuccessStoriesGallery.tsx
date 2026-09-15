"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const columns: {
  images: string[];
  direction: "up" | "down";
  duration: number;
}[] = [
  {
    images: ["/visa1.png", "/visa2.png", "/visa3.png"],
    direction: "up",
    duration: 22,
  },
  {
    images: ["/visa4.png", "/visa5.png", "/visa6.png"],
    direction: "down",
    duration: 26,
  },
  {
    images: ["/visa7.png", "/visa8.png", "/visa9.png"],
    direction: "up",
    duration: 30,
  },
  {
    images: ["/visa10.png", "/visa11.png", "/visa12.png"],
    direction: "down",
    duration: 24,
  },
  {
    images: ["/visa13.png", "/visa14.png", "/visa15.png"],
    direction: "up",
    duration: 28,
  },
  {
    images: ["/visa16.png", "/visa17.png", "/visa18.png"],
    direction: "down",
    duration: 20,
  },
];

export default function SuccessStoriesGallery() {
  const columnRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      columnRefs.current.forEach((el, i) => {
        if (!el) return;
        const { direction, duration } = columns[i];

        gsap.fromTo(
          el,
          { yPercent: direction === "up" ? 0 : -50 },
          {
            yPercent: direction === "up" ? -50 : 0,
            duration,
            ease: "none",
            repeat: -1,
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#FFFEFA] py-20">
      {/* Scrolling photo columns */}
      <div className="relative mx-auto flex h-[600px] container gap-4 px-4">
        {columns.map((column, colIndex) => (
          <div
            key={colIndex}
            className="relative h-full flex-1 overflow-hidden"
          >
            <div
              ref={(el) => {
                columnRefs.current[colIndex] = el;
              }}
              className="flex flex-col gap-4"
            >
              {[...column.images, ...column.images].map((src, i) => (
                <div
                  key={`${src}-${i}`}
                  className="relative aspect-[3/4] w-full shrink-0 overflow-hidden rounded-2xl"
                >
                  <Image
                    src={src}
                    alt="Student success moment"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Fade overlays so columns dissolve into the background at the edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FFFEFA] to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FFFEFA] to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FFFEFA] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FFFEFA] to-transparent" />
      </div>

      {/* Text overlay, anchored to the top instead of centered */}
      <div className="pointer-events-none absolute inset-x-0 top-10 flex justify-center px-6 sm:top-14">
        <div className="pointer-events-auto max-w-xl rounded-3xl bg-[#FFFEFA]/90 px-8 py-10 text-center shadow-xl backdrop-blur-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1B1B1B] sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
            A glimpse into real student life abroad, straight from international
            students sharing their experiences, challenges, and wins.
          </p>
        </div>
      </div>
    </section>
  );
}
