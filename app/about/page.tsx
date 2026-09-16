import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "About Reedy Concrete | 40+ Years of Concrete Experience",
  description:
    "Reedy Concrete is a family-owned concrete contractor built on more than 40 years of experience, skilled people, and dependable workmanship.",
};

const approachItems = [
  {
    title: "Quality workmanship",
    icon: "/icons/approach-quality.png",
    copy: "We take pride in work that holds up—sound structure, clean finishes, and concrete you can count on for years.",
  },
  {
    title: "Precision",
    icon: "/icons/approach-precision.png",
    copy: "Layout, elevations, and finishing stay tight so the work fits the plan and performs the way it should on site.",
  },
  {
    title: "Reliability",
    icon: "/icons/approach-reliability.png",
    copy: "Customers hire us because we show up ready, keep communication clear, and follow through on what we say we will do.",
  },
  {
    title: "Customer service",
    icon: "/icons/approach-execution.png",
    copy: "We treat every project like a relationship, not a one-off pour—listening closely and staying easy to work with from start to finish.",
  },
  {
    title: "Safety & professionalism",
    icon: "/icons/approach-delivery.png",
    copy: "Jobsites stay organized and professional, with safety as a standing part of how crews work—not an afterthought.",
  },
  {
    title: "Competitive pricing",
    icon: "/icons/approach-budget.png",
    copy: "Fair, clear pricing and careful use of time and materials help keep projects on budget without cutting corners.",
  },
];

const pillars = [
  {
    title: "Family ownership",
    icon: "/icons/family.svg",
    copy: "The Reedy family still runs the business day to day, with more than one generation working alongside each other.",
  },
  {
    title: "Long-term crews",
    icon: "/icons/crew.svg",
    copy: "Many of our people have been here 10–35+ years. That kind of tenure shows up in the quality of the work.",
  },
  {
    title: "Long-term relationships",
    icon: "/icons/delivery.png",
    copy: "We build lasting ties with customers and employees alike—because good concrete work is built on trust.",
  },
];

const areaHighlights = [
  { name: "Wisconsin", label: "Wisconsin" },
  { name: "Minnesota", label: "Minnesota" },
  { name: "Iowa", label: "Iowa" },
];

const areaMapPins = [
  { name: "Minnesota", top: "32%", left: "34%" },
  { name: "Wisconsin", top: "42%", left: "70%" },
  { name: "Iowa", top: "78%", left: "40%" },
];

export default function Page() {
  return (
    <main>
      <PageHero
        title="About Us"
        description="A family-owned concrete company with deep Midwest roots, built on dependable work and people who stick around."
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
                  Reedy Concrete started as a family-owned and operated business with a simple goal:
                  deliver dependable, high-quality concrete work customers can count on. Over the past
                  40+ years, we have grown by earning trust—one job, and one relationship, at a time.
                </p>
                <p>
                  Based in Galesville, Wisconsin, we serve customers throughout Wisconsin, Minnesota,
                  and Iowa. The Reedy family remains actively involved, with multiple generations
                  working together. Many of our crew members have been with us for 10–35+ years, which
                  says a lot about how we treat our people and our community.
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
          <ol className="about-pillar-row">
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
                src="/assets/photos/about-tech.jpg"
                alt="Laser screed and crew placing a large commercial concrete floor"
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
                Decades in the field, paired with modern tools, keep layout and finishing accurate
                when the job gets demanding.
              </p>
              <ul className="tech-list">
                <li>
                  <strong>Trimble Robotic Stations</strong>
                  Help with precise layout and measurement where alignment matters.
                </li>
                <li>
                  <strong>Somero Laser Screeds</strong>
                  Support flatwork and finishing for consistent concrete surfaces.
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

      <section className="service-area-section service-area-section--split service-area-section--white" aria-labelledby="about-area-title">
        <div className="wrap">
          <div className="service-area-split reveal">
            <ServiceAreaMap pins={areaMapPins} />
            <div className="service-area-copy">
              <p className="section-label">
                <span className="accent">Service Area</span>
              </p>
              <h2 id="about-area-title" className="section-title">
                Where We <span className="accent">Work</span>
              </h2>
              <p>
                From our shop at {company.addressLines[0]}, {company.addressLines[1]}, we take on
                work across the Upper Midwest, with a strong presence in:
              </p>
              <ul className="service-area-locations">
                {areaHighlights.map((item) => (
                  <li key={item.name}>
                    <img src="/assets/icon-location-pin.svg" alt="" width={20} height={20} />
                    <strong>{item.label}</strong>
                  </li>
                ))}
              </ul>
              <p className="service-area-note-copy">
                Not sure if you are in our area? Ask. We will tell you straight what we can take on.
              </p>
              <div className="section-actions">
                <a className="btn btn-outline btn-outline--dark" href="/contact">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Ready to talk through
            <br />
            your <span className="accent">next</span> pour?
          </>
        }
        copy="Reach out to discuss residential, commercial, industrial, or agricultural concrete work."
        imageSrc="/assets/photos/about-cta.jpg"
      />
    </main>
  );
}
