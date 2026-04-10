import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import emailjsConfig from "../config/emailjsconfig";

const initialForm = {
  from_name: "",
  from_email: "",
  phone: "",
  preferred_date: "",
  message: "",
};

const inquiryTypes = [
  "Book an Appointment",
  "Mediation Services",
  "Negotiation Services",
  "Counseling Services",
  "Conciliation Services",
  "Professional Training Enrollment",
  "Peer Mediation Program",
  "Women Outreach Program",
  "Wednesday Live Session",
  "Other",
];

export default function BookingModal({ isOpen, onClose }) {
  const formRef = useRef();
  const [form, setForm] = useState(initialForm);
  const [inquiryType, setInquiryType] = useState("Book an Appointment");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setForm(initialForm);
        setInquiryType("Book an Appointment");
        setStatus("idle");
        setErrors({});
      }, 300);
    }
  }, [isOpen]);

  const validate = () => {
    const e = {};
    if (!form.from_name.trim()) e.from_name = "Full name is required.";
    if (!form.from_email.trim()) e.from_email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.from_email)) e.from_email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Please write a message.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");

    // Inject the inquiry_type into the hidden input before sending
    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.from_name,
          from_email: form.from_email,
          phone: form.phone,
          inquiry_type: inquiryType,
          preferred_date: form.preferred_date,
          message: form.message,
        },
        emailjsConfig.publicKey
      );
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const inputClass = (field) =>
    `w-full px-3.5 py-2.5 rounded-lg border text-sm text-neutral-800 placeholder-neutral-400
     bg-white transition-all duration-200 outline-none
     focus:ring-2 focus:ring-primary/20 focus:border-primary
     ${errors[field] ? "border-red-400 bg-red-50/30" : "border-neutral-200 hover:border-neutral-300"}`;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Book Appointment"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Panel */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-fadeIn max-h-[90vh] flex flex-col">

        {/* Header */}
        <div className="bg-primary px-6 py-5 flex items-center justify-between flex-shrink-0">
          <div>
            <p className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5">
              Three C's Met · Mediation Institute
            </p>
            <h2
              className="text-white font-bold text-lg"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Book an Appointment
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-6 py-6">

          {/* Success */}
          {status === "success" && (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-neutral-900 font-bold text-base mb-1" style={{ fontFamily: "'Georgia', serif" }}>
                Appointment Request Sent!
              </p>
              <p className="text-neutral-500 text-sm mb-5">
                We'll get back to you shortly to confirm your appointment.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-light transition-colors"
              >
                Close
              </button>
            </div>
          )}

          {/* Error */}
          {status === "error" && (
            <div className="mb-4 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-700 text-sm">
                Something went wrong. Please try again or call us directly.
              </p>
            </div>
          )}

          {/* Form */}
          {status !== "success" && (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>

              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={inputClass("from_name")}
                  />
                  {errors.from_name && (
                    <p className="text-red-500 text-xs mt-1">{errors.from_name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
                    Email <span className="text-red-400">*</span>
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

              {/* Phone + Inquiry Type */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
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
                  <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
                    Inquiry Type
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className={inputClass("")}
                  >
                    {inquiryTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
                  Preferred Date{" "}
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
                <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Briefly describe what you need help with..."
                  className={`${inputClass("message")} resize-none`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <p className="text-neutral-400 text-[11px] leading-relaxed">
                 Your information is confidential and only used to respond to your inquiry.
              </p>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-bold text-sm rounded-xl
                  hover:bg-primary-light transition-all duration-300 shadow-md hover:shadow-primary/30
                  disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5"
              >
                {status === "sending" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Confirm Booking
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
