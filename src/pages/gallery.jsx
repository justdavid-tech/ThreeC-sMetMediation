import { useState, useEffect, useCallback } from "react";
// ── Image data with categories ──────────────────────────────
const images = [
 
  { src: "/award-presentation1.jpeg",     category: "Awards",        caption: "Award Presentation Ceremony"          },
  { src: "/award-presentation2.jpeg",     category: "Awards",        caption: "Award Presentation Ceremony"          },
  { src: "/award-presentation3.jpeg",     category: "Awards",        caption: "Award Presentation Ceremony"          },
  { src: "/award-presentaion4.jpeg",      category: "Awards",        caption: "Award Presentation"                   },
  { src: "/award-presentationfull.jpeg",  category: "Awards",        caption: "Full Award Ceremony"                  },
  { src: "/award-presentationfullclean.jpeg", category: "Awards",   caption: "Award Ceremony"                       },
  { src: "/award-received1.jpeg",         category: "Awards",        caption: "Receiving Recognition"                },
  { src: "/award-received2.jpeg",         category: "Awards",        caption: "Award Receipt"                        },
  { src: "/Book1.jpeg",                   category: "Books",         caption: "Handbook on Contemporary Mediation"   },
  { src: "/book2.jpeg",                   category: "Books",         caption: "The Practice of Peer Mediation"       },
  { src: "/book3.jpeg",                   category: "Books",         caption: "Published Works"                      },
  { src: "/certificate1.jpeg",            category: "Certificates",  caption: "Certificate of Mediation"             },
  { src: "/certificate2.jpeg",            category: "Certificates",  caption: "Professional Certificate"             },
  { src: "/flier1.jpeg",                  category: "About",         caption: "Program Flier"                        },
  { src: "/flier2.jpeg",                  category: "About",         caption: "Event Flier"                          },
  { src: "/flier3.jpeg",                  category: "About",         caption: "Training Flier"                       },
  { src: "/live-sessions.jpeg",           category: "Live Sessions", caption: "Wednesday Live Session"               },
  { src: "/presentation1.jpeg",           category: "Presentations", caption: "Public Presentation"                  },
  { src: "/presentation2.jpeg",           category: "Presentations", caption: "Keynote Address"                      },
  { src: "/rough1.jpeg",                  category: "Training",         caption: "Behind the Scenes"                    },
  { src: "/rough2.jpeg",                  category: "Training",         caption: "Behind the Scenes"                    },
  { src: "/speech.jpeg",                  category: "Presentations", caption: "Delivering a Speech"                  },
  { src: "/students1.jpeg",               category: "Training",      caption: "Students at Peer Mediation Training"  },
  { src: "/training1.jpeg",               category: "Training",      caption: "Professional Training Session"        },
  { src: "/trainingclass.jpeg",           category: "Training",      caption: "Training Class in Session"            },
  { src: "/visitation2.jpeg",             category: "Visitations",   caption: "Institutional Visitation"             },
  { src: "/visitationcrowd.jpeg",         category: "Visitations",   caption: "Community Visitation"                 },
  { src: "/visitationperfect.jpeg",       category: "Visitations",   caption: "Visitation Programme"                 },
];

const categories = ["All", "Awards", "Training", "Presentations", "Visitations", "Books", "Certificates", "Live Sessions", "About"];

// ── Masonry column layout ───────────────────────────────────
function splitIntoColumns(items, cols) {
  const columns = Array.from({ length: cols }, () => []);
  items.forEach((item, i) => columns[i % cols].push({ ...item, originalIndex: i }));
  return columns;
}

// ── Lightbox ────────────────────────────────────────────────
function Lightbox({ images, currentIndex, onClose, onPrev, onNext, onGoTo }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const img = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-neutral-950/95 backdrop-blur-md" />

      {/* Counter */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
        <span className="text-neutral-400 text-xs uppercase tracking-widest">
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20
          flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 sm:left-8 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20
          flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-200"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 sm:right-8 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20
          flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-200"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative z-10 max-w-5xl max-h-[80vh] mx-16 flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={img.src}
          src={img.src}
          alt={img.caption}
          className="max-h-[72vh] max-w-full object-contain rounded-2xl shadow-2xl"
          style={{ animation: "lightboxFadeIn 0.25s ease" }}
        />
        <div className="text-center">
          <p className="text-white font-semibold text-sm">{img.caption}</p>
          <span className="text-accent text-xs uppercase tracking-widest mt-1 inline-block">
            {img.category}
          </span>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="absolute bottom-5 left-0 right-0 z-10 flex justify-center gap-2 px-4 overflow-x-auto">
        {images.map((im, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); onGoTo(i); }}
            className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200
              ${i === currentIndex ? "border-accent scale-110" : "border-white/10 opacity-50 hover:opacity-80"}`}
          >
            <img src={im.src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Cinematic Slider ────────────────────────────────────────
function CinematicSlider({ images, onOpenLightbox }) {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((index) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 300);
  }, [transitioning]);

  const prev = () => goTo((current - 1 + images.length) % images.length);
  const next = useCallback(() => goTo((current + 1) % images.length), [current, images.length, goTo]);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [next]);

  const img = images[current];

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100 shadow-xl group cursor-pointer"
        onClick={() => onOpenLightbox(current)}>
        <img
          key={img.src}
          src={img.src}
          alt={img.caption}
          className="w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: transitioning ? 0 : 1 }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="inline-block text-accent text-[10px] font-bold uppercase tracking-widest mb-1">
            {img.category}
          </span>
          <p className="text-white font-bold text-lg" style={{ fontFamily: "'Georgia', serif" }}>
            {img.caption}
          </p>
        </div>

        {/* Counter badge */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <span className="text-white text-xs font-medium">{current + 1} / {images.length}</span>
        </div>

        {/* Expand icon */}
        <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/10 border border-white/20
          flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </div>

        {/* Prev / Next on hover */}
        <button onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-white/20
            flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-accent hover:border-accent transition-all duration-200">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-white/20
            flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-accent hover:border-accent transition-all duration-200">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="flex gap-1.5">
        {images.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className={`h-1 rounded-full transition-all duration-500 ${i === current ? "bg-accent flex-[3]" : "bg-neutral-300 flex-1"}`}
          />
        ))}
      </div>

      {/* Thumbnail strip */}
      <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-10 gap-2">
        {images.map((im, i) => (
          <button key={i} onClick={() => goTo(i)}
            className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200
              ${i === current ? "border-accent scale-105 shadow-md" : "border-transparent opacity-60 hover:opacity-90"}`}>
            <img src={im.src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Masonry Grid ────────────────────────────────────────────
function MasonryGrid({ images, onOpenLightbox }) {
  const [cols, setCols] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCols(2);
      else if (window.innerWidth < 1024) setCols(3);
      else setCols(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const columns = splitIntoColumns(images, cols);

  return (
    <div className="flex gap-3">
      {columns.map((col, ci) => (
        <div key={ci} className="flex-1 flex flex-col gap-3">
          {col.map((img) => (
            <div
              key={img.src}
              onClick={() => onOpenLightbox(img.originalIndex)}
              className="group relative overflow-hidden rounded-2xl bg-neutral-100 cursor-pointer
                hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0
                group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="block text-accent text-[10px] font-bold uppercase tracking-widest mb-0.5">
                  {img.category}
                </span>
                <p className="text-white text-xs font-semibold leading-snug">{img.caption}</p>
              </div>

              {/* Expand icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 border border-white/20
                flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ── Main Gallery Page ───────────────────────────────────────
export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [view, setView]                     = useState("masonry"); // masonry | slider
  const [lightboxIndex, setLightboxIndex]   = useState(null);

  const filtered = activeCategory === "All"
    ? images
    : images.filter((img) => img.category === activeCategory);

  const openLightbox  = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevLightbox  = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
  const nextLightbox  = () => setLightboxIndex((i) => (i + 1) % filtered.length);

  // Category counts
  const counts = categories.reduce((acc, cat) => {
    acc[cat] = cat === "All" ? images.length : images.filter((img) => img.category === cat).length;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative bg-secondary-dark overflow-hidden -mt-[35px]">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, #D4AF37 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-accent to-transparent" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">Photo Gallery</span>
            </span>
            <h1
              className="text-white font-bold mb-4"
              style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Our Story in
              <br />
              <span className="text-accent">Images</span>
            </h1>
            <p className="text-neutral-300 text-base leading-relaxed mb-6">
              A visual journey through our work from award ceremonies and training sessions,
              to community visitations, live events, and published works.
            </p>
            {/* Summary stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {[
                { value: images.length,                                            label: "Total Photos"   },
                { value: categories.length - 1,                                    label: "Categories"     },
                { value: images.filter((i) => i.category === "Awards").length,     label: "Award Photos"   },
                { value: images.filter((i) => i.category === "Training").length,   label: "Training Shots" },
              ].map((s, i) => (
                <div 
                  key={i} 
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <p className="text-accent font-black text-2xl group-hover:scale-110 transition-transform origin-left mb-1" style={{ fontFamily: "'Georgia', serif" }}>
                    {s.value}
                  </p>
                  <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY BODY ── */}
      <section className="py-12 bg-neutral-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Controls row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">

            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setLightboxIndex(null); }}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200
                    ${activeCategory === cat
                      ? "bg-primary text-white border-primary shadow-md"
                      : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300 hover:shadow-sm"
                    }`}
                >
                  {cat}
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold
                    ${activeCategory === cat ? "bg-white/20 text-white" : "bg-neutral-100 text-neutral-400"}`}>
                    {counts[cat]}
                  </span>
                </button>
              ))}
            </div>

            {/* View toggle */}
            <div className="flex items-center gap-1 bg-white border border-neutral-200 rounded-xl p-1 flex-shrink-0">
              <button
                onClick={() => setView("masonry")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200
                  ${view === "masonry" ? "bg-primary text-white shadow-sm" : "text-neutral-500 hover:text-neutral-700"}`}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect x="3" y="3" width="7" height="7" rx="1"/>
                  <rect x="14" y="3" width="7" height="7" rx="1"/>
                  <rect x="3" y="14" width="7" height="7" rx="1"/>
                  <rect x="14" y="14" width="7" height="7" rx="1"/>
                </svg>
                Grid
              </button>
              <button
                onClick={() => setView("slider")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200
                  ${view === "slider" ? "bg-primary text-white shadow-sm" : "text-neutral-500 hover:text-neutral-700"}`}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
                Slider
              </button>
            </div>
          </div>

          {/* Result count */}
          <p className="text-neutral-400 text-xs uppercase tracking-widest mb-6">
            Showing {filtered.length} {filtered.length === 1 ? "photo" : "photos"}
            {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
          </p>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-neutral-400">
              <svg className="w-16 h-16 mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">No photos in this category yet.</p>
            </div>
          )}

          {/* Views */}
          {filtered.length > 0 && (
            <>
              {view === "masonry" && (
                <MasonryGrid images={filtered} onOpenLightbox={openLightbox} />
              )}
              {view === "slider" && (
                <CinematicSlider images={filtered} onOpenLightbox={openLightbox} />
              )}
            </>
          )}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevLightbox}
          onNext={nextLightbox}
          onGoTo={openLightbox}
        />
      )}

      <style>{`
        @keyframes lightboxFadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1);    }
        }
      `}</style>
    </div>
  );
}