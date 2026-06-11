import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  outline: "bg-transparent border border-border text-text-primary hover:bg-surface",
  ghost: "bg-transparent text-text-primary hover:bg-surface",
  danger: "bg-danger text-white hover:opacity-90",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-8 px-sm text-sm",
  md: "h-10 px-md text-base",
  lg: "h-12 px-lg text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`rounded-md font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={loading || disabled}
      {...rest}
    >
      {loading ? "Loading…" : children}
    </button>
  );
}
