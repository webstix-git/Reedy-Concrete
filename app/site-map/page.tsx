import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LegalPage from "@/components/LegalPage";
import { footerLegal, footerServices } from "@/lib/company";
import { primaryNav } from "@/lib/nav";
import { pageGraph, pageMetadata, sitePages } from "@/lib/seo";

export const metadata = pageMetadata(sitePages.siteMap);

export default function Page() {
  return (
    <>
      <JsonLd data={pageGraph(sitePages.siteMap)} />
      <LegalPage title="Site Map" subtitle="Find pages across the Reedy Concrete website.">
      <h2>Main Pages</h2>
      <ul>
        {primaryNav.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <h2>Services</h2>
      <ul>
        {footerServices.map((item) => (
          <li key={`${item.href}-${item.label}`}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <h2>Policies &amp; Indexes</h2>
      <ul>
        {footerLegal.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </LegalPage>
    </>
  );
}
