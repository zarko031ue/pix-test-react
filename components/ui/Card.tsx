import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
}

export function Card({ elevated = false, className = "", children, ...rest }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-border p-md ${elevated ? "bg-surface-elevated shadow-md" : "bg-surface"} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex flex-col gap-xs mb-md ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`text-lg font-semibold text-text-primary ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-sm text-text-secondary ${className}`}>{children}</p>;
}

export function CardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function CardFooter({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex items-center justify-end gap-sm mt-md ${className}`}>{children}</div>;
}
