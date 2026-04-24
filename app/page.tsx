import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-screen overflow-hidden bg-[#0C0C0C]">
        <img
          src="/images/hero.jpg"
          alt="the blanc compound at dusk"
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />
        <div className="relative h-full flex flex-col justify-end px-8 md:px-14 pb-16 md:pb-20">
          <p className="label text-white/50 mb-6">Southern Ontario · Est. 2025</p>
          <h1 className="display text-white mb-8">
            the<br />blanc.
          </h1>
          <p className="text-white/60 text-sm tracking-wide max-w-xs leading-relaxed mb-10">
            Four container retreats. Shared sauna, onsen & ice bath.
            One acre. No city. No noise.
          </p>
          <div className="flex gap-6">
            <Link
              href="/financing"
              className="text-[10px] tracking-[0.35em] uppercase text-white/50 hover:text-white transition-colors border-b border-white/20 pb-1"
            >
              Financing ↗
            </Link>
            <Link
              href="/blueprints"
              className="text-[10px] tracking-[0.35em] uppercase text-white/50 hover:text-white transition-colors border-b border-white/20 pb-1"
            >
              Blueprints ↗
            </Link>
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section className="px-8 md:px-14 py-28 md:py-40" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="label mb-10">Concept</p>
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <h2 className="display-md" style={{ color: "var(--fg)" }}>
                Designed<br />around<br />absence.
              </h2>
            </div>
            <div className="md:pt-4">
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--fg)", opacity: 0.7 }}>
                A compound of four container-sized retreats on open rural land between
                Kitchener and Toronto. No unnecessary surfaces. No city noise.
                Just sky, heat, cold water, and sleep.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "var(--fg)", opacity: 0.7 }}>
                Built for those who need to be somewhere else entirely — and return
                sharper for it.
              </p>
            </div>
          </div>
          <hr className="rule mt-20 mb-16" />
          <div className="grid grid-cols-3 gap-8">
            {[
              { stat: "1+", label: "Acre" },
              { stat: "4", label: "Units" },
              { stat: "3", label: "Shared Amenities" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <p className="text-5xl font-bold tracking-tight mb-2" style={{ color: "var(--fg)" }}>{stat}</p>
                <p className="label">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNITS */}
      <section className="bg-[#0C0C0C]">
        <div className="max-w-7xl mx-auto px-8 md:px-14 py-28 md:py-40">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 aspect-[4/3] overflow-hidden bg-[#1A1A1A]">
              <img
                src="/images/unit-single.jpg"
                alt="container unit at dusk"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="label text-white/40 mb-10">The Units</p>
              <h2 className="display-md text-white mb-8">
                40 ft.<br />steel.<br />light.
              </h2>
              <p className="text-white/55 leading-relaxed mb-10 max-w-sm">
                Each unit occupies a standard 40ft container footprint —
                raw corrugated steel exterior, warm interior, floor-to-ceiling
                glazing facing open field.
              </p>
              <hr className="rule-dark mb-10" />
              <ul className="grid grid-cols-2 gap-3">
                {[
                  "Private bedroom",
                  "Full bathroom",
                  "Kitchenette",
                  "Private deck",
                  "Radiant floor heat",
                  "Blackout blinds",
                  "Wood finishes",
                  "320 sq ft",
                ].map((item) => (
                  <li key={item} className="text-xs text-white/40 tracking-wide">
                    — {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Units aerial image */}
        <div className="aspect-[21/9] overflow-hidden">
          <img
            src="/images/units-aerial.jpg"
            alt="aerial view of the blanc units"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* WELLNESS */}
      <section style={{ backgroundColor: "#E8E4DE" }}>
        <div className="max-w-7xl mx-auto px-8 md:px-14 py-28 md:py-40">
          <p className="label mb-10">The Commons</p>
          <h2 className="display-md mb-20" style={{ color: "var(--fg)" }}>
            Heat. Cold.<br />Stillness.
          </h2>
          <div className="grid md:grid-cols-3 gap-1 mb-1">
            <div className="aspect-square overflow-hidden bg-[#C8C3BB]">
              <img
                src="/images/wellness-1.jpg"
                alt="steam sauna and onsen"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden bg-[#C8C3BB]">
              <img
                src="/images/wellness-2.jpg"
                alt="outdoor plunge pools"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square flex flex-col justify-end p-10 bg-[#0C0C0C]">
              <ul className="space-y-5">
                {[
                  ["Steam Sauna", "Wet heat · Raw concrete"],
                  ["Finnish Dry Sauna", "Cedar · Radiant stone"],
                  ["Onsen Bath", "Mineral heated · Open air"],
                  ["Ice Bath", "Cold plunge · Adjacent"],
                ].map(([name, desc]) => (
                  <li key={name}>
                    <p className="text-white text-sm font-medium">{name}</p>
                    <p className="text-white/35 text-xs tracking-wide mt-0.5">{desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm mt-10" style={{ color: "var(--subtle)" }}>
            Shared between all guests. Designed in raw concrete. Open from dawn to midnight.
          </p>
        </div>
      </section>

      {/* LOCATION */}
      <section className="px-8 md:px-14 py-28 md:py-40" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-32">
            <div>
              <p className="label mb-10">Location</p>
              <h2 className="display-md mb-8" style={{ color: "var(--fg)" }}>
                Southern<br />Ontario.
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: "var(--fg)", opacity: 0.6 }}>
                Targeting 1+ acre parcels in affordable rural areas between
                Kitchener and Toronto — Puslinch, Aberfoyle, Rockwood, and
                surrounding townships.
              </p>
              <p className="leading-relaxed" style={{ color: "var(--fg)", opacity: 0.6 }}>
                No neighbours visible from the property. Open field. Tree line.
                Dark skies at night.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 content-start md:pt-20">
              {[
                { stat: "45–90", label: "min from Toronto" },
                { stat: "1+", label: "acre minimum" },
                { stat: "$350", label: "avg. nightly rate" },
                { stat: "68%", label: "projected occupancy" },
              ].map(({ stat, label }) => (
                <div key={label} className="border-t pt-6" style={{ borderColor: "var(--border)" }}>
                  <p className="text-3xl font-bold tracking-tight mb-1" style={{ color: "var(--fg)" }}>{stat}</p>
                  <p className="label">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-[#0C0C0C] px-8 md:px-14 py-28 md:py-40">
        <div className="max-w-7xl mx-auto">
          <p className="label text-white/30 mb-10">Get Involved</p>
          <h2 className="display text-white mb-16">
            Ready to<br />invest?
          </h2>
          <div className="flex flex-col gap-5 md:flex-row md:gap-12">
            <Link
              href="/financing"
              className="text-xs tracking-[0.35em] uppercase text-white/50 hover:text-white transition-colors border-b border-white/20 pb-2 w-fit"
            >
              Review Financing ↗
            </Link>
            <Link
              href="/blueprints"
              className="text-xs tracking-[0.35em] uppercase text-white/50 hover:text-white transition-colors border-b border-white/20 pb-2 w-fit"
            >
              View Blueprints ↗
            </Link>
            <a
              href="mailto:hello@theblanc.io"
              className="text-xs tracking-[0.35em] uppercase text-white/50 hover:text-white transition-colors border-b border-white/20 pb-2 w-fit"
            >
              hello@theblanc.io ↗
            </a>
          </div>
          <hr className="rule-dark mt-24 mb-10" />
          <div className="flex items-center justify-between">
            <p className="text-white/20 text-xs tracking-widest uppercase">the blanc. · theblanc.io</p>
            <p className="text-white/20 text-xs">© 2025</p>
          </div>
        </div>
      </section>
    </main>
  );
}
