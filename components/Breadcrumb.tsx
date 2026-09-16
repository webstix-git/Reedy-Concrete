import Link from "next/link";

type BreadcrumbProps = {
  current: string;
  className?: string;
};

export default function Breadcrumb({ current, className = "" }: BreadcrumbProps) {
  return (
    <div className={`breadcrumb-strip ${className}`.trim()}>
      <div className="wrap">
        <nav className="breadcrumb breadcrumb--strip" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="current">{current}</span>
        </nav>
      </div>
    </div>
  );
}
