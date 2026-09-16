"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company } from "@/lib/company";
import { isActivePath, primaryNav } from "@/lib/nav";

function PhoneIcon() {
  return (
    <svg className="header-phone-icon" viewBox="0 0 24 24" aria-hidden="true" width={16} height={16}>
      <path
        fill="currentColor"
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
      />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setNavOpen(false);
    setScrolled(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.setProperty("--nav-h", scrolled ? "4.5rem" : "7.25rem");
  }, [scrolled]);

  const closeNav = () => setNavOpen(false);
  const headerSolid = scrolled;

  return (
    <header className={`site-header${headerSolid ? " scrolled" : ""}`} id="site-header">
      <div className="wrap-wide">
        <Link className="logo-link" href="/" aria-label={`${company.name} home`} onClick={closeNav}>
          <img src="/assets/reedy-logo.png" alt={company.legalName} width={220} height={70} />
        </Link>

        <div className="header-actions">
          <button
            className="nav-toggle"
            type="button"
            aria-label={navOpen ? "Close menu" : "Open menu"}
            aria-expanded={navOpen}
            aria-controls="primary-nav"
            onClick={() => setNavOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav id="primary-nav" className={`nav-links${navOpen ? " open" : ""}`} aria-label="Primary">
          <button
            type="button"
            className="nav-close"
            aria-label="Close menu"
            onClick={closeNav}
          >
            <span aria-hidden="true">×</span>
          </button>
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActivePath(pathname, item.href) ? "is-active" : undefined}
              onClick={closeNav}
            >
              {item.label}
            </Link>
          ))}
          <a className="header-phone header-phone--nav" href={`tel:${company.phoneTel}`} onClick={closeNav}>
            <PhoneIcon />
            <span>{company.phoneDisplay}</span>
          </a>
          <Link href="/contact" className="nav-cta" onClick={closeNav}>
            Request a Quote
          </Link>
        </nav>

        <div className="header-aside">
          <a className="header-phone header-phone--desktop" href={`tel:${company.phoneTel}`}>
            <PhoneIcon />
            <span>{company.phoneDisplay}</span>
          </a>
          <Link href="/contact" className="nav-cta nav-cta--desktop">
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
