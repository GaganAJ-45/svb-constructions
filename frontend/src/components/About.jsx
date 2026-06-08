import { motion } from "framer-motion";
import { Award, Users, Star, ChevronRight } from "lucide-react";

const ABOUT_IMAGE =
  "https://customer-assets.emergentagent.com/job_svb-constructions/artifacts/g3fj5mey_about%20us%20photo.jpg";

const trustBadges = [
  { icon: Award, label: "10+ Years Excellence" },
  { icon: Users, label: "100+ Happy Clients" },
  { icon: Star, label: "Industry Standard Quality" },
];

const aboutCards = [
  {
    title: "Our Mission",
    text: "Deliver high-quality construction solutions with integrity, innovation, safety, and engineering excellence that stands the test of time.",
  },
  {
    title: "Our Vision",
    text: "Become one of India's most trusted and innovative civil engineering & infrastructure companies, redefining construction standards.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="bg-[#F8FAFC] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-full"
          >
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-xl shadow-2xl sm:min-h-[420px]">
              <img
                src={ABOUT_IMAGE}
                alt="SVB Constructions engineering team reviewing project plans at construction site in Nyamathi Karnataka"
                className="h-full w-full object-cover object-center"
                style={{ minHeight: "clamp(320px, 40vw, 500px)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/40 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute rounded-xl bg-[#C8A96B] text-[#001F3F] shadow-xl"
              style={{
                bottom: "clamp(12px, 2vw, -24px)",
                right: "clamp(12px, 2vw, -24px)",
                padding: "clamp(14px, 2vw, 24px)",
              }}
            >
              <div
                className="font-sora font-bold leading-none"
                style={{ fontSize: "clamp(24px, 4vw, 40px)" }}
              >
                10+
              </div>
              <div
                className="mt-1 font-semibold uppercase tracking-wider"
                style={{ fontSize: "clamp(9px, 1.2vw, 12px)" }}
              >
                Years of
                <br />
                Excellence
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex h-full flex-col justify-center gap-6 lg:gap-8"
          >
            <div className="flex flex-col items-center gap-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C8A96B]">
                About Us
              </p>
              <h2 className="font-sora text-3xl font-bold leading-tight text-[#001F3F] sm:text-4xl lg:text-5xl">
                Transforming Visions
                <br />
                Into Reality
              </h2>
              <div className="max-w-2xl space-y-4 text-base leading-relaxed text-[#0F172A]">
                <p>
                  Shree Veerabhadreshwara Constructions is a trusted civil engineering and construction company based in Nyamathi, Karnataka. SVB Constructions has delivered 50+ residential, commercial, and civil engineering projects across Nyamathi, Honnali, Shivamogga and Davanagere &mdash; built on a foundation of precision, quality, and unwavering commitment to our clients.
                </p>
              </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
              {aboutCards.map((card) => (
                <div
                  key={card.title}
                  data-testid={`about-${card.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex h-full flex-col rounded-xl border border-[#E2E8F0] bg-white p-6 text-center transition-all duration-300 hover:border-[#C8A96B]/40 hover:shadow-md"
                >
                  <div className="mb-3 h-1 w-8 self-center rounded bg-[#C8A96B]" />
                  <h4 className="mb-2 font-sora font-semibold text-[#001F3F]">
                    {card.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-[#94A3B8]">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex w-full flex-wrap justify-center gap-3">
              {trustBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.label}
                    data-testid={`trust-badge-${badge.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-medium text-[#001F3F]"
                  >
                    <Icon size={14} color="#C8A96B" strokeWidth={1.5} />
                    {badge.label}
                  </div>
                );
              })}
            </div>

            <motion.a
              href="#contact"
              data-testid="about-learn-more-btn"
              whileHover={{ x: 4 }}
              className="inline-flex self-center items-center gap-2 rounded-lg border-2 border-[#C8A96B] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-[#C8A96B] transition-all duration-300 hover:bg-[#C8A96B] hover:text-[#001F3F]"
            >
              Get In Touch
              <ChevronRight size={16} strokeWidth={2} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
