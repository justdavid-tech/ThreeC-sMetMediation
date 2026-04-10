import { useState } from "react";

const programs = [
  {
    id: "professional",
    tag: "Certification Program",
    tagBg: "bg-primary text-white",
    badge: "Most Sought After",
    badgeBg: "bg-primary text-white",
    title: "Professional Mediation Training",
    subtitle: "Become a Certified Mediator",
    audience: "Lawyers, HR Professionals, Business Executives, Consultants & anyone passionate about ADR",
    schedule: "Quarterly",
    duration: "One Quarter",
    format: "In-person & Online",
    price: "₦250,000",
    priceNote: "One-time fee · Certificate included",
    color: "text-primary",
    bg: "bg-primary/8",
    border: "border-primary",
    activeBg: "bg-primary",
    lightBg: "bg-primary/5",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M16 20h16M16 26h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M30 34l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="10" r="4" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    modules: [
      { title: "Foundations of Mediation", desc: "History, principles, and the philosophy of ADR" },
      { title: "Advanced Mediation Skills", desc: "Techniques, strategies, and managing difficult parties" },
      { title: "Psychology in Mediation", desc: "Understanding emotions, behavior, and decision-making" },
      { title: "Practical Case Handling", desc: "Real-world case simulations and role-play scenarios" },
      { title: "Ethics & Professional Standards", desc: "Codes of conduct, neutrality, and confidentiality" },
      { title: "Settlement Drafting", desc: "Documenting and formalizing mediation agreements" },
    ],
    outcomes: [
      "Certified Professional Mediator status",
      "Ability to handle commercial, family & workplace disputes",
      "Membership in our growing mediator network",
      "Access to case referrals from the Institute",
    ],
    certificate: "Certificate of Professional Mediation",
    certificateIcon: "",
  },
  {
    id: "peer",
    tag: "Youth Program",
    tagBg: "bg-primary/20 text-primary",
    badge: "Africa's Pioneer",
    badgeBg: "bg-primary text-white",
    title: "Peer Mediation Training",
    subtitle: "Conflict Resolution for the Next Generation",
    audience: "Students, Educators, School Administrators & Institutions",
    schedule: "Quarterly — Weekly Sessions",
    duration: "One Quarter",
    format: "In-person",
    price: "Contact Us",
    priceNote: "Institutional & school packages available",
    color: "text-primary",
    bg: "bg-primary/8",
    border: "border-primary",
    activeBg: "bg-primary",
    lightBg: "bg-primary/5",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="32" cy="16" r="6" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M4 38c0-6 5-10 12-10M32 28c7 0 12 4 12 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M22 32c-5 0-8 2-8 6M26 32c5 0 8 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <circle cx="24" cy="28" r="5" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    modules: [
      { title: "What is Conflict?", desc: "Understanding the nature and sources of conflict" },
      { title: "Peer Mediation Skills", desc: "Listening, empathy, and structured dialogue techniques" },
      { title: "The Mediation Process", desc: "Step-by-step walkthrough of a peer mediation session" },
      { title: "Communication Techniques", desc: "Active listening, questioning, and reframing" },
      { title: "Practical Simulations", desc: "Role-play exercises and real scenario practice" },
      { title: "Ethics for Young Mediators", desc: "Confidentiality, fairness, and peer responsibility" },
    ],
    outcomes: [
      "Certified Peer Mediator designation",
      "Ability to mediate disputes among peers",
      "Eligibility for national & international competitions",
      "Leadership and communication skills development",
    ],
    certificate: "Certificate of Peer Mediation",
    certificateIcon: "",
  },
  {
    id: "women",
    tag: "Outreach Program",
    tagBg: "bg-primary/20 text-primary",
    badge: "Social Impact",
    badgeBg: "bg-primary text-white",
    title: "Women Outreach Mediation Training",
    subtitle: "Empowering Women Through Conflict Resolution",
    audience: "Women in families, communities & underserved groups across Nigeria",
    schedule: "Quarterly",
    duration: "One Quarter",
    format: "In-person",
    price: "Contact Us",
    priceNote: "Subsidized & sponsored programs available",
    color: "text-primary",
    bg: "bg-primary/8",
    border: "border-primary",
    activeBg: "bg-primary",
    lightBg: "bg-primary/5",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M24 24v14M18 32h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M12 42c2-4 6-6 12-6s10 2 12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    modules: [
      { title: "Understanding Conflict", desc: "Recognizing conflict patterns in families & communities" },
      { title: "Empowerment Through Mediation", desc: "Finding your voice and advocating in disputes" },
      { title: "Family Dispute Resolution", desc: "Tools for handling domestic and family conflicts" },
      { title: "Community Mediation", desc: "Resolving disputes in community and religious settings" },
      { title: "Communication & Assertiveness", desc: "Speaking with confidence and clarity" },
      { title: "Practical Tools", desc: "Exercises and techniques for everyday conflict situations" },
    ],
    outcomes: [
      "Mediation Outreach Certificate",
      "Practical tools for resolving family & community disputes",
      "A strong support network of empowered women",
      "Confidence and voice in conflict situations",
    ],
    certificate: "Mediation Outreach Certificate",
    certificateIcon: "",
  },
];

const faqs = [
  {
    q: "Who can enroll in the Professional Mediation Training?",
    a: "Anyone with a passion for conflict resolution can enroll  lawyers, HR professionals, business executives, consultants, and members of the public. No prior mediation experience is required.",
  },
  {
    q: "How long does the training run?",
    a: "All programs run for one quarter, with weekly sessions throughout the quarter. New cohorts begin every quarter throughout the year.",
  },
  {
    q: "Is the training available online?",
    a: "The Professional Mediation Training is available both in-person and online. Peer Mediation and Women Outreach programs are primarily in-person.",
  },
  {
    q: "What certificate do I receive?",
    a: "Upon successful completion, you receive a Certificate of Professional Mediation from Three C's Met International Institute recognized within the ADR community.",
  },
  {
    q: "What is the certification fee?",
    a: "The Professional Mediation Training fee is ₦250,000 (Two Hundred and Fifty Thousand Naira) only. This is a one-time fee that includes all training materials and your certificate.",
  },
  {
    q: "Are there payment plans available?",
    a: "Please contact us directly to discuss payment arrangements. We are committed to making our training accessible to qualified candidates.",
  },
];

export default function Training() {
  const [activeProgram, setActiveProgram] = useState("professional");
  const [openFaq, setOpenFaq] = useState(null);

  const current = programs.find((p) => p.id === activeProgram);

  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-primary-dark overflow-hidden -mt-[30px]">

  {/* Pattern */}
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage: `radial-gradient(circle, #D4AF37 1px, transparent 1px)`,
      backgroundSize: "36px 36px",
    }}
  />

  {/* Glow effects */}
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 blur-[140px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 blur-[140px] rounded-full" />

  {/* Accent line */}
  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-primary to-transparent" />

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 py-28">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div className="max-w-xl">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">
            Training & Certification
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-white font-bold mb-6 leading-tight"
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Train. Certify.
          <br />
          <span className="bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
            Lead the Change.
          </span>
        </h1>

        {/* Divider */}
        <div className="w-20 h-[2px] bg-primary mb-6 rounded-full" />

        {/* Description */}
        <p className="text-neutral-300 text-lg leading-relaxed mb-10">
          Our structured quarterly training programs are designed to produce
          globally competent mediators from school students to seasoned professionals.
          Join a growing movement shaping the future of peace across Africa.
        </p>

        {/* CTA (NEW — important for conversion) */}
        <div className="flex gap-4">
          <a
            href="/training"
            className="relative inline-flex items-center px-7 py-3.5 bg-primary text-white font-bold text-sm rounded-lg overflow-hidden group"
          >
            <span className="relative z-10 whitespace-nowrap">Apply for Training</span>
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />
          </a>
        </div>
      </div>

      {/* RIGHT SIDE — STATS CARDS */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { value: "3", label: "Training Programs" },
          { value: "Quarterly", label: "Intake" },
          { value: "₦250k", label: "Professional Fee" },
          { value: "648+", label: "Certified So Far" },
        ].map((s, i) => (
          <div 
            key={i} 
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
          >
            <p className="text-primary font-black text-2xl group-hover:scale-110 transition-transform origin-left mb-1" style={{ fontFamily: "'Georgia', serif" }}>
              {s.value}
            </p>
            <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-[0.2em]">
              {s.label}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

      {/* ── PROGRAM SELECTOR ── */}
      <section className=" py-10 bg-white relative overflow-hidden">
        <div className="absolute -right-32 top-0 w-80 h-80 rounded-full bg-primary/4 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 bottom-0 w-60 h-60 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-primary pb-1">
              Our Programs
            </span>
            <h2
              className="text-neutral-900 font-bold text-3xl sm:text-4xl"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Choose Your Path
            </h2>
          </div>

          {/* Program tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {programs.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveProgram(p.id)}
                className={`
                  flex items-center gap-3 px-6 py-3.5 rounded-xl text-sm font-semibold border
                  transition-all duration-300
                  ${activeProgram === p.id
                    ? `${p.activeBg} text-white border-transparent shadow-lg`
                    : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300 hover:shadow-sm"
                  }
                `}
              >
                <span className={`${activeProgram === p.id ? "text-white/70" : "text-neutral-400"} text-xs font-black`}
                  style={{ fontFamily: "'Georgia', serif" }}>
                  {String(programs.indexOf(p) + 1).padStart(2, "0")}
                </span>
                {p.title.split(" ").slice(0, 2).join(" ")}
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full
                  ${activeProgram === p.id ? "bg-white/20 text-white" : p.tagBg}`}>
                  {p.tag.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Active program detail */}
          <div className="grid lg:grid-cols-3 gap-8" key={current.id}>

            {/* Main detail — 2 cols */}
            <div className="lg:col-span-2 space-y-6">

              {/* Header card */}
              <div className={`rounded-2xl border ${current.border} bg-white shadow-sm p-8`}>
                <div className="flex items-start gap-5 mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${current.bg} ${current.color} flex items-center justify-center flex-shrink-0`}>
                    {current.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${current.tagBg}`}>
                        {current.tag}
                      </span>
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${current.badgeBg}`}>
                        {current.badge}
                      </span>
                    </div>
                    <h3
                      className="text-neutral-900 font-bold text-2xl"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {current.title}
                    </h3>
                    <p className={`text-sm font-medium mt-1 ${current.color}`}>{current.subtitle}</p>
                  </div>
                </div>

                {/* Meta pills */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {[
                    { icon: "", label: "Audience", value: current.audience },
                    { icon: "", label: "Schedule", value: current.schedule },
                    { icon: "", label: "Duration", value: current.duration },
                    { icon: "", label: "Format", value: current.format },
                  ].map((m, i) => (
                    <div key={i} className="bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs">
                      <span className="text-neutral-400 block mb-0.5">{m.icon} {m.label}</span>
                      <span className="text-neutral-800 font-semibold">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Audience note */}
                <div className={`${current.lightBg} border ${current.border} rounded-xl px-4 py-3`}>
                  <p className="text-sm text-neutral-700">
                    <span className={`font-semibold ${current.color}`}>Who should attend: </span>
                    {current.audience}
                  </p>
                </div>
              </div>

              {/* Outcomes */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-5">
                  What You Walk Away With
                </p>
                <ul className="space-y-3">
                  {current.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                      <svg className={`w-5 h-5 ${current.color} mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Side panel — 1 col */}
            <div className="space-y-5">

              {/* Price & enroll */}
              <div className={`rounded-2xl border-2 ${current.border} bg-white p-6 shadow-md`}>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
                  Program Fee
                </p>
                <p
                  className={`font-black text-4xl ${current.color} mb-1`}
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {current.price}
                </p>
                <p className="text-neutral-400 text-xs mb-6">{current.priceNote}</p>
                <a
                  href="/contact"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 ${current.activeBg} text-white font-bold text-sm rounded-xl hover:opacity-90 transition-opacity duration-200 shadow-md mb-3`}
                >
                  Enroll Now
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="flex items-center justify-center w-full py-3 bg-neutral-50 text-neutral-600 font-semibold text-sm rounded-xl border border-neutral-200 hover:bg-neutral-100 transition-colors duration-200"
                >
                  Ask a Question
                </a>
              </div>

              {/* Certificate card */}
              <div className="bg-neutral-900 rounded-2xl p-6 text-center relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `radial-gradient(circle, #D4AF37 1px, transparent 1px)`,
                    backgroundSize: "28px 28px",
                  }}
                />
                <div className="relative">
                  <span className="text-5xl block mb-3">{current.certificateIcon}</span>
                  <p className="text-neutral-400 text-xs uppercase tracking-widest mb-2">You'll Receive</p>
                  <p
                    className="text-white font-bold text-base leading-snug"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {current.certificate}
                  </p>
                  <div className="mt-4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  <p className="text-neutral-500 text-xs mt-3">
                    Issued by Three C's Met International Institute
                  </p>
                </div>
              </div>

              {/* Trust signals */}
              <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
                  Why Train With Us
                </p>
                <ul className="space-y-3">
                  {[
                    "Africa's pioneer in peer mediation",
                    "Led by a certified lawyer & mediator",
                    "Practical, not just theoretical",
                    "Growing network of certified graduates",
                    "Internationally recognized program",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-10 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-primary pb-1">
              The Process
            </span>
            <h2
              className="text-neutral-900 font-bold text-3xl sm:text-4xl"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              How Enrollment Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Contact Us", desc: "Reach out via phone, email or the contact form to express your interest and get program details.", icon: "" },
              { step: "02", title: "Make Payment", desc: "Complete your enrollment by making payment of ₦250,000 to Three C's Met Mediators, our Secretariat arm.", icon: "" },
              { step: "03", title: "Attend Sessions", desc: "Join weekly training sessions throughout the quarter in person or online depending on your program.", icon: "" },
              { step: "04", title: "Get Certified", desc: "Upon successful completion, receive your certificate from Three C's Met International Institute.", icon: "" },
            ].map((s, i) => (
              <div key={i} className="relative bg-white rounded-2xl border border-neutral-200 p-6 hover:shadow-md transition-shadow duration-200">
                <span
                  className="absolute top-5 right-5 text-5xl font-black text-neutral-100 leading-none select-none"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {s.step}
                </span>
                <span className="text-3xl block mb-4">{s.icon}</span>
                <h3 className="font-bold text-neutral-900 text-base mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                  {s.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <svg className="w-6 h-6 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-primary pb-1">
              FAQ
            </span>
            <h2
              className="text-neutral-900 font-bold text-3xl sm:text-4xl"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors duration-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-neutral-800 text-sm leading-snug">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40" : "max-h-0"}`}
                >
                  <p className="px-6 pb-5 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}