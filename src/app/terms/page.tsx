import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "BOFA terms of service - terms and conditions for using our website and services.",
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--gray-50)] to-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="headline-xl mb-6">Terms of Service</h1>
            <p className="body-lg text-[var(--gray-600)]">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl prose prose-lg">
            <h2 className="headline-md mb-4">Agreement to Terms</h2>
            <p className="body-md mb-6 text-[var(--gray-600)]">
              By accessing or using the BOFA (&quot;Breath of Fresh Aire&quot;) website,
              you agree to be bound by these Terms of Service. If you do not agree
              to these terms, please do not use our website.
            </p>

            <h2 className="headline-md mb-4 mt-10">Use of Website</h2>
            <p className="body-md mb-4 text-[var(--gray-600)]">
              You may use our website for lawful purposes only. You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[var(--gray-600)] space-y-2">
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any portion of the website</li>
              <li>Interfere with the proper working of the website</li>
              <li>Use any automated means to access the website without our permission</li>
              <li>Transmit any viruses, malware, or other harmful code</li>
            </ul>

            <h2 className="headline-md mb-4 mt-10">Services</h2>
            <p className="body-md mb-6 text-[var(--gray-600)]">
              BOFA provides environmental remediation and general contracting services.
              All services are subject to separate agreements and contracts.
              Information on this website is for general informational purposes only
              and does not constitute a binding offer or contract.
            </p>

            <h2 className="headline-md mb-4 mt-10">Intellectual Property</h2>
            <p className="body-md mb-6 text-[var(--gray-600)]">
              All content on this website, including text, graphics, logos, images,
              and software, is the property of BOFA or its content suppliers and is
              protected by copyright and other intellectual property laws. You may not
              reproduce, distribute, or create derivative works without our written permission.
            </p>

            <h2 className="headline-md mb-4 mt-10">Disclaimer of Warranties</h2>
            <p className="body-md mb-6 text-[var(--gray-600)]">
              This website is provided &quot;as is&quot; without warranties of any kind,
              either express or implied. BOFA does not warrant that the website will
              be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>

            <h2 className="headline-md mb-4 mt-10">Limitation of Liability</h2>
            <p className="body-md mb-6 text-[var(--gray-600)]">
              To the fullest extent permitted by law, BOFA shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages
              arising out of your use of or inability to use the website.
            </p>

            <h2 className="headline-md mb-4 mt-10">Third-Party Links</h2>
            <p className="body-md mb-6 text-[var(--gray-600)]">
              Our website may contain links to third-party websites. We are not
              responsible for the content, privacy policies, or practices of any
              third-party websites. Your use of such websites is at your own risk.
            </p>

            <h2 className="headline-md mb-4 mt-10">Indemnification</h2>
            <p className="body-md mb-6 text-[var(--gray-600)]">
              You agree to indemnify and hold harmless BOFA and its officers,
              directors, employees, and agents from any claims, damages, losses,
              or expenses arising from your use of the website or violation of these terms.
            </p>

            <h2 className="headline-md mb-4 mt-10">Governing Law</h2>
            <p className="body-md mb-6 text-[var(--gray-600)]">
              These Terms of Service shall be governed by and construed in accordance
              with the laws of the State of New York, without regard to its conflict
              of law provisions.
            </p>

            <h2 className="headline-md mb-4 mt-10">Changes to Terms</h2>
            <p className="body-md mb-6 text-[var(--gray-600)]">
              We reserve the right to modify these Terms of Service at any time.
              Changes will be effective immediately upon posting to the website.
              Your continued use of the website constitutes acceptance of the modified terms.
            </p>

            <h2 className="headline-md mb-4 mt-10">Contact Us</h2>
            <p className="body-md mb-6 text-[var(--gray-600)]">
              If you have questions about these Terms of Service, please contact us at:
            </p>
            <p className="body-md text-[var(--gray-600)]">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@bofaire.com" className="text-[var(--primary-blue)] hover:text-[var(--accent-blue)]">
                info@bofaire.com
              </a>
              <br />
              <strong>Phone:</strong> (800) 555-0123
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
