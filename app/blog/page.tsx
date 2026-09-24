import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Blog | Reedy Concrete",
  description: "Field notes from Reedy Concrete on foundations, laser screed flatwork, and family-owned crews serving Wisconsin, Minnesota, and Iowa.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        title="Blog"
        description="Field notes from Reedy Concrete on foundations, laser screed flatwork, and family-owned crews serving Wisconsin, Minnesota, and Iowa."
        ariaLabel="Blog"
      />
      
          <div className="breadcrumb-strip breadcrumb-strip--blog">
            <div className="wrap">
              <nav className="breadcrumb breadcrumb--strip" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span className="current">Blog</span>
              </nav>
            </div>
          </div>
      
          <section className="blog-cards-section" aria-label="Blog posts">
            <div className="wrap">
              <div className="blog-cards-head reveal">
                <p className="section-label">From the Field</p>
                <h2 className="section-title">Three reads for better pours</h2>
                <p className="section-intro">Pick an article on laser screed floors, Midwest foundations, or long-tenure crews, then open the full story.</p>
              </div>
      
              <div className="blog-cards">
                <Link className="blog-card reveal" href="/blog/laser-screed">
                  <div className="blog-card-media">
                    <img src="/assets/photos/blog-laser-screed.jpg" alt="Large industrial concrete floor pour" width="900" height="700" />
                  </div>
                  <div className="blog-card-copy">
                    <span className="blog-card-tag">Commercial &amp; Industrial</span>
                    <h3>Laser Screed Floors: Precision on Commercial and Industrial Work</h3>
                    <p>Somero Laser Screeds and Trimble Robotic Stations help Reedy Concrete deliver precise flatwork on large-scale projects...</p>
                    <span className="text-link">Read full article <span aria-hidden="true">&rarr;</span></span>
                  </div>
                </Link>
      
                <Link className="blog-card reveal" href="/blog/midwest-foundations">
                  <div className="blog-card-media">
                    <img src="/assets/photos/blog-midwest-foundations.jpg" alt="Residential foundation forms and concrete work" width="900" height="700" />
                  </div>
                  <div className="blog-card-copy">
                    <span className="blog-card-tag">Residential</span>
                    <h3>Midwest Foundations: What Clients Should Expect From the Pour</h3>
                    <p>Reedy Concrete builds solid, dependable foundations with experienced crews and precise layout across Wisconsin, Minnesota, and Iowa...</p>
                    <span className="text-link">Read full article <span aria-hidden="true">&rarr;</span></span>
                  </div>
                </Link>
      
                <Link className="blog-card reveal" href="/blog/crew-tenure">
                  <div className="blog-card-media">
                    <img src="/assets/photos/blog-crew-tenure.jpg" alt="Reedy Concrete crew on a family-owned jobsite" width="900" height="700" />
                  </div>
                  <div className="blog-card-copy">
                    <span className="blog-card-tag">Company</span>
                    <h3>Crew Tenure: Why Long-Term Crews Change the Pour</h3>
                    <p>Concrete work rewards judgment as much as tools. Meet the family-owned crew behind more than 50 years of Reedy Concrete work.</p>
                    <span className="text-link">Read full article <span aria-hidden="true">&rarr;</span></span>
                  </div>
                </Link>
              </div>
            </div>
          </section>
      
          <section className="cta-band">
            <div className="cta-band-media" aria-hidden="true">
              <img src="/assets/photos/what-1.jpg" alt="" width="1600" height="900" />
            </div>
            <div className="cta-band-inner reveal">
              <div className="cta-band-copy">
                <h2 className="section-title">Read the notes. Then put them <span className="break">to <span className="accent">work on your site</span>.</span></h2>
                <p>If a foundation, warehouse floor, or crew question is on your desk, send the details or call us and we will walk the scope with you.</p>
              </div>
              <div className="actions">
                <Link className="btn btn-primary" href="/contact">Request a Quote</Link>
                <Link className="btn btn-outline" href="/services">Our services</Link>
              </div>
            </div>
          </section>
    </main>
  );
}
