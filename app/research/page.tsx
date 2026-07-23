import type { Metadata } from "next";
import { researchTracks } from "../../content/site-content";
import { ContactCta, PageHero, SiteFooter, SiteHeader, TrackGlyph } from "../components";

export const metadata: Metadata = { title: "Research | SMILE Research Lab" };

export default function ResearchPage() {
  return (
    <main>
      <SiteHeader active="research" />
      <PageHero
        kicker="Research"
        title="Three connected lenses on learning design"
      />
      <section className="research-section content-section" aria-labelledby="research-detail-title">
        <div className="site-shell">
          <div className="section-heading wide-heading">
            <p className="section-kicker">Research tracks</p>
            <h2 id="research-detail-title">From understanding learning to designing support</h2>
          </div>
          <div className="research-cards">
            {researchTracks.map((track, index) => (
              <article id={`track-${index + 1}`} className={`research-card ${track.tone}`} key={track.number}>
                <div className="card-topline">
                  <span>{track.number}</span>
                  <TrackGlyph index={index} />
                </div>
                <p className="card-label">{track.shortTitle}</p>
                <h3>{track.title}</h3>
                <ul>{track.questions.map((question) => <li key={question}>{question}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="content-section approach-section">
        <div className="site-shell approach-grid">
          <div className="section-heading">
            <p className="section-kicker">How we work</p>
            <h2>Human questions first, technology second.</h2>
          </div>
          <div className="approach-list">
            <p><b>01</b><span><strong>Trace the learning process</strong></span></p>
            <p><b>02</b><span><strong>Design with educational purpose</strong></span></p>
            <p><b>03</b><span><strong>Study participation and judgment</strong></span></p>
          </div>
        </div>
      </section>
      <ContactCta />
      <SiteFooter />
    </main>
  );
}
