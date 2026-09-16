export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  category: "Residential" | "Commercial" | "Industrial" | "Agricultural" | "Equipment";
};

export const REEDY_GALLERY: GalleryItem[] = [
  {
    src: "/assets/photos/residential.jpg",
    alt: "Residential foundation forms and concrete work",
    title: "Foundation Pour",
    category: "Residential",
  },
  {
    src: "/assets/photos/what-2.jpg",
    alt: "Residential flatwork and site pour",
    title: "Residential Flatwork",
    category: "Residential",
  },
  {
    src: "/assets/photos/family.jpg",
    alt: "Crew and residential concrete project",
    title: "Home Site Work",
    category: "Residential",
  },
  {
    src: "/assets/photos/commercial.jpg",
    alt: "Commercial concrete construction project",
    title: "Commercial Slab",
    category: "Commercial",
  },
  {
    src: "/assets/photos/what-1.jpg",
    alt: "Commercial pour in progress",
    title: "Commercial Pour",
    category: "Commercial",
  },
  {
    src: "/assets/photos/what-we-do-banner.jpg",
    alt: "Large commercial concrete site",
    title: "Building Scale Work",
    category: "Commercial",
  },
  {
    src: "/assets/photos/contact-banner.jpg",
    alt: "Commercial concrete jobsite",
    title: "Jobsite Delivery",
    category: "Commercial",
  },
  {
    src: "/assets/photos/what-3.jpg",
    alt: "Industrial floor and concrete finishing",
    title: "Industrial Floor",
    category: "Industrial",
  },
  {
    src: "/assets/photos/hero.jpg",
    alt: "Large-scale industrial concrete pour",
    title: "Plant-Scale Pour",
    category: "Industrial",
  },
  {
    src: "/assets/photos/tech.jpg",
    alt: "High-tech concrete equipment on an industrial site",
    title: "Warehouse Flatwork",
    category: "Industrial",
  },
  {
    src: "/assets/photos/commercial.jpg",
    alt: "Agricultural concrete facility work",
    title: "Agricultural Facility",
    category: "Agricultural",
  },
  {
    src: "/assets/photos/what-1.jpg",
    alt: "Agricultural concrete construction",
    title: "Ag Site Concrete",
    category: "Agricultural",
  },
  {
    src: "/assets/photos/tech.jpg",
    alt: "Somero laser screed and pump truck equipment",
    title: "Laser Screed Equipment",
    category: "Equipment",
  },
  {
    src: "/assets/photos/about.jpg",
    alt: "Precision layout and surveying on a Reedy Concrete job",
    title: "Precision Layout",
    category: "Equipment",
  },
];

export const REEDY_GALLERY_FILTERS = [
  "All",
  "Residential",
  "Commercial",
  "Industrial",
  "Agricultural",
  "Equipment",
] as const;
