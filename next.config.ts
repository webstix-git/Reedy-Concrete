import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* visual parity: keep plain img /assets paths */
  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/services/decorative-concrete", destination: "/services", permanent: true },
      { source: "/services/recon-coating", destination: "/services", permanent: true },
      { source: "/services/industrial-warehouse-concrete", destination: "/services", permanent: true },
      { source: "/services/agricultural-concrete", destination: "/services", permanent: true },
      { source: "/services/multi-tenant-underground-parking-concrete", destination: "/services", permanent: true },
      { source: "/services/commercial-concrete", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
