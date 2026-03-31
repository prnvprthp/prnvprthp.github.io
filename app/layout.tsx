import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Pranav Prathap | Portfolio",
  description: "MSBA @ William & Mary. Bridging Data Architecture and Strategic GTM.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground" suppressHydrationWarning>
        <Navbar />
        {/* This wrapper ensures content isn't hidden under the Navbar */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}