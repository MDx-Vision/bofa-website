export const projectsData = [
  {
    slug: "municipal-building-remediation",
    title: "Municipal Building Comprehensive Remediation",
    sector: "Government & Municipal",
    location: "Metro City, NY",
    year: "2024",
    services: ["Asbestos Abatement", "Lead Paint Removal"],
    description:
      "Completed 2 weeks ahead of schedule. Zero safety incidents. Full clearance on first pass. Building remained operational throughout.",
    challenge:
      "A 1920s city hall — three floors plus basement — required complete asbestos and lead paint abatement. City offices couldn't shut down. Every phase had to work around active government operations with zero disruption to public services.",
    solution:
      "Phased approach: departments moved within the building as each section was cleared. Negative pressure containment on every work zone. Evening and weekend shifts maximized. Daily reporting to city facilities director.",
    results:
      "Completed two weeks ahead of the 16-week schedule. Zero safety incidents. 100% first-pass clearance on all air quality tests. No disruption to city services. Project came in $12K under budget.",
    featured: true,
  },
  {
    slug: "hospital-wing-renovation",
    title: "Hospital Wing Renovation Abatement",
    sector: "Healthcare",
    location: "Regional Medical Center, NJ",
    year: "2024",
    services: ["Asbestos Abatement", "Mold Remediation"],
    description:
      "Zero infection control incidents. Completed on schedule adjacent to active patient care areas.",
    challenge:
      "A 50-year-old hospital wing needed complete asbestos abatement before renovation could begin. The work happened 30 feet from active patient care areas with strict ICRA requirements and zero tolerance for containment failure.",
    solution:
      "ICRA-trained crew coordinated daily with infection control staff. Temporary walls, HEPA filtration, and negative pressure containment exceeded protocol requirements. Real-time air monitoring with hospital staff access to results.",
    results:
      "Zero infection control incidents. Completed on schedule, enabling the renovation contractor to start on time. Hospital administration commended the crew's professionalism and communication.",
    featured: true,
  },
  {
    slug: "school-district-summer-abatement",
    title: "School District Summer Abatement Program",
    sector: "Education",
    location: "Suburban School District, NY",
    year: "2023",
    services: ["Asbestos Abatement", "Lead Paint Removal"],
    description:
      "8 buildings. 10 weeks. Every school cleared and ready before September.",
    challenge:
      "Eight school buildings across the district needed asbestos and lead paint abatement — all completed during the ten-week summer break. Zero flexibility on the deadline: students return in September, period.",
    solution:
      "Multiple crews deployed simultaneously across all buildings. Detailed scheduling and resource allocation ensured parallel progress. Daily communication with district facilities staff. AHERA documentation for every school.",
    results:
      "All 8 buildings received clearance certificates before school year began. District completed planned renovations on the same summer timeline. Zero safety incidents across all sites.",
    featured: false,
  },
  {
    slug: "office-tower-mold-remediation",
    title: "Office Tower Mold Remediation",
    sector: "Commercial & Industrial",
    location: "Downtown Business District, NY",
    year: "2024",
    services: ["Mold Remediation", "Construction Management"],
    description:
      "24-hour emergency mobilization. Full building reoccupancy in 6 weeks. Documentation supported $380K insurance claim.",
    challenge:
      "Roof failure caused water intrusion across multiple floors of a 20-story office building. Mold in HVAC systems and behind wall assemblies. Building owner losing $45K/week in lost tenant revenue.",
    solution:
      "Mobilized within 24 hours. Containment systems isolated affected areas immediately while assessment continued. Phased remediation allowed partial building reoccupancy as each floor was cleared.",
    results:
      "Full building reoccupancy in 6 weeks. Air quality testing confirmed complete remediation. Our documentation package supported the building owner's $380K insurance claim — approved in full.",
    featured: false,
  },
  {
    slug: "historic-residence-restoration",
    title: "Historic Residence Lead Abatement",
    sector: "Residential",
    location: "Historic District, Brooklyn, NY",
    year: "2023",
    services: ["Lead Paint Removal", "Renovation & Restoration"],
    description:
      "Lead-safe certification achieved while preserving 130-year-old architectural details. Family moved in 3 weeks after clearance.",
    challenge:
      "An 1890s Victorian brownstone on the National Register needed lead abatement before a young family could move in. Original architectural details — trim, windows, decorative woodwork — had to be preserved.",
    solution:
      "Encapsulation and component replacement for high-exposure surfaces. Chemical stripping and HEPA vacuum methods for original woodwork. Close coordination with the historic preservation commission.",
    results:
      "Lead-safe certification achieved. Original architectural character preserved. Historic preservation commission approved all work. Family moved in three weeks after final clearance.",
    featured: false,
  },
  {
    slug: "industrial-facility-hazmat",
    title: "Industrial Facility Hazardous Material Removal",
    sector: "Commercial & Industrial",
    location: "Industrial Park, NJ",
    year: "2024",
    services: ["Hazardous Material Management", "Selective Demolition"],
    description:
      "Complete hazmat removal from decommissioned facility. Full chain-of-custody documentation. Site cleared for demolition.",
    challenge:
      "A decommissioned manufacturing facility contained PCBs, mercury, chemical residues, and asbestos-containing materials. Everything had to be properly characterized and disposed of before the building could be demolished.",
    solution:
      "Comprehensive hazardous material surveys followed by systematic removal of all materials. Each waste stream packaged, transported, and disposed of at licensed facilities. Full chain-of-custody documentation from removal through final disposal.",
    results:
      "All hazardous materials properly disposed of at licensed facilities. Site received clearance for conventional demolition. Complete documentation package supported the property owner's environmental compliance requirements.",
    featured: false,
  },
];

export type Project = (typeof projectsData)[0];
