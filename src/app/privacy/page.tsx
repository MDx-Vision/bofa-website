import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "BOFA privacy policy - how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--gray-50)] to-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="headline-xl mb-6">Privacy Policy</h1>
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
            <h2 className="headline-md mb-4">Introduction</h2>
            <p className="body-md mb-6 text-[var(--gray-600)]">
              BOFA (&quot;Breath of Fresh Aire&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website or use our services.
            </p>

            <h2 className="headline-md mb-4 mt-10">Information We Collect</h2>
            <p className="body-md mb-4 text-[var(--gray-600)]">
              We may collect information about you in a variety of ways, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[var(--gray-600)] space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and company/organization name that you voluntarily provide when contacting us or requesting a proposal.</li>
              <li><strong>Project Information:</strong> Details about your project or inquiry that you share with us through our contact forms.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, and pages visited.</li>
            </ul>

            <h2 className="headline-md mb-4 mt-10">How We Use Your Information</h2>
            <p className="body-md mb-4 text-[var(--gray-600)]">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-[var(--gray-600)] space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Process and fulfill your service requests</li>
              <li>Send you project proposals and estimates</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="headline-md mb-4 mt-10">Information Sharing</h2>
            <p className="body-md mb-6 text-[var(--gray-600)]">
              We do not sell, trade, or otherwise transfer your personal information to
              third parties without your consent, except as necessary to provide our
              services or as required by law. We may share information with trusted
              partners who assist us in operating our website and conducting our business.
            </p>

            <h2 className="headline-md mb-4 mt-10">Data Security</h2>
            <p className="body-md mb-6 text-[var(--gray-600)]">
              We implement appropriate security measures to protect your personal
              information. However, no method of transmission over the Internet or
              electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="headline-md mb-4 mt-10">Your Rights</h2>
            <p className="body-md mb-6 text-[var(--gray-600)]">
              You have the right to access, correct, or delete your personal information.
              You may also opt out of receiving communications from us at any time.
              To exercise these rights, please contact us using the information below.
            </p>

            <h2 className="headline-md mb-4 mt-10">Cookies</h2>
            <p className="body-md mb-6 text-[var(--gray-600)]">
              Our website may use cookies to enhance your browsing experience.
              You can choose to disable cookies through your browser settings,
              though this may affect some functionality of our website.
            </p>

            <h2 className="headline-md mb-4 mt-10">Changes to This Policy</h2>
            <p className="body-md mb-6 text-[var(--gray-600)]">
              We may update this Privacy Policy from time to time. Any changes will
              be posted on this page with an updated revision date.
            </p>

            <h2 className="headline-md mb-4 mt-10">Contact Us</h2>
            <p className="body-md mb-6 text-[var(--gray-600)]">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="body-md text-[var(--gray-600)]">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@bofaire.com" className="text-[var(--primary-blue)] hover:text-[var(--accent-blue)]">
                info@bofaire.com
              </a>
              <br />
              <strong>Phone:</strong> (212) 202-0699
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
