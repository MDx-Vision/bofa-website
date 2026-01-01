import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Comprehensive environmental remediation and general contracting solutions. From asbestos abatement to construction management.",
};

const environmentalServices = [
  {
    title: "Asbestos Abatement",
    description:
      "Safe identification, containment, and removal of asbestos-containing materials in compliance with all federal and state regulations.",
    href: "/solutions/asbestos-abatement",
  },
  {
    title: "Lead Paint Removal",
    description:
      "Professional lead-based paint assessment and abatement services for residential, commercial, and industrial properties.",
    href: "/solutions/lead-paint-removal",
  },
  {
    title: "Mold Remediation",
    description:
      "Comprehensive mold assessment, containment, and remediation to restore healthy indoor environments.",
    href: "/solutions/mold-remediation",
  },
  {
    title: "Hazardous Material Management",
    description:
      "Complete hazardous waste handling, disposal, and site remediation services meeting all environmental standards.",
    href: "/solutions/hazardous-material-management",
  },
];

const contractingServices = [
  {
    title: "Construction Management",
    description:
      "Full-service construction oversight from pre-construction planning through project completion and closeout.",
    href: "/solutions/construction-management",
  },
  {
    title: "Renovation & Restoration",
    description:
      "Building renovation and restoration services that preserve architectural integrity while modernizing facilities.",
    href: "/solutions/renovation-restoration",
  },
  {
    title: "Selective Demolition",
    description:
      "Precision demolition services that remove targeted elements while protecting surrounding structures and systems.",
    href: "/solutions/selective-demolition",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--gray-50)] to-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Our Solutions</p>
            <h1 className="headline-xl mb-6">
              Comprehensive Environmental & Construction Solutions
            </h1>
            <p className="body-lg">
              We integrate environmental remediation expertise with construction
              capabilities to deliver complete solutions for complex projects.
              Our approach ensures compliance, safety, and quality at every
              phase.
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Remediation Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="mb-12">
            <p className="eyebrow mb-3">Environmental Remediation</p>
            <h2 className="headline-lg mb-4">Protecting Health & Safety</h2>
            <p className="body-md max-w-3xl">
              Our environmental remediation services address hazardous materials
              with precision and care. We maintain strict compliance with EPA,
              OSHA, and state regulations while minimizing disruption to your
              operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {environmentalServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="card p-8 border border-[var(--gray-100)] group"
              >
                <h3 className="text-xl font-semibold mb-3 text-[var(--gray-900)] group-hover:text-[var(--primary-blue)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[var(--gray-600)] mb-4">
                  {service.description}
                </p>
                <span className="text-[var(--primary-blue)] font-medium group-hover:text-[var(--accent-blue)] transition-colors">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* General Contracting Section */}
      <section className="section bg-[var(--off-white)]">
        <div className="container">
          <div className="mb-12">
            <p className="eyebrow mb-3">General Contracting</p>
            <h2 className="headline-lg mb-4">Building Excellence</h2>
            <p className="body-md max-w-3xl">
              Our construction services deliver quality results through careful
              planning, skilled execution, and transparent communication. We
              bring the same attention to detail that defines our environmental
              work to every construction project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contractingServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="card p-8 border border-[var(--gray-100)] group bg-white"
              >
                <h3 className="text-xl font-semibold mb-3 text-[var(--gray-900)] group-hover:text-[var(--primary-blue)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[var(--gray-600)] mb-4">
                  {service.description}
                </p>
                <span className="text-[var(--primary-blue)] font-medium group-hover:text-[var(--accent-blue)] transition-colors">
                  Learn More →
                </span>
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
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Every project is unique. Let&apos;s discuss how we can tailor our
              capabilities to meet your specific requirements.
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
