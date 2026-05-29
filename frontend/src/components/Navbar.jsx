import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_svb-constructions/artifacts/33nhlam1_company_logo.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        data-testid="navbar"
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#001F3F]/95 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" data-testid="navbar-logo" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-white rounded-sm overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
                <img src={LOGO_URL} alt="SVB Constructions Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-sora font-semibold text-sm leading-tight">SVB Constructions</span>
                <span className="text-[#C8A96B] text-[11px] leading-tight tracking-wide">Premium Civil Engineering</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                  className="text-white/85 hover:text-[#C8A96B] text-sm font-medium transition-colors duration-200 relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C8A96B] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:+919035911632"
                data-testid="navbar-phone"
                className="flex items-center gap-2 text-white/70 hover:text-[#C8A96B] transition-colors duration-200"
              >
                <Phone size={15} strokeWidth={1.5} />
                <span className="text-sm">+91 90359 11632</span>
              </a>
              <a
                href="#contact"
                data-testid="navbar-get-quote-btn"
                className="bg-[#C8A96B] text-[#001F3F] px-6 py-2.5 text-sm font-semibold rounded-lg hover:bg-[#b8974f] transition-all duration-300 hover:shadow-lg hover:shadow-[#C8A96B]/30 hover:-translate-y-0.5"
              >
                Get Quote
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              data-testid="navbar-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#001F3F] flex flex-col items-center justify-center"
          >
            <button
              onClick={closeMenu}
              className="absolute top-6 right-6 text-white p-2"
              aria-label="Close menu"
            >
              <X size={28} strokeWidth={1.5} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={closeMenu}
                  className="text-white text-2xl font-sora font-semibold hover:text-[#C8A96B] transition-colors duration-200"
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                onClick={closeMenu}
                className="mt-4 bg-[#C8A96B] text-[#001F3F] px-8 py-3 font-semibold rounded-lg text-sm uppercase tracking-wider"
                data-testid="mobile-get-quote-btn"
              >
                Get Quote
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
