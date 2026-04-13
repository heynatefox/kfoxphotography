import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";
import { Testimonials } from "@/components/Testimonials";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Services | SF Bay Area Brand Photography",
};

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 section-padding text-center">
        <h1 className="heading-xl mb-6">Brand Photography Services</h1>
        <div className="divider-sage mx-auto mb-6" />
        <p className="body-lg max-w-2xl mx-auto">
          Our personalized San Francisco Bay Area brand photography and
          videography services include everything from creative concept
          development to detailed planning and seamless execution, all aimed at
          bringing your brand to life.
        </p>
      </section>

      {/* Services List */}
      <section className="section-padding pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto space-y-20 md:space-y-28">
          {services.map((service, i) => (
            <ScrollReveal key={service.title}>
              <div
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  i % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="img-hover-zoom aspect-[4/5] relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-sage-500 mb-3">
                    {service.price}
                  </p>
                  <h2 className="heading-md mb-5">{service.title}</h2>
                  <p className="body-lg mb-8">{service.description}</p>
                  <Link href={service.href} className="btn-outline">
                    {service.href === "/services/brand-sessions"
                      ? "View Packages"
                      : "Inquire"}
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="section-padding py-20 md:py-28 bg-warm-100 text-center">
        <h2 className="heading-lg mb-4">
          Let&apos;s Chat About What Your Brand Needs.
        </h2>
        <div className="divider-sage mx-auto mb-8" />
        <p className="body-lg max-w-xl mx-auto mb-8">
          Every brand is unique. Let&apos;s find the perfect package for you.
        </p>
        <Link href="/contact" className="btn-primary">
          Get in Touch
        </Link>
      </section>
    </>
  );
}
