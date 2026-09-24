import type { Metadata } from "next";
import Link from "next/link";
import ApplicationForm from "@/components/ApplicationForm";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Careers | Reedy Concrete",
  description:
    "Apply to work at Reedy Concrete Construction, Inc. Complete the employment application on this page.",
};

const careerPoints = [
  {
    title: "Career pathways",
    icon: "/icons/team.svg",
    copy: "We build career pathways so experienced people stay on the crew.",
  },
  {
    title: "Long-term crews",
    icon: "/icons/crew.svg",
    copy: "Four field crews work under supervisors with 20 to 35 years at Reedy, including Tony B., Brett K., Travis M., and John S.",
  },
  {
    title: "Training & safety",
    icon: "/icons/safety.svg",
    copy: "Everyone on the crew is trained for the work and certified in CPR and first aid. Field members also hold OSHA, MSHA, ADA, and ACI credentials.",
  },
];

export default function Page() {
  return (
    <main>
      <PageHero
        title="Careers"
        description="Family-owned concrete work, long-term crews, and a place to build a career."
        imageSrc="/assets/photos/reedy-pump-boom.jpg"
        ariaLabel="Careers"
        className="page-hero--banner-about"
      />
      <Breadcrumb current="Careers" />

      <section className="job-runs-section job-runs-section--contained" aria-labelledby="careers-intro-title">
        <div className="wrap">
          <div className="job-runs job-runs--light job-runs--flip">
            <div className="job-runs-media reveal">
              <img
                src="/assets/photos/careers-pump-truck.jpg"
                alt="Concrete pump truck set up on a jobsite"
                width={1400}
                height={933}
              />
            </div>
            <div className="job-runs-copy reveal">
              <p className="section-label">Work With Us</p>
              <h2 id="careers-intro-title" className="section-title">
                Build a career with <span className="accent">Reedy Concrete</span>
              </h2>
              <p className="job-runs-lead">
                Reedy Concrete Construction, Inc. is a family-owned contractor with more than 50
                years of concrete work across Wisconsin, Minnesota, and Iowa. Skilled people stay
                because we invest in career pathways, safety training, and crews that work together
                for years.
              </p>
              <p className="job-runs-lead">
                Complete the application below. We will follow up.
              </p>
              <div className="section-actions job-runs-actions">
                <Link className="btn btn-primary" href="#application">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-pillars about-approach" aria-labelledby="careers-points-title">
        <div className="wrap">
          <p className="section-label reveal">Why Reedy</p>
          <h2 id="careers-points-title" className="section-title reveal">
            People who stay. Work that <span className="accent">holds</span>.
          </h2>
          <ul className="about-pillar-row about-approach-row">
            {careerPoints.map((item) => (
              <li key={item.title} className="about-pillar reveal">
                <img className="about-pillar-icon" src={item.icon} alt="" width={40} height={40} />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contact-page" id="application" aria-labelledby="application-title">
        <div className="wrap">
          <p className="section-label reveal">Application for Employment</p>
          <h2 id="application-title" className="section-title reveal">
            Apply to work at <span className="accent">Reedy Concrete</span>
          </h2>
          <ApplicationForm />
        </div>
      </section>

      <CtaBand
        title={
          <>
            Ready to <span className="accent">apply</span>?
          </>
        }
        copy="Complete the application on this page. Questions? Call or email Prentice or Tyler Reedy."
        imageSrc="/assets/photos/pump-truck-jobsite.jpg"
        primaryHref="#application"
        primaryLabel="Apply Now"
      />
    </main>
  );
}
