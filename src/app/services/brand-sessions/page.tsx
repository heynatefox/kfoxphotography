import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { brandSessionPackages } from "@/lib/data";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Brand Sessions | Packages + Pricing",
};

export default function BrandSessions() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/AltCrtv-Brand-Photography-K.Fox-Photography-103.jpg"
            alt="Brand photography session"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal-dark/50" />
        </div>
        <div className="relative text-center section-padding">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-sage-200 mb-4">
            Brand
          </p>
          <h1 className="heading-xl text-warm-50">Sessions</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="body-lg">
            Whether you&apos;re just starting out or looking to take your
            established business to the next level, my Brand Photography
            Sessions are designed to help you build a visual identity that
            resonates with your audience and strengthens your online presence.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {brandSessionPackages.map((pkg, i) => (
            <ScrollReveal key={pkg.name} delay={i * 120}>
              <div
                className={`relative p-8 md:p-10 h-full flex flex-col ${
                  pkg.featured
                    ? "bg-sage-50 border-2 border-sage-300"
                    : "bg-warm-100 border border-warm-200"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-sage-500 text-warm-50 font-sans text-[11px] tracking-[0.15em] uppercase">
                    Most Popular
                  </span>
                )}
                <h3 className="font-serif text-2xl font-medium mb-3">
                  {pkg.name}
                </h3>
                <p className="font-serif text-xl text-sage-600 font-medium mb-5">
                  {pkg.price}
                </p>
                <p className="body-sm mb-6">{pkg.description}</p>

                <div className="mb-6">
                  <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-sage-500 mb-3">
                    Includes
                  </p>
                  <ul className="space-y-2">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-charcoal-light"
                      >
                        <span className="text-sage-400 mt-0.5 flex-shrink-0">
                          &mdash;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-sage-500 mb-3">
                    You Walk Away With
                  </p>
                  <ul className="space-y-2">
                    {pkg.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-charcoal-light"
                      >
                        <span className="text-sage-400 mt-0.5 flex-shrink-0">
                          &mdash;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Link
                    href="/contact"
                    className={
                      pkg.featured ? "btn-primary w-full text-center" : "btn-outline w-full text-center"
                    }
                  >
                    Book Now
                  </Link>
                </div>

                {pkg.name !== "The Brand Basic" && (
                  <p className="text-center text-xs text-charcoal-light mt-3">
                    *Payment Plans Available
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
