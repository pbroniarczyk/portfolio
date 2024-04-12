import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import "./globals.css";

const raleway = Raleway({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paweł Broniarczyk | Frontend Developer",
  description: "Something something Dark Side",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}