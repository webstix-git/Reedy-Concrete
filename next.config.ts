import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* visual parity: keep plain img /assets paths */
  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
    ];
  },
};

export default nextConfig;
