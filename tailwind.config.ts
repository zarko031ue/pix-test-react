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
    },
  },
  plugins: [],
} satisfies Config;
