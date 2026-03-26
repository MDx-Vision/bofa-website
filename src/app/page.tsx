import Link from "next/link";

const capabilities = [
  {
    title: "Environmental Remediation",
    description:
      "Asbestos. Lead. Mold. Hazardous materials. Identified, contained, removed, and cleared — with full documentation for every project.",
    href: "/solutions/asbestos-abatement",
    linkText: "See Remediation Services →",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "General Contracting",
    description:
      "Construction management, renovation, and selective demolition. On time. On budget. Fully documented from demo through punch list.",
    href: "/solutions/construction-management",
    linkText: "See Construction Services →",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
];

const sectors = [
  {
    title: "Government & Municipal",
    description: "MWBE-certified. Davis-Bacon compliant. We speak procurement.",
    href: "/sectors/government-municipal",
  },
  {
    title: "Healthcare",
    description: "ICRA-trained crews. Zero disruption to patient care.",
    href: "/sectors/healthcare",
  },
  {
    title: "Education",
    description: "Summer break schedules. Every school ready for September.",
    href: "/sectors/education",
  },
  {
    title: "Commercial & Industrial",
    description: "24-hour mobilization. Minimal business disruption.",
    href: "/sectors/commercial-industrial",
  },
  {
    title: "Residential",
    description: "Your home. Your family. Our highest priority.",
    href: "/sectors/residential",
  },
];

const certifications = [
  { name: "EPA Certified", abbr: "EPA" },
  { name: "OSHA Compliant", abbr: "OSHA" },
  { name: "MWBE Certified", abbr: "MWBE" },
  { name: "NYC DOB Registered", abbr: "DOB" },
  { name: "Fully Bonded & Insured", abbr: "B&I" },
];

const audiences = [
  {
    title: "Government Agencies",
    description: "MWBE-certified. Prevailing wage compliant. We know the bid process.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14v4M12 14v4M16 14v4" />
      </svg>
    ),
  },
  {
    title: "Homeowners & Families",
    description: "Your family's safety is the job. We handle the hazard, you keep the peace of mind.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Landlords & Property Managers",
    description: "Compliance documentation. On-time completion. Protect your investment.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Real Estate & Investors",
    description: "Fast turnaround. Certified clearance letters. Close on schedule.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-[var(--dark-navy)] via-[var(--navy)] to-[var(--blueprint)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="eyebrow-light mb-4">Minority-Owned &bull; EPA-Certified &bull; NYC &amp; Tri-State</p>
            <h1 className="headline-xl mb-6 text-white">
              Asbestos. Lead. Mold.
              <br />
              <span className="text-[var(--light-blue)]">
                Handled.
              </span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              Licensed, insured, and minority-owned. From city buildings to family homes — we make hazardous environments safe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/solutions" className="btn btn-white">
                See Our Services
              </Link>
              <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary-blue)]">
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Metrics Bar */}
      <section className="section-dark py-16">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div>
              <div className="stat-number text-[var(--metric-green)]">0</div>
              <div className="stat-label">Safety Incidents</div>
            </div>
            <div>
              <div className="stat-number text-[var(--metric-gold)]">MWBE</div>
              <div className="stat-label">Certified Minority-Owned</div>
            </div>
            <div>
              <div className="stat-number">13+</div>
              <div className="stat-label">Years in Business</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Who We Serve</p>
            <h2 className="headline-lg mb-4">Built for Your Project</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="card p-6 border border-[var(--gray-100)]"
              >
                <div className="text-[var(--primary-blue)] mb-4">
                  {audience.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[var(--gray-900)]">
                  {audience.title}
                </h3>
                <p className="text-[var(--gray-600)] text-sm">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section bg-[var(--off-white)]">
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Capabilities</p>
            <h2 className="headline-lg mb-4">Two Divisions. One Standard.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {capabilities.map((capability) => (
              <Link
                key={capability.title}
                href={capability.href}
                className="card p-8 border border-[var(--gray-100)] group bg-white"
              >
                <div className="text-[var(--primary-blue)] mb-4 group-hover:text-[var(--accent-blue)] transition-colors">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--gray-900)]">
                  {capability.title}
                </h3>
                <p className="text-[var(--gray-600)] mb-4">
                  {capability.description}
                </p>
                <span className="text-[var(--primary-blue)] font-medium group-hover:text-[var(--accent-blue)] transition-colors">
                  {capability.linkText}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Sectors</p>
            <h2 className="headline-lg mb-4">Where We Operate</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector) => (
              <Link
                key={sector.title}
                href={sector.href}
                className="card p-6 border border-[var(--gray-100)] group"
              >
                <h3 className="text-lg font-semibold mb-2 text-[var(--gray-900)] group-hover:text-[var(--primary-blue)] transition-colors">
                  {sector.title}
                </h3>
                <p className="text-[var(--gray-600)] text-sm">
                  {sector.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/sectors" className="btn btn-secondary">
              See Sector Expertise
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="section bg-[var(--off-white)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video placeholder-image rounded-lg">
              <span>[PLACEHOLDER: Featured Project Image]</span>
            </div>
            <div>
              <p className="eyebrow mb-3">Featured Project</p>
              <h2 className="headline-md mb-4">
                Municipal Building Comprehensive Remediation
              </h2>
              <p className="body-md mb-6">
                Full asbestos abatement and lead paint removal in a historic city hall — completed 2 weeks ahead of schedule with zero safety incidents. Building remained partially operational throughout.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-xs bg-[var(--gray-200)] px-3 py-1 rounded-full font-medium">
                  Government
                </span>
                <span className="text-xs bg-[var(--gray-200)] px-3 py-1 rounded-full font-medium">
                  Asbestos
                </span>
                <span className="text-xs bg-[var(--gray-200)] px-3 py-1 rounded-full font-medium">
                  Lead Removal
                </span>
              </div>
              <Link
                href="/projects"
                className="text-[var(--primary-blue)] font-medium hover:text-[var(--accent-blue)] transition-colors"
              >
                See the Full Case Study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Credentials Section */}
      <section className="section-dark py-16">
        <div className="container">
          <div className="text-center mb-10">
            <p className="eyebrow-light mb-3">Credentials</p>
            <h2 className="headline-md text-white mb-4">Licensed. Certified. Minority-Owned.</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <span
                key={cert.abbr}
                className="trust-badge"
              >
                <span className="font-bold">{cert.abbr}</span>
                <span className="text-white/60">|</span>
                <span>{cert.name}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--primary-blue)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline-lg text-white mb-4">
              Need Hazardous Material Removed?
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
