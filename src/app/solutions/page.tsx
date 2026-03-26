import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Environmental remediation and general contracting services. Asbestos abatement, lead removal, mold remediation, construction management, renovation, and demolition.",
};

const environmentalServices = [
  {
    title: "Asbestos Abatement",
    description:
      "Contained. Removed. Cleared. 100% first-pass clearance rate across 200+ projects.",
    href: "/solutions/asbestos-abatement",
    linkText: "Learn About Asbestos Services →",
  },
  {
    title: "Lead Paint Removal",
    description:
      "EPA RRP-certified. Protecting families and tenants from lead exposure in pre-1978 buildings.",
    href: "/solutions/lead-paint-removal",
    linkText: "Learn About Lead Removal →",
  },
  {
    title: "Mold Remediation",
    description:
      "Find it. Contain it. Remove it. Fix the moisture source so it doesn't come back.",
    href: "/solutions/mold-remediation",
    linkText: "Learn About Mold Services →",
  },
  {
    title: "Hazardous Material Management",
    description:
      "Identification through disposal. Full chain-of-custody. Every regulation met.",
    href: "/solutions/hazardous-material-management",
    linkText: "Learn About Hazmat Services →",
  },
];

const contractingServices = [
  {
    title: "Construction Management",
    description:
      "Planning through punch list. On time. On budget. Fully documented.",
    href: "/solutions/construction-management",
    linkText: "Learn About Construction →",
  },
  {
    title: "Renovation & Restoration",
    description:
      "Modernize the building. Preserve the character. Handle the hazmat if it's there.",
    href: "/solutions/renovation-restoration",
    linkText: "Learn About Renovation →",
  },
  {
    title: "Selective Demolition",
    description:
      "Surgical precision. Remove what needs to go. Protect everything else.",
    href: "/solutions/selective-demolition",
    linkText: "Learn About Demolition →",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--gray-50)] to-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Our Services</p>
            <h1 className="headline-xl mb-6">
              Environmental Remediation &amp; General Contracting
            </h1>
            <p className="body-lg">
              Two divisions. One standard. From hazardous material removal to full-scale construction — licensed, insured, and minority-owned.
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Remediation Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="mb-12">
            <p className="eyebrow mb-3">Environmental Remediation</p>
            <h2 className="headline-lg mb-4">Hazardous Materials. Handled.</h2>
            <p className="body-md max-w-3xl">
              Asbestos, lead, mold, and hazardous waste — identified, contained, removed, and documented. EPA-certified crews with zero safety incidents.
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
                  {service.linkText}
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
            <h2 className="headline-lg mb-4">Build It Right</h2>
            <p className="body-md max-w-3xl">
              Construction management, renovation, and demolition — with integrated environmental capability when you need it. One contractor. One contract. No coordination headaches.
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
                  {service.linkText}
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
              Not Sure What You Need? Call Us.
            </h2>
            <p className="text-lg text-white/80 mb-8">
              We&apos;ll walk you through it. Free estimates. No obligation.
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
