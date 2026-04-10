import { useState } from "react";

const programs = [
  {
    id: "peer",
    tag: "Most Popular",
    tagBg: "bg-accent text-primary-dark",
    title: "Peer Mediation Training",
    audience: "Students, Educators & Institutions",
    schedule: "Quarterly (Weekly Sessions)",
    duration: "One Quarter",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="32" cy="16" r="6" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M4 38c0-6 5-10 12-10M32 28c7 0 12 4 12 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M22 32c-5 0-8 2-8 6M26 32c5 0 8 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <circle cx="24" cy="28" r="5" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    color: "text-primary",
    bg: "bg-primary/8",
    activeBorder: "border-primary",
    activeIcon: "bg-primary",
    modules: [
      "Peer mediation skills & techniques",
      "Conflict resolution fundamentals",
      "Practical simulations & role-play",
      "Communication & active listening",
      "Ethics in peer mediation",
    ],
    outcome: "Certified Peer Mediator",
  },
  {
    id: "professional",
    tag: "Revenue Driver",
    tagBg: "bg-primary text-white",
    title: "Professional Mediation Training",
    audience: "Individuals Seeking Certification",
    schedule: "Quarterly",
    duration: "One Quarter",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M16 20h16M16 26h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M30 34l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="10" r="4" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    color: "text-secondary",
    bg: "bg-secondary/8",
    activeBorder: "border-secondary",
    activeIcon: "bg-secondary",
    modules: [
      "Foundational & advanced mediation skills",
      "Practical case handling & strategy",
      "Professional ethics & standards",
      "Psychology's role in mediation",
      "Settlement drafting & documentation",
    ],
    outcome: "Certified Professional Mediator",
    price: "₦250,000",
  },
  {
    id: "women",
    tag: "Social Impact",
    tagBg: "bg-accent/20 text-accent-dark",
    title: "Women Outreach Training",
    audience: "Women in Communities & Families",
    schedule: "Quarterly",
    duration: "One Quarter",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M24 24v14M18 32h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M12 42c2-4 6-6 12-6s10 2 12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    color: "text-accent-dark",
    bg: "bg-accent/8",
    activeBorder: "border-accent",
    activeIcon: "bg-accent",
    modules: [
      "Conflict awareness & identification",
      "Empowerment through mediation",
      "Family & community dispute tools",
      "Communication & assertiveness",
      "Self-advocacy in conflict situations",
    ],
    outcome: "Mediation Outreach Certificate",
  },
];

export default function TrainingTeaser() {
  const [active, setActive] = useState("professional");

  const current = programs.find((p) => p.id === active);

  return (
    <section className="py-10 bg-white relative overflow-hidden">

      {/* Background accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/4 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-60 h-60 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-accent pb-1">
              Training & Certification
            </span>
            <h2
              className="text-neutral-900 font-bold text-3xl sm:text-4xl mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Become a{" "}
              <span className="text-primary">Certified Mediator</span>
            </h2>
            <p className="text-neutral-500 text-base leading-relaxed">
              We run structured quarterly training programs across three tracks,
              designed for students, professionals, and women seeking empowerment
              through conflict resolution.
            </p>
          </div>

          {/* Price highlight */}
          <div className="flex lg:justify-end">
            <div className="inline-flex items-center gap-4 bg-primary/5 border border-primary/15 rounded-2xl px-6 py-4">
              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-widest mb-1">
                  Professional Certification Fee
                </p>
                <p
                  className="text-primary font-black text-3xl"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  ₦250,000
                </p>
                <p className="text-neutral-400 text-xs mt-0.5">One-time · Includes certification</p>
              </div>
              <a
                href="/training"
                className="px-5 py-3 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-light transition-colors duration-200 whitespace-nowrap shadow-md"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>

        {/* Program tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {programs.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`
                relative flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-semibold border
                transition-all duration-300
                ${active === p.id
                  ? `${p.activeBorder} bg-white shadow-md text-neutral-900`
                  : "border-neutral-200 bg-neutral-50 text-neutral-500 hover:border-neutral-300"
                }
              `}
            >
              {/* Active indicator dot */}
              {active === p.id && (
                <span className={`w-2 h-2 rounded-full ${p.activeIcon} flex-shrink-0`} />
              )}
              {p.title.split(" ").slice(0, 2).join(" ")}
              {/* Tag */}
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${p.tagBg}`}>
                {p.tag}
              </span>
            </button>
          ))}
        </div>

        {/* Active program detail */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Main card */}
          <div className="lg:col-span-2 bg-neutral-50 rounded-2xl border border-neutral-200 p-8">
            <div className="flex items-start gap-5 mb-6">
              <div className={`w-16 h-16 rounded-2xl ${current.bg} ${current.color} flex items-center justify-center flex-shrink-0`}>
                {current.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <h3
                      className="text-neutral-900 font-bold text-xl"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {current.title}
                    </h3>
                    <p className="text-neutral-500 text-sm mt-1">{current.audience}</p>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${current.tagBg}`}>
                    {current.tag}
                  </span>
                </div>
              </div>
            </div>

            {/* Schedule info pills */}
            <div className="flex flex-wrap gap-3 mb-7">
              {[
                { label: current.schedule },
                { label: current.duration },
                { label: "In-person & Online" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white border border-neutral-200 rounded-lg px-3 py-2 text-xs text-neutral-600">
                  <span>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>

            {/* Modules */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
                What You'll Learn
              </p>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {current.modules.map((mod, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <svg className={`w-4 h-4 ${current.color} mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {mod}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Side panel */}
          <div className="flex flex-col gap-4">

            {/* Outcome card */}
            <div className={`rounded-2xl border ${current.activeBorder} bg-white p-6 text-center`}>
              <span className="text-4xl mb-3 block">{current.outcomeIcon}</span>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
                You'll Receive
              </p>
              <p
                className={`font-bold text-lg ${current.color}`}
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {current.outcome}
              </p>
              <div className={`mt-4 h-1 rounded-full ${current.activeIcon} opacity-20`} />
            </div>

            {/* CTA card */}
            <div className="rounded-2xl bg-secondary-dark p-6 text-white flex-1 flex flex-col justify-between">
              <div>
                <p className="font-bold text-lg mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                  Ready to get started?
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  Join our next quarterly cohort. Seats are limited; secure yours today.
                </p>
              </div>
              <div className="space-y-2">
                <a
                  href="/training"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-accent text-primary-dark font-bold text-sm rounded-xl hover:bg-accent-light transition-colors duration-200"
                >
                  Enroll Now
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="flex items-center justify-center w-full py-3 bg-white/10 text-white font-semibold text-sm rounded-xl hover:bg-white/20 transition-colors duration-200 border border-white/15"
                >
                  Ask a Question
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4">
          <div className="flex flex-wrap gap-6">
            {[
              { label: "Certificate Issued on Completion" },
              { label: "Quarterly Intake: All Year Round" },
              { label: "Open to Participants Across Africa" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                <span>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
          <a
            href="/training"
            className="text-primary text-sm font-bold hover:underline underline-offset-2"
          >
            View all programs →
          </a>
        </div>

      </div>
    </section>
  );
}