import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laboratory & Technical Services",
  description:
    "Professional laboratory testing, analysis, characterization, and technical services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
