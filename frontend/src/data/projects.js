// TO ADD NEW PROJECTS:
// 1. Add new object to this array
// 2. Upload image to public URL or local path
// 3. Set featured: true for large card treatment
// 4. Set featured: false for small card treatment

export const PROJECTS = [
  {
    id: 1,
    name: "Luxury Villa",
    category: "residential",
    image: "https://customer-assets.emergentagent.com/job_svb-constructions/artifacts/tys561un_pro1.jpeg",
    location: "Nyamathi, Karnataka",
    year: "2024",
    type: "Residential Villa",
    description: "Premium luxury villa featuring a warm tropical aesthetic, natural stone facade, ambient landscape lighting, and lush garden surroundings. Designed for a discerning family seeking timeless elegance.",
    status: "Completed",
    featured: true,
  },
  {
    id: 2,
    name: "Modern Family Home",
    category: "residential",
    image: "https://customer-assets.emergentagent.com/job_svb-constructions/artifacts/fke9zy8h_pro2.jpeg",
    location: "Shivamogga, Karnataka",
    year: "2024",
    type: "Residential",
    description: "Contemporary 3-storey family residence with geometric design language, glass-railinged balconies, rich wooden accents, and premium exterior lighting creating a striking nighttime silhouette.",
    status: "Completed",
    featured: false,
  },
  {
    id: 3,
    name: "Contemporary Residence",
    category: "residential",
    image: "https://customer-assets.emergentagent.com/job_svb-constructions/artifacts/hn8teuwn_pro3.jpeg",
    location: "Davanagere, Karnataka",
    year: "2023",
    type: "Residential",
    description: "Multi-level contemporary home with a distinctive multi-material facade, ornamental grill gate, and tasteful decorative lighting highlighting architectural details.",
    status: "Completed",
    featured: false,
  },
  {
    id: 4,
    name: "Traditional Modern Home",
    category: "residential",
    image: "https://customer-assets.emergentagent.com/job_svb-constructions/artifacts/50nchm9l_project6.jpeg",
    location: "Honnali, Karnataka",
    year: "2023",
    type: "Residential",
    description: "Thoughtful blend of traditional roofing heritage with modern structural forms. Elegant gated entrance, warm ambient garden lighting, and carefully curated landscaping complete the exterior.",
    status: "Completed",
    featured: true,
  },
  {
    id: 5,
    name: "Elevated Modern Design",
    category: "residential",
    image: "https://customer-assets.emergentagent.com/job_svb-constructions/artifacts/ymmk8hl4_project4.jpeg",
    location: "Nyamathi, Karnataka",
    year: "2023",
    type: "Residential",
    description: "Architecturally bold modern home defined by strong geometric proportions, high-quality facade cladding, and precision engineering that creates a landmark residential presence.",
    status: "Completed",
    featured: false,
  },
  {
    id: 6,
    name: "Commercial Office Complex",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    location: "Shivamogga, Karnataka",
    year: "2022",
    type: "Commercial",
    description: "5-storey Grade-A commercial complex with modern glass facade, dedicated basement parking, premium lobby interiors, and full MEP infrastructure for professional occupancy.",
    status: "Completed",
    featured: false,
  },
];

export const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "residential", label: "Residential" },
  { key: "commercial", label: "Commercial" },
  { key: "industrial", label: "Industrial" },
  { key: "interiors", label: "Interiors" },
];
