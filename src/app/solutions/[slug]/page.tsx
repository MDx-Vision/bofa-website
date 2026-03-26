import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { solutionsData, SolutionSlug } from "@/lib/solutions-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionsData[slug as SolutionSlug];

  if (!solution) {
    return {
      title: "Solution Not Found",
    };
  }

  return {
    title: solution.title,
    description: solution.description,
  };
}

export function generateStaticParams() {
  return Object.keys(solutionsData).map((slug) => ({
    slug,
  }));
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = solutionsData[slug as SolutionSlug];

  if (!solution) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--gray-50)] to-white">
        <div className="container">
          <div className="max-w-3xl">
            <Link
              href="/solutions"
              className="inline-flex items-center text-sm text-[var(--gray-600)] hover:text-[var(--primary-blue)] mb-6 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              All Services
            </Link>
            <h1 className="headline-xl mb-6 text-[var(--gray-900)]">{solution.title}</h1>
            <p className="body-lg">{solution.heroDescription}</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Overview</p>
            <div className="space-y-6">
              {solution.overview.map((paragraph, index) => (
                <p key={index} className="body-md">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section bg-[var(--off-white)]">
        <div className="container">
          <div className="max-w-4xl">
            <p className="eyebrow mb-3">{solution.approach.title}</p>
            <p className="body-md mb-10">{solution.approach.description}</p>

            <div className="grid md:grid-cols-2 gap-6">
              {solution.approach.steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border border-[var(--gray-100)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[var(--primary-blue)]/10 rounded-full flex items-center justify-center text-[var(--primary-blue)] font-semibold text-sm">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-[var(--gray-900)] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[var(--gray-600)] text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <div className="bg-[var(--primary-blue)]/5 border border-[var(--primary-blue)]/10 rounded-lg p-8">
              <h2 className="text-xl font-semibold text-[var(--gray-900)] mb-3">
                {solution.compliance.title}
              </h2>
              <p className="text-[var(--gray-600)]">
                {solution.compliance.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="section bg-[var(--off-white)]">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Related Sectors</p>
            <h2 className="headline-md mb-6 text-[var(--gray-900)]">Where We Apply This Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {solution.sectors.map((sector) => (
                <span
                  key={sector}
                  className="bg-white px-4 py-2 rounded-full text-sm text-[var(--gray-600)] border border-[var(--gray-100)]"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--primary-blue)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline-md text-white mb-4">
              Need {solution.title}?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Free estimates. Licensed and insured. We respond within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-white">
                Get a Free Estimate
              </Link>
              <Link href="/projects" className="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary-blue)]">
                See Our Track Record
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
