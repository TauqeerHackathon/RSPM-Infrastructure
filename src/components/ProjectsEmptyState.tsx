import React from "react";
import { Link } from "react-router-dom";
import { Building2, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import { companyConfig } from "../config/company";

interface ProjectsEmptyStateProps {
  categoryName?: string;
}

export const ProjectsEmptyState: React.FC<ProjectsEmptyStateProps> = ({ categoryName }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200/80 p-8 sm:p-14 text-center max-w-3xl mx-auto shadow-sm">
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-[#0A1C2E] text-[#BD9141] flex items-center justify-center mx-auto mb-6 shadow-md shadow-[#0A1C2E]/10">
        <Building2 className="w-8 h-8" />
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BD9141]/10 text-[#BD9141] text-xs font-semibold uppercase tracking-wider mb-3">
        <ShieldCheck className="w-3.5 h-3.5" />
        <span>RSPM Portfolio Notice</span>
      </div>

      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0A1C2E] mb-3">
        {categoryName && categoryName !== "All Projects"
          ? `${categoryName} Portfolio Updating Soon`
          : "Our Project Portfolio Will Be Updated Soon"}
      </h3>

      <p className="text-sm sm:text-base text-[#596675] leading-relaxed max-w-xl mx-auto mb-8">
        We are currently curating and compiling detailed project documentation, architectural renders, and site progress records for official publication. Connect with our team to learn more about our work, current capabilities, and upcoming developments.
      </p>

      {/* Action CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
        <Link
          to="/contact"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0A1C2E] bg-[#BD9141] hover:bg-[#D8B66A] rounded-md shadow-sm transition-colors"
        >
          <span>Discuss Your Project</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <a
          href={`${companyConfig.whatsappLink}?text=${encodeURIComponent(
            "Hello RSPM Infrastructure, I would like to enquire about your upcoming projects and construction capabilities."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#0A1C2E] hover:bg-[#102C46] rounded-md transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-[#25D366]" />
          <span>Connect via WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
