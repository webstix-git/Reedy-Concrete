"use client";

import { ReactNode, useEffect, useRef } from "react";

type HomeStatsProps = {
  children: ReactNode;
};

function animateCount(el: HTMLElement) {
  const target = Number(el.dataset.count);
  const prefix = el.dataset.prefix || "";
  const suffix = el.dataset.suffix || "";
  const finalText = el.dataset.final || "";
  const duration = 1600;
  const start = performance.now();

  function frame(now: number) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    if (progress >= 1 && finalText) {
      el.textContent = finalText;
    } else {
      el.textContent = prefix + value + suffix;
    }
    if (progress < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

export default function HomeStats({ children }: HomeStatsProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>(".num[data-count]").forEach(animateCount);
            countObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.55, rootMargin: "0px 0px -12% 0px" }
    );

    countObserver.observe(root);
    return () => countObserver.disconnect();
  }, []);

  return (
    <div className="about-stats" id="about-stats" ref={ref}>
      {children}
    </div>
  );
}
