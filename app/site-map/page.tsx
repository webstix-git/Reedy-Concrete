import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { footerLegal, footerServices } from "@/lib/company";
import { primaryNav } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Site Map | Reedy Concrete",
  description: "Site map for Reedy Concrete pages, services, and policies.",
};

export default function Page() {
  return (
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
  );
}
