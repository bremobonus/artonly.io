import Link from "next/link";

const budgetItems = [
  { item: "Land acquisition (1–2 acres)", low: 500000, high: 750000 },
  { item: "Site preparation & infrastructure", low: 80000, high: 120000 },
  { item: "4 × container units (fully fitted)", low: 320000, high: 400000 },
  { item: "Communal wellness pavilion", low: 80000, high: 110000 },
  { item: "Permits, engineering & design fees", low: 40000, high: 60000 },
  { item: "Contingency (15%)", low: 152000, high: 215000 },
];

const totalLow = budgetItems.reduce((s, i) => s + i.low, 0);
const totalHigh = budgetItems.reduce((s, i) => s + i.high, 0);

function fmt(n: number) {
  return "$" + n.toLocaleString("en-CA");
}

export default function Financing() {
  return (
    <main style={{ backgroundColor: "var(--bg)" }}>
      {/* HEADER */}
      <section className="px-8 md:px-14 pt-48 pb-24 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="label mb-10">Financing</p>
          <h1 className="display" style={{ color: "var(--fg)" }}>
            A clear path<br />from land<br />to revenue.
          </h1>
        </div>
      </section>

      {/* BUDGET */}
      <section className="px-8 md:px-14 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="label mb-14">Budget Overview</p>
          <div className="space-y-0">
            {budgetItems.map(({ item, low, high }, i) => (
              <div
                key={i}
                className="grid grid-cols-3 gap-4 py-6 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <p className="col-span-1 text-sm" style={{ color: "var(--fg)", opacity: 0.65 }}>{item}</p>
                <p className="text-sm text-right" style={{ color: "var(--subtle)" }}>{fmt(low)}</p>
                <p className="text-sm text-right font-medium" style={{ color: "var(--fg)" }}>{fmt(high)}</p>
              </div>
            ))}
            <div
              className="grid grid-cols-3 gap-4 py-8 border-t-2"
              style={{ borderColor: "var(--fg)" }}
            >
              <p className="col-span-1 text-sm font-medium" style={{ color: "var(--fg)" }}>Total Range</p>
              <p className="text-sm text-right" style={{ color: "var(--subtle)" }}>{fmt(totalLow)}</p>
              <p className="text-sm text-right font-bold" style={{ color: "var(--fg)" }}>{fmt(totalHigh)}</p>
            </div>
          </div>
          <div className="mt-16 p-10 bg-[#0C0C0C]">
            <p className="label text-white/30 mb-4">Target Raise</p>
            <p className="text-white font-bold" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1, letterSpacing: "-0.02em" }}>
              $1,400,000
            </p>
          </div>
        </div>
      </section>

      {/* REVENUE PROJECTIONS */}
      <section className="bg-[#0C0C0C] px-8 md:px-14 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="label text-white/30 mb-14">Projected Returns</p>
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {[
              { value: "$346,000", label: "Annual Gross Revenue", note: "4 units × $350/night × 68% occ." },
              { value: "$261,000", label: "Annual Net Income", note: "After operating costs ~$85k/yr" },
              { value: "4–5 yrs", label: "Break-Even Horizon", note: "Based on target $1.4M project cost" },
            ].map(({ value, label, note }) => (
              <div key={label} className="border-t border-white/10 pt-8">
                <p className="text-white font-bold mb-2" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", lineHeight: 1, letterSpacing: "-0.02em" }}>
                  {value}
                </p>
                <p className="text-white/70 text-sm font-medium mb-2">{label}</p>
                <p className="text-white/30 text-xs leading-relaxed">{note}</p>
              </div>
            ))}
          </div>

          <hr className="rule-dark mb-16" />

          <p className="label text-white/30 mb-10">Revenue Breakdown</p>
          <div className="space-y-0">
            {[
              ["Nightly rate (avg)", "$350"],
              ["Units", "4"],
              ["Annual occupancy", "68%"],
              ["Nights per year", "248 / unit"],
              ["Gross revenue", "$346,800 / yr"],
              ["Platform & management fees (15%)", "−$52,020"],
              ["Utilities, maintenance, property tax", "−$33,000"],
              ["Net operating income", "$261,780 / yr"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between py-5 border-t border-white/8">
                <p className="text-white/45 text-sm">{label}</p>
                <p className="text-white text-sm font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNDING STRUCTURE */}
      <section className="px-8 md:px-14 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="label mb-14">Funding Structure</p>
          <div className="grid md:grid-cols-2 gap-1">
            <div className="p-10 border" style={{ borderColor: "var(--border)" }}>
              <p className="text-5xl font-bold tracking-tight mb-3" style={{ color: "var(--fg)" }}>60%</p>
              <p className="text-sm font-medium mb-1" style={{ color: "var(--fg)" }}>Equity</p>
              <p className="label mb-6">$840,000</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--subtle)" }}>
                Investor equity split between project partners. Proportional ownership
                of the LLC/partnership holding the property.
              </p>
            </div>
            <div className="p-10 bg-[#0C0C0C]">
              <p className="text-5xl font-bold tracking-tight text-white mb-3">40%</p>
              <p className="text-sm font-medium text-white mb-1">Financing</p>
              <p className="label text-white/30 mb-6">$560,000</p>
              <p className="text-sm leading-relaxed text-white/45">
                Conventional mortgage, HELOC, or construction loan against
                the land and completed asset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="px-8 md:px-14 py-16 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-12">
          <Link href="/" className="text-[10px] tracking-[0.35em] uppercase hover:opacity-60 transition-opacity" style={{ color: "var(--fg)" }}>← Home</Link>
          <Link href="/blueprints" className="text-[10px] tracking-[0.35em] uppercase hover:opacity-60 transition-opacity" style={{ color: "var(--fg)" }}>View Blueprints ↗</Link>
          <a href="mailto:hello@theblanc.io" className="text-[10px] tracking-[0.35em] uppercase hover:opacity-60 transition-opacity" style={{ color: "var(--fg)" }}>hello@theblanc.io ↗</a>
        </div>
      </section>
    </main>
  );
}
