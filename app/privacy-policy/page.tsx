import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Reedy Concrete",
  description: "Privacy policy for Reedy Concrete website visitors and inquiry contacts.",
};

export default function Page() {
  return (
    <LegalPage title="Privacy Policy" subtitle="How Reedy Concrete handles information shared through this website.">
      <p>
        This Privacy Policy describes how {company.legalName} (“Reedy Concrete,” “we,” “us”) handles
        information collected through this website and related inquiry channels.
      </p>

      <h2>Information We Collect</h2>
      <p>
        When you contact us or submit an inquiry form, you may provide your name, company, email
        address, phone number, project location, project type, and project details. We may also
        collect basic technical information such as browser type and pages visited through standard
        website hosting logs.
      </p>

      <h2>How We Use Information</h2>
      <p>
        We use contact and project information to respond to inquiries, discuss potential work, and
        communicate about residential, commercial, industrial, or agricultural concrete projects.
        We do not sell personal information.
      </p>

      <h2>Sharing</h2>
      <p>
        We may share information with service providers who help us operate this website or
        communicate with customers, and when required by law. Verified social links on this site
        lead to third-party platforms governed by their own policies.
      </p>

      <h2>Data Retention</h2>
      <p>
        Inquiry information is retained as needed to respond to requests and maintain ordinary
        business records.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be directed to{" "}
        <a href={`mailto:${company.emails[0]}`}>{company.emails[0]}</a>,{" "}
        <a href={`mailto:${company.emails[1]}`}>{company.emails[1]}</a>, or{" "}
        <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>.
      </p>
    </LegalPage>
  );
}
