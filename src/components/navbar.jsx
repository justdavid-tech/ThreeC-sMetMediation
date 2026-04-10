import { useState, useEffect } from "react";
import BookingModal from "./bookingmodal";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Mediation", href: "/services/mediation" },
      { label: "Negotiation", href: "/services/negotiation" },
      { label: "Counseling", href: "/services/counseling" },
      { label: "Conciliation", href: "/services/conciliation" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Training", href: "/training" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-primary-dark text-accent text-xs text-center py-2 px-4 font-medium tracking-widest uppercase hidden md:block">
        Pioneers in Peer Mediation in Africa &nbsp;•&nbsp; 648+ Certified Youth Mediators
      </div>

      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-lg border-b border-neutral-200"
            : "bg-white border-b border-neutral-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              {/* Emblem icon */}
              <div className="relative w-12 h-12 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md group-hover:shadow-primary/30 transition-shadow duration-300">
                  <img src="/logo-mediation.jpg" alt="Logo" className="w-12 h-12 rounded-full" />
                </div>
              </div>

              {/* Text */}
              <div className="leading-tight">
                <span className="block text-primary font-bold text-base tracking-tight" style={{ fontFamily: "'Georgia', serif" }}>
                  Three C's Met
                </span>
                <span className="block text-neutral-500 text-[10px] uppercase tracking-widest font-medium">
                  Mediation Institute
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary transition-colors duration-200 rounded-md hover:bg-primary/5">
                      {link.label}
                      <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    <div className={`absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-neutral-100 overflow-hidden transition-all duration-200 origin-top ${
                      activeDropdown === link.label ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
                    }`}>
                      <div className="py-2">
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary/5 hover:text-primary transition-colors duration-150"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary transition-colors duration-200 rounded-md hover:bg-primary/5"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setBookingOpen(true)}
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-light transition-all duration-300 shadow-md hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                  <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                  <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-screen border-t border-neutral-100" : "max-h-0"}`}>
          <div className="bg-white px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-neutral-700 rounded-lg hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    {link.label}
                    <svg className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-accent/30 pl-4">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block py-2 text-sm text-neutral-600 hover:text-primary transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-3 text-sm font-medium text-neutral-700 rounded-lg hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
            <div className="pt-3 pb-1">
              <button
                onClick={() => { setBookingOpen(true); setMobileOpen(false); }}
                className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-light transition-colors"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Booking Modal (uses shared emailjsConfig) */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}