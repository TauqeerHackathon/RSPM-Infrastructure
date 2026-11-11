export type ProjectCategory = "residential" | "commercial" | "infrastructure" | "civil";
export type ProjectStatus = "completed" | "ongoing" | "upcoming";

export interface ProjectItem {
  id: string;
  name: string;
  category: ProjectCategory;
  categoryDisplay: string;
  city: string;
  state: string;
  description: string;
  coverImage: string;
  galleryImages?: string[];
  status: ProjectStatus;
  statusDisplay: string;
  completionDate?: string;
  reraRegistration?: string;
  propertyType?: string;
  configuration?: string;
  highlights?: string[];
}

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "civil", label: "Civil Works" }
] as const;

export const projectStatuses = [
  { id: "all", label: "All Statuses" },
  { id: "ongoing", label: "Ongoing" },
  { id: "upcoming", label: "Upcoming" },
  { id: "completed", label: "Completed" }
] as const;

/**
 * Real project data is awaiting client verification.
 * Per master instructions: DO NOT invent fake projects.
 * Leaving array empty causes the UI to render the approved elegant state:
 * "Our project portfolio will be updated soon. Connect with our team to learn more about our work."
 */
export const projectsData: ProjectItem[] = [];
