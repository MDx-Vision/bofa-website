import Link from "next/link";

const footerLinks = {
  solutions: [
    { name: "Asbestos Abatement", href: "/solutions/asbestos-abatement" },
    { name: "Lead Paint Removal", href: "/solutions/lead-paint-removal" },
    { name: "Mold Remediation", href: "/solutions/mold-remediation" },
    { name: "Construction Management", href: "/solutions/construction-management" },
    { name: "Renovation & Restoration", href: "/solutions/renovation-restoration" },
  ],
  sectors: [
    { name: "Government & Municipal", href: "/sectors/government-municipal" },
    { name: "Healthcare Facilities", href: "/sectors/healthcare" },
    { name: "Educational Institutions", href: "/sectors/education" },
    { name: "Commercial & Industrial", href: "/sectors/commercial-industrial" },
    { name: "Residential", href: "/sectors/residential" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="container section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight">BOFA</span>
            </Link>
            <p className="text-[var(--gray-400)] text-sm mb-4">
              Breath of Fresh Aire
            </p>
            <p className="text-[var(--gray-400)] text-sm leading-relaxed">
              Minority-Owned. EPA-Certified. Serving NYC &amp; the Tri-State Area.
            </p>
            <p className="text-[var(--gray-400)] text-xs mt-2">
              MWBE Certified &bull; Licensed &amp; Insured &bull; NYC DOB Registered
            </p>
            <div className="mt-6">
              <a
                href="mailto:info@bofaire.com"
                className="text-[var(--light-blue)] hover:text-white transition-colors"
              >
                info@bofaire.com
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[var(--gray-400)] hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors Column */}
          <div>
            <h3 className="font-semibold mb-4">Sectors</h3>
            <ul className="space-y-2">
              {footerLinks.sectors.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[var(--gray-400)] hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[var(--gray-400)] hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div className="mt-8">
              <p className="text-sm font-medium mb-3">Certifications</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-white/10 px-2 py-1 rounded">
                  EPA Certified
                </span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded">
                  OSHA Compliant
                </span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded">
                  MWBE Certified
                </span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded">
                  NYC DOB
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--gray-400)] text-sm">
              © 2026 BOFA — Breath of Fresh Aire. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-[var(--gray-400)] hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[var(--gray-400)] hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
