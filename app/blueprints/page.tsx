import Link from "next/link";

export default function Blueprints() {
  return (
    <main style={{ backgroundColor: "var(--bg)" }}>
      {/* HEADER */}
      <section className="px-8 md:px-14 pt-48 pb-24 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="label mb-10">Blueprints</p>
          <h1 className="display" style={{ color: "var(--fg)" }}>
            Structure.<br />Space.<br />Intention.
          </h1>
        </div>
      </section>

      {/* SITE PLAN */}
      <section className="px-8 md:px-14 py-24 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="label mb-14">Site Plan — 1 Acre</p>
          <div className="bg-[#EDEAE5] p-8 md:p-14 mb-10">
            {/* CSS site plan diagram */}
            <div className="relative w-full aspect-[16/9] border border-[#C8C3BB]">
              {/* Property boundary label */}
              <p className="absolute top-3 left-3 label text-[8px]">Property Boundary — ~200ft × 200ft</p>

              {/* Central path */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[6%] h-[65%] bg-[#D6D0CA]" />

              {/* Units — staggered row */}
              {[
                { left: "18%", bottom: "60%", label: "01" },
                { left: "32%", bottom: "62%", label: "02" },
                { left: "46%", bottom: "60%", label: "03" },
                { left: "60%", bottom: "62%", label: "04" },
              ].map(({ left, bottom, label }) => (
                <div
                  key={label}
                  className="absolute bg-[#0C0C0C] flex items-center justify-center"
                  style={{ left, bottom, width: "12%", height: "4.5%", transform: "translateY(50%)" }}
                >
                  <p className="text-white text-[7px] tracking-widest">{label}</p>
                </div>
              ))}

              {/* Wellness pavilion */}
              <div
                className="absolute bg-[#8C8580] flex items-center justify-center"
                style={{ left: "25%", bottom: "72%", width: "30%", height: "12%" }}
              >
                <p className="text-white text-[8px] tracking-[0.2em] uppercase">Wellness Pavilion</p>
              </div>

              {/* Parking */}
              <div
                className="absolute border border-[#C8C3BB] flex items-center justify-center"
                style={{ right: "10%", bottom: "5%", width: "18%", height: "12%" }}
              >
                <p className="label text-[8px]">Parking</p>
              </div>

              {/* Entrance label */}
              <p className="absolute bottom-3 left-1/2 -translate-x-1/2 label text-[8px]">Entrance</p>

              {/* North indicator */}
              <div className="absolute top-3 right-5 flex flex-col items-center gap-1">
                <div className="w-px h-5 bg-[#9A9490]" />
                <p className="label text-[8px]">N</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              ["Total area", "1+ acre"],
              ["Units", "4 × 40ft containers"],
              ["Orientation", "Staggered row"],
              ["Parking", "8 spaces"],
            ].map(([label, value]) => (
              <div key={label} className="border-t pt-5" style={{ borderColor: "var(--border)" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "var(--fg)" }}>{value}</p>
                <p className="label">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIT FLOOR PLAN */}
      <section className="bg-[#0C0C0C] px-8 md:px-14 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="label text-white/30 mb-14">Unit Floor Plan — 40ft Container</p>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              {/* CSS floor plan */}
              <div className="bg-[#1A1A1A] p-8 md:p-10">
                <div className="relative border border-white/20" style={{ aspectRatio: "40/8", width: "100%" }}>
                  {/* Deck */}
                  <div className="absolute inset-y-0 left-0 w-[15%] border-r border-white/20 flex items-end justify-center pb-2">
                    <p className="text-white/25 text-[7px] tracking-widest rotate-0">DECK</p>
                  </div>
                  {/* Living/Sleeping */}
                  <div className="absolute inset-y-0 left-[15%] w-[45%] border-r border-white/20 flex items-center justify-center">
                    <p className="text-white/25 text-[7px] tracking-widest">LIVING / SLEEP</p>
                  </div>
                  {/* Bath */}
                  <div className="absolute inset-y-0 left-[60%] w-[20%] border-r border-white/20 flex items-center justify-center">
                    <p className="text-white/25 text-[7px] tracking-widest">BATH</p>
                  </div>
                  {/* Kitchen */}
                  <div className="absolute inset-y-0 left-[80%] w-[20%] flex items-center justify-center">
                    <p className="text-white/25 text-[7px] tracking-widest">KIT.</p>
                  </div>
                  {/* Dimension labels */}
                  <div className="absolute -bottom-7 left-0 right-0 flex justify-between">
                    <p className="text-white/20 text-[8px]">0</p>
                    <p className="text-white/20 text-[8px]">40 ft</p>
                  </div>
                </div>
                <p className="text-white/20 text-[8px] mt-10 tracking-widest uppercase">8 ft wide · 320 sq ft interior</p>
              </div>
            </div>
            <div>
              <h2 className="text-white font-bold mb-8" style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)", lineHeight: 1, letterSpacing: "-0.02em" }}>
                Each unit.<br />Every detail.
              </h2>
              <div className="space-y-0">
                {[
                  ["Exterior", "Powder-coated corrugated steel, matte black"],
                  ["Glazing", "Full-height sliding glass, aluminium frame"],
                  ["Floor", "Engineered oak, radiant heat below"],
                  ["Walls", "Micro-cement render, natural finish"],
                  ["Bed", "King platform, linen bedding"],
                  ["Bath", "Wet-room format, rain head"],
                  ["Kitchen", "Induction, bar fridge, pour-over station"],
                  ["Climate", "Mini-split, radiant heat, mechanical ventilation"],
                  ["Lighting", "Recessed warm LED, 2700K"],
                  ["Connectivity", "Starlink / fibre"],
                ].map(([key, val]) => (
                  <div key={key} className="flex gap-4 py-4 border-t border-white/8">
                    <p className="text-white/30 text-xs w-24 shrink-0">{key}</p>
                    <p className="text-white/65 text-xs leading-relaxed">{val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WELLNESS PAVILION PLAN */}
      <section className="px-8 md:px-14 py-24 border-b" style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="label mb-14">Wellness Pavilion</p>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="border p-8 md:p-10" style={{ borderColor: "var(--border)" }}>
                {/* Wellness plan diagram */}
                <div className="relative border border-[#C0BBB5]" style={{ aspectRatio: "3/2" }}>
                  {/* Steam sauna */}
                  <div className="absolute border border-[#C0BBB5] flex items-center justify-center"
                    style={{ left: "5%", top: "5%", width: "40%", height: "35%" }}>
                    <p className="label text-[8px]">Steam Sauna</p>
                  </div>
                  {/* Dry sauna */}
                  <div className="absolute border border-[#C0BBB5] flex items-center justify-center"
                    style={{ left: "55%", top: "5%", width: "40%", height: "35%" }}>
                    <p className="label text-[8px]">Dry Sauna</p>
                  </div>
                  {/* Onsen */}
                  <div className="absolute bg-[#D6D0CA] flex items-center justify-center"
                    style={{ left: "5%", top: "55%", width: "40%", height: "35%" }}>
                    <p className="label text-[8px]">Onsen Bath</p>
                  </div>
                  {/* Ice bath */}
                  <div className="absolute bg-[#BFD4D8] flex items-center justify-center"
                    style={{ left: "55%", top: "55%", width: "40%", height: "35%" }}>
                    <p className="label text-[8px]">Ice Bath</p>
                  </div>
                  {/* Center corridor */}
                  <div className="absolute bg-[#EDEAE5]"
                    style={{ left: "43%", top: "0%", width: "14%", height: "100%" }} />
                </div>
                <p className="label text-[8px] mt-6">Approx. 800 sq ft enclosed + open terrace</p>
              </div>
            </div>
            <div>
              <h2 className="display-md mb-8" style={{ color: "var(--fg)" }}>
                The<br />Commons.
              </h2>
              <div className="space-y-0">
                {[
                  ["Steam Sauna", "Wet heat, concrete bench, eucalyptus infusion"],
                  ["Dry Sauna", "Cedar lined, Finnish kiuas, 80–100°C"],
                  ["Onsen Bath", "Mineral water, 38–40°C, open-air adjacent"],
                  ["Ice Bath", "Cold plunge 4–8°C, adjacent to sauna"],
                  ["Construction", "Exposed board-formed concrete"],
                  ["Lighting", "Recessed amber, no overhead fixture"],
                  ["Hours", "Dawn to midnight, keycard access"],
                ].map(([key, val]) => (
                  <div key={key} className="flex gap-4 py-4 border-t" style={{ borderColor: "var(--border)" }}>
                    <p className="text-xs w-28 shrink-0" style={{ color: "var(--subtle)" }}>{key}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--fg)", opacity: 0.65 }}>{val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="px-8 md:px-14 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-12">
          <Link href="/" className="text-[10px] tracking-[0.35em] uppercase hover:opacity-60 transition-opacity" style={{ color: "var(--fg)" }}>← Home</Link>
          <Link href="/financing" className="text-[10px] tracking-[0.35em] uppercase hover:opacity-60 transition-opacity" style={{ color: "var(--fg)" }}>View Financing ↗</Link>
          <a href="mailto:hello@theblanc.io" className="text-[10px] tracking-[0.35em] uppercase hover:opacity-60 transition-opacity" style={{ color: "var(--fg)" }}>hello@theblanc.io ↗</a>
        </div>
      </section>
    </main>
  );
}
