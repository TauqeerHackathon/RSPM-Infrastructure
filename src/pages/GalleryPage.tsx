import React, { useState, useMemo } from "react";
import { Filter, Info, Eye, Image as ImageIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  galleryImagesData,
  galleryCategories,
  GalleryCategory,
  GalleryImage
} from "../config/gallery";
import { PageHero } from "../components/PageHero";
import { GalleryLightbox } from "../components/GalleryLightbox";
import { SafeImage } from "../components/SafeImage";

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (selectedCategory === "all") return galleryImagesData;
    return galleryImagesData.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  const activeImage = activeImageIndex !== null ? filteredImages[activeImageIndex] : null;

  const handleNext = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev! + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Hero */}
      <PageHero
        title="Visual Showcase & Gallery"
        subtitle="Explore architectural photography, civil structures, and representative construction engineering concepts."
        badge="PORTFOLIO GALLERY"
        breadcrumbs={[{ name: "Gallery" }]}
      />

      {/* DISCLOSURE & FILTER BAR */}
      <section className="py-8 bg-[#F8F7F4] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Transparency banner as required by master prompt */}
          <div className="mb-6 p-4 rounded-lg bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs sm:text-sm flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#BD9141] shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <span className="font-semibold text-amber-950">Transparency Note:</span>{" "}
              The visual assets displayed below are representative architectural and construction illustrations demonstrating structural categories. Authentic photographs from RSPM project sites will be published upon site progress clearance.
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mr-2 shrink-0 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-[#BD9141]" />
                <span>Category:</span>
              </span>

              <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 shadow-xs">
                {galleryCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setActiveImageIndex(null);
                    }}
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

            <span className="text-xs text-slate-500">
              Showing {filteredImages.length} visual {filteredImages.length === 1 ? "asset" : "assets"}
            </span>
          </div>

        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, idx) => (
              <div
                key={image.id}
                onClick={() => setActiveImageIndex(idx)}
                className="group relative bg-[#0A1C2E] rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3] flex flex-col justify-end"
              >
                {/* Image */}
                <SafeImage
                  src={image.imageUrl}
                  alt={image.title}
                  fallbackTitle={image.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                />

                {/* Dark Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C2E]/90 via-[#0A1C2E]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 text-[10px] font-semibold bg-[#0A1C2E]/80 text-white rounded backdrop-blur-sm">
                    {image.categoryDisplay}
                  </span>
                </div>

                {/* Zoom Icon overlay */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Caption & Title */}
                <div className="relative z-10 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-heading font-semibold text-xs sm:text-sm text-white leading-tight mb-1">
                    {image.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 line-clamp-1">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state if category has no images */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16 bg-[#F8F7F4] rounded-xl border border-slate-200">
              <ImageIcon className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <p className="text-sm font-semibold text-[#0A1C2E]">No photographs found in this category.</p>
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className="mt-3 text-xs font-semibold text-[#BD9141] hover:underline"
              >
                Reset to All Photographs
              </button>
            </div>
          )}

          {/* Interactive Lightbox Modal */}
          {activeImage && (
            <GalleryLightbox
              image={activeImage}
              isOpen={activeImageIndex !== null}
              onClose={() => setActiveImageIndex(null)}
              onNext={handleNext}
              onPrev={handlePrev}
              currentIndex={activeImageIndex!}
              totalImages={filteredImages.length}
            />
          )}

        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section className="py-14 bg-[#F8F7F4] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0A1C2E] mb-2">
            Interested in Learning More About Our Execution Standards?
          </h3>
          <p className="text-xs sm:text-sm text-[#596675] mb-6 max-w-lg mx-auto">
            Contact our engineering and project coordination team to discuss technical blueprints, material specifications, and site inspections.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0A1C2E] bg-[#BD9141] hover:bg-[#D8B66A] rounded-md shadow-xs transition-colors"
          >
            <span>Contact Technical Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
