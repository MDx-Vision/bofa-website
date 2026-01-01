import type { Metadata } from "next";
import Link from "next/link";
import { sectorsData } from "@/lib/sectors-data";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "BOFA serves government, healthcare, education, commercial, industrial, and residential sectors with specialized environmental and construction services.",
};

const sectors = [
  {
    slug: "government-municipal",
    title: "Government & Municipal",
    description:
      "Federal, state, and local government facilities and infrastructure requiring regulatory compliance and transparent project delivery.",
    image: "[PLACEHOLDER: Government building]",
  },
  {
    slug: "healthcare",
    title: "Healthcare Facilities",
    description:
      "Hospitals, clinics, and medical facilities where infection control and patient safety are paramount.",
    image: "[PLACEHOLDER: Healthcare facility]",
  },
  {
    slug: "education",
    title: "Educational Institutions",
    description:
      "Schools, colleges, and universities requiring work scheduled around academic calendars and student safety.",
    image: "[PLACEHOLDER: School building]",
  },
  {
    slug: "commercial-industrial",
    title: "Commercial & Industrial",
    description:
      "Office buildings, manufacturing plants, and industrial facilities needing efficient, minimally disruptive services.",
    image: "[PLACEHOLDER: Commercial building]",
  },
  {
    slug: "residential",
    title: "Residential",
    description:
      "Single-family homes, apartments, and residential communities requiring respectful, professional service.",
    image: "[PLACEHOLDER: Residential property]",
  },
];

export default function SectorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--gray-50)] to-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Sectors We Serve</p>
            <h1 className="headline-xl mb-6">
              Expertise Across Industries
            </h1>
            <p className="body-lg">
              We bring specialized knowledge and proven capabilities to every
              sector we serve. Our experience spans public and private, large
              and small, from government facilities to residential homes.
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
                    Learn More →
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
              Not Sure Where to Start?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Our team can help you understand how our services apply to your
              specific situation and requirements.
            </p>
            <Link href="/contact" className="btn btn-white">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
