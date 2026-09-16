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
              Family-owned concrete construction serving Wisconsin, Minnesota, and Iowa with experienced
              crews and work you can count on.
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
              <a
                href={company.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S.02 4.88.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.5h4.56V23H.22V8.5zM8.34 8.5h4.37v1.98h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7V23h-4.56v-6.7c0-1.6-.03-3.65-2.22-3.65-2.23 0-2.57 1.74-2.57 3.54V23H8.34V8.5z" />
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
