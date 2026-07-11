import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Modern formats for smaller payloads / better LCP. All imagery is local
    // (see /public/portfolio), so no remote patterns are needed.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
