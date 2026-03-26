import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "BOFA serves government, healthcare, education, commercial, industrial, and residential sectors. MWBE-certified environmental remediation and construction.",
};

const sectors = [
  {
    slug: "government-municipal",
    title: "Government & Municipal",
    description:
      "MWBE-certified. Davis-Bacon compliant. We know the bid process.",
    image: "[PLACEHOLDER: Government building]",
    linkText: "See Government Work →",
  },
  {
    slug: "healthcare",
    title: "Healthcare Facilities",
    description:
      "ICRA-trained crews. Zero disruption to patient care.",
    image: "[PLACEHOLDER: Healthcare facility]",
    linkText: "See Healthcare Work →",
  },
  {
    slug: "education",
    title: "Educational Institutions",
    description:
      "Summer break schedules. Every school ready for September.",
    image: "[PLACEHOLDER: School building]",
    linkText: "See Education Work →",
  },
  {
    slug: "commercial-industrial",
    title: "Commercial & Industrial",
    description:
      "24-hour mobilization. Minimal business disruption.",
    image: "[PLACEHOLDER: Commercial building]",
    linkText: "See Commercial Work →",
  },
  {
    slug: "residential",
    title: "Residential",
    description:
      "Your home. Your family. Our highest priority.",
    image: "[PLACEHOLDER: Residential property]",
    linkText: "See Residential Work →",
  },
];

export default function SectorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--gray-50)] to-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Sectors</p>
            <h1 className="headline-xl mb-6">
              Who We Work With
            </h1>
            <p className="body-lg">
              Government agencies, hospitals, schools, commercial buildings, and family homes. Same standard of professionalism across every project.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {sectors.map((sector) => (
              <Link
                key={sector.slug}
                href={`/sectors/${sector.slug}`}
                className="card group overflow-hidden border border-[var(--gray-100)]"
              >
                <div className="aspect-[16/10] placeholder-image">
                  <span className="p-4">{sector.image}</span>
                </div>
                <div className="p-8">
                  <h2 className="text-xl font-semibold mb-3 text-[var(--gray-900)] group-hover:text-[var(--primary-blue)] transition-colors">
                    {sector.title}
                  </h2>
                  <p className="text-[var(--gray-600)] mb-4">
                    {sector.description}
                  </p>
                  <span className="text-[var(--primary-blue)] font-medium group-hover:text-[var(--accent-blue)] transition-colors">
                    {sector.linkText}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--primary-blue)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline-md text-white mb-4">
              Tell Us About Your Project
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Free estimates. No obligation. We respond within one business day.
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
