"use client";

import { useState, useRef } from "react";

// ─── Types ──────────────────────────────────────────────────────────────────

interface LineItem {
  id: string;
  description: string;
  quantity: string;
  unit: string;
  unitPrice: string;
}

interface Alternate {
  id: string;
  description: string;
  type: "add" | "deduct";
  amount: string;
}

interface Reference {
  id: string;
  projectName: string;
  clientName: string;
  value: string;
  completionDate: string;
  description: string;
  contactName: string;
  contactPhone: string;
}

interface BidData {
  // Project Info
  projectName: string;
  projectAddress: string;
  projectCity: string;
  projectState: string;
  projectZip: string;
  bidNumber: string;
  clientName: string;
  clientContact: string;
  clientEmail: string;
  clientPhone: string;
  architectEngineer: string;
  contractType: string;
  addendaAcknowledged: string;

  // Scope
  scopeDescription: string;
  inclusions: string;
  exclusions: string;
  assumptions: string;

  // Pricing
  lineItems: LineItem[];
  overheadPercent: string;
  profitPercent: string;
  contingencyPercent: string;
  bondPremium: string;
  alternates: Alternate[];

  // Schedule
  proposedStartDate: string;
  proposedEndDate: string;
  durationDays: string;
  milestones: string;
  workingHours: string;

  // Qualifications
  keyPersonnel: string;
  relevantLicenses: string;
  certifications: string;
  emrRating: string;
  safetyRecord: string;
  references: Reference[];

  // Insurance & Bonds
  generalLiability: string;
  workersComp: string;
  autoLiability: string;
  umbrellaLiability: string;
  pollutionLiability: string;
  suretyCompany: string;
  bondingCapacity: string;
  bidBondIncluded: string;

  // Terms
  bidValidityDays: string;
  paymentTerms: string;
  retainagePercent: string;
  warrantyPeriod: string;
  disputeResolution: string;

  // Notes
  additionalNotes: string;
}

const INITIAL_DATA: BidData = {
  projectName: "",
  projectAddress: "",
  projectCity: "",
  projectState: "NY",
  projectZip: "",
  bidNumber: "",
  clientName: "",
  clientContact: "",
  clientEmail: "",
  clientPhone: "",
  architectEngineer: "",
  contractType: "lump-sum",
  addendaAcknowledged: "",

  scopeDescription: "",
  inclusions: "",
  exclusions: "",
  assumptions: "",

  lineItems: [createLineItem()],
  overheadPercent: "10",
  profitPercent: "10",
  contingencyPercent: "5",
  bondPremium: "",
  alternates: [],

  proposedStartDate: "",
  proposedEndDate: "",
  durationDays: "",
  milestones: "",
  workingHours: "Mon-Fri, 7:00 AM - 3:30 PM",

  keyPersonnel: "",
  relevantLicenses: "",
  certifications: "",
  emrRating: "",
  safetyRecord: "",
  references: [],

  generalLiability: "$1,000,000 / $2,000,000",
  workersComp: "Statutory",
  autoLiability: "$1,000,000",
  umbrellaLiability: "",
  pollutionLiability: "",
  suretyCompany: "",
  bondingCapacity: "",
  bidBondIncluded: "no",

  bidValidityDays: "60",
  paymentTerms: "Net 30",
  retainagePercent: "10",
  warrantyPeriod: "1 year",
  disputeResolution: "mediation",

  additionalNotes: "",
};

const STEPS = [
  "Project Info",
  "Scope of Work",
  "Pricing",
  "Schedule",
  "Qualifications",
  "Insurance & Bonds",
  "Terms",
  "Review",
];

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY","DC",
];

function createLineItem(): LineItem {
  return { id: crypto.randomUUID(), description: "", quantity: "", unit: "LS", unitPrice: "" };
}

function createAlternate(): Alternate {
  return { id: crypto.randomUUID(), description: "", type: "add", amount: "" };
}

function createReference(): Reference {
  return {
    id: crypto.randomUUID(),
    projectName: "",
    clientName: "",
    value: "",
    completionDate: "",
    description: "",
    contactName: "",
    contactPhone: "",
  };
}

// ─── Utility ────────────────────────────────────────────────────────────────

function parseDollars(val: string): number {
  const n = parseFloat(val.replace(/[^0-9.]/g, ""));
  return isNaN(n) ? 0 : n;
}

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function calcTotals(data: BidData) {
  const lineItemTotal = data.lineItems.reduce((sum, li) => {
    const qty = parseFloat(li.quantity) || 1;
    const price = parseDollars(li.unitPrice);
    return sum + qty * price;
  }, 0);

  const overhead = lineItemTotal * (parseFloat(data.overheadPercent) || 0) / 100;
  const profit = lineItemTotal * (parseFloat(data.profitPercent) || 0) / 100;
  const contingency = lineItemTotal * (parseFloat(data.contingencyPercent) || 0) / 100;
  const bond = parseDollars(data.bondPremium);
  const subtotal = lineItemTotal + overhead + profit + contingency + bond;

  return { lineItemTotal, overhead, profit, contingency, bond, subtotal };
}

// ─── Step Components ────────────────────────────────────────────────────────

function StepProjectInfo({ data, update }: { data: BidData; update: (d: Partial<BidData>) => void }) {
  return (
    <div className="space-y-6">
      <SectionHeader title="Project Information" subtitle="Details about the project you're bidding on." />

      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Project Name" required value={data.projectName} onChange={(v) => update({ projectName: v })} placeholder="City Hall Asbestos Abatement" />
        <Field label="Bid / Solicitation Number" value={data.bidNumber} onChange={(v) => update({ bidNumber: v })} placeholder="RFP-2026-0142" />
      </div>

      <Field label="Project Address" required value={data.projectAddress} onChange={(v) => update({ projectAddress: v })} placeholder="123 Main Street" />

      <div className="grid sm:grid-cols-3 gap-6">
        <Field label="City" required value={data.projectCity} onChange={(v) => update({ projectCity: v })} placeholder="New York" />
        <div>
          <label className="form-label">State <span className="text-red-500">*</span></label>
          <select className="form-input" value={data.projectState} onChange={(e) => update({ projectState: e.target.value })}>
            {US_STATES.map((st) => <option key={st} value={st}>{st}</option>)}
          </select>
        </div>
        <Field label="ZIP" required value={data.projectZip} onChange={(v) => update({ projectZip: v })} placeholder="10001" />
      </div>

      <div className="border-t border-[var(--gray-100)] pt-6">
        <p className="text-sm font-semibold text-[var(--gray-900)] mb-4">Client / Owner</p>
        <div className="grid sm:grid-cols-2 gap-6">
          <Field label="Client / Owner Name" required value={data.clientName} onChange={(v) => update({ clientName: v })} placeholder="NYC Dept. of Citywide Admin Services" />
          <Field label="Contact Person" value={data.clientContact} onChange={(v) => update({ clientContact: v })} placeholder="Jane Doe" />
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          <Field label="Client Email" value={data.clientEmail} onChange={(v) => update({ clientEmail: v })} placeholder="jane.doe@agency.gov" type="email" />
          <Field label="Client Phone" value={data.clientPhone} onChange={(v) => update({ clientPhone: v })} placeholder="(212) 555-1234" type="tel" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Architect / Engineer of Record" value={data.architectEngineer} onChange={(v) => update({ architectEngineer: v })} placeholder="Smith & Associates Architects" />
        <div>
          <label className="form-label">Contract Type</label>
          <select className="form-input" value={data.contractType} onChange={(e) => update({ contractType: e.target.value })}>
            <option value="lump-sum">Lump Sum</option>
            <option value="unit-price">Unit Price</option>
            <option value="cost-plus">Cost Plus</option>
            <option value="gmp">Guaranteed Maximum Price (GMP)</option>
            <option value="design-build">Design-Build</option>
            <option value="time-materials">Time & Materials</option>
          </select>
        </div>
      </div>

      <TextArea label="Addenda Acknowledged" value={data.addendaAcknowledged} onChange={(v) => update({ addendaAcknowledged: v })} placeholder="Addendum #1 (03/10/2026), Addendum #2 (03/15/2026)" rows={2} />
    </div>
  );
}

function StepScope({ data, update }: { data: BidData; update: (d: Partial<BidData>) => void }) {
  return (
    <div className="space-y-6">
      <SectionHeader title="Scope of Work" subtitle="Define exactly what your bid covers — and what it doesn't." />

      <TextArea label="Description of Work" required value={data.scopeDescription} onChange={(v) => update({ scopeDescription: v })} placeholder="Complete asbestos abatement of all identified ACM in floors 1-4 per the Phase II Environmental Assessment dated 02/15/2026 by XYZ Environmental..." rows={5} />
      <TextArea label="Inclusions" value={data.inclusions} onChange={(v) => update({ inclusions: v })} placeholder="• Mobilization and site setup&#10;• Negative pressure enclosures&#10;• Abatement of all identified ACM&#10;• Air monitoring during abatement&#10;• Waste transportation and disposal&#10;• Final clearance air testing" rows={5} />
      <TextArea label="Exclusions" value={data.exclusions} onChange={(v) => update({ exclusions: v })} placeholder="• Abatement of materials not identified in survey&#10;• Concealed conditions&#10;• Utility relocations&#10;• Overtime unless authorized in writing&#10;• Third-party testing/inspection" rows={5} />
      <TextArea label="Assumptions & Conditions" value={data.assumptions} onChange={(v) => update({ assumptions: v })} placeholder="• Based on plans and specs dated 02/15/2026&#10;• Normal working hours Mon-Fri&#10;• Unobstructed site access during work hours&#10;• Owner provides water and electrical" rows={4} />
    </div>
  );
}

function StepPricing({ data, update }: { data: BidData; update: (d: Partial<BidData>) => void }) {
  const updateLineItem = (id: string, field: keyof LineItem, value: string) => {
    update({
      lineItems: data.lineItems.map((li) =>
        li.id === id ? { ...li, [field]: value } : li
      ),
    });
  };

  const addLineItem = () => update({ lineItems: [...data.lineItems, createLineItem()] });
  const removeLineItem = (id: string) => {
    if (data.lineItems.length <= 1) return;
    update({ lineItems: data.lineItems.filter((li) => li.id !== id) });
  };

  const updateAlternate = (id: string, field: keyof Alternate, value: string) => {
    update({
      alternates: data.alternates.map((a) =>
        a.id === id ? { ...a, [field]: value } : a
      ),
    });
  };
  const addAlternate = () => update({ alternates: [...data.alternates, createAlternate()] });
  const removeAlternate = (id: string) => update({ alternates: data.alternates.filter((a) => a.id !== id) });

  const totals = calcTotals(data);

  return (
    <div className="space-y-6">
      <SectionHeader title="Pricing & Cost Breakdown" subtitle="Itemize your costs. The totals calculate automatically." />

      {/* Line Items */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="form-label mb-0">Line Items</label>
          <button type="button" onClick={addLineItem} className="text-sm text-[var(--accent-blue)] hover:text-[var(--primary-blue)] font-medium">
            + Add Line Item
          </button>
        </div>

        <div className="space-y-3">
          {data.lineItems.map((li, idx) => (
            <div key={li.id} className="bg-[var(--off-white)] rounded-lg p-4 border border-[var(--gray-100)]">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-[var(--gray-400)] mt-3 min-w-[20px]">{idx + 1}</span>
                <div className="flex-1 grid sm:grid-cols-[2fr_80px_80px_120px] gap-3">
                  <input
                    type="text"
                    className="form-input text-sm"
                    placeholder="Description (e.g. Asbestos abatement - Floors 1-4)"
                    value={li.description}
                    onChange={(e) => updateLineItem(li.id, "description", e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-input text-sm text-center"
                    placeholder="Qty"
                    value={li.quantity}
                    onChange={(e) => updateLineItem(li.id, "quantity", e.target.value)}
                  />
                  <select
                    className="form-input text-sm"
                    value={li.unit}
                    onChange={(e) => updateLineItem(li.id, "unit", e.target.value)}
                  >
                    <option value="LS">LS</option>
                    <option value="SF">SF</option>
                    <option value="LF">LF</option>
                    <option value="CY">CY</option>
                    <option value="TON">TON</option>
                    <option value="EA">EA</option>
                    <option value="HR">HR</option>
                    <option value="DAY">DAY</option>
                    <option value="WK">WK</option>
                    <option value="MO">MO</option>
                  </select>
                  <input
                    type="text"
                    className="form-input text-sm text-right"
                    placeholder="$ Unit Price"
                    value={li.unitPrice}
                    onChange={(e) => updateLineItem(li.id, "unitPrice", e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeLineItem(li.id)}
                  className="text-[var(--gray-400)] hover:text-red-500 mt-2.5"
                  title="Remove"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {/* Line total */}
              <div className="text-right mt-1">
                <span className="text-xs text-[var(--gray-400)]">
                  Line Total: {fmt((parseFloat(li.quantity) || 1) * parseDollars(li.unitPrice))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Markups */}
      <div className="grid sm:grid-cols-4 gap-6">
        <Field label="Overhead %" value={data.overheadPercent} onChange={(v) => update({ overheadPercent: v })} placeholder="10" />
        <Field label="Profit %" value={data.profitPercent} onChange={(v) => update({ profitPercent: v })} placeholder="10" />
        <Field label="Contingency %" value={data.contingencyPercent} onChange={(v) => update({ contingencyPercent: v })} placeholder="5" />
        <Field label="Bond Premium $" value={data.bondPremium} onChange={(v) => update({ bondPremium: v })} placeholder="2,500" />
      </div>

      {/* Total summary */}
      <div className="bg-[var(--primary-blue)]/5 border border-[var(--primary-blue)]/20 rounded-lg p-5">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between"><span className="text-[var(--gray-600)]">Line Items Subtotal</span><span className="font-medium">{fmt(totals.lineItemTotal)}</span></div>
          <div className="flex justify-between"><span className="text-[var(--gray-600)]">Overhead ({data.overheadPercent || 0}%)</span><span>{fmt(totals.overhead)}</span></div>
          <div className="flex justify-between"><span className="text-[var(--gray-600)]">Profit ({data.profitPercent || 0}%)</span><span>{fmt(totals.profit)}</span></div>
          <div className="flex justify-between"><span className="text-[var(--gray-600)]">Contingency ({data.contingencyPercent || 0}%)</span><span>{fmt(totals.contingency)}</span></div>
          {totals.bond > 0 && <div className="flex justify-between"><span className="text-[var(--gray-600)]">Bond Premium</span><span>{fmt(totals.bond)}</span></div>}
          <div className="flex justify-between pt-3 border-t border-[var(--primary-blue)]/20">
            <span className="text-base font-bold text-[var(--gray-900)]">TOTAL BID</span>
            <span className="text-base font-bold text-[var(--primary-blue)]">{fmt(totals.subtotal)}</span>
          </div>
        </div>
      </div>

      {/* Alternates */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="form-label mb-0">Bid Alternates <span className="text-xs text-[var(--gray-400)] font-normal">(optional)</span></label>
          <button type="button" onClick={addAlternate} className="text-sm text-[var(--accent-blue)] hover:text-[var(--primary-blue)] font-medium">
            + Add Alternate
          </button>
        </div>
        {data.alternates.length === 0 && (
          <p className="text-sm text-[var(--gray-400)] italic">No alternates added. Click above to add optional scope items.</p>
        )}
        <div className="space-y-3">
          {data.alternates.map((alt, idx) => (
            <div key={alt.id} className="bg-[var(--off-white)] rounded-lg p-4 border border-[var(--gray-100)] flex items-start gap-3">
              <span className="text-xs font-bold text-[var(--gray-400)] mt-3">Alt {idx + 1}</span>
              <div className="flex-1 grid sm:grid-cols-[2fr_100px_120px] gap-3">
                <input type="text" className="form-input text-sm" placeholder="Alternate description" value={alt.description} onChange={(e) => updateAlternate(alt.id, "description", e.target.value)} />
                <select className="form-input text-sm" value={alt.type} onChange={(e) => updateAlternate(alt.id, "type", e.target.value as "add" | "deduct")}>
                  <option value="add">ADD</option>
                  <option value="deduct">DEDUCT</option>
                </select>
                <input type="text" className="form-input text-sm text-right" placeholder="$ Amount" value={alt.amount} onChange={(e) => updateAlternate(alt.id, "amount", e.target.value)} />
              </div>
              <button type="button" onClick={() => removeAlternate(alt.id)} className="text-[var(--gray-400)] hover:text-red-500 mt-2.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepSchedule({ data, update }: { data: BidData; update: (d: Partial<BidData>) => void }) {
  return (
    <div className="space-y-6">
      <SectionHeader title="Project Schedule" subtitle="Proposed timeline and milestones for the work." />

      <div className="grid sm:grid-cols-3 gap-6">
        <div>
          <label className="form-label">Proposed Start Date</label>
          <input type="date" className="form-input" value={data.proposedStartDate} onChange={(e) => update({ proposedStartDate: e.target.value })} />
        </div>
        <div>
          <label className="form-label">Proposed Completion Date</label>
          <input type="date" className="form-input" value={data.proposedEndDate} onChange={(e) => update({ proposedEndDate: e.target.value })} />
        </div>
        <Field label="Duration (calendar days)" value={data.durationDays} onChange={(v) => update({ durationDays: v })} placeholder="90" />
      </div>

      <Field label="Working Hours" value={data.workingHours} onChange={(v) => update({ workingHours: v })} placeholder="Mon-Fri, 7:00 AM - 3:30 PM" />

      <TextArea label="Key Milestones" value={data.milestones} onChange={(v) => update({ milestones: v })} placeholder="• Notice to Proceed: Day 0&#10;• Mobilization complete: Day 5&#10;• Phase 1 abatement complete: Day 30&#10;• Phase 2 abatement complete: Day 60&#10;• Final clearance testing: Day 80&#10;• Demobilization & closeout: Day 90" rows={6} />
    </div>
  );
}

function StepQualifications({ data, update }: { data: BidData; update: (d: Partial<BidData>) => void }) {
  const updateRef = (id: string, field: keyof Reference, value: string) => {
    update({
      references: data.references.map((r) =>
        r.id === id ? { ...r, [field]: value } : r
      ),
    });
  };
  const addRef = () => update({ references: [...data.references, createReference()] });
  const removeRef = (id: string) => update({ references: data.references.filter((r) => r.id !== id) });

  return (
    <div className="space-y-6">
      <SectionHeader title="Qualifications & Experience" subtitle="Demonstrate your team's capability for this project." />

      <TextArea label="Key Personnel" value={data.keyPersonnel} onChange={(v) => update({ keyPersonnel: v })} placeholder="• Project Manager: John Smith (15 yrs experience, HAZWOPER certified)&#10;• Site Superintendent: Maria Rodriguez (12 yrs, NYC Asbestos Supervisor)&#10;• Safety Officer: David Chen (10 yrs, CSP certified)" rows={4} />
      <TextArea label="Relevant Licenses" value={data.relevantLicenses} onChange={(v) => update({ relevantLicenses: v })} placeholder="• NYC Asbestos Abatement Contractor License #XX-XXXX&#10;• NYS DOL Asbestos Handling License&#10;• EPA Lead-Safe Certified Firm&#10;• NYC DOB General Contractor License" rows={4} />
      <TextArea label="Certifications" value={data.certifications} onChange={(v) => update({ certifications: v })} placeholder="• MBE/WBE Certified (NYC)&#10;• OSHA 30-Hour Construction&#10;• HAZWOPER 40-Hour (all field staff)&#10;• ISO 14001 Environmental Management" rows={4} />

      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Experience Modification Rate (EMR)" value={data.emrRating} onChange={(v) => update({ emrRating: v })} placeholder="0.85" />
        <Field label="Safety Record (TRIR)" value={data.safetyRecord} onChange={(v) => update({ safetyRecord: v })} placeholder="0.0 — zero lost-time incidents" />
      </div>

      {/* References */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="form-label mb-0">Past Project References</label>
          <button type="button" onClick={addRef} className="text-sm text-[var(--accent-blue)] hover:text-[var(--primary-blue)] font-medium">
            + Add Reference
          </button>
        </div>
        {data.references.length === 0 && (
          <p className="text-sm text-[var(--gray-400)] italic">No references added yet. Add 3-5 similar past projects.</p>
        )}
        <div className="space-y-4">
          {data.references.map((ref, idx) => (
            <div key={ref.id} className="bg-[var(--off-white)] rounded-lg p-4 border border-[var(--gray-100)]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-[var(--gray-900)]">Reference #{idx + 1}</span>
                <button type="button" onClick={() => removeRef(ref.id)} className="text-xs text-red-500 hover:text-red-700">Remove</button>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" className="form-input text-sm" placeholder="Project name" value={ref.projectName} onChange={(e) => updateRef(ref.id, "projectName", e.target.value)} />
                <input type="text" className="form-input text-sm" placeholder="Client name" value={ref.clientName} onChange={(e) => updateRef(ref.id, "clientName", e.target.value)} />
                <input type="text" className="form-input text-sm" placeholder="Contract value" value={ref.value} onChange={(e) => updateRef(ref.id, "value", e.target.value)} />
                <input type="text" className="form-input text-sm" placeholder="Completion date" value={ref.completionDate} onChange={(e) => updateRef(ref.id, "completionDate", e.target.value)} />
                <input type="text" className="form-input text-sm" placeholder="Contact name" value={ref.contactName} onChange={(e) => updateRef(ref.id, "contactName", e.target.value)} />
                <input type="text" className="form-input text-sm" placeholder="Contact phone" value={ref.contactPhone} onChange={(e) => updateRef(ref.id, "contactPhone", e.target.value)} />
              </div>
              <textarea className="form-input text-sm mt-3" rows={2} placeholder="Brief description of work performed" value={ref.description} onChange={(e) => updateRef(ref.id, "description", e.target.value)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepInsurance({ data, update }: { data: BidData; update: (d: Partial<BidData>) => void }) {
  return (
    <div className="space-y-6">
      <SectionHeader title="Insurance & Bonds" subtitle="Coverage details and bonding capacity." />

      <p className="text-sm font-semibold text-[var(--gray-900)]">Insurance Coverage</p>
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="General Liability" value={data.generalLiability} onChange={(v) => update({ generalLiability: v })} placeholder="$1,000,000 / $2,000,000" />
        <Field label="Workers Compensation" value={data.workersComp} onChange={(v) => update({ workersComp: v })} placeholder="Statutory" />
        <Field label="Auto Liability" value={data.autoLiability} onChange={(v) => update({ autoLiability: v })} placeholder="$1,000,000" />
        <Field label="Umbrella / Excess Liability" value={data.umbrellaLiability} onChange={(v) => update({ umbrellaLiability: v })} placeholder="$5,000,000" />
        <Field label="Pollution Liability" value={data.pollutionLiability} onChange={(v) => update({ pollutionLiability: v })} placeholder="$2,000,000" />
      </div>

      <div className="border-t border-[var(--gray-100)] pt-6">
        <p className="text-sm font-semibold text-[var(--gray-900)] mb-4">Bonding</p>
        <div className="grid sm:grid-cols-2 gap-6">
          <Field label="Surety Company" value={data.suretyCompany} onChange={(v) => update({ suretyCompany: v })} placeholder="Travelers Casualty & Surety" />
          <Field label="Bonding Capacity" value={data.bondingCapacity} onChange={(v) => update({ bondingCapacity: v })} placeholder="$5,000,000 single / $15,000,000 aggregate" />
        </div>
        <div className="mt-4">
          <label className="form-label">Bid Bond Included?</label>
          <select className="form-input sm:max-w-xs" value={data.bidBondIncluded} onChange={(e) => update({ bidBondIncluded: e.target.value })}>
            <option value="no">No</option>
            <option value="yes">Yes — attached</option>
            <option value="upon-request">Available upon request</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function StepTerms({ data, update }: { data: BidData; update: (d: Partial<BidData>) => void }) {
  return (
    <div className="space-y-6">
      <SectionHeader title="Terms & Conditions" subtitle="Standard terms for this bid." />

      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Bid Validity (days)" value={data.bidValidityDays} onChange={(v) => update({ bidValidityDays: v })} placeholder="60" />
        <Field label="Payment Terms" value={data.paymentTerms} onChange={(v) => update({ paymentTerms: v })} placeholder="Net 30" />
        <Field label="Retainage %" value={data.retainagePercent} onChange={(v) => update({ retainagePercent: v })} placeholder="10" />
        <Field label="Warranty Period" value={data.warrantyPeriod} onChange={(v) => update({ warrantyPeriod: v })} placeholder="1 year" />
      </div>

      <div>
        <label className="form-label">Dispute Resolution</label>
        <select className="form-input sm:max-w-xs" value={data.disputeResolution} onChange={(e) => update({ disputeResolution: e.target.value })}>
          <option value="mediation">Mediation</option>
          <option value="arbitration">Binding Arbitration</option>
          <option value="litigation">Litigation</option>
          <option value="mediation-then-arbitration">Mediation, then Arbitration</option>
        </select>
      </div>

      <TextArea label="Additional Notes" value={data.additionalNotes} onChange={(v) => update({ additionalNotes: v })} placeholder="Any additional terms, clarifications, or conditions..." rows={4} />
    </div>
  );
}

function StepReview({ data }: { data: BidData }) {
  const totals = calcTotals(data);
  const allServices = [...data.lineItems.filter(li => li.description)];

  return (
    <div className="space-y-6">
      <SectionHeader title="Review Your Bid" subtitle="Review all details before generating your bid document." />

      {/* Big total callout */}
      <div className="bg-[var(--primary-blue)] text-white rounded-lg p-6 text-center">
        <p className="text-sm opacity-80 mb-1">Total Bid Amount</p>
        <p className="text-3xl font-bold">{fmt(totals.subtotal)}</p>
        <p className="text-sm opacity-80 mt-2">{data.projectName || "Untitled Project"}</p>
      </div>

      <ReviewCard title="Project">
        <RRow label="Project" value={data.projectName} />
        <RRow label="Location" value={`${data.projectAddress}, ${data.projectCity}, ${data.projectState} ${data.projectZip}`} />
        <RRow label="Client" value={data.clientName} />
        <RRow label="Bid #" value={data.bidNumber} />
        <RRow label="Contract Type" value={data.contractType} />
      </ReviewCard>

      <ReviewCard title="Scope">
        <RRow label="Description" value={data.scopeDescription} />
        {data.exclusions && <RRow label="Exclusions" value={data.exclusions} />}
      </ReviewCard>

      <ReviewCard title="Pricing">
        {allServices.map((li, i) => (
          <RRow key={i} label={`Item ${i + 1}`} value={`${li.description} — ${fmt((parseFloat(li.quantity) || 1) * parseDollars(li.unitPrice))}`} />
        ))}
        <RRow label="Overhead" value={`${data.overheadPercent}% — ${fmt(totals.overhead)}`} />
        <RRow label="Profit" value={`${data.profitPercent}% — ${fmt(totals.profit)}`} />
        <RRow label="Contingency" value={`${data.contingencyPercent}% — ${fmt(totals.contingency)}`} />
        {totals.bond > 0 && <RRow label="Bond Premium" value={fmt(totals.bond)} />}
      </ReviewCard>

      <ReviewCard title="Schedule">
        <RRow label="Start" value={data.proposedStartDate} />
        <RRow label="Completion" value={data.proposedEndDate} />
        <RRow label="Duration" value={data.durationDays ? `${data.durationDays} days` : ""} />
      </ReviewCard>

      <ReviewCard title="Terms">
        <RRow label="Validity" value={data.bidValidityDays ? `${data.bidValidityDays} days` : ""} />
        <RRow label="Payment" value={data.paymentTerms} />
        <RRow label="Retainage" value={data.retainagePercent ? `${data.retainagePercent}%` : ""} />
        <RRow label="Warranty" value={data.warrantyPeriod} />
      </ReviewCard>

      {data.alternates.length > 0 && (
        <ReviewCard title="Alternates">
          {data.alternates.map((alt, i) => (
            <RRow key={i} label={`Alt ${i + 1}`} value={`${alt.description} — ${alt.type === "add" ? "ADD" : "DEDUCT"} ${fmt(parseDollars(alt.amount))}`} />
          ))}
        </ReviewCard>
      )}
    </div>
  );
}

// ─── Shared UI Components ───────────────────────────────────────────────────

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[var(--gray-900)] mb-1">{title}</h3>
      <p className="text-sm text-[var(--gray-600)]">{subtitle}</p>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, required, type }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; required?: boolean; type?: string;
}) {
  return (
    <div>
      <label className="form-label">{label} {required && <span className="text-red-500">*</span>}</label>
      <input type={type || "text"} className="form-input" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} required={required} />
    </div>
  );
}

function TextArea({ label, value, onChange, placeholder, required, rows }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; required?: boolean; rows?: number;
}) {
  return (
    <div>
      <label className="form-label">{label} {required && <span className="text-red-500">*</span>}</label>
      <textarea className="form-input" rows={rows || 3} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} required={required} />
    </div>
  );
}

function ReviewCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[var(--off-white)] rounded-lg p-4 border border-[var(--gray-100)]">
      <h4 className="text-sm font-semibold text-[var(--gray-900)] mb-3">{title}</h4>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function RRow({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="flex gap-2">
      <span className="text-xs font-medium text-[var(--gray-400)] min-w-[90px] shrink-0">{label}</span>
      <span className="text-sm text-[var(--gray-900)] whitespace-pre-wrap">{value}</span>
    </div>
  );
}

// ─── Print/Export ────────────────────────────────────────────────────────────

function generatePrintHTML(data: BidData) {
  const totals = calcTotals(data);
  const lineItemsHTML = data.lineItems
    .filter((li) => li.description)
    .map((li, i) => {
      const qty = parseFloat(li.quantity) || 1;
      const price = parseDollars(li.unitPrice);
      return `<tr><td>${i + 1}</td><td>${li.description}</td><td style="text-align:center">${qty}</td><td style="text-align:center">${li.unit}</td><td style="text-align:right">${fmt(price)}</td><td style="text-align:right">${fmt(qty * price)}</td></tr>`;
    })
    .join("");

  const alternatesHTML = data.alternates.length > 0
    ? `<h3>Bid Alternates</h3><table><thead><tr><th>#</th><th>Description</th><th>Type</th><th style="text-align:right">Amount</th></tr></thead><tbody>${data.alternates.map((a, i) => `<tr><td>${i + 1}</td><td>${a.description}</td><td>${a.type.toUpperCase()}</td><td style="text-align:right">${fmt(parseDollars(a.amount))}</td></tr>`).join("")}</tbody></table>`
    : "";

  const refsHTML = data.references.length > 0
    ? `<h3>Past Project References</h3>${data.references.map((r, i) => `<div style="margin-bottom:12px"><strong>Reference #${i + 1}: ${r.projectName}</strong><br/>Client: ${r.clientName} | Value: ${r.value} | Completed: ${r.completionDate}<br/>${r.description}<br/>Contact: ${r.contactName} — ${r.contactPhone}</div>`).join("")}`
    : "";

  return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Bid — ${data.projectName}</title><style>
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:800px;margin:0 auto;padding:40px;color:#1a1a1a;font-size:14px;line-height:1.6}
h1{font-size:22px;color:#1B4B82;margin-bottom:4px}
h2{font-size:16px;color:#1B4B82;border-bottom:2px solid #1B4B82;padding-bottom:4px;margin-top:28px}
h3{font-size:14px;margin-top:20px}
table{width:100%;border-collapse:collapse;margin:12px 0}
th,td{border:1px solid #ddd;padding:6px 10px;font-size:13px}
th{background:#f4f7fa;text-align:left;font-weight:600}
.total-row td{font-weight:700;background:#f0f6ff}
.header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:30px}
.company{font-size:11px;color:#666}
.bid-total{background:#1B4B82;color:white;padding:16px;text-align:center;border-radius:6px;margin:24px 0}
.bid-total .amount{font-size:28px;font-weight:700}
.section{margin-bottom:8px}
.section strong{color:#333}
.sig-line{border-top:1px solid #333;width:250px;margin-top:40px;padding-top:4px;font-size:12px}
@media print{body{padding:20px}button{display:none!important}}
</style></head><body>
<div class="header">
<div><h1>BOFA — Breath of Fresh Aire</h1><div class="company">1185 Avenue of the Americas, 3rd Floor, New York, NY 10036<br/>info@bofaire.com | (212) 202-0699</div></div>
<div style="text-align:right"><strong>BID PROPOSAL</strong><br/>${data.bidNumber ? `Bid #: ${data.bidNumber}<br/>` : ""}Date: ${new Date().toLocaleDateString()}</div>
</div>

<h2>Project Information</h2>
<div class="section"><strong>Project:</strong> ${data.projectName}</div>
<div class="section"><strong>Location:</strong> ${data.projectAddress}, ${data.projectCity}, ${data.projectState} ${data.projectZip}</div>
<div class="section"><strong>Client:</strong> ${data.clientName}${data.clientContact ? ` — ${data.clientContact}` : ""}</div>
<div class="section"><strong>Contract Type:</strong> ${data.contractType}</div>
${data.addendaAcknowledged ? `<div class="section"><strong>Addenda Acknowledged:</strong> ${data.addendaAcknowledged}</div>` : ""}

<h2>Scope of Work</h2>
<div style="white-space:pre-wrap">${data.scopeDescription}</div>
${data.inclusions ? `<h3>Inclusions</h3><div style="white-space:pre-wrap">${data.inclusions}</div>` : ""}
${data.exclusions ? `<h3>Exclusions</h3><div style="white-space:pre-wrap">${data.exclusions}</div>` : ""}
${data.assumptions ? `<h3>Assumptions</h3><div style="white-space:pre-wrap">${data.assumptions}</div>` : ""}

<h2>Cost Breakdown</h2>
<table><thead><tr><th>#</th><th>Description</th><th style="text-align:center">Qty</th><th style="text-align:center">Unit</th><th style="text-align:right">Unit Price</th><th style="text-align:right">Total</th></tr></thead>
<tbody>${lineItemsHTML}
<tr><td colspan="5" style="text-align:right"><strong>Subtotal</strong></td><td style="text-align:right"><strong>${fmt(totals.lineItemTotal)}</strong></td></tr>
<tr><td colspan="5" style="text-align:right">Overhead (${data.overheadPercent}%)</td><td style="text-align:right">${fmt(totals.overhead)}</td></tr>
<tr><td colspan="5" style="text-align:right">Profit (${data.profitPercent}%)</td><td style="text-align:right">${fmt(totals.profit)}</td></tr>
<tr><td colspan="5" style="text-align:right">Contingency (${data.contingencyPercent}%)</td><td style="text-align:right">${fmt(totals.contingency)}</td></tr>
${totals.bond > 0 ? `<tr><td colspan="5" style="text-align:right">Bond Premium</td><td style="text-align:right">${fmt(totals.bond)}</td></tr>` : ""}
</tbody></table>

<div class="bid-total"><div style="font-size:12px;opacity:0.8">TOTAL BID AMOUNT</div><div class="amount">${fmt(totals.subtotal)}</div></div>

${alternatesHTML}

<h2>Project Schedule</h2>
<div class="section"><strong>Proposed Start:</strong> ${data.proposedStartDate || "TBD"}</div>
<div class="section"><strong>Proposed Completion:</strong> ${data.proposedEndDate || "TBD"}</div>
${data.durationDays ? `<div class="section"><strong>Duration:</strong> ${data.durationDays} calendar days</div>` : ""}
${data.milestones ? `<h3>Key Milestones</h3><div style="white-space:pre-wrap">${data.milestones}</div>` : ""}

<h2>Qualifications</h2>
${data.keyPersonnel ? `<h3>Key Personnel</h3><div style="white-space:pre-wrap">${data.keyPersonnel}</div>` : ""}
${data.relevantLicenses ? `<h3>Licenses</h3><div style="white-space:pre-wrap">${data.relevantLicenses}</div>` : ""}
${data.certifications ? `<h3>Certifications</h3><div style="white-space:pre-wrap">${data.certifications}</div>` : ""}
${data.emrRating ? `<div class="section"><strong>EMR:</strong> ${data.emrRating}</div>` : ""}
${data.safetyRecord ? `<div class="section"><strong>Safety Record:</strong> ${data.safetyRecord}</div>` : ""}
${refsHTML}

<h2>Insurance & Bonds</h2>
<table><tbody>
<tr><td><strong>General Liability</strong></td><td>${data.generalLiability}</td></tr>
<tr><td><strong>Workers Comp</strong></td><td>${data.workersComp}</td></tr>
<tr><td><strong>Auto Liability</strong></td><td>${data.autoLiability}</td></tr>
${data.umbrellaLiability ? `<tr><td><strong>Umbrella</strong></td><td>${data.umbrellaLiability}</td></tr>` : ""}
${data.pollutionLiability ? `<tr><td><strong>Pollution Liability</strong></td><td>${data.pollutionLiability}</td></tr>` : ""}
${data.suretyCompany ? `<tr><td><strong>Surety</strong></td><td>${data.suretyCompany}</td></tr>` : ""}
${data.bondingCapacity ? `<tr><td><strong>Bonding Capacity</strong></td><td>${data.bondingCapacity}</td></tr>` : ""}
<tr><td><strong>Bid Bond</strong></td><td>${data.bidBondIncluded === "yes" ? "Attached" : data.bidBondIncluded === "upon-request" ? "Available upon request" : "Not included"}</td></tr>
</tbody></table>

<h2>Terms & Conditions</h2>
<div class="section"><strong>Bid Valid For:</strong> ${data.bidValidityDays} days from date of submission</div>
<div class="section"><strong>Payment Terms:</strong> ${data.paymentTerms}</div>
<div class="section"><strong>Retainage:</strong> ${data.retainagePercent}%</div>
<div class="section"><strong>Warranty:</strong> ${data.warrantyPeriod}</div>
<div class="section"><strong>Dispute Resolution:</strong> ${data.disputeResolution}</div>
${data.additionalNotes ? `<div class="section" style="margin-top:12px"><strong>Additional Notes:</strong><div style="white-space:pre-wrap">${data.additionalNotes}</div></div>` : ""}

<div style="margin-top:40px">
<p>This bid is submitted by the undersigned authorized representative of BOFA — Breath of Fresh Aire.</p>
<div style="display:flex;gap:60px;margin-top:30px">
<div><div class="sig-line">Signature</div></div>
<div><div class="sig-line">Printed Name &amp; Title</div></div>
<div><div class="sig-line">Date</div></div>
</div>
</div>
</body></html>`;
}

// ─── Main Component ─────────────────────────────────────────────────────────

function BidForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<BidData>(INITIAL_DATA);
  const printRef = useRef<HTMLIFrameElement>(null);

  const update = (partial: Partial<BidData>) =>
    setData((prev) => ({ ...prev, ...partial }));

  const canAdvance = (): boolean => {
    switch (step) {
      case 0: return !!(data.projectName && data.projectAddress && data.projectCity && data.clientName);
      case 1: return !!data.scopeDescription;
      case 2: return data.lineItems.some((li) => li.description && li.unitPrice);
      default: return true;
    }
  };

  const handlePrint = () => {
    const html = generatePrintHTML(data);
    const win = window.open("", "_blank");
    if (win) {
      win.document.write(html);
      win.document.close();
      setTimeout(() => win.print(), 500);
    }
  };

  const handleSaveJSON = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `bid-${data.projectName.replace(/\s+/g, "-").toLowerCase() || "draft"}-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLoadJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const loaded = JSON.parse(ev.target?.result as string) as BidData;
        setData(loaded);
        setStep(0);
      } catch {
        alert("Invalid file format");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div>
      {/* Top actions */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <button type="button" onClick={handleSaveJSON} className="text-sm text-[var(--accent-blue)] hover:text-[var(--primary-blue)] font-medium flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
          Save Draft
        </button>
        <label className="text-sm text-[var(--accent-blue)] hover:text-[var(--primary-blue)] font-medium flex items-center gap-1 cursor-pointer">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
          Load Draft
          <input type="file" accept=".json" className="hidden" onChange={handleLoadJSON} />
        </label>
        {step === STEPS.length - 1 && (
          <button type="button" onClick={handlePrint} className="ml-auto btn btn-primary text-sm py-2 px-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
            Print / Export PDF
          </button>
        )}
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center gap-1 mb-3 overflow-x-auto pb-2">
          {STEPS.map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => i < step && setStep(i)}
              className={`flex items-center gap-1.5 text-xs font-medium transition-colors whitespace-nowrap px-1 ${
                i === step ? "text-[var(--primary-blue)]"
                : i < step ? "text-[var(--accent-blue)] cursor-pointer hover:text-[var(--primary-blue)]"
                : "text-[var(--gray-400)]"
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2 shrink-0 ${
                i === step ? "border-[var(--primary-blue)] bg-[var(--primary-blue)] text-white"
                : i < step ? "border-[var(--accent-blue)] bg-[var(--accent-blue)] text-white"
                : "border-[var(--gray-200)] text-[var(--gray-400)]"
              }`}>
                {i < step ? (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                ) : i + 1}
              </span>
              <span className="hidden md:inline">{label}</span>
            </button>
          ))}
        </div>
        <div className="h-1.5 bg-[var(--gray-100)] rounded-full overflow-hidden">
          <div className="h-full bg-[var(--primary-blue)] rounded-full transition-all duration-500" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
        </div>
      </div>

      {/* Form content */}
      <div className="bg-white rounded-lg border border-[var(--gray-100)] p-6 sm:p-8">
        {step === 0 && <StepProjectInfo data={data} update={update} />}
        {step === 1 && <StepScope data={data} update={update} />}
        {step === 2 && <StepPricing data={data} update={update} />}
        {step === 3 && <StepSchedule data={data} update={update} />}
        {step === 4 && <StepQualifications data={data} update={update} />}
        {step === 5 && <StepInsurance data={data} update={update} />}
        {step === 6 && <StepTerms data={data} update={update} />}
        {step === 7 && <StepReview data={data} />}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <button type="button" onClick={() => setStep((s) => s - 1)} className={`btn btn-secondary ${step === 0 ? "invisible" : ""}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back
        </button>

        {step < STEPS.length - 1 ? (
          <button type="button" onClick={() => setStep((s) => s + 1)} disabled={!canAdvance()} className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
            Next
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        ) : (
          <button type="button" onClick={handlePrint} className="btn btn-primary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
            Print / Export PDF
          </button>
        )}
      </div>

      <iframe ref={printRef} className="hidden" />
    </div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function BidPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--gray-50)] to-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Bid Builder</p>
            <h1 className="headline-xl mb-6 text-[var(--gray-900)]">Create a Project Bid</h1>
            <p className="body-lg">
              Build a professional bid proposal with itemized pricing, scope of work,
              qualifications, and terms. Print or export as PDF when you&apos;re done.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <BidForm />
          </div>
        </div>
      </section>
    </>
  );
}
