import React, { useState } from "react";
import { Building2 } from "lucide-react";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  containerClassName?: string;
}

/**
 * Resilient image component with zero-broken-image fallback.
 * Renders a stylized architectural placeholder if an image fails to load.
 */
export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = "",
  containerClassName = "",
  fallbackTitle,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center bg-[#0A1C2E] text-white p-6 relative overflow-hidden ${containerClassName}`}
        style={{
          backgroundImage: `radial-gradient(rgba(189, 145, 65, 0.25) 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      >
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-2.5 border border-[#BD9141]/40 shadow-sm">
          <Building2 className="w-6 h-6 text-[#BD9141]" />
        </div>
        <p className="text-xs font-heading font-semibold text-white/90 text-center max-w-[220px] leading-tight">
          {fallbackTitle || alt || "RSPM Infrastructure"}
        </p>
        <span className="text-[10px] text-[#BD9141] uppercase tracking-wider mt-1 font-medium">
          Architectural Visualization
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      referrerPolicy="no-referrer"
      className={className}
      {...props}
    />
  );
};
