import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show only after scrolling down 350px
      if (scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Check distance from footer to prevent any overlap with footer text or CIN
      const footer = document.querySelector("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        // If footer is entering the lower portion of the screen, hide or lift the button
        if (footerRect.top <= window.innerHeight - 80) {
          setIsNearFooter(true);
        } else {
          setIsNearFooter(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  };

  // Do not render if not visible or if near footer
  if (!isVisible || isNearFooter) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className="fixed bottom-22 right-5.5 sm:bottom-24 sm:right-6.5 z-30 flex items-center justify-center w-11 h-11 bg-[#0A1C2E] hover:bg-[#102C46] text-white border border-[#BD9141]/40 rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD9141] animate-in fade-in"
    >
      <ArrowUp className="w-5 h-5 text-[#BD9141]" />
    </button>
  );
};
