import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMILE Research Lab | Ewha Womans University",
  description:
    "SMILE Research Lab studies regulated learning, socially shared regulation, and inclusive learning design in human-centered AI-supported environments.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
