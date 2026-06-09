import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const heroImages = [
  {
    url: "/assets/hero-1.jpg",
    alt: "Construction site with crane in Nyamathi Karnataka — SVB Constructions",
    loading: "eager",
  },
  {
    url: "/assets/hero-2.jpg",
    alt: "Commercial building construction project by SVB Constructions Shivamogga",
    loading: "lazy",
  },
  {
    url: "/assets/hero-3.jpeg",
    alt: "Completed luxury residential villa by SVB Constructions Nyamathi Karnataka",
    loading: "lazy",
  },
];

const bilingualLines = [
  { text: "ನಿಮ್ಮ ಕನಸಿನ ಮನೆ, ನಮ್ಮ ಜವಾಬ್ದಾರಿ", lang: "kannada" },
  { text: "Building Dreams, Engineering Excellence", lang: "english" },
];

const anim = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [lineVisible, setLineVisible] = useState(true);

  useEffect(() => {
    setLoaded(true);
    const t = setInterval(() => setCurrent((p) => (p + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLineVisible(false);
      setTimeout(() => {
        setCurrentLine((prev) => (prev + 1) % bilingualLines.length);
        setLineVisible(true);
      }, 800);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative overflow-hidden flex items-center"
      style={{ minHeight: "100svh" }}
    >
      {/* ── Background image crossfade ── */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, i) => (
          <img
            key={i}
            src={img.url}
            alt={img.alt}
            loading={img.loading}
            fetchPriority={i === 0 ? "high" : undefined}
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ opacity: i === current ? 1 : 0, transition: "opacity 1.2s ease-in-out" }}
          />
        ))}
      </div>

      {/* ── Dark overlay (slightly darker on mobile for readability) ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(0,31,63,0.65) 50%, rgba(0,0,0,0.78) 100%)",
        }}
      />

      {/* ── Gold accent line (desktop only) ── */}
      <div
        className="absolute left-8 top-1/2 -translate-y-1/2 z-[2] hidden lg:block"
        style={{
          width: "2px",
          height: "180px",
          background: "linear-gradient(to bottom, transparent 0%, #C8A96B 40%, #C8A96B 60%, transparent 100%)",
          opacity: 0.65,
        }}
      />

      {/* ── Hero content ── */}
      <div
        className="relative z-[2] w-full max-w-7xl mx-auto"
        style={{
          paddingTop: "clamp(80px, 10vw, 0px)",
          paddingBottom: "clamp(40px, 5vw, 0px)",
          paddingLeft: "clamp(24px, 6vw, 96px)",
          paddingRight: "clamp(24px, 4vw, 40px)",
        }}
      >
        {/* On desktop override to left-padding 96px */}
        <div className="max-w-[640px]">

          {/* Eyebrow */}
          <motion.div
            {...anim(0.1)}
            animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            className="flex items-center gap-3"
            style={{ marginBottom: "10px" }}
            data-testid="hero-eyebrow"
          >
            <div className="flex-shrink-0 bg-[#C8A96B]" style={{ width: "clamp(24px, 3vw, 40px)", height: "1px" }} />
            <span
              className="text-[#C8A96B] font-inter uppercase font-medium"
              style={{ fontSize: "clamp(10px, 1.2vw, 12px)", letterSpacing: "clamp(2px, 0.4vw, 4px)" }}
            >
              Est. 2025 · Shivamogga, Karnataka
            </span>
          </motion.div>

          {/* Bilingual alternating line */}
          <div
            data-testid="hero-bilingual-line"
            style={{ minHeight: "clamp(28px, 4vw, 36px)", marginBottom: "14px", display: "flex", alignItems: "center" }}
          >
            <span
              style={{
                opacity: lineVisible ? 1 : 0,
                transition: "opacity 0.8s ease-in-out",
                color: "#C8A96B",
                letterSpacing: "1.5px",
                lineHeight: 1.4,
                maxWidth: "600px",
                display: "block",
                fontFamily: bilingualLines[currentLine].lang === "kannada"
                  ? "'Noto Sans Kannada', 'Tunga', sans-serif"
                  : "'Sora', sans-serif",
                fontSize: bilingualLines[currentLine].lang === "kannada"
                  ? "clamp(16px, 2.2vw, 22px)"
                  : "clamp(14px, 1.8vw, 19px)",
                fontWeight: 600,
                fontStyle: bilingualLines[currentLine].lang === "english" ? "italic" : "normal",
              }}
            >
              {bilingualLines[currentLine].text}
            </span>
          </div>

          {/* H1 — 3 lines: Turning Your / Vision / Into Reality */}
          <div style={{ marginBottom: "14px" }}>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="font-sora font-extrabold text-white block"
              style={{ fontSize: "clamp(36px, 5.5vw, 56px)", lineHeight: 1.15, letterSpacing: "-0.5px" }}
            >
              Turning Your
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
              className="font-sora font-extrabold block"
              style={{
                fontSize: "clamp(36px, 5.5vw, 56px)",
                lineHeight: 1.15,
                letterSpacing: "-0.5px",
                color: "#C8A96B",
                textShadow: "0 0 50px rgba(200,169,107,0.45)",
              }}
            >
              Vision
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="font-sora font-bold text-white block"
              style={{ fontSize: "clamp(36px, 5.5vw, 56px)", lineHeight: 1.15, letterSpacing: "-0.5px" }}
            >
              Into Reality
            </motion.h1>
          </div>

          {/* Stats subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
            className="font-inter font-medium"
            style={{
              fontSize: "clamp(12px, 1.4vw, 15px)",
              letterSpacing: "clamp(0.5px, 0.1vw, 1px)",
              color: "rgba(255,255,255,0.72)",
              marginBottom: "24px",
              marginTop: "14px",
            }}
            data-testid="hero-subtitle"
          >
            50+ Projects
            <span className="text-[#C8A96B] mx-2">·</span>
            10+ Years
            <span className="text-[#C8A96B] mx-2">·</span>
            99% Satisfaction
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            className="flex flex-col sm:flex-row"
            style={{ gap: "clamp(12px, 1.5vw, 16px)" }}
          >
            <a
              href="#contact"
              data-testid="hero-start-project-btn"
              className="group inline-flex items-center justify-center font-inter font-bold text-[#001F3F] uppercase bg-[#C8A96B] hover:bg-white transition-all duration-300 w-full sm:w-auto"
              style={{
                padding: "clamp(14px, 1.6vw, 18px) clamp(24px, 3vw, 40px)",
                fontSize: "clamp(12px, 1.1vw, 14px)",
                letterSpacing: "1.5px",
                borderRadius: 0,
                boxShadow: "0 8px 30px rgba(200,169,107,0.4)",
              }}
            >
              Get Free Consultation
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>

            <a
              href="#portfolio"
              data-testid="hero-view-portfolio-btn"
              className="inline-flex items-center justify-center font-inter font-medium text-white uppercase hover:text-[#C8A96B] transition-all duration-300 w-full sm:w-auto"
              style={{
                padding: "clamp(14px, 1.6vw, 18px) clamp(24px, 3vw, 40px)",
                fontSize: "clamp(12px, 1.1vw, 14px)",
                letterSpacing: "1.5px",
                border: "1.5px solid rgba(255,255,255,0.5)",
                borderRadius: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C8A96B")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)")}
            >
              View Our Projects
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Dot slide indicators ── */}
      <div
        className="absolute z-[2] flex items-center gap-2"
        style={{ bottom: "max(20px, calc(env(safe-area-inset-bottom, 0px) + 12px))", left: "50%", transform: "translateX(-50%)" }}
      >
        {heroImages.map((_, i) => (
          <button
            key={i}
            data-testid={`hero-indicator-${i}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === current ? "clamp(20px, 2vw, 28px)" : "clamp(6px, 0.8vw, 8px)",
              height: "clamp(6px, 0.8vw, 8px)",
              borderRadius: "999px",
              background: "#C8A96B",
              opacity: i === current ? 1 : 0.4,
              transition: "width 300ms ease, opacity 300ms ease",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* ── Scroll indicator (desktop only) ── */}
      <div className="absolute bottom-8 right-10 z-[2] hidden lg:flex flex-col items-center gap-2">
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: "2px", height: "60px", background: "linear-gradient(to bottom, transparent, #C8A96B)", transformOrigin: "top" }}
        />
        <span
          className="font-inter text-white/50"
          style={{ fontSize: "10px", letterSpacing: "3px", writingMode: "vertical-lr", marginTop: "4px" }}
        >
          SCROLL
        </span>
      </div>
    </section>
  );
}
