import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = "", id, ...rest }: InputProps) {
  const inputId = id ?? `input-${React.useId()}`;
  return (
    <div className="flex flex-col gap-xs">
      {label ? (
        <label htmlFor={inputId} className="text-sm font-medium text-text-primary">
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        className={`h-10 px-md rounded-md border border-border bg-surface-elevated text-base text-text-primary focus:outline-none focus:ring-2 focus:ring-primary ${error ? "border-danger" : ""} ${className}`}
        {...rest}
      />
      {error ? <span className="text-sm text-danger">{error}</span> : null}
    </div>
  );
}
