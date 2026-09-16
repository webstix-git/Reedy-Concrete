import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "What Midwestern Homeowners Should Expect From a Foundation Pour | Reedy Concrete Blog",
  description: "What Midwestern homeowners should expect from a foundation pour - careful layout and durable results from Reedy Concrete.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        title="Blog"
        description="What Midwestern homeowners should expect from a foundation pour-careful layout, experienced crews, and durable results from Reedy Concrete."
        ariaLabel="Blog article"
      />
      
          <div className="breadcrumb-strip breadcrumb-strip--blog">
            <div className="wrap">
              <nav className="breadcrumb breadcrumb--strip" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <Link href="/blog">Blog</Link>
                <span aria-hidden="true">/</span>
                <span className="current">What Midwestern Homeowners Should Expect From a Foundation Pour</span>
              </nav>
            </div>
          </div>
      
          <section className="blog-article">
            <div className="wrap">
              <article className="blog-post-card reveal">
                <div className="blog-post-card-media">
                  <img src="/assets/photos/blog-midwest-foundations.jpg" alt="Residential foundation forms and concrete work" width="1400" height="900" />
                </div>
                <div className="blog-post-card-body">
                  <p className="blog-meta">
                    <span className="blog-keyword">Residential</span>
                    <time dateTime="2026-02-18">February 18, 2026</time>
                  </p>
                  <div className="prose">
                    <p>Freeze-thaw cycles, clay soils, and tight build schedules put real pressure on residential foundations in this region. Homeowners and builders across Wisconsin, Minnesota, and Iowa need walls and footings that are square, level, and planned around the rest of the job - not rushed into place because a crew is behind schedule.</p>
      
                    <h2>Why Foundations Are Harder Here Than People Think</h2>
                    <p>A foundation poured in the upper Midwest has to deal with things a lot of national "how to pour a foundation" guides don't cover well:</p>
                    <ul>
                      <li><strong>Frost depth.</strong> Footings have to sit below the frost line, or seasonal heaving can crack walls and slabs over time.</li>
                      <li><strong>Clay and expansive soils.</strong> Soil that swells when wet and shrinks when dry puts uneven pressure on foundation walls if drainage and backfill aren't handled correctly.</li>
                      <li><strong>A short pour season.</strong> Cold-weather concrete work is possible, but it requires the right mix, admixtures, and curing protection - cutting corners here shows up as cracking and spalling years later.</li>
                    </ul>
      
                    <h2>What a Careful Pour Looks Like</h2>
                    <p>At Reedy Concrete, foundation work starts with careful layout and experienced crews. We use high-tech layout tools to mark elevations and corners accurately before any concrete is placed, which cuts down on the kind of mistakes that are hard and expensive to fix once forms are up or backfill is in. That same discipline carries through into flatwork, driveways, and the rest of the residential structure.</p>
                    <p>A few things homeowners should expect from a foundation crew that's doing it right:</p>
                    <ol>
                      <li><strong>A real layout process</strong> - not just string lines eyeballed off a print, but verified corners and elevations before forms go up.</li>
                      <li><strong>Forms that are checked for square and plumb</strong> before the pour, not adjusted after.</li>
                      <li><strong>A finish and cure plan appropriate for the weather</strong> - concrete poured in April behaves differently than concrete poured in October, and the crew should be planning for that, not hoping for good luck.</li>
                      <li><strong>Clear communication about schedule</strong> - when the pour is happening, when forms come off, and when the site is ready for the next trade.</li>
                    </ol>
      
                    <h2>Ask the Right Questions Before You Sign</h2>
                    <p>Whether you're building in Wisconsin, Minnesota, or Iowa, ask any foundation contractor for a clear scope, a real schedule, and a crew that treats the pour under your home like the investment it is. A foundation is the one part of the house nobody sees once it's finished - which is exactly why it deserves the most scrutiny while it's being built.</p>
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
                    <h3>Laser Screed Floors - Protecting Warehouse and Plant Schedules</h3>
                    <p>On large commercial and industrial slabs, flatness isn't a finish preference - it's a schedule decision...</p>
                    <span className="text-link">Read article <span aria-hidden="true">&rarr;</span></span>
                  </div>
                </Link>
                <Link className="blog-card reveal" href="/blog/crew-tenure">
                  <div className="blog-card-media">
                    <img src="/assets/photos/blog-crew-tenure.jpg" alt="Reedy Concrete crew on a family-owned jobsite" width="900" height="700" />
                  </div>
                  <div className="blog-card-copy">
                    <span className="blog-card-tag">Company</span>
                    <h3>Crew Tenure - Why Long-Term Crews Change the Pour</h3>
                    <p>Concrete work rewards judgment as much as tools. Meet the family-owned crew behind Reedy Concrete's 40+ years...</p>
                    <span className="text-link">Read article <span aria-hidden="true">&rarr;</span></span>
                  </div>
                </Link>
              </div>
            </div>
          </section>
    </main>
  );
}
