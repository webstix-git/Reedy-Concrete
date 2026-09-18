/**
 * Project gallery items. Swap images/captions as new job photos are added.
 * category: "Residential" | "Commercial" | "Industrial" | "Agricultural" | "Equipment"
 */
window.REEDY_GALLERY = [
  {
    src: "assets/photos/residential.jpg",
    alt: "Residential foundation forms and concrete work",
    title: "Foundation Pour",
    category: "Residential",
  },
  {
    src: "assets/photos/what-2.jpg",
    alt: "Residential flatwork and site pour",
    title: "Residential Flatwork",
    category: "Residential",
  },
  {
    src: "assets/photos/family.jpg",
    alt: "Crew and residential concrete project",
    title: "Residential Project",
    category: "Residential",
  },
  {
    src: "assets/photos/commercial.jpg",
    alt: "Commercial concrete construction project",
    title: "Commercial Slab",
    category: "Commercial",
  },
  {
    src: "assets/photos/what-1.jpg",
    alt: "Commercial pour in progress",
    title: "Commercial Pour",
    category: "Commercial",
  },
  {
    src: "assets/photos/what-we-do-banner.jpg",
    alt: "Large commercial concrete site",
    title: "Building Scale Work",
    category: "Commercial",
  },
  {
    src: "assets/photos/contact-banner.jpg",
    alt: "Commercial concrete jobsite",
    title: "Jobsite Delivery",
    category: "Commercial",
  },
  {
    src: "assets/photos/what-3.jpg",
    alt: "Industrial floor and concrete finishing",
    title: "Industrial Floor",
    category: "Industrial",
  },
  {
    src: "assets/photos/hero.jpg",
    alt: "Large-scale industrial concrete pour",
    title: "Industrial Pour",
    category: "Industrial",
  },
  {
    src: "assets/photos/tech.jpg",
    alt: "High-tech concrete equipment on an industrial site",
    title: "Warehouse Flatwork",
    category: "Industrial",
  },
  {
    src: "assets/photos/commercial.jpg",
    alt: "Agricultural concrete facility work",
    title: "Agricultural Facility",
    category: "Agricultural",
  },
  {
    src: "assets/photos/what-1.jpg",
    alt: "Agricultural concrete construction",
    title: "Ag Site Concrete",
    category: "Agricultural",
  },
  {
    src: "assets/photos/tech.jpg",
    alt: "Somero laser screed and pump truck equipment",
    title: "Laser Screed Equipment",
    category: "Equipment",
  },
  {
    src: "assets/photos/about.jpg",
    alt: "Precision layout and surveying on a Reedy Concrete job",
    title: "Precision Layout",
    category: "Equipment",
  },
];

window.REEDY_GALLERY_FILTERS = [
  "All",
  "Residential",
  "Commercial",
  "Industrial",
  "Agricultural",
  "Equipment",
];

(function renderGallery() {
  const filtersRoot = document.getElementById("gallery-filters");
  const gridRoot = document.getElementById("gallery-grid");
  if (!filtersRoot || !gridRoot || !Array.isArray(window.REEDY_GALLERY)) return;

  let active = "All";

  const paintFilters = () => {
    filtersRoot.replaceChildren();
    window.REEDY_GALLERY_FILTERS.forEach((label) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `gallery-filter${active === label ? " is-active" : ""}`;
      btn.textContent = label;
      btn.setAttribute("aria-pressed", active === label ? "true" : "false");
      btn.addEventListener("click", () => {
        active = label;
        paintFilters();
        paintGrid();
      });
      filtersRoot.appendChild(btn);
    });
  };

  const paintGrid = () => {
    const items =
      active === "All"
        ? window.REEDY_GALLERY
        : window.REEDY_GALLERY.filter((item) => item.category === active);

    const frag = document.createDocumentFragment();
    items.forEach((item) => {
      const figure = document.createElement("figure");
      figure.className = "gallery-card reveal";
      figure.dataset.category = item.category;

      const media = document.createElement("div");
      media.className = "gallery-card-media";
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt;
      img.width = 900;
      img.height = 700;
      img.loading = "lazy";
      media.appendChild(img);

      const caption = document.createElement("figcaption");
      caption.className = "gallery-card-caption";
      const title = document.createElement("strong");
      title.className = "gallery-card-title";
      title.textContent = item.title;
      caption.append(title);

      figure.append(media, caption);
      frag.appendChild(figure);
    });

    gridRoot.replaceChildren(frag);

    // Re-observe newly rendered cards if site.js already ran
    if (window.reedyObserveReveals) {
      window.reedyObserveReveals(gridRoot.querySelectorAll(".reveal"));
    }
  };

  paintFilters();
  paintGrid();
})();
