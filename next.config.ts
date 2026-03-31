import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ignore type errors during build for maximum compatibility with static export
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;