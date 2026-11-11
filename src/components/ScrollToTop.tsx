import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures page scrolls to top immediately whenever route changes.
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Allow DOM to settle, then scroll to section target smoothly
      const timer = setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 60);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
    }
  }, [pathname, hash]);

  return null;
};
