export const company = {
  name: "Reedy Concrete",
  legalName: "Reedy Concrete Construction, Inc.",
  tagline: "Family-owned concrete contractor",
  applicationUrl: "/assets/RCC-Inc-Application-2025.doc",
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
  { href: "/services", label: "Services" },
  { href: "/services#foundations-and-flatwork", label: "Foundations and Flatwork" },
  { href: "/services#commercial", label: "Commercial" },
  { href: "/services#industrial-and-warehouse", label: "Industrial and Warehouse" },
  { href: "/services#agricultural", label: "Agricultural" },
  { href: "/services#multi-tenant", label: "Multi-Tenant" },
  { href: "/services#underground-parking", label: "Underground Parking" },
] as const;

export const footerLegal = [
  { href: "/site-map", label: "Sitemap" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/ai-policy", label: "AI Policy" },
  { href: "/service-index", label: "AI Readiness Service Index" },
] as const;
