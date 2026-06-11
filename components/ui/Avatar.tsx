import * as React from "react";

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = { sm: "w-8 h-8 text-sm", md: "w-10 h-10 text-base", lg: "w-12 h-12 text-lg" };

export function Avatar({ src, alt, fallback = "?", size = "md", className = "" }: AvatarProps) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full bg-surface text-text-secondary font-semibold overflow-hidden ${sizeMap[size]} ${className}`}
    >
      {src ? <img src={src} alt={alt ?? ""} className="w-full h-full object-cover" /> : <span>{fallback}</span>}
    </div>
  );
}
