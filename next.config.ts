import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["100.93.109.120", "localhost:3000"]
} as any; // Cast to any to bypass strict type check for this specific dev-only property

export default nextConfig;
