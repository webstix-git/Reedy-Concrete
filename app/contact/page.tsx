import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact Reedy Concrete | Request a Quote",
  description:
    "Contact Reedy Concrete to discuss your residential, commercial, industrial, or agricultural concrete project.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        title="Contact"
        description="Talk with Reedy Concrete about your residential, commercial, industrial, or agricultural project. Call, email, or send a project inquiry."
        imageSrc="/assets/photos/contact-banner.jpg"
        ariaLabel="Contact"
        className="page-hero--banner-contact"
      />
      <Breadcrumb current="Contact" className="breadcrumb-strip--contact" />

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
                  <div className="social-icons">
                    <a
                      href={company.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a
                      href={company.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
