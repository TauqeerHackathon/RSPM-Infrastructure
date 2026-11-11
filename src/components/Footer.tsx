import React from "react";
import { Link } from "react-router-dom";
import { Phone, MessageSquare, MapPin, ExternalLink, ShieldCheck, ArrowRight } from "lucide-react";
import { companyConfig } from "../config/company";
import { navigationItems } from "../config/navigation";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const servicesList = [
    { name: "Residential Construction", href: "/services#residential-construction" },
    { name: "Commercial Construction", href: "/services#commercial-construction" },
    { name: "Infrastructure Development", href: "/services#infrastructure-development" },
    { name: "Civil Works & Contracting", href: "/services#civil-construction" },
    { name: "Renovation & Redevelopment", href: "/services#renovation-redevelopment" },
    { name: "Construction Coordination", href: "/services#project-coordination" }
  ];

  return (
    <footer className="bg-[#06121E] text-white border-t border-white/10" aria-label="Corporate Footer">
      {/* Top Gold Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#BD9141]/20 via-[#BD9141] to-[#BD9141]/20" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* COLUMN 1: Brand & Corporate Overview */}
          <div className="space-y-4">
            <Link to="/" className="inline-block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD9141]">
              <div className="bg-white p-2 rounded-sm shadow-sm inline-flex items-center justify-center">
                <img
                  src={companyConfig.headerLogoPath}
                  alt={companyConfig.legalName}
                  className="h-12 w-auto max-w-[180px] object-contain"
                />
              </div>
            </Link>

            <p className="text-xs uppercase tracking-widest text-[#BD9141] font-semibold">
              {companyConfig.tagline}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              RSPM Infrastructure Private Limited is a Maharashtra-based enterprise dedicated to residential developments, commercial structures, civil contracting, and infrastructure solutions with a rigorous commitment to quality and engineering integrity.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1 border-t border-white/5">
              <div className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#BD9141] shrink-0" />
                <span>CIN: <strong className="font-mono text-white/90">{companyConfig.cin}</strong></span>
              </div>
              <p className="text-slate-400 pl-5">Registered with {companyConfig.roc}</p>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-slate-300 hover:text-[#BD9141] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#BD9141]/60 group-hover:text-[#BD9141] group-hover:translate-x-0.5 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy"
                  className="text-slate-300 hover:text-[#BD9141] transition-colors inline-flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#BD9141]/60 group-hover:text-[#BD9141] group-hover:translate-x-0.5 transition-transform" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Our Services */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesList.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-slate-300 hover:text-[#BD9141] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#BD9141]/60 group-hover:text-[#BD9141] group-hover:translate-x-0.5 transition-transform" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Contact Information */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Contact Information
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              
              {/* Phone */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#BD9141] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">Primary Business Contact:</span>
                  <a
                    href={`tel:${companyConfig.primaryPhone}`}
                    className="font-medium text-white hover:text-[#BD9141] transition-colors"
                  >
                    {companyConfig.primaryPhoneDisplay}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">Official WhatsApp Desk:</span>
                  <a
                    href={`${companyConfig.whatsappLink}?text=${encodeURIComponent(companyConfig.prefilledWhatsAppMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#25D366] hover:underline inline-flex items-center gap-1"
                  >
                    <span>+91 90966 71425</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Registered Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#BD9141] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">Registered Office:</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {companyConfig.registeredOffice.fullFormatted}
                  </p>
                  <a
                    href={companyConfig.googleMapsQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-1.5 text-xs text-[#BD9141] hover:underline"
                  >
                    <span>View Location on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Subtle Developer Attribution */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            © {currentYear} {companyConfig.legalName}. All Rights Reserved.
          </p>

          <p className="text-center sm:text-right">
            Website Designed & Developed by{" "}
            <a
              href={companyConfig.developerAttribution.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-[#BD9141] underline transition-colors"
            >
              {companyConfig.developerAttribution.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
