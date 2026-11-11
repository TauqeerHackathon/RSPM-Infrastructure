import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { GalleryImage } from "../config/gallery";
import { SafeImage } from "./SafeImage";

interface GalleryLightboxProps {
  image: GalleryImage;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalImages: number;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  image,
  isOpen,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalImages
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 sm:p-6 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Top Header inside Lightbox */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-10 bg-gradient-to-b from-black/80 to-transparent">
        <div className="text-white text-xs sm:text-sm font-medium">
          <span className="text-[#BD9141] font-bold">{currentIndex + 1}</span>
          <span className="text-white/40 mx-1.5">/</span>
          <span className="text-white/70">{totalImages}</span>
          <span className="hidden sm:inline-block ml-3 px-2 py-0.5 text-xs bg-white/10 rounded text-slate-300">
            {image.categoryDisplay}
          </span>
        </div>

        {/* Close Button: min 44x44px touch target */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Lightbox (Escape)"
          className="flex items-center justify-center min-w-[44px] min-h-[44px] p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD9141]"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Buttons: min 44x44px touch target */}
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous image (Left Arrow)"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center min-w-[44px] min-h-[44px] p-3 rounded-full bg-black/60 hover:bg-[#BD9141] hover:text-[#0A1C2E] text-white border border-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD9141]"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={onNext}
        aria-label="Next image (Right Arrow)"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center min-w-[44px] min-h-[44px] p-3 rounded-full bg-black/60 hover:bg-[#BD9141] hover:text-[#0A1C2E] text-white border border-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD9141]"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Frame */}
      <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center relative">
        <SafeImage
          src={image.imageUrl}
          alt={image.title}
          fallbackTitle={image.title}
          className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full object-contain rounded-md shadow-2xl"
        />

        {/* Caption Card */}
        <div className="mt-4 p-4 bg-black/70 border border-white/10 rounded-lg max-w-2xl text-center backdrop-blur-sm">
          <h4 className="text-white font-heading font-semibold text-sm sm:text-base">
            {image.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {image.caption}
          </p>
          {image.isIllustrative && (
            <div className="mt-2 inline-flex items-center gap-1 text-[11px] text-[#BD9141]">
              <Info className="w-3 h-3" />
              <span>Illustrative architectural visualization</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
