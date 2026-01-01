export const projectsData = [
  {
    slug: "municipal-building-remediation",
    title: "Municipal Building Comprehensive Remediation",
    sector: "Government & Municipal",
    location: "Metro City, State",
    year: "2024",
    services: ["Asbestos Abatement", "Lead Paint Removal"],
    description:
      "Complete environmental remediation of a historic city hall building while maintaining partial building operations.",
    challenge:
      "The 1920s-era city hall building required comprehensive asbestos and lead paint abatement throughout its three floors and basement. The challenge was executing this work while city offices continued to operate, requiring careful phasing and stringent containment protocols.",
    solution:
      "We developed a phased approach that moved departments to temporary locations within the building as work progressed. Negative pressure containment systems ensured no cross-contamination to occupied areas. Work was scheduled during evenings and weekends when possible to minimize disruption.",
    results:
      "The project was completed two weeks ahead of schedule with zero safety incidents and no service disruptions to city residents. All clearance testing passed on first attempt, and the building now provides a safe environment for employees and the public.",
    featured: true,
  },
  {
    slug: "hospital-wing-renovation",
    title: "Hospital Wing Renovation Abatement",
    sector: "Healthcare",
    location: "Regional Medical Center",
    year: "2024",
    services: ["Asbestos Abatement", "Mold Remediation"],
    description:
      "Pre-renovation environmental abatement for a major hospital wing expansion project.",
    challenge:
      "A 50-year-old hospital wing required complete asbestos abatement before renovation could begin. The work needed to proceed adjacent to active patient care areas with strict ICRA requirements.",
    solution:
      "Our ICRA-trained team worked closely with infection control staff to develop containment strategies that exceeded protocol requirements. We installed temporary walls, HEPA filtration systems, and negative pressure containment to protect patient areas.",
    results:
      "Zero infection control incidents throughout the project. Abatement was completed on schedule, allowing the renovation contractor to begin work as planned. The hospital commended our team for professionalism and communication.",
    featured: true,
  },
  {
    slug: "school-district-summer-abatement",
    title: "School District Summer Abatement Program",
    sector: "Education",
    location: "Suburban School District",
    year: "2023",
    services: ["Asbestos Abatement", "Lead Paint Removal"],
    description:
      "Multi-building summer abatement program across an entire school district.",
    challenge:
      "Eight school buildings required various levels of asbestos and lead paint abatement, all to be completed during the ten-week summer break before students returned.",
    solution:
      "We mobilized multiple crews working simultaneously across the district. Detailed scheduling and resource allocation ensured all buildings progressed on track. Daily communication with district facilities staff kept everyone informed.",
    results:
      "All eight buildings received clearance certificates before the school year began. The district was able to complete planned renovations and improvements over the same summer period.",
    featured: false,
  },
  {
    slug: "office-tower-mold-remediation",
    title: "Office Tower Mold Remediation",
    sector: "Commercial & Industrial",
    location: "Downtown Business District",
    year: "2024",
    services: ["Mold Remediation", "Construction Management"],
    description:
      "Emergency mold remediation following water intrusion in a multi-tenant office building.",
    challenge:
      "A roof failure resulted in significant water intrusion affecting multiple floors of a 20-story office building. Mold growth was identified in HVAC systems and behind wall assemblies, requiring immediate response.",
    solution:
      "We mobilized within 24 hours for emergency response. Containment systems were installed to isolate affected areas while assessment continued. A phased remediation approach allowed partial building reoccupancy as areas were cleared.",
    results:
      "Full building reoccupancy was achieved within six weeks. Air quality testing confirmed complete remediation, and our documentation supported the building owner's insurance claim.",
    featured: false,
  },
  {
    slug: "historic-residence-restoration",
    title: "Historic Residence Lead Abatement",
    sector: "Residential",
    location: "Historic District",
    year: "2023",
    services: ["Lead Paint Removal", "Renovation & Restoration"],
    description:
      "Careful lead abatement in a historically significant residential property.",
    challenge:
      "A 1890s Victorian home listed on the National Register required lead abatement before family occupancy. Original architectural details needed preservation while eliminating lead hazards.",
    solution:
      "We used encapsulation and component replacement strategies to address lead hazards while preserving historic trim, windows, and decorative elements. Chemical stripping and HEPA vacuum methods minimized damage to original woodwork.",
    results:
      "The home achieved lead-safe certification while maintaining its historic character. The homeowners and historic preservation commission were satisfied with the balance of safety and preservation.",
    featured: false,
  },
  {
    slug: "industrial-facility-hazmat",
    title: "Industrial Facility Hazardous Material Removal",
    sector: "Commercial & Industrial",
    location: "Industrial Park",
    year: "2024",
    services: ["Hazardous Material Management", "Selective Demolition"],
    description:
      "Comprehensive hazardous material removal prior to facility decommissioning.",
    challenge:
      "A decommissioned manufacturing facility contained various hazardous materials including PCBs, mercury, and chemical residues requiring proper characterization and disposal before demolition.",
    solution:
      "Our team conducted thorough hazardous material surveys, developed disposal plans for each waste stream, and systematically removed all hazardous materials. Chain of custody documentation tracked materials from removal through final disposal.",
    results:
      "All hazardous materials were properly disposed of at licensed facilities. The site received clearance for conventional demolition, and complete documentation supported the property owner's due diligence requirements.",
    featured: false,
  },
];

export type Project = (typeof projectsData)[0];
