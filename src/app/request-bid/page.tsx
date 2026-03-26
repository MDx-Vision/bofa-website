"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

// ─── Types ──────────────────────────────────────────────────────────────────

interface BidRequestData {
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  preferredContact: string;

  address: string;
  city: string;
  state: string;
  zip: string;
  propertyType: string;
  buildingType: string;
  yearBuilt: string;
  squareFootage: string;
  occupancyStatus: string;

  serviceCategory: string[];
  remediationServices: string[];
  contractingServices: string[];

  description: string;
  projectReason: string;
  hazardousMaterials: string[];
  siteAssessment: string;
  previousRemediation: string;
  urgency: string;
  budgetRange: string;
  desiredStartDate: string;

  howDidYouHear: string;
  additionalNotes: string;
}

const INITIAL: BidRequestData = {
  name: "", email: "", phone: "", company: "", role: "", preferredContact: "email",
  address: "", city: "", state: "NY", zip: "", propertyType: "", buildingType: "", yearBuilt: "", squareFootage: "", occupancyStatus: "",
  serviceCategory: [], remediationServices: [], contractingServices: [],
  description: "", projectReason: "", hazardousMaterials: [], siteAssessment: "", previousRemediation: "", urgency: "", budgetRange: "", desiredStartDate: "",
  howDidYouHear: "", additionalNotes: "",
};

const STEPS = ["Contact Info", "Site Details", "Services", "Project Details", "Review & Submit"];

const PROPERTY_TYPES = ["Residential", "Commercial", "Industrial", "Institutional", "Government", "Mixed-Use"];
const BUILDING_TYPES = ["Single-Family Home", "Multi-Family / Apartment", "Office Building", "Warehouse / Storage", "School / University", "Hospital / Healthcare", "Retail / Shopping", "Manufacturing / Factory", "Hotel / Hospitality", "Religious Facility", "Other"];
const REMEDIATION_SERVICES = ["Asbestos Abatement", "Lead Paint Removal", "Mold Remediation", "Soil Remediation", "Underground Storage Tank (UST) Removal", "Hazardous Waste Removal", "PCB Removal", "Indoor Air Quality Assessment", "Environmental Site Assessment (Phase I / II)", "Water Damage Restoration"];
const CONTRACTING_SERVICES = ["Interior Demolition", "Exterior Demolition", "Complete Building Demolition", "Renovation / Remodeling", "Structural Repairs", "New Construction", "Tenant Build-Out", "Facade / Exterior Restoration", "General Maintenance"];
const HAZARDOUS_OPTIONS = ["Asbestos", "Lead Paint", "Mold", "Contaminated Soil", "Underground Tanks", "PCBs", "Mercury", "Unknown / Not Sure"];
const US_STATES = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","DC"];

// ─── Helpers ────────────────────────────────────────────────────────────────

function CheckboxGroup({ options, selected, onChange }: { options: string[]; selected: string[]; onChange: (v: string[]) => void }) {
  const toggle = (opt: string) => onChange(selected.includes(opt) ? selected.filter((s) => s !== opt) : [...selected, opt]);
  return (
    <div className="grid sm:grid-cols-2 gap-2">
      {options.map((opt) => (
        <label key={opt} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${selected.includes(opt) ? "border-[var(--accent-blue)] bg-[var(--accent-blue)]/5" : "border-[var(--gray-200)] hover:border-[var(--gray-400)]"}`}>
          <input type="checkbox" checked={selected.includes(opt)} onChange={() => toggle(opt)} className="w-4 h-4 rounded border-[var(--gray-200)] text-[var(--primary-blue)] focus:ring-[var(--accent-blue)]" />
          <span className="text-sm text-[var(--gray-900)]">{opt}</span>
        </label>
      ))}
    </div>
  );
}

function SummaryCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[var(--off-white)] rounded-lg p-4 border border-[var(--gray-100)]">
      <h4 className="text-sm font-semibold text-[var(--gray-900)] mb-3">{title}</h4>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="flex gap-2">
      <span className="text-xs font-medium text-[var(--gray-400)] min-w-[100px]">{label}</span>
      <span className="text-sm text-[var(--gray-900)]">{value}</span>
    </div>
  );
}

// ─── Steps ──────────────────────────────────────────────────────────────────

function Step1({ data, up }: { data: BidRequestData; up: (d: Partial<BidRequestData>) => void }) {
  return (
    <div className="space-y-6">
      <div><h3 className="text-lg font-semibold text-[var(--gray-900)] mb-1">Your Contact Information</h3><p className="text-sm text-[var(--gray-600)]">Tell us how to reach you about this project.</p></div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div><label className="form-label">Full Name <span className="text-red-500">*</span></label><input type="text" required className="form-input" value={data.name} onChange={(e) => up({ name: e.target.value })} placeholder="John Smith" /></div>
        <div><label className="form-label">Email Address <span className="text-red-500">*</span></label><input type="email" required className="form-input" value={data.email} onChange={(e) => up({ email: e.target.value })} placeholder="john@company.com" /></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div><label className="form-label">Phone Number <span className="text-red-500">*</span></label><input type="tel" required className="form-input" value={data.phone} onChange={(e) => up({ phone: e.target.value })} placeholder="(555) 123-4567" /></div>
        <div><label className="form-label">Company / Organization</label><input type="text" className="form-input" value={data.company} onChange={(e) => up({ company: e.target.value })} placeholder="ABC Properties LLC" /></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div><label className="form-label">Your Role</label><select className="form-input" value={data.role} onChange={(e) => up({ role: e.target.value })}><option value="">Select...</option><option>Property Owner</option><option>Property Manager</option><option>Facility Manager</option><option>General Contractor</option><option>Architect / Engineer</option><option>Government Agency</option><option>Insurance Adjuster</option><option>Homeowner</option><option>Other</option></select></div>
        <div><label className="form-label">Preferred Contact Method</label><select className="form-input" value={data.preferredContact} onChange={(e) => up({ preferredContact: e.target.value })}><option value="email">Email</option><option value="phone">Phone Call</option><option value="text">Text Message</option></select></div>
      </div>
    </div>
  );
}

function Step2({ data, up }: { data: BidRequestData; up: (d: Partial<BidRequestData>) => void }) {
  return (
    <div className="space-y-6">
      <div><h3 className="text-lg font-semibold text-[var(--gray-900)] mb-1">Property &amp; Site Information</h3><p className="text-sm text-[var(--gray-600)]">Where is the project located?</p></div>
      <div><label className="form-label">Street Address <span className="text-red-500">*</span></label><input type="text" required className="form-input" value={data.address} onChange={(e) => up({ address: e.target.value })} placeholder="123 Main Street" /></div>
      <div className="grid sm:grid-cols-3 gap-6">
        <div><label className="form-label">City <span className="text-red-500">*</span></label><input type="text" required className="form-input" value={data.city} onChange={(e) => up({ city: e.target.value })} placeholder="New York" /></div>
        <div><label className="form-label">State <span className="text-red-500">*</span></label><select required className="form-input" value={data.state} onChange={(e) => up({ state: e.target.value })}>{US_STATES.map((st) => <option key={st} value={st}>{st}</option>)}</select></div>
        <div><label className="form-label">ZIP Code <span className="text-red-500">*</span></label><input type="text" required className="form-input" value={data.zip} onChange={(e) => up({ zip: e.target.value })} placeholder="10001" maxLength={10} /></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div><label className="form-label">Property Type <span className="text-red-500">*</span></label><select required className="form-input" value={data.propertyType} onChange={(e) => up({ propertyType: e.target.value })}><option value="">Select...</option>{PROPERTY_TYPES.map((t) => <option key={t}>{t}</option>)}</select></div>
        <div><label className="form-label">Building Type</label><select className="form-input" value={data.buildingType} onChange={(e) => up({ buildingType: e.target.value })}><option value="">Select...</option>{BUILDING_TYPES.map((t) => <option key={t}>{t}</option>)}</select></div>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        <div><label className="form-label">Year Built <span className="ml-1 text-xs text-[var(--gray-400)]">(for hazmat)</span></label><input type="text" className="form-input" value={data.yearBuilt} onChange={(e) => up({ yearBuilt: e.target.value })} placeholder="e.g. 1965" maxLength={4} /></div>
        <div><label className="form-label">Approx. Sq. Footage</label><input type="text" className="form-input" value={data.squareFootage} onChange={(e) => up({ squareFootage: e.target.value })} placeholder="e.g. 5,000" /></div>
        <div><label className="form-label">Occupancy Status</label><select className="form-input" value={data.occupancyStatus} onChange={(e) => up({ occupancyStatus: e.target.value })}><option value="">Select...</option><option>Occupied</option><option>Vacant</option><option>Partially Occupied</option></select></div>
      </div>
    </div>
  );
}

function Step3({ data, up }: { data: BidRequestData; up: (d: Partial<BidRequestData>) => void }) {
  const toggleCat = (cat: string) => up({ serviceCategory: data.serviceCategory.includes(cat) ? data.serviceCategory.filter((c) => c !== cat) : [...data.serviceCategory, cat] });
  return (
    <div className="space-y-6">
      <div><h3 className="text-lg font-semibold text-[var(--gray-900)] mb-1">Services Needed</h3><p className="text-sm text-[var(--gray-600)]">Select all services you&apos;re interested in.</p></div>
      <div><label className="form-label">Service Category <span className="text-red-500">*</span></label>
        <div className="grid sm:grid-cols-2 gap-3">
          {["Environmental Remediation", "General Contracting"].map((cat) => (
            <button key={cat} type="button" onClick={() => toggleCat(cat)} className={`p-4 rounded-lg border-2 text-left transition-all ${data.serviceCategory.includes(cat) ? "border-[var(--primary-blue)] bg-[var(--primary-blue)]/5" : "border-[var(--gray-200)] hover:border-[var(--gray-400)]"}`}>
              <span className="flex items-center gap-3">
                <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${data.serviceCategory.includes(cat) ? "border-[var(--primary-blue)] bg-[var(--primary-blue)]" : "border-[var(--gray-400)]"}`}>
                  {data.serviceCategory.includes(cat) && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                </span>
                <span className="font-medium text-[var(--gray-900)]">{cat}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
      {data.serviceCategory.includes("Environmental Remediation") && <div><label className="form-label">Environmental Remediation Services</label><CheckboxGroup options={REMEDIATION_SERVICES} selected={data.remediationServices} onChange={(v) => up({ remediationServices: v })} /></div>}
      {data.serviceCategory.includes("General Contracting") && <div><label className="form-label">General Contracting Services</label><CheckboxGroup options={CONTRACTING_SERVICES} selected={data.contractingServices} onChange={(v) => up({ contractingServices: v })} /></div>}
    </div>
  );
}

function Step4({ data, up }: { data: BidRequestData; up: (d: Partial<BidRequestData>) => void }) {
  return (
    <div className="space-y-6">
      <div><h3 className="text-lg font-semibold text-[var(--gray-900)] mb-1">Project Details</h3><p className="text-sm text-[var(--gray-600)]">The more detail you provide, the more accurate our estimate will be.</p></div>
      <div><label className="form-label">Project Description <span className="text-red-500">*</span></label><textarea required rows={4} className="form-input" value={data.description} onChange={(e) => up({ description: e.target.value })} placeholder="Describe the scope of work, current conditions, and any specific requirements..." /></div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div><label className="form-label">Reason for Project</label><select className="form-input" value={data.projectReason} onChange={(e) => up({ projectReason: e.target.value })}><option value="">Select...</option><option>Renovation</option><option>Sale / Purchase</option><option>Compliance / Regulation</option><option>Damage / Emergency</option><option>Planned Demolition</option><option>Insurance Claim</option><option>Tenant Improvement</option><option>Routine Maintenance</option><option>Other</option></select></div>
        <div><label className="form-label">Site assessment done?</label><select className="form-input" value={data.siteAssessment} onChange={(e) => up({ siteAssessment: e.target.value })}><option value="">Select...</option><option value="Yes">Yes — reports available</option><option value="Yes - No Reports">Yes — no reports</option><option value="No">No</option><option value="Unsure">Not sure</option></select></div>
      </div>
      <div><label className="form-label">Known or Suspected Hazardous Materials</label><CheckboxGroup options={HAZARDOUS_OPTIONS} selected={data.hazardousMaterials} onChange={(v) => up({ hazardousMaterials: v })} /></div>
      <div><label className="form-label">Previous remediation at this site?</label><select className="form-input" value={data.previousRemediation} onChange={(e) => up({ previousRemediation: e.target.value })}><option value="">Select...</option><option>Yes</option><option>No</option><option>Unknown</option></select></div>
      <div className="grid sm:grid-cols-3 gap-6">
        <div><label className="form-label">Urgency <span className="text-red-500">*</span></label><select required className="form-input" value={data.urgency} onChange={(e) => up({ urgency: e.target.value })}><option value="">Select...</option><option>Emergency / Immediate</option><option>Within 1-2 Weeks</option><option>Within 1 Month</option><option>Within 3 Months</option><option>Flexible / No Rush</option></select></div>
        <div><label className="form-label">Budget Range</label><select className="form-input" value={data.budgetRange} onChange={(e) => up({ budgetRange: e.target.value })}><option value="">Select...</option><option>Under $10K</option><option>$10K-$25K</option><option>$25K-$50K</option><option>$50K-$100K</option><option>$100K-$250K</option><option>$250K-$500K</option><option>$500K+</option><option>Need Estimate</option></select></div>
        <div><label className="form-label">Desired Start Date</label><input type="date" className="form-input" value={data.desiredStartDate} onChange={(e) => up({ desiredStartDate: e.target.value })} /></div>
      </div>
    </div>
  );
}

function Step5({ data, up }: { data: BidRequestData; up: (d: Partial<BidRequestData>) => void }) {
  const allSvcs = [...data.remediationServices, ...data.contractingServices];
  return (
    <div className="space-y-6">
      <div><h3 className="text-lg font-semibold text-[var(--gray-900)] mb-1">Review &amp; Submit</h3><p className="text-sm text-[var(--gray-600)]">Please review your information. Go back to any step to make changes.</p></div>
      <div className="space-y-4">
        <SummaryCard title="Contact Information">
          <SummaryRow label="Name" value={data.name} /><SummaryRow label="Email" value={data.email} /><SummaryRow label="Phone" value={data.phone} />
          {data.company && <SummaryRow label="Company" value={data.company} />}{data.role && <SummaryRow label="Role" value={data.role} />}
        </SummaryCard>
        <SummaryCard title="Site Information">
          <SummaryRow label="Address" value={`${data.address}, ${data.city}, ${data.state} ${data.zip}`} /><SummaryRow label="Property" value={data.propertyType} />
          {data.buildingType && <SummaryRow label="Building" value={data.buildingType} />}{data.yearBuilt && <SummaryRow label="Year Built" value={data.yearBuilt} />}
        </SummaryCard>
        <SummaryCard title="Services">
          <SummaryRow label="Categories" value={data.serviceCategory.join(", ")} />
          {allSvcs.length > 0 && <div className="mt-2"><div className="flex flex-wrap gap-2">{allSvcs.map((s) => <span key={s} className="inline-block text-xs px-2 py-1 bg-[var(--accent-blue)]/10 text-[var(--primary-blue)] rounded">{s}</span>)}</div></div>}
        </SummaryCard>
        <SummaryCard title="Project Details">
          <SummaryRow label="Description" value={data.description} /><SummaryRow label="Urgency" value={data.urgency} />
          {data.budgetRange && <SummaryRow label="Budget" value={data.budgetRange} />}
          {data.hazardousMaterials.length > 0 && <SummaryRow label="Hazmat" value={data.hazardousMaterials.join(", ")} />}
        </SummaryCard>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div><label className="form-label">How did you hear about BOFA?</label><select className="form-input" value={data.howDidYouHear} onChange={(e) => up({ howDidYouHear: e.target.value })}><option value="">Select...</option><option>Web Search</option><option>Referral</option><option>Government Listing</option><option>Repeat Client</option><option>Social Media</option><option>Trade Show / Event</option><option>Other</option></select></div>
      </div>
      <div><label className="form-label">Additional Notes</label><textarea rows={3} className="form-input" value={data.additionalNotes} onChange={(e) => up({ additionalNotes: e.target.value })} placeholder="Any other details or questions..." /></div>
    </div>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────

function BidRequestForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<BidRequestData>(INITIAL);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const up = (partial: Partial<BidRequestData>) => setData((prev) => ({ ...prev, ...partial }));

  const canAdvance = (): boolean => {
    switch (step) {
      case 0: return !!(data.name && data.email && data.phone);
      case 1: return !!(data.address && data.city && data.state && data.zip && data.propertyType);
      case 2: return data.serviceCategory.length > 0;
      case 3: return !!(data.description && data.urgency);
      default: return true;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    const allSvcs = [...data.remediationServices, ...data.contractingServices];
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          subject: `New Bid Request from ${data.name} — ${data.serviceCategory.join(" & ")}`,
          from_name: "BOFA Website — Bid Request",
          "Contact Name": data.name, "Email": data.email, "Phone": data.phone,
          "Company": data.company || "N/A", "Role": data.role || "N/A",
          "Site Address": `${data.address}, ${data.city}, ${data.state} ${data.zip}`,
          "Property Type": data.propertyType, "Year Built": data.yearBuilt || "N/A",
          "Service Categories": data.serviceCategory.join(", "),
          "Specific Services": allSvcs.join(", ") || "None selected",
          "Project Description": data.description, "Urgency": data.urgency,
          "Budget Range": data.budgetRange || "N/A",
          "Hazardous Materials": data.hazardousMaterials.join(", ") || "None",
          "How Heard": data.howDidYouHear || "N/A",
          "Additional Notes": data.additionalNotes || "None",
        }),
      });
      const result = await res.json();
      if (result.success) setIsSubmitted(true);
      else setError("Something went wrong. Please try again.");
    } catch { setError("Failed to submit. Please try again or call us directly."); }
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg p-8 border border-[var(--gray-100)] text-center max-w-lg mx-auto">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-xl font-semibold text-[var(--gray-900)] mb-2">Bid Request Submitted!</h3>
        <p className="text-[var(--gray-600)] mb-4">Our estimating team will review your project and respond within <strong>1-2 business days</strong>.</p>
        <Link href="/" className="btn btn-primary">Return to Home</Link>
      </div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          {STEPS.map((label, i) => (
            <button key={label} type="button" onClick={() => i < step && setStep(i)} className={`flex items-center gap-2 text-sm font-medium transition-colors ${i === step ? "text-[var(--primary-blue)]" : i < step ? "text-[var(--accent-blue)] cursor-pointer" : "text-[var(--gray-400)]"}`}>
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 ${i === step ? "border-[var(--primary-blue)] bg-[var(--primary-blue)] text-white" : i < step ? "border-[var(--accent-blue)] bg-[var(--accent-blue)] text-white" : "border-[var(--gray-200)] text-[var(--gray-400)]"}`}>
                {i < step ? <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg> : i + 1}
              </span>
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
        <div className="h-1.5 bg-[var(--gray-100)] rounded-full overflow-hidden"><div className="h-full bg-[var(--primary-blue)] rounded-full transition-all duration-500" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} /></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-lg border border-[var(--gray-100)] p-6 sm:p-8">
          {step === 0 && <Step1 data={data} up={up} />}
          {step === 1 && <Step2 data={data} up={up} />}
          {step === 2 && <Step3 data={data} up={up} />}
          {step === 3 && <Step4 data={data} up={up} />}
          {step === 4 && <Step5 data={data} up={up} />}
        </div>

        {error && <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}

        <div className="flex items-center justify-between mt-6">
          <button type="button" onClick={() => setStep((s) => s - 1)} className={`btn btn-secondary ${step === 0 ? "invisible" : ""}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg> Back
          </button>
          {step < STEPS.length - 1 ? (
            <button type="button" onClick={() => setStep((s) => s + 1)} disabled={!canAdvance()} className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
              Next <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          ) : (
            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
              {isSubmitting ? (<><svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>Submitting...</>) : (<>Submit Bid Request <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></>)}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function RequestBidPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--gray-50)] to-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Request a Bid</p>
            <h1 className="headline-xl mb-6 text-[var(--gray-900)]">Get a Free Project Estimate</h1>
            <p className="body-lg">Complete this form and our estimating team will prepare a comprehensive bid tailored to your needs. Most responses within 1-2 business days.</p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto"><BidRequestForm /></div>
        </div>
      </section>

      <section className="section bg-[var(--off-white)]">
        <div className="container">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-[var(--primary-blue)]/10 rounded-lg flex items-center justify-center mx-auto mb-3"><svg className="w-6 h-6 text-[var(--primary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <h3 className="font-semibold text-[var(--gray-900)] mb-1">Fast Response</h3>
              <p className="text-sm text-[var(--gray-600)]">Most bid requests receive a response within 1-2 business days.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[var(--primary-blue)]/10 rounded-lg flex items-center justify-center mx-auto mb-3"><svg className="w-6 h-6 text-[var(--primary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
              <h3 className="font-semibold text-[var(--gray-900)] mb-1">Certified &amp; Licensed</h3>
              <p className="text-sm text-[var(--gray-600)]">EPA certified, OSHA compliant, and fully licensed for all services.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[var(--primary-blue)]/10 rounded-lg flex items-center justify-center mx-auto mb-3"><svg className="w-6 h-6 text-[var(--primary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div>
              <h3 className="font-semibold text-[var(--gray-900)] mb-1">No Obligation</h3>
              <p className="text-sm text-[var(--gray-600)]">Free estimates with no commitment required. Transparent pricing.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
