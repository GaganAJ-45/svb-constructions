import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, CheckSquare, Smile } from "lucide-react";

const stats = [
  { icon: Trophy, number: 10, suffix: "+", label: "Years Experience", desc: "Civil Construction" },
  { icon: CheckSquare, number: 50, suffix: "+", label: "Projects Completed", desc: "Across Karnataka" },
  { icon: Smile, number: 99, suffix: "%", label: "Client Satisfaction", desc: "Proven track record" },
];

function CounterStat({ stat, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = stat.number / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.number) {
        setCount(stat.number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, stat.number]);

  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
      className="flex flex-col items-center text-center py-8 px-6"
    >
      <div className="mb-4 p-3 rounded-full bg-[#C8A96B]/10 border border-[#C8A96B]/20">
        <Icon size={28} color="#C8A96B" strokeWidth={1.5} />
      </div>
      <div className="font-sora font-bold text-5xl text-[#C8A96B] leading-none mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-white font-semibold text-base mb-1">{stat.label}</div>
      <div className="text-[#94A3B8] text-sm">{stat.desc}</div>
    </motion.div>
  );
}

export default function StatsStrip() {
  return (
    <section data-testid="stats-section" className="bg-[#001F3F] py-4">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <CounterStat key={stat.label} stat={stat} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
