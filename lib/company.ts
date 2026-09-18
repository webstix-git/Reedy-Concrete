export const company = {
  name: "Reedy Concrete",
  legalName: "Reedy Concrete",
  tagline: "Family-owned concrete contractor",
  phoneDisplay: "(608) 582-4335",
  phoneTel: "+16085824335",
  emails: ["prentice@reedyconcrete.com", "tyler@reedyconcrete.com"] as const,
  addressLines: ["16451 South 15th St.", "Galesville, WI 54630"] as const,
  serviceArea: ["Wisconsin", "Minnesota", "Iowa"] as const,
  serviceAreaShort: "WI · MN · IA",
  facebookUrl: "https://www.facebook.com/reedyconcrete/",
  mapsUrl:
    "https://www.google.com/maps/place/Reedy+Concrete+Construction/@44.0768332,-91.371364,17z/data=!3m1!4b1!4m6!3m5!1s0x87f947e4a36041fd:0xbd5a031656a9b25d!8m2!3d44.0768332!4d-91.371364!16s%2Fg%2F1tsjf66k?entry=ttu&g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D",
} as const;

export const footerServices = [
  { href: "/residential", label: "Residential" },
  { href: "/commercial", label: "Commercial" },
  { href: "/commercial", label: "Foundations and Flatwork" },
  { href: "/commercial", label: "Industrial and Warehouse" },
  { href: "/commercial", label: "Agricultural" },
  { href: "/commercial", label: "Multi-Tenant" },
  { href: "/commercial", label: "Underground Parking" },
] as const;

export const footerLegal = [
  { href: "/site-map", label: "Sitemap" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/ai-policy", label: "AI Policy" },
  { href: "/service-index", label: "AI Readiness Service Index" },
] as const;
