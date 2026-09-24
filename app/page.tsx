import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import HomeGallery from "@/components/HomeGallery";
import ServiceAreaSection from "@/components/ServiceAreaSection";

export const metadata: Metadata = {
  title: "Reedy Concrete | Concrete Construction in WI, MN & IA",
  description:
    "For more than 50 years, Reedy Concrete has built commercial, industrial, agricultural, and residential concrete across Wisconsin, Minnesota, and Iowa.",
};

const showcaseImages = [
  { src: "/assets/photos/aerial-foundation.jpg", alt: "Aerial view of a large-scale concrete foundation" },
  { src: "/assets/photos/gallery-apartment.jpg", alt: "Multi-story commercial building under construction with concrete site work" },
  { src: "/assets/photos/agricultural-silos-slab.jpg", alt: "Agricultural concrete slab with grain silos and elevator" },
  { src: "/assets/photos/residential.jpg", alt: "Residential concrete foundation work" },
  { src: "/assets/photos/commercial.jpg", alt: "Commercial concrete construction project" },
  { src: "/assets/photos/gallery-pool.jpg", alt: "Indoor swimming pool with concrete deck and finishes" },
  { src: "/assets/photos/what-3.jpg", alt: "Industrial concrete floor construction" },
  { src: "/assets/photos/what-1.jpg", alt: "Concrete pour in progress" },
  { src: "/assets/photos/about.jpg", alt: "Precision layout on a concrete project" },
  { src: "/assets/photos/family.jpg", alt: "Reedy Concrete work truck on a residential jobsite" },
  { src: "/assets/photos/cta-home.jpg", alt: "Aerial view of a concrete pour in progress" },
  { src: "/assets/photos/about-tech.jpg", alt: "Crew finishing concrete flatwork" },
  { src: "/assets/photos/res-work-1.jpg", alt: "Residential concrete foundation walls" },
  { src: "/assets/photos/comm-work-1.jpg", alt: "Commercial concrete project in progress" },
  { src: "/assets/photos/what-2.jpg", alt: "Concrete slab and formwork on site" },
  { src: "/assets/photos/gallery-warehouse-floor.jpg", alt: "Crew finishing a large warehouse concrete floor" },
  { src: "/assets/photos/gallery-ag-silo-forms.jpg", alt: "Circular agricultural foundation forms beside grain silos" },
  { src: "/assets/photos/gallery-reedy-truck.jpg", alt: "Reedy Concrete truck at a jobsite" },
  { src: "/assets/photos/gallery-footing-rebar.jpg", alt: "Crew placing rebar in a long concrete footing" },
  { src: "/assets/photos/gallery-pump-boom.jpg", alt: "Reedy Concrete pump boom against a blue sky" },
  { src: "/assets/photos/gallery-foundation-walls.jpg", alt: "Aerial view of concrete foundation walls" },
  { src: "/assets/photos/gallery-footing-layout.jpg", alt: "Crew laying out footings on a large jobsite" },
  { src: "/assets/photos/gallery-slab-pour.jpg", alt: "Concrete pump placing a large reinforced slab" },
  { src: "/assets/photos/gallery-power-trowel.jpg", alt: "Reedy Concrete crew member finishing a slab with a power trowel" },
  { src: "/assets/photos/gallery-flatwork-finish.jpg", alt: "Crew finishing concrete flatwork beside a brick building" },
  { src: "/assets/photos/gallery-kwik-star-footings.jpg", alt: "Concrete pump and footings on a large commercial jobsite" },
  { src: "/assets/photos/gallery-ag-barn.jpg", alt: "Agricultural barn interior with concrete alley and stalls" },
  { src: "/assets/photos/gallery-pump-truck.jpg", alt: "Concrete pump truck set up on a jobsite" },
];

export default function Page() {
  return (
    <main>
      <section id="home" className="hero" aria-label="Home">
        <div className="hero-media" aria-hidden="true">
          <img src="/assets/photos/hero.jpg" alt="" width={1024} height={768} decoding="sync" />
        </div>
        <div className="wrap-wide">
          <div className="hero-content">
            <h1>
              <span className="line line--hero-lead">50 Years of Experience.</span>
              <span className="line line--hero-accent">
                <span className="accent">Concrete</span>
              </span>
              <span className="line line--hero-tail">Built to Last.</span>
            </h1>
            <p className="hero-lead">
              For more than 50 years, Reedy Concrete has built commercial, industrial,
              agricultural, and residential concrete across Wisconsin, Minnesota, and Iowa.
            </p>
            <div className="hero-actions hero-actions--single">
              <a className="btn btn-outline hero-btn-outline" href="/services">
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="overview" id="services" aria-labelledby="services-title">
        <div className="wrap">
          <p className="section-label reveal">What We Pour</p>
          <h2 id="services-title" className="section-title reveal">
            One standard, every <span className="accent">sector</span>
          </h2>
          <p className="section-intro reveal">
            Foundations, footings, and precise flatwork for large commercial, industrial,
            warehouse, agricultural, multi-tenant, and underground parking projects.
          </p>
          <div className="pour-grid">
            <Link className="pour-card reveal" href="/services#foundations-and-flatwork">
              <img
                src="/assets/photos/aerial-foundation.jpg"
                alt="Aerial view of a large-scale concrete foundation"
                width={900}
                height={1200}
              />
              <div className="pour-card-copy">
                <h3>Foundations and Flatwork</h3>
                <p>
                  Foundations and precise flatwork
                  <br />
                  for large-scale projects.
                </p>
              </div>
            </Link>
            <Link className="pour-card reveal" href="/services#commercial">
              <img
                src="/assets/photos/commercial.jpg"
                alt="Commercial concrete construction project"
                width={900}
                height={1200}
              />
              <div className="pour-card-copy">
                <h3>Commercial</h3>
                <p>
                  Concrete construction
                  <br />
                  for commercial projects.
                </p>
              </div>
            </Link>
            <Link className="pour-card reveal" href="/services#industrial-and-warehouse">
              <img
                src="/assets/photos/commercial-floor-finish.jpg"
                alt="Industrial and warehouse concrete floor finishing"
                width={900}
                height={1200}
              />
              <div className="pour-card-copy">
                <h3>Industrial and Warehouse</h3>
                <p>
                  Industrial and warehouse
                  <br />
                  concrete construction.
                </p>
              </div>
            </Link>
            <Link className="pour-card reveal" href="/services#agricultural">
              <img
                src="/assets/photos/agricultural.jpg"
                alt="Agricultural concrete foundation walls on a jobsite"
                width={900}
                height={1200}
              />
              <div className="pour-card-copy">
                <h3>Agricultural</h3>
                <p>
                  Agricultural concrete
                  <br />
                  built for demanding use.
                </p>
              </div>
            </Link>
            <Link className="pour-card reveal" href="/services#multi-tenant">
              <img
                src="/assets/photos/gallery-apartment.jpg"
                alt="Multi-tenant building with concrete site work"
                width={900}
                height={1200}
              />
              <div className="pour-card-copy">
                <h3>Multi-Tenant</h3>
                <p>
                  Concrete construction
                  <br />
                  for multi-tenant projects.
                </p>
              </div>
            </Link>
            <Link className="pour-card reveal" href="/services#underground-parking">
              <img
                src="/assets/photos/underground-parking-structure.jpg"
                alt="Underground parking structure with concrete columns, slab, and ceiling"
                width={900}
                height={1200}
              />
              <div className="pour-card-copy">
                <h3>Underground Parking</h3>
                <p>
                  Concrete construction
                  <br />
                  for underground parking.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="why-split" id="why" aria-labelledby="why-title">
        <div className="why-split-media reveal">
          <img
            src="/assets/photos/why-reedy.jpg"
            alt="Crew pouring and finishing concrete beside equipment on a jobsite"
            width={1400}
            height={933}
          />
          <div className="why-split-badge">
            <strong>50 Years</strong>
            <span>Galesville, Wisconsin</span>
          </div>
        </div>
        <div className="why-split-copy reveal">
          <p className="section-label">Why Reedy</p>
          <h2 id="why-title" className="section-title">
            Multiple Generations,
            <br />
            One <span className="accent">Crew</span>
          </h2>
          <p>
            Family-owned in Galesville, Wisconsin, Reedy Concrete is built on people who stay.
            Supervisors with 20 to 35 years at the company lead four field crews, so the standard
            holds from one job to the next.
          </p>
          <blockquote className="why-split-quote">
            We build our reputation on three simple promises: reliable service, competitive pricing,
            and finishing every job on time.
          </blockquote>
          <Link className="btn btn-outline" href="/contact">
            Request a Quote
          </Link>
        </div>
      </section>

      <section className="tech site-tech site-tech--light site-tech--regular" id="technology" aria-labelledby="tech-title">
        <div className="wrap">
          <div className="tech-inner">
            <div className="tech-copy reveal">
              <p className="section-label">
                <span className="accent">Technology</span>
              </p>
              <h2 id="tech-title" className="section-title">
                Modern Technology.{" "}
                <span className="accent">Proven Experience.</span>
              </h2>
              <p>
                We pair more than 50 years in the field with Trimble Robotic Stations and Somero
                Laser Screeds, so layout and finishing stay accurate.
              </p>
              <ul className="tech-list tech-list--spaced">
                <li>
                  <strong>Trimble Robotic Stations</strong>
                  Precise layout and measurement on complex pours and critical alignments.
                </li>
                <li>
                  <strong>Somero Laser Screeds</strong>
                  Precise flatwork and finishing for level, consistent surfaces.
                </li>
              </ul>
            </div>
            <div className="tech-visual">
              <img
                src="/assets/photos/tech.jpg"
                alt="Reedy Concrete crew finishing a concrete pour"
                width={1400}
                height={933}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="home-gallery work-showcase" id="work" aria-labelledby="work-title">
        <div className="wrap">
          <div className="home-gallery-head home-gallery-head--stack reveal">
            <div>
              <p className="section-label">Gallery</p>
              <h2 id="work-title" className="section-title">
                Built for the <span className="accent">Projects That Matter</span>
              </h2>
            </div>
          </div>
          <HomeGallery images={showcaseImages} initialCount={5} layout="mosaic" />
        </div>
      </section>

      <section className="family-split" id="family" aria-labelledby="family-title">
        <div className="wrap">
          <div className="family-split-grid reveal">
            <div className="family-split-copy">
              <p className="section-label">Family-Owned</p>
              <h2 id="family-title" className="section-title">
                <span className="line">Built on Experience.</span>
                <span className="line accent">Driven by Family.</span>
              </h2>
              <p>
                For more than 50 years, Reedy Concrete has earned its name through experienced
                crews, careful workmanship, and dependable service. The Reedy family still leads
                the company, and the standard on every job is the same: do the work right.
              </p>
              <div className="section-actions family-split-actions">
                <Link className="btn btn-outline btn-outline--dark" href="/about">
                  Learn About Reedy Concrete
                </Link>
              </div>
            </div>
            <div className="family-split-media">
              <img
                className="family-owned-photo"
                src="/assets/photos/family-owned.jpg"
                alt="Reedy Concrete Construction, Inc. hard hat on a chrome hood ornament"
                width={1100}
                height={1467}
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceAreaSection id="service-area" />

      <CtaBand
        title={
          <>
            Let&apos;s Build Something That <span className="accent">Lasts</span>.
          </>
        }
        copy="Have a project coming up? Talk with Reedy Concrete about commercial, industrial, agricultural, or residential concrete."
        imageSrc="/assets/photos/cta-home.jpg"
      />
    </main>
  );
}
