import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { company } from "@/lib/company";
import { pageGraph, pageMetadata, sitePages } from "@/lib/seo";

export const metadata = pageMetadata(sitePages.careerThankYou);

export default function Page() {
  return (
    <main>
      <JsonLd data={pageGraph(sitePages.careerThankYou)} />
      <PageHero
        title="Thank You"
        description="We received your application and will be in touch shortly."
        imageSrc="/assets/photos/reedy-pump-boom.jpg"
        ariaLabel="Application received"
        className="page-hero--banner-about"
      />
      <Breadcrumb current="Thank You" />

      <section className="legal-page">
        <div className="wrap">
          <div className="legal-content prose reveal">
            <p>
              Thanks for applying to work at {company.name}. We will review your application and
              follow up by phone or email.
            </p>
            <p>
              If you need to reach us sooner, call{" "}
              <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a> or email{" "}
              <a href={`mailto:${company.emails[0]}`}>{company.emails[0]}</a>.
            </p>
            <p className="legal-back">
              <Link className="btn btn-primary" href="/careers">
                Back to Careers
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
