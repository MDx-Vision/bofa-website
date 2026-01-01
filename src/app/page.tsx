import Link from "next/link";

const capabilities = [
  {
    title: "Environmental Remediation",
    description:
      "Comprehensive hazardous material identification, containment, and removal services that protect health and ensure regulatory compliance across all project types.",
    href: "/solutions/asbestos-abatement",
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
      "Full-service construction management, renovation, and selective demolition capabilities delivered with precision, safety, and transparent communication.",
    href: "/solutions/construction-management",
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
    description: "Federal, state, and local government facilities and infrastructure",
    href: "/sectors/government-municipal",
  },
  {
    title: "Healthcare",
    description: "Hospitals, clinics, and medical facilities requiring sensitive handling",
    href: "/sectors/healthcare",
  },
  {
    title: "Education",
    description: "Schools, universities, and educational campus environments",
    href: "/sectors/education",
  },
  {
    title: "Commercial & Industrial",
    description: "Office buildings, manufacturing, and industrial facilities",
    href: "/sectors/commercial-industrial",
  },
  {
    title: "Residential",
    description: "Single-family homes, multi-unit housing, and residential communities",
    href: "/sectors/residential",
  },
];

const certifications = [
  { name: "EPA Certified", abbr: "EPA" },
  { name: "OSHA Compliant", abbr: "OSHA" },
  { name: "State Licensed", abbr: "LIC" },
  { name: "Fully Bonded & Insured", abbr: "B&I" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-[var(--navy)] via-[var(--primary-blue)] to-[var(--blueprint)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="headline-xl mb-6 text-white">
              Creating Safe Environments.
              <br />
              <span className="text-[var(--light-blue)]">
                Protecting What Matters.
              </span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              BOFA delivers comprehensive environmental remediation and
              construction services for government, commercial, and residential
              clients nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/solutions" className="btn btn-white">
                Explore Solutions
              </Link>
              <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary-blue)]">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">What We Do</p>
            <h2 className="headline-lg mb-4">Integrated Capabilities</h2>
            <p className="body-lg max-w-2xl mx-auto">
              We bring together environmental expertise and construction
              excellence to deliver complete solutions for complex projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {capabilities.map((capability) => (
              <Link
                key={capability.title}
                href={capability.href}
                className="card p-8 border border-[var(--gray-100)] group"
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
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="section bg-[var(--off-white)]">
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Sectors We Serve</p>
            <h2 className="headline-lg mb-4">Expertise Across Industries</h2>
            <p className="body-lg max-w-2xl mx-auto">
              From government facilities to residential properties, we bring
              specialized knowledge and proven capabilities to every sector we
              serve.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector) => (
              <Link
                key={sector.title}
                href={sector.href}
                className="card p-6 border border-[var(--gray-100)] group bg-white"
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
              View All Sectors
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="section bg-white">
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
                Complete asbestos abatement and lead paint removal for a
                historic city hall building, executed while maintaining partial
                building operations. Our team delivered the project ahead of
                schedule while exceeding all regulatory requirements.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-xs bg-[var(--gray-100)] px-3 py-1 rounded-full">
                  Government
                </span>
                <span className="text-xs bg-[var(--gray-100)] px-3 py-1 rounded-full">
                  Asbestos Abatement
                </span>
                <span className="text-xs bg-[var(--gray-100)] px-3 py-1 rounded-full">
                  Lead Removal
                </span>
              </div>
              <Link
                href="/projects"
                className="text-[var(--primary-blue)] font-medium hover:text-[var(--accent-blue)] transition-colors"
              >
                View Project Details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Credentials Section */}
      <section className="section bg-[var(--off-white)]">
        <div className="container">
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">Certifications & Compliance</p>
            <h2 className="headline-md mb-4">Trusted Credentials</h2>
            <p className="body-md max-w-2xl mx-auto">
              We maintain the highest standards of certification and compliance
              to protect our clients and deliver exceptional results.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {certifications.map((cert) => (
              <div
                key={cert.abbr}
                className="bg-white rounded-lg px-8 py-6 text-center border border-[var(--gray-100)] min-w-[140px]"
              >
                <div className="w-12 h-12 bg-[var(--primary-blue)]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-[var(--primary-blue)] font-bold text-sm">
                    {cert.abbr}
                  </span>
                </div>
                <p className="text-sm font-medium text-[var(--gray-900)]">
                  {cert.name}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[var(--gray-400)]">
            Licensed and operating in multiple states nationwide
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--primary-blue)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline-lg text-white mb-4">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Our team is here to help you navigate environmental challenges
              with confidence. Let&apos;s start a conversation about your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-white">
                Get in Touch
              </Link>
              <Link
                href="/contact?type=rfp"
                className="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary-blue)]"
              >
                Request a Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
