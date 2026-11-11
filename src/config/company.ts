/**
 * RSPM INFRASTRUCTURE PRIVATE LIMITED
 * Centralized Company Configuration & Single Source of Truth
 */

export interface DirectorInfo {
  name: string;
  role: string;
  initials: string;
}

export interface CompanyConfig {
  legalName: string;
  shortName: string;
  tagline: string;
  cin: string;
  registrationNumber: string;
  incorporationDate: string;
  companyType: string;
  companyStatus: string;
  roc: string;
  registeredOffice: {
    line1: string;
    line2: string;
    area: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    country: string;
    fullFormatted: string;
  };
  directors: DirectorInfo[];
  primaryPhone: string;
  primaryPhoneDisplay: string;
  whatsappNumber: string;
  whatsappLink: string;
  prefilledWhatsAppMessage: string;
  officialEmail: string | null; // Configurable; pending client confirmation
  logoPath: string;
  headerLogoPath: string; // Tighter crop derivative for balanced compact header & mobile display
  googleMapsQueryUrl: string;
  developerAttribution: {
    name: string;
    url: string;
  };
}

export const companyConfig: CompanyConfig = {
  legalName: "RSPM INFRASTRUCTURE PRIVATE LIMITED",
  shortName: "RSPM Infrastructure",
  tagline: "BUILDING TOMORROW, TOGETHER",
  cin: "U43299MR2026PTC475715",
  registrationNumber: "475715",
  incorporationDate: "17 April 2026",
  companyType: "Private Limited Company",
  companyStatus: "Active",
  roc: "RoC Mumbai",
  registeredOffice: {
    line1: "C-603, Konark Residency",
    line2: "Madhuban Township",
    area: "Vasai",
    city: "Vasai",
    district: "Thane",
    state: "Maharashtra",
    pincode: "401208",
    country: "India",
    fullFormatted: "C-603, Konark Residency, Madhuban Township, Vasai, Thane, Maharashtra – 401208, India."
  },
  directors: [
    {
      name: "Mr. Raghunath Shivshankar Rai",
      role: "Director",
      initials: "RR"
    },
    {
      name: "Mrs. Sita Raghunath Rai",
      role: "Managing Director",
      initials: "SR"
    }
  ],
  primaryPhone: "+919096671425",
  primaryPhoneDisplay: "+91 90966 71425",
  whatsappNumber: "919096671425",
  whatsappLink: "https://wa.me/919096671425",
  prefilledWhatsAppMessage: "Hello RSPM Infrastructure, I would like to enquire about your construction and infrastructure services. Please share more details.",
  officialEmail: null, // Keep null until client supplies official domain email
  logoPath: "/assets/aistudio/Architectural_RSPM_Arch_Logo_99df05d8.png",
  headerLogoPath: "/assets/images/rspm_logo_crop.png",
  // Google Maps search query using the exact registered corporate address
  googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=Konark+Residency+Madhuban+Township+Vasai+Thane+Maharashtra+401208",
  developerAttribution: {
    name: "GXA Technologies",
    url: "https://gxatechnology.com"
  }
};
