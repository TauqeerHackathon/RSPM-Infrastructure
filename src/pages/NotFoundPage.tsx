import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Building2 } from "lucide-react";
import { PageHero } from "../components/PageHero";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHero
        title="404 — Page Not Found"
        subtitle="The page you are looking for may have been moved, renamed, or does not exist."
        badge="ERROR 404"
        breadcrumbs={[{ name: "Page Not Found" }]}
      />

      <section className="py-20 sm:py-28 text-center bg-[#F8F7F4]">
        <div className="max-w-xl mx-auto px-4">
          <div className="w-16 h-16 rounded-2xl bg-[#0A1C2E] text-[#BD9141] flex items-center justify-center mx-auto mb-6 shadow-md">
            <Building2 className="w-8 h-8" />
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0A1C2E] mb-3">
            Lost Your Way on Site?
          </h2>

          <p className="text-sm text-[#596675] mb-8 leading-relaxed">
            We couldn't locate the requested page address. Please return to the homepage or explore our main construction and infrastructure service categories.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0A1C2E] bg-[#BD9141] hover:bg-[#D8B66A] rounded-md shadow-xs transition-colors w-full sm:w-auto"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#0A1C2E] hover:bg-[#102C46] rounded-md transition-colors w-full sm:w-auto"
            >
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
