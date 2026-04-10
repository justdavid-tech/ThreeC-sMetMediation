import { useState, useEffect, useRef } from "react";
import { 
  FaHeartCircleCheck, 
  FaUserAstronaut, 
  FaPeopleArrows, 
  FaHandHoldingHeart,
  FaScaleBalanced,
  FaRegComments,
  FaEarListen,
  FaMagnifyingGlass,
  FaSeedling,
  FaGears
} from "react-icons/fa6";
import { GiInnerSelf, GiLinkedRings, GiCactus, GiBrain } from "react-icons/gi";
import { MdOutlinePsychology, MdOutlinePrivacyTip, MdOutlineHealing, MdOutlineWeekend } from "react-icons/md";

/* ── DATA ───────────────────────────────────────── */

const stats = [
  { value: "92%", label: "Resolution Progress" },
  { value: "4+", label: "Therapeutic Approaches" },
  { value: "8+", label: "Years Experience" },
  { value: "100%", label: "Confidential Care" },
];

const whatWeDo = [
  {
    number: "1",
    title: "Individual Counseling",
    desc: "We provide a safe, confidential space for individuals to process emotions, overcome internal struggles, and develop healthier perspectives on life's challenges.",
    icon: <MdOutlinePsychology className="w-7 h-7" />,
  },
  {
    number: "2",
    title: "Relationship Counseling",
    desc: "We help partners rebuild trust, improve communication, and resolve deep-rooted conflicts in a guided, empathetic, and structured way.",
    icon: <GiLinkedRings className="w-7 h-7" />,
  },
  {
    number: "3",
    title: "Emotional Support & Guidance",
    desc: "We support you through stress, anxiety, grief, and life transitions, helping you regain clarity, emotional balance, and personal strength.",
    icon: <FaHandHoldingHeart className="w-7 h-7" />,
  },
  {
    number: "4",
    title: "Conflict Healing Sessions",
    desc: "We go beyond mere resolution, addressing deep emotional wounds and helping all parties move forward with genuine understanding and lasting peace.",
    icon: <MdOutlineHealing className="w-7 h-7" />,
  },
];

const keyElements = [
  { title: "Safe Environment", desc: "A judgment-free space where you can speak openly and honestly without fear.", icon: <MdOutlineWeekend /> },
  { title: "Emotional Awareness", desc: "Understanding the root of your emotions is the first step toward true healing.", icon: <GiBrain /> },
  { title: "Active Listening", desc: "We listen deeply, not just to respond, but to truly understand your unique journey.", icon: <FaEarListen /> },
  { title: "Guided Reflection", desc: "Helping you see subconscious patterns, triggers, and empowering new perspectives.", icon: <FaMagnifyingGlass /> },
  { title: "Healing & Growth", desc: "We focus on long-term emotional evolution and resilience, not just temporary fixes.", icon: <FaSeedling /> },
  { title: "Actionable Change", desc: "We help you translate psychological insights into real-life, measurable improvements.", icon: <FaGears /> },
];

const values = [
  {
    icon: <FaHeartCircleCheck />,
    title: "Emotional Healing",
    desc: "Process deep pain and move forward with clarity, purpose, and renewed strength.",
    color: "border-primary/20 bg-primary/4",
  },
  {
    icon: <GiInnerSelf />,
    title: "Mental Balance",
    desc: "Regain mastery over stress, anxiety, and the overwhelming tides of modern life.",
    color: "border-accent/20 bg-accent/4",
  },
  {
    icon: <FaPeopleArrows />,
    title: "Stronger Bonds",
    desc: "Build deeper, healthier, and more meaningful connections with those who matter.",
    color: "border-secondary/20 bg-secondary/4",
  },
  {
    icon: <MdOutlinePrivacyTip />,
    title: "Total Privacy",
    desc: "Everything shared is protected by strict ethical and professional confidentiality protocols.",
    color: "border-primary/20 bg-primary/4",
  },
];

const scenarios = [
  { label: "Stress & Anxiety", icon: <GiCactus /> },
  { label: "Relationship Issues", icon: <GiLinkedRings /> },
  { label: "Family Conflicts", icon: <FaPeopleArrows /> },
  { label: "Grief & Loss", icon: <FaHandHoldingHeart /> },
  { label: "Self-Esteem", icon: <GiInnerSelf /> },
  { label: "Communication", icon: <FaRegComments /> },
  { label: "Work Pressure", icon: <FaUserAstronaut /> },
  { label: "Legal Stress", icon: <FaScaleBalanced /> },
];

/* ── COMPONENTS ────────────────────────────────── */

function useCounter(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const numericTarget = parseInt(target.replace(/\D/g, "")) || 0;
    let startTime = null;

    const step = (t) => {
      if (!startTime) startTime = t;
      const progress = Math.min((t - startTime) / duration, 1);
      setCount(Math.floor(progress * numericTarget));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatCard({ value, label, animate }) {
  const numString = value.replace(/\D/g, "");
  const suffix = value.replace(/[0-9]/g, "");
  const count = useCounter(value, 1400, animate);
  
  return (
    <div className="text-center px-6 py-5 border-r border-white/10 last:border-r-0">
      <p className="text-accent font-black text-3xl sm:text-4xl mb-1" style={{ fontFamily: "'Georgia', serif" }}>
        {numString ? `${count}${suffix}` : value}
      </p>
      <p className="text-neutral-400 text-[10px] uppercase tracking-[0.2em]">{label}</p>
    </div>
  );
}

/* ── PAGE ──────────────────────────────────────── */

export default function Counseling() {
  const [statsVisible, setStatsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

        {/* Heart icon instead of scales */}
        <div className="absolute right-8 lg:right-24 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block text-accent">
           <FaHandHoldingHeart size={460} />
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
              <span className="text-accent">Counseling</span>
            </div>

            {/* Badge */}
            <div className="flex items-center gap-3 mb-8 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent text-xs font-semibold uppercase tracking-widest">
                  Core Service: Counseling
                </span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <span className="text-neutral-400 text-xs uppercase tracking-wider">
                  Pillar 03 of 04
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              className="text-white font-bold leading-[1.05] mb-6"
              style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
            >
              Inner Peace.
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #D4AF37 0%, #E6C75A 40%, #A68B2C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Clearer Paths.
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
              Counseling is a confidential and compassionate process where a professional guide
              helps you navigate life's emotional complexities, heal from past wounds, and
              rebuild a more resilient and meaningful future.
            </p>

            <p className="text-neutral-400 text-base leading-relaxed max-w-xl mb-10">
              At Three C's Met, we provide professional therapeutic counseling for
              individuals and couples, focusing on long-term emotional evolution.
            </p>

            {/* Service highlights */}
            <div className="flex flex-wrap gap-3 mb-10">
              {["Therapeutic Support", "Emotional Awareness", "Subconscious Patterns", "Actionable Change"].map((tag) => (
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
                Book a Session
              </a>

              <a
                href="#what"
                className="inline-flex justify-center items-center gap-2.5 px-8 py-4 text-white font-semibold text-sm rounded-xl
                border border-white/15 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                How It Works
              </a>

            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10 bg-white/5 backdrop-blur-sm
              rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
            >
              {stats.map((s, i) => (
                <StatCard key={i} {...s} animate={statsVisible} />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHAT IS COUNSELING
      ════════════════════════════════════════ */}
      <section className="py-24 bg-white" id="what">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-accent pb-1">
                The Service
              </span>
              <h2 className="text-neutral-900 font-bold text-3xl sm:text-4xl mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                What is <span className="text-primary">Counseling?</span>
              </h2>
              <div className="space-y-4 text-neutral-600 text-base leading-relaxed">
                <p>
                  Counseling is much more than just a conversation. It is a professionally guided journey of 
                  self-discovery, emotional regulation, and psychological healing. 
                </p>
                <p>
                  At Three C's Met, we bridge the gap between pure legal resolution and emotional wellness. 
                  We believe that most conflicts have a deep emotional root, and our counseling practice targets 
                  those foundations to ensure long-term harmony.
                </p>
              </div>
            </div>

            <div className="bg-secondary-dark rounded-3xl p-10 relative overflow-hidden text-white shadow-2xl">
              <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
              <div className="relative">
                <p className="text-3xl lg:text-4xl leading-snug mb-8 font-light italic" style={{ fontFamily: "'Georgia', serif" }}>
                  "True resolution starts from within. When the mind is at peace, the path to agreement becomes clear."
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center font-bold">CN</div>
                  <div>
                    <p className="text-white font-semibold text-sm">Chijioke Nnanna Ibeku</p>
                    <p className="text-neutral-400 text-xs text-left">Founder & Lead Counselor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHAT WE DO — PROCESS
      ════════════════════════════════════════ */}
      <section className="py-10 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Our Process</span>
            <h2 className="text-neutral-900 font-bold text-3xl sm:text-4xl mb-4" style={{ fontFamily: "'Georgia', serif" }}>How We Guide You</h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-2">
              {whatWeDo.map((w, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`w-full flex items-center gap-4 px-6 py-5 rounded-xl text-left transition-all border ${activeStep === i ? "bg-primary text-white border-primary shadow-xl" : "bg-white border-neutral-200 hover:border-neutral-300"}`}
                >
                  <span className={`text-sm font-black ${activeStep === i ? "text-white/60" : "text-neutral-300"}`}>{w.number}</span>
                  <span className="text-sm font-semibold">{w.title}</span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-neutral-200 shadow-xl p-10 h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  {whatWeDo[activeStep].icon}
                </div>
                <h3 className="text-neutral-900 font-bold text-2xl mb-4" style={{ fontFamily: "'Georgia', serif" }}>{whatWeDo[activeStep].title}</h3>
                <p className="text-neutral-600 text-lg leading-relaxed">{whatWeDo[activeStep].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

  

      {/* ════════════════════════════════════════
          VALUES & IMPACT
      ════════════════════════════════════════ */}
      <section className="py-10 bg-white">
        <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Values</span>
            <h2 className="text-neutral-900 font-bold text-3xl sm:text-4xl mb-4" style={{ fontFamily: "'Georgia', serif" }}>Our Impact to lives</h2>
          </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${v.color} hover:shadow-xl transition-all`}>
                <div className="text-4xl text-primary mb-6">{v.icon}</div>
                <h3 className="text-neutral-900 font-bold mb-3" style={{ fontFamily: "'Georgia', serif" }}>{v.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}