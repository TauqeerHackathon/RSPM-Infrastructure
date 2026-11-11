import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Filter, ArrowRight, Building2, ShieldCheck, Phone, MessageSquare } from "lucide-react";
import {
  projectsData,
  projectCategories,
  projectStatuses,
  ProjectCategory,
  ProjectStatus
} from "../config/projects";
import { companyConfig } from "../config/company";
import { PageHero } from "../components/PageHero";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectsEmptyState } from "../components/ProjectsEmptyState";

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const activeCategoryObj = projectCategories.find((c) => c.id === selectedCategory);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((proj) => {
      const matchCat = selectedCategory === "all" || proj.category === selectedCategory;
      const matchStatus = selectedStatus === "all" || proj.status === selectedStatus;
      return matchCat && matchStatus;
    });
  }, [selectedCategory, selectedStatus]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Hero */}
      <PageHero
        title="Our Projects"
        subtitle="Explore our ongoing, completed, and upcoming residential, commercial, civil, and infrastructure developments across Maharashtra."
        badge="PROJECT PORTFOLIO"
        breadcrumbs={[{ name: "Projects" }]}
      />

      {/* FILTER & PORTFOLIO SECTION */}
      <section className="py-12 sm:py-16 bg-[#F8F7F4] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Tabs: Functional interactive buttons conforming to Frontend Design constitution */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mr-2 shrink-0 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-[#BD9141]" />
                <span>Sector:</span>
              </span>

              <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 shadow-xs">
                {projectCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                      selectedCategory === cat.id
                        ? "bg-[#0A1C2E] text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Status:</span>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white border border-slate-200 text-[#0A1C2E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD9141]"
              >
                {projectStatuses.map((st) => (
                  <option key={st.id} value={st.id}>
                    {st.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* PROJECT GRID OR ELEGANT BRANDED STATE */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <ProjectsEmptyState categoryName={activeCategoryObj?.label} />
          )}

        </div>
      </section>

      {/* PORTFOLIO INQUIRY INFORMATION */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A1C2E] text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#BD9141]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#BD9141] mb-2.5">
                <ShieldCheck className="w-4 h-4" />
                <span>DIRECT PROJECT COLLABORATION</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                Planning a Construction or Infrastructure Development?
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Whether you possess land parcels requiring site evaluation or seeking a reliable civil contracting partner for upcoming residential or commercial developments, our team is equipped to evaluate project feasibility and architectural schedules.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0A1C2E] bg-[#BD9141] hover:bg-[#D8B66A] rounded-md transition-colors"
                >
                  <span>Submit Project Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`${companyConfig.whatsappLink}?text=${encodeURIComponent(
                    "Hello RSPM Infrastructure, I would like to schedule a project consultation with your technical team."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Consultation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
