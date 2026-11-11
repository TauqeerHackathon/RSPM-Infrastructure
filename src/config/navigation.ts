export interface NavItem {
  name: string;
  href: string;
  isCTA?: boolean;
}

export const navigationItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" }
];

export const ctaButton = {
  name: "Get a Quote",
  href: "/contact"
};
