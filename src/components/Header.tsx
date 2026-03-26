"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

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
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${isScrolled ? "shadow-md" : "shadow-sm"}`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-20" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="BOFA - Breath of Fresh Aire"
              width={200}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button
                className="flex items-center gap-1 transition-colors font-medium text-[var(--gray-600)] hover:text-[var(--primary-blue)]"
                aria-expanded={isSolutionsOpen}
                aria-haspopup="true"
                aria-label="Services menu"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isSolutionsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
                role="menu"
                aria-label="Services submenu"
              >
                <div className="bg-white rounded-lg shadow-xl border border-[var(--gray-100)] p-6 min-w-[480px] grid grid-cols-2 gap-8">
                  {solutions.map((section) => (
                    <div key={section.category}>
                      <h3 className="eyebrow mb-3">{section.category}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item.name} role="menuitem">
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
                      View All Services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/sectors"
              className="transition-colors font-medium text-[var(--gray-600)] hover:text-[var(--primary-blue)]"
            >
              Sectors
            </Link>
            <Link
              href="/projects"
              className="transition-colors font-medium text-[var(--gray-600)] hover:text-[var(--primary-blue)]"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="transition-colors font-medium text-[var(--gray-600)] hover:text-[var(--primary-blue)]"
            >
              About
            </Link>
            <a
              href="tel:+1-212-202-0699"
              className="text-sm font-medium text-[var(--gray-600)] hover:text-[var(--primary-blue)] transition-colors"
              aria-label="Call BOFA at (212) 202-0699"
            >
              (212) 202-0699
            </a>
            <Link href="/contact" className="btn btn-primary">
              Get a Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6 text-[var(--gray-600)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-[var(--gray-100)] shadow-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible max-h-screen"
            : "opacity-0 invisible max-h-0"
        } overflow-hidden`}
        role="menu"
        aria-label="Mobile navigation"
      >
        <div className="container py-6">
          <div className="space-y-4">
            <div>
              <p className="eyebrow mb-2">Services</p>
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
            <a
              href="tel:+1-212-202-0699"
              className="block text-[var(--primary-blue)] font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Call (212) 202-0699
            </a>
            <Link
              href="/contact"
              className="btn btn-primary w-full mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
