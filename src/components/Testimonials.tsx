"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="section-padding py-20 md:py-28 bg-sage-50">
      <div className="max-w-5xl mx-auto">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-sage-500 mb-4 text-center">
          Client Love
        </p>
        <div className="divider-sage mx-auto mb-12" />

        <div className="relative min-h-[300px]">
          <blockquote className="text-center max-w-3xl mx-auto">
            <p className="font-serif text-xl md:text-2xl lg:text-[1.65rem] font-medium leading-relaxed text-charcoal italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-8 flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden relative">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <cite className="font-serif text-lg font-medium not-italic text-charcoal">
                  {t.name}
                </cite>
                <p className="font-sans text-sm text-charcoal-light">
                  {t.title}
                </p>
              </div>
            </footer>
          </blockquote>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? "bg-sage-500 w-6"
                  : "bg-sage-300 hover:bg-sage-400"
              }`}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
