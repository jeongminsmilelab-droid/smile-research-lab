import type { Metadata } from "next";
import { lab, researchTracks } from "../../content/site-content";
import { ArrowIcon, PageHero, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = { title: "Join & Contact | SMILE Research Lab" };

export default function ContactPage() {
  return (
    <main>
      <SiteHeader active="contact" />
      <PageHero
        kicker="Join & Contact"
        title="Bring a question worth studying"
        description="We welcome thoughtful inquiries from prospective graduate students, educators, and collaborators whose questions connect with our research."
      />
      <section className="content-section join-section">
        <div className="site-shell join-grid">
          <article>
            <p className="section-kicker">Prospective students</p>
            <h2>Study with SMILE</h2>
            <p>In your inquiry, briefly introduce your background, the question you hope to study, and the SMILE research track that best fits your interests.</p>
            <p>Graduate admission follows Ewha Womans University’s formal application and review process.</p>
          </article>
          <article>
            <p className="section-kicker">Research collaboration</p>
            <h2>Work with us</h2>
            <p>We are open to collaborations that connect learning theory, process data, educational design, and responsible uses of AI.</p>
            <ul>{researchTracks.map((track) => <li key={track.number}>{track.shortTitle}</li>)}</ul>
          </article>
        </div>
      </section>
      <section className="contact-detail-section content-section">
        <div className="site-shell contact-detail-grid">
          <div className="section-heading"><p className="section-kicker">Contact</p><h2>SMILE Research Lab</h2></div>
          <div className="contact-details">
            <p><span>Email</span><a href={`mailto:${lab.email}`}>{lab.email}</a></p>
            <p><span>Location</span>{lab.address}</p>
            <p><span>Affiliation</span>{lab.affiliation}</p>
            <a className="button button-primary" href={`mailto:${lab.email}`}><span>Send an email</span><span className="button-arrow"><ArrowIcon /></span></a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
