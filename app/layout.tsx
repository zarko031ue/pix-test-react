import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pix Test React",
  description: "Minimal React project for PixToCode project-context testing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
