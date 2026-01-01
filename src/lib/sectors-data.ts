export const sectorsData = {
  "government-municipal": {
    title: "Government & Municipal",
    description:
      "Federal, state, and local government facilities and infrastructure projects.",
    heroDescription:
      "Trusted partner for government agencies requiring environmental remediation and construction services.",
    overview: [
      "Government facilities present unique challenges requiring contractors who understand regulatory environments, security protocols, and the accountability expected of public projects. BOFA brings experience working with federal, state, and local government agencies on projects of all sizes.",
      "We maintain the clearances, certifications, and insurance required for government work, and our project documentation meets the rigorous standards expected by public agencies. Our transparent approach to bidding, change orders, and project reporting aligns with government procurement requirements.",
      "From historic courthouses to modern municipal buildings, we have the experience to navigate the complexities of public sector projects while delivering quality results on schedule and within budget.",
    ],
    services: [
      "Asbestos Abatement",
      "Lead Paint Removal",
      "Mold Remediation",
      "Construction Management",
      "Renovation & Restoration",
    ],
    highlights: [
      "Experience with federal, state, and local procurement processes",
      "Security clearances for sensitive facilities",
      "Compliance with Davis-Bacon and prevailing wage requirements",
      "Comprehensive project documentation and reporting",
    ],
  },
  healthcare: {
    title: "Healthcare Facilities",
    description:
      "Hospitals, clinics, and medical facilities requiring sensitive handling and infection control.",
    heroDescription:
      "Specialized environmental and construction services for healthcare environments with strict infection control requirements.",
    overview: [
      "Healthcare facilities require contractors who understand the critical importance of infection control, patient safety, and continuous operations. Our team is trained in ICRA protocols and works seamlessly within active medical environments.",
      "We coordinate closely with facility management and infection control staff to plan and execute work that minimizes disruption to patient care areas. Our containment methods and work scheduling reflect the unique demands of healthcare settings.",
      "From major hospital renovations to clinic buildouts, we bring the specialized expertise needed to work safely and effectively in healthcare environments.",
    ],
    services: [
      "Asbestos Abatement",
      "Mold Remediation",
      "Lead Paint Removal",
      "Renovation & Restoration",
      "Construction Management",
    ],
    highlights: [
      "ICRA-trained personnel for infection control compliance",
      "Experience in active healthcare environments",
      "Flexible scheduling around patient care operations",
      "Negative pressure containment expertise",
    ],
  },
  education: {
    title: "Educational Institutions",
    description:
      "Schools, universities, and educational campus environments requiring safe, scheduled work.",
    heroDescription:
      "Environmental remediation and construction services tailored to the unique needs of educational facilities.",
    overview: [
      "Educational facilities require careful planning to execute construction and remediation work around academic schedules while maintaining safe environments for students and staff. We specialize in planning work during breaks and after hours to minimize disruption to learning.",
      "Our experience includes K-12 schools, community colleges, and universities across multiple states. We understand the regulatory requirements specific to educational facilities and work closely with administrators to ensure compliance and clear communication.",
      "From summer abatement projects to phased renovations during the academic year, we deliver results that meet the unique scheduling and safety requirements of educational institutions.",
    ],
    services: [
      "Asbestos Abatement",
      "Lead Paint Removal",
      "Mold Remediation",
      "Renovation & Restoration",
      "Construction Management",
    ],
    highlights: [
      "Project scheduling aligned with academic calendars",
      "Experience with AHERA regulations for schools",
      "Phased work approaches for occupied buildings",
      "Clear communication with administrators and stakeholders",
    ],
  },
  "commercial-industrial": {
    title: "Commercial & Industrial",
    description:
      "Office buildings, manufacturing facilities, and industrial properties.",
    heroDescription:
      "Comprehensive services for commercial and industrial properties with minimal operational disruption.",
    overview: [
      "Commercial and industrial properties require contractors who can work efficiently while minimizing impact on business operations. Whether it's a downtown office building or a manufacturing facility, we plan and execute work to keep disruption to a minimum.",
      "We understand that time is money in commercial settings. Our approach emphasizes clear scheduling, efficient execution, and transparent communication to keep projects moving without unexpected delays or scope changes.",
      "Our industrial experience includes manufacturing plants, warehouses, and processing facilities where we work safely around active operations and production schedules.",
    ],
    services: [
      "Asbestos Abatement",
      "Lead Paint Removal",
      "Mold Remediation",
      "Hazardous Material Management",
      "Selective Demolition",
      "Construction Management",
    ],
    highlights: [
      "Flexible scheduling for minimal business disruption",
      "Experience in active industrial environments",
      "Efficient project execution to reduce downtime",
      "Multi-shift and weekend work capabilities",
    ],
  },
  residential: {
    title: "Residential",
    description:
      "Single-family homes, multi-unit housing, and residential communities.",
    heroDescription:
      "Professional environmental remediation services for residential properties of all types.",
    overview: [
      "Residential projects require a different approach than commercial work. We understand that we're working in people's homes, and we treat each property with the respect and care it deserves. Our team communicates clearly, works cleanly, and respects the privacy of homeowners.",
      "From single-family homes to multi-unit apartment buildings, we provide the same professional service and quality results. Our residential services include pre-purchase inspections, abatement for renovation projects, and emergency response for mold and water damage situations.",
      "We work with homeowners, property managers, and real estate professionals to deliver remediation services that meet regulatory requirements while addressing the practical concerns of residential properties.",
    ],
    services: [
      "Asbestos Abatement",
      "Lead Paint Removal",
      "Mold Remediation",
      "Pre-Renovation Assessments",
    ],
    highlights: [
      "Respectful work practices in occupied homes",
      "Clear communication with homeowners",
      "Flexible scheduling including weekends",
      "Support for real estate transactions and renovations",
    ],
  },
};

export type SectorSlug = keyof typeof sectorsData;
