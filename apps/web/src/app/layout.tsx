import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Drone404",
    template: "%s | Drone404",
  },
  description:
    "Intelligent drone-powered last-mile delivery and commerce platform.",
  applicationName: "Drone404",
  keywords: [
    "Drone404",
    "SkyNav",
    "drone delivery",
    "last-mile delivery",
    "UAV delivery",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}