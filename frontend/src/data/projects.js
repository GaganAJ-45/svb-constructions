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
    image: "/assets/project-luxury-villa.jpeg",
    alt: "Luxury villa modern elevation project by SVB Constructions in Nyamathi Karnataka",
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
    image: "/assets/project-modern-family-home.jpeg",
    alt: "Modern family home front elevation with balcony and landscape by SVB Constructions",
    gallery: [
      {
        image: "/assets/project-modern-family-home-gallery-2.jpeg",
        alt: "Alternate front elevation view of modern family home by SVB Constructions",
      },
    ],
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
    image: "/assets/project-contemporary-residence.jpeg",
    alt: "Contemporary residential elevation with warm lighting by SVB Constructions",
    gallery: [
      {
        image: "/assets/project-contemporary-residence-gallery-2.jpeg",
        alt: "Side elevation view of contemporary residential project by SVB Constructions",
      },
    ],
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
    image: "/assets/project-traditional-modern-home.jpeg",
    alt: "Traditional modern home elevation with entrance canopy and garden by SVB Constructions",
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
    image: "/assets/project-elevated-modern-design.jpeg",
    alt: "Elevated modern residential facade design by SVB Constructions",
    location: "Nyamathi, Karnataka",
    year: "2023",
    type: "Residential",
    description: "Architecturally bold modern home defined by strong geometric proportions, high-quality facade cladding, and precision engineering that creates a landmark residential presence.",
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
