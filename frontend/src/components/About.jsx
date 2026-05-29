import { motion } from "framer-motion";
import { Award, Users, Star, ChevronRight } from "lucide-react";

const ABOUT_IMAGE = "https://static.prod-images.emergentagent.com/jobs/31d1f9c1-ff79-4b16-8a6e-c94a65559d9a/images/d1fae9d2bef7fd70cb29793060f84086e58b04d32343827ad89f44404fbb7000.png";

const trustBadges = [
  { icon: Award, label: "10+ Years Excellence" },
  { icon: Users, label: "100+ Happy Clients" },
  { icon: Star, label: "Industry Standard Quality" },
];

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 md:py-32 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src={ABOUT_IMAGE}
                alt="SVB Constructions - Premium construction quality"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/40 to-transparent" />
            </div>
            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-[#C8A96B] text-[#001F3F] p-6 rounded-xl shadow-xl"
            >
              <div className="font-sora font-bold text-4xl leading-none">10+</div>
              <div className="text-xs font-semibold uppercase tracking-wider mt-1">Years of<br />Excellence</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-[#C8A96B] text-xs font-semibold uppercase tracking-[0.3em] mb-4">About Us</p>
            <h2 className="font-sora font-bold text-4xl sm:text-5xl text-[#001F3F] leading-tight mb-6">
              Transforming Visions<br />Into Reality
            </h2>

            <div className="space-y-4 text-[#0F172A] text-base leading-relaxed mb-8">
              <p>
                Shree Veerabhadreshwara Constructions stands as a beacon of engineering excellence in Karnataka. With over a decade of dedicated service, we have built a reputation founded on precision, quality, and unwavering commitment to our clients.
              </p>
              <p>
                Our multidisciplinary team of architects, engineers, and construction professionals brings together deep expertise across residential villas, commercial complexes, and industrial infrastructure projects. We leverage the latest construction technologies and sustainable building practices to deliver results that exceed expectations.
              </p>
              <p>
                From initial consultation through final handover, we maintain transparent communication and rigorous quality standards at every stage — because we understand that construction is not just building structures, it's building futures.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  title: "Our Mission",
                  text: "Deliver high-quality construction solutions with integrity, innovation, safety, and engineering excellence that stands the test of time.",
                },
                {
                  title: "Our Vision",
                  text: "Become one of India's most trusted and innovative civil engineering & infrastructure companies, redefining construction standards.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  data-testid={`about-${card.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-white border border-[#E2E8F0] rounded-xl p-6 hover:border-[#C8A96B]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-8 h-1 bg-[#C8A96B] rounded mb-3" />
                  <h4 className="font-sora font-semibold text-[#001F3F] mb-2">{card.title}</h4>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {trustBadges.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.label}
                    data-testid={`trust-badge-${b.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center gap-2 bg-white border border-[#E2E8F0] rounded-full px-4 py-2 text-sm text-[#001F3F] font-medium"
                  >
                    <Icon size={14} color="#C8A96B" strokeWidth={1.5} />
                    {b.label}
                  </div>
                );
              })}
            </div>

            <motion.a
              href="#contact"
              data-testid="about-learn-more-btn"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 border-2 border-[#C8A96B] text-[#C8A96B] px-7 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider hover:bg-[#C8A96B] hover:text-[#001F3F] transition-all duration-300"
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
