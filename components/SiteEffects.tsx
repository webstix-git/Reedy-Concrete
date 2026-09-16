"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    reedyObserveReveals?: (nodes: NodeListOf<Element> | Element[]) => void;
  }
}

export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cementTick = false;

    const updateCementParallax = () => {
      if (reduceMotion) {
        document.documentElement.style.setProperty("--cement-parallax", "0px");
        return;
      }
      const shift = Math.round(window.scrollY * 0.22);
      document.documentElement.style.setProperty("--cement-parallax", `${-shift}px`);
    };

    const onScroll = () => {
      if (!cementTick) {
        cementTick = true;
        requestAnimationFrame(() => {
          updateCementParallax();
          cementTick = false;
        });
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const observeReveals = (nodes: NodeListOf<Element> | Element[]) => {
      Array.from(nodes || []).forEach((el, i) => {
        const htmlEl = el as HTMLElement;
        if (htmlEl.classList.contains("pour-card")) {
          htmlEl.style.transitionDelay = "0s";
        } else {
          htmlEl.style.transitionDelay = `${(i % 4) * 0.08}s`;
        }
        observer.observe(htmlEl);
      });
    };

    window.reedyObserveReveals = observeReveals;
    observeReveals(document.querySelectorAll(".reveal"));

    const widowTargets = document.querySelectorAll(
      "main p, main li, main h1, main h2, main h3, main h4, main .page-hero-sub, main .section-title, main .section-intro, main .section-label, main .res-intro-aside-title, main .res-intro-aside-note, main .res-promise-lead, main .res-promise-text, main .res-form-panel p, main .res-ledger-copy p, main .comm-method-name, main .comm-method-text, main .comm-tower-body p, main .comm-stat-value, main .contact-tiles p, main .contact-form-title, main .contact-panel-title, main .cta-band p"
    );

    const joinLastWords = (value: string) => value.replace(/(\S+)\s+(\S+)\s*$/u, "$1\u00A0$2");

    widowTargets.forEach((el) => {
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
          const parent = (node as Text).parentElement;
          if (parent && parent.closest("a, button, script, style")) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        },
      });

      const textNodes: Text[] = [];
      while (walker.nextNode()) textNodes.push(walker.currentNode as Text);
      const last = textNodes[textNodes.length - 1];
      if (!last || !last.nodeValue) return;
      last.nodeValue = joinLastWords(last.nodeValue);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
