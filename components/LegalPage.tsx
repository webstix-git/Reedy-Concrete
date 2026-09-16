import Link from "next/link";
import { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function LegalPage({ title, subtitle, children }: LegalPageProps) {
  return (
    <main className="legal-main">
      <section className="page-hero page-hero--banner page-hero--photo page-hero--banner-legal" aria-label={title}>
        <div className="page-hero-media" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="banner-build"
            src="/assets/photos/legal-banner.jpg"
            alt=""
            width={1600}
            height={900}
          />
        </div>
        <div className="wrap page-hero-legal-inner">
          <h1>{title}</h1>
          {subtitle ? <p className="page-hero-sub">{subtitle}</p> : null}
        </div>
      </section>
      <section className="legal-page">
        <div className="wrap">
          <div className="legal-content prose reveal">
            {children}
            <p className="legal-back">
              <Link className="btn btn-outline btn-outline--dark" href="/">
                Back to Home
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
