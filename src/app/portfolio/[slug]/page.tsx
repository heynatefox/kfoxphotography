import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioProjects } from "@/lib/data";

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = portfolioProjects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return { title: project.title };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = portfolioProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const currentIndex = portfolioProjects.findIndex(
    (p) => p.slug === params.slug
  );
  const nextProject =
    portfolioProjects[(currentIndex + 1) % portfolioProjects.length];
  const prevProject =
    portfolioProjects[
      (currentIndex - 1 + portfolioProjects.length) % portfolioProjects.length
    ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/70 via-transparent to-transparent" />
        </div>
        <div className="relative section-padding pb-12 md:pb-16">
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-sage-200 mb-3">
            {project.category}
          </p>
          <h1 className="heading-xl text-warm-50">{project.title}</h1>
        </div>
      </section>

      {/* Description */}
      {project.description && (
        <section className="section-padding py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <p className="body-lg text-center">{project.description}</p>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="section-padding py-12 md:py-16">
        <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6">
          {project.images.map((img, i) => (
            <div key={i} className="mb-4 md:mb-6 break-inside-avoid">
              <div className="relative aspect-auto">
                <Image
                  src={img}
                  alt={`${project.title} - Image ${i + 1}`}
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="grid grid-cols-2 border-t border-warm-200">
        <Link
          href={`/portfolio/${prevProject.slug}`}
          className="group section-padding py-10 md:py-16 border-r border-warm-200 hover:bg-sage-50 transition-colors"
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-charcoal-light mb-2">
            Previous
          </p>
          <h3 className="font-serif text-lg md:text-xl font-medium group-hover:text-sage-600 transition-colors">
            {prevProject.title}
          </h3>
        </Link>
        <Link
          href={`/portfolio/${nextProject.slug}`}
          className="group section-padding py-10 md:py-16 text-right hover:bg-sage-50 transition-colors"
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-charcoal-light mb-2">
            Next
          </p>
          <h3 className="font-serif text-lg md:text-xl font-medium group-hover:text-sage-600 transition-colors">
            {nextProject.title}
          </h3>
        </Link>
      </section>
    </>
  );
}
