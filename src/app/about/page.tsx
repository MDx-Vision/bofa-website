import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "BOFA — Breath of Fresh Aire. Minority-owned environmental remediation and general contracting firm serving NYC and the tri-state area since 2012.",
};

const values = [
  {
    title: "Safety",
    stat: "0",
    statLabel: "lost-time incidents",
    description:
      "Every crew member is 40-hour HAZWOPER certified. We don't cut corners — ever.",
  },
  {
    title: "Compliance",
    stat: "100%",
    statLabel: "first-pass clearance rate",
    description:
      "Full documentation on every project. Every clearance certified. Every report filed.",
  },
  {
    title: "Communication",
    stat: "24hr",
    statLabel: "response time",
    description:
      "You'll know what's happening on your project before you have to ask.",
  },
  {
    title: "Quality",
    stat: "500+",
    statLabel: "projects completed",
    description:
      "Every project documented. Every clearance certified. Every client protected.",
  },
];

const certifications = [
  {
    name: "EPA Certification",
    description:
      "Certified for asbestos abatement, lead-based paint activities, and hazardous waste operations under EPA regulations.",
  },
  {
    name: "OSHA Compliance",
    description:
      "Full compliance with OSHA standards for construction and environmental remediation, including 40-hour HAZWOPER training.",
  },
  {
    name: "MWBE Certification",
    description:
      "Certified Minority/Women-Owned Business Enterprise. Eligible for government set-asides and diversity contracting requirements.",
  },
  {
    name: "Bonding & Insurance",
    description:
      "Fully bonded and insured with coverage levels appropriate for government and commercial contracts.",
  },
];

const team = [
  {
    name: "[Team Member Name]",
    title: "President & CEO",
    bio: "Founded BOFA with a mission to bring Fortune 500 standards to environmental remediation — for every client, regardless of project size.",
  },
  {
    name: "[Team Member Name]",
    title: "Director of Operations",
    bio: "Oversees all field operations, crew scheduling, and project delivery. 15+ years in environmental remediation.",
  },
  {
    name: "[Team Member Name]",
    title: "Safety Director",
    bio: "Maintains BOFA's zero-incident safety record. OSHA-certified trainer with expertise in hazardous material handling.",
  },
  {
    name: "[Team Member Name]",
    title: "Project Manager",
    bio: "Manages client relationships from estimate through final clearance. Expert in government procurement and prevailing wage compliance.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--gray-50)] to-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">About BOFA</p>
            <h1 className="headline-xl mb-6 text-[var(--gray-900)]">Minority-Owned. 13 Years. 500+ Projects.</h1>
            <p className="body-lg">
              BOFA — Breath of Fresh Aire — is an MWBE-certified environmental remediation and general contracting firm serving New York City and the tri-state area. We bring the same standard of professionalism to a family home as we do to a city contract.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="headline-lg mb-6 text-[var(--gray-900)]">Our Story</h2>
              <div className="space-y-4 body-md">
                <p>
                  BOFA was founded in 2012 because too many families, landlords, and building owners were getting shortchanged by contractors who cut corners on hazardous material removal. We built this company to do it right — every time, for every client.
                </p>
                <p>
                  As a minority-owned business, we understand what it means to earn trust. We&apos;ve built ours project by project — from lead paint removal in Harlem apartments to full asbestos abatement in municipal buildings. Our MWBE certification isn&apos;t just a credential — it&apos;s a commitment to the communities we serve.
                </p>
                <p>
                  Today we serve government agencies, healthcare facilities, schools, commercial properties, homeowners, landlords, and real estate investors across the tri-state area. Whether it&apos;s a $5,000 mold job or a $500,000 government contract, the standard is the same.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] placeholder-image rounded-lg">
              <span>[PLACEHOLDER: Company/Team Image]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="section bg-[var(--off-white)]">
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Our Approach</p>
            <h2 className="headline-lg mb-4 text-[var(--gray-900)]">How We Operate</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-6 rounded-lg border border-[var(--gray-100)] text-center"
              >
                <div className="text-3xl font-bold text-[var(--primary-blue)] mb-1">
                  {value.stat}
                </div>
                <div className="text-xs uppercase tracking-wider text-[var(--gray-400)] mb-4">
                  {value.statLabel}
                </div>
                <h3 className="text-lg font-semibold text-[var(--gray-900)] mb-2">
                  {value.title}
                </h3>
                <p className="text-[var(--gray-600)] text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Leadership</p>
            <h2 className="headline-lg mb-4 text-[var(--gray-900)]">Our Team</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.title} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full placeholder-image">
                  <span className="text-xs">[Photo]</span>
                </div>
                <h3 className="font-semibold text-[var(--gray-900)]">
                  {member.name}
                </h3>
                <p className="text-sm text-[var(--primary-blue)] mb-2">
                  {member.title}
                </p>
                <p className="text-sm text-[var(--gray-600)]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-[var(--off-white)]">
        <div className="container">
          <div className="max-w-4xl">
            <p className="eyebrow mb-3">Certifications &amp; Compliance</p>
            <h2 className="headline-lg mb-4 text-[var(--gray-900)]">Licensed. Certified. Verified.</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="bg-white p-6 rounded-lg border border-[var(--gray-100)]"
                >
                  <h3 className="font-semibold text-[var(--gray-900)] mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-[var(--gray-600)] text-sm">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety Commitment */}
      <section className="section-dark py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow-light mb-3">Safety Record</p>
              <h2 className="headline-lg text-white mb-6">Zero Lost-Time Incidents</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  In environmental remediation, there are no shortcuts. Every crew member is 40-hour HAZWOPER certified. Every site gets a safety plan. Every project gets daily monitoring.
                </p>
                <p>
                  Our incident rate is zero — not because we&apos;re lucky, but because we invest in training, equipment, and protocols that prevent problems before they start. That&apos;s what protecting families, workers, and communities actually looks like.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] placeholder-image rounded-lg">
              <span className="text-white">[PLACEHOLDER: Safety/Training Image]</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--primary-blue)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline-md text-white mb-4">
              Ready to Work with BOFA?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Free estimates. No obligation. Licensed, insured, and minority-owned.
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
