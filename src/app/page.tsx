import Image from "next/image";
import Link from "next/link";
import { homeServices, serviceCategories, aboutBio } from "@/lib/data";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/image-0.jpg"
            alt="Brand photography by K. Fox Photography"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/70 via-charcoal-dark/20 to-transparent" />
        </div>
        <div className="relative section-padding pb-16 md:pb-24 w-full max-w-5xl">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-warm-50 leading-[1.1] tracking-tight">
            San Francisco Bay Area
            <br />
            <span className="text-sage-200">Brand Photography</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-warm-200 max-w-xl leading-relaxed">
            Elevated photo + video content for entrepreneurs and small
            businesses
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/services" className="btn-primary">
              Explore Services
            </Link>
            <Link
              href="/portfolio"
              className="btn-outline border-warm-300 text-warm-100 hover:bg-warm-100 hover:text-charcoal"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="py-6 bg-sage-50 overflow-hidden border-y border-sage-100">
        <div className="marquee-track">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-4 px-4 font-serif text-lg md:text-xl text-sage-500 whitespace-nowrap"
            >
              {serviceCategories.map((cat) => (
                <span key={cat} className="flex items-center gap-4">
                  <span>{cat}</span>
                  <span className="text-sage-300">&bull;</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Elevate Your Brand */}
      <section className="section-padding py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-sage-500 mb-4">
                  About the Work
                </p>
                <div className="divider-sage mb-8" />
                <h2 className="heading-lg mb-6">Elevate Your Brand Content</h2>
                <p className="body-lg mb-4">
                  As a Bay Area brand photographer, I specialize in creating
                  custom photo and video content for small business owners,
                  entrepreneurs, and corporate brands.
                </p>
                <p className="body-lg mb-8">
                  Investing in professional brand photography allows you to focus
                  on what you do best while ensuring your brand shines
                  consistently. I&apos;m dedicated to crafting high-quality,
                  curated visuals that tell your story, build trust with your
                  audience, and help you stand out above the competition.
                </p>
                <Link href="/services" className="btn-primary">
                  View All Services
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/images/image-1.jpg"
                    alt="Brand photography session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Offset accent block */}
                <div className="hidden md:block absolute -bottom-6 -left-6 w-32 h-32 bg-sage-100 -z-10" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding py-20 md:py-28 bg-warm-100">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-sage-500 mb-4">
                What I Offer
              </p>
              <h2 className="heading-lg">Services</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {homeServices.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <Link href={service.href} className="group block">
                  <div className="img-hover-zoom aspect-[3/4] relative mb-5">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-medium group-hover:text-sage-600 transition-colors">
                    {service.title}
                  </h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
              <div className="md:col-span-2">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={aboutBio.image}
                    alt="Keighla Fox, photographer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-sage-500 mb-4">
                  The Photographer
                </p>
                <div className="divider-sage mb-8" />
                <h2 className="heading-lg mb-6">
                  Hi, I&apos;m Keighla!
                  <br />
                  <span className="text-sage-600 text-[0.85em]">
                    The Bay Area Brand Photographer you want to work with.
                  </span>
                </h2>
                <p className="body-lg mb-8">
                  With over 9 years of experience as a fellow small business
                  owner and entrepreneur, I understand the power of having
                  visuals that truly reflect your brand. Together, we can create
                  content that builds trust and connection with your target
                  audience.
                </p>
                <Link href="/about" className="btn-outline">
                  Learn More About Me
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/image-8.jpg"
            alt="K. Fox Photography studio"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal-dark/60" />
        </div>
        <div className="relative text-center section-padding">
          <h2 className="heading-lg text-warm-50 mb-6">
            Let&apos;s Create Something Beautiful
          </h2>
          <p className="body-lg text-warm-200 max-w-xl mx-auto mb-8">
            Ready to elevate your brand with stunning visuals? Let&apos;s
            connect and bring your vision to life.
          </p>
          <Link href="/contact" className="btn-primary bg-sage-600 hover:bg-sage-500">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
