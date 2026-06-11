import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "danger" | "warning";
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-surface text-text-secondary",
  success: "bg-success/15 text-success",
  danger: "bg-danger/15 text-danger",
  warning: "bg-accent/15 text-accent",
};

export function Badge({ variant = "default", className = "", children, ...rest }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-sm px-sm text-sm font-medium ${variantStyles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}
