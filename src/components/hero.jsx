import { useState, useEffect, useRef } from "react";
import heroBg from "../assets/hero-bg.jpeg";
import { Link } from 'react-router-dom';
import BookingModal from "./bookingmodal";

const stats = [
  { value: "648+", label: "Certified Youth Mediators", },
  { value: "3",    label: "Countries Reached",         },
  { value: "4",    label: "Core Services",             },
  { value: "98%",  label: "Success Rate",},
];

const services = [
  { name: "Mediation",    description: "Bridge differences with neutrality" },
  { name: "Negotiation",  description: "Engage strategically, reach agreement" },
  { name: "Counseling",   description: "Heal relationships from within" },
  { name: "Conciliation", description: "Restore harmony through guidance" },
];


// ── Animated counter hook ──────────────────────────────────
function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const numericTarget = parseInt(String(target).replace(/\D/g, "")) || 0;
    if (!numericTarget) return;
    let startTime = null;
    const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const raw = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(ease(raw) * numericTarget));
      if (raw < 1) requestAnimationFrame(step);
      else setCount(numericTarget);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function AnimatedStat({ stat, label, icon, animate }) {
  const numericPart = String(stat).replace(/\D/g, "");
  const suffix = String(stat).replace(/[0-9]/g, "");
  const count = useCounter(stat, 1800, animate);
  const display = numericPart ? `${count}${suffix}` : stat;

  return (
    <div className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-5 text-center
      hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
      border border-white/10 hover:border-accent/30 overflow-hidden cursor-default">
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
        bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
      {/* Icon */}
      <div className="text-2xl mb-2 group-hover:scale-125 transition-transform duration-500 origin-center">
        {icon}
      </div>
      {/* Value */}
      <p
        className="text-accent font-black text-2xl sm:text-3xl mb-1 leading-none"
        style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
      >
        {display}
      </p>
      <p className="text-neutral-300 text-xs font-medium leading-snug">{label}</p>
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

// ── Main component ─────────────────────────────────────────
export default function Hero() {
  const [currentService, setCurrentService] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [statsVisible, setStatsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const statsRef = useRef(null);
  const sectionRef = useRef(null);

  // Mount animation trigger
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Service rotator
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentService((prev) => (prev + 1) % services.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Smooth parallax on mouse move
  useEffect(() => {
    let rafId;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    const handleMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 18;
      targetY = (e.clientY / window.innerHeight - 0.5) * 18;
    };

    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      currentX = lerp(currentX, targetX, 0.06);
      currentY = lerp(currentY, targetY, 0.06);
      setMousePosition({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Stats counter trigger on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* ── BG photo with smooth parallax ── */}
      <div
        className="absolute inset-[-5%] z-0"
        style={{
          transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px) scale(1.1)`,
          transition: "transform 0.05s linear",
          willChange: "transform",
        }}
      >
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* ── Layered overlays ── */}
      {/* Primary dark gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-secondary-dark/97 via-secondary-dark/88 to-primary-dark/75" />

      {/* Vignette — soft edges */}
      <div className="absolute inset-0 z-10"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)"
        }}
      />

      {/* Animated gold blobs */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-[80px] animate-pulse"
          style={{ animationDelay: "1.2s", animationDuration: "4s" }} />
        <div className="absolute top-1/3 left-2/3 w-64 h-64 bg-primary/20 rounded-full blur-[60px] animate-pulse"
          style={{ animationDelay: "0.6s", animationDuration: "5s" }} />
      </div>

      {/* Subtle moving dot grid — parallax layer 2 */}
      <div
        className="absolute inset-0 z-10 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #D4AF37 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
          transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px)`,
          transition: "transform 0.05s linear",
        }}
      />

      {/* ── Decorative structural elements ── */}
      {/* Left gold bar */}
      <div className="absolute left-0 top-0 bottom-0 z-20 w-1.5 bg-gradient-to-b from-transparent via-accent to-transparent" />
      <div className="absolute left-1.5 top-0 bottom-0 z-20 w-6 bg-gradient-to-r from-accent/15 to-transparent" />

      {/* Top right decorative rings — parallax layer 3 */}
      <div
        className="absolute z-20 pointer-events-none"
        style={{
          right: "-80px",
          top: "50%",
          transform: `translate(${mousePosition.x * -0.25}px, calc(-50% + ${mousePosition.y * -0.25}px))`,
          transition: "transform 0.05s linear",
        }}
      >
        <div className="w-[480px] h-[480px] rounded-full border border-white/4" />
      </div>
      <div
        className="absolute z-20 pointer-events-none"
        style={{
          right: "-20px",
          top: "50%",
          transform: `translate(${mousePosition.x * -0.3}px, calc(-50% + ${mousePosition.y * -0.3}px))`,
          transition: "transform 0.05s linear",
        }}
      >
        <div className="w-[320px] h-[320px] rounded-full border border-accent/8" />
      </div>
      <div className="absolute bottom-10 left-10 z-20 w-20 h-20 rounded-full border border-accent/10 pointer-events-none" />

      {/* Diagonal line accent — bottom right */}
      <div
        className="absolute bottom-0 right-0 z-20 pointer-events-none opacity-10"
        style={{
          width: "300px",
          height: "300px",
          backgroundImage: `repeating-linear-gradient(-45deg, #D4AF37 0px, #D4AF37 1px, transparent 1px, transparent 18px)`,
        }}
      />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-4xl">

          {/* Eyebrow badge — staggered mount */}
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-accent/10
              backdrop-blur-sm border border-accent/30 mb-10 group hover:bg-accent/20
              transition-all duration-500 cursor-pointer"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* Ping dot */}
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-accent text-xs font-bold uppercase tracking-widest
              group-hover:tracking-[0.22em] transition-all duration-500">
              Africa's Pioneer in Peer Mediation
            </span>
          </div>

          {/* Main headline — two lines, staggered */}
          <div className="space-y-1 mb-8">
            <h1
              className="text-white font-black leading-[1.05]"
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                fontSize: "clamp(2.6rem, 6vw, 5rem)",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
              }}
            >
              Trusted Mediators.
            </h1>
            <h1
              className="font-black leading-[1.05]"
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                fontSize: "clamp(2.6rem, 6vw, 5rem)",
                background: "linear-gradient(135deg, #D4AF37 0%, #E6C75A 45%, #A68B2C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.8s ease 0.28s, transform 0.8s ease 0.28s",
              }}
            >
              Real Resolutions.
            </h1>
          </div>

          {/* Underline accent */}
          <div
            className="flex items-center gap-3 mb-8"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.8s ease 0.4s",
            }}
          >
            <div className="w-16 h-0.5 bg-accent rounded-full" />
            <div className="w-8 h-0.5 bg-accent/40 rounded-full" />
            <div className="w-4 h-0.5 bg-accent/20 rounded-full" />
          </div>

          {/* Service rotator card */}
          <div
            className="mb-8 inline-block"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.45s, transform 0.8s ease 0.45s",
            }}
          >
            <div className="p-5 bg-white/6 backdrop-blur-md rounded-2xl border border-white/12 min-w-[300px]"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)" }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-neutral-300 text-base font-light">Experts in</span>
                <span
                  className="text-accent text-lg font-bold border-b border-accent/40 pb-0.5"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0) scale(1)" : "translateY(-6px) scale(0.97)",
                    transition: "opacity 0.35s cubic-bezier(0.68, -0.4, 0.27, 1.4), transform 0.35s cubic-bezier(0.68, -0.4, 0.27, 1.4)",
                    display: "inline-block",
                    minWidth: "140px",
                  }}
                >
                  {services[currentService].name}
                </span>
              </div>
              {/* Service description */}
              <p
                className="text-neutral-400 text-xs"
                style={{
                  opacity: visible ? 1 : 0,
                  transition: "opacity 0.3s ease 0.1s",
                }}
              >
                {services[currentService].description}
              </p>
              {/* Progress bar */}
              <div className="mt-3 flex gap-1.5">
                {services.map((_, i) => (
                  <div
                    key={i}
                    className="h-0.5 rounded-full transition-all duration-500"
                    style={{
                      flex: i === currentService ? 3 : 1,
                      backgroundColor: i === currentService ? "#D4AF37" : "rgba(255,255,255,0.15)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Subtext */}
          <p
            className="text-neutral-200 text-base sm:text-lg leading-relaxed max-w-2xl mb-10"
            style={{
              fontFamily: "'Palatino Linotype', Palatino, serif",
              fontWeight: 300,
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.55s, transform 0.8s ease 0.55s",
            }}
          >
            We provide a comprehensive, structured conflict resolution framework,
            <span className="text-accent font-semibold"> helping individuals, organizations, and communities </span>
            achieve lasting peace without resorting to litigation.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 mb-16"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.65s, transform 0.8s ease 0.65s",
            }}
          >
            {/* Primary CTA */}
            <button
              onClick={() => setBookingOpen(true)}
              className="group relative inline-flex items-center gap-2.5 px-8 py-4
                bg-accent text-primary-dark font-bold text-sm rounded-xl
                hover:bg-accent-light transition-all duration-300
                shadow-xl shadow-accent/25 hover:shadow-accent/40
                hover:-translate-y-1 overflow-hidden"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                bg-gradient-to-r from-transparent via-white/20 to-transparent
                transition-transform duration-700 ease-in-out skew-x-12" />
              <svg className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-300"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="relative z-10">Book Appointment</span>
            </button>

            {/* Secondary CTA */}
            <Link
              to="/services"
              className="group inline-flex items-center gap-2.5 px-8 py-4
                text-white font-semibold text-sm rounded-xl
                border border-white/20 hover:border-accent/40
                hover:bg-white/10 transition-all duration-300
                hover:-translate-y-1 backdrop-blur-sm"
              style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
            >
              Explore Services
              <svg
                className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Stats grid — with animated counters */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.75s, transform 0.8s ease 0.75s",
            }}
          >
            {stats.map((stat, i) => (
              <AnimatedStat
                key={i}
                stat={stat.value}
                label={stat.label}
                icon={stat.icon}
                animate={statsVisible}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes scrollDot {
          0%   { transform: translateY(0);    opacity: 1; }
          60%  { transform: translateY(12px); opacity: 0.2; }
          100% { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
      {/* Booking Modal */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
}