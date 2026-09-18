import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import ServiceAreaSection from "@/components/ServiceAreaSection";

export const metadata: Metadata = {
  title: "Commercial Services | Reedy Concrete",
  description:
    "Reedy Concrete provides foundations and flatwork for large-scale commercial, industrial, warehouse, agricultural, multi-tenant, and underground parking projects throughout Wisconsin, Minnesota, and Iowa.",
};

const markets = [
  {
    title: "Foundations and Flatwork",
    copy: "Foundations and precise flatwork for large-scale projects, delivered to spec and on time.",
  },
  {
    title: "Commercial",
    copy: "Concrete construction for commercial projects where schedule, quality, and experienced execution matter.",
  },
  {
    title: "Industrial",
    copy: "Industrial concrete work that demands precision, strength, and reliable project delivery.",
  },
  {
    title: "Warehouse",
    copy: "Warehouse concrete construction, including precise flatwork placed with Somero Laser Screeds.",
  },
  {
    title: "Agricultural",
    copy: "Agricultural concrete construction built for demanding use and dependable performance.",
  },
  {
    title: "Multi-Tenant",
    copy: "Concrete construction for multi-tenant projects, from foundations through finished flatwork.",
  },
  {
    title: "Underground Parking",
    copy: "Concrete construction for underground parking, where precision and structural integrity matter.",
  },
];

const reasons = [
  {
    title: "50 years of experience",
    icon: "/icons/why-experience.svg",
    copy: "Fifty years of commercial, industrial, and agricultural concrete work across Wisconsin, Minnesota, and Iowa.",
  },
  {
    title: "Experienced long-term crews",
    icon: "/icons/crew.svg",
    copy: "Highly trained employees, many with 10–35+ years on the job, who keep complex pours accurate and on schedule.",
  },
  {
    title: "Modern equipment",
    icon: "/icons/equipment.svg",
    copy: "Trimble Robotic Stations and Somero Laser Screeds support precision on demanding commercial and industrial pours.",
  },
  {
    title: "Quality workmanship",
    icon: "/icons/quality-batch.svg",
    copy: "Quality workmanship and structural integrity when mistakes would cost everyone time and money.",
  },
  {
    title: "Reliable project execution",
    icon: "/icons/why-project.svg",
    copy: "Clear communication and disciplined placement help protect quality, schedule, and budget.",
  },
  {
    title: "Competitive pricing",
    icon: "/icons/money-bag.svg",
    copy: "Competitive pricing and careful job planning so projects stay on budget without cutting corners.",
  },
];

const recentWorks = [
  {
    name: "Commercial Foundations",
    work: "Large-scale concrete construction",
    image: "/assets/photos/comm-work-1.jpg",
    alt: "Commercial wall forms and crane on a large concrete jobsite",
  },
  {
    name: "Commercial Flatwork",
    work: "Precise finishing on site",
    image: "/assets/Commercial/Kwik-Trip-Combined-Locks-2-500x500.jpg",
    alt: "Commercial concrete flatwork and site finishing",
  },
  {
    name: "Commercial Concrete",
    work: "Quality workmanship at scale",
    image: "/assets/photos/comm-work-3.jpg",
    alt: "Commercial concrete flatwork",
  },
];

export default function Page() {
  return (
    <main>
      <PageHero
        title="Commercial Services"
        description="Foundations and precise flatwork for large-scale commercial, industrial, warehouse, agricultural, multi-tenant, and underground parking projects across Wisconsin, Minnesota, and Iowa."
        imageSrc="/assets/photos/commercial-foundation-pump.jpg"
        ariaLabel="Commercial Services"
        className="page-hero--banner-service"
      />
      <Breadcrumb current="Commercial Services" />

      <section className="job-runs-section job-runs-section--contained" aria-labelledby="comm-intro-title">
        <div className="wrap">
          <div className="job-runs job-runs--light job-runs--flip">
            <div className="job-runs-media reveal">
              <img
                src="/assets/photos/commercial-floor-finish.jpg"
                alt="Crew finishing a large commercial concrete floor"
                width={1400}
                height={933}
              />
            </div>
            <div className="job-runs-copy reveal">
              <p className="section-label">Commercial Services</p>
              <h2 id="comm-intro-title" className="section-title">
                Built for projects where mistakes are <span className="accent">expensive</span>
              </h2>
              <p className="job-runs-lead">
                Reedy Concrete specializes in foundations and precise flatwork for large-scale
                projects. Commercial, industrial, warehouse, agricultural, multi-tenant, and
                underground parking work all need crews who protect quality, meet specifications, and
                finish on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="job-runs" aria-labelledby="comm-markets-title">
        <div className="job-runs-media reveal">
          <img
            src="/assets/photos/agricultural.jpg"
            alt="Agricultural concrete foundation walls on a jobsite"
            width={1400}
            height={933}
          />
        </div>
        <div className="job-runs-copy reveal">
          <p className="section-label">Markets We Serve</p>
          <h2 id="comm-markets-title" className="section-title">
            Commercial, Industrial
            <br />
            &amp; <span className="accent">Agricultural</span>
          </h2>
          <ol className="job-runs-list">
            {markets.map((market) => (
              <li key={market.title}>
                <strong>{market.title}</strong>
                <span>{market.copy}</span>
              </li>
            ))}
          </ol>
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

      <section className="about-pillars res-why-pillars" aria-labelledby="comm-why-title">
        <div className="wrap">
          <p className="section-label reveal">Why Businesses Choose Reedy</p>
          <h2 id="comm-why-title" className="section-title reveal">
            Experience, precision, and <span className="accent">reliable</span> execution
          </h2>
          <ul className="about-pillar-row about-approach-row">
            {reasons.map((item) => (
              <li key={item.title} className="about-pillar reveal">
                <img className="about-pillar-icon" src={item.icon} alt="" width={40} height={40} />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="tech site-tech" aria-labelledby="comm-tech-title">
        <div className="wrap">
          <div className="tech-inner">
            <div className="tech-copy reveal">
              <p className="section-label">Technology</p>
              <h2 id="comm-tech-title" className="section-title">
                Modern tools for <span className="title-white">demanding</span>{" "}
                <span className="accent">pours</span>
              </h2>
              <p>
                Trimble Robotic Stations and Somero Laser Screeds keep layout and flatwork precise
                on complex commercial, industrial, and agricultural projects.
              </p>
              <ul className="tech-list">
                <li>
                  <strong>Trimble Robotic Stations</strong>
                  Support precise layout and measurement on complex commercial and industrial work.
                </li>
                <li>
                  <strong>Somero Laser Screeds</strong>
                  Support precise flatwork and finishing where surface consistency matters.
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

      <section className="work-showcase recent-works" aria-labelledby="comm-work-title">
        <div className="wrap">
          <p className="section-label reveal">Recent Works</p>
          <h2 id="comm-work-title" className="section-title reveal">
            Commercial <span className="accent">Projects</span>
          </h2>
          <div className="work-showcase-grid work-showcase-grid--three recent-works-grid">
            {recentWorks.map((project) => (
              <figure key={project.name} className="work-showcase-item recent-works-item reveal">
                <div className="recent-works-media">
                  <img src={project.image} alt={project.alt} width={900} height={700} loading="lazy" />
                </div>
                <figcaption className="recent-works-caption">
                  <strong>{project.name}</strong>
                  <span>{project.work}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreaSection titleId="commercial-area-title" />

      <CtaBand
        title={
          <>
            Have a <span className="accent">Project</span> Coming Up?
          </>
        }
        copy="Talk with Reedy Concrete about your commercial, industrial, warehouse, agricultural, multi-tenant, or underground parking project."
        imageSrc="/assets/photos/comm-cta.jpg"
      />
    </main>
  );
}
