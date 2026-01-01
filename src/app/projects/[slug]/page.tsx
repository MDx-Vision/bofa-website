import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/lib/projects-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projectsData
    .filter((p) => p.slug !== project.slug && p.sector === project.sector)
    .slice(0, 2);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-[var(--gray-50)] to-white">
        <div className="container">
          <Link
            href="/projects"
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
            All Projects
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-sm bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] px-3 py-1 rounded-full">
                {project.sector}
              </span>
              <span className="text-sm text-[var(--gray-400)]">
                {project.location}
              </span>
              <span className="text-sm text-[var(--gray-400)]">
                {project.year}
              </span>
            </div>
            <h1 className="headline-xl mb-6">{project.title}</h1>
            <p className="body-lg">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16">
        <div className="container">
          <div className="aspect-[21/9] placeholder-image rounded-lg">
            <span>[PLACEHOLDER: {project.title} Hero Image]</span>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-xl font-semibold text-[var(--gray-900)] mb-4">
                  The Challenge
                </h2>
                <p className="body-md">{project.challenge}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--gray-900)] mb-4">
                  Our Solution
                </h2>
                <p className="body-md">{project.solution}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--gray-900)] mb-4">
                  Results
                </h2>
                <p className="body-md">{project.results}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[var(--off-white)] rounded-lg p-6 sticky top-28">
                <h3 className="font-semibold text-[var(--gray-900)] mb-4">
                  Project Details
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-[var(--gray-400)] uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-[var(--gray-900)]">{project.location}</p>
                  </div>

                  <div>
                    <p className="text-xs text-[var(--gray-400)] uppercase tracking-wider mb-1">
                      Sector
                    </p>
                    <p className="text-[var(--gray-900)]">{project.sector}</p>
                  </div>

                  <div>
                    <p className="text-xs text-[var(--gray-400)] uppercase tracking-wider mb-1">
                      Year
                    </p>
                    <p className="text-[var(--gray-900)]">{project.year}</p>
                  </div>

                  <div>
                    <p className="text-xs text-[var(--gray-400)] uppercase tracking-wider mb-2">
                      Services Provided
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="text-xs bg-white px-2 py-1 rounded border border-[var(--gray-200)] text-[var(--gray-600)]"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[var(--gray-200)]">
                  <Link href="/contact" className="btn btn-primary w-full">
                    Discuss Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Placeholder */}
      <section className="section bg-[var(--off-white)]">
        <div className="container">
          <h2 className="headline-md mb-8">Project Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] placeholder-image rounded-lg"
              >
                <span>[PLACEHOLDER: Gallery Image {i}]</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section bg-white">
          <div className="container">
            <h2 className="headline-md mb-8">Related Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.slug}
                  href={`/projects/${relatedProject.slug}`}
                  className="card group overflow-hidden border border-[var(--gray-100)]"
                >
                  <div className="aspect-[16/10] placeholder-image">
                    <span className="p-4">
                      [PLACEHOLDER: {relatedProject.title}]
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-[var(--gray-900)] group-hover:text-[var(--primary-blue)] transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-[var(--gray-600)] text-sm">
                      {relatedProject.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section bg-[var(--primary-blue)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline-md text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let&apos;s discuss how we can deliver the same level of quality and
              professionalism to your project.
            </p>
            <Link href="/contact" className="btn btn-white">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
