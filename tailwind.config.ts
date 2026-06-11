import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        "primary-hover": "#6D28D9",
        accent: "#F59E0B",
        surface: "#F9FAFB",
        "surface-elevated": "#FFFFFF",
        border: "#E5E7EB",
        "text-primary": "#111827",
        "text-secondary": "#6B7280",
        "text-muted": "#9CA3AF",
        success: "#10B981",
        danger: "#EF4444",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
      fontSize: {
        sm: "12px",
        base: "14px",
        lg: "18px",
        xl: "24px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
      },
    },
  },
  plugins: [],
} satisfies Config;
