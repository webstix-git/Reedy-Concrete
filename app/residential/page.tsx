import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Residential Concrete Services | Reedy Concrete",
  description:
    "Dependable residential concrete construction from Reedy Concrete-foundations, flatwork, driveways, and residential concrete structures.",
};

const services = [
  {
    title: "Concrete Foundations",
    copy: "Solid, precise foundations that set residential structures up for long-term performance.",
  },
  {
    title: "Flatwork",
    copy: "Residential flatwork finished with care and modern screeding for clean, durable surfaces.",
  },
  {
    title: "Driveways",
    copy: "Residential driveways built for everyday use and Midwestern conditions.",
  },
  {
    title: "Residential Concrete Structures",
    copy: "Supporting residential concrete structures completed with the same focus on quality and dependable execution.",
  },
];

const reasons = [
  {
    title: "40+ years of experience",
    copy: "More than four decades of residential concrete work across foundations, flatwork, driveways, and structures.",
  },
  {
    title: "Family-owned company",
    copy: "A multi-generational business that treats every homeowner project with care and accountability.",
  },
  {
    title: "Experienced long-term crews",
    copy: "Highly trained employees, many with 10–35+ years on the job, who keep pours consistent and clean.",
  },
  {
    title: "Modern equipment",
    copy: "Trimble layout and Somero screeding support accuracy on residential pours that need to look right and last.",
  },
  {
    title: "Quality workmanship",
    copy: "Square, level, and finished to a standard homeowners can see and trust for years after the pour.",
  },
  {
    title: "Reliable project execution",
    copy: "Clear communication and steady scheduling so residential work moves forward without surprises.",
  },
];

const recentWorks = [
  {
    name: "Farnam Flats, La Crosse",
    work: "Foundations and flatwork",
    image: "/assets/photos/res-work-1.jpg",
    alt: "Freshly poured concrete slab with pump boom on site",
  },
  {
    name: "Tri-State Foundations",
    work: "Footings and basement walls",
    image: "/assets/photos/res-work-2.jpg",
    alt: "Large concrete floor pour in progress",
  },
  {
    name: "Driveways & Flatwork",
    work: "Patios, walks, and approaches",
    image: "/assets/photos/res-work-3.jpg",
    alt: "Residential stamped patio and concrete driveway",
  },
];

export default function Page() {
  return (
    <main>
      <PageHero
        title="Residential"
        description="Dependable residential concrete-foundations, flatwork, driveways, and structures-backed by decades of experience and highly trained crews."
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
                Concrete work <span className="accent">homeowners</span> can count on
              </h2>
              <p className="job-runs-lead">
                Reedy works with homeowners on residential concrete projects where quality,
                communication, and dependable execution matter-from foundations and flatwork to
                driveways and residential concrete structures.
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
            Foundations, Flatwork,
            <br />
            Driveways &amp; <span className="accent">Structures</span>
          </h2>
          <ol className="job-runs-list">
            {services.map((service) => (
              <li key={service.title}>
                <strong>{service.title}</strong>
                <span>{service.copy}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-pillars res-why-pillars" aria-labelledby="res-why-title">
        <div className="wrap">
          <p className="section-label reveal">Why Homeowners Choose Reedy</p>
          <h2 id="res-why-title" className="section-title reveal">
            Experience, care, and <span className="accent">reliable</span> execution
          </h2>
          <ul className="about-pillar-row about-approach-row">
            {reasons.map((item) => (
              <li key={item.title} className="about-pillar reveal">
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
                with crews who know how to use it.
              </p>
              <ul className="tech-list">
                <li>
                  <strong>Trimble Robotic Stations</strong>
                  Support precise layout before concrete is placed.
                </li>
                <li>
                  <strong>Somero Laser Screeds</strong>
                  Support precision flatwork and finishing for level, durable surfaces.
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
