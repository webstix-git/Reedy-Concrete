"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/company";

type FieldKey = "name" | "email" | "phone" | "projectType" | "projectLocation" | "projectDetails";

type FieldErrors = Partial<Record<FieldKey, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ErrorMessage({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="field-error" role="alert">
      <svg className="field-error-icon" viewBox="0 0 24 24" aria-hidden="true" width={14} height={14}>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
          d="M12 3.2 2.8 20.2h18.4L12 3.2z"
        />
        <path
          fill="currentColor"
          d="M11.15 9.4h1.7v5.2h-1.7V9.4zm0 6.5h1.7V18h-1.7v-2.1z"
        />
      </svg>
      <span>{message}</span>
    </p>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const projectType = String(data.get("project-type") ?? "").trim();
    const projectLocation = String(data.get("project-location") ?? "").trim();
    const projectDetails = String(data.get("project-details") ?? "").trim();

    const nextErrors: FieldErrors = {};
    if (!name) nextErrors.name = "Please tell us your name.";
    if (!email) nextErrors.email = "Please enter a valid email address.";
    else if (!EMAIL_RE.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (!phone) nextErrors.phone = "Please enter your phone number.";
    if (!projectType) nextErrors.projectType = "Please select a project type.";
    if (!projectLocation) nextErrors.projectLocation = "Please enter the project location.";
    if (!projectDetails) nextErrors.projectDetails = "Please tell us about your project.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("ready");
  };

  const clearError = (key: FieldKey) => {
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  return (
    <form className="contact-form reveal" action="#" method="post" onSubmit={handleSubmit} noValidate>
      <p className="form-note">
        Fields marked with an asterisk (<span className="req">*</span>) are required.
      </p>

      <div className="form-row">
        <div className={`field${errors.name ? " field--error" : ""}`}>
          <label htmlFor="name">
            Name <span className="req">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            onChange={() => clearError("name")}
          />
          <span id="name-error">
            <ErrorMessage message={errors.name} />
          </span>
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" autoComplete="organization" />
        </div>
      </div>

      <div className="form-row">
        <div className={`field${errors.email ? " field--error" : ""}`}>
          <label htmlFor="email">
            Email <span className="req">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            onChange={() => clearError("email")}
          />
          <span id="email-error">
            <ErrorMessage message={errors.email} />
          </span>
        </div>
        <div className={`field${errors.phone ? " field--error" : ""}`}>
          <label htmlFor="phone">
            Phone <span className="req">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            onChange={() => clearError("phone")}
          />
          <span id="phone-error">
            <ErrorMessage message={errors.phone} />
          </span>
        </div>
      </div>

      <div className="form-row">
        <div className={`field${errors.projectType ? " field--error" : ""}`}>
          <label htmlFor="project-type">
            Project Type <span className="req">*</span>
          </label>
          <select
            id="project-type"
            name="project-type"
            defaultValue=""
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? "project-type-error" : undefined}
            onChange={() => clearError("projectType")}
          >
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
          <span id="project-type-error">
            <ErrorMessage message={errors.projectType} />
          </span>
        </div>
        <div className={`field${errors.projectLocation ? " field--error" : ""}`}>
          <label htmlFor="project-location">
            Project Location <span className="req">*</span>
          </label>
          <input
            id="project-location"
            name="project-location"
            type="text"
            aria-invalid={Boolean(errors.projectLocation)}
            aria-describedby={errors.projectLocation ? "project-location-error" : undefined}
            onChange={() => clearError("projectLocation")}
          />
          <span id="project-location-error">
            <ErrorMessage message={errors.projectLocation} />
          </span>
        </div>
      </div>

      <div className={`field${errors.projectDetails ? " field--error" : ""}`}>
        <label htmlFor="project-details">
          Project Details <span className="req">*</span>
        </label>
        <textarea
          id="project-details"
          name="project-details"
          placeholder="Tell us about your timeline, location, and scope."
          aria-invalid={Boolean(errors.projectDetails)}
          aria-describedby={errors.projectDetails ? "project-details-error" : undefined}
          onChange={() => clearError("projectDetails")}
        />
        <span id="project-details-error">
          <ErrorMessage message={errors.projectDetails} />
        </span>
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
