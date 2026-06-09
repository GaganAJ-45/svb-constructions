import { motion } from "framer-motion";
import { PenSquare, Box, Palette, Calculator, Briefcase, HardHat } from "lucide-react";

const services = [
  {
    icon: PenSquare,
    title: "Planning & Design",
    description: "Expert site analysis and architectural design planning tailored to your vision and project requirements.",
    image: "/assets/service-planning-design.png",
  },
  {
    icon: Box,
    title: "3D Elevation & Visualization",
    description: "Photorealistic 3D renderings that let you visualize and refine your project before a single brick is laid.",
    image: "/assets/service-3d-elevation.png",
  },
  {
    icon: Palette,
    title: "Interior Design",
    description: "Modern, functional, and aesthetically pleasing interior designs that balance luxury with livability.",
    image: "/assets/service-interior-design.png",
  },
  {
    icon: Calculator,
    title: "Estimation & Costing",
    description: "Transparent and detailed cost breakdowns for accurate budgeting — no surprises, just clarity.",
    image: "/assets/service-estimation-costing.png",
  },
  {
    icon: Briefcase,
    title: "Expert Consulting",
    description: "Strategic guidance at every stage of your construction journey from concept through to completion.",
    image: "/assets/service-expert-consulting.png",
  },
  {
    icon: HardHat,
    title: "Construction Management",
    description: "Full-scale construction execution with rigorous quality control and consistent on-time delivery.",
    image: "/assets/service-construction-management.png",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-24 md:py-32 bg-white"
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
            What We Offer
          </p>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl text-[#001F3F] mb-5">
            Our Core Services
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            SVB Constructions offers comprehensive civil engineering and construction services in Nyamathi, Karnataka — from residential construction and commercial projects to 3D elevation design and interior design.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                data-testid={`service-card-${i}`}
                className="group bg-white border border-[#E2E8F0] rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Gold left border on hover */}
                <div className="absolute left-0 top-0 h-full w-1 bg-[#C8A96B] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 rounded-l-xl" />

                <div className="relative overflow-hidden rounded-t-xl -mx-8 -mt-8 mb-6 h-40">
                  <img
                    src={svc.image}
                    alt={`${svc.title} service — Shree Veerabhadreshwara Constructions Nyamathi`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20" />
                </div>

                <div className="mb-5 inline-flex p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] group-hover:bg-[#C8A96B]/10 group-hover:border-[#C8A96B]/30 transition-colors duration-300">
                  <Icon size={28} color="#C8A96B" strokeWidth={1.5} />
                </div>

                <h3 className="font-sora font-semibold text-xl text-[#001F3F] mb-3 group-hover:text-[#001F3F]">
                  {svc.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  {svc.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
