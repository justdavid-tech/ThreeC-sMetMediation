const footerLinks = {
  Services: [
    { label: "Mediation", href: "/services/mediation" },
    { label: "Negotiation", href: "/services/negotiation" },
    { label: "Counseling", href: "/services/counseling" },
    { label: "Conciliation", href: "/services/conciliation" },
  ],
  Institute: [
    { label: "About Us", href: "/about" },
    { label: "Training & Certification", href: "/training" },
  ],
  Resources: [
    { label: "Books by the Founder", href: "/about#books" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com/naijamediator",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/chijioke-ibeku",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/naijamediator",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const firms = [
  {
    name: "Three C's Met Mediators",
    role: "Secretariat · Training Schedules · Payments",
    accent: "border-accent",
  },
  {
    name: "Centre for Peer Mediation & Peace Building",
    role: "Peer Mediation · Women Outreach · Social Impact",
    accent: "border-primary-light",
  },
  {
    name: "Three C's Met International Institute",
    role: "Training & Certification in Mediation",
    accent: "border-secondary-light",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-dark text-neutral-300">
     {/* ── CTA ── */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-white font-bold text-2xl sm:text-3xl mb-4"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Ready to work with us?
          </h2>
          <p className="text-white/70 text-base mb-8 max-w-xl mx-auto">
            Whether you need mediation services, want to enroll in training,
            or simply want to learn more, we're here.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3.5 bg-accent text-primary-dark font-bold text-sm rounded-xl hover:bg-accent-light transition-colors duration-200 shadow-lg"
            >
              Book Appointment
            </a>
            <a
              href="/training"
              className="px-8 py-3.5 bg-white/10 text-white font-semibold text-sm rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-200"
            >
              Explore Training
            </a>
          </div>
        </div>
      </section>

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3v18M12 3l-6 4.5M12 3l6 4.5M3 12h4.5M16.5 12H21M6 7.5L3 12l3 4.5M18 7.5l3 4.5-3 4.5" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4" cy="12" r="2" fill="#D4AF37" opacity="0.7"/>
                  <circle cx="20" cy="12" r="2" fill="#D4AF37" opacity="0.7"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-base" style={{ fontFamily: "'Georgia', serif" }}>
                  Three C's Met
                </p>
                <p className="text-neutral-400 text-[10px] uppercase tracking-widest">
                  Mediation Institute
                </p>
              </div>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-sm">
              An integrated system for dispute prevention, management, and resolution, serving individuals, institutions, and communities across Africa and beyond.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-sm text-neutral-400 space-y-0.5">
                  <p>+234 802 361 8078</p>
                  <p>+234 809 865 5435</p>
                  <p>+234 808 221 7630</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-accent hover:text-primary-dark text-neutral-400 flex items-center justify-center transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav link columns */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                  {group}
                </p>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-neutral-400 hover:text-accent transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 3 Firms column */}
          <div className="lg:col-span-3">
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Our Three Arms
            </p>
            <div className="space-y-3">
              {firms.map((firm) => (
                <div
                  key={firm.name}
                  className={`border-l-2 ${firm.accent} pl-3 py-1`}
                >
                  <p className="text-white text-sm font-medium leading-snug">
                    {firm.name}
                  </p>
                  <p className="text-neutral-500 text-xs mt-0.5">{firm.role}</p>
                </div>
              ))}
            </div>

            {/* Wednesday sessions note */}
            <div className="mt-6 bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <p className="text-white text-xs font-semibold uppercase tracking-wider">
                  Live Sessions
                </p>
              </div>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Every Wednesday (open to sponsorship). Join our live mediation sessions.
              </p>
              <a
                href="/contact"
                className="inline-block mt-2 text-accent text-xs font-medium hover:underline"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs">
            © {currentYear} Three C's Met International Institute of Mediation, Negotiation, Counseling & Conciliation. All rights reserved.
          </p>
          <p className="text-neutral-600 text-xs">
            Founded by{" "}
            <a href="/about" className="text-accent hover:underline">
              Chijioke Nnanna Ibeku
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}