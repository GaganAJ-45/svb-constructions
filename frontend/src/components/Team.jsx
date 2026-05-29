import { motion } from "framer-motion";
import { Instagram, MessageCircle, Mail } from "lucide-react";

const team = [
  {
    name: "Sachin G S",
    designation: "Founder & Owner",
    experience: "15+ Years in Civil Engineering",
    bio: "Founded SVB Constructions with a vision to deliver quality construction.",
    photo: "https://customer-assets.emergentagent.com/job_svb-constructions/artifacts/nytjbq9t_Sachin_ph.jpeg",
    phone: "+91 9035911632",
    email: "svbrconstructions@gmail.com",
    instagram: "https://www.instagram.com/sachings_sachin?igsh=aG8ycjE3d21wcG4x",
    whatsapp: `https://wa.me/919035911632?text=${encodeURIComponent("Hi Sachin, I'm interested in starting a construction project with SVB Constructions. Can we connect?")}`,
  },
  {
    name: "Sanjay G S",
    designation: "Managing Director",
    experience: "6+ Years in Project Management",
    bio: "Manages day-to-day operations and client relationships.",
    photo: "https://customer-assets.emergentagent.com/job_svb-constructions/artifacts/tri8facc_sanjay_ph1.jpeg",
    phone: "+91 63616 38075",
    email: "svbrconstructions@gmail.com",
    instagram: "https://www.instagram.com/sanjukssanjay?igsh=MTltanJiYWY3cnk0eA==",
    whatsapp: `https://wa.me/916361638075?text=${encodeURIComponent("Hi Sanjay, I'm interested in discussing a construction project with SVB Constructions. Can we connect?")}`,
  },
  {
    name: "Ravi Kumar M",
    designation: "Senior Civil Engineer",
    experience: "10+ Years in Structural Design",
    bio: "Oversees all technical aspects of construction — from structural design to quality control.",
    photo: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBjaXZpbCUyMGVuZ2luZWVyJTIwcG9ydHJhaXQlMjBtYWxlfGVufDB8fHx8MTc4MDA2ODA2N3ww&ixlib=rb-4.1.0&q=85",
    phone: "+91 9035911632",
    email: "svbrconstructions@gmail.com",
    instagram: "#",
    whatsapp: `https://wa.me/919035911632?text=${encodeURIComponent("Hi, I'm interested in discussing a construction project with SVB Constructions. Can we connect?")}`,
  },
];

export default function Team() {
  return (
    <section
      id="team"
      data-testid="team-section"
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
            Our People
          </p>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl text-[#001F3F] mb-5">
            Meet Our Leadership
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-2xl mx-auto">
            Experienced professionals driving engineering excellence and delivering exceptional results.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              data-testid={`team-card-${i}`}
              className="group bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden bg-[#F8FAFC]">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-all duration-500 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-7">
                <h3 className="font-sora font-bold text-xl text-[#001F3F] mb-1">{member.name}</h3>
                <p className="text-[#C8A96B] text-sm font-semibold mb-1">{member.designation}</p>
                <p className="text-[#94A3B8] text-xs mb-3">{member.experience}</p>
                <p className="text-[#0F172A] text-sm leading-relaxed mb-5">{member.bio}</p>

                {/* Social icons */}
                <div className="flex items-center gap-4 pt-4 border-t border-[#E2E8F0]">
                  <a
                    href={member.instagram}
                    data-testid={`team-instagram-${i}`}
                    className="text-[#94A3B8] hover:text-[#C8A96B] transition-colors duration-200 hover:scale-110 transform"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} strokeWidth={1.5} />
                  </a>
                  <a
                    href={member.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`team-whatsapp-${i}`}
                    className="text-[#94A3B8] hover:text-[#25D366] transition-colors duration-200 hover:scale-110 transform"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={18} strokeWidth={1.5} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    data-testid={`team-email-${i}`}
                    className="text-[#94A3B8] hover:text-[#C8A96B] transition-colors duration-200 hover:scale-110 transform"
                    aria-label="Email"
                  >
                    <Mail size={18} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
