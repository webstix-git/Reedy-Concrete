import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";
import BackToTop from "@/components/BackToTop";
import "./globals.css";
import "./header.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Reedy Concrete | Concrete Construction in WI, MN & IA",
    template: "%s",
  },
  description:
    "Reedy Concrete provides experienced residential, commercial, industrial, and agricultural concrete construction throughout Wisconsin, Minnesota, and Iowa.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${oswald.variable} ${roboto.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <BackToTop />
        <SiteEffects />
      </body>
    </html>
  );
}
