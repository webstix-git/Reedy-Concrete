import Link from "next/link";
import { company, footerLegal } from "@/lib/company";
import { footerMenu } from "@/lib/nav";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <hr className="section-divider" aria-hidden="true" />
      <footer className="site-footer">
        <div className="wrap footer-grid footer-grid--site">
          <div className="footer-brand footer-col">
            <img
              className="footer-logo"
              src="/assets/reedy-logo.png"
              alt={company.legalName}
              width={220}
              height={70}
            />
            <p className="tagline">{company.tagline}</p>
            <p className="footer-brand-copy">
              More than 50 years of family-owned concrete construction across Wisconsin, Minnesota,
              and Iowa, with experienced crews and work you can count on.
            </p>
            <div className="footer-social">
              <p className="footer-social-label">Follow us on:</p>
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

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {footerMenu.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <img className="contact-icon" src="/assets/icon-location.png" alt="" width={17} height={17} />
                <a href={company.mapsUrl} target="_blank" rel="noopener noreferrer">
                  {company.addressLines[0]}
                  <br />
                  {company.addressLines[1]}
                </a>
              </li>
              <li>
                <img className="contact-icon" src="/assets/icon-phone.png" alt="" width={17} height={17} />
                <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
              </li>
              <li>
                <img className="contact-icon" src="/assets/icon-mail.png" alt="" width={17} height={17} />
                <span>
                  {company.emails.map((email) => (
                    <span key={email}>
                      <a href={`mailto:${email}`}>{email}</a>
                      <br />
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="wrap footer-bottom-inner footer-bottom-inner--inline">
            <p className="footer-copyright-line">
              <span>
                &copy; {year} {company.legalName.replace(/\.$/, "")}. All rights reserved.
              </span>
              {footerLegal.map((item) => (
                <span key={item.href} className="footer-copyright-sep">
                  {" | "}
                  <Link href={item.href}>{item.label}</Link>
                </span>
              ))}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
