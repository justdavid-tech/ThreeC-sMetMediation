import { useState } from "react";

const pillars = [
  {
    step: "01",
    title: "Counseling",
    tagline: "Prepare the Heart",
    color: "from-primary/10 to-primary/5",
    borderColor: "border-primary/30",
    activeColor: "bg-primary",
    textColor: "text-primary",
    dotColor: "bg-primary",
    description:
      "Before resolution can happen, parties must be emotionally and psychologically prepared. Our conflict-focused counseling equips individuals with clarity, emotional balance, and the right mindset to engage productively.",
    points: [
      "Conflict coaching & emotional support",
      "Relationship & interpersonal guidance",
      "Workplace behavioral dynamics",
      "Youth & peer mediation support",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="13" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M26 20l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    href: "/services/counseling",
  },
  {
    step: "02",
    title: "Negotiation",
    tagline: "Engage Strategically",
    color: "from-primary/10 to-primary/5",
    borderColor: "border-primary/30",
    activeColor: "bg-primary",
    textColor: "text-primary",
    dotColor: "bg-primary",
    description:
      "Structured engagement between parties with professional strategy. We provide advisory, representation, coaching, and negotiation planning, ensuring every party communicates with purpose and precision.",
    points: [
      "Negotiation advisory & strategy",
      "Client representation in talks",
      "Coaching & training programs",
      "Agreement structuring & closing",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 20h24M20 8v24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <rect x="13" y="13" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 20h8M20 16v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    href: "/services/negotiation",
  },
  {
    step: "03",
    title: "Mediation",
    tagline: "Find Common Ground",
    color: "from-primary/10 to-primary/5",
    borderColor: "border-primary/30",
    activeColor: "bg-primary",
    textColor: "text-primary",
    dotColor: "bg-primary",
    description:
      "A confidential, voluntary process where a neutral third party guides disputing parties toward a mutually acceptable resolution without litigation. Our flagship service, practiced across 12+ dispute categories.",
    points: [
      "Commercial & contractual disputes",
      "Family, workplace & community",
      "Oil & Gas, Tax & Environmental",
      "Criminal & policy mediation",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6v4M20 30v4M6 20h4M30 20h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 20c0-3.314 2.686-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="2" fill="currentColor"/>
      </svg>
    ),
    href: "/services/mediation",
  },
  {
    step: "04",
    title: "Conciliation",
    tagline: "Guided Settlement",
    color: "from-primary/10 to-primary/5",
    borderColor: "border-primary/30",
    activeColor: "bg-primary",
    textColor: "text-primary",
    dotColor: "bg-primary",
    description:
      "Where parties cannot reach agreement independently, our conciliator takes a more active role by proposing solutions, identifying common ground, and facilitating expert-driven settlements that work for everyone.",
    points: [
      "Industrial & labour disputes",
      "Institutional & organizational conflict",
      "Expert-proposed settlement options",
      "Accelerated resolution process",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 28l6-6 4 4 10-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 8c6.627 0 12 5.373 12 12s-5.373 12-12 12S8 26.627 8 20 13.373 8 20 8z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    href: "/services/conciliation",
  },
];

export default function Pillars() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-24 bg-neutral-50 relative overflow-hidden">

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #0B5D3B 0px,
            #0B5D3B 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-accent pb-1">
            Our Framework
          </span>
          <h2
            className="text-neutral-900 font-bold text-3xl sm:text-4xl mb-5"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Four Pillars of Resolution
          </h2>
          <p className="text-neutral-500 text-base leading-relaxed">
            Our services are not isolated offerings; they form a connected, progressive
            framework designed to take you from conflict to lasting peace.
          </p>
        </div>

        {/* Flow connector line (desktop) */}
        <div className="hidden lg:flex items-center justify-center mb-12 px-8">
          <div className="flex items-center w-full max-w-4xl">
            {pillars.map((pillar, i) => (
              <div key={i} className="flex items-center flex-1">
                {/* Node */}
                <div className="flex flex-col items-center gap-1.5">
                  <div className={`w-3 h-3 rounded-full ${pillar.dotColor} ring-4 ring-white shadow-md`} />
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-medium">
                    {pillar.title}
                  </span>
                </div>
                {/* Connector */}
                {i < pillars.length - 1 && (
                  <div className="flex-1 h-px bg-gradient-to-r from-neutral-300 to-neutral-200 mx-2 relative">
                    <svg className="absolute -top-2 right-2 w-4 h-4 text-neutral-300" fill="none" viewBox="0 0 16 16">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className={`
                group relative flex flex-col rounded-2xl border p-6 cursor-pointer
                transition-all duration-300
                ${active === i
                  ? `${pillar.borderColor} shadow-xl -translate-y-1 bg-white`
                  : "border-neutral-200 bg-white shadow-sm hover:shadow-md"
                }
              `}
            >
              {/* Step number */}
              <span
                className="absolute top-5 right-5 text-5xl font-black leading-none select-none transition-all duration-300"
                style={{
                  fontFamily: "'Georgia', serif",
                  color: active === i ? "rgba(0,0,0,0.05)" : "rgba(0,0,0,0.04)",
                }}
              >
                {pillar.step}
              </span>

              {/* Icon */}
              <div
                className={`
                  w-14 h-14 rounded-xl flex items-center justify-center mb-5
                  transition-all duration-300
                  ${active === i ? `${pillar.activeColor} text-white` : `bg-gradient-to-br ${pillar.color} ${pillar.textColor}`}
                `}
              >
                {pillar.icon}
              </div>

              {/* Title & tagline */}
              <h3
                className={`font-bold text-lg mb-1 transition-colors duration-300 ${active === i ? pillar.textColor : "text-neutral-800"}`}
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {pillar.title}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
                {pillar.tagline}
              </p>

              {/* Description */}
              <p className="text-neutral-500 text-sm leading-relaxed mb-5 flex-1">
                {pillar.description}
              </p>

              {/* Points */}
              <ul className="space-y-2 mb-6">
                {pillar.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-xs text-neutral-600">
                    <span className={`w-1.5 h-1.5 rounded-full ${pillar.dotColor} mt-1.5 flex-shrink-0`} />
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA link */}
              <a
                href={pillar.href}
                className={`
                  inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider
                  transition-all duration-200 group-hover:gap-2.5 text-[#0B5D3B]
                  ${pillar.textColor}
                `}
              >
                Learn More
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}