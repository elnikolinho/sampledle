import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sampledle — Guess the sample",
  description: "A daily music sample guessing game. Hear the original sample, name the song that flipped it.",
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
