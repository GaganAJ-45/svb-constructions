import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "SVB Constructions delivered our dream home well beyond our expectations. The attention to detail, quality of materials, and the precision in every finishing touch was truly outstanding. Highly recommend for any premium residential project.",
    name: "Rajesh Kumar",
    project: "Luxury Villa, Nyamathi, Karnataka",
    rating: 5,
  },
  {
    text: "Outstanding commercial project execution. The team was professional, always on schedule, and delivered within the agreed budget. Their engineering expertise and project management is evident in every aspect of the completed structure.",
    name: "Priya Sharma",
    project: "Commercial Project, Davanagere, Karnataka",
    rating: 5,
  },
  {
    text: "From initial planning through final handover, the entire process was smooth, transparent, and stress-free. The 3D visualization helped us make better design decisions early on. Truly a premium construction experience worth every rupee.",
    name: "Anand Nair",
    project: "Residential Interiors, Shivamogga, Karnataka",
    rating: 5,
  },
  {
    text: "ಎಸ್‌ವಿಬಿ ಕನ್ಸ್ಟ್ರಕ್ಷನ್ಸ್ ನಮ್ಮ ಮನೆಯ ನಿರ್ಮಾಣವನ್ನು ಅತ್ಯುತ್ತಮ ಗುಣಮಟ್ಟದಲ್ಲಿ ಪೂರ್ಣಗೊಳಿಸಿದೆ. ಕೆಲಸ ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಮುಗಿದು, ಪ್ರತಿಯೊಂದು ಹಂತದಲ್ಲೂ ವೃತ್ತಿಪರ ಸೇವೆ ನೀಡಿದರು. ನಾವು ಸಂಪೂರ್ಣ ತೃಪ್ತರಾಗಿದ್ದೇವೆ.",
    name: "Manjunath H",
    project: "Nyamathi, Karnataka",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section
      data-testid="testimonials-section"
      className="py-24 md:py-32 bg-[#001F3F]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C8A96B] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            Client Stories
          </p>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl text-white mb-5">
            What Our Clients Say
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-2xl mx-auto">
            Real feedback from our valued clients who trusted us with their most important projects.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              data-testid={`testimonial-card-${current}`}
              className="bg-white/5 backdrop-blur-sm border border-[#C8A96B]/25 rounded-2xl p-8 sm:p-12"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote size={40} color="#C8A96B" strokeWidth={1} fill="#C8A96B" className="opacity-50" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={16} color="#C8A96B" fill="#C8A96B" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/90 text-lg sm:text-xl leading-relaxed italic mb-8 font-inter">
                "{testimonials[current].text}"
              </p>

              {/* Client info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div>
                  <p className="font-sora font-semibold text-[#C8A96B] text-base">
                    {testimonials[current].name}
                  </p>
                  <p className="text-[#94A3B8] text-sm">{testimonials[current].project}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                data-testid={`testimonial-dot-${i}`}
                onClick={() => { setCurrent(i); setPaused(true); setTimeout(() => setPaused(false), 3000); }}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? "w-8 h-2 bg-[#C8A96B]" : "w-2 h-2 bg-white/25 hover:bg-white/50"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
