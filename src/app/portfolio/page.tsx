import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "@/lib/data";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Portfolio | SF Bay Area Brand Photography",
};

export default function Portfolio() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 section-padding text-center">
        <h1 className="heading-xl mb-6">Portfolio</h1>
        <div className="divider-sage mx-auto mb-6" />
        <p className="body-lg max-w-2xl mx-auto">
          Brand + portrait photographer partnering with business owners +
          entrepreneurs to create elevated photo + video content that brings your
          brand to life.
        </p>
      </section>

      {/* Project Grid */}
      <section className="section-padding pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioProjects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 80}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block"
              >
                <div className="img-hover-zoom aspect-[4/5] relative">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-charcoal-dark/0 group-hover:bg-charcoal-dark/30 transition-colors duration-500 flex items-end">
                    <div className="p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-sage-200 mb-1">
                        {project.category}
                      </p>
                      <h3 className="font-serif text-xl font-medium text-warm-50">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 md:py-28 bg-sage-50 text-center">
        <h2 className="heading-lg mb-4">Before You Inquire</h2>
        <div className="divider-sage mx-auto mb-8" />
        <p className="body-lg max-w-xl mx-auto mb-8">
          Take a look at my brand packages to find the perfect fit for your
          business.
        </p>
        <Link href="/services" className="btn-primary">
          Explore My Brand Packages
        </Link>
      </section>
    </>
  );
}
