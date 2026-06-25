"use client";

import { Box, Button, Card, CardContent, Container, Stack, Typography, useTheme } from "@mui/material";

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
      <Stack spacing={4}>
        <Box>
          <Typography variant="h2" gutterBottom>
            Material UI ready
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Theme + ThemeProvider configured. Tokens live in{" "}
            <Box component="code" sx={{ fontFamily: "monospace", color: "primary.main" }}>
              app/theme.ts
            </Box>
            .
          </Typography>
        </Box>

        <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
          <Button variant="contained">Primary</Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="violet">
            Violet
          </Button>
          <Button variant="outlined" color="brand">
            Brand outlined
          </Button>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" },
          }}
        >
          {swatches.map((s) => (
            <Card key={s.name} variant="outlined">
              <Box sx={{ height: 80, bgcolor: s.color }} />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {s.name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Stack>
    </Container>
  );
}
