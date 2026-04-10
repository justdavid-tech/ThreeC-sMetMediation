const achievements = [
  {
    stat: "648+",
    label: "Children Certified",
    description: "Peer mediators trained and certified across Nigeria, Uganda & Malawi",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 20l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    stat: "3+",
    label: "Countries Reached",
    description: "Nigeria, Uganda, Malawi — with participants from Turkey joining sessions",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="2"/>
        <path d="M7 20h26M20 7c-3 3-5 8-5 13s2 10 5 13M20 7c3 3 5 8 5 13s-2 10-5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    stat: "1st",
    label: "International Competition",
    description: "Won 1st place among children across the globe — NAPP/OPM, sponsored by JAMS Foundation",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M20 30v6M15 36h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    stat: "4",
    label: "Books Authored",
    description: "Including two editions of the Handbook on Contemporary Facets of Mediation",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 8h20a2 2 0 012 2v22a2 2 0 01-2 2H10a2 2 0 01-2-2V10a2 2 0 012-2z" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 14h12M14 19h12M14 24h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    stat: "10+",
    label: "Years of Practice",
    description: "Dedicated years advancing ADR and mediation across Nigeria and Africa",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 12v8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    stat: "∞",
    label: "Lives Impacted",
    description: "Through mediation services, training programs and community outreach initiatives",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 28s-10-6-10-13a7 7 0 0114 0 7 7 0 0114 0c0 7-10 13-10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const books = [
  {
    title: "Understanding the Basic Principles of Property Management",
    category: "Real Estate",
    color: "bg-secondary/10 text-secondary border-secondary/20",
    image: "/Book1.jpeg",
  },
  {
    title: "Handbook on the Contemporary Facets of Mediation",
    category: "Mediation",
    color: "bg-primary/10 text-secondary border-secondary/20",
    image: "/book2.jpeg",
  },
  {
    title: "Handbook on the Contemporary Facets of Mediation (Revised Edition)",
    category: "Mediation",
    color: "bg-secondary/10 text-secondary border-secondary/20",
    image: "/book3.jpeg",
  },
  {
    title: "The Practice of Peer Mediation Our Story",
    category: "Peer Mediation",
    color: "bg-secondary/10 text-secondary border-secondary/20",
    image: "/book3.jpeg",
  },
];

const timeline = [
  {
    period: "Early Career",
    title: "Law & Real Estate",
    description:
      "After call to the bar, Chijioke developed a strong bias for the real estate sector. It was here that mediation first emerged as an indispensable professional tool, one he pursued with everything he had.",
    color: "bg-primary",
  },
  {
    period: "Pre-COVID",
    title: "A Wife's Counsel",
    description:
      "His wife encouraged him to carve a niche and document his experience. He heeded her advice and authored four books, one on property management and three on mediation, including the landmark Handbook on Contemporary Facets of Mediation.",
    color: "bg-primary",
  },
  {
    period: "COVID-19 Era",
    title: "The Peer Mediation Pioneer",
    description:
      "At the peak of COVID-19, Chijioke launched Africa's first structured peer mediation initiative, training children as certified mediators in Nigeria and Uganda, and interfacing with youth from Malawi and Turkey.",
    color: "bg-primary",
  },
  {
    period: "Today",
    title: "Institutional Builder",
    description:
      "Now operating through three coordinated arms, a Secretariat, a Social Impact Centre, and a Training Institute, Chijioke is building the infrastructure for the future of mediation across Africa and beyond.",
    color: "bg-primary",
  },
];

const values = [
  {
    title: "Our Mission",
    content:
      "To provide a comprehensive, structured, and accessible conflict resolution framework that empowers individuals, institutions, and communities to achieve lasting peace without resorting to litigation.",
    border: "border-primary/20",
    bg: "bg-primary/4",
  },
  {
    title: "Our Vision",
    content:
      "A society where conflict resolution begins early, mediation is embedded in every institution, and peace is not accidental but built, practiced, and sustained from the grassroots up.",
    border: "border-accent/20",
    bg: "bg-primary/4",
  },
  {
    title: "Our Approach",
    content:
      "Structured and professional. Inclusive and socially responsive. Preventive as well as curative. We focus on sustainable outcomes not just quick settlements and bring the depth of law, psychology, and human connection to every case.",
    border: "border-secondary/20",
    bg: "bg-primary/4",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO ── */}
<section className="relative min-h-screen flex items-center bg-secondary-dark overflow-hidden -mt-[50px]">

  {/* Grid pattern */}
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage: `radial-gradient(circle, #D4AF37 1px, transparent 1px)`,
      backgroundSize: "36px 36px",
    }}
  />

  {/* Glow accents */}
  <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-accent/20 blur-[160px] rounded-full animate-pulse" />
  <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-yellow-400/10 blur-[160px] rounded-full animate-pulse" />

  {/* Vertical accent line */}
  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-accent to-transparent" />

  {/* Strategic animated lines */}
  <svg
    className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-20"
    width="320"
    height="320"
    viewBox="0 0 320 320"
    fill="none"
  >
    <path
      d="M20 260 Q120 180 160 140 Q220 80 300 40"
      stroke="#D4AF37"
      strokeWidth="2"
      strokeLinecap="round"
      className="animate-[dash_6s_linear_infinite]"
    />
    <circle cx="20" cy="260" r="6" fill="#D4AF37" />
    <circle cx="160" cy="140" r="5" fill="#D4AF37" opacity="0.6" />
    <circle cx="300" cy="40" r="6" fill="#D4AF37" />
  </svg>

  {/* Floating keywords */}
  <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 opacity-20">
    {["Mediation", "Structure", "Resolution", "Strategy", "Impact"].map((word, i) => (
      <span
        key={word}
        className="text-neutral-400 text-xs uppercase tracking-[0.4em]"
        style={{ transform: `translateX(${i % 2 ? "20px" : "0px"})` }}
      >
        {word}
      </span>
    ))}
  </div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 py-32">
    <div className="max-w-3xl">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-10">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.25em]">
            About the Institute
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-white font-bold mb-6 leading-[1.1]"
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
          }}
        >
          It Started With a Belief.
          <br />
          <span className="bg-gradient-to-r from-yellow-300 via-accent to-yellow-500 bg-clip-text text-transparent">
            It Became a Movement.
          </span>
        </h1>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-16 h-[2px] bg-accent rounded-full" />
          <div className="w-8 h-[2px] bg-accent/40 rounded-full" />
          <div className="w-4 h-[2px] bg-accent/20 rounded-full" />
        </div>

        {/* Description */}
        <p className="text-neutral-300 text-lg leading-relaxed mb-8">
          Three C's Met was founded on a simple but powerful conviction that
          conflict is not the end of progress, but the beginning of transformation
          when handled with structure, clarity, and skill.
        </p>

        <p className="text-neutral-400 text-base leading-relaxed mb-12 max-w-xl">
          What began as a mission to make mediation accessible has grown into a
          respected institution shaping how individuals, organizations, and
          communities navigate conflict across borders.
        </p>

        {/* Manifesto box */}
        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-7
          hover:bg-white/10 transition duration-300 group overflow-hidden">

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
            bg-gradient-to-r from-accent/10 via-transparent to-transparent" />

          <p className="relative text-neutral-200 text-base leading-relaxed">
            We don’t just resolve disputes, we{" "}
            <span className="text-white font-medium">
              redefine how they are approached.
            </span>{" "}
            By equipping people with the frameworks, discipline, and mindset of
            effective negotiation and mediation, we turn moments of tension into
            opportunities for alignment, growth, and lasting peace.
          </p>
        </div>
    </div>
  </div>
</section>

      {/* ── FOUNDER PROFILE ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Photo */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-neutral-100 shadow-2xl">
                <img
                  src="/AboutImage.jpeg"
                  alt="Chijioke Nnanna Ibeku"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/40 hidden items-center justify-center"
                  style={{ display: "none" }}
                >
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-primary/30 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-black text-3xl" style={{ fontFamily: "'Georgia', serif" }}>
                        CN
                      </span>
                    </div>
                    <p className="text-white/60 text-sm">Photo placeholder</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl border border-neutral-100 px-5 py-4">
                <p className="text-primary font-black text-2xl" style={{ fontFamily: "'Georgia', serif" }}>
                  8+
                </p>
                <p className="text-neutral-500 text-xs uppercase tracking-widest">Years in Field</p>
              </div>

              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl border-2 border-accent/30 -z-10" />
            </div>

            {/* Text */}
            <div>
              <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-accent pb-1">
                The Founder
              </span>
              <h2
                className="text-neutral-900 font-bold text-3xl sm:text-4xl mb-2"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Chijioke Nnanna Ibeku
              </h2>
              <p className="text-neutral-500 text-sm uppercase tracking-widest mb-6 font-medium">
                Lawyer · Certified Mediator · Author · Pioneer
              </p>

              <div className="space-y-4 text-neutral-600 text-base leading-relaxed mb-8">
                <p>
                  Chijioke Nnanna Ibeku is the Founder and Lead Mediator of Three C's Met
                  International Institute of Mediation, Negotiation, Counseling and Conciliation.
                  A lawyer by training, he has always had a deep passion for Alternative Dispute
                  Resolution with a particular focus on mediation.
                </p>
                <p>
                  As a younger lawyer working in the real estate sector, mediation was not
                  just a tool it was a discipline he pursued relentlessly. That passion
                  eventually grew into something far larger: a movement to institutionalize
                  peace-building across Africa.
                </p>
                <p>
                  Today, he is widely recognized as a pioneer in peer mediation on the
                  continent having certified over 648 children as peer mediators and earned
                  international recognition for his work in building a culture of early
                  conflict resolution.
                </p>
              </div>

              {/* Credentials */}
              <div className="flex flex-wrap gap-3">
                {["Certified Mediator", "Author of 4 Books", "ADR Pioneer — Africa", "Award Recipient"].map((c) => (
                  <span
                    key={c}
                    className="px-4 py-2 rounded-full bg-primary/8 text-primary text-xs font-semibold border border-primary/15"
                    style={{ backgroundColor: "rgba(11,93,59,0.06)" }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY TIMELINE ── */}
      <section className="py-10 bg-neutral-50 relative overflow-hidden">
        <div className="absolute -right-20 top-0 w-72 h-72 rounded-full bg-primary/4 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-accent pb-1">
              The Journey
            </span>
            <h2
              className="text-neutral-900 font-bold text-3xl sm:text-4xl"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              A Story of Conviction
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent hidden lg:block" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
                >
                  {/* Left / Right content */}
                  <div className={`${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                    <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-7 hover:shadow-md transition-shadow duration-200">
                      <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 text-white ${item.color}`}>
                        {item.period}
                      </span>
                      <h3
                        className="text-neutral-900 font-bold text-xl mb-3"
                        style={{ fontFamily: "'Georgia', serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className={`hidden lg:flex justify-center items-center absolute left-1/2 -translate-x-1/2 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <div className={`w-5 h-5 rounded-full ${item.color} ring-4 ring-white shadow-md`} />
                  </div>

                  {/* Empty opposite column */}
                  <div className={`hidden lg:block ${i % 2 !== 0 ? "lg:order-1" : ""}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION / APPROACH ── */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-accent pb-1">
              What Drives Us
            </span>
            <h2
              className="text-neutral-900 font-bold text-3xl sm:text-4xl"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Mission, Vision & Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className={`rounded-2xl border ${v.border} ${v.bg} p-8 hover:shadow-md transition-shadow duration-200`}
              >
                <div className="text-4xl mb-5">{v.icon}</div>
                <h3
                  className="text-neutral-900 font-bold text-xl mb-4"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{v.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
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
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-primary pb-1">
              Track Record
            </span>
            <h2
              className="text-white font-bold text-3xl sm:text-4xl"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Achievements &{" "}
              <span className="text-primary">Recognition</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="group bg-white/3 border border-white/8 rounded-2xl p-6 hover:bg-white/6 hover:border-white/15 hover:-translate-y-1 transition-all duration-300"
                style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    {a.icon}
                  </div>
                  <p
                    className="text-white font-black text-3xl"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {a.stat}
                  </p>
                </div>
                <p className="text-white font-bold text-base mb-2">{a.label}</p>
                <p className="text-neutral-400 text-sm leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKS ── */}
      <section className="py-24 bg-white" id="books">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-accent pb-1">
                Published Works
              </span>
              <h2
                className="text-neutral-900 font-bold text-3xl sm:text-4xl mb-5"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Books by the Founder
              </h2>
              <p className="text-neutral-500 text-base leading-relaxed mb-8">
                Chijioke Ibeku has authored four books that document his journey,
                expertise, and vision serving as essential references in mediation
                practice across Africa.
              </p>

              <div className="space-y-4">
                {books.map((book, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-4 rounded-2xl border ${book.color} p-5 hover:shadow-sm transition-shadow duration-200`}
                    style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
                  >
                    {/* Book cover thumbnail */}
                    <div className="flex-shrink-0 w-14 h-[4.5rem] rounded-lg overflow-hidden shadow-md border border-neutral-200 bg-neutral-100">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-70 block mb-1">
                        {book.category}
                      </span>
                      <p className="font-semibold text-sm leading-snug">
                        {book.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote block */}
            <div className="relative">
              <div className="bg-neutral-900 rounded-3xl p-10 relative overflow-hidden">
                <div
                  className="absolute top-4 left-6 text-8xl font-black text-white/5 leading-none select-none pointer-events-none"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  "
                </div>
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `radial-gradient(circle, #D4AF37 1px, transparent 1px)`,
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="relative">
                  <p
                    className="text-white text-xl leading-relaxed mb-8 font-light"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    "My wife told me it was about time I carved a niche for myself career-wise.
                    She mentioned I write a book on all my experience both in real estate
                    and mediation. Thank God I heeded her advice."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold" style={{ fontFamily: "'Georgia', serif" }}>CN</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Chijioke Nnanna Ibeku</p>
                      <p className="text-neutral-400 text-xs">Founder & Lead Mediator</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl border-2 border-accent/30 -z-10" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}