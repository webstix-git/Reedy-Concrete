"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/company";

type FieldKey =
  | "name"
  | "email"
  | "phone"
  | "address"
  | "dateAvailable"
  | "signature"
  | "todaysDate";

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
        <path fill="currentColor" d="M11.15 9.4h1.7v5.2h-1.7V9.4zm0 6.5h1.7V18h-1.7v-2.1z" />
      </svg>
      <span>{message}</span>
    </p>
  );
}

function YesNoSelect({
  id,
  name,
  label,
}: {
  id: string;
  name: string;
  label: string;
}) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} defaultValue="">
        <option value="" disabled>
          Select…
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  );
}

export default function ApplicationForm() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const address = String(data.get("address") ?? "").trim();
    const dateAvailable = String(data.get("date-available") ?? "").trim();
    const signature = String(data.get("signature") ?? "").trim();
    const todaysDate = String(data.get("todays-date") ?? "").trim();

    const nextErrors: FieldErrors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) nextErrors.email = "Please enter a valid email address.";
    else if (!EMAIL_RE.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (!phone) nextErrors.phone = "Please enter your phone number.";
    if (!address) nextErrors.address = "Please enter your address.";
    if (!dateAvailable) nextErrors.dateAvailable = "Please enter the date you are available.";
    if (!signature) nextErrors.signature = "Please type your name as a signature.";
    if (!todaysDate) nextErrors.todaysDate = "Please enter today's date.";

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

      <h3 className="form-block-title">Applicant</h3>
      <div className="form-row">
        <div className={`field${errors.name ? " field--error" : ""}`}>
          <label htmlFor="app-name">
            Name <span className="req">*</span>
          </label>
          <input
            id="app-name"
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "app-name-error" : undefined}
            onChange={() => clearError("name")}
          />
          <span id="app-name-error">
            <ErrorMessage message={errors.name} />
          </span>
        </div>
        <div className={`field${errors.phone ? " field--error" : ""}`}>
          <label htmlFor="app-phone">
            Phone <span className="req">*</span>
          </label>
          <input
            id="app-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "app-phone-error" : undefined}
            onChange={() => clearError("phone")}
          />
          <span id="app-phone-error">
            <ErrorMessage message={errors.phone} />
          </span>
        </div>
      </div>

      <div className="form-row">
        <div className={`field${errors.email ? " field--error" : ""}`}>
          <label htmlFor="app-email">
            Email <span className="req">*</span>
          </label>
          <input
            id="app-email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "app-email-error" : undefined}
            onChange={() => clearError("email")}
          />
          <span id="app-email-error">
            <ErrorMessage message={errors.email} />
          </span>
        </div>
        <div className={`field${errors.dateAvailable ? " field--error" : ""}`}>
          <label htmlFor="date-available">
            Date Available <span className="req">*</span>
          </label>
          <input
            id="date-available"
            name="date-available"
            type="date"
            aria-invalid={Boolean(errors.dateAvailable)}
            aria-describedby={errors.dateAvailable ? "date-available-error" : undefined}
            onChange={() => clearError("dateAvailable")}
          />
          <span id="date-available-error">
            <ErrorMessage message={errors.dateAvailable} />
          </span>
        </div>
      </div>

      <div className={`field${errors.address ? " field--error" : ""}`}>
        <label htmlFor="app-address">
          Address <span className="req">*</span>
        </label>
        <input
          id="app-address"
          name="address"
          type="text"
          autoComplete="street-address"
          aria-invalid={Boolean(errors.address)}
          aria-describedby={errors.address ? "app-address-error" : undefined}
          onChange={() => clearError("address")}
        />
        <span id="app-address-error">
          <ErrorMessage message={errors.address} />
        </span>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="driver-license">Driver License #</label>
          <input id="driver-license" name="driver-license" type="text" />
        </div>
        <div className="field">
          <label htmlFor="accidents">Accidents / Violations</label>
          <input id="accidents" name="accidents" type="text" />
        </div>
      </div>

      <h3 className="form-block-title">Education</h3>
      <div className="form-row">
        <div className="field">
          <label htmlFor="high-school">High School</label>
          <input id="high-school" name="high-school" type="text" />
        </div>
        <YesNoSelect id="high-school-graduated" name="high-school-graduated" label="Graduated" />
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="tech-college">Tech / College</label>
          <input id="tech-college" name="tech-college" type="text" />
        </div>
        <YesNoSelect id="tech-college-graduated" name="tech-college-graduated" label="Graduated" />
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="armed-forces">Armed Forces</label>
          <input id="armed-forces" name="armed-forces" type="text" />
        </div>
        <div className="field">
          <label htmlFor="armed-forces-years">Years</label>
          <input id="armed-forces-years" name="armed-forces-years" type="text" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="reserves-guards">Reserves / Guards</label>
        <input id="reserves-guards" name="reserves-guards" type="text" />
      </div>

      {[1, 2, 3].map((n) => (
        <div key={n}>
          <h3 className="form-block-title">Employer {n}</h3>
          <div className="form-row">
            <div className="field">
              <label htmlFor={`employer-${n}-company`}>Company</label>
              <input id={`employer-${n}-company`} name={`employer-${n}-company`} type="text" />
            </div>
            <div className="field">
              <label htmlFor={`employer-${n}-phone`}>Phone</label>
              <input id={`employer-${n}-phone`} name={`employer-${n}-phone`} type="tel" />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor={`employer-${n}-address`}>Address</label>
              <input id={`employer-${n}-address`} name={`employer-${n}-address`} type="text" />
            </div>
            <div className="field">
              <label htmlFor={`employer-${n}-contact`}>Contact</label>
              <input id={`employer-${n}-contact`} name={`employer-${n}-contact`} type="text" />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor={`employer-${n}-from`}>Employed From</label>
              <input id={`employer-${n}-from`} name={`employer-${n}-from`} type="text" />
            </div>
            <div className="field">
              <label htmlFor={`employer-${n}-to`}>Employed To</label>
              <input id={`employer-${n}-to`} name={`employer-${n}-to`} type="text" />
            </div>
          </div>
          <div className="field">
            <label htmlFor={`employer-${n}-reason`}>Reason for Leaving</label>
            <input id={`employer-${n}-reason`} name={`employer-${n}-reason`} type="text" />
          </div>
          <div className="field">
            <label htmlFor={`employer-${n}-description`}>Job Description</label>
            <textarea id={`employer-${n}-description`} name={`employer-${n}-description`} />
          </div>
        </div>
      ))}

      <h3 className="form-block-title">Additional Information</h3>
      <div className="form-row">
        <YesNoSelect id="work-limitations" name="work-limitations" label="Any Work Limitations?" />
        <div className="field">
          <label htmlFor="work-limitations-explain">Explain</label>
          <input id="work-limitations-explain" name="work-limitations-explain" type="text" />
        </div>
      </div>
      <div className="form-row">
        <YesNoSelect id="convicted" name="convicted" label="Ever Been Convicted of a Crime?" />
        <div className="field">
          <label htmlFor="convicted-explain">Explain</label>
          <input id="convicted-explain" name="convicted-explain" type="text" />
        </div>
      </div>
      <div className="form-row">
        <YesNoSelect
          id="travel-overnight"
          name="travel-overnight"
          label="Able / Willing to travel out-of-town overnight during the work week?"
        />
        <div className="field">
          <label htmlFor="travel-overnight-why">If no, why?</label>
          <input id="travel-overnight-why" name="travel-overnight-why" type="text" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="desired-wage">Desired Wage</label>
        <input id="desired-wage" name="desired-wage" type="text" />
      </div>

      <h3 className="form-block-title">References</h3>
      {[1, 2, 3].map((n) => (
        <div className="form-row" key={n}>
          <div className="field">
            <label htmlFor={`reference-${n}-name`}>Name</label>
            <input id={`reference-${n}-name`} name={`reference-${n}-name`} type="text" />
          </div>
          <div className="field">
            <label htmlFor={`reference-${n}-phone`}>Phone</label>
            <input id={`reference-${n}-phone`} name={`reference-${n}-phone`} type="tel" />
          </div>
        </div>
      ))}

      <h3 className="form-block-title">Signature</h3>
      <div className="form-row">
        <div className={`field${errors.signature ? " field--error" : ""}`}>
          <label htmlFor="signature">
            Signature <span className="req">*</span>
          </label>
          <input
            id="signature"
            name="signature"
            type="text"
            autoComplete="name"
            placeholder="Type your full name"
            aria-invalid={Boolean(errors.signature)}
            aria-describedby={errors.signature ? "signature-error" : undefined}
            onChange={() => clearError("signature")}
          />
          <span id="signature-error">
            <ErrorMessage message={errors.signature} />
          </span>
        </div>
        <div className={`field${errors.todaysDate ? " field--error" : ""}`}>
          <label htmlFor="todays-date">
            Today&apos;s Date <span className="req">*</span>
          </label>
          <input
            id="todays-date"
            name="todays-date"
            type="date"
            aria-invalid={Boolean(errors.todaysDate)}
            aria-describedby={errors.todaysDate ? "todays-date-error" : undefined}
            onChange={() => clearError("todaysDate")}
          />
          <span id="todays-date-error">
            <ErrorMessage message={errors.todaysDate} />
          </span>
        </div>
      </div>

      <button className="btn btn-primary" type="submit">
        Submit Application
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
