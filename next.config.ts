import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Required for GitHub Pages
  images: {
    unoptimized: true, // Required for GitHub Pages as it doesn't support Next.js Image Optimization
  },
  basePath: "/portfolio", // Uncomment and set this if your repo is NOT username.github.io
};

export default nextConfig;
