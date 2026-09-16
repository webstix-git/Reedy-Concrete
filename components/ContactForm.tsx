"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/company";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("ready");
  };

  return (
    <form className="contact-form reveal" action="#" method="post" onSubmit={handleSubmit} noValidate={false}>
      <p className="form-note">
        Fields marked with an asterisk (<span className="req">*</span>) are required.
      </p>

      <div className="form-row">
        <div className="field">
          <label htmlFor="name">
            Name <span className="req">*</span>
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" autoComplete="organization" />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="email">
            Email <span className="req">*</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="phone">
            Phone <span className="req">*</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="project-type">
            Project Type <span className="req">*</span>
          </label>
          <select id="project-type" name="project-type" required defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
            <option value="Warehouse">Warehouse</option>
            <option value="Agricultural">Agricultural</option>
            <option value="Multi-Tenant">Multi-Tenant</option>
            <option value="Underground Parking">Underground Parking</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="project-location">
            Project Location <span className="req">*</span>
          </label>
          <input id="project-location" name="project-location" type="text" required />
        </div>
      </div>

      <div className="field">
        <label htmlFor="project-details">
          Project Details <span className="req">*</span>
        </label>
        <textarea
          id="project-details"
          name="project-details"
          required
          placeholder="Tell us about your timeline, location, and scope."
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Request a Quote
      </button>

      {status === "ready" ? (
        <p className="form-status" role="status">
          Online form delivery is not connected yet. Please call{" "}
          <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a> or email{" "}
          <a href={`mailto:${company.emails[0]}`}>{company.emails[0]}</a> or{" "}
          <a href={`mailto:${company.emails[1]}`}>{company.emails[1]}</a> to reach the team.
        </p>
      ) : null}
    </form>
  );
}
