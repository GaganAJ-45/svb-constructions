import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronUp } from "lucide-react";

const WHATSAPP_NUMBER = "919035911632";

export default function FloatingButtons() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Back to top */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            data-testid="back-to-top-btn"
            className="w-12 h-12 rounded-full bg-[#001F3F] border border-[#C8A96B]/40 text-[#C8A96B] flex items-center justify-center shadow-lg hover:bg-[#001429] hover:border-[#C8A96B]/70 transition-all duration-300"
            aria-label="Back to top"
          >
            <ChevronUp size={22} strokeWidth={2} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp */}
      <div className="relative flex items-center">
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-16 bg-[#001F3F] text-white text-xs font-medium px-3 py-2 rounded-lg shadow-lg whitespace-nowrap border border-[#C8A96B]/20"
            >
              Chat with us
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-[#001F3F] border-r border-t border-[#C8A96B]/20 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="floating-whatsapp-btn"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.93 }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl hover:shadow-[#25D366]/40 hover:shadow-2xl transition-all duration-300 animate-pulse-gold"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={26} color="white" strokeWidth={1.5} fill="white" />
        </motion.a>
      </div>
    </div>
  );
}
