import { useState } from "react";
import { Link } from "react-router-dom";

const levels = [
  {
    id: "dispute",
    number: "01",
    label: "Dispute Resolution",
    title: "Direct Mediation Services",
    tagline: "We step in. We resolve.",
    link: "/services",
    color: "primary",
    borderColor: "border-primary",
    bgColor: "bg-primary",
    lightBg: "bg-primary/5",
    textColor: "text-primary",
    description:
      "At the core of our practice, we serve as neutral third parties, facilitating dialogue, managing communication, reducing hostility, and guiding parties toward mutually acceptable solutions across a wide range of dispute categories.",
    items: [
      { label: "Commercial & Contractual Disputes" },
      { label: "Family & Relationship Conflicts" },
      { label: "Workplace & Employment Issues" },
      { label: "Community & Institutional Disputes" },
      { label: "Oil & Gas Dispute Mediation" },
      { label: "Environmental Dispute Mediation" },
      { label: "Tax & Criminal Mediation" },
      { label: "Interreligious & Cultural Disputes" },
      { label: "Policy Matters Mediation" },
      { label: "Landlord & Tenant Disputes" },
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6v36M12 18l12-12 12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 30h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3"/>
        <circle cx="24" cy="30" r="4" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: "capacity",
    number: "02",
    label: "Capacity Building",
    title: "Training & Certification",
    tagline: "We teach. We certify.",
    link: "/training",
    color: "primary",
    borderColor: "border-primary",
    bgColor: "bg-primary",
    lightBg: "bg-primary/5",
    textColor: "text-primary",
    description:
      "A significant part of our work is producing the next generation of mediators. We run structured quarterly training programs across three tracks: peer mediation, professional certification, and women-focused outreach training.",
    items: [
      { label: "Peer Mediation Training: Students & Educators" },
      { label: "Professional Mediator Certification" },
      { label: "Women Outreach Mediation Training" },
      { label: "Certification Fee: ₦250,000" },
    ],
    programs: [
      {
        name: "Peer Mediation Training",
        audience: "Students, Educators & Institutions",
        schedule: "Quarterly (Weekly sessions)",
        focus: "Peer mediation skills, conflict resolution techniques, simulations",
      },
      {
        name: "Professional Mediation Training",
        audience: "Individuals seeking certification",
        schedule: "Quarterly",
        focus: "Foundational & advanced skills, case handling, ethics",
      },
      {
        name: "Women Outreach Training",
        audience: "Women in underserved communities",
        schedule: "Quarterly",
        focus: "Conflict awareness, empowerment, practical dispute tools",
      },
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="14" width="36" height="24" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M16 14V10a2 2 0 012-2h12a2 2 0 012 2v4" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 22v8M20 26h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "impact",
    number: "03",
    label: "Social Impact",
    title: "Peer Mediation & Outreach",
    tagline: "We pioneer. We empower.",
    link: "/about",
    color: "primary",
    borderColor: "border-primary",
    bgColor: "bg-primary",
    lightBg: "bg-primary/5",
    textColor: "text-primary",
    description:
      "We are not just mediators; we are pioneers shaping the future of conflict resolution in Africa. Through peer mediation for youth, structured outreach for women, and integration into traditional institutions, we embed peace at the grassroots.",
    items: [
      { label: "648+ Children Certified as Peer Mediators" },
      { label: "Active in Nigeria, Uganda & Malawi" },
      { label: "International Competition Winners (NAPP/OPM/JAMS)" },
      { label: "Women Empowerment Through Mediation Access" },
      { label: "Mediation in Traditional & Cultural Institutions" },
    ],
    initiatives: [
      {
        name: "Peer Mediation Initiative",
        description: "Designing & implementing peer mediation programs in schools. Training youth to become certified peer mediators across Africa.",
        stat: "648+ Certified",
      },
      {
        name: "Women Outreach Program",
        description: "Providing structured access to mediation for underserved women, giving them a platform to be heard in family, community, and economic disputes.",
        stat: "Quarterly Programs",
      },
      {
        name: "Traditional Institutions",
        description: "Developing adaptable mediation frameworks for traditional settings, bridging modern techniques with cultural dispute resolution systems.",
        stat: "Ongoing",
      },
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="20" r="6" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M10 40c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M34 12a6 6 0 010 12M14 12a6 6 0 000 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
];

export default function WhatWeDo() {
  const [activeLevel, setActiveLevel] = useState("dispute");

  const active = levels.find((l) => l.id === activeLevel);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full bg-primary/3 blur-3xl pointer-events-none" />
      <div className="absolute -left-40 -bottom-40 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-accent pb-1">
            What We Do
          </span>
          <h2
            className="text-neutral-900 font-bold text-3xl sm:text-4xl mb-5"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Mediation That Goes
            <br />
            <span className="text-primary">Beyond the Room</span>
          </h2>
          <p className="text-neutral-500 text-base leading-relaxed">
            Our mediation practice operates on three levels: each essential,
            each interconnected, each driving real-world impact.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap gap-3 mb-12">
          {levels.map((level) => (
            <button
              key={level.id}
              onClick={() => setActiveLevel(level.id)}
              className={`
                flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-semibold
                transition-all duration-300 border
                ${activeLevel === level.id
                  ? `${level.bgColor} text-white border-transparent shadow-lg`
                  : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300"
                }
              `}
            >
              <span
                className={`text-xs font-black ${activeLevel === level.id ? "text-white/60" : "text-neutral-400"}`}
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {level.number}
              </span>
              {level.label}
            </button>
          ))}
        </div>

        {/* Active content panel */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left — main info */}
          <div
            key={active.id}
            className={`rounded-2xl border-l-4 ${active.borderColor} bg-neutral-50 p-8`}
            style={{ animation: "fadeSlideIn 0.35s ease" }}
          >
            {/* Icon + title */}
            <div className="flex items-start gap-5 mb-6">
              <div className={`w-16 h-16 rounded-2xl ${active.lightBg} ${active.textColor} flex items-center justify-center flex-shrink-0`}>
                {active.icon}
              </div>
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest ${active.textColor} mb-1`}>
                  Level {active.number}
                </p>
                <h3
                  className="text-neutral-900 font-bold text-2xl"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {active.title}
                </h3>
                <p className="text-neutral-500 text-sm mt-1 italic">{active.tagline}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              {active.description}
            </p>

            {/* Items list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {active.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <svg className={`w-4 h-4 ${active.textColor} mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — sub-cards (programs or initiatives) */}
          <div className="space-y-4" key={active.id + "-cards"}>
            {active.programs &&
              active.programs.map((prog, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-neutral-200 p-5 hover:shadow-md transition-shadow duration-200"
                  style={{ animation: `fadeSlideIn ${0.2 + i * 0.1}s ease` }}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="font-semibold text-neutral-800 text-sm">{prog.name}</h4>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${active.lightBg} ${active.textColor} whitespace-nowrap`}>
                      {prog.schedule}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 mb-2">
                    <span className="font-medium text-neutral-600">Audience:</span> {prog.audience}
                  </p>
                  <p className="text-xs text-neutral-500">
                    <span className="font-medium text-neutral-600">Focus:</span> {prog.focus}
                  </p>
                </div>
              ))}

            {active.initiatives &&
              active.initiatives.map((init, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-neutral-200 p-5 hover:shadow-md transition-shadow duration-200"
                  style={{ animation: `fadeSlideIn ${0.2 + i * 0.1}s ease` }}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="font-semibold text-neutral-800 text-sm">{init.name}</h4>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${active.lightBg} ${active.textColor} whitespace-nowrap`}>
                      {init.stat}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 leading-relaxed">{init.description}</p>
                </div>
              ))}

            {/* CTA at bottom of right col */}
            <div className={`rounded-xl ${active.lightBg} border ${active.borderColor} p-5 flex items-center justify-between gap-4`}>
              <p className="text-sm font-medium text-neutral-700">
                Want to learn more about {active.label.toLowerCase()}?
              </p>
              <Link
                to={active.link}
                className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${active.textColor} whitespace-nowrap hover:gap-3 transition-all duration-200`}
              >
                Explore
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Fade-in animation */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}