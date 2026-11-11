import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  badge?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  breadcrumbs,
  badge
}) => {
  return (
    <div className="relative bg-[#0A1C2E] text-white py-14 sm:py-20 overflow-hidden border-b border-[#BD9141]/20">
      {/* Subtle Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(189, 145, 65, 0.4) 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: "32px 32px, 64px 64px"
        }}
      />

      {/* Decorative Gold Light Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#BD9141]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs text-slate-400">
            <li>
              <Link
                to="/"
                className="hover:text-[#BD9141] transition-colors flex items-center gap-1"
                aria-label="Home"
              >
                <Home className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            </li>
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-slate-600" />
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-[#BD9141] transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-[#BD9141] font-medium" aria-current="page">
                    {crumb.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#BD9141] mb-2">
            <span className="w-4 h-[1.5px] bg-[#BD9141]" />
            <span>{badge}</span>
          </div>
        )}

        {/* Title */}
        <h1
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-3xl"
          style={{ textWrap: "balance" }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-3.5 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
