import { motion } from "framer-motion";
import { Handshake, Ruler, Eye, Calculator, Hammer, Key } from "lucide-react";

const steps = [
  {
    icon: Handshake,
    number: "01",
    title: "Consultation & Planning",
    description: "Understand your vision, requirements, and project goals through in-depth discussions.",
  },
  {
    icon: Ruler,
    number: "02",
    title: "Site Analysis & Design",
    description: "Detailed site survey, soil testing, and comprehensive architectural planning.",
  },
  {
    icon: Eye,
    number: "03",
    title: "3D Visualization",
    description: "Photorealistic 3D renderings for project approval before construction begins.",
  },
  {
    icon: Calculator,
    number: "04",
    title: "Estimation & Approval",
    description: "Transparent cost breakdown and project timeline for your review and approval.",
  },
  {
    icon: Hammer,
    number: "05",
    title: "Construction Execution",
    description: "Professional on-site construction management with quality control at every step.",
  },
  {
    icon: Key,
    number: "06",
    title: "Handover & Support",
    description: "Final inspection, official handover, and dedicated post-construction support.",
  },
];

export default function ProcessTimeline() {
  return (
    <section
      data-testid="process-section"
      className="py-24 md:py-32 overflow-hidden"
      style={{
        backgroundColor: "#F1F5F9",
        borderTop: "1px solid #E2E8F0",
        borderBottom: "1px solid #E2E8F0",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#C8A96B] text-xs font-semibold uppercase tracking-[0.3em] mb-4">How We Work</p>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl text-[#001F3F] mb-5">
            Our Construction Process
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-2xl mx-auto">
            A structured, transparent, and client-focused process that delivers excellence every time.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-10 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-[#C8A96B] to-[#C8A96B]/20 origin-left"
          />

          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  data-testid={`process-step-${i}`}
                  className="flex flex-col items-center text-center"
                >
                  {/* Circle */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-[#C8A96B] flex items-center justify-center shadow-lg mb-5 group hover:scale-110 transition-transform duration-300">
                    <span className="font-sora font-bold text-[#001F3F] text-lg">{step.number}</span>
                  </div>
                  <Icon size={22} color="#C8A96B" strokeWidth={1.5} className="mb-3" />
                  <h4 className="font-sora font-semibold text-[#001F3F] text-sm mb-2 leading-tight">{step.title}</h4>
                  <p className="text-[#94A3B8] text-xs leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C8A96B] to-[#C8A96B]/10" />
          <div className="space-y-10 pl-20">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  data-testid={`process-step-mobile-${i}`}
                  className="relative"
                >
                  {/* Circle on left */}
                  <div className="absolute -left-[56px] top-0 w-12 h-12 rounded-full bg-[#C8A96B] flex items-center justify-center shadow-md">
                    <span className="font-sora font-bold text-[#001F3F] text-sm">{step.number}</span>
                  </div>
                  <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={20} color="#C8A96B" strokeWidth={1.5} />
                      <h4 className="font-sora font-semibold text-[#001F3F] text-base">{step.title}</h4>
                    </div>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
