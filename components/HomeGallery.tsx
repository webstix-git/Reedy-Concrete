"use client";

import { useEffect, useState } from "react";
import HomeLightbox, { type LightboxImage } from "@/components/HomeLightbox";

type HomeGalleryProps = {
  images: LightboxImage[];
  initialCount?: number;
  layout?: "grid" | "mosaic" | "pinterest";
};

const PINTEREST_RATIOS = ["short", "medium", "tall", "medium", "short", "tall", "medium", "short"] as const;
const MOSAIC_ROW_SIZE = 5;
const MOSAIC_EXPANDED_ROWS = 3;
const MOSAIC_EXPANDED_COUNT = MOSAIC_ROW_SIZE * MOSAIC_EXPANDED_ROWS;

type MosaicRow = {
  main: LightboxImage;
  side: LightboxImage[];
  flip: boolean;
  startIndex: number;
};

function buildMosaicRows(images: LightboxImage[]): MosaicRow[] {
  const rows: MosaicRow[] = [];
  const rowCount = Math.ceil(images.length / MOSAIC_ROW_SIZE);

  for (let row = 0; row < rowCount; row += 1) {
    const startIndex = row * MOSAIC_ROW_SIZE;
    const chunk = images.slice(startIndex, startIndex + MOSAIC_ROW_SIZE);
    if (!chunk.length) continue;

    rows.push({
      main: chunk[0],
      side: chunk.slice(1),
      flip: row === 1,
      startIndex,
    });
  }

  return rows;
}

export default function HomeGallery({
  images,
  initialCount = 6,
  layout = "grid",
}: HomeGalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const isPinterest = layout === "pinterest";
  const isMosaic = layout === "mosaic";
  const collapsedCount = isPinterest
    ? Math.min(initialCount, 8)
    : isMosaic
      ? MOSAIC_ROW_SIZE
      : initialCount;
  const expandedCount = isMosaic
    ? Math.min(images.length, MOSAIC_EXPANDED_COUNT)
    : Math.min(images.length, 22);
  const visible = expanded
    ? images.slice(0, expandedCount)
    : images.slice(0, collapsedCount);
  const canExpand = images.length > collapsedCount && !expanded;
  const showMasonry = isPinterest;
  const mosaicRows = isMosaic ? buildMosaicRows(visible) : [];

  useEffect(() => {
    if (!expanded) return;
    const nodes = document.querySelectorAll<HTMLElement>(
      ".home-gallery-item.reveal:not(.visible)"
    );
    nodes.forEach((el) => el.classList.add("visible"));
    window.reedyObserveReveals?.(nodes);
  }, [expanded]);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <>
      {showMasonry ? (
        <div className="home-gallery-pinterest">
          {visible.map((image, i) => {
            const ratio = PINTEREST_RATIOS[i % PINTEREST_RATIOS.length];
            return (
              <button
                key={`${image.src}-${i}`}
                type="button"
                className={`home-gallery-item home-gallery-pinterest-item home-gallery-pinterest-item--${ratio} reveal${
                  expanded && i >= collapsedCount ? " visible" : ""
                }`}
                data-full={image.src}
                aria-label={`Open gallery image: ${image.alt}`}
                onClick={() => openAt(i)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image.src} alt={image.alt} width={800} height={1000} loading="lazy" />
              </button>
            );
          })}
        </div>
      ) : isMosaic ? (
        <div className={`home-gallery-mosaic-stack${expanded ? " home-gallery-mosaic-stack--expanded" : ""}`}>
          {mosaicRows.map((row) => (
            <div
              key={`mosaic-row-${row.startIndex}`}
              className={`home-gallery-mosaic${row.flip ? " home-gallery-mosaic--flip" : ""}`}
            >
              <button
                type="button"
                className={`work-showcase-item home-gallery-item home-gallery-mosaic-main reveal${
                  expanded && row.startIndex >= collapsedCount ? " visible" : ""
                }`}
                data-full={row.main.src}
                aria-label={`Open gallery image: ${row.main.alt}`}
                onClick={() => openAt(row.startIndex)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={row.main.src}
                  alt={row.main.alt}
                  width={900}
                  height={1100}
                  loading={row.startIndex === 0 ? "eager" : "lazy"}
                />
              </button>
              <div className="home-gallery-mosaic-side">
                {row.side.map((image, i) => {
                  const imageIndex = row.startIndex + i + 1;
                  return (
                    <button
                      key={`${image.src}-${imageIndex}`}
                      type="button"
                      className={`work-showcase-item home-gallery-item reveal${
                        expanded && imageIndex >= collapsedCount ? " visible" : ""
                      }`}
                      data-full={image.src}
                      aria-label={`Open gallery image: ${image.alt}`}
                      onClick={() => openAt(imageIndex)}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={image.src} alt={image.alt} width={900} height={600} loading="lazy" />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="work-showcase-grid work-showcase-grid--gallery">
          {visible.map((image, i) => (
            <button
              key={`${image.src}-${i}`}
              type="button"
              className={`work-showcase-item home-gallery-item reveal${
                expanded && i >= collapsedCount ? " visible" : ""
              }`}
              data-full={image.src}
              aria-label={`Open gallery image: ${image.alt}`}
              onClick={() => openAt(i)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image.src} alt={image.alt} width={900} height={700} loading="lazy" />
            </button>
          ))}
        </div>
      )}
      {canExpand ? (
        <div className="section-actions section-actions--center">
          <button
            type="button"
            className="btn btn-outline btn-outline--dark"
            onClick={() => setExpanded(true)}
          >
            View Our Gallery
          </button>
        </div>
      ) : null}
      <HomeLightbox
        images={visible}
        open={open}
        index={index}
        onClose={() => setOpen(false)}
        onIndexChange={setIndex}
      />
    </>
  );
}
