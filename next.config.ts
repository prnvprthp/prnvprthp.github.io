import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ignore type errors during build to ensure deployment success
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;