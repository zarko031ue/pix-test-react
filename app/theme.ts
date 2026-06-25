"use client";

import { createTheme } from "@mui/material/styles";

/* ------------------------------------------------------------------ */
/* Raw color tokens (your colors + scales + extra hues)               */
/* ------------------------------------------------------------------ */
export const colors = {
  // Core (the ones you provided)
  ink: "#1d1d20", // 1D1D20
  inkSoft: "#1a1a1a", // 1A1A1A
  brand: "#1559ea", // 1559EA
  success: "#149041", // 149041
  paper: "#fcfcfc", // FCFCFC
  white: "#ffffff", // FFFFFF
  black: "#000000",

  // Brand (blue) scale around 1559EA
  brandScale: {
    50: "#eef4ff",
    100: "#dce8ff",
    200: "#b9d1ff",
    300: "#8db2ff",
    400: "#5a8fff",
    500: "#1559ea",
    600: "#1148bf",
    700: "#0e3a99",
    800: "#0a2a6e",
    900: "#071d4d",
  },

  // Success (green) scale around 149041
  successScale: {
    50: "#eaf8ef",
    100: "#d2f0dd",
    200: "#a6e1bb",
    300: "#74cd94",
    400: "#42b96c",
    500: "#149041",
    600: "#107536",
    700: "#0c5c2a",
    800: "#08431f",
    900: "#052a13",
  },

  // Neutral scale (ink -> paper)
  neutral: {
    0: "#ffffff",
    50: "#fcfcfc",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#1a1a1a",
    950: "#1d1d20",
  },

  // Extra hues (not required now, kept for future use)
  danger: { light: "#f87171", main: "#ef4444", dark: "#b91c1c" },
  warning: { light: "#fbbf24", main: "#f59e0b", dark: "#b45309" },
  info: { light: "#22d3ee", main: "#06b6d4", dark: "#0e7490" },
  violet: { light: "#a78bfa", main: "#8b5cf6", dark: "#6d28d9" },
  teal: { light: "#2dd4bf", main: "#14b8a6", dark: "#0f766e" },
  pink: { light: "#f472b6", main: "#ec4899", dark: "#be185d" },
} as const;

/* ------------------------------------------------------------------ */
/* Custom token scales attached to the theme (theme.tokens.*)         */
/* ------------------------------------------------------------------ */
export const tokens = {
  spacing: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    12: 48,
    14: 56,
    16: 64,
    20: 80,
    24: 96,
    32: 128,
    40: 160,
    48: 192,
    56: 224,
    64: 256,
  },
  radius: {
    none: 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    "2xl": 24,
    "3xl": 32,
    full: 9999,
  },
  shadow: {
    xs: "0 1px 2px rgba(0,0,0,0.05)",
    sm: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)",
    md: "0 4px 12px rgba(0,0,0,0.08)",
    lg: "0 8px 24px rgba(0,0,0,0.12)",
    xl: "0 16px 40px rgba(0,0,0,0.16)",
    glow: "0 0 24px rgba(21,89,234,0.25)",
  },
  colors,
} as const;

/* ------------------------------------------------------------------ */
/* TypeScript augmentation: custom palette colors + theme.tokens      */
/* ------------------------------------------------------------------ */
declare module "@mui/material/styles" {
  interface Palette {
    brand: Palette["primary"];
    neutral: Palette["primary"];
    violet: Palette["primary"];
    teal: Palette["primary"];
    pink: Palette["primary"];
  }
  interface PaletteOptions {
    brand?: PaletteOptions["primary"];
    neutral?: PaletteOptions["primary"];
    violet?: PaletteOptions["primary"];
    teal?: PaletteOptions["primary"];
    pink?: PaletteOptions["primary"];
  }
  interface Theme {
    tokens: typeof tokens;
  }
  interface ThemeOptions {
    tokens?: typeof tokens;
  }
}

// Let Button etc. accept the custom palette colors
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    brand: true;
    neutral: true;
    violet: true;
    teal: true;
    pink: true;
  }
}

/* ------------------------------------------------------------------ */
/* The MUI theme                                                      */
/* ------------------------------------------------------------------ */
export const theme = createTheme({
  tokens,

  palette: {
    mode: "light",
    primary: {
      light: colors.brandScale[300],
      main: colors.brand,
      dark: colors.brandScale[700],
      contrastText: colors.white,
    },
    secondary: {
      light: colors.neutral[400],
      main: colors.ink,
      dark: colors.black,
      contrastText: colors.white,
    },
    success: {
      light: colors.successScale[300],
      main: colors.success,
      dark: colors.successScale[700],
      contrastText: colors.white,
    },
    error: { ...colors.danger, contrastText: colors.white },
    warning: { ...colors.warning, contrastText: colors.ink },
    info: { ...colors.info, contrastText: colors.white },
    background: {
      default: colors.paper,
      paper: colors.white,
    },
    text: {
      primary: colors.ink,
      secondary: colors.neutral[600],
      disabled: colors.neutral[400],
    },
    divider: colors.neutral[200],

    // Custom palette colors
    brand: {
      light: colors.brandScale[300],
      main: colors.brand,
      dark: colors.brandScale[700],
      contrastText: colors.white,
    },
    neutral: {
      light: colors.neutral[200],
      main: colors.neutral[600],
      dark: colors.neutral[900],
      contrastText: colors.white,
    },
    violet: { ...colors.violet, contrastText: colors.white },
    teal: { ...colors.teal, contrastText: colors.white },
    pink: { ...colors.pink, contrastText: colors.white },
  },

  spacing: 8, // theme.spacing(1) = 8px

  shape: {
    borderRadius: 12,
  },

  typography: {
    fontFamily: '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif',
    h1: { fontSize: 48, fontWeight: 700, lineHeight: 1.1 },
    h2: { fontSize: 36, fontWeight: 700, lineHeight: 1.15 },
    h3: { fontSize: 30, fontWeight: 600, lineHeight: 1.2 },
    h4: { fontSize: 24, fontWeight: 600, lineHeight: 1.25 },
    h5: { fontSize: 20, fontWeight: 600, lineHeight: 1.3 },
    h6: { fontSize: 18, fontWeight: 600, lineHeight: 1.35 },
    body1: { fontSize: 16, lineHeight: 1.6 },
    body2: { fontSize: 14, lineHeight: 1.55 },
    button: { fontSize: 16, fontWeight: 600, textTransform: "none" },
    caption: { fontSize: 12, lineHeight: 1.4 },
  },

  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: tokens.radius.sm, paddingInline: 20, height: 44 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: tokens.radius.lg, boxShadow: tokens.shadow.md },
      },
    },
  },
});

export default theme;
