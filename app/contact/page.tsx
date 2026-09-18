import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact Us | Reedy Concrete",
  description:
    "Contact Reedy Concrete to discuss commercial, industrial, agricultural, or residential concrete construction across Wisconsin, Minnesota, and Iowa.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        title="Contact Us"
        description="Talk with Reedy Concrete about your next project. Call, email, or send a project inquiry."
        imageSrc="/assets/photos/contact-banner.jpg"
        ariaLabel="Contact Us"
        className="page-hero--banner-contact"
      />
      <Breadcrumb current="Contact Us" className="breadcrumb-strip--contact" />

      <section className="contact-page">
        <div className="wrap">
          <div className="contact-layout">
            <ContactForm />

            <aside className="contact-info-card reveal" aria-label="Contact details">
              <div className="contact-info-row">
                <img className="contact-info-icon" src="/assets/icon-phone.png" alt="" width={22} height={22} />
                <div>
                  <h3>Phone</h3>
                  <p>
                    <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
                  </p>
                </div>
              </div>
              <div className="contact-info-row">
                <img className="contact-info-icon" src="/assets/icon-mail.png" alt="" width={22} height={22} />
                <div>
                  <h3>Email</h3>
                  {company.emails.map((email) => (
                    <p key={email}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </p>
                  ))}
                </div>
              </div>
              <div className="contact-info-row">
                <img className="contact-info-icon" src="/assets/icon-location.png" alt="" width={22} height={22} />
                <div>
                  <h3>Office Address</h3>
                  <p>
                    <a href={company.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {company.addressLines[0]}
                      <br />
                      {company.addressLines[1]}
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-info-row contact-info-row--social">
                <div>
                  <h3>Connect</h3>
                  <div className="footer-social contact-info-social">
                    <a
                      href={company.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M14 13.5h2.5l.5-3H14V8.5c0-.9.3-1.5 1.6-1.5H17V4.1C16.4 4 15.5 4 14.5 4 12.1 4 10.5 5.5 10.5 8.2V10.5H8v3h2.5V20h3.5v-6.5z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ServiceAreaSection
        className="service-area-section--white"
        titleId="contact-area-title"
        showAddress
        showCta={false}
      />
    </main>
  );
}
