import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LegalPage from "@/components/LegalPage";
import { company } from "@/lib/company";
import { pageGraph, pageMetadata, sitePages } from "@/lib/seo";

export const metadata = pageMetadata(sitePages.serviceIndex);

export default function Page() {
  return (
    <>
      <JsonLd data={pageGraph(sitePages.serviceIndex)} />
      <LegalPage
      title="Service Index"
      subtitle="A quick index of Reedy Concrete service categories across Wisconsin, Minnesota, and Iowa."
    >
      <h2>Services</h2>
      <ul>
        <li>
          <Link href="/services#foundations-and-flatwork">Foundations and flatwork for large-scale projects</Link>
        </li>
        <li>
          <Link href="/services#commercial">Commercial concrete</Link>
        </li>
        <li>
          <Link href="/services#industrial-and-warehouse">Industrial and warehouse</Link>
        </li>
        <li>
          <Link href="/services#agricultural">Agricultural concrete</Link>
        </li>
        <li>
          <Link href="/services#multi-tenant">Multi-tenant</Link>
        </li>
        <li>
          <Link href="/services#underground-parking">Underground parking</Link>
        </li>
      </ul>

      <h2>Technology Used on Projects</h2>
      <ul>
        <li>Trimble Robotic Stations</li>
        <li>Somero Laser Screeds</li>
      </ul>

      <h2>Service Area</h2>
      <p>{company.serviceArea.join(" · ")}</p>

      <p>
        Ready to discuss a project?{" "}
        <Link href="/contact-us">Request a Quote</Link> or call{" "}
        <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>.
      </p>
    </LegalPage>
    </>
  );
}
