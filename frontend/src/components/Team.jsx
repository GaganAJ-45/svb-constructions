import { motion } from "framer-motion";
import { Building2, Briefcase, HardHat } from "lucide-react";

const team = [
  {
    name: "Sachin G S",
    designation: "Founder & Owner",
    experience: "12+",
    experienceLabel: "Years in Civil Engineering",
    bio: "Sachin G S is the founder of Shree Veerabhadreshwara Constructions. A skilled civil engineer based in Nyamathi, Sachin G S leads all major construction projects at SVB Constructions with over 12 years of experience.",
    photo: "/assets/team-sachin.jpeg",
    photoPosition: "center 20%",
    email: "svbrconstructions@gmail.com",
    instagram: "https://www.instagram.com/sachings_sachin?igsh=aG8ycjE3d21wcG4x",
    whatsapp: `https://wa.me/919035911632?text=${encodeURIComponent("Hi Sachin, I'm interested in starting a construction project with SVB Constructions. Can we connect?")}`,
    RoleIcon: Building2,
  },
  {
    name: "Sanjay K S",
    designation: "Managing Director",
    experience: "6+",
    experienceLabel: "Years in Project Management",
    bio: "Sanjay K S serves as Director at SVB Constructions, Nyamathi. With deep expertise in civil engineering and project management, Sanjay K S oversees quality standards across all projects in Nyamathi, Honnali and Shivamogga.",
    photo: "/assets/team-sanjay.jpeg",
    photoPosition: "top center",
    email: "svbrconstructions@gmail.com",
    instagram: "https://www.instagram.com/sanjukssanjay?igsh=MTltanJiYWY3cnk0eA==",
    whatsapp: `https://wa.me/916361638075?text=${encodeURIComponent("Hi Sanjay, I'm interested in discussing a construction project with SVB Constructions. Can we connect?")}`,
    RoleIcon: Briefcase,
  },
  {
    name: "Panchappa A G",
    designation: "Senior Civil Engineer",
    experience: "25+",
    experienceLabel: "Years in Structural Design",
    bio: "Panchappa A G is the senior civil engineer at Shree Veerabhadreshwara Constructions, with 25+ years of structural design expertise across Nyamathi, Karnataka. Panchappa A G oversees technical quality across all SVB Constructions projects.",
    photo: "/assets/team-panchappa.jpeg",
    photoPosition: "top center",
    email: "svbrconstructions@gmail.com",
    instagram: "#",
    whatsapp: `https://wa.me/919035911632?text=${encodeURIComponent("Hi, I'd like to discuss a construction project with SVB Constructions. Can we connect?")}`,
    RoleIcon: HardHat,
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
            Our Leadership
          </p>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl text-[#001F3F] mb-5">
            Meet Our Leadership
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Experienced professionals committed to delivering quality construction across every project.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {team.map((member, i) => {
            const { RoleIcon } = member;
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.13 }}
                whileHover={{ y: -10, boxShadow: "0 24px 60px rgba(0,31,63,0.18)" }}
                data-testid={`team-card-${i}`}
                className="group bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-md hover:border-[#C8A96B]/35 transition-all duration-350 flex flex-col"
              >
                {/* ── Gold experience badge strip ── */}
                <div
                  className="flex items-center justify-between px-6 py-4"
                  style={{
                    background: "linear-gradient(135deg, #001F3F 0%, #002d5a 100%)",
                    borderBottom: "2px solid #C8A96B",
                  }}
                >
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className="font-sora font-bold text-[#C8A96B]"
                      style={{ fontSize: "28px", lineHeight: 1 }}
                    >
                      {member.experience}
                    </span>
                    <span className="text-white/50 text-xs font-inter uppercase tracking-wider">
                      Yrs
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-white/40 text-[10px] font-inter uppercase tracking-widest leading-tight">
                      Experience
                    </div>
                    <div className="text-white/75 text-[11px] font-inter font-medium mt-0.5 leading-tight">
                      {member.experienceLabel.replace(/Years in /i, "")}
                    </div>
                  </div>
                </div>

                {/* ── Professional photo ── */}
                <div className="relative bg-[#F1F5F9] overflow-hidden" style={{ height: "380px" }}>
                  <img
                    src={member.photo}
                    alt={`${member.name} - ${member.designation}, Shree Veerabhadreshwara Constructions`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: member.photoPosition }}
                    loading="lazy"
                  />
                  {/* Subtle bottom gradient for name area */}
                  <div
                    className="absolute bottom-0 left-0 right-0"
                    style={{
                      height: "80px",
                      background: "linear-gradient(to top, rgba(0,31,63,0.55) 0%, transparent 100%)",
                    }}
                  />
                </div>

                {/* ── Card content ── */}
                <div className="flex flex-col flex-grow p-7">
                  {/* Name */}
                  <h3 className="font-sora font-bold text-[#001F3F] mb-1" style={{ fontSize: "20px" }}>
                    {member.name}
                  </h3>

                  {/* Designation + Icon */}
                  <div className="flex items-center gap-2 mb-4">
                    <RoleIcon size={14} color="#C8A96B" strokeWidth={1.5} />
                    <span
                      className="font-sora font-semibold text-[#C8A96B]"
                      style={{ fontSize: "13px", letterSpacing: "0.3px" }}
                    >
                      {member.designation}
                    </span>
                  </div>

                  {/* Gold divider */}
                  <div
                    className="w-10 h-0.5 bg-[#C8A96B] rounded mb-4"
                    style={{ opacity: 0.6 }}
                  />

                  {/* Bio */}
                  <p className="text-[#64748B] text-sm leading-relaxed flex-grow">
                    {member.bio}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
