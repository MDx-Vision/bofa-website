"use client";

import { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/lib/projects-data";

const sectors = [
  "All",
  "Government & Municipal",
  "Healthcare",
  "Education",
  "Commercial & Industrial",
  "Residential",
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.sector === activeFilter);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--gray-50)] to-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Results</p>
            <h1 className="headline-xl mb-6 text-[var(--gray-900)]">Our Track Record</h1>
            <p className="body-lg">
              500+ projects completed. Zero safety incidents. These are some of the projects that show what BOFA delivers — on time, on budget, fully documented.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Grid Section */}
      <section className="section bg-white">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveFilter(sector)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === sector
                    ? "bg-[var(--primary-blue)] text-white"
                    : "bg-[var(--gray-100)] text-[var(--gray-600)] hover:bg-[var(--gray-200)]"
                }`}
              >
                {sector}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="card group overflow-hidden border border-[var(--gray-100)]"
              >
                <div className="aspect-[4/3] placeholder-image">
                  <span className="p-4">[PLACEHOLDER: {project.title}]</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] px-2 py-1 rounded">
                      {project.sector}
                    </span>
                    <span className="text-xs text-[var(--gray-400)]">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[var(--gray-900)] group-hover:text-[var(--primary-blue)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--gray-600)] text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.slice(0, 2).map((service) => (
                      <span
                        key={service}
                        className="text-xs text-[var(--gray-400)]"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[var(--gray-400)]">
                No projects found for this filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--primary-blue)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline-md text-white mb-4">
              Start Your Project
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
