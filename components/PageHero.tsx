import { ReactNode } from "react";

type PageHeroProps = {
  /** Section name shown in red */
  title: ReactNode;
  /** Two-line page description under the section name */
  description?: ReactNode;
  /** @deprecated Prefer `description` */
  subtitle?: ReactNode;
  imageSrc?: string;
  ariaLabel?: string;
  className?: string;
};

export default function PageHero({
  title,
  description,
  subtitle,
  imageSrc,
  ariaLabel,
  className = "",
}: PageHeroProps) {
  const copy = description ?? subtitle;
  const hasMedia = Boolean(imageSrc);

  return (
    <section
      className={`page-hero page-hero--banner${hasMedia ? " page-hero--photo" : ""} ${className}`.trim()}
      aria-label={ariaLabel}
    >
      {hasMedia ? (
        <div className="page-hero-media" aria-hidden="true">
          <img className="banner-build" src={imageSrc} alt="" width={1600} height={900} />
        </div>
      ) : null}
      <div className="wrap">
        <h1>{title}</h1>
        {copy ? <p className="page-hero-sub">{copy}</p> : null}
      </div>
    </section>
  );
}
