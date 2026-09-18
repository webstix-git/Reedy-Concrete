(function () {
  const header = document.getElementById("site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");

  if (header) {
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
      header.classList.toggle("scrolled", window.scrollY > 40);
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
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

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

  window.reedyObserveReveals = (nodes) => {
    Array.from(nodes || []).forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 0.08}s`;
      observer.observe(el);
    });
  };

  window.reedyObserveReveals(document.querySelectorAll(".reveal"));

  // Keep final words from sitting alone on a line across inside pages
  const widowTargets = document.querySelectorAll(
    "main p, main li, main h1, main h2, main h3, main h4, main .page-hero-sub, main .section-title, main .section-intro, main .section-label, main .res-intro-aside-title, main .res-intro-aside-note, main .res-promise-lead, main .res-promise-text, main .res-form-panel p, main .res-ledger-copy p, main .comm-method-name, main .comm-method-text, main .comm-tower-body p, main .comm-stat-value, main .contact-tiles p, main .contact-form-title, main .contact-panel-title, main .cta-band p"
  );

  const joinLastWords = (value) =>
    value.replace(/(\S+)\s+(\S+)\s*$/u, "$1\u00A0$2");

  widowTargets.forEach((el) => {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (node.parentElement && node.parentElement.closest("a, button, script, style")) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    const last = textNodes[textNodes.length - 1];
    if (!last) return;
    last.nodeValue = joinLastWords(last.nodeValue);
  });
})();

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  alert("Thank you. Your inquiry has been prepared. Please email prentice@reedyconcrete.com or tyler@reedyconcrete.com, or call (608) 582-4335 to reach the team.");
  form.reset();
  return false;
}
