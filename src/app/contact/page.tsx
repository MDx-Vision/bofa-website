"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ContactForm() {
  const searchParams = useSearchParams();
  const isRFP = searchParams.get("type") === "rfp";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    inquiryType: isRFP ? "rfp" : "general",
    projectDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Get from https://web3forms.com
          subject: `New ${formData.inquiryType === 'rfp' ? 'RFP Request' : 'Contact Form'} from ${formData.name}`,
          from_name: "BOFA Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          organization: formData.organization || "Not provided",
          inquiry_type: formData.inquiryType,
          message: formData.projectDetails,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send message. Please try again later.");
    }

    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg p-8 border border-[var(--gray-100)] text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[var(--gray-900)] mb-2">
          Thank You!
        </h3>
        <p className="text-[var(--gray-600)]">
          We&apos;ve received your message and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="form-label">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            className="form-input"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            className="form-input"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="form-input"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="organization" className="form-label">
            Organization / Company
          </label>
          <input
            type="text"
            id="organization"
            className="form-input"
            value={formData.organization}
            onChange={(e) =>
              setFormData({ ...formData, organization: e.target.value })
            }
          />
        </div>
      </div>

      <div>
        <label htmlFor="inquiryType" className="form-label">
          Inquiry Type
        </label>
        <select
          id="inquiryType"
          className="form-input"
          value={formData.inquiryType}
          onChange={(e) =>
            setFormData({ ...formData, inquiryType: e.target.value })
          }
        >
          <option value="general">General Inquiry</option>
          <option value="rfp">Request for Proposal</option>
          <option value="consultation">Project Consultation</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="projectDetails" className="form-label">
          Project Details
        </label>
        <textarea
          id="projectDetails"
          rows={5}
          className="form-input"
          placeholder="Please tell us about your project or inquiry..."
          value={formData.projectDetails}
          onChange={(e) =>
            setFormData({ ...formData, projectDetails: e.target.value })
          }
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--gray-50)] to-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Contact Us</p>
            <h1 className="headline-xl mb-6">Let&apos;s Start a Conversation</h1>
            <p className="body-lg">
              Whether you have a question about our services, need a proposal,
              or want to discuss a project, our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Suspense fallback={<div>Loading...</div>}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-[var(--off-white)] rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-[var(--gray-900)] mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-[var(--gray-400)] mb-1">Email</p>
                    <a
                      href="mailto:info@bofaire.com"
                      className="text-[var(--primary-blue)] hover:text-[var(--accent-blue)] transition-colors"
                    >
                      info@bofaire.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--gray-400)] mb-1">Phone</p>
                    <a
                      href="tel:+1-212-202-0699"
                      className="text-[var(--gray-900)] hover:text-[var(--primary-blue)] transition-colors"
                    >
                      (212) 202-0699
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--gray-400)] mb-1">
                      Service Area
                    </p>
                    <p className="text-[var(--gray-900)]">
                      Serving clients nationwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--primary-blue)]/5 border border-[var(--primary-blue)]/10 rounded-lg p-6">
                <h3 className="font-semibold text-[var(--gray-900)] mb-2">
                  Need a Proposal?
                </h3>
                <p className="text-sm text-[var(--gray-600)] mb-4">
                  Select &quot;Request for Proposal&quot; from the inquiry type and
                  include project details. We&apos;ll respond with a customized
                  proposal within 2-3 business days.
                </p>
                <p className="text-xs text-[var(--gray-400)]">
                  For urgent matters, please call our office directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section bg-[var(--off-white)]">
        <div className="container">
          <div className="aspect-[21/9] placeholder-image rounded-lg">
            <span>[PLACEHOLDER: Map or Location Image]</span>
          </div>
        </div>
      </section>
    </>
  );
}
