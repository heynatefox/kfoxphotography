import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { aboutBio } from "@/lib/data";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About | SF Bay Area Brand Photographer",
};

export default function About() {
  return (
    <>
      {/* Hero - split layout */}
      <section className="pt-24 md:pt-0 md:min-h-screen grid md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[3/4] md:aspect-auto md:h-screen md:sticky md:top-0">
          <Image
            src={aboutBio.image}
            alt="Keighla Fox, photographer"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="section-padding py-16 md:py-32 flex items-center">
          <div className="max-w-lg">
            <ScrollReveal>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-sage-500 mb-4">
                The Photographer
              </p>
              <div className="divider-sage mb-8" />
              <h1 className="heading-xl mb-3">Hi there,</h1>
              <h2 className="heading-lg text-sage-600 mb-8">
                I&apos;m Keighla
              </h2>
              <p className="font-serif text-xl md:text-2xl font-medium text-charcoal leading-relaxed mb-8">
                {aboutBio.tagline}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-4 body-lg mb-10">
                {aboutBio.bio.split(". ").reduce((acc: string[], sentence, i, arr) => {
                  // Group into ~3 paragraphs
                  const groupSize = Math.ceil(arr.length / 3);
                  const groupIndex = Math.floor(i / groupSize);
                  if (!acc[groupIndex]) acc[groupIndex] = "";
                  acc[groupIndex] += sentence + (i < arr.length - 1 ? ". " : "");
                  return acc;
                }, []).map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <p className="font-serif text-xl font-medium text-sage-600 italic mb-10">
                {aboutBio.closing}
              </p>

              <Link href="/services" className="btn-primary">
                Explore My Brand Packages
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Secondary image strip */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src={aboutBio.secondaryImage}
          alt="K. Fox Photography work"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>
    </>
  );
}
