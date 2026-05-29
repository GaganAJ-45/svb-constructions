import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar } from "lucide-react";

const projects = [
  {
    id: 1, name: "Luxury Villa Complex", category: "residential",
    image: "https://images.unsplash.com/photo-1768223933860-6d62bc5b2ff3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBhcmNoaXRlY3R1cmUlMjBleHRlcmlvciUyMGJ1aWxkaW5nfGVufDB8fHx8MTc4MDA2ODA1MHww&ixlib=rb-4.1.0&q=85",
    description: "A premium gated villa community featuring 12 bespoke luxury villas with contemporary architecture, landscaped gardens, and premium amenities in North Bengaluru.",
    year: 2023, location: "North Bengaluru",
  },
  {
    id: 2, name: "Corporate Office Tower", category: "commercial",
    image: "https://images.pexels.com/photos/28272634/pexels-photo-28272634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "A 12-storey Grade A commercial office complex with modern facade, LEED-certified construction, and state-of-the-art building management systems.",
    year: 2022, location: "Electronic City, Bengaluru",
  },
  {
    id: 3, name: "Industrial Warehouse Complex", category: "industrial",
    image: "https://images.unsplash.com/photo-1746364742672-c6383331b032?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBjaXZpbCUyMGVuZ2luZWVyaW5nJTIwc2l0ZXxlbnwwfHx8fDE3ODAwNjgwNTB8MA&ixlib=rb-4.1.0&q=85",
    description: "A 50,000 sq.ft. industrial warehouse with advanced structural engineering, dedicated loading docks, and integrated fire safety systems.",
    year: 2022, location: "Bommasandra, Bengaluru",
  },
  {
    id: 4, name: "Modern Apartment Block", category: "residential",
    image: "https://images.pexels.com/photos/4170184/pexels-photo-4170184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "A 6-storey residential apartment complex with 36 spacious 2 & 3 BHK units, landscaped terraces, and premium common area facilities.",
    year: 2021, location: "Mysuru",
  },
  {
    id: 5, name: "Retail & Commercial Hub", category: "commercial",
    image: "https://static.prod-images.emergentagent.com/jobs/31d1f9c1-ff79-4b16-8a6e-c94a65559d9a/images/b6d1d83118d67d554b4c66daf405fb28c6bbc86a45349436ebf94295a1cfa112.png",
    description: "A mixed-use retail and commercial development with ground-floor retail spaces, upper-floor offices, and premium hospitality facilities.",
    year: 2023, location: "Bengaluru City Centre",
  },
  {
    id: 6, name: "Elegant Interior Transformation", category: "interiors",
    image: "https://static.prod-images.emergentagent.com/jobs/31d1f9c1-ff79-4b16-8a6e-c94a65559d9a/images/35cf3e93206f46f4bbfc04f8593be083f3129d58bece92a19dfb671fd181b453.png",
    description: "A complete interior transformation of a 4,500 sq.ft. luxury penthouse — blending contemporary aesthetics with functional elegance and premium finishes.",
    year: 2023, location: "Indiranagar, Bengaluru",
  },
];

const filters = [
  { key: "all", label: "All Projects" },
  { key: "residential", label: "Residential" },
  { key: "commercial", label: "Commercial" },
  { key: "industrial", label: "Industrial" },
  { key: "interiors", label: "Interiors" },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      data-testid="portfolio-section"
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-[#C8A96B] text-xs font-semibold uppercase tracking-[0.3em] mb-4">Our Work</p>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl text-[#001F3F] mb-5">Our Projects</h2>
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-2xl mx-auto">
            Diverse portfolio spanning residential, commercial, and industrial sectors across Karnataka.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              data-testid={`portfolio-filter-${f.key}`}
              onClick={() => setActiveFilter(f.key)}
              className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeFilter === f.key
                  ? "bg-[#C8A96B] text-[#001F3F] shadow-md"
                  : "bg-[#F8FAFC] text-[#94A3B8] border border-[#E2E8F0] hover:text-[#001F3F] hover:border-[#C8A96B]/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                data-testid={`portfolio-card-${project.id}`}
                className="group relative rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#001F3F]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="font-sora font-bold text-xl text-[#C8A96B] mb-2">{project.name}</h3>
                  <p className="text-white text-sm capitalize mb-2">{project.category}</p>
                  <div className="flex items-center gap-3 text-[#94A3B8] text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {project.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {project.location}
                    </span>
                  </div>
                  <span className="mt-4 border border-[#C8A96B] text-[#C8A96B] px-4 py-1.5 text-xs rounded-full">
                    View Project
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-testid="portfolio-lightbox"
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="bg-[#001F3F] max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <button
                  data-testid="portfolio-lightbox-close"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
                <div className="absolute bottom-4 left-4 bg-[#C8A96B] text-[#001F3F] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full capitalize">
                  {selectedProject.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-sora font-bold text-2xl text-white mb-2">{selectedProject.name}</h3>
                <div className="flex items-center gap-4 text-[#94A3B8] text-sm mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} color="#C8A96B" /> {selectedProject.year}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} color="#C8A96B" /> {selectedProject.location}
                  </span>
                </div>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
