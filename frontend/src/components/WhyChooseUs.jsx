import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, ShieldCheck, FolderOpen, Clock } from "lucide-react";

const reasons = [
  {
    icon: Cpu,
    endValue: 100,
    suffix: "%",
    title: "Modern Technology",
    description: "Latest construction software, BIM tools, and cutting-edge equipment for superior results.",
  },
  {
    icon: ShieldCheck,
    endValue: 99,
    suffix: "%",
    title: "Quality Assurance",
    description: "Rigorous quality control at every stage — from materials sourcing to final finishing.",
  },
  {
    icon: FolderOpen,
    endValue: 50,
    suffix: "+",
    title: "Projects Delivered",
    description: "A proven portfolio of residential, commercial, and industrial projects across Karnataka.",
  },
  {
    icon: Clock,
    endValue: 10,
    suffix: "+",
    title: "Timely Delivery",
    description: "Consistent on-time project completion backed by structured project management systems.",
  },
];

function AnimatedCounter({ end, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, end]);

  return <span>{count}{suffix}</span>;
}

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      data-testid="why-choose-us-section"
      id="why-choose-us"
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
            Our Advantage
          </p>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl text-white mb-5">
            Why Choose Us
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-2xl mx-auto">
            Built on trust, innovation, quality, and deep engineering expertise — delivered every single time.
          </p>
        </motion.div>

        {/* Cards */}
        <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6, borderColor: "rgba(200,169,107,0.6)" }}
                data-testid={`why-card-${i}`}
                className="bg-white/5 backdrop-blur-sm border border-[#C8A96B]/20 rounded-xl p-8 transition-all duration-300 hover:bg-white/8 hover:shadow-2xl group"
              >
                <div className="mb-5 inline-flex p-3 rounded-lg bg-[#C8A96B]/10 border border-[#C8A96B]/20">
                  <Icon size={26} color="#C8A96B" strokeWidth={1.5} />
                </div>
                <div className="font-sora font-bold text-3xl text-[#C8A96B] mb-2">
                  <AnimatedCounter end={item.endValue} suffix={item.suffix} inView={inView} />
                </div>
                <h3 className="font-sora font-semibold text-lg text-white mb-3">{item.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
