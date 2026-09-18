import Link from "next/link";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import { company } from "@/lib/company";

const areaHighlights = [
  { name: "Wisconsin", label: "Wisconsin" },
  { name: "Minnesota", label: "Minnesota" },
  { name: "Iowa", label: "Iowa" },
];

type ServiceAreaSectionProps = {
  className?: string;
  titleId?: string;
  showAddress?: boolean;
  showCta?: boolean;
  id?: string;
};

export default function ServiceAreaSection({
  className = "",
  titleId = "area-title",
  showAddress = false,
  showCta = true,
  id,
}: ServiceAreaSectionProps) {
  return (
    <section
      className={`service-area-section service-area-section--split ${className}`.trim()}
      id={id}
      aria-labelledby={titleId}
    >
      <div className="wrap">
        <div className="service-area-split reveal">
          <ServiceAreaMap />
          <div className="service-area-copy">
            <p className="section-label">
              <span className="accent">Service Area</span>
            </p>
            <h2 id={titleId} className="section-title">
              Where We <span className="accent">Work</span>
            </h2>
            <p>
              {showAddress ? (
                <>
                  From our Galesville, Wisconsin location at {company.addressLines[0]},{" "}
                  {company.addressLines[1]}, we take on work across the Midwest, serving customers in:
                </>
              ) : (
                <>
                  Reedy Concrete provides commercial, industrial, agricultural, and residential
                  concrete construction across the Midwest, serving customers throughout:
                </>
              )}
            </p>
            <ul className="service-area-locations">
              {areaHighlights.map((item) => (
                <li key={item.name}>
                  <img src="/assets/icon-location-pin.svg" alt="" width={20} height={20} />
                  <strong>{item.label}</strong>
                </li>
              ))}
            </ul>
            <p className="service-area-note-copy">
              {showAddress
                ? "We serve Wisconsin, Minnesota, and Iowa. Contact us to discuss your project."
                : "Based in Galesville, Wisconsin, we serve Wisconsin, Minnesota, and Iowa. Contact us to discuss your project."}
            </p>
            {showCta ? (
              <div className="section-actions">
                <Link className="btn btn-outline btn-outline--dark" href="/contact">
                  Contact Us
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
