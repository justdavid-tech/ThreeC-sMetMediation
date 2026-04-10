import { useState } from "react";

const differentiators = [
  {
    id: 1,
    stat: "#1",
    statLabel: "in Africa",
    title: "Pioneers in Peer Mediation",
    description:
      "We were the first to develop and advance structured peer mediation programs across Africa, embedding conflict resolution skills in schools, institutions, and youth communities long before it became mainstream.",
    highlight: "648+ children certified as peer mediators across Nigeria, Uganda & Malawi.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6l4.5 9 9.5 1.5-7 6.5 1.5 9.5L24 28l-8.5 4.5 1.5-9.5-7-6.5 9.5-1.5z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M24 28v12M18 40h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    activeBg: "bg-primary",
    activeText: "text-white",
    tag: "Global Impact",
    tagBg: "bg-primary/10 text-primary",
  },
  {
    id: 2,
    stat: "3+",
    statLabel: "Continents",
    title: "International Recognition",
    description:
      "Our peer mediation initiative competed and won against children from across the globe in an international competition organised by NAPP/OPM and sponsored by the JAMS Foundation, putting Nigerian mediators on the world stage.",
    highlight: "Children from Turkey, Malawi & Uganda have participated in our sessions.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M8 24h32M24 8c-4 4-6 10-6 16s2 12 6 16M24 8c4 4 6 10 6 16s-2 12-6 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    activeBg: "bg-primary",
    activeText: "text-white",
    tag: "Global Impact",
    tagBg: "bg-primary/10 text-primary",
  },
  {
    id: 3,
    stat: "4",
    statLabel: "Service Levels",
    title: "Integrated Framework",
    description:
      "Unlike providers who offer isolated services, our four pillars (Counseling, Negotiation, Mediation, and Conciliation) form one seamless, progressive conflict resolution system tailored to each client's unique situation.",
    highlight: "One framework. Four services. Infinite applications.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <rect x="28" y="6" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <rect x="6" y="28" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <rect x="28" y="28" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M20 13h8M13 20v8M35 20v8M20 35h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    activeBg: "bg-primary",
    activeText: "text-white",
    tag: "Global Impact",
    tagBg: "bg-primary/10 text-primary",
  },
  {
    id: 4,
    stat: "3",
    statLabel: "Specialized Arms",
    title: "Structured Institutional Design",
    description:
      "We operate through three distinct but coordinated arms: a Secretariat, a Social Impact Centre, and a Training Institute, giving us the capacity to deliver professional services, social programs, and certified education simultaneously.",
    highlight: "No other mediation body in Nigeria operates with this level of institutional structure.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6v8M24 34v8M6 24h8M34 24h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="6" r="2.5" fill="currentColor"/>
        <circle cx="24" cy="42" r="2.5" fill="currentColor"/>
        <circle cx="6" cy="24" r="2.5" fill="currentColor"/>
        <circle cx="42" cy="24" r="2.5" fill="currentColor"/>
      </svg>
    ),
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    activeBg: "bg-primary",
    activeText: "text-white",
    tag: "Institutional",
    tagBg: "bg-primary/10 text-primary",
  },
];

export default function WhatMakesDifferent() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-24 bg-neutral-900 relative overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #D4AF37 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute -right-32 top-1/3 w-64 h-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-accent pb-1">
            Why Choose Us
          </span>
          <h2
            className="text-white font-bold text-3xl sm:text-4xl mb-5"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            What Sets Us{" "}
            <span className="text-primary">Apart</span>
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed">
            We are not just mediators. We are shaping the future of conflict resolution
            through innovation, training, outreach, and institutional development.
          </p>
        </div>

        {/* Differentiators grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentiators.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`
                group relative rounded-2xl border p-6 cursor-default
                transition-all duration-300
                ${hovered === i
                  ? `border-white/10 bg-white/5 -translate-y-1 shadow-2xl shadow-black/30`
                  : "border-white/5 bg-white/3 hover:border-white/10"
                }
              `}
              style={{ backgroundColor: hovered === i ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)" }}
            >
              {/* Top row: icon + stat */}
              <div className="flex items-start justify-between mb-5">
                {/* Icon */}
                <div
                  className={`
                    w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0
                    transition-all duration-300
                    ${hovered === i ? `${item.activeBg} text-white` : `${item.bg} ${item.color}`}
                  `}
                >
                  {item.icon}
                </div>

                {/* Stat */}
                <div className="text-right">
                  <p
                    className="text-white font-black text-2xl leading-none"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {item.stat}
                  </p>
                  <p className="text-neutral-500 text-[10px] uppercase tracking-wider mt-0.5">
                    {item.statLabel}
                  </p>
                </div>
              </div>

              {/* Tag */}
              <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 ${item.tagBg}`}>
                {item.tag}
              </span>

              {/* Title */}
              <h3
                className="text-white font-bold text-lg mb-3 leading-snug"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Highlight quote */}
              <div className={`border-l-2 ${item.border} pl-3 py-1`}>
                <p className={`text-xs italic ${item.color} leading-relaxed`}>
                  {item.highlight}
                </p>
              </div>

              {/* Hover glow */}
              {hovered === i && (
                <div className={`absolute inset-0 rounded-2xl opacity-5 ${item.activeBg} pointer-events-none`} />
              )}
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 text-center">
          <div className="inline-block border border-accent/20 rounded-2xl px-8 py-6 max-w-2xl">
            <p
              className="text-white text-lg font-bold mb-2"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              "We are not just mediators,
            </p>
            <p className="text-accent text-lg font-bold italic" style={{ fontFamily: "'Georgia', serif" }}>
              we are shaping the future of mediation."
            </p>
            <p className="text-neutral-500 text-sm mt-3">
              Chief Chijioke Nnanna Ibeku, Founder & Lead Mediator
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}