import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  HardHat,
  Home,
  Layers,
  CheckCircle2,
  Phone,
  MessageSquare,
  MapPin,
  ExternalLink,
  Compass,
  FileText,
  Clock,
  Award
} from "lucide-react";
import { companyConfig } from "../config/company";
import { servicesData } from "../config/services";
import { projectsData } from "../config/projects";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceCard } from "../components/ServiceCard";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectsEmptyState } from "../components/ProjectsEmptyState";
import { SafeImage } from "../components/SafeImage";

export const HomePage: React.FC = () => {
  const approachFeatures = [
    {
      title: "Thoughtful Planning",
      desc: "Every development begins with detailed site assessment, engineering feasibility, and meticulous architectural alignment.",
      icon: Compass
    },
    {
      title: "Quality-Focused Execution",
      desc: "Strict adherence to construction standards, recommended building specifications, and diligent on-site coordination.",
      icon: Award
    },
    {
      title: "Clear Communication",
      desc: "Transparent coordination between stakeholders, contractors, and clients throughout every milestone of execution.",
      icon: FileText
    },
    {
      title: "Long-Term Value",
      desc: "Building enduring assets with high structural longevity, low maintenance requirements, and responsible craftsmanship.",
      icon: Clock
    }
  ];

  const sectors = [
    {
      title: "Residential Development",
      desc: "Modern multi-storey residences, gated residential layouts, and custom private residences.",
      image: "/assets/images/residential.jpg",
      link: "/services#residential-construction"
    },
    {
      title: "Commercial Workspaces",
      desc: "Office parks, corporate facilities, retail showrooms, and multi-tenant commercial structures.",
      image: "/assets/images/commercial.jpg",
      link: "/services#commercial-construction"
    },
    {
      title: "Civil Infrastructure",
      desc: "Paved regional accessways, stormwater drainage, site servicing, and structural civil networks.",
      image: "/assets/images/infrastructure.jpg",
      link: "/services#infrastructure-development"
    },
    {
      title: "Structural Engineering",
      desc: "Heavy RCC frames, deep piling foundations, structural steel, and specialized site works.",
      image: "/assets/images/structural.jpg",
      link: "/services#civil-construction"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      desc: "We discuss your project vision, site conditions, zoning parameters, and programmatic requirements."
    },
    {
      step: "02",
      title: "Project Planning",
      desc: "Developing structural blueprints, material specifications, realistic milestone timelines, and budget frameworks."
    },
    {
      step: "03",
      title: "Construction & Coordination",
      desc: "Disciplined ground execution, vendor orchestration, material quality inspections, and regular progress reviews."
    },
    {
      step: "04",
      title: "Review & Handover",
      desc: "Comprehensive quality checks, structural testing sign-offs, punch-list resolutions, and formal project handover."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* SECTION 1: HERO BANNER */}
      <section className="relative flex items-center justify-center bg-[#0A1C2E] text-white overflow-hidden">
        {/* Background Architectural Image */}
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="/assets/images/hero_architecture.jpg"
            alt="Modern architectural infrastructure"
            className="w-full h-full object-cover object-center scale-105"
            containerClassName="w-full h-full"
          />
          {/* Deep Navy Gradient Scrim Overlay for optimal legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1C2E]/95 via-[#0A1C2E]/85 to-[#0A1C2E]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C2E] via-transparent to-[#0A1C2E]/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 lg:pt-18 pb-12 sm:pb-16 lg:pb-20 w-full">
          <div className="max-w-3xl">
            {/* Tagline / Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#BD9141] mb-4 sm:mb-5 max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#BD9141] shrink-0" />
              <span className="leading-snug break-words">{companyConfig.tagline}</span>
            </div>

            {/* Main Headline with clamp and improved line breaks */}
            <h1
              className="font-heading font-extrabold tracking-tight text-white leading-[1.18] sm:leading-[1.16] mb-3.5 sm:mb-5"
              style={{
                fontSize: "clamp(1.95rem, 5.2vw + 0.65rem, 2.85rem)",
                textWrap: "balance"
              }}
            >
              Building Strong Foundations.{" "}
              <span className="text-[#BD9141] block mt-1 sm:mt-1.5">
                Creating a Better Tomorrow.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200/95 leading-relaxed mb-5 sm:mb-7 max-w-2xl">
              RSPM Infrastructure Private Limited brings a dedicated approach to construction, infrastructure and development, with a focus on quality, planning and long-term value.
            </p>

            {/* CTA Buttons - stacked full-width on mobile, auto width on tablet/desktop */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0A1C2E] bg-[#BD9141] hover:bg-[#D8B66A] rounded-md shadow-lg shadow-[#BD9141]/20 transition-all hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#BD9141]"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-md backdrop-blur-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Contact Our Team</span>
              </Link>
            </div>

            {/* Trust Markers Bar */}
            <div className="mt-6 sm:mt-10 pt-5 sm:pt-7 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-10 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#BD9141] shrink-0" />
                <span>Incorporated under Companies Act (RoC Mumbai)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#BD9141] shrink-0" />
                <span>Maharashtra – 401208, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COMPANY INTRODUCTION */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: Introduction Copy */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#BD9141] mb-2.5">
                <span className="w-4 h-[1.5px] bg-[#BD9141]" />
                <span>WHO WE ARE</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1C2E] leading-tight mb-5">
                Committed to Building with Purpose
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#596675] leading-relaxed">
                <p>
                  RSPM Infrastructure Private Limited is a Maharashtra-based corporate enterprise operating in the construction, civil works, and infrastructure development sector. Headquartered in Vasai, Thane, the company was established with an unwavering commitment to responsible planning, engineering discipline, and structural excellence.
                </p>
                <p>
                  Whether approaching residential developments, commercial workspaces, or fundamental civil works, we emphasize disciplined technical coordination, industry-standard construction practices, and transparent client communication.
                </p>
              </div>

              {/* Key Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                <div className="p-4 rounded-lg bg-[#F8F7F4] border border-slate-200/70">
                  <h4 className="font-heading font-semibold text-sm text-[#0A1C2E] mb-1">
                    Quality-Conscious
                  </h4>
                  <p className="text-xs text-[#596675]">
                    Adhering strictly to construction specifications and material durability benchmarks.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#F8F7F4] border border-slate-200/70">
                  <h4 className="font-heading font-semibold text-sm text-[#0A1C2E] mb-1">
                    Responsible Planning
                  </h4>
                  <p className="text-xs text-[#596675]">
                    Structured milestones, safety-first job sites, and predictable project coordination.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#BD9141] hover:text-[#9c732c] group"
                >
                  <span>Learn More About RSPM Infrastructure</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: Architectural Illustrative Visual */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[16/11] bg-slate-100 border border-slate-200">
                <SafeImage
                  src="/assets/images/who_we_are_civil.jpg"
                  alt="Construction engineering and structural works"
                  className="w-full h-full object-cover"
                  fallbackTitle="Construction Engineering & Structural Works"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C2E]/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-[#0A1C2E]/90 text-white backdrop-blur-sm border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-[#BD9141] uppercase tracking-wider">Corporate Identity</p>
                      <p className="font-heading font-bold text-sm text-white">{companyConfig.legalName}</p>
                    </div>
                    <span className="text-[11px] font-mono text-slate-300">RoC Mumbai</span>
                  </div>
                </div>
              </div>

              {/* Subtle gold accent frame */}
              <div className="hidden sm:block absolute -bottom-3 -right-3 w-40 h-40 border-2 border-[#BD9141]/30 rounded-xl -z-10" />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: CORE SERVICES */}
      <section className="py-16 sm:py-24 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="WHAT WE DO"
            title="Construction & Infrastructure Solutions"
            subtitle="Providing comprehensive residential, commercial, civil, and development services built upon precision engineering and thorough project coordination."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#0A1C2E] hover:bg-[#102C46] rounded-md transition-colors"
            >
              <span>View All Detailed Services</span>
              <ArrowRight className="w-4 h-4 text-[#BD9141]" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR APPROACH */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="OUR VALUES & PHILOSOPHY"
            title="Built on Trust. Driven by Quality."
            subtitle="Our working methodology is founded on sound engineering practices, safety-first protocols, and transparent accountability."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {approachFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-lg bg-[#F8F7F4] border border-slate-200/70 hover:border-[#BD9141]/40 transition-colors flex flex-col"
                >
                  <div className="w-10 h-10 rounded-md bg-[#0A1C2E] text-[#BD9141] flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#0A1C2E] mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#596675] leading-relaxed flex-1">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: CONSTRUCTION SECTORS */}
      <section className="py-16 sm:py-24 bg-[#0A1C2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="DIVERSE EXPERTISE"
            title="Building Across Multiple Sectors"
            subtitle="From vibrant housing complexes to fundamental infrastructure works, we apply disciplined project coordination across key sectors."
            align="center"
            theme="dark"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sec, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#06121E] flex flex-col h-full hover:border-[#BD9141]/50 transition-all duration-300"
              >
                {/* Sector Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                  <SafeImage
                    src={sec.image}
                    alt={sec.title}
                    fallbackTitle={sec.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06121E] via-[#06121E]/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-base text-white group-hover:text-[#BD9141] transition-colors mb-2">
                    {sec.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed flex-1 mb-4">
                    {sec.desc}
                  </p>
                  <Link
                    to={sec.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#BD9141] hover:text-white transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FEATURED PROJECTS */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="PORTFOLIO"
            title="Our Projects"
            subtitle="Showcasing our development approach and execution capabilities across residential, commercial, and civil disciplines."
            align="center"
          />

          {projectsData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projectsData.slice(0, 3).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            /* Master prompt required branded state when project data is awaiting client verification */
            <ProjectsEmptyState />
          )}
        </div>
      </section>

      {/* SECTION 7: WORK PROCESS */}
      <section className="py-16 sm:py-24 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="METHODOLOGY"
            title="From Vision to Execution"
            subtitle="An illustrative overview of how we guide construction and civil infrastructure requirements from initial assessment to milestone delivery."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200/80 shadow-sm relative flex flex-col"
              >
                {/* Step Number in Gold */}
                <div className="font-heading text-2xl font-extrabold text-[#BD9141] mb-3">
                  {step.step}
                </div>
                <h3 className="font-heading font-bold text-base text-[#0A1C2E] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#596675] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: ENQUIRY CALL-TO-ACTION */}
      <section className="py-16 sm:py-20 bg-[#0A1C2E] text-white relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#BD9141]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#BD9141] mb-3">
            <span className="w-4 h-[1.5px] bg-[#BD9141]" />
            <span>START A CONVERSATION</span>
            <span className="w-4 h-[1.5px] bg-[#BD9141]" />
          </div>

          <h2
            className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4"
            style={{ textWrap: "balance" }}
          >
            Have a Construction Project in Mind?
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Let's discuss your residential, commercial or infrastructure requirements. Our engineering and project coordination team is ready to evaluate your plans.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0A1C2E] bg-[#BD9141] hover:bg-[#D8B66A] rounded-md shadow-md transition-colors"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`${companyConfig.whatsappLink}?text=${encodeURIComponent(companyConfig.prefilledWhatsAppMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-md transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Our Team</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 9: CONTACT PREVIEW */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8F7F4] rounded-2xl border border-slate-200 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-md bg-[#0A1C2E] text-[#BD9141] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#0A1C2E] mb-1">
                    Registered Office
                  </h4>
                  <p className="text-xs sm:text-sm text-[#596675] leading-relaxed">
                    {companyConfig.registeredOffice.fullFormatted}
                  </p>
                  <a
                    href={companyConfig.googleMapsQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#BD9141] hover:underline mt-2 font-medium"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-md bg-[#0A1C2E] text-[#BD9141] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#0A1C2E] mb-1">
                    Direct Phone Support
                  </h4>
                  <p className="text-xs text-[#596675] mb-1">
                    Primary authorized business contact:
                  </p>
                  <a
                    href={`tel:${companyConfig.primaryPhone}`}
                    className="text-base font-bold text-[#0A1C2E] hover:text-[#BD9141] transition-colors"
                  >
                    {companyConfig.primaryPhoneDisplay}
                  </a>
                  <p className="text-[11px] text-slate-400 mt-1">Available Mon – Sat during standard working hours</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0A1C2E] bg-[#BD9141] hover:bg-[#D8B66A] rounded-md shadow-sm transition-colors text-center"
                >
                  <span>Submit an Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <p className="text-center text-[11px] text-slate-500">
                  Quick response guaranteed from our civil & project coordination desk.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
