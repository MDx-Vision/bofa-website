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
            <p className="eyebrow mb-3">Our Work</p>
            <h1 className="headline-xl mb-6">Project Portfolio</h1>
            <p className="body-lg">
              Explore our project portfolio showcasing environmental remediation
              and construction work across multiple sectors. Each project
              demonstrates our commitment to safety, quality, and client
              satisfaction.
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
              Have a Project in Mind?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let&apos;s discuss how we can bring the same level of expertise and
              professionalism to your project.
            </p>
            <Link href="/contact" className="btn btn-white">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
