export type GalleryCategory = "all" | "residential" | "commercial" | "infrastructure" | "construction-sites";

export interface GalleryImage {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryDisplay: string;
  imageUrl: string;
  caption: string;
  isIllustrative: boolean; // Transparency flag
}

export const galleryCategories = [
  { id: "all", label: "All Photographs" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "construction-sites", label: "Construction Sites" }
] as const;

/**
 * Illustrative architectural & construction gallery images.
 * Explicitly marked as illustrative concepts until client authentic photography is added.
 */
export const galleryImagesData: GalleryImage[] = [
  {
    id: "gal-1",
    title: "Urban Residential Architectural High-Rise",
    category: "residential",
    categoryDisplay: "Residential",
    imageUrl: "/assets/images/residential.jpg",
    caption: "Multi-storey contemporary residential tower with expansive balconies and energy-efficient glazing.",
    isIllustrative: true
  },
  {
    id: "gal-2",
    title: "Commercial Grade Office Facade",
    category: "commercial",
    categoryDisplay: "Commercial",
    imageUrl: "/assets/images/commercial.jpg",
    caption: "Modern corporate tower displaying geometric glass curtain walls and structural balance.",
    isIllustrative: true
  },
  {
    id: "gal-3",
    title: "Bridge & Civil Infrastructure Engineering",
    category: "infrastructure",
    categoryDisplay: "Infrastructure",
    imageUrl: "/assets/images/infrastructure.jpg",
    caption: "Heavy civil infrastructure work emphasizing curved structural arches and foundational stability.",
    isIllustrative: true
  },
  {
    id: "gal-4",
    title: "On-Site Structural Reinforcement & Casting",
    category: "construction-sites",
    categoryDisplay: "Construction Sites",
    imageUrl: "/assets/images/structural.jpg",
    caption: "Precision reinforced concrete steel rebar fixing and formwork assembly during foundational phases.",
    isIllustrative: true
  },
  {
    id: "gal-5",
    title: "Modern Architectural Housing Enclave",
    category: "residential",
    categoryDisplay: "Residential",
    imageUrl: "/assets/images/gallery_villa.jpg",
    caption: "Premium residential villa architecture highlighting clean geometries and natural daylight integration.",
    isIllustrative: true
  },
  {
    id: "gal-6",
    title: "Large-Scale Earthworks & Site Excavation",
    category: "infrastructure",
    categoryDisplay: "Infrastructure",
    imageUrl: "/assets/images/civil_construction.jpg",
    caption: "Systematic site development, land grading, and regional utility network preparations.",
    isIllustrative: true
  },
  {
    id: "gal-7",
    title: "Retail & Commercial Plaza Interior Shell",
    category: "commercial",
    categoryDisplay: "Commercial",
    imageUrl: "/assets/images/gallery_retail.jpg",
    caption: "Spacious atrium engineering with open sightlines and durable commercial flooring substrates.",
    isIllustrative: true
  },
  {
    id: "gal-8",
    title: "Tower Crane & Multi-Level Structural Coordination",
    category: "construction-sites",
    categoryDisplay: "Construction Sites",
    imageUrl: "/assets/images/coordination.jpg",
    caption: "Active construction staging showcasing rigorous safety protocols and coordinated hoisting operations.",
    isIllustrative: true
  }
];
