import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { company } from "@/lib/company";
import { pageGraph, pageMetadata, sitePages } from "@/lib/seo";

export const metadata = pageMetadata(sitePages.thankYou);

export default function Page() {
  return (
    <main>
      <JsonLd data={pageGraph(sitePages.thankYou)} />
      <PageHero
        title="Thank You"
        description="We received your message and will be in touch shortly."
        imageSrc="/assets/photos/contact-banner.jpg"
        ariaLabel="Thank You"
        className="page-hero--banner-contact"
      />
      <Breadcrumb current="Thank You" className="breadcrumb-strip--contact" />

      <section className="legal-page">
        <div className="wrap">
          <div className="legal-content prose reveal">
            <p>
              Thanks for contacting {company.name}. A member of our team will review your project
              details and follow up by phone or email.
            </p>
            <p>
              If you need to reach us sooner, call{" "}
              <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a> or email{" "}
              <a href={`mailto:${company.emails[0]}`}>{company.emails[0]}</a>.
            </p>
            <p className="legal-back">
              <Link className="btn btn-primary" href="/">
                Back to Home
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
