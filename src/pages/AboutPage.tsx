import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Building,
  Target,
  Compass,
  CheckCircle2,
  Users,
  FileText,
  MapPin,
  Calendar,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { companyConfig } from "../config/company";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { SafeImage } from "../components/SafeImage";

export const AboutPage: React.FC = () => {
  const coreValues = [
    {
      title: "Integrity",
      desc: "Upholding uncompromising ethical standards, transparent contractual terms, and honesty in all stakeholder relationships."
    },
    {
      title: "Quality",
      desc: "Dedication to standard construction practices, verified material specifications, and quality-conscious workmanship."
    },
    {
      title: "Accountability",
      desc: "Taking active ownership of project milestones, site safety requirements, and milestone commitments."
    },
    {
      title: "Collaboration",
      desc: "Working in close, respectful alignment with clients, architects, regulatory advisors, and specialized trades."
    },
    {
      title: "Continuous Improvement",
      desc: "Embracing modern construction methodologies, proactive site coordination techniques, and safety protocols."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Hero */}
      <PageHero
        title="About RSPM Infrastructure"
        subtitle="A corporate construction and civil engineering enterprise dedicated to structural durability, responsible planning, and collaborative development across Maharashtra."
        badge="WHO WE ARE"
        breadcrumbs={[{ name: "About Us" }]}
      />

      {/* SECTION 1: COMPANY OVERVIEW */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#BD9141] mb-2.5">
                <span className="w-4 h-[1.5px] bg-[#BD9141]" />
                <span>OUR BACKGROUND</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1C2E] leading-tight mb-6">
                Dedicated to Structural Integrity and Measured Growth
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#596675] leading-relaxed">
                <p>
                  <strong>RSPM Infrastructure Private Limited</strong> is an Indian corporate enterprise incorporated under the Companies Act and registered with the Registrar of Companies (RoC Mumbai). Headquartered in Vasai, Thane, Maharashtra, the enterprise is structured to provide residential construction, commercial structures, infrastructure development, and civil contracting services.
                </p>
                <p>
                  Built upon the foundational ethos of <em>"Building Tomorrow, Together,"</em> our company unites sound construction principles with attentive project coordination. We recognize that enduring structures are the outcome of thorough ground preparation, disciplined structural engineering, and honest communication with clients and partners.
                </p>
                <p>
                  Our planned operational scope encompasses residential developments, commercial workspaces, and regional civil infrastructure, prioritizing structural durability, safety, and long-term client value.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-6 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#BD9141]" />
                  <span>CIN: {companyConfig.cin}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#BD9141]" />
                  <span>Registered in Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl aspect-[4/3] bg-slate-100 border border-slate-200">
                <SafeImage
                  src="/assets/images/civil_construction.jpg"
                  alt="Architectural planning and structural engineering"
                  className="w-full h-full object-cover"
                  fallbackTitle="Civil Engineering & Infrastructure Planning"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-[#0A1C2E] text-white p-5 rounded-lg border border-white/10 shadow-lg max-w-xs">
                <p className="text-xs uppercase tracking-wider text-[#BD9141] font-semibold">Corporate Motto</p>
                <p className="font-heading font-bold text-sm sm:text-base mt-1 text-white">
                  "{companyConfig.tagline}"
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: VISION & MISSION */}
      <section className="py-16 sm:py-24 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="PURPOSE & DIRECTION"
            title="Vision & Mission"
            subtitle="Guiding our operational standards, project execution, and client relationships."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Vision Card */}
            <div className="bg-white p-8 sm:p-10 rounded-xl border border-slate-200 shadow-sm relative flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-[#0A1C2E] text-[#BD9141] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>

              <h3 className="font-heading text-xl font-bold text-[#0A1C2E] mb-3">
                Our Vision
              </h3>

              <blockquote className="text-base sm:text-lg font-medium text-[#102C46] leading-relaxed italic border-l-2 border-[#BD9141] pl-4 py-1 flex-1">
                "To contribute to thoughtfully planned, durable and responsible built environments."
              </blockquote>

              <p className="mt-4 text-xs sm:text-sm text-[#596675] leading-relaxed">
                Aiming to shape human spaces and community infrastructures that stand resilient across decades through measured architectural care.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 sm:p-10 rounded-xl border border-slate-200 shadow-sm relative flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-[#0A1C2E] text-[#BD9141] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>

              <h3 className="font-heading text-xl font-bold text-[#0A1C2E] mb-3">
                Our Mission
              </h3>

              <blockquote className="text-base sm:text-lg font-medium text-[#102C46] leading-relaxed italic border-l-2 border-[#BD9141] pl-4 py-1 flex-1">
                "To approach construction and infrastructure work through careful planning, quality-conscious execution and collaborative relationships."
              </blockquote>

              <p className="mt-4 text-xs sm:text-sm text-[#596675] leading-relaxed">
                Translating client requirements into high-value tangible assets while maintaining transparent milestone coordination at every step.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: CORE VALUES */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="FOUNDATIONAL PILLARS"
            title="Our Core Values"
            subtitle="The five principles that define how we build, how we operate, and how we coordinate with every client."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#F8F7F4] p-6 sm:p-8 rounded-lg border border-slate-200/80 hover:border-[#BD9141]/40 transition-colors flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-[#BD9141]" />
                  <h3 className="font-heading font-bold text-lg text-[#0A1C2E]">
                    {val.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#596675] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: LEADERSHIP */}
      <section className="py-16 sm:py-24 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="BOARD OF DIRECTORS"
            title="Corporate Leadership"
            subtitle="Guided by our founding directors with a commitment to responsible governance and professional construction delivery."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {companyConfig.directors.map((director, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm flex flex-col items-center text-center"
              >
                {/* Elegant Initials Silhouette Frame per instructions */}
                <div className="w-24 h-24 rounded-full bg-[#0A1C2E] text-[#BD9141] font-heading font-bold text-2xl flex items-center justify-center mb-5 border-2 border-[#BD9141]/40 shadow-inner">
                  {director.initials}
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#BD9141] font-semibold mb-1">
                  <span>{director.role}</span>
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-[#0A1C2E] mb-2">
                  {director.name}
                </h3>

                <p className="text-xs text-[#596675] leading-relaxed">
                  {companyConfig.legalName}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 mt-8 max-w-md mx-auto">
            Corporate appointments registered with the Ministry of Corporate Affairs, RoC Mumbai.
          </p>
        </div>
      </section>

      {/* SECTION 5: CORPORATE INFORMATION TABLE */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="STATUTORY PARTICULARS"
            title="Corporate & Legal Registration"
            subtitle="Official corporate registration details for statutory compliance and client verification."
            align="center"
          />

          <div className="bg-[#F8F7F4] rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <dl className="divide-y divide-slate-200/90 text-sm">
              <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4 bg-white">
                <dt className="font-semibold text-[#0A1C2E]">Company Name</dt>
                <dd className="mt-1 text-[#596675] sm:col-span-2 sm:mt-0 font-medium">
                  {companyConfig.legalName}
                </dd>
              </div>

              <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-semibold text-[#0A1C2E]">Corporate Identification Number (CIN)</dt>
                <dd className="mt-1 sm:col-span-2 sm:mt-0 font-mono text-[#0A1C2E] font-medium">
                  {companyConfig.cin}
                </dd>
              </div>

              <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4 bg-white">
                <dt className="font-semibold text-[#0A1C2E]">Registration Number</dt>
                <dd className="mt-1 text-[#596675] sm:col-span-2 sm:mt-0 font-mono">
                  {companyConfig.registrationNumber}
                </dd>
              </div>

              <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-semibold text-[#0A1C2E]">Incorporation Date</dt>
                <dd className="mt-1 text-[#596675] sm:col-span-2 sm:mt-0">
                  {companyConfig.incorporationDate}
                </dd>
              </div>

              <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4 bg-white">
                <dt className="font-semibold text-[#0A1C2E]">Company Category & Status</dt>
                <dd className="mt-1 text-[#596675] sm:col-span-2 sm:mt-0 flex items-center gap-2">
                  <span>{companyConfig.companyType}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-emerald-700 font-semibold">{companyConfig.companyStatus}</span>
                </dd>
              </div>

              <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-semibold text-[#0A1C2E]">Registrar of Companies</dt>
                <dd className="mt-1 text-[#596675] sm:col-span-2 sm:mt-0">
                  {companyConfig.roc}
                </dd>
              </div>

              <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4 bg-white">
                <dt className="font-semibold text-[#0A1C2E]">Registered Office Address</dt>
                <dd className="mt-1 text-[#596675] sm:col-span-2 sm:mt-0 leading-relaxed">
                  {companyConfig.registeredOffice.fullFormatted}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0A1C2E] bg-[#BD9141] hover:bg-[#D8B66A] rounded-md shadow-sm transition-colors"
            >
              <span>Connect with Our Leadership</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
