import React from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = ""
}) => {
  const isCentered = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`mb-10 sm:mb-14 ${isCentered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"} ${className}`}
    >
      {label && (
        <div
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-2.5 ${
            isDark ? "text-[#BD9141]" : "text-[#BD9141]"
          }`}
        >
          <span className="w-5 h-[1.5px] bg-[#BD9141]" />
          <span>{label}</span>
          {isCentered && <span className="w-5 h-[1.5px] bg-[#BD9141]" />}
        </div>
      )}

      <h2
        className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight ${
          isDark ? "text-white" : "text-[#0A1C2E]"
        }`}
        style={{ textWrap: "balance" }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-3.5 text-sm sm:text-base leading-relaxed ${
            isDark ? "text-slate-300" : "text-[#596675]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
