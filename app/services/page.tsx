import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import ServiceAreaSection from "@/components/ServiceAreaSection";

export const metadata: Metadata = {
  title: "Services | Reedy Concrete",
  description:
    "Foundations, footings, and precise flatwork for commercial, industrial, warehouse, agricultural, multi-tenant, and underground parking projects across Wisconsin, Minnesota, and Iowa.",
};

const services = [
  {
    id: "foundations-and-flatwork",
    title: "Foundations and Flatwork",
    heading: (
      <>
        Foundations and <span className="accent">Flatwork</span>
      </>
    ),
    summary: "Foundations, footings, and precise flatwork for large projects.",
    image: "/assets/photos/aerial-foundation.jpg",
    alt: "Aerial view of a large-scale concrete foundation",
    copy: "We build large-scale foundations, footings, and flatwork to the drawings and the schedule. Trained crews, Trimble Robotic Stations, and Somero Laser Screeds keep layout and finishing accurate on complex work.",
  },
  {
    id: "commercial",
    title: "Commercial",
    heading: (
      <>
        <span className="accent">Commercial</span> Concrete
      </>
    ),
    summary: "Commercial concrete for projects that have to stay on spec and on schedule.",
    image: "/assets/photos/commercial.jpg",
    alt: "Commercial concrete construction project",
    copy: "Commercial concrete is a core part of our work across Wisconsin, Minnesota, and Iowa. As a family-owned contractor, we take on demanding projects with careful workmanship, competitive pricing, and a record of finishing on time.",
  },
  {
    id: "industrial-and-warehouse",
    title: "Industrial and Warehouse",
    heading: (
      <>
        Industrial and <span className="accent">Warehouse</span>
      </>
    ),
    summary: "Industrial and warehouse concrete built for flatness, capacity, and schedule.",
    image: "/assets/photos/commercial-floor-finish.jpg",
    alt: "Industrial and warehouse concrete floor finishing",
    copy: "Industrial and warehouse floors need capacity, flatness, and a crew that can hold the schedule. Somero Laser Screeds and Trimble Robotic Stations support that work. Four field crews, led by supervisors with 20 to 35 years on the job, handle projects at this scale.",
  },
  {
    id: "agricultural",
    title: "Agricultural",
    heading: (
      <>
        <span className="accent">Agricultural</span> Concrete
      </>
    ),
    summary: "Agricultural concrete built for hard use and a long service life.",
    image: "/assets/photos/agricultural.jpg",
    alt: "Agricultural concrete foundation walls on a jobsite",
    copy: "Agricultural concrete gets the same crews and the same standard as our commercial and industrial work. From Galesville, we serve farm and agribusiness projects throughout Wisconsin, Minnesota, and Iowa.",
  },
  {
    id: "multi-tenant",
    title: "Multi-Tenant",
    heading: (
      <>
        <span className="accent">Multi-Tenant</span> Projects
      </>
    ),
    summary: "Foundations and flatwork for multi-tenant buildings.",
    image: "/assets/photos/gallery-apartment.jpg",
    alt: "Multi-tenant building with concrete site work",
    copy: "Multi-tenant projects need foundations and flatwork that stay on spec while the rest of the building moves. Experienced crews and the right equipment keep the concrete on schedule.",
  },
  {
    id: "underground-parking",
    title: "Underground Parking",
    heading: (
      <>
        Underground <span className="accent">Parking</span>
      </>
    ),
    summary: "Underground parking concrete built to a tight specification.",
    image: "/assets/photos/underground-parking.jpg",
    alt: "Finished underground parking garage with concrete columns and slab",
    copy: "Underground parking calls for precise layout and concrete that meets a tight specification. We bring more than 50 years in the field, Trimble Robotic Stations, and Somero Laser Screeds to that work.",
  },
];

export default function Page() {
  return (
    <main className="services-page">
      <PageHero
        title="Services"
        description="Foundations, footings, and precise flatwork for commercial, industrial, warehouse, agricultural, multi-tenant, and underground parking projects across Wisconsin, Minnesota, and Iowa."
        imageSrc="/assets/photos/reedy-pump-boom.jpg"
        ariaLabel="Services"
        className="page-hero--banner-service"
      />
      <Breadcrumb current="Services" />

      <section className="job-runs-section job-runs-section--contained" aria-labelledby="services-intro-title">
        <div className="wrap">
          <div className="job-runs job-runs--light job-runs--flip">
            <div className="job-runs-media reveal">
              <img
                src="/assets/photos/pump-truck-jobsite.jpg"
                alt="Concrete pump truck on a jobsite"
                width={1400}
                height={933}
              />
            </div>
            <div className="job-runs-copy reveal">
              <p className="section-label">Our Services</p>
              <h2 id="services-intro-title" className="section-title">
                Large-scale concrete, done to <span className="accent">spec</span>
              </h2>
              <p className="job-runs-lead">
                Reedy Concrete is a family-owned contractor. We build foundations, footings, and
                precise flatwork for large projects across Wisconsin, Minnesota, and Iowa. The
                promise is the same on every job: reliable service, competitive pricing, and work
                finished on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-pillars about-approach services-index" aria-labelledby="services-index-title">
        <div className="wrap">
          <p className="section-label reveal">Service Index</p>
          <h2 id="services-index-title" className="section-title reveal">
            Six services. One <span className="accent">standard</span>.
          </h2>
          <ul className="about-pillar-row about-approach-row">
            {services.map((service) => (
              <li key={service.id} className="about-pillar reveal">
                <Link href={`#${service.id}`}>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="services-bands">
        {services.map((service, index) => {
          const light = index % 2 === 1;
          return (
            <section
              key={service.id}
              id={service.id}
              className={`job-runs${light ? " job-runs--light job-runs--flip" : ""}`}
              aria-labelledby={`${service.id}-title`}
            >
              <div className="job-runs-media reveal">
                <img src={service.image} alt={service.alt} width={1400} height={933} />
              </div>
              <div className="job-runs-copy reveal">
                <h2 id={`${service.id}-title`} className="section-title">
                  {service.heading}
                </h2>
                <p className="job-runs-lead">{service.copy}</p>
                <div className="section-actions job-runs-actions">
                  <Link className="text-link job-runs-link" href="/contact">
                    <span>Request a Quote</span>
                    <svg className="job-runs-link-arrow" viewBox="0 0 16 16" aria-hidden="true" width="14" height="14">
                      <path
                        fill="currentColor"
                        d="M2.5 7.25h8.19L7.22 3.78l1.06-1.06L13.75 8l-5.47 5.28-1.06-1.06 3.47-3.47H2.5v-1.5z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <ServiceAreaSection titleId="services-area-title" />

      <section className="tech site-tech" aria-labelledby="services-tech-title">
        <div className="wrap">
          <div className="tech-inner">
            <div className="tech-copy reveal">
              <p className="section-label">Technology</p>
              <h2 id="services-tech-title" className="section-title">
                Modern tools for <span className="title-white">demanding</span>{" "}
                <span className="accent">pours</span>
              </h2>
              <p>
                Trimble Robotic Stations and Somero Laser Screeds keep layout and flatwork accurate
                on commercial, industrial, warehouse, and agricultural projects.
              </p>
              <ul className="tech-list">
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
                src="/assets/photos/comm-tech.jpg"
                alt="Somero laser screed and concrete mixer on a commercial pour"
                width={1400}
                height={933}
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Have a <span className="accent">Project</span> Coming Up?
          </>
        }
        copy="Talk with Reedy Concrete about foundations, flatwork, or commercial, industrial, warehouse, agricultural, multi-tenant, or underground parking work."
        imageSrc="/assets/photos/comm-cta.jpg"
      />
    </main>
  );
}
