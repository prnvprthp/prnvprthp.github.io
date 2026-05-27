import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { CursorGlow } from "@/app/components/CursorGlow";

export const metadata: Metadata = {
  title: "Pranav Prathap | Portfolio",
  description: "MSBA @ William & Mary. Building at the intersection of data architecture and strategic go-to-market.",
  icons: {
    icon: "/icon.ico",
  },
  openGraph: {
    title: "Pranav Prathap | Portfolio",
    description: "MSBA @ William & Mary. Building at the intersection of data architecture and strategic go-to-market.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pranav Prathap | Portfolio",
    description: "MSBA @ William & Mary. Building at the intersection of data architecture and strategic go-to-market.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground" suppressHydrationWarning>
        <CursorGlow />
        <Navbar />
        {/* This wrapper ensures content isn't hidden under the Navbar */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}