"use client";

import { useEffect, useState } from "react";
import { REEDY_GALLERY, REEDY_GALLERY_FILTERS } from "@/lib/gallery-data";

export default function GalleryGrid() {
  const [active, setActive] = useState<(typeof REEDY_GALLERY_FILTERS)[number]>("All");

  const items =
    active === "All" ? REEDY_GALLERY : REEDY_GALLERY.filter((item) => item.category === active);

  useEffect(() => {
    if (typeof window !== "undefined" && window.reedyObserveReveals) {
      window.reedyObserveReveals(document.querySelectorAll("#gallery-grid .reveal"));
    }
  }, [active]);

  return (
    <>
      <div id="gallery-filters" className="gallery-filters" role="group" aria-label="Filter gallery by category">
        {REEDY_GALLERY_FILTERS.map((label) => (
          <button
            key={label}
            type="button"
            className={`gallery-filter${active === label ? " is-active" : ""}`}
            aria-pressed={active === label}
            onClick={() => setActive(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <div id="gallery-grid" className="gallery-grid">
        {items.map((item) => (
          <figure key={`${item.src}-${item.title}`} className="gallery-card reveal" data-category={item.category}>
            <div className="gallery-card-media">
              <img src={item.src} alt={item.alt} width={900} height={700} loading="lazy" />
            </div>
            <figcaption className="gallery-card-caption">
              <strong className="gallery-card-title">{item.title}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
