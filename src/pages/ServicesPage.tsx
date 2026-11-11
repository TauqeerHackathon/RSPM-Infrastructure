import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Building2,
  HardHat,
  Home,
  Layers,
  Hammer,
  ClipboardCheck,
  ShieldCheck
} from "lucide-react";
import { servicesData, ServiceItem } from "../config/services";
import { companyConfig } from "../config/company";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { SafeImage } from "../components/SafeImage";

export const ServicesPage: React.FC = () => {
  const getIcon = (name: string) => {
    const props = { className: "w-5 h-5 text-[#BD9141]" };
    switch (name) {
      case "Home":
        return <Home {...props} />;
      case "Building2":
        return <Building2 {...props} />;
      case "HardHat":
        return <HardHat {...props} />;
      case "Layers":
        return <Layers {...props} />;
      case "Hammer":
        return <Hammer {...props} />;
      case "ClipboardCheck":
        return <ClipboardCheck {...props} />;
      default:
        return <Building2 {...props} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Hero */}
      <PageHero
        title="Our Construction & Infrastructure Services"
        subtitle="End-to-end building, civil engineering, structural development, and project coordination solutions engineered to meet client specifications with high durability."
        badge="SERVICES & CAPABILITIES"
        breadcrumbs={[{ name: "Services" }]}
      />

      {/* Services Overview Quick Bar */}
      <section className="bg-[#F8F7F4] py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-[#BD9141] mb-4">
            Jump to Service Scope
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {servicesData.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-white hover:bg-[#0A1C2E] hover:text-white text-[#0A1C2E] border border-slate-200 shadow-xs transition-colors"
              >
                {svc.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES SECTIONS (Alternating Left/Right on Desktop, stacked on Mobile) */}
      <div className="divide-y divide-slate-200/90">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 1;

          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-16 sm:py-24 scroll-mt-24 ${isEven ? "bg-[#F8F7F4]" : "bg-white"}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Text Column */}
                  <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0A1C2E] text-white text-xs font-semibold uppercase tracking-wider mb-4">
                      {getIcon(service.iconName)}
                      <span>Service 0{index + 1}</span>
                    </div>

                    <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1C2E] leading-tight mb-4">
                      {service.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#596675] leading-relaxed mb-6">
                      {service.detailedDesc}
                    </p>

                    {/* Capabilities List */}
                    <div className="mb-8">
                      <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#0A1C2E] mb-3">
                        Key Capabilities & Execution Scope:
                      </h4>
                      <ul className="space-y-2.5">
                        {service.capabilities.map((cap, capIdx) => (
                          <li key={capIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#BD9141] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Scope Highlight Box */}
                    <div className="p-4 rounded-lg bg-white border border-slate-200 text-xs text-[#596675] mb-8 leading-relaxed shadow-xs">
                      <strong className="text-[#0A1C2E] block mb-1">Standard & Delivery Focus:</strong>
                      {service.scopeHighlight}
                    </div>

                    {/* Enquiry Buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0A1C2E] bg-[#BD9141] hover:bg-[#D8B66A] rounded-md shadow-xs transition-colors"
                      >
                        <span>Enquire About {service.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={`${companyConfig.whatsappLink}?text=${encodeURIComponent(
                          `Hello RSPM Infrastructure, I would like to enquire specifically regarding your ${service.title} capabilities.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0A1C2E] hover:text-[#BD9141] border border-slate-300 rounded-md transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>Quick WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="rounded-xl overflow-hidden shadow-lg aspect-[16/11] bg-slate-100 border border-slate-200">
                      <SafeImage
                        src={service.illustrativeImage}
                        alt={service.title}
                        fallbackTitle={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    {/* Caption Tag */}
                    <p className="mt-2 text-[11px] text-slate-400 text-center italic">
                      Representative illustrative visual of {service.title.toLowerCase()} methodology
                    </p>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* END-OF-PAGE ENQUIRY CTA SECTION */}
      <section className="py-16 sm:py-20 bg-[#0A1C2E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#BD9141] mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>CUSTOM CONSTRUCTION REQUIREMENTS</span>
          </div>

          <h2
            className="font-heading text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4"
            style={{ textWrap: "balance" }}
          >
            Need a Tailored Construction or Infrastructure Proposal?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto mb-8">
            Every project has unique site dynamics, structural needs, and timeline schedules. Connect directly with our team to discuss your architectural plans.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0A1C2E] bg-[#BD9141] hover:bg-[#D8B66A] rounded-md shadow-md transition-colors"
            >
              <span>Request Detailed Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${companyConfig.primaryPhone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-md transition-colors"
            >
              <span>Call +91 90966 71425</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
