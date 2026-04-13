import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { studioInfo } from "@/lib/data";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "The Sausalito Studio | SF Bay Area Photography Studio",
};

export default function Studio() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[450px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={studioInfo.images[0]}
            alt="The Sausalito Studio"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/60 via-transparent to-transparent" />
        </div>
        <div className="relative section-padding pb-12 md:pb-16">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-sage-200 mb-3">
            by K. Fox Photography
          </p>
          <h1 className="heading-xl text-warm-50">The Sausalito Studio</h1>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal>
            <div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-sage-500 mb-4">
                San Francisco Bay Area Photography Studio
              </p>
              <div className="divider-sage mb-8" />
              <h2 className="heading-md mb-6">{studioInfo.subtitle}</h2>
              <p className="body-lg mb-4">{studioInfo.description}</p>
              <p className="body-lg mb-4">{studioInfo.secondaryText}</p>
              <p className="body-lg">{studioInfo.cta}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] relative col-span-2">
                <Image
                  src={studioInfo.images[1]}
                  alt="Sausalito Studio interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="aspect-square relative">
                <Image
                  src={studioInfo.images[2]}
                  alt="Sausalito Studio detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
              <div className="aspect-square relative bg-sage-100 flex items-center justify-center p-6">
                <p className="font-serif text-lg text-sage-600 text-center italic">
                  Natural light. Neutral tones. Endless possibilities.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Rental Options */}
      <section className="section-padding py-20 md:py-28 bg-sage-50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="heading-lg mb-4">Sausalito Studio Rentals</h2>
              <div className="divider-sage mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-warm-50 p-8 md:p-10 border border-sage-200 h-full">
                <h3 className="font-serif text-2xl font-medium mb-4">
                  {studioInfo.membership.title}
                </h3>
                <p className="body-lg mb-8">
                  {studioInfo.membership.description}
                </p>
                <Link href="/contact" className="btn-primary">
                  Inquire for Membership Details
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="bg-warm-50 p-8 md:p-10 border border-sage-200 h-full">
                <h3 className="font-serif text-2xl font-medium mb-4">
                  {studioInfo.rental.title}
                </h3>
                <p className="body-lg mb-8">{studioInfo.rental.description}</p>
                <Link href="/contact" className="btn-outline">
                  Book the Studio
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
