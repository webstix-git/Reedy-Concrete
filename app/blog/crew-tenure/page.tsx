import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Why 10-35+ Years of Crew Tenure Changes the Pour | Reedy Concrete Blog",
  description: "Why 10-35+ years of crew tenure changes the pour at family-owned Reedy Concrete in Galesville, WI.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        title="Blog"
        description="Why 10-35+ years of crew tenure changes the pour: how long-term people protect quality, schedule, and judgment on family-owned Reedy Concrete jobsites."
        ariaLabel="Blog article"
      />
      
          <div className="breadcrumb-strip breadcrumb-strip--blog">
            <div className="wrap">
              <nav className="breadcrumb breadcrumb--strip" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <Link href="/blog">Blog</Link>
                <span aria-hidden="true">/</span>
                <span className="current">Why 10-35+ Years of Crew Tenure Changes the Pour</span>
              </nav>
            </div>
          </div>
      
          <section className="blog-article">
            <div className="wrap">
              <article className="blog-post-card reveal">
                <div className="blog-post-card-media">
                  <img src="/assets/photos/blog-crew-tenure.jpg" alt="Reedy Concrete crew on a family-owned jobsite" width="1400" height="900" />
                </div>
                <div className="blog-post-card-body">
                  <p className="blog-meta">
                    <span className="blog-keyword">Company</span>
                    <time dateTime="2026-01-22">January 22, 2026</time>
                  </p>
                  <div className="prose">
                    <p>Concrete work rewards judgment as much as it rewards tools. Crews who have poured together for a decade or more know how to keep quality controlled when a schedule gets tight. That kind of judgment does not come from a manual. It comes from having seen the same problems before, more than once, on real jobs.</p>
      
                    <h2>What Long Tenure Actually Buys You</h2>
                    <p>A crew that has been together for years builds up things a newly assembled team simply has not had time to develop:</p>
                    <ul>
                      <li><strong>Fewer surprises on site.</strong> Experienced crews communicate clearly, catch issues early, and stay on plan.</li>
                      <li><strong>Consistency across projects.</strong> Many Reedy Concrete team members have been with the company for 10–35+ years, so the standard does not reset with every new hire.</li>
                      <li><strong>Better judgment under pressure.</strong> When a schedule gets tight, an experienced crew knows where quality cannot be compromised.</li>
                      <li><strong>Reliable delivery.</strong> Long-term people help us finish every job on time without sacrificing workmanship.</li>
                    </ul>
      
                    <h2>A Family-Owned Company Built Around This</h2>
                    <p>Reedy Concrete is a multi-generational, family-owned contractor based in Galesville, Wisconsin. For 50 years, we have built the company around long-term employees, many with 10–35+ years of tenure. That continuity shows up in communication on site, fewer surprises for project partners, and work customers can count on across Wisconsin, Minnesota, and Iowa.</p>
                    <p>It is easy for a company to talk about experience. What actually matters is whether that experience is still on the crew when your job gets poured. At Reedy, it usually is.</p>
      
                    <h2>What This Means for You</h2>
                    <p>When you call or send project details, you are talking with a team that treats reliability as part of the product - not an add-on, and not marketing language. Whether it is residential, commercial, industrial, or agricultural concrete work, the people showing up to do the work are the same people who have been doing it here for years.</p>
                  </div>
                </div>
              </article>
            </div>
          </section>
      
          <section className="blog-keep-reading" aria-label="Keep reading">
            <div className="wrap">
              <div className="blog-keep-reading-head reveal">
                <p className="section-label">Keep Reading</p>
                <h2 className="section-title">More from the field</h2>
              </div>
              <div className="blog-cards">
                <Link className="blog-card reveal" href="/blog/laser-screed">
                  <div className="blog-card-media">
                    <img src="/assets/photos/blog-laser-screed.jpg" alt="Large industrial concrete floor pour" width="900" height="700" />
                  </div>
                  <div className="blog-card-copy">
                    <span className="blog-card-tag">Commercial &amp; Industrial</span>
                    <h3>Laser Screed Floors - Precision on Commercial and Industrial Work</h3>
                    <p>Somero Laser Screeds and Trimble Robotic Stations help Reedy Concrete deliver precise flatwork on large-scale projects...</p>
                    <span className="text-link">Read article <span aria-hidden="true">&rarr;</span></span>
                  </div>
                </Link>
                <Link className="blog-card reveal" href="/blog/midwest-foundations">
                  <div className="blog-card-media">
                    <img src="/assets/photos/blog-midwest-foundations.jpg" alt="Residential foundation forms and concrete work" width="900" height="700" />
                  </div>
                  <div className="blog-card-copy">
                    <span className="blog-card-tag">Residential</span>
                    <h3>Midwest Foundations - What Clients Should Expect From the Pour</h3>
                    <p>Reedy Concrete builds solid, dependable foundations with experienced crews and precise layout across Wisconsin, Minnesota, and Iowa...</p>
                    <span className="text-link">Read article <span aria-hidden="true">&rarr;</span></span>
                  </div>
                </Link>
              </div>
            </div>
          </section>
    </main>
  );
}
