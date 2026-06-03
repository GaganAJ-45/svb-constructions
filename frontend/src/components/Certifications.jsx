import { motion } from "framer-motion";
import { ShieldCheck, Award, Building2, CheckCircle, HardHat } from "lucide-react";

const certs = [
  {
    icon: Building2,
    title: "Karnataka PWD License",
    subtitle: "Government Certified Contractor",
  },
  {
    icon: Award,
    title: "BBMP Approved",
    subtitle: "Bruhat Bengaluru Mahanagara Palike",
  },
  {
    icon: CheckCircle,
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
  },
  {
    icon: HardHat,
    title: "Safety Certified",
    subtitle: "Construction Safety Standards",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      data-testid="certifications-section"
      className="py-24 md:py-32 bg-[#F8FAFC]"
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
            Accredited & Trusted
          </p>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl text-[#001F3F] mb-14">
            Certifications & Accreditations
          </h2>
        </motion.div>

        {/* Certs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {certs.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4, borderColor: "#C8A96B", boxShadow: "0 8px 30px rgba(200,169,107,0.15)" }}
                data-testid={`cert-card-${i}`}
                className="group bg-white border-2 border-[#E2E8F0] rounded-xl p-6 flex flex-col items-center text-center cursor-default transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] group-hover:bg-[#C8A96B]/10 group-hover:border-[#C8A96B]/30 flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon size={28} color="#C8A96B" strokeWidth={1.5} />
                </div>
                <h4 className="font-sora font-semibold text-[#001F3F] text-sm mb-1 leading-tight">
                  {cert.title}
                </h4>
                <p className="text-[#94A3B8] text-xs leading-tight">{cert.subtitle}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
