import { useState, useRef } from "react";
import { FaScaleBalanced, FaGraduationCap, FaRegComments } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import emailjsConfig from "../config/emailjsconfig";

// ── Contact info cards ─────────────────────────────────────
const contactDetails = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a18.04 18.04 0 009.516 9.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0130 24.72V28a2 2 0 01-2 2h-1C15.163 30 8 22.837 8 14v-4z"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Phone Numbers",
    lines: ["+234 802 361 8078", "+234 809 865 5435", "+234 808 221 7630"],
    color: "text-primary",
    bg: "bg-primary/8",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 14l14 9 14-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    label: "Email",
    lines: ["threecsmediators@gmail.com"],
    color: "text-secondary",
    bg: "bg-secondary/8",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6C14.477 6 10 10.477 10 16c0 8.25 10 18 10 18s10-9.75 10-18c0-5.523-4.477-10-10-10z"
          stroke="currentColor" strokeWidth="2"/>
        <circle cx="20" cy="16" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    label: "Appointments",
    lines: ["Book via phone or the form below", "Wednesday live sessions available"],
    color: "text-accent-dark",
    bg: "bg-accent/8",
  },
];

const socials = [
  {
    label: "Facebook — Chijioke Ibeku Nnanna",
    page: "Mediator In Action (@naijamediator)",
    href: "https://facebook.com/naijamediator",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
    color: "hover:bg-blue-600",
  },
  {
    label: "LinkedIn",
    page: "Chijioke Ibeku",
    href: "https://linkedin.com/in/chijioke-ibeku",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    color: "hover:bg-blue-700",
  },
  {
    label: "X (Twitter)",
    page: "MEDIATOR IN ACTION",
    href: "https://x.com/naijamediator",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    color: "hover:bg-neutral-800",
  },
];

const inquiryTypes = [
  "General Inquiry",
  "Book an Appointment",
  "Mediation Services",
  "Negotiation Services",
  "Counseling Services",
  "Conciliation Services",
  "Professional Training Enrollment",
  "Peer Mediation Program",
  "Women Outreach Program",
  "Sponsorship / Partnership",
  "Wednesday Live Session",
  "Other",
];

// ── Initial form state ──────────────────────────────────────
const initialForm = {
  from_name: "",
  from_email: "",
  phone: "",
  inquiry_type: "",
  preferred_date: "",
  message: "",
};

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  // ── Validation ──────────────────────────────────────────
  const validate = () => {
    const e = {};
    if (!form.from_name.trim()) e.from_name = "Full name is required.";
    if (!form.from_email.trim()) e.from_email = "Email address is required.";
    else if (!/\S+@\S+\.\S+/.test(form.from_email)) e.from_email = "Enter a valid email.";
    if (!form.inquiry_type) e.inquiry_type = "Please select an inquiry type.";
    if (!form.message.trim()) e.message = "Please write a message.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // ── Submit ──────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      );
      setStatus("success");
      setForm(initialForm);
      setErrors({});
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  // ── Shared input classes ────────────────────────────────
  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-neutral-800 placeholder-neutral-400
     bg-white transition-all duration-200 outline-none
     focus:ring-2 focus:ring-primary/20 focus:border-primary
     ${errors[field] ? "border-red-400 bg-red-50/30" : "border-neutral-200 hover:border-neutral-300"}`;

  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-secondary-dark overflow-hidden -mt-[35px]">

  {/* Background pattern */}
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage: `radial-gradient(circle, #D4AF37 1px, transparent 1px)`,
      backgroundSize: "36px 36px",
    }}
  />

  {/* Glow */}
  <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/20 blur-[140px] rounded-full" />

  {/* Accent line */}
  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-accent to-transparent" />

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 py-28">

    {/* Heading Centered */}
    <div className="text-center max-w-2xl mx-auto mb-16">

      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
        <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
        <span className="text-accent text-xs font-semibold uppercase tracking-widest">
          Get In Touch
        </span>
      </span>

      <h1
        className="text-white font-bold mb-5"
        style={{
          fontFamily: "'Georgia', serif",
          fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
        }}
      >
        How Can We Help You?
      </h1>

      <p className="text-neutral-300 text-lg leading-relaxed">
        Choose your path and we’ll guide you to the right solution — quickly and efficiently.
      </p>
    </div>

    {/* Engagement Cards */}
    <div className="grid md:grid-cols-3 gap-6">

      {/* Card 1 */}
      <a
        href="/services"
        className="group relative bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md hover:scale-[1.04] hover:bg-white/10 transition duration-300"
      >
        <div className="mb-6 text-accent text-3xl">
          <FaScaleBalanced />
        </div>

        <h3 className="text-white text-lg font-semibold mb-2">
          Explore Services
        </h3>

        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
          Resolve conflicts effectively with structured, professional mediation support.
        </p>

        <span className="text-accent text-sm font-semibold group-hover:underline">
          Get Started →
        </span>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-accent/10 blur-xl transition duration-500 rounded-xl" />
      </a>

      {/* Card 2 */}
      <a
        href="/training"
        className="group relative bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md hover:scale-[1.04] hover:bg-white/10 transition duration-300"
      >
        <div className="mb-6 text-accent text-3xl">
          <FaGraduationCap />
        </div>

        <h3 className="text-white text-lg font-semibold mb-2">
          Training Programs
        </h3>

        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
          Become a certified mediator through our structured and practical training programs.
        </p>

        <span className="text-accent text-sm font-semibold group-hover:underline">
          Apply Now →
        </span>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-accent/10 blur-xl transition duration-500 rounded-xl" />
      </a>

      {/* Card 3 */}
      <a
        href="/contact"
        className="group relative bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md hover:scale-[1.04] hover:bg-white/10 transition duration-300"
      >
        <div className="mb-6 text-accent text-3xl">
          <FaRegComments />
        </div>

        <h3 className="text-white text-lg font-semibold mb-2">
          General Inquiry
        </h3>

        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
          Have questions? Reach out and our team will respond promptly.
        </p>

        <span className="text-accent text-sm font-semibold group-hover:underline">
          Contact Us →
        </span>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-accent/10 blur-xl transition duration-500 rounded-xl" />
      </a>

    </div>

  </div>
</section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -right-32 top-20 w-80 h-80 rounded-full bg-primary/4 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 bottom-10 w-60 h-60 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14">

            {/* ── LEFT: Contact Info ── */}
            <div className="lg:col-span-2 space-y-6">

              <div>
                <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-2 border-accent pb-1">
                  Contact Details
                </span>
                <h2
                  className="text-neutral-900 font-bold text-2xl sm:text-3xl mb-3"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Reach Us Directly
                </h2>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  We respond promptly. You can also book an appointment
                  directly via phone or through the form.
                </p>
              </div>

              {/* Contact cards */}
              {contactDetails.map((c, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-neutral-50 border border-neutral-200 rounded-2xl p-5 hover:shadow-sm transition-shadow duration-200"
                >
                  <div className={`w-11 h-11 rounded-xl ${c.bg} ${c.color} flex items-center justify-center flex-shrink-0`}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1.5">
                      {c.label}
                    </p>
                    {c.lines.map((line, j) => (
                      <p key={j} className="text-neutral-800 text-sm font-medium leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Socials */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
                  Follow Us
                </p>
                <div className="space-y-3">
                  {socials.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-xl bg-white border border-neutral-200
                        text-neutral-600 ${s.color} hover:text-white hover:border-transparent
                        transition-all duration-200 group`}
                    >
                      <span className="flex-shrink-0">{s.icon}</span>
                      <div>
                        <p className="text-xs font-semibold leading-tight">{s.label}</p>
                        <p className="text-[10px] text-neutral-400 group-hover:text-white/70 transition-colors">
                          {s.page}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Wednesday sessions note */}
              <div className="bg-primary rounded-2xl p-5 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <p className="text-xs font-bold uppercase tracking-widest text-accent">
                    Live Sessions
                  </p>
                </div>
                <p className="font-semibold text-sm mb-1" style={{ fontFamily: "'Georgia', serif" }}>
                  Every Wednesday
                </p>
                <p className="text-white/60 text-xs leading-relaxed">
                  Our live sessions are open to be sponsored or paid for by those interested.
                  Contact us to learn more or register.
                </p>
              </div>
            </div>

            {/* ── RIGHT: Contact Form ── */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-neutral-200 shadow-xl p-8 sm:p-10">

                <div className="mb-8">
                  <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3 border-b-2 border-accent pb-1">
                    Send a Message
                  </span>
                  <h3
                    className="text-neutral-900 font-bold text-2xl"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    How Can We Help You?
                  </h3>
                </div>

                {/* Success state */}
                {status === "success" && (
                  <div className="mb-6 bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-green-800 font-bold text-base mb-1" style={{ fontFamily: "'Georgia', serif" }}>
                      Message Sent Successfully!
                    </p>
                    <p className="text-green-600 text-sm">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-4 text-xs text-green-700 underline underline-offset-2 hover:text-green-900"
                    >
                      Send another message
                    </button>
                  </div>
                )}

                {/* Error state */}
                {status === "error" && (
                  <div className="mb-6 bg-red-50 border border-red-200 rounded-2xl p-4 flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-red-700 text-sm">
                      Something went wrong. Please try again or contact us directly by phone.
                    </p>
                  </div>
                )}

                {/* Form */}
                {status !== "success" && (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>

                    {/* Row 1: Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-600 mb-1.5 uppercase tracking-wider">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="from_name"
                          value={form.from_name}
                          onChange={handleChange}
                          placeholder="e.g. Chijioke Ibeku"
                          className={inputClass("from_name")}
                        />
                        {errors.from_name && (
                          <p className="text-red-500 text-xs mt-1">{errors.from_name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-600 mb-1.5 uppercase tracking-wider">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="from_email"
                          value={form.from_email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={inputClass("from_email")}
                        />
                        {errors.from_email && (
                          <p className="text-red-500 text-xs mt-1">{errors.from_email}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Phone + Inquiry Type */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-600 mb-1.5 uppercase tracking-wider">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+234 800 000 0000"
                          className={inputClass("phone")}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-600 mb-1.5 uppercase tracking-wider">
                          Inquiry Type <span className="text-red-400">*</span>
                        </label>
                        <select
                          name="inquiry_type"
                          value={form.inquiry_type}
                          onChange={handleChange}
                          className={inputClass("inquiry_type")}
                        >
                          <option value="">Select a category</option>
                          {inquiryTypes.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                        {errors.inquiry_type && (
                          <p className="text-red-500 text-xs mt-1">{errors.inquiry_type}</p>
                        )}
                      </div>
                    </div>

                    {/* Preferred date */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 mb-1.5 uppercase tracking-wider">
                        Preferred Appointment Date{" "}
                        <span className="text-neutral-400 normal-case font-normal">(optional)</span>
                      </label>
                      <input
                        type="date"
                        name="preferred_date"
                        value={form.preferred_date}
                        onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]}
                        className={inputClass("preferred_date")}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 mb-1.5 uppercase tracking-wider">
                        Your Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Briefly describe your situation or what you need help with..."
                        className={`${inputClass("message")} resize-none`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                      )}
                      <p className="text-neutral-400 text-xs mt-1 text-right">
                        {form.message.length} characters
                      </p>
                    </div>

                    {/* Privacy note */}
                    <p className="text-neutral-400 text-xs leading-relaxed">
                      Your information is confidential and will only be used to respond
                      to your inquiry. We do not share personal data with third parties.
                    </p>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-white font-bold text-sm rounded-xl
                        hover:bg-primary-light transition-all duration-300 shadow-lg hover:shadow-primary/30
                        disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5"
                    >
                      {status === "sending" ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                          </svg>
                          Sending your message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK ACTIONS ── */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: "⚖️",
                title: "Book Mediation",
                desc: "Need a mediator? Tell us about your dispute and we'll set up a session.",
                cta: "Get Started",
                href: "#form",
                bg: "bg-primary",
              },
              {
                icon: "🎓",
                title: "Enroll in Training",
                desc: "Ready to become a certified mediator? Register for the next cohort.",
                cta: "View Programs",
                href: "/training",
                bg: "bg-secondary",
              },
              {
                icon: "📺",
                title: "Wednesday Live Sessions",
                desc: "Join or sponsor our weekly live mediation sessions every Wednesday.",
                cta: "Learn More",
                href: "/events",
                bg: "bg-accent",
              },
            ].map((a, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-md transition-shadow duration-200">
                <span className="text-3xl block mb-4">{a.icon}</span>
                <h3 className="font-bold text-neutral-900 text-base mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                  {a.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-5">{a.desc}</p>
                <a
                  href={a.href}
                  className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white px-4 py-2.5 rounded-lg ${a.bg} hover:opacity-90 transition-opacity`}
                >
                  {a.cta}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}