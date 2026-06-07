import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, FolderOpen } from "lucide-react";
import { PROJECTS, CATEGORIES } from "../data/projects";

const INITIAL_SHOW = 6;
const LOAD_STEP = 3;

/* ─── Project Card ─────────────────────────────────── */
function ProjectCard({ project, large, onView }) {
  const [hovered, setHovered] = useState(false);
  const isMobile = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  const handleClick = useCallback(() => {
    if (isMobile && !hovered) { setHovered(true); return; }
    onView(project);
  }, [hovered, isMobile, onView, project]);

  return (
    <div
      data-testid={`portfolio-card-${project.id}`}
      className="relative rounded-xl overflow-hidden cursor-pointer w-full h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.alt || `${project.name} — ${project.category} project by SVB Constructions in ${project.location}`}
        loading={project.id <= 3 ? "eager" : "lazy"}
        className="w-full h-full object-cover"
        style={{
          filter: hovered ? "grayscale(0%)" : "grayscale(35%)",
          transform: hovered ? "scale(1.05)" : "scale(1)",
          transition: "all 0.4s ease",
        }}
      />

      {/* Category badge – top left */}
      <div
        className="absolute top-4 left-4 text-white text-[11px] uppercase font-inter"
        style={{
          background: "rgba(0,31,63,0.85)",
          backdropFilter: "blur(4px)",
          padding: "6px 14px",
          borderRadius: "4px",
          letterSpacing: "1px",
        }}
      >
        {project.category}
      </div>

      {/* Year badge – top right */}
      <div
        className="absolute top-4 right-4 text-[#001F3F] text-[11px] font-bold font-inter"
        style={{ background: "rgba(200,169,107,0.92)", padding: "6px 12px", borderRadius: "4px" }}
      >
        {project.year}
      </div>

      {/* Hover overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(0,31,63,0.92) 0%, rgba(0,31,63,0.4) 50%, transparent 100%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Hover content */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          padding: "28px 24px",
          transform: hovered ? "translateY(0)" : "translateY(20px)",
          opacity: hovered ? 1 : 0,
          transition: "all 0.4s ease",
        }}
      >
        <h3
          className="font-sora font-bold text-[#C8A96B] mb-1.5"
          style={{ fontSize: large ? "20px" : "16px" }}
        >
          {project.name}
        </h3>
        <div className="flex items-center gap-1.5 mb-4">
          <MapPin size={12} color="white" strokeWidth={1.5} />
          <span className="text-white/80 text-xs font-inter">{project.location}</span>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onView(project); }}
          data-testid={`portfolio-view-${project.id}`}
          className="text-white text-[12px] font-inter"
          style={{
            border: "1px solid rgba(255,255,255,0.5)",
            background: "transparent",
            padding: "8px 20px",
            borderRadius: "4px",
            letterSpacing: "1px",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          View Details →
        </button>
      </div>
    </div>
  );
}

/* ─── Masonry Grid ──────────────────────────────────── */
function MasonryGrid({ projects, onView }) {
  const groups = [];
  for (let i = 0; i < projects.length; i += 3) groups.push(projects.slice(i, i + 3));

  return (
    <>
      {/* Desktop alternating masonry */}
      <div className="hidden lg:block space-y-5">
        {groups.map((group, gi) => (
          <div key={gi}>
            {gi % 2 === 0 ? (
              /* Pattern A: Large (2/3) + 2 stacked (1/3) */
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px" }}>
                <div style={{ height: "460px" }}>
                  {group[0] && <ProjectCard project={group[0]} large onView={onView} />}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ height: "220px" }}>
                    {group[1] && <ProjectCard project={group[1]} onView={onView} />}
                  </div>
                  <div style={{ height: "220px" }}>
                    {group[2] && <ProjectCard project={group[2]} onView={onView} />}
                  </div>
                </div>
              </div>
            ) : (
              /* Pattern B: 2 small (1/3 each) + Large (1/3, same height) */
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
                <div style={{ height: "360px" }}>
                  {group[0] && <ProjectCard project={group[0]} onView={onView} />}
                </div>
                <div style={{ height: "360px" }}>
                  {group[1] && <ProjectCard project={group[1]} onView={onView} />}
                </div>
                <div style={{ height: "360px" }}>
                  {group[2] && <ProjectCard project={group[2]} onView={onView} />}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Tablet + Mobile grid */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((p) => (
          <div key={p.id} style={{ aspectRatio: "4/3" }}>
            <ProjectCard project={p} onView={onView} />
          </div>
        ))}
      </div>
    </>
  );
}

/* ─── Project Modal ─────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onEsc = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onEsc);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onEsc); };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      data-testid="portfolio-modal"
    >
      <motion.div
        className="bg-white relative overflow-y-auto"
        style={{ maxWidth: "900px", width: "90vw", maxHeight: "90vh", borderRadius: "16px" }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div style={{ height: "380px" }}>
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
            style={{ borderRadius: "16px 16px 0 0" }}
          />
        </div>

        {/* Close button */}
        <button
          data-testid="portfolio-modal-close"
          onClick={onClose}
          className="absolute top-4 right-4 flex items-center justify-center text-white rounded-full transition-colors"
          style={{ width: "40px", height: "40px", background: "rgba(0,0,0,0.55)", cursor: "pointer" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.82)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.55)")}
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        {/* Body */}
        <div className="p-8">
          <div className="flex gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-semibold uppercase font-inter rounded-full capitalize" style={{ background: "#C8A96B", color: "#001F3F" }}>
              {project.category}
            </span>
            <span className="px-3 py-1 text-xs font-semibold rounded-full text-white font-inter" style={{ background: "#001F3F" }}>
              {project.year}
            </span>
          </div>

          <h2 className="font-sora font-bold text-[#0F172A] mb-2" style={{ fontSize: "28px" }}>
            {project.name}
          </h2>

          <div className="flex items-center gap-2 mb-5">
            <MapPin size={14} color="#C8A96B" strokeWidth={1.5} />
            <span className="text-[#94A3B8] text-sm font-inter">{project.location}</span>
          </div>

          <p className="text-[#0F172A] leading-[1.75] mb-6 font-inter" style={{ fontSize: "15px" }}>
            {project.description}
          </p>

          {/* Details grid */}
          <div className="grid grid-cols-2 gap-5 p-5 rounded-xl mb-7" style={{ background: "#F8FAFC" }}>
            {[
              { label: "Project Type", value: project.type },
              { label: "Year Completed", value: project.year },
              { label: "Location", value: project.location },
              { label: "Status", value: "✓ Completed" },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="text-[#94A3B8] text-xs uppercase tracking-wider mb-1 font-inter">{label}</div>
                <div className="text-[#0F172A] text-sm font-medium font-inter">{value}</div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            onClick={onClose}
            data-testid="portfolio-modal-cta"
            className="block w-full py-4 text-center font-sora font-bold text-[#001F3F] rounded-lg transition-colors"
            style={{ background: "#C8A96B", fontSize: "15px" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#b8974f")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#C8A96B")}
          >
            Get a Similar Quote →
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Empty State ───────────────────────────────────── */
function EmptyState({ category, onReset }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <FolderOpen size={48} color="#E2E8F0" strokeWidth={1.5} className="mb-5" />
      <h3 className="font-sora font-semibold text-[#0F172A] mb-3" style={{ fontSize: "20px" }}>
        No {category} projects yet
      </h3>
      <p className="text-[#94A3B8] font-inter mb-6 max-w-sm" style={{ fontSize: "14px" }}>
        We're constantly growing our portfolio. Check back soon or explore our other projects.
      </p>
      <button
        onClick={onReset}
        data-testid="portfolio-empty-reset"
        className="border font-sora font-medium uppercase text-[#C8A96B] hover:bg-[#C8A96B] hover:text-[#001F3F] transition-all duration-300 rounded-lg"
        style={{ border: "1.5px solid #C8A96B", padding: "12px 32px", fontSize: "13px", letterSpacing: "1px", cursor: "pointer" }}
      >
        View All Projects
      </button>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────── */
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(INITIAL_SHOW);
  const [selectedProject, setSelectedProject] = useState(null);
  const [gridKey, setGridKey] = useState(0);

  const filtered = activeFilter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter);
  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const getCount = (key) => key === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.category === key).length;

  const handleFilter = (key) => {
    if (key === activeFilter) return;
    setActiveFilter(key);
    setVisibleCount(INITIAL_SHOW);
    setGridKey((n) => n + 1);
  };

  const loadMore = () => setVisibleCount((n) => Math.min(n + LOAD_STEP, filtered.length));

  return (
    <section id="portfolio" data-testid="portfolio-section" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-[#C8A96B] font-inter uppercase mb-3" style={{ fontSize: "11px", letterSpacing: "4px" }}>
            Our Work
          </p>
          <h2 className="font-sora font-bold text-[#0F172A] mb-4" style={{ fontSize: "clamp(32px,4vw,48px)" }}>
            Our Projects
          </h2>
          <p className="text-[#94A3B8] font-inter mx-auto mb-3" style={{ fontSize: "16px", maxWidth: "600px" }}>
            Crafting spaces that inspire — from homes to commercial landmarks across Karnataka
          </p>
          <p className="text-[#94A3B8] font-inter" style={{ fontSize: "13px" }}>
            Showing {Math.min(visibleCount, filtered.length)} of {filtered.length} projects
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 overflow-x-auto">
          {CATEGORIES.map((cat) => {
            const count = getCount(cat.key);
            const active = activeFilter === cat.key;
            return (
              <button
                key={cat.key}
                data-testid={`portfolio-filter-${cat.key}`}
                onClick={() => handleFilter(cat.key)}
                className="flex-shrink-0 font-inter transition-all duration-200"
                style={{
                  padding: "10px 20px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: active ? 700 : 500,
                  cursor: "pointer",
                  background: active ? "#C8A96B" : "transparent",
                  border: `1px solid ${active ? "#C8A96B" : "#E2E8F0"}`,
                  color: active ? "#001F3F" : "#94A3B8",
                }}
                onMouseEnter={(e) => {
                  if (!active) { e.currentTarget.style.borderColor = "#C8A96B"; e.currentTarget.style.color = "#C8A96B"; }
                }}
                onMouseLeave={(e) => {
                  if (!active) { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.color = "#94A3B8"; }
                }}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <EmptyState category={activeFilter} onReset={() => handleFilter("all")} />
          ) : (
            <motion.div
              key={gridKey}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MasonryGrid projects={visible} onView={setSelectedProject} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More */}
        {filtered.length > 0 && (
          <div className="flex flex-col items-center mt-12">
            {hasMore ? (
              <>
                <button
                  data-testid="portfolio-load-more"
                  onClick={loadMore}
                  className="font-sora font-medium uppercase text-[#C8A96B] hover:bg-[#C8A96B] hover:text-[#001F3F] transition-all duration-300 w-full sm:w-auto"
                  style={{
                    border: "1.5px solid #C8A96B",
                    padding: "14px 48px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    letterSpacing: "1px",
                    cursor: "pointer",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#C8A96B"; e.currentTarget.style.color = "#001F3F"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C8A96B"; }}
                >
                  Load More Projects
                </button>
                <p className="text-[#94A3B8] font-inter mt-3" style={{ fontSize: "12px" }}>
                  Showing {visibleCount} of {filtered.length} projects
                </p>
              </>
            ) : (
              <p className="text-[#94A3B8] font-inter" style={{ fontSize: "13px" }}>
                All projects loaded ✓
              </p>
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
