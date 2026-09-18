import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Residential Concrete Services | Reedy Concrete",
  description:
    "Dependable residential concrete construction from Reedy Concrete - foundations and precise flatwork across Wisconsin, Minnesota, and Iowa.",
};

const services = [
  {
    title: "Concrete Foundations",
    copy: "Solid, dependable foundations that set residential projects up for long-term performance.",
  },
  {
    title: "Flatwork",
    copy: "Residential flatwork finished with care and Somero Laser Screeds for clean, durable surfaces.",
  },
  {
    title: "Precision Layout",
    copy: "Trimble Robotic Stations support accurate layout so residential pours meet project specifications.",
  },
  {
    title: "On-Time Completion",
    copy: "Reliable service and a clear commitment to finishing every residential job on time.",
  },
];

const reasons = [
  {
    title: "50 years of experience",
    icon: "/icons/why-experience.svg",
    copy: "Fifty years of concrete construction, including residential foundations and precise flatwork.",
  },
  {
    title: "Family-owned company",
    icon: "/icons/team.svg",
    copy: "A multi-generational, family-owned business that treats every project with care and accountability.",
  },
  {
    title: "Experienced long-term crews",
    icon: "/icons/crew.svg",
    copy: "Highly trained employees, many with 10–35+ years on the job, who keep pours consistent and dependable.",
  },
  {
    title: "Modern equipment",
    icon: "/icons/equipment.svg",
    copy: "Trimble Robotic Stations and Somero Laser Screeds support accuracy on residential pours that need to last.",
  },
  {
    title: "Quality workmanship",
    icon: "/icons/quality-batch.svg",
    copy: "Quality workmanship and structural integrity you can trust long after the pour is complete.",
  },
  {
    title: "Reliable project execution",
    icon: "/icons/why-project.svg",
    copy: "Clear communication and reliable scheduling so residential work moves forward without delays.",
  },
];

const recentWorks = [
  {
    name: "Residential Foundations",
    work: "Foundations and flatwork",
    image: "/assets/photos/res-work-1.jpg",
    alt: "Freshly poured concrete slab with pump boom on site",
  },
  {
    name: "Residential Flatwork",
    work: "Precise concrete finishing",
    image: "/assets/photos/res-work-2.jpg",
    alt: "Large concrete floor pour in progress",
  },
  {
    name: "Residential Concrete",
    work: "Quality workmanship on site",
    image: "/assets/photos/res-work-3.jpg",
    alt: "Residential concrete flatwork",
  },
];

export default function Page() {
  return (
    <main>
      <PageHero
        title="Residential"
        description="Dependable residential concrete - foundations and precise flatwork backed by 50 years of experience and highly trained crews."
        imageSrc="/assets/photos/residential.jpg"
        ariaLabel="Residential Services"
        className="page-hero--banner-service"
      />
      <Breadcrumb current="Residential" />

      <section className="job-runs-section job-runs-section--contained" aria-labelledby="res-intro-title">
        <div className="wrap">
          <div className="job-runs job-runs--light job-runs--flip">
            <div className="job-runs-media reveal">
              <img
                src="/assets/photos/res-intro.jpg"
                alt="Residential concrete foundation work"
                width={1400}
                height={933}
              />
            </div>
            <div className="job-runs-copy reveal">
              <p className="section-label">Residential</p>
              <h2 id="res-intro-title" className="section-title">
                Concrete work <span className="accent">clients</span> can count on
              </h2>
              <p className="job-runs-lead">
                Reedy Concrete provides residential concrete construction where quality,
                communication, and dependable execution matter - from solid foundations to precise
                flatwork, completed on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="job-runs" aria-labelledby="res-services-title">
        <div className="job-runs-media reveal">
          <img
            src="/assets/photos/res-services.jpg"
            alt="Residential concrete flatwork in progress"
            width={1400}
            height={933}
          />
        </div>
        <div className="job-runs-copy reveal">
          <p className="section-label">Residential Services</p>
          <h2 id="res-services-title" className="section-title">
            Foundations &amp; Flatwork
            <br />
            Done with <span className="accent">Precision</span>
          </h2>
          <ol className="job-runs-list">
            {services.map((service) => (
              <li key={service.title}>
                <strong>{service.title}</strong>
                <span>{service.copy}</span>
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

      <section className="about-pillars res-why-pillars" aria-labelledby="res-why-title">
        <div className="wrap">
          <p className="section-label reveal">Why Clients Choose Reedy</p>
          <h2 id="res-why-title" className="section-title reveal">
            Experience, care, and <span className="accent">reliable</span> execution
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

      <section className="tech site-tech" aria-labelledby="res-tech-title">
        <div className="wrap">
          <div className="tech-inner">
            <div className="tech-copy reveal">
              <p className="section-label">Technology</p>
              <h2 id="res-tech-title" className="section-title">
                Precision tools for <span className="accent">quality</span>{" "}
                <span className="title-white">residential work</span>
              </h2>
              <p>
                Modern equipment supports accuracy and consistency on residential pours, paired
                with highly trained crews who know how to use it.
              </p>
              <ul className="tech-list">
                <li>
                  <strong>Trimble Robotic Stations</strong>
                  Support precise layout before concrete is placed.
                </li>
                <li>
                  <strong>Somero Laser Screeds</strong>
                  Support precise flatwork and finishing for level, durable surfaces.
                </li>
              </ul>
            </div>
            <div className="tech-visual">
              <img
                src="/assets/photos/res-tech.jpg"
                alt="Somero laser screed supporting residential concrete work"
                width={1400}
                height={933}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="work-showcase recent-works" aria-labelledby="res-work-title">
        <div className="wrap">
          <p className="section-label reveal">Recent Works</p>
          <h2 id="res-work-title" className="section-title reveal">
            Residential <span className="accent">Projects</span>
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

      <CtaBand
        title={
          <>
            Ready to Talk About Your <span className="accent">Project</span>?
          </>
        }
        copy="Contact Reedy Concrete to discuss your residential concrete project."
        imageSrc="/assets/photos/res-cta.jpg"
      />
    </main>
  );
}
