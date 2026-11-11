import React from "react";
import { MapPin, Calendar, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { ProjectItem } from "../config/projects";
import { SafeImage } from "./SafeImage";

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />;
      case "ongoing":
        return <Clock className="w-3.5 h-3.5 text-amber-600" />;
      case "upcoming":
        return <Sparkles className="w-3.5 h-3.5 text-sky-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden group hover:shadow-md hover:border-[#BD9141]/40 transition-all duration-300">
      {/* Cover Image Container with fallback */}
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
        <SafeImage
          src={project.coverImage}
          alt={project.name}
          fallbackTitle={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Status & Category unboxed metadata header */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 text-[11px] font-semibold bg-[#0A1C2E]/90 text-white rounded backdrop-blur-sm">
            {project.categoryDisplay}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold bg-white/95 text-slate-800 rounded shadow-sm backdrop-blur-sm">
            {getStatusIcon(project.status)}
            <span>{project.statusDisplay}</span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 text-xs text-[#BD9141] font-medium mb-1.5">
          <MapPin className="w-3.5 h-3.5" />
          <span>{project.city}, {project.state}</span>
        </div>

        <h3 className="font-heading text-lg font-bold text-[#0A1C2E] group-hover:text-[#BD9141] transition-colors mb-2">
          {project.name}
        </h3>

        <p className="text-xs sm:text-sm text-[#596675] leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Highlights / Optional fields */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mb-4 space-y-1 text-xs text-slate-600">
            {project.highlights.slice(0, 2).map((hl, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BD9141]" />
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Bottom Metadata */}
        <div className="pt-3 border-t border-slate-100 mt-auto flex items-center justify-between text-[11px] text-slate-400">
          {project.completionDate && (
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#BD9141]" />
              <span>{project.completionDate}</span>
            </span>
          )}
          {project.reraRegistration && (
            <span className="font-mono">RERA: {project.reraRegistration}</span>
          )}
        </div>
      </div>
    </div>
  );
};
