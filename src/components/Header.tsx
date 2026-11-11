import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ArrowRight } from "lucide-react";
import { navigationItems, ctaButton } from "../config/navigation";
import { companyConfig } from "../config/company";
import { MobileMenu } from "./MobileMenu";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#0A1C2E]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10 py-2 sm:py-2.5"
            : "bg-[#0A1C2E] border-b border-white/5 py-2.5 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-4 min-h-[58px] sm:min-h-[64px]">
            
            {/* LEFT ZONE: Original RSPM Logo with tight display container */}
            <Link
              to="/"
              className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD9141] rounded-sm shrink-0"
              aria-label="RSPM Infrastructure Private Limited - Home"
            >
              <div className="bg-white px-2 py-0.5 sm:py-1 rounded shadow-xs flex items-center justify-center transition-transform group-hover:scale-[1.02]">
                <img
                  src={companyConfig.headerLogoPath}
                  alt={companyConfig.legalName}
                  className="h-10 sm:h-12 w-auto max-w-[130px] sm:max-w-[160px] object-contain"
                />
              </div>
            </Link>

            {/* CENTER ZONE: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-all relative ${
                      isActive
                        ? "text-[#BD9141] font-semibold"
                        : "text-white/85 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-[#BD9141] rounded-full animate-in fade-in" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT ZONE: Desktop CTA Button */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link
                to={ctaButton.href}
                className="inline-flex items-center gap-2 px-4.5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0A1C2E] bg-[#BD9141] hover:bg-[#D8B66A] rounded-md shadow-sm transition-all duration-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#BD9141]"
              >
                <span>{ctaButton.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* MOBILE HAMBURGER BUTTON: Mandatory on RIGHT side */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
                className="flex items-center justify-center min-w-[44px] min-h-[44px] p-2.5 text-white hover:text-[#BD9141] hover:bg-white/5 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD9141]"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
