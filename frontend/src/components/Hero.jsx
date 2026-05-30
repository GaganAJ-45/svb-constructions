import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const heroImages = [
  {
    url: "https://customer-assets.emergentagent.com/job_svb-constructions/artifacts/2n1egh9y_Hero_img1.jpg",
    alt: "Civil engineer surveying premium construction site",
    loading: "eager",
  },
  {
    url: "https://customer-assets.emergentagent.com/job_svb-constructions/artifacts/onqxnj66_Hero_img2.jpg",
    alt: "Modern construction with advanced engineering technology",
    loading: "lazy",
  },
  {
    url: "https://customer-assets.emergentagent.com/job_svb-constructions/artifacts/ye8vzajl_Hero_img3.jpeg",
    alt: "Premium residential construction project",
    loading: "lazy",
  },
];

const anim = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const bilingualLines = [
  { text: "ನಿಮ್ಮ ಕನಸಿನ ಮನೆ, ನಮ್ಮ ಜವಾಬ್ದಾರಿ", lang: "kannada" },
  { text: "Building Dreams, Engineering Excellence", lang: "english" },
];

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
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background image crossfade ── */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, i) => (
          <img
            key={i}
            src={img.url}
            alt={img.alt}
            loading={img.loading}
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{
              opacity: i === current ? 1 : 0,
              transition: "opacity 1.2s ease-in-out",
            }}
          />
        ))}
      </div>

      {/* ── Dark dramatic overlay ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(0,31,63,0.65) 50%, rgba(0,0,0,0.78) 100%)",
          boxShadow: "inset 0 0 150px rgba(0,0,0,0.4)",
        }}
      />

      {/* ── Gold diagonal accent line (left edge) ── */}
      <div
        className="absolute left-8 top-1/2 -translate-y-1/2 z-[2] hidden lg:block"
        style={{
          width: "2px",
          height: "180px",
          background: "linear-gradient(to bottom, transparent 0%, #C8A96B 40%, #C8A96B 60%, transparent 100%)",
          opacity: 0.65,
        }}
      />

      {/* ── Hero content (LEFT-ALIGNED) ── */}
      <div className="relative z-[2] w-full max-w-7xl mx-auto px-6 sm:px-10 lg:pl-24">
        <div className="max-w-[640px]">

          {/* Eyebrow */}
          <motion.div
            {...anim(0.1)}
            animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            className="flex items-center gap-4"
            style={{ marginBottom: "10px" }}
            data-testid="hero-eyebrow"
          >
            <div className="w-10 h-px bg-[#C8A96B] flex-shrink-0" />
            <span
              className="text-[#C8A96B] font-inter uppercase font-medium"
              style={{ fontSize: "12px", letterSpacing: "4px" }}
            >
              Est. 2025 · Shivamogga, Karnataka
            </span>
          </motion.div>

          {/* ── Bilingual alternating line ── */}
          <div
            data-testid="hero-bilingual-line"
            style={{
              minHeight: "32px",
              marginBottom: "14px",
              display: "flex",
              alignItems: "center",
            }}
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
                fontFamily:
                  bilingualLines[currentLine].lang === "kannada"
                    ? "'Noto Sans Kannada', 'Tunga', sans-serif"
                    : "'Sora', sans-serif",
                fontSize:
                  bilingualLines[currentLine].lang === "kannada"
                    ? "clamp(18px, 2vw, 24px)"
                    : "clamp(15px, 1.6vw, 20px)",
                fontWeight: bilingualLines[currentLine].lang === "kannada" ? 600 : 600,
                fontStyle: bilingualLines[currentLine].lang === "english" ? "italic" : "normal",
              }}
            >
              {bilingualLines[currentLine].text}
            </span>
          </div>

          {/* H1 — Two lines */}
          <div style={{ marginBottom: "14px" }}>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="font-sora font-extrabold text-white block"
              style={{
                fontSize: "clamp(36px, 5.5vw, 56px)",
                lineHeight: 1.15,
                letterSpacing: "-0.5px",
                maxWidth: "640px",
              }}
            >
              Building{" "}
              <span
                style={{
                  color: "#C8A96B",
                  textShadow: "0 0 50px rgba(200,169,107,0.45)",
                }}
              >
                Excellence
              </span>
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="font-sora font-bold text-white block"
              style={{
                fontSize: "clamp(36px, 5.5vw, 56px)",
                lineHeight: 1.15,
                letterSpacing: "-0.5px",
                maxWidth: "640px",
              }}
            >
              Engineering Tomorrow
            </motion.h1>
          </div>

          {/* Subtitle — single stats line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="font-inter font-medium"
            style={{
              fontSize: "15px",
              letterSpacing: "1px",
              color: "rgba(255,255,255,0.72)",
              marginBottom: "24px",
              marginTop: "14px",
            }}
            data-testid="hero-subtitle"
          >
            50+ Projects
            <span className="text-[#C8A96B] mx-3">·</span>
            10+ Years
            <span className="text-[#C8A96B] mx-3">·</span>
            99% Satisfaction
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              data-testid="hero-start-project-btn"
              className="group inline-flex items-center justify-center font-inter font-bold text-[#001F3F] uppercase bg-[#C8A96B] hover:bg-white transition-all duration-300"
              style={{
                padding: "18px 40px",
                fontSize: "14px",
                letterSpacing: "1.5px",
                borderRadius: 0,
                boxShadow: "0 8px 30px rgba(200,169,107,0.4)",
              }}
            >
              Start Your Project
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </a>

            <a
              href="#portfolio"
              data-testid="hero-view-portfolio-btn"
              className="inline-flex items-center justify-center font-inter font-medium text-white uppercase hover:text-[#C8A96B] transition-all duration-300"
              style={{
                padding: "18px 40px",
                fontSize: "14px",
                letterSpacing: "1.5px",
                border: "1.5px solid rgba(255,255,255,0.5)",
                borderRadius: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C8A96B")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)")}
            >
              View Portfolio
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom left stat blocks ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
        data-testid="hero-stat-blocks"
        className="absolute z-[2] hidden sm:flex items-center"
        style={{
          bottom: "28px",
          left: "60px",
          gap: "36px",
          borderTop: "1px solid rgba(255,255,255,0.15)",
          paddingTop: "16px",
        }}
      >
        {[
          { number: "50+", label: "Projects Done" },
          { number: "10+", label: "Years Active" },
        ].map((stat, i) => (
          <div key={stat.label} className="flex items-center" style={{ gap: "36px" }}>
            {i > 0 && (
              <div
                style={{
                  width: "1px",
                  height: "36px",
                  background: "rgba(255,255,255,0.15)",
                  marginRight: "-18px",
                }}
              />
            )}
            <div>
              <div
                className="font-sora font-bold text-[#C8A96B]"
                style={{ fontSize: "22px", lineHeight: 1 }}
              >
                {stat.number}
              </div>
              <div
                className="font-inter text-white/55 uppercase mt-1"
                style={{ fontSize: "10px", letterSpacing: "1.5px" }}
              >
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* ── Dot slide indicators ── */}
      <div
        className="absolute z-[2] flex items-center gap-2"
        style={{ bottom: "80px", left: "50%", transform: "translateX(-50%)" }}
      >
        {heroImages.map((_, i) => (
          <button
            key={i}
            data-testid={`hero-indicator-${i}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === current ? "28px" : "8px",
              height: "8px",
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

      {/* ── Scroll indicator (animated vertical line) ── */}
      <div className="absolute bottom-8 right-10 z-[2] hidden lg:flex flex-col items-center gap-2">
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "2px",
            height: "60px",
            background: "linear-gradient(to bottom, transparent, #C8A96B)",
            transformOrigin: "top",
          }}
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
