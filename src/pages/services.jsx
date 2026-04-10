import { useState, useEffect, useRef } from "react";
import { 
  FaScaleBalanced, 
  FaChessKnight, 
  FaHandHoldingHeart, 
  FaCompass,
  FaArrowRight,

} from "react-icons/fa6";

const services = [
  {
    pillar: "01",
    title: "Mediation",
    tagline: "Find Common Ground",
    desc: "A confidential, voluntary process where a neutral third party guides disputing parties toward a mutually acceptable resolution — without the cost or conflict of litigation.",
    icon: <FaScaleBalanced size={40} />,
    href: "/services/mediation",
    color: "from-primary/20 to-primary/5",
    accent: "bg-primary",
    border: "border-primary/20",
    text: "text-primary"
  },
  {
    pillar: "02",
    title: "Negotiation",
    tagline: "Engage Strategically",
    desc: "Structured engagement backed by professional strategy. We provide advisory, representation, and coaching to ensure you communicate with purpose and precision.",
    icon: <FaChessKnight size={40} />,
    href: "/services/negotiation",
    color: "from-accent/20 to-accent/5",
    accent: "bg-accent",
    border: "border-accent/20",
    text: "text-accent-dark"
  },
  {
    pillar: "03",
    title: "Counseling",
    tagline: "Prepare the Heart",
    desc: "Emotional and psychological preparation for resolution. Our conflict-focused counseling equips you with the mindset and emotional balance needed for lasting peace.",
    icon: <FaHandHoldingHeart size={40} />,
    href: "/services/counseling",
    color: "from-primary/20 to-primary/5",
    accent: "bg-primary",
    border: "border-primary/20",
    text: "text-primary"
  },
  {
    pillar: "04",
    title: "Conciliation",
    tagline: "Guided Settlement",
    desc: "Active facilitation where a specialist proposes fair, expert-driven solutions to help deadlocked parties find a path forward and a durable settlement.",
    icon: <FaCompass size={40} />,
    href: "/services/conciliation",
    color: "from-secondary/20 to-secondary/5",
    accent: "bg-secondary",
    border: "border-secondary/20",
    text: "text-secondary"
  }
];

export default function Services() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      
      {/* ── RICH HERO SECTION ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-secondary-dark -mt-[35px] pt-[35px]">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark via-secondary to-primary-dark opacity-95" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />

        {/* Dash Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle, #D4AF37 1px, transparent 1px)`,
            backgroundSize: "44px 44px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full text-center">
           <div className="max-w-4xl mx-auto">
              <div className="flex justify-center items-center gap-2 mb-8 uppercase tracking-[0.3em] text-accent text-xs font-bold">
                 <span className="w-8 h-px bg-accent/50" />
                 Our Portfolio
                 <span className="w-8 h-px bg-accent/50" />
              </div>

              <h1 
                className={`text-white font-bold leading-[1.1] mb-8 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
              >
                The Architecture of <br />
                <span 
                  style={{ 
                    background: "linear-gradient(135deg, #D4AF37 0%, #E6C75A 50%, #A68B2C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  Resolution.
                </span>
              </h1>

              <p className="text-neutral-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
                We bridge the gap between conflict and peace through a structured framework 
                of professional communication, strategy, and emotional evolution.
              </p>

              <div className="flex justify-center gap-4">
                 <a href="#portfolio" className="bg-accent text-primary-dark px-8 py-4 rounded-xl font-bold text-sm hover:bg-accent-light transition-all shadow-xl shadow-accent/20">
                    Explore Services
                 </a>
                 <a href="/contact" className="border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-sm hover:bg-white/10 transition-all">
                    Consult an Expert
                 </a>
              </div>
           </div>
        </div>

        {/* Decorative corner icon */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 border border-white/5 rounded-full" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-white/5 rounded-full" />
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-24 bg-neutral-50" id="portfolio">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="group relative bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 overflow-hidden flex flex-col sm:flex-row gap-8 items-start"
              >
                {/* Visual Number background */}
                <span className="absolute -top-4 -right-4 text-9xl font-black text-neutral-50 opacity-[0.03] pointer-events-none" style={{ fontFamily: "'Georgia', serif" }}>
                  {service.pillar}
                </span>

                {/* Left Side - Icon & Pillar */}
                <div className="flex flex-col items-center sm:items-start">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} ${service.text} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    {service.icon}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${service.text} border-b-2 ${service.border} pb-1`}>
                    Pillar {service.pillar}
                  </span>
                </div>

                {/* Right Side - Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">
                    {service.tagline}
                  </p>
                  <p className="text-neutral-600 leading-relaxed mb-8 text-sm sm:text-base">
                    {service.desc}
                  </p>
                  
                  <a 
                    href={service.href}
                    className={`inline-flex items-center gap-3 font-bold text-sm group/link ${service.text} hover:gap-5 transition-all duration-300`}
                  >
                    Explore Service Detail
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE THREE C'S PHILOSOPHY ── */}
      <section className="py-24 bg-secondary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 right-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#D4AF37 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-white/5 backdrop-blur-md rounded-[40px] p-8 sm:p-20 border border-white/10 text-center">
             <h2 className="text-white font-bold text-3xl sm:text-4xl mb-8" style={{ fontFamily: "'Georgia', serif" }}>
               The "Three C's Met" Framework
             </h2>
             <p className="text-neutral-300 max-w-3xl mx-auto text-lg mb-12">
               Our name is our philosophy. We don't just solve problems; we meet the three 
               fundamental requirements for a sustainable peace.
             </p>

             <div className="grid sm:grid-cols-3 gap-8">
                {[
                  { title: "Conflict", desc: "Acknowledging and addressing the root causes through Mediation and Conciliation." },
                  { title: "Communication", desc: "Enabling strategic, purposeful engagement through professional Negotiation." },
                  { title: "Counseling", desc: "Preparing the psychological and emotional landscape for sustainable resolution." }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                     <h4 className="text-accent font-bold text-xl mb-4" style={{ fontFamily: "'Georgia', serif" }}>{item.title}</h4>
                     <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
           <h2 className="text-neutral-900 font-bold text-3xl sm:text-4xl mb-6" style={{ fontFamily: "'Georgia', serif" }}>
             Ready to find a path forward?
           </h2>
           <p className="text-neutral-500 mb-10 text-lg">
             Whether it's a personal dispute or a global commercial negotiation, our experts 
             are ready to provide the structure needed for resolution.
           </p>
           <a href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primary-light transition-all shadow-2xl shadow-primary/20">
              Start Your Resolution Journey
              <FaArrowRight />
           </a>
        </div>
      </section>

    </div>
  );
}
