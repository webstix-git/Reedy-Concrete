"use client";

import { useEffect, useRef } from "react";

export type LightboxImage = {
  src: string;
  alt: string;
};

type HomeLightboxProps = {
  images: LightboxImage[];
  open: boolean;
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export default function HomeLightbox({
  images,
  open,
  index,
  onClose,
  onIndexChange,
}: HomeLightboxProps) {
  const lightboxRef = useRef<HTMLDivElement | null>(null);
  const indexRef = useRef(index);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    // Focus the dialog itself (not the close button) so arrow keys
    // don't leave a stuck :focus-visible "record" look on the X.
    const t = window.setTimeout(() => lightboxRef.current?.focus(), 0);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (!images.length) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onIndexChange((indexRef.current - 1 + images.length) % images.length);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        onIndexChange((indexRef.current + 1) % images.length);
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, images.length, onClose, onIndexChange]);

  if (!images.length) return null;

  const current = images[index];
  const step = (delta: number) => {
    onIndexChange((index + delta + images.length) % images.length);
  };

  return (
    <div
      ref={lightboxRef}
      className={`home-lightbox${open ? " is-open" : ""}`}
      id="home-lightbox"
      hidden={!open}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image preview"
      tabIndex={-1}
      onClick={(event) => {
        if (event.target === lightboxRef.current) onClose();
      }}
    >
      <button
        type="button"
        className="home-lightbox-close"
        aria-label="Close gallery preview"
        onClick={onClose}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      <button
        type="button"
        className="home-lightbox-nav home-lightbox-prev"
        aria-label="Previous image"
        onClick={(event) => {
          event.stopPropagation();
          step(-1);
        }}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <figure className="home-lightbox-figure">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={open && current ? current.src : undefined} alt={current?.alt || ""} />
      </figure>
      <button
        type="button"
        className="home-lightbox-nav home-lightbox-next"
        aria-label="Next image"
        onClick={(event) => {
          event.stopPropagation();
          step(1);
        }}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}
