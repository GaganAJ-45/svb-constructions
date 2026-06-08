import { motion } from "framer-motion";
import { Phone, Mail, Instagram, MessageCircle } from "lucide-react";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_svb-constructions/artifacts/awy71t67_company_logo1.jpeg";

const WA_LINK = `https://wa.me/919035911632?text=${encodeURIComponent("Hi, I'm interested in your construction services at SVB Constructions. Can you please provide more details?")}`;

const services = [
  "3D Visualization",
  "Interior Design",
  "Cost Estimation",
  "Expert Consulting",
  "Construction Management",
];

const company = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Our Team", href: "#team" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-[#001F3F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="font-sora font-bold text-lg text-white mb-4">
              Shree Veerabhadreshwara Constructions
            </h4>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-5">
              civil engineering and construction solutions across Karnataka since
              2025.
            </p>
            <p className="text-[#C8A96B] text-xs uppercase tracking-widest font-medium">
              Shivamogga, Karnataka, India
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-sora font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    data-testid={`footer-service-${s.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[#94A3B8] text-sm hover:text-[#C8A96B] transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-sora font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    data-testid={`footer-link-${c.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[#94A3B8] text-sm hover:text-[#C8A96B] transition-colors duration-200"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-sora font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Contact
            </h4>
            <div className="space-y-3 mb-6">
              <a
                href="tel:+919035911632"
                data-testid="footer-phone-1"
                className="flex items-center gap-2 text-[#94A3B8] text-sm hover:text-[#C8A96B] transition-colors"
              >
                <Phone size={14} strokeWidth={1.5} />
                +91 9035911632
              </a>
              <a
                href="tel:+916361638075"
                data-testid="footer-phone-2"
                className="flex items-center gap-2 text-[#94A3B8] text-sm hover:text-[#C8A96B] transition-colors"
              >
                <Phone size={14} strokeWidth={1.5} />
                +91 63616 38075
              </a>
              <a
                href="mailto:svbrconstructions@gmail.com"
                data-testid="footer-email"
                className="flex items-center gap-2 text-[#94A3B8] text-sm hover:text-[#C8A96B] transition-colors break-all"
              >
                <Mail size={14} strokeWidth={1.5} />
                svbrconstructions@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4 mb-5">
              <a
                href="https://www.instagram.com/svbrconstructions?igsh=MTlnNXI0Y2JvcXY2bg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-instagram"
                className="text-[#94A3B8] hover:text-[#C8A96B] transition-colors hover:scale-110 transform"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp"
                className="text-[#94A3B8] hover:text-[#25D366] transition-colors hover:scale-110 transform"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} strokeWidth={1.5} />
              </a>
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-whatsapp-btn"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#1fb855] transition-colors duration-200"
            >
              <MessageCircle size={16} strokeWidth={1.5} />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>

        <div className="border-t border-[#C8A96B]/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#94A3B8] text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Shree Veerabhadreshwara
            Constructions. All rights reserved.
          </p>
          <p className="text-[#94A3B8] text-xs">
            Built with <span className="text-[#C8A96B]">engineering precision</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
