import React from "react";
import { Link } from "react-router-dom";
import { Home, Building2, HardHat, Layers, Hammer, ClipboardCheck, ArrowRight } from "lucide-react";
import { ServiceItem } from "../config/services";

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const renderIcon = (name: string) => {
    const iconProps = { className: "w-6 h-6 text-[#BD9141]" };
    switch (name) {
      case "Home":
        return <Home {...iconProps} />;
      case "Building2":
        return <Building2 {...iconProps} />;
      case "HardHat":
        return <HardHat {...iconProps} />;
      case "Layers":
        return <Layers {...iconProps} />;
      case "Hammer":
        return <Hammer {...iconProps} />;
      case "ClipboardCheck":
        return <ClipboardCheck {...iconProps} />;
      default:
        return <Building2 {...iconProps} />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#BD9141]/50 transition-all duration-300 p-6 sm:p-7 group">
      {/* Icon Frame */}
      <div className="w-12 h-12 rounded-md bg-[#0A1C2E] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
        {renderIcon(service.iconName)}
      </div>

      {/* Service Title */}
      <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0A1C2E] group-hover:text-[#102C46] transition-colors mb-2.5">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#596675] leading-relaxed mb-6 flex-1">
        {service.shortDesc}
      </p>

      {/* Learn More Action */}
      <div className="pt-4 border-t border-slate-100 mt-auto">
        <Link
          to={`/services#${service.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#BD9141] hover:text-[#9c732c] transition-colors group/link"
        >
          <span>Explore Capabilities</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
