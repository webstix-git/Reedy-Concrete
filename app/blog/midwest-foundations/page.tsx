import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "What Midwest Clients Should Expect From a Foundation Pour | Reedy Concrete Blog",
  description: "What clients should expect from a foundation pour: careful layout, experienced crews, and dependable results from Reedy Concrete.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        title="Blog"
        description="What Midwest clients should expect from a foundation pour: careful layout, experienced crews, and dependable results from Reedy Concrete."
        ariaLabel="Blog article"
      />
      
          <div className="breadcrumb-strip breadcrumb-strip--blog">
            <div className="wrap">
              <nav className="breadcrumb breadcrumb--strip" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <Link href="/blog">Blog</Link>
                <span aria-hidden="true">/</span>
                <span className="current">What Midwest Clients Should Expect From a Foundation Pour</span>
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
                    <p>A foundation has to be strong, durable, and finished without the delays that complex concrete work can create. That is core work for Reedy Concrete, on residential, commercial, industrial, and agricultural projects.</p>
      
                    <h2>Why Foundation Work Demands Experienced Crews</h2>
                    <p>A foundation has to meet project specifications and stay on schedule. That takes more than a crew that can place concrete. It takes people who know how to protect quality on demanding jobs:</p>
                    <ul>
                      <li><strong>Precision.</strong> Layout and placement have to be accurate before concrete goes in, not corrected after.</li>
                      <li><strong>Reliability.</strong> Customers need a contractor who shows up ready and finishes the job on time.</li>
                      <li><strong>Capacity.</strong> Large-scale and demanding projects need crews and equipment that can handle the work efficiently.</li>
                    </ul>
      
                    <h2>What a Careful Pour Looks Like</h2>
                    <p>At Reedy Concrete, foundation work starts with careful layout and experienced crews. We use Trimble Robotic Stations to support precise layout and measurement before concrete is placed, which cuts down on the kind of mistakes that are hard and expensive to fix later. That same discipline carries through into precise flatwork.</p>
                    <p>A few things clients should expect from a foundation crew that is doing it right:</p>
                    <ol>
                      <li><strong>A real layout process,</strong> verified with modern technology, including Trimble Robotic Stations, before the pour.</li>
                      <li><strong>Quality workmanship,</strong> with structural integrity and a finish that holds up after pour day.</li>
                      <li><strong>Reliable communication,</strong> with a clear plan for when the work happens and how it stays on schedule.</li>
                      <li><strong>On-time completion,</strong> one of three promises we build our reputation on, alongside reliable service and competitive pricing.</li>
                    </ol>
      
                    <h2>Ask the Right Questions Before You Sign</h2>
                    <p>Whether you are building in Wisconsin, Minnesota, or Iowa, ask any foundation contractor for a clear scope, a real schedule, and a crew that treats the work like it has to last. Reedy Concrete is a family-owned and operated contractor based in Galesville, Wisconsin, with over 50 years in the industry, highly trained crews, and the Reedy family still leading the business.</p>
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
                    <h3>Laser Screed Floors: Precision on Commercial and Industrial Work</h3>
                    <p>Somero Laser Screeds and Trimble Robotic Stations help Reedy Concrete deliver precise flatwork on large-scale projects...</p>
                    <span className="text-link">Read article <span aria-hidden="true">&rarr;</span></span>
                  </div>
                </Link>
                <Link className="blog-card reveal" href="/blog/crew-tenure">
                  <div className="blog-card-media">
                    <img src="/assets/photos/blog-crew-tenure.jpg" alt="Reedy Concrete crew on a family-owned jobsite" width="900" height="700" />
                  </div>
                  <div className="blog-card-copy">
                    <span className="blog-card-tag">Company</span>
                    <h3>Crew Tenure: Why Long-Term Crews Change the Pour</h3>
                    <p>Concrete work rewards judgment as much as tools. Meet the family-owned crew behind Reedy Concrete's 50 years...</p>
                    <span className="text-link">Read article <span aria-hidden="true">&rarr;</span></span>
                  </div>
                </Link>
              </div>
            </div>
          </section>
    </main>
  );
}
