"use client";

import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",

    h1: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
      fontWeight: 600,
      lineHeight: 1.2,
      fontFamily: "Poppins, sans-serif",
    },

    h4: {
      fontSize: "1.5rem",
      lineHeight: 1.7,
      fontFamily: "Poppins, sans-serif",
    },

    h5: {
      fontSize: "1.2rem",
      fontFamily: "Poppins, sans-serif",
    },

    h6: {
      fontSize: "1rem",
      lineHeight: 1.5,
      fontFamily: "Poppins, sans-serif",
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
      fontFamily: "Poppins, sans-serif",
    },

    body2: {
      fontWeight: 400,
      fontSize: "0.875rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      fontFamily: "Poppins, sans-serif",
    },

    subtitle1: {
      fontSize: "0.875rem",
      fontFamily: "Poppins, sans-serif",
    },

    subtitle2: {
      fontWeight: 400,
      fontSize: "1rem",
      color: "#9794AA",
      fontFamily: "Poppins, sans-serif",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },

  palette: {
    mode: "dark",

    primary: {
      main: "#7A5AF8",
      light: "#A896FF",
      dark: "#5B3FD0",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#9794AA",
    },

    error: {
      main: "#EF4444",
    },

    warning: {
      main: "#F59E0B",
    },

    info: {
      main: "#3B82F6",
    },

    success: {
      main: "#22C55E",
    },

    background: {
      default: "#19181F",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#19181F",
      secondary: "#9794AA",
      disabled: "#8692A6",
    },

    divider: "#CBCAD7",

    common: {
      black: "#100F14",
      white: "#FFFFFF",
    },

    grey: {
      50: "#E4E3EC",
      100: "#CBCAD7",
      200: "#9794AA",
      300: "#8692A6",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#19181F",
          color: "#FFFFFF",
          fontFamily: "Poppins, sans-serif",
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          height: 56,
          borderRadius: 8,
          fontFamily: "Poppins, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textTransform: "none",
          boxShadow: "none",

          "&:hover": {
            boxShadow: "none",
          },

          "&:active": {
            boxShadow: "none",
          },
        },

      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: 56,
          borderRadius: 8,

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#9794AA",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#CBCAD7",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#7A5AF8",
          },
        },

        input: {
          color: "#9794AA",
          fontSize: 16,
          fontWeight: 500,
          fontFamily: "Poppins, sans-serif",

          "&::placeholder": {
            color: "#9794AA",
            opacity: 1,
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#9794AA",
          fontFamily: "Poppins, sans-serif",

          "&.Mui-focused": {
            color: "#7A5AF8",
          },
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#7A5AF8",

          "&.Mui-checked": {
            color: "#7A5AF8",
          },
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#9794AA",
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: "#CBCAD7",
          fontFamily: "Poppins, sans-serif",
        },
      },
    },

    MuiAvatar: {
      styleOverrides: {
        root: {
          "&.MuiAvatar-colorDefault": {
            backgroundColor: "#5A5A5A",
            color: "#F6F6F6",
          },
        },
      },
    },
  },
});