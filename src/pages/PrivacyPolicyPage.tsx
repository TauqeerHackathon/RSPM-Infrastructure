import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { companyConfig } from "../config/company";
import { PageHero } from "../components/PageHero";

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Hero */}
      <PageHero
        title="Privacy Policy"
        subtitle="Transparent disclosures regarding how RSPM Infrastructure Private Limited processes client enquiries, communication data, and website interactions."
        badge="LEGAL & TRANSPARENCY"
        breadcrumbs={[{ name: "Privacy Policy" }]}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="prose prose-slate max-w-none text-sm sm:text-base text-[#596675] leading-relaxed space-y-8">
            
            {/* Effective Date & Entity */}
            <div className="p-4 rounded-lg bg-[#F8F7F4] border border-slate-200 text-xs text-slate-600">
              <p><strong>Entity:</strong> {companyConfig.legalName} (CIN: {companyConfig.cin})</p>
              <p><strong>Registered Address:</strong> {companyConfig.registeredOffice.fullFormatted}</p>
              <p><strong>Effective Date:</strong> Current Operating Version, 2026</p>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0A1C2E] mb-3">
                1. Overview & Commitment to Transparency
              </h2>
              <p>
                RSPM Infrastructure Private Limited ("RSPM", "we", "our", or "us") respects your privacy. This policy outlines how information submitted through our official website is handled. We believe in clear, unembellished disclosures without hidden tracking routines.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0A1C2E] mb-3">
                2. Information Collected Through Website Enquiries
              </h2>
              <p>
                When you initiate contact or submit an enquiry through our contact forms or direct telephone/WhatsApp links, you voluntarily provide the following particulars:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-sm">
                <li><strong>Full Name:</strong> To identify who we are addressing in project correspondence.</li>
                <li><strong>Phone Number:</strong> To contact you directly regarding your construction requirements or to reply on WhatsApp.</li>
                <li><strong>Email Address (Optional):</strong> If provided, to send formal estimates, technical drawings, or corporate communications.</li>
                <li><strong>Project Location & Service Required:</strong> To evaluate site feasibility, municipal jurisdictions, and architectural scope.</li>
                <li><strong>Project Requirement Details:</strong> Specific messages, site dimensions, or scopes described by you.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0A1C2E] mb-3">
                3. Purpose of Processing
              </h2>
              <p>
                Your details are utilized strictly for genuine business and operational purposes:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-sm">
                <li>Evaluating prospective construction, infrastructure, or renovation projects.</li>
                <li>Scheduling preliminary telephone or in-person technical consultations.</li>
                <li>Responding to inquiries submitted via WhatsApp or telephone calls.</li>
                <li>Maintaining standard business records of prospective commercial engagements.</li>
              </ul>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 italic">
                We do not sell, rent, commercialize, or lease customer contact information to third-party marketing brokers or advertising networks.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0A1C2E] mb-3">
                4. Third-Party Messaging Services (WhatsApp / Meta)
              </h2>
              <p>
                Our website provides a direct integration option to format and send project enquiries via WhatsApp (a service operated by Meta Platforms, Inc.). When you click to send your enquiry via WhatsApp, your browser or device opens the WhatsApp application or web portal.
              </p>
              <p className="mt-2">
                Communications transmitted through WhatsApp are subject to WhatsApp's standard terms of service and privacy policies.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0A1C2E] mb-3">
                5. Cookies & Analytical Telemetry
              </h2>
              <p>
                This website is built with clean static delivery principles. We do not deploy invasive advertising cookies, behavioral tracking pixels, or third-party profiling scripts on this website. Standard web server logs may record basic diagnostic technical data (such as IP addresses and browser user-agents) solely to ensure network stability and server availability.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0A1C2E] mb-3">
                6. Contact for Privacy & Data Inquiries
              </h2>
              <p>
                If you have questions regarding the information you have submitted or wish to request the update or deletion of your communication records, please reach out to our registered office:
              </p>
              <div className="mt-3 p-4 rounded-lg bg-[#F8F7F4] border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
                <p><strong>{companyConfig.legalName}</strong></p>
                <p>Attention: Corporate Inquiries Desk</p>
                <p>{companyConfig.registeredOffice.fullFormatted}</p>
                <p>Phone: {companyConfig.primaryPhoneDisplay}</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#BD9141] hover:text-[#9c732c]"
              >
                <span>Return to Contact Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
