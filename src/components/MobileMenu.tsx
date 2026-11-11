import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Phone, MessageSquare, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { navigationItems, ctaButton } from "../config/navigation";
import { companyConfig } from "../config/company";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Close if window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        onClose();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col bg-[#0A1C2E] text-white lg:hidden overflow-y-auto animate-in fade-in duration-200"
    >
      {/* Top bar inside menu */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3.5 border-b border-white/10 bg-[#06121E]">
        <Link to="/" onClick={onClose} className="flex items-center">
          <div className="bg-white px-2 py-0.5 rounded shadow-xs flex items-center justify-center">
            <img
              src={companyConfig.headerLogoPath}
              alt={companyConfig.legalName}
              className="h-10 w-auto max-w-[130px] object-contain"
            />
          </div>
        </Link>

        {/* Close Button: Min 44x44px touch target */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="flex items-center justify-center min-w-[44px] min-h-[44px] p-2.5 rounded-md text-white hover:text-[#BD9141] hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD9141]"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-5 py-6 space-y-1">
        <p className="px-3 text-[11px] font-semibold uppercase tracking-widest text-[#BD9141] mb-2">
          Navigation
        </p>
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={onClose}
              className={`flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium transition-all ${
                isActive
                  ? "bg-[#102C46] text-[#BD9141] font-semibold pl-4 border-l-2 border-[#BD9141]"
                  : "text-white/85 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>{item.name}</span>
              <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? "text-[#BD9141] translate-x-1" : "text-white/30"}`} />
            </Link>
          );
        })}

        {/* CTA Button */}
        <div className="pt-4 mt-2 border-t border-white/10">
          <Link
            to={ctaButton.href}
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-[#BD9141] hover:bg-[#D8B66A] text-[#0A1C2E] font-semibold text-sm rounded-lg shadow-md transition-colors"
          >
            <span>{ctaButton.name}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* Direct Contact Tray */}
      <div className="p-5 bg-[#06121E] border-t border-white/10 space-y-3">
        <div className="flex items-center gap-2 text-xs text-white/70">
          <ShieldCheck className="w-4 h-4 text-[#BD9141]" />
          <span>Active RoC Mumbai Reg: {companyConfig.registrationNumber}</span>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <a
            href={`tel:${companyConfig.primaryPhone}`}
            className="flex items-center justify-center gap-2 py-2.5 px-3 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-medium text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#BD9141]" />
            <span>Call Us</span>
          </a>

          <a
            href={`${companyConfig.whatsappLink}?text=${encodeURIComponent(companyConfig.prefilledWhatsAppMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 rounded-lg text-xs font-medium text-[#25D366] transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>

        <div className="flex items-start gap-2 pt-2 text-[11px] text-white/50">
          <MapPin className="w-3.5 h-3.5 text-[#BD9141] shrink-0 mt-0.5" />
          <span>Vasai, Thane, Maharashtra – 401208</span>
        </div>
      </div>
    </div>
  );
};
