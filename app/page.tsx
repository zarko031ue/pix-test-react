// FILE: LoginForm.tsx
"use client";

import { useState } from "react";
import { ThemeProvider, CssBaseline, Box, Typography, TextField, Button, Checkbox, Divider, Link, IconButton, InputAdornment, FormControlLabel } from "@mui/material";
import { EyeOff } from "lucide-react";
import { Theme } from "@/Theme";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(true);

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          p: 3,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 505,
            display: "flex",
            flexDirection: "column",
            gap: "50px",
          }}
        >
          {/* Header */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography
              sx={{
                fontSize: 32,
                fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
                color: "#FFFFFF",
                lineHeight: 1.2,
              }}
            >
              Welcome back 👋
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 400,
                fontFamily: "Poppins, sans-serif",
                color: "#8692A6",
              }}
            >
              We are happy to have you back
            </Typography>
          </Box>

          {/* Form Content */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {/* Input Fields */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Email */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    fontFamily: "Poppins, sans-serif",
                    color: "#9794AA",
                  }}
                >
                  Email Address*
                </Typography>
                <TextField
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      bgcolor: "transparent",
                    },
                  }}
                />
              </Box>

              {/* Password */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    fontFamily: "Poppins, sans-serif",
                    color: "#9794AA",
                  }}
                >
                  Password
                </Typography>
                <TextField
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                            sx={{ color: "#9794AA" }}
                          >
                            <EyeOff size={20} />
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      bgcolor: "transparent",
                    },
                  }}
                />
              </Box>

              {/* Checkbox */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    sx={{
                      color: "primary.main",
                      "&.Mui-checked": { color: "primary.main" },
                      p: 0,
                      mr: "14px",
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 500,
                      fontFamily: "Poppins, sans-serif",
                      color: "#CBCAD7",
                    }}
                  >
                    I agree to terms & conditions
                  </Typography>
                }
                sx={{ m: 0, alignItems: "center" }}
              />
            </Box>

            {/* Buttons + Divider */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  fontSize: 16,
                  fontWeight: 500,
                  fontFamily: "Poppins, sans-serif",
                  height: 56,
                  borderRadius: 2,
                  textTransform: "none",
                  cursor: "pointer",
                }}
              >
                Login
              </Button>

              {/* Or divider */}
              <Box sx={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <Divider sx={{ flex: 1, borderColor: "#9794AA" }} />
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 400,
                    fontFamily: "Poppins, sans-serif",
                    color: "#CBCAD7",
                  }}
                >
                  Or
                </Typography>
                <Divider sx={{ flex: 1, borderColor: "#9794AA" }} />
              </Box>

              {/* Google Login */}
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  height: 56,
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: 16,
                  fontWeight: 600,
                  fontFamily: "Poppins, sans-serif",
                  color: "#FFFFFF",
                  bgcolor: "#100F14",
                  borderColor: "#9794AA",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  "&:hover": {
                    bgcolor: "#1e1d26",
                    borderColor: "#CBCAD7",
                  },
                }}
                startIcon={
                  <Box
                    component="span"
                    sx={{
                      width: 24,
                      height: 24,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #4285F4 25%, #EA4335 25%, #EA4335 50%, #FBBC05 50%, #FBBC05 75%, #34A853 75%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {/* Google brand icon */}
                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </Box>
                }
              >
                Login with Google
              </Button>
            </Box>

            {/* Register link */}
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 400,
                fontFamily: "Poppins, sans-serif",
                color: "#9794AA",
              }}
            >
              Don't have an account?{" "}
              <Link
                href="#"
                underline="always"
                sx={{
                  color: "#CBCAD7",
                  fontWeight: 400,
                  fontFamily: "Poppins, sans-serif",
                  cursor: "pointer",
                }}
              >
                Register
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}