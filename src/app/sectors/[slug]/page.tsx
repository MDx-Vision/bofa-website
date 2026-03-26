import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sectorsData, SectorSlug } from "@/lib/sectors-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sector = sectorsData[slug as SectorSlug];

  if (!sector) {
    return {
      title: "Sector Not Found",
    };
  }

  return {
    title: sector.title,
    description: sector.description,
  };
}

export function generateStaticParams() {
  return Object.keys(sectorsData).map((slug) => ({
    slug,
  }));
}

export default async function SectorPage({ params }: PageProps) {
  const { slug } = await params;
  const sector = sectorsData[slug as SectorSlug];

  if (!sector) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--gray-50)] to-white">
        <div className="container">
          <div className="max-w-3xl">
            <Link
              href="/sectors"
              className="inline-flex items-center text-sm text-[var(--gray-600)] hover:text-[var(--primary-blue)] mb-6 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              All Sectors
            </Link>
            <h1 className="headline-xl mb-6">{sector.title}</h1>
            <p className="body-lg">{sector.heroDescription}</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="eyebrow mb-3">Overview</p>
              <div className="space-y-6">
                {sector.overview.map((paragraph, index) => (
                  <p key={index} className="body-md">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-[var(--off-white)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--gray-900)] mb-4">
                  Key Highlights
                </h3>
                <ul className="space-y-3">
                  {sector.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[var(--primary-blue)] flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[var(--gray-600)]">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-[var(--off-white)]">
        <div className="container">
          <div className="max-w-4xl">
            <p className="eyebrow mb-3">Available Services</p>
            <h2 className="headline-md mb-6">
              Services for {sector.title}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {sector.services.map((service) => (
                <div
                  key={service}
                  className="bg-white px-5 py-4 rounded-lg border border-[var(--gray-100)] text-[var(--gray-900)]"
                >
                  {service}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/solutions" className="btn btn-secondary">
                See All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Placeholder */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video placeholder-image rounded-lg">
              <span>[PLACEHOLDER: {sector.title} Project Image]</span>
            </div>
            <div>
              <p className="eyebrow mb-3">Featured Project</p>
              <h2 className="headline-md mb-4">
                Recent {sector.title} Success
              </h2>
              <p className="body-md mb-6">
                Placeholder for a featured project in this sector. This section
                will showcase a recent successful project demonstrating our
                expertise and capabilities.
              </p>
              <Link
                href="/projects"
                className="text-[var(--primary-blue)] font-medium hover:text-[var(--accent-blue)] transition-colors"
              >
                View All Projects →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--primary-blue)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline-md text-white mb-4">
              Have a {sector.title} Project?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Free estimates. Licensed and insured. We respond within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-white">
                Get a Free Estimate
              </Link>
              <a
                href="tel:+1-212-202-0699"
                className="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary-blue)]"
              >
                Call (212) 202-0699
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
