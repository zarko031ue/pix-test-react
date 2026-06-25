"use client";

import { Box, Button, Card, CardContent, Container, Stack, Typography, useTheme } from "@mui/material";
import PricingPage from "./output";

export default function Home() {
  const theme = useTheme();

  const swatches: { name: string; color: string }[] = [
    { name: "primary / brand", color: theme.palette.primary.main },
    { name: "ink (secondary)", color: theme.palette.secondary.main },
    { name: "success", color: theme.palette.success.main },
    { name: "violet", color: theme.palette.violet.main },
    { name: "teal", color: theme.palette.teal.main },
    { name: "pink", color: theme.palette.pink.main },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <PricingPage />
    </Container>
  );
}
