import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MessageSquare, Send, CheckCircle2, AlertCircle, Shield } from "lucide-react";
import { companyConfig } from "../config/company";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const requestedServiceParam = searchParams.get("service");

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    service: requestedServiceParam || "Residential Construction",
    location: "",
    message: ""
  });

  useEffect(() => {
    if (requestedServiceParam) {
      setFormData((prev) => ({ ...prev, service: requestedServiceParam }));
    }
  }, [requestedServiceParam]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedWhatsApp, setSubmittedWhatsApp] = useState(false);

  const servicesOptions = [
    "Residential Construction",
    "Commercial Construction",
    "Infrastructure Development",
    "Civil Construction",
    "Renovation / Redevelopment",
    "Other Enquiry"
  ];

  // Validate form fields
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters.";
    }

    // Indian phone number regex: supports optional +91 and 10 digits starting with 6, 7, 8, or 9
    const cleanPhone = formData.phone.replace(/[\s-]/g, "");
    const indianPhoneRegex = /^(\+91)?[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!indianPhoneRegex.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number (e.g., 9096671425).";
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.service) {
      newErrors.service = "Please select a service category.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe your project requirement or message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide at least 10 characters detailing your requirement.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build URL-encoded WhatsApp message with structured fields
    const formattedMessage =
      `*New Corporate Enquiry - RSPM Infrastructure*\n\n` +
      `*Client Name:* ${formData.fullName.trim()}\n` +
      `*Contact Phone:* ${formData.phone.trim()}\n` +
      (formData.email.trim() ? `*Email:* ${formData.email.trim()}\n` : "") +
      `*Service Required:* ${formData.service}\n` +
      (formData.location.trim() ? `*Project Location:* ${formData.location.trim()}\n` : "") +
      `\n*Project Requirement / Message:*\n${formData.message.trim()}\n\n` +
      `_Sent via official website enquiry desk._`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `${companyConfig.whatsappLink}?text=${encodedText}`;

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmittedWhatsApp(true);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6 sm:p-9">
      <div className="mb-6">
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0A1C2E]">
          Send a Project Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-[#596675] mt-1.5">
          Fill in your project requirements below. Your message will be formatted and routed directly to our business desk on WhatsApp.
        </p>
      </div>

      {submittedWhatsApp && (
        <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">WhatsApp Message Window Opened</p>
            <p className="text-emerald-700 mt-0.5 text-xs">
              Your enquiry has been formatted and opened in WhatsApp. Please tap "Send" in WhatsApp to deliver your message to RSPM Infrastructure (+91 90966 71425).
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleWhatsAppSubmit} className="space-y-4 sm:space-y-5" noValidate>
        {/* Full Name & Phone Number Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold text-[#0A1C2E] uppercase tracking-wider mb-1.5">
              Full Name <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Ramesh Patel"
              className={`w-full px-3.5 py-2.5 text-sm rounded-md border transition-colors focus-visible:outline-none focus-visible:ring-2 ${
                errors.fullName
                  ? "border-rose-400 bg-rose-50/30 focus-visible:ring-rose-500"
                  : "border-slate-300 focus-visible:border-[#BD9141] focus-visible:ring-[#BD9141]"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-[#0A1C2E] uppercase tracking-wider mb-1.5">
              Phone Number <span className="text-rose-600">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 90966 71425"
              className={`w-full px-3.5 py-2.5 text-sm rounded-md border transition-colors focus-visible:outline-none focus-visible:ring-2 ${
                errors.phone
                  ? "border-rose-400 bg-rose-50/30 focus-visible:ring-rose-500"
                  : "border-slate-300 focus-visible:border-[#BD9141] focus-visible:ring-[#BD9141]"
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* Email & Service Required Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-[#0A1C2E] uppercase tracking-wider mb-1.5">
              Email Address <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. name@company.com"
              className={`w-full px-3.5 py-2.5 text-sm rounded-md border transition-colors focus-visible:outline-none focus-visible:ring-2 ${
                errors.email
                  ? "border-rose-400 bg-rose-50/30 focus-visible:ring-rose-500"
                  : "border-slate-300 focus-visible:border-[#BD9141] focus-visible:ring-[#BD9141]"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Service Required */}
          <div>
            <label htmlFor="service" className="block text-xs font-semibold text-[#0A1C2E] uppercase tracking-wider mb-1.5">
              Service Category <span className="text-rose-600">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm rounded-md border border-slate-300 focus-visible:outline-none focus-visible:border-[#BD9141] focus-visible:ring-2 focus-visible:ring-[#BD9141] bg-white text-[#0A1C2E]"
            >
              {servicesOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Project Location */}
        <div>
          <label htmlFor="location" className="block text-xs font-semibold text-[#0A1C2E] uppercase tracking-wider mb-1.5">
            Project Location / City <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Vasai, Thane, Mumbai Suburban, or other"
            className="w-full px-3.5 py-2.5 text-sm rounded-md border border-slate-300 focus-visible:outline-none focus-visible:border-[#BD9141] focus-visible:ring-2 focus-visible:ring-[#BD9141]"
          />
        </div>

        {/* Message / Requirement */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-[#0A1C2E] uppercase tracking-wider mb-1.5">
            Message / Project Requirement <span className="text-rose-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please share details such as project scope, plot size, approximate built-up area, proposed timeline, or specific requirements..."
            className={`w-full px-3.5 py-2.5 text-sm rounded-md border transition-colors focus-visible:outline-none focus-visible:ring-2 resize-y ${
              errors.message
                ? "border-rose-400 bg-rose-50/30 focus-visible:ring-rose-500"
                : "border-slate-300 focus-visible:border-[#BD9141] focus-visible:ring-[#BD9141]"
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Form Transparency Notice */}
        <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-md text-[11px] text-[#596675] flex items-start gap-2 leading-relaxed">
          <Shield className="w-4 h-4 text-[#BD9141] shrink-0 mt-0.5" />
          <span>
            <strong>Transparency Notice:</strong> Submitting this form compiles your details into an official message directed to RSPM Infrastructure's authorized WhatsApp business desk (+91 90966 71425). We do not silently store your private information in unverified external servers.
          </span>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#0A1C2E] hover:bg-[#102C46] rounded-md shadow-md hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#BD9141]"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>Submit Enquiry via WhatsApp</span>
            <Send className="w-3.5 h-3.5 ml-1 text-[#BD9141]" />
          </button>
        </div>
      </form>
    </div>
  );
};
