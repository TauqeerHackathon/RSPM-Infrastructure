export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  iconName: string;
  capabilities: string[];
  scopeHighlight: string;
  illustrativeImage: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "residential-construction",
    title: "Residential Construction",
    shortDesc: "Housing, villas, apartments, residential buildings, and custom living spaces engineered for durability.",
    detailedDesc: "We provide end-to-end residential construction solutions ranging from independent bungalows and private villas to modern multi-storey residential apartment complexes. Our focus is centered on structural integrity, thoughtful spatial planning, quality materials, and timely coordination.",
    iconName: "Home",
    capabilities: [
      "Custom Villa & Bungalow Construction",
      "Multi-Unit Residential Developments",
      "Apartment Buildings & Housing Projects",
      "Foundation, Structural Framing & Masonry",
      "Interior Shell Finishing & Utility Integration"
    ],
    scopeHighlight: "Crafting enduring residential environments with precision planning and quality construction materials.",
    illustrativeImage: "/assets/images/residential.jpg"
  },
  {
    id: "commercial-construction",
    title: "Commercial Construction",
    shortDesc: "Office complexes, retail spaces, commercial centers, and professional development environments.",
    detailedDesc: "Delivering purposeful commercial environments tailored to business operations, retail footfalls, and corporate workplaces. We emphasize functional layouts, high structural standards, efficient mechanical/electrical conduit planning, and robust build quality.",
    iconName: "Building2",
    capabilities: [
      "Corporate Office Buildings & Workspaces",
      "Retail Centers, Showrooms & Commercial Plazas",
      "Business Park Structures & Commercial Shells",
      "High-Traffic Flooring & Façade Execution",
      "Safety, Fire, and Accessibility Integration"
    ],
    scopeHighlight: "Creating modern commercial hubs built to foster commerce, productivity, and long-term asset value.",
    illustrativeImage: "/assets/images/commercial.jpg"
  },
  {
    id: "infrastructure-development",
    title: "Infrastructure Development",
    shortDesc: "Infrastructure-related construction, site preparation, utility networks, and regional development works.",
    detailedDesc: "Comprehensive infrastructure services providing the essential foundations for communities and developments. From systematic site grading and earthworks to roads, stormwater drains, and civic utility conduits.",
    iconName: "HardHat",
    capabilities: [
      "Site Grading, Excavation & Ground Prep",
      "Internal Access Roads & Paving Works",
      "Drainage Networks & Stormwater Solutions",
      "Underground Utility Conduits & Retaining Walls",
      "Subdivision Infrastructure & Site Servicing"
    ],
    scopeHighlight: "Strengthening community foundations with reliable, large-scale civil infrastructure execution.",
    illustrativeImage: "/assets/images/infrastructure.jpg"
  },
  {
    id: "civil-construction",
    title: "Civil Construction & Contracting",
    shortDesc: "Civil engineering works, reinforced concrete structural construction, and general project contracting.",
    detailedDesc: "Technical civil construction and contracting services managing complex RCC frameworks, load-bearing structures, and industrial substructures. We adhere strictly to engineering specifications, testing protocols, and site safety procedures.",
    iconName: "Layers",
    capabilities: [
      "Reinforced Cement Concrete (RCC) Framing",
      "Piling, Deep Foundations & Retaining Systems",
      "Structural Steel Fabrications & Erection",
      "Industrial Sheds & Warehousing Structures",
      "Civil Contracting & Material Quality Oversight"
    ],
    scopeHighlight: "Rigorous civil engineering and structural contracting focused on strength, safety, and compliance.",
    illustrativeImage: "/assets/images/structural.jpg"
  },
  {
    id: "renovation-redevelopment",
    title: "Renovation & Redevelopment",
    shortDesc: "Property improvement, structural retrofitting, modernization, and redevelopment-related services.",
    detailedDesc: "Revitalizing existing structures through structural strengthening, modern architectural overhauls, space reconfiguration, and comprehensive building repairs to extend asset longevity and aesthetic appeal.",
    iconName: "Hammer",
    capabilities: [
      "Structural Rehabilitation & Strengthening",
      "Building Façade Modernization & Restyling",
      "Complete Interior & Exterior Redevelopment",
      "Waterproofing & Dampness Remediation",
      "Space Reconfiguration & Adaptive Reuse"
    ],
    scopeHighlight: "Transforming legacy spaces into modern, efficient, and resilient structures.",
    illustrativeImage: "/assets/images/renovation.jpg"
  },
  {
    id: "project-coordination",
    title: "Construction Project Coordination",
    shortDesc: "Planning support, construction coordination, site supervision, and milestone-driven progress management.",
    detailedDesc: "Disciplined project coordination that bridges owners, architects, contractors, and specialized vendors. We oversee schedules, verify on-site execution against architectural drawings, and ensure stringent quality oversight.",
    iconName: "ClipboardCheck",
    capabilities: [
      "Pre-Construction Planning & Feasibility Support",
      "On-Site Quality Supervision & Monitoring",
      "Subcontractor & Vendor Coordination",
      "Schedule Tracking & Material Flow Management",
      "Milestone Verification & Handover Documentation"
    ],
    scopeHighlight: "Streamlined project orchestration keeping construction timelines, standards, and communications aligned.",
    illustrativeImage: "/assets/images/coordination.jpg"
  }
];
