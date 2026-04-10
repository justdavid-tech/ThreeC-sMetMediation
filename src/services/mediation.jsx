import { useState, useEffect, useRef } from "react";
import { 
  FaScaleBalanced, 
  FaLock, 
  FaBolt, 
  FaHandHoldingDollar, 
  FaHandshake, 
  FaCheck, 
  FaBullseye,
  FaBuilding,
  FaBagShopping,
  FaUsers,
  FaHouse,
  FaWrench,
  FaLeaf,
  FaChartBar,
  FaScrewdriverWrench,
  FaDove,
  FaClipboardList,
  FaBrain
} from "react-icons/fa6";

// ── Data ────────────────────────────────────────────────────

const stats = [
  { value: "12+", label: "Dispute Categories" },
  { value: "100%", label: "Confidential" },
  { value: "3x", label: "Faster than Litigation" },
  { value: "648+", label: "Cases & Youth Trained" },
];

const processSteps = [
  {
    number: "1",
    title: "Intake & Conflict Assessment",
    desc: "We begin by understanding the nature of the dispute, the parties involved, and what each side hopes to achieve. This helps us determine the right approach and assign the best mediator.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <rect x="6" y="6" width="28" height="28" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 14h16M12 20h10M12 26h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "2",
    title: "Appointment of Neutral Mediator",
    desc: "A qualified, certified mediator is appointed, someone with no stake in the outcome, committed only to facilitating a fair and structured process.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 8l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "3",
    title: "Pre-Mediation Engagement",
    desc: "Each party meets individually with the mediator before joint sessions begin. This builds trust, clarifies expectations, and ensures everyone enters the process prepared.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <path d="M8 28V14a2 2 0 012-2h20a2 2 0 012 2v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 20h12M14 24h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="20" cy="32" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    number: "4",
    title: "Joint Mediation Sessions",
    desc: "Both parties come together in a structured, safe environment. The mediator guides dialogue, manages tension, helps identify underlying interests, and keeps the conversation productive.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <circle cx="12" cy="16" r="5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="28" cy="16" r="5" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 34c0-5 3-8 8-8M28 26c5 0 8 3 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="22" r="3" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M17 22h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "5",
    title: "Negotiation & Resolution Facilitation",
    desc: "With common ground identified, the mediator facilitates negotiation, helping parties explore options, make concessions, and craft solutions that genuinely work for everyone.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <path d="M10 20h20M20 10v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 14l12 12M26 14L14 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    number: "6",
    title: "Documentation of Agreement",
    desc: "Once resolution is reached, we draft a clear, comprehensive settlement agreement, formalizing the terms and giving both parties a binding record of what was agreed.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <path d="M10 8h20a2 2 0 012 2v20a2 2 0 01-2 2H10a2 2 0 01-2-2V10a2 2 0 012-2z" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 16h12M14 20h12M14 24h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M24 30l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const applicationAreas = [
  { label: "Commercial & Contractual", icon: <FaBuilding /> },
  { label: "Family & Relationship", icon: <FaUsers /> },
  { label: "Workplace & Employment", icon: <FaBagShopping /> },
  { label: "Community & Institutional", icon: <FaUsers /> },
  { label: "Landlord & Tenant", icon: <FaHouse /> },
  { label: "Oil & Gas Disputes", icon: <FaWrench /> },
  { label: "Environmental Mediation", icon: <FaLeaf /> },
  { label: "Tax Dispute Mediation", icon: <FaChartBar /> },
  { label: "Criminal Mediation", icon: <FaScaleBalanced /> },
  { label: "Interreligious & Cultural", icon: <FaDove /> },
  { label: "Policy Matters", icon: <FaClipboardList /> },
  { label: "Psychology in Mediation", icon: <FaBrain /> },
];

const values = [
  {
    icon: <FaLock />,
    title: "Confidential",
    desc: "Everything discussed in mediation stays in mediation. Full discretion, always.",
    color: "text-primary",
  },
  {
    icon: <FaBolt />,
    title: "Fast",
    desc: "Resolve disputes in days or weeks — not the months or years litigation demands.",
    color: "text-primary",
  },
  {
    icon: <FaHandHoldingDollar />,
    title: "Cost-Effective",
    desc: "A fraction of the cost of going to court, without sacrificing the quality of the outcome.",
    color: "text-primary",
  },
  {
    icon: <FaHandshake />,
    title: "Relationship-Preserving",
    desc: "We resolve disputes without destroying relationships — leaving parties able to move forward.",
    color: "text-primary",
  },
  {
    icon: <FaCheck />,
    title: "Voluntary",
    desc: "No party is forced into any outcome. Every resolution is freely agreed upon by all sides.",
    color: "text-primary",
  }
];

// ── Animated counter hook ───────────────────────────────────
function useCounter(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const numericTarget = parseInt(target.replace(/\D/g, "")) || 0;
    if (!numericTarget) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * numericTarget));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ── Stat card with animation ────────────────────────────────
function StatCard({ value, label, animate }) {
  const numericPart = value.replace(/\D/g, "");
  const suffix = value.replace(/[0-9]/g, "");
  const count = useCounter(value, 1500, animate);
  const display = numericPart ? `${count}${suffix}` : value;

  return (
    <div className="text-center px-6 py-5 border-r border-white/10 last:border-r-0">
      <p className="text-accent font-black text-3xl sm:text-4xl mb-1" style={{ fontFamily: "'Georgia', serif" }}>
        {display}
      </p>
      <p className="text-neutral-400 text-[10px] uppercase tracking-[0.2em]">{label}</p>
    </div>
  );
}

// ── Main page ───────────────────────────────────────────────
export default function Mediation() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* ════════════════════════════════════════
          RICH HERO SECTION
      ════════════════════════════════════════ */}
    <section className="relative min-h-screen flex items-center overflow-hidden bg-secondary-dark -mt-[35px]">

  {/* ── Background layers ── */}
  <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark via-secondary to-primary-dark opacity-95" />

  <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />

  {/* Dot grid */}
  <div
    className="absolute inset-0 opacity-[0.06]"
    style={{
      backgroundImage: `radial-gradient(circle, #D4AF37 1px, transparent 1px)`,
      backgroundSize: "44px 44px",
    }}
  />

  {/* Diagonal lines */}
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage: `repeating-linear-gradient(
        -55deg,
        #D4AF37 0px, #D4AF37 1px,
        transparent 1px, transparent 60px
      )`,
    }}
  />

  {/* Left accent line */}
  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-accent to-transparent" />

  {/* Rings */}
  <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
  <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5" />
  <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-accent/10" />

  {/* Scales Icon */}
  <div className="absolute right-8 lg:right-24 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block text-accent">
     <FaScaleBalanced size={460} />
  </div>

  {/* ── Content ── */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
    <div className="max-w-3xl">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-neutral-500 text-xs mb-8 uppercase tracking-widest">
        <a href="/" className="hover:text-accent transition-colors">Home</a>
        <span>/</span>
        <a href="/services" className="hover:text-accent transition-colors">Services</a>
        <span>/</span>
        <span className="text-accent">Mediation</span>
      </div>

      {/* Badge */}
      <div className="flex items-center gap-3 mb-8 flex-wrap">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">
            Core Service — Mediation
          </span>
        </div>
        <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
          <span className="text-neutral-400 text-xs uppercase tracking-wider">
            Pillar 01 of 04
          </span>
        </div>
      </div>

      {/* Headline */}
      <h1
        className="text-white font-bold leading-[1.05] mb-6"
        style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
      >
        Conflict Resolved.
        <br />
        <span
          style={{
            background: "linear-gradient(135deg, #D4AF37 0%, #E6C75A 40%, #A68B2C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Relationships Preserved.
        </span>
      </h1>

      {/* Accent line */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-0.5 bg-accent" />
        <div className="w-6 h-0.5 bg-accent/40" />
        <div className="w-3 h-0.5 bg-accent/20" />
      </div>

      {/* Description */}
      <p className="text-neutral-300 text-lg leading-relaxed max-w-2xl mb-6">
        Mediation is a <span className="text-white font-medium">confidential, voluntary, and structured</span> process 
        where a neutral third party helps disputing parties reach a mutually acceptable resolution 
        without the cost, time, or adversarial nature of litigation.
      </p>

      {/* Service highlights/Pills */}
      <div className="flex flex-wrap gap-3 mb-10">
        {["Confidential", "Voluntary", "Non-adversarial", "Faster than Court", "Relationship-Preserving"].map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10
            text-neutral-300 text-xs backdrop-blur-sm hover:bg-white/10 hover:border-accent/30
            hover:text-white transition-all duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {tag}
          </span>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-16">

        <a
          href="/contact"
          className="inline-flex justify-center items-center gap-2.5 px-8 py-4 bg-accent text-primary-dark font-bold text-sm rounded-xl
          hover:bg-accent-light transition-all duration-300 shadow-xl shadow-accent/20 hover:-translate-y-0.5"
        >
          Book a Mediation Session
        </a>

        <a
          href="#process"
          className="inline-flex justify-center items-center gap-2.5 px-8 py-4 text-white font-semibold text-sm rounded-xl
          border border-white/15 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
        >
          See How It Works
        </a>

      </div>

      {/* Stats */}
      <div
        ref={statsRef}
        className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10 bg-white/5 backdrop-blur-sm
        rounded-2xl border border-white/10 overflow-hidden"
      >
        {stats.map((s, i) => (
          <StatCard key={i} value={s.value} label={s.label} animate={statsVisible} />
        ))}
      </div>

    </div>
  </div>
</section>
      {/* ════════════════════════════════════════
          WHAT IS MEDIATION
      ════════════════════════════════════════ */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div>
              <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-accent pb-1">
                The Service
              </span>
              <h2
                className="text-neutral-900 font-bold text-3xl sm:text-4xl mb-6"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                What is{" "}
                <span className="text-primary">Mediation?</span>
              </h2>
              <div className="space-y-4 text-neutral-600 text-base leading-relaxed">
                <p>
                  Mediation is a structured, private process where a trained, neutral third party
                  the mediator, facilitates dialogue between parties in conflict, helping them
                  reach a mutually acceptable resolution on their own terms.
                </p>
                <p>
                  Unlike litigation or arbitration, <strong className="text-neutral-800">no decision is imposed</strong>.
                  The mediator does not judge or decide; they guide. The power to resolve remains
                  entirely with the disputing parties.
                </p>
                <p>
                  At Three C's Met, our mediation practice goes beyond conventional dispute
                  resolution. We bring together the disciplines of law, psychology, and structured
                  communication to create outcomes that are not just agreed, but genuinely <em>owned</em> by
                  the parties involved.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Voluntary Process", sub: "No party is compelled" },
                  { label: "Neutral Facilitator", sub: "No bias, no judgment" },
                  { label: "Private & Confidential", sub: "Stays in the room" },
                  { label: "Binding Agreement", sub: "Formal & enforceable" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                    <span className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-800 text-sm">{item.label}</p>
                      <p className="text-neutral-500 text-xs mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — visual block */}
            <div className="relative">
              <div className="bg-secondary-dark rounded-3xl p-10 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage: `radial-gradient(circle, #D4AF37 1px, transparent 1px)`,
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="relative">
                  {/* Big quote */}
                  <div className="text-8xl font-black text-white/5 leading-none mb-4 select-none"
                    style={{ fontFamily: "'Georgia', serif" }}>"</div>
                  <p
                    className="text-white text-xl leading-relaxed mb-8 font-light"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    Mediation is not just about ending conflict,
                    it's about restoring the possibility of a future
                    between people.
                  </p>
                  <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-white font-bold text-sm" style={{ fontFamily: "'Georgia', serif" }}>CN</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Chijioke Nnanna Ibeku</p>
                      <p className="text-neutral-400 text-xs">Founder & Lead Mediator</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative corners */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl border-2 border-accent/30 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl border-2 border-primary/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROCESS — 6 STEPS
      ════════════════════════════════════════ */}
      <section id="process" className="py-10 bg-neutral-50 relative overflow-hidden">
        <div className="absolute -right-20 top-0 w-72 h-72 rounded-full bg-primary/4 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-accent pb-1">
              Our Process
            </span>
            <h2
              className="text-neutral-900 font-bold text-3xl sm:text-4xl mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              How Mediation Works
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed">
              A structured six-stage process, from first contact to signed agreement.
            </p>
          </div>

          {/* Step selector + detail */}
          <div className="grid lg:grid-cols-5 gap-8">

            {/* Step tabs — left */}
            <div className="lg:col-span-2 space-y-2">
              {processSteps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all duration-300 border
                    ${activeStep === i
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                      : "bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:shadow-sm"
                    }`}
                >
                  <span
                    className={`text-sm font-black flex-shrink-0 ${activeStep === i ? "text-white/60" : "text-neutral-300"}`}
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {step.number}
                  </span>
                  <span className={`text-sm font-semibold ${activeStep === i ? "text-white" : "text-neutral-700"}`}>
                    {step.title}
                  </span>
                  {activeStep === i && (
                    <svg className="w-4 h-4 ml-auto flex-shrink-0 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {/* Step detail — right */}
            <div className="lg:col-span-3">
              <div
                key={activeStep}
                className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-8 h-full"
                style={{ animation: "fadeSlideIn 0.3s ease" }}
              >
                {/* Step number large */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/8 text-primary flex items-center justify-center">
                    {processSteps[activeStep].icon}
                  </div>
                  <span
                    className="text-7xl font-black text-neutral-100 leading-none select-none"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {processSteps[activeStep].number}
                  </span>
                </div>

                <h3
                  className="text-neutral-900 font-bold text-2xl mb-4"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {processSteps[activeStep].title}
                </h3>
                <p className="text-neutral-600 text-base leading-relaxed mb-8">
                  {processSteps[activeStep].desc}
                </p>

                {/* Progress indicator */}
                <div className="flex items-center gap-2">
                  {processSteps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === activeStep ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-neutral-200 hover:bg-neutral-300"
                      }`}
                    />
                  ))}
                  <span className="ml-auto text-xs text-neutral-400 font-medium">
                    {activeStep + 1} of {processSteps.length}
                  </span>
                </div>

                {/* Next step button */}
                {activeStep < processSteps.length - 1 && (
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="mt-6 flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-200"
                  >
                    Next: {processSteps[activeStep + 1].title}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeSlideIn {
            from { opacity: 0; transform: translateY(10px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      {/* ════════════════════════════════════════
          APPLICATION AREAS
      ════════════════════════════════════════ */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-accent pb-1">
              Areas of Practice
            </span>
            <h2
              className="text-neutral-900 font-bold text-3xl sm:text-4xl mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Facets of Mediation
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Our mediation services span 12+ categories, from the boardroom to the community hall.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {applicationAreas.map((area, i) => (
              <div
                key={i}
                className="group flex items-center gap-3 p-4 rounded-2xl border border-neutral-200 bg-white
                  hover:border-primary/30 hover:bg-primary/3 hover:shadow-md hover:-translate-y-0.5
                  transition-all duration-200 cursor-default"
                style={{ ":hover": { backgroundColor: "rgba(11,93,59,0.03)" } }}
              >
                <span className="text-2xl flex-shrink-0">{area.icon}</span>
                <p className="text-neutral-700 text-sm font-medium leading-snug group-hover:text-primary transition-colors duration-200">
                  {area.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          VALUE PROPOSITIONS
      ════════════════════════════════════════ */}
      <section className="py-10 bg-neutral-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #D4AF37 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="inline-block text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-accent pb-1">
              Why Mediation
            </span>
            <h2
              className="text-white font-bold text-3xl sm:text-4xl"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              The Value of{" "}
              <span className="text-primary">Choosing Mediation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div
                key={i}
                className={`rounded-2xl border ${v.color} p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
              >
                <span className="text-3xl block mb-4">{v.icon}</span>
                <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                  {v.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}