import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about BOFA - Breath of Fresh Aire. Since 2012, we've delivered comprehensive environmental remediation and construction services nationwide.",
};

const values = [
  {
    title: "Safety",
    description:
      "Safety is non-negotiable. We maintain rigorous protocols that protect our workers, clients, and the communities where we work.",
  },
  {
    title: "Compliance",
    description:
      "We exceed regulatory requirements, maintaining certifications and documentation that give clients confidence in our work.",
  },
  {
    title: "Communication",
    description:
      "Clear, proactive communication keeps stakeholders informed and projects on track. No surprises, no excuses.",
  },
  {
    title: "Quality",
    description:
      "We take pride in our work. Every project receives the attention to detail and craftsmanship it deserves.",
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
    name: "State Licensing",
    description:
      "Licensed asbestos and lead abatement contractor in multiple states, with reciprocal licensing arrangements.",
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
    bio: "Placeholder bio for the company president describing their background and vision for BOFA.",
  },
  {
    name: "[Team Member Name]",
    title: "Director of Operations",
    bio: "Placeholder bio for the operations director describing their experience and role.",
  },
  {
    name: "[Team Member Name]",
    title: "Safety Director",
    bio: "Placeholder bio for the safety director describing their credentials and approach.",
  },
  {
    name: "[Team Member Name]",
    title: "Project Manager",
    bio: "Placeholder bio for a project manager describing their expertise and project experience.",
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
            <h1 className="headline-xl mb-6">Building Trust Since 2012</h1>
            <p className="body-lg">
              BOFA — Breath of Fresh Aire — was founded on a simple principle:
              deliver environmental and construction services with integrity,
              expertise, and unwavering commitment to safety.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="headline-lg mb-6">Our Story</h2>
              <div className="space-y-4 body-md">
                <p>
                  Since our founding in 2012, BOFA has grown from a regional
                  environmental contractor to a national provider of integrated
                  remediation and construction services. This growth reflects
                  our commitment to quality work and client relationships built
                  on trust.
                </p>
                <p>
                  We recognized early that clients need more than contractors —
                  they need partners who understand their challenges and deliver
                  solutions that work. This philosophy guides everything we do,
                  from initial consultations through project completion.
                </p>
                <p>
                  Today, we serve government agencies, healthcare systems,
                  educational institutions, commercial clients, and homeowners
                  across the country. Our team brings decades of combined
                  experience and a shared commitment to excellence.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] placeholder-image rounded-lg">
              <span>[PLACEHOLDER: Company/Team Image]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach / Values */}
      <section className="section bg-[var(--off-white)]">
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Our Approach</p>
            <h2 className="headline-lg mb-4">What Drives Us</h2>
            <p className="body-lg max-w-2xl mx-auto">
              Our values aren&apos;t just words on a wall — they&apos;re the
              principles that guide every decision, every project, every
              interaction.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-6 rounded-lg border border-[var(--gray-100)]"
              >
                <h3 className="text-lg font-semibold text-[var(--gray-900)] mb-3">
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
            <h2 className="headline-lg mb-4">Our Team</h2>
            <p className="body-lg max-w-2xl mx-auto">
              Experienced professionals who bring expertise, integrity, and
              commitment to every project.
            </p>
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
            <p className="eyebrow mb-3">Certifications & Compliance</p>
            <h2 className="headline-lg mb-4">Credentials You Can Trust</h2>
            <p className="body-md mb-10">
              We maintain comprehensive certifications and compliance programs
              that demonstrate our commitment to safe, professional work. These
              credentials are regularly renewed and verified.
            </p>

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
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] placeholder-image rounded-lg">
              <span>[PLACEHOLDER: Safety/Training Image]</span>
            </div>
            <div>
              <p className="eyebrow mb-3">Safety Commitment</p>
              <h2 className="headline-lg mb-6">Zero Compromises on Safety</h2>
              <div className="space-y-4 body-md">
                <p>
                  In environmental remediation and construction, safety isn&apos;t
                  just a priority — it&apos;s a fundamental requirement. We maintain
                  comprehensive safety programs that protect our workers,
                  clients, and communities.
                </p>
                <p>
                  Every team member receives ongoing training in safety
                  protocols, equipment operation, and emergency response. We
                  conduct regular safety audits and encourage reporting of
                  potential hazards without fear of reprisal.
                </p>
                <p>
                  Our safety record speaks to this commitment, with incident
                  rates well below industry averages. We believe that safe work
                  is good work, and we never compromise safety for speed or
                  cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--primary-blue)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline-md text-white mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Ready to experience the BOFA difference? We&apos;d love to learn about
              your project and show you how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-white">
                Contact Us
              </Link>
              <Link
                href="/projects"
                className="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary-blue)]"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
