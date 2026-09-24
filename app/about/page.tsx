import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import ServiceAreaSection from "@/components/ServiceAreaSection";

export const metadata: Metadata = {
  title: "About Reedy Concrete | Over 50 Years of Concrete Experience",
  description:
    "Reedy Concrete Construction, Inc. is a family-owned contractor with more than 50 years of experience in foundations, footings, and flatwork across Wisconsin, Minnesota, and Iowa.",
};

const approachItems = [
  {
    title: "Quality workmanship",
    icon: "/icons/approach-quality.png",
    copy: "We build concrete that holds up: sound structure, careful finishing, and work you can count on for years.",
  },
  {
    title: "Precision",
    icon: "/icons/approach-precision.png",
    copy: "Layout, elevations, and finishing stay precise so the work meets project specifications and performs the way it should on site.",
  },
  {
    title: "Reliability",
    icon: "/icons/approach-reliability.png",
    copy: "Customers hire us because we show up ready, keep communication clear, and follow through on what we say we will do.",
  },
  {
    title: "Customer service",
    icon: "/icons/approach-execution.png",
    copy: "We stay easy to reach and straightforward to work with, from the first call through the finished pour.",
  },
  {
    title: "Safety & professionalism",
    icon: "/icons/safety.svg",
    copy: "Safety is part of the work, not a separate step. Every person on our team is certified in CPR and first aid, and field members hold OSHA, MSHA, ADA, and ACI credentials.",
  },
  {
    title: "Competitive pricing",
    icon: "/icons/approach-budget.png",
    copy: "Pricing stays clear, and we use time and materials carefully so the job can stay on budget without cutting the work short.",
  },
];

const familyLeaders = [
  { name: "Jim Reedy", role: "President" },
  { name: "Marilyn Reedy", role: "Corporate Secretary" },
  { name: "Prentice Reedy", role: "Vice President" },
  { name: "Tyler Reedy", role: "Vice President of Field Operations" },
];

const pillars = [
  {
    title: "Long-term crews",
    icon: "/icons/crew.svg",
    copy: "Four field crews are led by Tony B. (35 years), Brett K. (30 years), Travis M. (25 years), and John S. (20 years). Together, they bring a combined century of hands-on leadership.",
  },
  {
    title: "Long-term relationships",
    icon: "/icons/handshake.svg",
    copy: "We invest in career pathways so skilled people stay. That continuity is what our customers can count on from one project to the next.",
  },
];

export default function Page() {
  return (
    <main>
      <PageHero
        title="About Us"
        description="A family-owned contractor with more than 50 years of experience in large-scale foundations, footings, and flatwork."
        imageSrc="/assets/photos/about-banner.jpg"
        ariaLabel="About Us"
        className="page-hero--banner-about"
      />
      <Breadcrumb current="About Us" />

      <section className="about-story" aria-labelledby="story-title">
        <div className="wrap">
          <div className="split about-story-split">
            <div className="split-visual reveal">
              <img
                src="/assets/photos/about.jpg"
                alt="Reedy Concrete crew tying rebar on a foundation jobsite"
                width={1200}
                height={800}
              />
            </div>
            <div className="reveal">
              <p className="section-label">Our Story</p>
              <h2 id="story-title" className="section-title">
                Built over decades of <span className="accent">concrete</span> work
              </h2>
              <div className="prose">
                <p>
                  Reedy Concrete Construction, Inc. is a family-owned and operated contractor with
                  more than 50 years in concrete construction. We build large-scale foundations,
                  footings, and flatwork for commercial, agricultural, industrial, and multi-tenant
                  clients across Wisconsin, Minnesota, and Iowa.
                </p>
                <p>
                  Clients stay with us for reliable service, competitive pricing, and work that
                  finishes on schedule. On jobs where delays are common, we keep the crew, the plan,
                  and the timeline in order.
                </p>
                <p>
                  Trimble Robotic Stations and Somero Laser Screeds support layout and finishing
                  when the work is demanding. Each project is built to the specifications you set,
                  by crews trained to do it safely and well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-pillars" aria-labelledby="pillars-title">
        <div className="wrap">
          <p className="section-label reveal">How We&apos;re Built</p>
          <h2 id="pillars-title" className="section-title reveal">
            People first. <span className="accent">Process</span> that holds.
          </h2>
          <div className="family-ownership reveal">
            <div className="family-ownership-head">
              <img className="about-pillar-icon" src="/icons/team.svg" alt="" width={40} height={40} />
              <div>
                <h3>Family ownership</h3>
                <p>Owned and operated by the Reedy family.</p>
              </div>
            </div>
            <ul className="family-ownership-grid">
              {familyLeaders.map((leader) => (
                <li key={leader.name}>
                  <strong>{leader.name}</strong>
                  <span>{leader.role}</span>
                </li>
              ))}
            </ul>
          </div>
          <ol className="about-pillar-row about-pillar-row--pair">
            {pillars.map((item) => (
              <li key={item.title} className="about-pillar reveal">
                <img className="about-pillar-icon" src={item.icon} alt="" width={40} height={40} />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="tech site-tech about-tech" aria-labelledby="exp-tech-title">
        <div className="wrap">
          <div className="tech-inner tech-inner--image-left">
            <div className="tech-visual">
              <img
                src="/assets/photos/reedy-pump-boom.jpg"
                alt="Reedy Concrete Construction pump boom"
                width={1400}
                height={933}
              />
            </div>
            <div className="tech-copy reveal">
              <p className="section-label">Experience + Technology</p>
              <h2 id="exp-tech-title" className="section-title">
                Experienced crews.{" "}
                <span className="accent">Modern precision.</span>
              </h2>
              <p>
                We pair more than 50 years in the field with Trimble Robotic Stations and Somero
                Laser Screeds, so layout and finishing stay accurate when the job is demanding.
              </p>
              <ul className="tech-list">
                <li>
                  <strong>Trimble Robotic Stations</strong>
                  Precise layout and measurement where alignment matters.
                </li>
                <li>
                  <strong>Somero Laser Screeds</strong>
                  Flatwork and finishing for consistent, precise surfaces.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-pillars about-approach" aria-labelledby="approach-title">
        <div className="wrap">
          <p className="section-label reveal">Our Approach</p>
          <h2 id="approach-title" className="section-title reveal">
            What matters <span className="accent">most</span> to us
          </h2>
          <ul className="about-pillar-row about-approach-row">
            {approachItems.map((item) => (
              <li key={item.title} className="about-pillar reveal">
                <img className="about-pillar-icon" src={item.icon} alt="" width={40} height={40} />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServiceAreaSection
        className="service-area-section--white"
        titleId="about-area-title"
        showAddress
      />

      <CtaBand
        title={
          <>
            Ready to talk through
            <br />
            your <span className="accent">next</span> pour?
          </>
        }
        copy="Call or write about commercial, industrial, agricultural, or residential concrete."
        imageSrc="/assets/photos/about-cta.jpg"
      />
    </main>
  );
}
