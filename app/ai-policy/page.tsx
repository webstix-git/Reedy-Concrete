import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "AI Policy | Reedy Concrete",
  description: "How Reedy Concrete approaches AI-assisted content and website development.",
};

export default function Page() {
  return (
    <LegalPage title="AI Policy" subtitle="Our approach to AI-assisted content and website tools.">
      <p>
        {company.name} may use AI-assisted tools to help draft, organize, or refine website content
        and design. AI is used as a production aid, not as a substitute for company facts,
        experience, or project decisions.
      </p>

      <h2>Accuracy</h2>
      <p>
        Company information published on this site-including contact details, service areas,
        experience statements, equipment references, and service categories-is based on information
        provided by Reedy Concrete. We review website content for accuracy before publication.
      </p>

      <h2>What We Do Not Invent</h2>
      <p>
        We do not use AI to create fake testimonials, fabricated project results, unverified
        certifications, awards, or claims that are not supported by Reedy Concrete.
      </p>

      <h2>Customer Information</h2>
      <p>
        Inquiry details you share through this website are used for business communication. They are
        not used to train public AI models by Reedy Concrete.
      </p>

      <h2>Questions</h2>
      <p>
        Contact <a href={`mailto:${company.emails[0]}`}>{company.emails[0]}</a> or{" "}
        <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a> with questions about this
        policy.
      </p>
    </LegalPage>
  );
}
