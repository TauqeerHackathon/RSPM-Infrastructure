import React from "react";
import {
  Phone,
  MessageSquare,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Building,
  Clock,
  Mail
} from "lucide-react";
import { companyConfig } from "../config/company";
import { PageHero } from "../components/PageHero";
import { ContactForm } from "../components/ContactForm";

export const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F7F4]">
      {/* Page Hero */}
      <PageHero
        title="Contact Our Team"
        subtitle="Get in touch with RSPM Infrastructure Private Limited for residential, commercial, civil construction, and infrastructure enquiries."
        badge="GET IN TOUCH"
        breadcrumbs={[{ name: "Contact Us" }]}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* LEFT COLUMN: Contact Details & Statutory Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Primary Contact Card */}
              <div className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#BD9141] mb-2">
                  <Building className="w-3.5 h-3.5" />
                  <span>Corporate Office Desk</span>
                </div>

                <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0A1C2E] mb-6">
                  {companyConfig.shortName}
                </h2>

                <div className="space-y-6">
                  
                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-md bg-[#0A1C2E] text-[#BD9141] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#0A1C2E]">
                        Primary Telephone Contact
                      </h4>
                      <a
                        href={`tel:${companyConfig.primaryPhone}`}
                        className="text-base sm:text-lg font-bold text-[#0A1C2E] hover:text-[#BD9141] transition-colors block mt-0.5"
                      >
                        {companyConfig.primaryPhoneDisplay}
                      </a>
                      <p className="text-[11px] text-slate-400 mt-0.5">Click-to-call direct from mobile or VoIP</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-md bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/20">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#0A1C2E]">
                        Official WhatsApp Business Desk
                      </h4>
                      <a
                        href={`${companyConfig.whatsappLink}?text=${encodeURIComponent(
                          companyConfig.prefilledWhatsAppMessage
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-[#25D366] hover:underline inline-flex items-center gap-1.5 mt-0.5"
                      >
                        <span>+91 90966 71425</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <p className="text-[11px] text-slate-400 mt-0.5">Instant messaging for project queries & blueprints</p>
                    </div>
                  </div>

                  {/* Registered Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-md bg-[#0A1C2E] text-[#BD9141] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#0A1C2E]">
                        Registered Corporate Office
                      </h4>
                      <address className="not-italic text-xs sm:text-sm text-[#596675] leading-relaxed mt-1">
                        {companyConfig.registeredOffice.fullFormatted}
                      </address>
                      <a
                        href={companyConfig.googleMapsQueryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#BD9141] font-semibold hover:underline mt-2.5"
                      >
                        <span>Open Registered Location in Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Official Email: Only if configured */}
                  {companyConfig.officialEmail && (
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-md bg-[#0A1C2E] text-[#BD9141] flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#0A1C2E]">
                          Official Email
                        </h4>
                        <a
                          href={`mailto:${companyConfig.officialEmail}`}
                          className="text-sm font-semibold text-[#0A1C2E] hover:text-[#BD9141] transition-colors"
                        >
                          {companyConfig.officialEmail}
                        </a>
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Working Hours & Statutory Details Card */}
              <div className="bg-[#0A1C2E] text-white rounded-xl p-6 sm:p-7 border border-white/10 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs text-[#BD9141] font-semibold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Statutory Corporate Information</span>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <p className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-slate-400">Company Name:</span>
                    <span className="font-medium text-white text-right">{companyConfig.legalName}</span>
                  </p>
                  <p className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-slate-400">CIN:</span>
                    <span className="font-mono text-white text-right">{companyConfig.cin}</span>
                  </p>
                  <p className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-slate-400">RoC Office:</span>
                    <span className="text-white text-right">{companyConfig.roc}</span>
                  </p>
                  <p className="flex justify-between pb-1">
                    <span className="text-slate-400">Registration No:</span>
                    <span className="font-mono text-white text-right">{companyConfig.registrationNumber}</span>
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-start gap-2 text-[11px] text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-[#BD9141] shrink-0 mt-0.5" />
                  <span>Business Hours: Monday – Saturday, 9:30 AM to 6:30 PM IST.</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
