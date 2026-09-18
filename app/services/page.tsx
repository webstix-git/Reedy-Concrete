import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Services | Reedy Concrete",
  description:
    "Reedy Concrete provides foundations and precise flatwork for large-scale commercial, industrial, warehouse, agricultural, multi-tenant, and underground parking projects across Wisconsin, Minnesota, and Iowa.",
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
    summary: "Solid foundations and precise flatwork for large-scale projects.",
    image: "/assets/photos/commercial-foundation-pump.jpg",
    alt: "Foundation forms, crew, and concrete pump on a large-scale jobsite",
    copy: "Reedy Concrete specializes in solid foundations and precise flatwork tailored to large-scale projects. Highly trained crews, Trimble Robotic Stations, and Somero Laser Screeds help us meet project specifications and timelines without the delays, costly mistakes, or quality concerns that can come with complex concrete work.",
  },
  {
    id: "commercial",
    title: "Commercial",
    heading: (
      <>
        <span className="accent">Commercial</span> Concrete
      </>
    ),
    summary: "High-quality commercial concrete construction for demanding builds.",
    image: "/assets/photos/commercial.jpg",
    alt: "Commercial concrete construction project",
    copy: "For 50 years, Reedy Concrete has been the trusted choice for high-quality commercial concrete construction across Wisconsin, Minnesota, and Iowa. As a family-owned and operated contractor, we handle demanding commercial projects with quality workmanship, competitive pricing, and a clear commitment to finishing every job on time.",
  },
  {
    id: "industrial-and-warehouse",
    title: "Industrial and Warehouse",
    heading: (
      <>
        Industrial and <span className="accent">Warehouse</span>
      </>
    ),
    summary: "Industrial and warehouse concrete built for precision and scale.",
    image: "/assets/photos/commercial-floor-finish.jpg",
    alt: "Industrial and warehouse concrete floor finishing",
    copy: "Industrial and warehouse projects demand precision, capacity, and reliable delivery. Somero Laser Screeds support precise flatwork, and Trimble Robotic Stations improve layout accuracy so the work meets specifications. Long-term crews, many with 10–35+ years of tenure, help us take on large-scale industrial and warehouse concrete efficiently.",
  },
  {
    id: "agricultural",
    title: "Agricultural",
    heading: (
      <>
        <span className="accent">Agricultural</span> Concrete
      </>
    ),
    summary: "Agricultural concrete construction built for demanding use.",
    image: "/assets/photos/agricultural.jpg",
    alt: "Agricultural concrete foundation walls on a jobsite",
    copy: "Agricultural concrete is a core part of our work. Based in Galesville, Wisconsin, we serve agricultural projects throughout Wisconsin, Minnesota, and Iowa with the same standard we bring to commercial and industrial jobs: dependable service, precision, and quality workmanship on demanding concrete construction.",
  },
  {
    id: "multi-tenant",
    title: "Multi-Tenant",
    heading: (
      <>
        <span className="accent">Multi-Tenant</span> Projects
      </>
    ),
    summary: "Foundations and flatwork for multi-tenant projects.",
    image: "/assets/photos/gallery-apartment.jpg",
    alt: "Multi-tenant building with concrete site work",
    copy: "Reedy Concrete provides concrete construction for multi-tenant projects, from solid foundations through precise flatwork. Specialized equipment and experienced crews help improve precision, efficiency, and workmanship while we keep the job on schedule and finish on time.",
  },
  {
    id: "underground-parking",
    title: "Underground Parking",
    heading: (
      <>
        Underground <span className="accent">Parking</span>
      </>
    ),
    summary: "Precise concrete construction for underground parking.",
    image: "/assets/photos/what-3.jpg",
    alt: "Large-scale concrete construction",
    copy: "Underground parking is a Reedy Concrete specialty. This work requires precision, structural integrity, and crews who can meet strict project specifications. We combine 50 years of experience with Trimble Robotic Stations and Somero Laser Screeds to deliver dependable underground parking concrete construction.",
  },
];

export default function Page() {
  return (
    <main className="services-page">
      <PageHero
        title="Services"
        description="Foundations and precise flatwork for large-scale commercial, industrial, warehouse, agricultural, multi-tenant, and underground parking projects across Wisconsin, Minnesota, and Iowa."
        imageSrc="/assets/photos/commercial-foundation-pump.jpg"
        ariaLabel="Services"
        className="page-hero--banner-service"
      />
      <Breadcrumb current="Services" />

      <section className="job-runs-section job-runs-section--contained" aria-labelledby="services-intro-title">
        <div className="wrap">
          <div className="job-runs job-runs--light job-runs--flip">
            <div className="job-runs-media reveal">
              <img
                src="/assets/photos/commercial-floor-finish.jpg"
                alt="Crew finishing a large concrete floor"
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
                Reedy Concrete is a family-owned and operated contractor specializing in foundations
                and precise flatwork for large-scale projects. We serve businesses across Wisconsin,
                Minnesota, and Iowa with experienced crews, specialized equipment, and three simple
                promises: reliable service, competitive pricing, and finishing every job on time.
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
                Trimble Robotic Stations and Somero Laser Screeds improve precision, efficiency, and
                workmanship on complex commercial, industrial, warehouse, and agricultural projects.
              </p>
              <ul className="tech-list">
                <li>
                  <strong>Trimble Robotic Stations</strong>
                  Support precise layout and measurement on complex pours and critical alignments.
                </li>
                <li>
                  <strong>Somero Laser Screeds</strong>
                  Support precise flatwork and finishing for consistently level surfaces.
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
        copy="Talk with Reedy Concrete about foundations and flatwork, or commercial, industrial, warehouse, agricultural, multi-tenant, or underground parking work."
        imageSrc="/assets/photos/comm-cta.jpg"
      />
    </main>
  );
}
