import { useState } from "react";

const testimonials = [
  {
    id: 0,
    name: "Adaeze Okonkwo",
    role: "Business Owner",
    location: "Lagos, Nigeria",
    category: "Commercial Dispute",
    quote:
      "I had a contractual dispute with a partner that had been dragging on for over a year. Within two mediation sessions at Three C's Met, we reached a binding agreement that satisfied both parties. What struck me most was how the mediator made us feel heard, not just managed. This is the future of conflict resolution.",
    initials: "AO",
    color: "bg-primary",
  },
  {
    id: 1,
    name: "Engr. Babatunde Fashola",
    role: "Senior Engineer",
    location: "Abuja, Nigeria",
    category: "Workplace Mediation",
    quote:
      "Our company had a serious internal dispute between two senior staff members that was affecting productivity. Three C's Met handled the entire process with absolute professionalism and confidentiality. The resolution was fair, fast, and preserved both working relationships. I recommend them without hesitation.",
    initials: "BF",
    color: "bg-secondary",
  },
  {
    id: 2,
    name: "Mrs. Ngozi Eze",
    role: "Community Leader",
    location: "Enugu, Nigeria",
    category: "Community Conflict",
    quote:
      "The peer mediation program they brought to our community was transformational. Our children learned how to resolve conflicts with dignity and maturity. The Ceo and his team are doing God's work, building peace from the grassroots up.",
    initials: "NE",
    color: "bg-accent",
  },
  {
    id: 3,
    name: "Dr. Emeka Okafor",
    role: "Family Law Attorney",
    location: "Port Harcourt, Nigeria",
    category: "Family Mediation",
    quote:
      "As a lawyer, I was initially skeptical about referring clients to mediation. After partnering with Three C's Met on several family matters, I am now a strong advocate. Their process is structured, their neutrality is genuine, and the outcomes are far better than what litigation would have achieved.",
    initials: "EO",
    color: "bg-primary",
  },
  {
    id: 4,
    name: "Aisha Mahmoud",
    role: "Program Participant",
    location: "Kano, Nigeria",
    category: "Women Outreach",
    quote:
      "The women's mediation outreach program gave me a voice I never knew I had. I was able to resolve a long-standing family dispute in a safe, structured environment. The training they provided has also changed how I handle conflict in my daily life.",
    initials: "AM",
    color: "bg-accent",
  },
];

const smallCards = testimonials.slice(1);

export default function Testimonials() {
  const [featured, setFeatured] = useState(testimonials[0]);
  const [animating, setAnimating] = useState(false);

  const switchFeatured = (t) => {
    if (t.id === featured.id) return;
    setAnimating(true);
    setTimeout(() => {
      setFeatured(t);
      setAnimating(false);
    }, 300);
  };

  return (
    <section className="py-24 bg-neutral-50 relative overflow-hidden">

      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-accent pb-1">
            Testimonials
          </span>
          <h2
            className="text-neutral-900 font-bold text-3xl sm:text-4xl mb-4"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Voices of{" "}
            <span className="text-primary">Resolution</span>
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Real stories from individuals, organizations, and communities whose conflicts
            were transformed into lasting agreements.
          </p>
        </div>

        {/* Featured quote */}
        <div
          className="relative bg-white rounded-3xl border border-neutral-200 shadow-xl p-8 sm:p-12 mb-6 transition-all duration-300"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(10px)" : "translateY(0)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          {/* Giant quote mark */}
          <div
            className="absolute top-6 left-8 text-8xl font-black text-neutral-100 leading-none select-none pointer-events-none"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            "
          </div>

          <div className="relative grid lg:grid-cols-12 gap-8 items-center">

            {/* Avatar */}
            <div className="lg:col-span-2 flex lg:flex-col items-center gap-4 lg:gap-3">
              <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl ${featured.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <span className="text-white font-bold text-xl lg:text-2xl" style={{ fontFamily: "'Georgia', serif" }}>
                  {featured.initials}
                </span>
              </div>
              {/* Category badge */}
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-primary/8 text-primary text-center whitespace-nowrap"
                style={{ backgroundColor: "rgba(11,93,59,0.08)" }}>
                {featured.category}
              </span>
            </div>

            {/* Quote text */}
            <div className="lg:col-span-8">
              <p
                className="text-neutral-700 text-lg sm:text-xl leading-relaxed font-light mb-6"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                "{featured.quote}"
              </p>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              <div>
                <p className="text-neutral-900 font-bold text-base">{featured.name}</p>
                <p className="text-neutral-500 text-sm">{featured.role} · {featured.location}</p>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="lg:col-span-2 flex lg:flex-col items-center justify-center gap-2">
              {testimonials.map((t) => (
                <button
                  key={t.id}
                  onClick={() => switchFeatured(t)}
                  className={`rounded-full transition-all duration-300 ${
                    featured.id === t.id
                      ? "w-3 h-3 bg-primary"
                      : "w-2 h-2 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`View ${t.name}'s testimonial`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}