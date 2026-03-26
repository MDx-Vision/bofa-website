export const sectorsData = {
  "government-municipal": {
    title: "Government & Municipal",
    description:
      "MWBE-certified. Davis-Bacon compliant. We know the bid process.",
    heroDescription:
      "BOFA is an MWBE-certified contractor experienced in government procurement, prevailing wage compliance, and public accountability standards.",
    overview: [
      "Government projects require contractors who understand procurement, accountability, and compliance — not just construction. As an MWBE-certified firm, we bring the diversity credentials that agencies need, backed by the experience to deliver on complex public projects.",
      "We maintain the clearances, certifications, and insurance levels required for government work. Our documentation meets the rigorous standards expected by public agencies. Transparent bidding, detailed reporting, and Davis-Bacon compliance are standard — not add-ons.",
      "From historic courthouses to modern municipal buildings, we navigate the complexities of public sector projects while delivering on time and within budget.",
    ],
    services: [
      "Asbestos Abatement",
      "Lead Paint Removal",
      "Mold Remediation",
      "Construction Management",
      "Renovation & Restoration",
    ],
    highlights: [
      "MWBE-certified for government set-aside contracts",
      "Davis-Bacon and prevailing wage compliant",
      "Experienced with federal, state, and local procurement",
      "Comprehensive project documentation and reporting",
    ],
  },
  healthcare: {
    title: "Healthcare Facilities",
    description:
      "ICRA-trained crews. Zero disruption to patient care.",
    heroDescription:
      "Environmental remediation and construction in active medical environments. ICRA-trained crews working alongside patient care operations.",
    overview: [
      "Healthcare facilities can't shut down for construction. Our ICRA-trained crews work within active medical environments — coordinating with infection control staff, maintaining containment, and scheduling work around patient care operations.",
      "We've handled asbestos abatement adjacent to operating rooms, mold remediation in patient floors, and full wing renovations in hospitals that never stopped treating patients. Zero infection control incidents across all healthcare projects.",
      "From major hospital renovations to clinic buildouts, we bring the specialized protocols that healthcare environments demand.",
    ],
    services: [
      "Asbestos Abatement",
      "Mold Remediation",
      "Lead Paint Removal",
      "Renovation & Restoration",
      "Construction Management",
    ],
    highlights: [
      "ICRA-trained personnel — zero infection control incidents",
      "Experience in active patient care environments",
      "Flexible scheduling around hospital operations",
      "Negative pressure containment expertise",
    ],
  },
  education: {
    title: "Educational Institutions",
    description:
      "Summer break schedules. Every school ready for September.",
    heroDescription:
      "Environmental remediation and construction planned around academic schedules. Every school cleared and ready before students return.",
    overview: [
      "Schools can't have construction crews in the hallway during the school year. We plan everything around academic calendars — major work during summer break, smaller projects during winter and spring recesses, emergency response any time.",
      "We've cleared 8 buildings in a single summer for one district. Multiple crews, simultaneous projects, daily reporting to facilities directors. AHERA-compliant documentation for every school.",
      "From K-12 to universities, we understand the regulatory requirements, the scheduling constraints, and the accountability that school administrators need.",
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
      "AHERA-compliant documentation for schools",
      "Multi-building simultaneous project capability",
      "Clear communication with administrators and parents",
    ],
  },
  "commercial-industrial": {
    title: "Commercial & Industrial",
    description:
      "24-hour mobilization. Minimal business disruption.",
    heroDescription:
      "Environmental remediation and construction for commercial and industrial properties — executed with minimal disruption to your business operations.",
    overview: [
      "When a 20-story office building has a mold problem on three floors, you need a contractor who can mobilize in 24 hours and get tenants back in weeks, not months. That's what we do.",
      "We work evenings, weekends, and multi-shift schedules to keep your business running. Whether it's a downtown office tower, a warehouse, or a manufacturing facility — we plan around your operations, not the other way around.",
      "Our commercial clients include property managers, building owners, and real estate investors who need fast, documented remediation to protect their tenants and their investment.",
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
      "24-hour emergency mobilization capability",
      "Multi-shift and weekend work schedules",
      "Minimal disruption to business operations",
      "Documentation supporting insurance claims",
    ],
  },
  residential: {
    title: "Residential",
    description:
      "Your home. Your family. Our highest priority.",
    heroDescription:
      "Environmental remediation for homeowners, landlords, and real estate investors. Same professional standard we bring to government contracts — applied to your home.",
    overview: [
      "When there's asbestos in your basement, lead paint in your kid's bedroom, or mold in your walls — you need someone you can trust in your home. We treat every residential project with the same professionalism and care we bring to our government contracts.",
      "For landlords: we handle NYC Local Law 1 compliance, provide the documentation you need, and work around your tenants' schedules. For investors and flippers: fast turnaround, certified clearance letters, and the documentation you need to close.",
      "We communicate clearly, work cleanly, and respect your property. Free estimates. No obligation. Licensed and insured.",
    ],
    services: [
      "Asbestos Abatement",
      "Lead Paint Removal",
      "Mold Remediation",
      "Pre-Renovation Assessments",
    ],
    highlights: [
      "Same professional standard as government contracts",
      "NYC Local Law 1 compliance for landlords",
      "Fast turnaround and clearance letters for investors",
      "Respectful work practices in occupied homes",
    ],
  },
};

export type SectorSlug = keyof typeof sectorsData;
