import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const heroImages = [
  {
    url: "https://customer-assets.emergentagent.com/job_svb-constructions/artifacts/542rhen8_Hero_img1.jpg",
    alt: "Civil engineer at premium construction site with crane",
  },
  {
    url: "https://customer-assets.emergentagent.com/job_svb-constructions/artifacts/2zm81vuh_Hero_img2.jpg",
    alt: "Modern construction with advanced engineering technology",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const t = setInterval(() => setCurrent((p) => (p + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background images with Ken Burns */}
      <div className="absolute inset-0">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${img.url})` }}
              initial={{ scale: 1 }}
              animate={{ scale: i === current ? 1.08 : 1.0 }}
              transition={{ duration: 8, ease: "linear" }}
            />
          </div>
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#001F3F]/55" />

      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.04]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={loaded ? { opacity: 1, letterSpacing: "0.3em" } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-[#C8A96B] text-xs sm:text-sm font-medium uppercase mb-6 font-inter tracking-[0.3em]"
          >
            Premium Civil Engineering & Construction
          </motion.p>

          <h1 className="font-sora font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.15] mb-6">
            Building{" "}
            <span className="text-gradient-gold">Excellence</span>
            <span className="block mt-1">Engineering Tomorrow</span>
          </h1>

          <p className="text-[#C8A96B] text-lg sm:text-xl font-inter font-medium mb-5">
            Premier Civil Engineering & Construction Services
          </p>

          <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12 font-inter">
            Delivering innovative, high-quality residential, commercial, and industrial construction solutions with precision, trust, and engineering excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              data-testid="hero-start-project-btn"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(200,169,107,0.35)" }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#C8A96B] text-[#001F3F] px-8 py-4 font-semibold rounded-lg text-sm uppercase tracking-widest hover:bg-[#b8974f] transition-colors duration-300 w-full sm:w-auto"
            >
              Start Your Project
            </motion.a>
            <motion.a
              href="#portfolio"
              data-testid="hero-view-portfolio-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="border-2 border-[#C8A96B] text-white px-8 py-4 font-semibold rounded-lg text-sm uppercase tracking-widest hover:bg-[#C8A96B] hover:text-[#001F3F] transition-all duration-300 w-full sm:w-auto"
            >
              View Portfolio
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Trust line */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.2 }}
        data-testid="hero-trust-line"
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/45 text-xs sm:text-sm font-inter text-center w-full px-4"
      >
        Serving clients with excellence since 2009 &nbsp;|&nbsp; Bengaluru, India
      </motion.p>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            data-testid={`hero-indicator-${i}`}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-[#C8A96B]" : "w-3 bg-white/30"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown size={22} color="rgba(200,169,107,0.7)" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
