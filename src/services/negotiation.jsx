import { useState, useEffect, useRef } from "react";
import { 
  FaChessKnight, 
  FaHandshake, 
  FaBolt, 
  FaShieldHalved, 
  FaGraduationCap, 
  FaLock,
  FaBuilding,
  FaFileLines,
  FaUserGroup,
  FaMoneyBillWave,
  FaHouse,
  FaBox,
  FaScaleBalanced,
  FaLink,
  FaLightbulb,
  FaLandmark,
  FaPeopleGroup,
  FaUsersViewfinder
} from "react-icons/fa6";
// ── Data ────────────────────────────────────────────────────

const stats = [
  { value: "95%", label: "Agreement Rate" },
  { value: "4+", label: "Strategy Frameworks" },
  { value: "8+", label: "Years Advisory" },
  { value: "100%", label: "Client-Focused" },
];

const whatWeDo = [
  {
    number: "1",
    title: "Negotiation Advisory",
    desc: "We analyze your situation, identify leverage points, and develop a clear strategy before any negotiation begins. Knowledge is power; we make sure you walk in prepared.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <path d="M8 32V16a2 2 0 012-2h20a2 2 0 012 2v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 20h12M14 24h8M14 28h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M4 32h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "2",
    title: "Client Representation",
    desc: "We sit at the table for you, representing your interests with precision, composure, and professional authority. You don't have to face the pressure alone.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 34c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M30 10l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "3",
    title: "Negotiation Coaching",
    desc: "We train you to negotiate effectively, building your skills in communication, persuasion, emotional intelligence, and strategic thinking for long-term professional advantage.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <rect x="6" y="8" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M13 18h14M13 22h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M20 28v6M15 34h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "4",
    title: "Strategy Development",
    desc: "Every negotiation is unique. We craft bespoke strategies tailored to your specific situation, the other party's profile, and your ultimate goals, leaving nothing to chance.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <path d="M8 32l8-10 6 6 10-14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="8" cy="32" r="2" fill="currentColor"/>
        <circle cx="16" cy="22" r="2" fill="currentColor"/>
        <circle cx="22" cy="28" r="2" fill="currentColor"/>
        <circle cx="32" cy="14" r="2" fill="currentColor"/>
      </svg>
    ),
  },
];

const keyElements = [
  {
    title: "Preparation & Strategy",
    desc: "Thorough analysis of interests, positions, and possible outcomes before any engagement begins.",
    color: "border-primary/20 bg-primary/4",
    textColor: "text-primary",
  },
  {
    title: "Interest Identification",
    desc: "Understanding what each party truly wants, not just what they say they want, is the cornerstone of effective negotiation.",
    color: "border-primary/20 bg-primary/4",
    textColor: "text-primary",
  },
  {
    title: "Communication & Persuasion",
    desc: "Crafting messages that resonate, reframe, and move the other party toward agreement without pressure.",
    color: "border-primary/20 bg-primary/4",
    textColor: "text-primary",
  },
  {
    title: "Structuring Agreements",
    desc: "Building deal frameworks that are clear, balanced, and durable, minimizing future disputes.",
    color: "border-primary/20 bg-primary/4",
    textColor: "text-primary",
  },
  {
    title: "Closing the Deal",
    desc: "Knowing when and how to close is as important as the negotiation itself. We guide you to the finish line.",
    color: "border-primary/20 bg-primary/4",
    textColor: "text-primary",
  },
  {
    title: "Post-Negotiation Review",
    desc: "We debrief every negotiation, extracting lessons and refining future strategy based on real outcomes.",
    color: "border-primary/20 bg-primary/4",
    textColor: "text-primary",
  },
];

const values = [
  {
    icon: <FaBolt />,
    title: "Better Outcomes",
    desc: "Strategic negotiation consistently achieves better results than improvised or emotional engagement.",
    color: "bg-primary/5 border-primary/15",
  },
  {
    icon: <FaShieldHalved />,
    title: "Prevents Escalation",
    desc: "Well-managed negotiation stops disputes from spiraling into litigation, arbitration, or broken relationships.",
    color: "bg-accent/5 border-accent/15",
  },
  {
    icon: <FaGraduationCap />,
    title: "Professional Handling",
    desc: "Sensitive matters demand professional discretion. We handle high-stakes negotiations with composure and expertise.",
    color: "bg-secondary/5 border-secondary/15",
  },
  {
    icon: <FaLock />,
    title: "Confidential",
    desc: "Everything discussed in our negotiation process is handled with complete confidentiality and professionalism.",
    color: "bg-primary/5 border-primary/15",
  },
];

const scenarios = [
  { label: "Business & Commercial Deals", icon: <FaBuilding /> },
  { label: "Employment Contracts", icon: <FaFileLines /> },
  { label: "Partnership Agreements", icon: <FaUserGroup /> },
  { label: "Salary & Compensation", icon: <FaMoneyBillWave /> },
  { label: "Real Estate Transactions", icon: <FaHouse /> },
  { label: "Vendor & Supplier Deals", icon: <FaBox /> },
  { label: "Dispute Settlement", icon: <FaScaleBalanced /> },
  { label: "Merger & Acquisition", icon: <FaLink /> },
  { label: "Licensing & IP Agreements", icon: <FaLightbulb /> },
  { label: "Government & Policy", icon: <FaLandmark /> },
  { label: "Community Negotiations", icon: <FaPeopleGroup /> },
  { label: "Family Asset Disputes", icon: <FaUsersViewfinder /> },
];

// ── Animated counter ────────────────────────────────────────
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

function StatCard({ value, label, animate }) {
  const numericPart = value.replace(/\D/g, "");
  const suffix = value.replace(/[0-9]/g, "");
  const count = useCounter(value, 1400, animate);
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
export default function Negotiation() {
  const [statsVisible, setStatsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const statsRef = useRef(null);

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

  {/* Strategy Icon */}
  <div className="absolute right-8 lg:right-24 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block text-accent">
     <FaChessKnight size={460} />
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
        <span className="text-accent">Negotiation</span>
      </div>

      {/* Badge */}
      <div className="flex items-center gap-3 mb-8 flex-wrap">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">
            Core Service: Negotiation
          </span>
        </div>
        <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
          <span className="text-neutral-400 text-xs uppercase tracking-wider">
            Pillar 02 of 04
          </span>
        </div>
      </div>

      {/* Headline */}
      <h1
        className="text-white font-bold leading-[1.05] mb-6"
        style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
      >
        Strategic
        <br />
        <span
          style={{
            background: "linear-gradient(135deg, #D4AF37 0%, #E6C75A 40%, #A68B2C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Negotiation.
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
        Negotiation is not just talking, it's a{" "}
        <span className="text-white font-medium">deliberate, structured discipline</span> of
        engagement designed to achieve agreements that serve your interests. Done right,
        it prevents conflict, builds relationships, and unlocks value that improvised
        conversation cannot.
      </p>

      <p className="text-neutral-400 text-base leading-relaxed max-w-xl mb-10">
        At Three C's Met, we provide professional negotiation advisory, coaching, and
        representation, bringing strategy, composure, and expertise to every table.
      </p>

      {/* Service highlights */}
      <div className="flex flex-wrap gap-3 mb-10">
        {["Advisory Services", "Client Representation", "Coaching & Training", "Strategy Development"].map((tag) => (
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
          Get Negotiation Support
        </a>

        <a
          href="#what-we-do"
          className="inline-flex justify-center items-center gap-2.5 px-8 py-4 text-white font-semibold text-sm rounded-xl
          border border-white/15 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
        >
          What We Offer
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
          WHAT IS NEGOTIATION
      ════════════════════════════════════════ */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — visual */}
            <div className="relative order-2 lg:order-1">
              {/* Main dark card */}
              <div className="bg-neutral-950 rounded-3xl p-10 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(212,175,55,0.8) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(212,175,55,0.8) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent" />
                <div className="relative">
                  <p className="text-accent text-xs font-bold uppercase tracking-widest mb-6">
                    The Core Principle
                  </p>
                  <p
                    className="text-white text-2xl leading-relaxed font-light mb-8"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    "In negotiation, preparation is not optional;
                    it is the difference between what you want
                    and what you settle for."
                  </p>
                  <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-white font-bold text-xs" style={{ fontFamily: "'Georgia', serif" }}>CN</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Chijioke Nnanna Ibeku</p>
                      <p className="text-neutral-400 text-xs">Founder & Lead Mediator</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat chip */}
              <div className="absolute -bottom-12 -right-5 bg-accent rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-primary-dark font-black text-2xl" style={{ fontFamily: "'Georgia', serif" }}>4+</p>
                <p className="text-primary-dark/70 text-xs font-semibold uppercase tracking-wider">Strategy Frameworks</p>
              </div>

              {/* Corner accents */}
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl border-2 border-primary/20 -z-10" />
            </div>

            {/* Right — text */}
            <div className="order-1 lg:order-2">
              <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-accent pb-1">
                The Service
              </span><br></br>
              <span className="text-neutral-900 font-bold text-3xl sm:text-4xl mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                What is <span className="text-primary">Negotiation?</span>
              </span>
              <div className="space-y-4 text-neutral-600 text-base leading-relaxed mb-8">
                <p className="pt-4">
                  Negotiation is a <strong className="text-neutral-800">strategic process of engagement</strong> between
                  parties aimed at reaching agreement, either independently or with professional
                  support. It is both an art and a science: requiring preparation, emotional
                  intelligence, and disciplined communication.
                </p>
                <p>
                  Unlike mediation where a third party facilitates, negotiation puts your
                  interests at the center. Done well, it achieves better outcomes, prevents
                  escalation, and builds stronger agreements that last.
                </p>
                <p>
                  At Three C's Met, we provide negotiation support at every level, from
                  coaching individuals to representing clients directly at the table, ensuring
                  every negotiation is handled with the professionalism it deserves.
                </p>
              </div>

              {/* Key distinctions */}
              <div className="space-y-3">
                {[
                  { label: "Interest-Based", sub: "We focus on what you truly need, not just what you're asking for" },
                  { label: "Strategic", sub: "Every move is deliberate, prepared, and purposeful" },
                  { label: "Professional", sub: "High-stakes situations demand composed, expert handling" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-primary/20 transition-colors duration-200">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-800 text-sm">{item.label}</p>
                      <p className="text-neutral-500 text-xs mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHAT WE DO — 4 SERVICES
      ════════════════════════════════════════ */}
      <section id="what-we-do" className="py-10 bg-neutral-50 relative overflow-hidden">
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/4 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-accent pb-1">
              Our Offering
            </span>
            <h2
              className="text-neutral-900 font-bold text-3xl sm:text-4xl mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              What We Do in Negotiation
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Four core services: each designed to give you a decisive advantage
              at every stage of the negotiation process.
            </p>
          </div>

          {/* Tab nav */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {whatWeDo.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-300
                  ${activeService === i
                    ? "bg-primary text-white border-primary shadow-lg"
                    : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300"
                  }`}
              >
                <span className={`text-xs font-black ${activeService === i ? "text-white/60" : "text-neutral-300"}`}
                  style={{ fontFamily: "'Georgia', serif" }}>
                  {item.number}
                </span>
                {item.title.split(" ").slice(0, 2).join(" ")}
              </button>
            ))}
          </div>

          {/* Active service detail */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch" key={activeService}
            style={{ animation: "fadeSlideIn 0.3s ease" }}>

            {/* Detail card */}
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-8">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/8 text-primary flex items-center justify-center flex-shrink-0">
                  {whatWeDo[activeService].icon}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                    Service {whatWeDo[activeService].number}
                  </span>
                  <h3
                    className="text-neutral-900 font-bold text-2xl"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {whatWeDo[activeService].title}
                  </h3>
                </div>
              </div>
              <p className="text-neutral-600 text-base leading-relaxed mb-8">
                {whatWeDo[activeService].desc}
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all duration-200"
              >
                Get this service
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* All services summary */}
            <div className="grid grid-cols-1 gap-3">
              {whatWeDo.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveService(i)}
                  className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200
                    ${activeService === i
                      ? "bg-primary/5 border-primary/30"
                      : "bg-white border-neutral-200 hover:border-neutral-300 hover:shadow-sm"
                    }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
                    ${activeService === i ? "bg-primary text-white" : "bg-neutral-100 text-neutral-500"}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-semibold text-sm ${activeService === i ? "text-primary" : "text-neutral-800"}`}>
                      {item.title}
                    </p>
                    <p className="text-neutral-400 text-xs truncate mt-0.5">{item.desc.slice(0, 60)}...</p>
                  </div>
                  <svg className={`w-4 h-4 flex-shrink-0 transition-colors ${activeService === i ? "text-primary" : "text-neutral-300"}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
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
          KEY ELEMENTS
      ════════════════════════════════════════ */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-accent pb-1">
              The Framework
            </span>
            <h2
              className="text-neutral-900 font-bold text-3xl sm:text-4xl mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Key Elements of Effective Negotiation
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Every successful negotiation we handle is built on these six foundations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {keyElements.map((el, i) => (
              <div
                key={i}
                className={`rounded-2xl border ${el.color} p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300`}
              >
                <span className="text-3xl block mb-4">{el.icon}</span>
                <h3
                  className={`font-bold text-lg mb-3 ${el.textColor}`}
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {el.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{el.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}