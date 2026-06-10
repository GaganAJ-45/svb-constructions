import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const LOGO_URL = "/assets/company-logo.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#portfolio" },
  { label: "About Us", href: "#about" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        data-testid="navbar"
        className="fixed top-0 w-full z-50"
        style={{
          height: "68px",
          display: "flex",
          alignItems: "center",
          transition: "all 0.4s ease",
          background: scrolled ? "#0F172A" : "rgba(0, 31, 63, 0.15)",
          backdropFilter: scrolled ? "none" : "blur(12px)",
          WebkitBackdropFilter: scrolled ? "none" : "blur(12px)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none",
          borderBottom: "none",
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" data-testid="navbar-logo" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 bg-white rounded-sm overflow-hidden flex-shrink-0 transition-transform group-hover:scale-105">
              <img src={LOGO_URL} alt="Shree Veerabhadreshwara Constructions logo" className="w-full h-full object-contain" />
            </div>
            <span
              className="text-white font-sora font-semibold hidden sm:block"
              style={{ fontSize: "14px" }}
            >
              SVB Constructions
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative group py-1"
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  letterSpacing: "0.5px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C8A96B")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop right: phone + CTA */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <a
              href="tel:+919035911632"
              data-testid="navbar-phone"
              className="flex items-center gap-2"
              style={{
                color: "white",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C8A96B")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            >
              <Phone size={15} color="#C8A96B" strokeWidth={1.5} />
              +91 90359 11632
            </a>
            <a
              href="#contact"
              data-testid="navbar-get-quote-btn"
              style={{
                background: "#C8A96B",
                color: "#001F3F",
                fontFamily: "'Sora', sans-serif",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.5px",
                padding: "10px 24px",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "white"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#C8A96B"; }}
            >
              Get Quote
            </a>
          </div>

          {/* Mobile/tablet: phone icon + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:+919035911632"
              className="hidden sm:flex text-[#C8A96B]"
              aria-label="Call us"
            >
              <Phone size={18} strokeWidth={1.5} />
            </a>
            <button
              data-testid="navbar-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#C8A96B] p-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: "#0F172A" }}
          >
            <button
              onClick={closeMenu}
              className="absolute top-5 right-5 text-[#C8A96B] p-2"
              aria-label="Close menu"
            >
              <X size={26} strokeWidth={1.5} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={closeMenu}
                  data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  style={{
                    color: "white",
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 600,
                    fontSize: "22px",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C8A96B")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="tel:+919035911632"
                onClick={closeMenu}
                className="flex items-center gap-2 text-[#C8A96B] mt-4"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "15px", textDecoration: "none" }}
              >
                <Phone size={16} strokeWidth={1.5} />
                +91 90359 11632
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
