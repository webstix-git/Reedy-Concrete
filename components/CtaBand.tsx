import Link from "next/link";
import { ReactNode } from "react";
import { company } from "@/lib/company";

type CtaBandProps = {
  title: ReactNode;
  copy: ReactNode;
  imageSrc: string;
  primaryHref?: string;
  primaryLabel?: string;
  showPhone?: boolean;
};

export default function CtaBand({
  title,
  copy,
  imageSrc,
  primaryHref = "/contact",
  primaryLabel = "Request a Quote",
  showPhone = true,
}: CtaBandProps) {
  return (
    <section className="cta-band">
      <div className="cta-band-media" aria-hidden="true">
        <img src={imageSrc} alt="" width={1600} height={900} />
      </div>
      <div className="cta-band-inner cta-band-inner--stack wrap reveal">
        <div className="cta-band-copy">
          <h2 className="section-title">{title}</h2>
          <p>{copy}</p>
        </div>
        <div className="actions actions--left">
          {primaryHref.endsWith(".doc") || primaryHref.endsWith(".pdf") ? (
            <a className="btn btn-primary" href={primaryHref} download>
              {primaryLabel}
            </a>
          ) : (
            <Link className="btn btn-primary" href={primaryHref}>
              {primaryLabel}
            </Link>
          )}
          {showPhone ? (
            <a className="btn btn-outline" href={`tel:${company.phoneTel}`}>
              {company.phoneDisplay}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
