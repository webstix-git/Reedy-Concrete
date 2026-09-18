import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Service Index | Reedy Concrete",
  description:
    "Index of Reedy Concrete residential, commercial, industrial, and agricultural concrete services.",
};

export default function Page() {
  return (
    <LegalPage
      title="Service Index"
      subtitle="A quick index of Reedy Concrete service categories across Wisconsin, Minnesota, and Iowa."
    >
      <h2>Residential</h2>
      <ul>
        <li>
          <Link href="/residential">Concrete foundations</Link>
        </li>
        <li>
          <Link href="/residential">Flatwork</Link>
        </li>
        <li>
          <Link href="/residential">Precision layout</Link>
        </li>
        <li>
          <Link href="/residential">Residential concrete construction</Link>
        </li>
      </ul>

      <h2>Commercial / Industrial / Agricultural</h2>
      <ul>
        <li>
          <Link href="/commercial">Foundations and flatwork for large-scale projects</Link>
        </li>
        <li>
          <Link href="/commercial">Commercial concrete</Link>
        </li>
        <li>
          <Link href="/commercial">Industrial and warehouse</Link>
        </li>
        <li>
          <Link href="/commercial">Agricultural concrete</Link>
        </li>
        <li>
          <Link href="/commercial">Multi-tenant</Link>
        </li>
        <li>
          <Link href="/commercial">Underground parking</Link>
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
        <Link href="/contact">Request a Quote</Link> or call{" "}
        <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>.
      </p>
    </LegalPage>
  );
}
