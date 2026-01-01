"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import LanguageSelector from "./LanguageSelector";

const solutions = [
  {
    category: "Environmental Remediation",
    items: [
      { name: "Asbestos Abatement", href: "/solutions/asbestos-abatement" },
      { name: "Lead Paint Removal", href: "/solutions/lead-paint-removal" },
      { name: "Mold Remediation", href: "/solutions/mold-remediation" },
      {
        name: "Hazardous Material Management",
        href: "/solutions/hazardous-material-management",
      },
    ],
  },
  {
    category: "General Contracting",
    items: [
      {
        name: "Construction Management",
        href: "/solutions/construction-management",
      },
      {
        name: "Renovation & Restoration",
        href: "/solutions/renovation-restoration",
      },
      { name: "Selective Demolition", href: "/solutions/selective-demolition" },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-[var(--primary-blue)]" : "text-white"
            }`}>
              BOFA
            </span>
            <span className={`hidden sm:block ml-2 text-xs uppercase tracking-wider transition-colors duration-300 ${
              isScrolled ? "text-[var(--gray-400)]" : "text-white/70"
            }`}>
              Breath of Fresh Aire
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button className={`flex items-center gap-1 transition-colors font-medium ${
                isScrolled
                  ? "text-[var(--gray-600)] hover:text-[var(--primary-blue)]"
                  : "text-white/90 hover:text-white"
              }`}>
                Solutions
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isSolutionsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 pt-4 transition-all duration-200 ${
                  isSolutionsOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <div className="bg-white rounded-lg shadow-xl border border-[var(--gray-100)] p-6 min-w-[480px] grid grid-cols-2 gap-8">
                  {solutions.map((section) => (
                    <div key={section.category}>
                      <h3 className="eyebrow mb-3">{section.category}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="text-[var(--gray-600)] hover:text-[var(--primary-blue)] transition-colors"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="col-span-2 pt-4 border-t border-[var(--gray-100)]">
                    <Link
                      href="/solutions"
                      className="text-[var(--primary-blue)] hover:text-[var(--accent-blue)] font-medium"
                    >
                      View All Solutions →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/sectors"
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-[var(--gray-600)] hover:text-[var(--primary-blue)]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Sectors
            </Link>
            <Link
              href="/projects"
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-[var(--gray-600)] hover:text-[var(--primary-blue)]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-[var(--gray-600)] hover:text-[var(--primary-blue)]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              About
            </Link>
            <Link href="/contact" className={`btn ${isScrolled ? "btn-primary" : "btn-white"}`}>
              Contact Us
            </Link>
            <LanguageSelector isScrolled={isScrolled} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-colors ${isScrolled ? "text-[var(--gray-600)]" : "text-white"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-[var(--gray-100)] shadow-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible max-h-screen"
            : "opacity-0 invisible max-h-0"
        } overflow-hidden`}
      >
        <div className="container py-6">
          <div className="space-y-4">
            <div>
              <p className="eyebrow mb-2">Solutions</p>
              {solutions.map((section) => (
                <div key={section.category} className="mb-4">
                  <p className="text-sm font-medium text-[var(--gray-900)] mb-1">
                    {section.category}
                  </p>
                  <ul className="space-y-1 pl-3">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-[var(--gray-600)] hover:text-[var(--primary-blue)]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Link
              href="/sectors"
              className="block text-[var(--gray-600)] hover:text-[var(--primary-blue)] font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sectors
            </Link>
            <Link
              href="/projects"
              className="block text-[var(--gray-600)] hover:text-[var(--primary-blue)] font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="block text-[var(--gray-600)] hover:text-[var(--primary-blue)] font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="btn btn-primary w-full mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
