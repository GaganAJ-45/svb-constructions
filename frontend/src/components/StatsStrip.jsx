import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: 50, suffix: "+", label: "Projects" },
  { number: 10, suffix: "+", label: "Years Experience" },
  { number: 100, suffix: "+", label: "Happy Clients" },
];

function AnimatedCount({ end, suffix, inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const increment = end / steps;
    let cur = 0;
    const t = setInterval(() => {
      cur += increment;
      if (cur >= end) { setCount(end); clearInterval(t); }
      else setCount(Math.floor(cur));
    }, 33);
    return () => clearInterval(t);
  }, [inView, end]);
  return <>{count}{suffix}</>;
}

export default function StatsStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section data-testid="stats-section" ref={ref} className="bg-[#001F3F] w-full" style={{ padding: "40px 0" }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              {/* Stat block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex flex-col items-center text-center px-8 py-4"
              >
                <div
                  className="font-sora font-bold text-[#C8A96B]"
                  style={{ fontSize: "42px", lineHeight: 1 }}
                >
                  <AnimatedCount end={stat.number} suffix={stat.suffix} inView={inView} />
                </div>
                <div
                  className="font-inter text-white/70 uppercase mt-2"
                  style={{ fontSize: "13px", letterSpacing: "1.5px" }}
                >
                  {stat.label}
                </div>
              </motion.div>

              {/* Divider between stats */}
              {i < stats.length - 1 && (
                <div
                  className="hidden sm:block flex-shrink-0"
                  style={{
                    width: "1px",
                    height: "48px",
                    background: "rgba(200, 169, 107, 0.3)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
