import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact | Let's Work Together",
};

export default function Contact() {
  return (
    <section className="pt-24 md:pt-0 md:min-h-screen grid md:grid-cols-2">
      {/* Image collage */}
      <div className="relative hidden md:block md:h-screen md:sticky md:top-0">
        <div className="grid grid-cols-2 h-full">
          <div className="relative">
            <Image
              src="/images/image-38.jpg"
              alt="Keighla Fox"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/image-39.jpg"
              alt="Keighla Fox"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
        </div>
      </div>

      {/* Mobile hero image */}
      <div className="md:hidden relative aspect-[16/9]">
        <Image
          src="/images/image-38.jpg"
          alt="Keighla Fox"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Form */}
      <div className="section-padding py-16 md:py-32 flex items-center">
        <div className="max-w-lg w-full">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-sage-500 mb-4">
              Get in Touch
            </p>
            <div className="divider-sage mb-8" />
            <h1 className="heading-xl mb-4">
              Let&apos;s work together
            </h1>
            <p className="body-lg mb-10">
              Ready to elevate your brand? Fill out the form below and
              I&apos;ll get back to you within 48 hours.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block font-sans text-sm text-charcoal-light mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full px-4 py-3 bg-transparent border border-warm-300 font-sans text-sm focus:outline-none focus:border-sage-400 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block font-sans text-sm text-charcoal-light mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-4 py-3 bg-transparent border border-warm-300 font-sans text-sm focus:outline-none focus:border-sage-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-sans text-sm text-charcoal-light mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-transparent border border-warm-300 font-sans text-sm focus:outline-none focus:border-sage-400 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="business"
                  className="block font-sans text-sm text-charcoal-light mb-2"
                >
                  Business / Brand Name
                </label>
                <input
                  type="text"
                  id="business"
                  className="w-full px-4 py-3 bg-transparent border border-warm-300 font-sans text-sm focus:outline-none focus:border-sage-400 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block font-sans text-sm text-charcoal-light mb-2"
                >
                  What service are you interested in?
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 bg-transparent border border-warm-300 font-sans text-sm focus:outline-none focus:border-sage-400 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="brand-session">Brand Session</option>
                  <option value="retainer">Retainer Package</option>
                  <option value="product">Product Content</option>
                  <option value="headshots">Professional Headshots</option>
                  <option value="event">Event Coverage</option>
                  <option value="studio">Studio Rental</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-sans text-sm text-charcoal-light mb-2"
                >
                  Tell me about your project *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-transparent border border-warm-300 font-sans text-sm focus:outline-none focus:border-sage-400 transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
