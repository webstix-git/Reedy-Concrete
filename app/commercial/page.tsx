import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Commercial, Industrial & Agricultural Concrete | Reedy Concrete",
  description:
    "Reedy Concrete provides concrete construction for commercial, industrial, and agricultural projects throughout Wisconsin, Minnesota, and Iowa.",
};

const markets = [
  {
    title: "Foundations and Flatwork",
    copy: "Foundations and flatwork for large-scale projects.",
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
    copy: "Concrete construction for warehouse projects.",
  },
  {
    title: "Agricultural",
    copy: "Agricultural concrete construction built for demanding use and dependable performance.",
  },
  {
    title: "Multi-Tenant",
    copy: "Concrete construction for multi-tenant projects.",
  },
  {
    title: "Underground Parking",
    copy: "Concrete construction for underground parking projects.",
  },
];

const reasons = [
  {
    title: "40+ years of experience",
    copy: "More than four decades of commercial, industrial, and agricultural concrete work across the Upper Midwest.",
  },
  {
    title: "Experienced long-term crews",
    copy: "Highly trained employees, many with 10–35+ years on the job, who keep complex pours accurate and on schedule.",
  },
  {
    title: "Modern equipment",
    copy: "Trimble layout and Somero screeding support precision on demanding commercial and industrial pours.",
  },
  {
    title: "Quality workmanship",
    copy: "Tight tolerances, clean finishes, and work that holds up when mistakes would cost everyone.",
  },
  {
    title: "Reliable project execution",
    copy: "Clear communication and disciplined placement help protect quality, schedule, and budget.",
  },
  {
    title: "Competitive pricing",
    copy: "Straightforward pricing and careful job planning so projects stay within budget without cutting corners.",
  },
];

const recentWorks = [
  {
    name: "Reedsburg Public Works",
    work: "Walls and slab on grade",
    image: "/assets/photos/comm-work-1.jpg",
    alt: "Commercial wall forms and crane on a large concrete jobsite",
  },
  {
    name: "Kwik Trip, Combined Locks",
    work: "Fuel canopy apron and lot",
    image: "/assets/Commercial/Kwik-Trip-Combined-Locks-2-500x500.jpg",
    alt: "Kwik Trip Combined Locks canopy and lot",
  },
  {
    name: "Richland Center Aquatic Center",
    work: "Pool decks and walkways",
    image: "/assets/photos/comm-work-3.jpg",
    alt: "Commercial pool deck and flatwork",
  },
];

export default function Page() {
  return (
    <main>
      <PageHero
        title="Commercial"
        description="Concrete construction for commercial, industrial, and agricultural projects across Wisconsin, Minnesota, and Iowa-built for schedule, quality, and scale."
        imageSrc="/assets/photos/commercial-foundation-pump.jpg"
        ariaLabel="Commercial Services"
        className="page-hero--banner-service"
      />
      <Breadcrumb current="Commercial" />

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
              <p className="section-label">Commercial Focus</p>
              <h2 id="comm-intro-title" className="section-title">
                Built for projects where mistakes are <span className="accent">expensive</span>
              </h2>
              <p className="job-runs-lead">
                Commercial, industrial, warehouse, agricultural, multi-tenant, and underground parking
                work all need the same thing: crews who protect quality and keep the job moving.
                That is where Reedy focuses—foundations and flatwork for large-scale projects done
                right the first time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="job-runs" aria-labelledby="comm-markets-title">
        <div className="job-runs-media reveal">
          <img
            src="/assets/photos/agricultural-silos-slab.jpg"
            alt="Agricultural concrete slab with grain silos and elevator"
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
        </div>
      </section>

      <section className="about-pillars res-why-pillars" aria-labelledby="comm-why-title">
        <div className="wrap">
          <p className="section-label reveal">Why Project Managers Choose Reedy</p>
          <h2 id="comm-why-title" className="section-title reveal">
            Experience, precision, and <span className="accent">reliable</span> execution
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
                Modern equipment keeps layout and flatwork precise on complex commercial,
                industrial, and agricultural projects.
              </p>
              <ul className="tech-list">
                <li>
                  <strong>Trimble Robotic Stations</strong>
                  Support precise layout and measurement on complex commercial and industrial work.
                </li>
                <li>
                  <strong>Somero Laser Screeds</strong>
                  Support precision flatwork and finishing where surface consistency matters.
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

      <CtaBand
        title={
          <>
            Have a <span className="accent">Project</span> Coming Up?
          </>
        }
        copy="Talk with Reedy Concrete about your commercial, industrial, or agricultural concrete project."
        imageSrc="/assets/photos/comm-cta.jpg"
      />
    </main>
  );
}
