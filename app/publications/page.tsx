import type { Metadata } from "next";
import { publicationEnglishTitles } from "../../content/bilingual-content";
import { publications } from "../../content/site-content";
import { ArrowIcon, PageHero, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = { title: "Publications | SMILE Research Lab" };

const profileUrl = "https://www.ewha.ac.kr/ewha/professor/info.do?mode=view&pId=V3n4jH4NWS9FRYd2aiJmeQ%3D%3D";

function PublicationList({ category }: { category: "international" | "korean" }) {
  return (
    <div className="publication-list">
      {publications.filter((item) => item.category === category).map((publication) => (
        <article className="publication-item" key={`${publication.year}-${publication.title}`}>
          <div className="publication-meta"><span>{publication.year}</span><span className="publication-tag">{publication.label}</span></div>
          <h3>{publicationEnglishTitles[publication.title] ?? publication.title}</h3>
          {publicationEnglishTitles[publication.title] && (
            <p className="original-title" lang="ko">{publication.title}</p>
          )}
          <p>{publication.venue}</p>
        </article>
      ))}
    </div>
  );
}

export default function PublicationsPage() {
  return (
    <main>
      <SiteHeader active="publications" />
      <PageHero
        kicker="Publications"
        title="Research across learning, design, and human–AI interaction"
        description="Selected journal articles are presented in English, with Korean-language titles retained below their translations. The complete record is available through Ewha Womans University."
      />
      <nav className="site-shell page-subnav" aria-label="Publication categories">
        <a href="#international">International journals</a>
        <a href="#korean">Korean journals</a>
        <a href="#conference">Conferences & books</a>
      </nav>
      <section id="international" className="content-section publication-category">
        <div className="site-shell publication-layout">
          <div className="section-heading publication-intro"><p className="section-kicker">International journals</p><h2>Selected international work</h2></div>
          <PublicationList category="international" />
        </div>
      </section>
      <section id="korean" className="content-section publication-category category-alt">
        <div className="site-shell publication-layout">
          <div className="section-heading publication-intro"><p className="section-kicker">Korean journals</p><h2>Selected Korean-language work</h2></div>
          <PublicationList category="korean" />
        </div>
      </section>
      <section id="conference" className="content-section publication-category conference-section">
        <div className="site-shell conference-grid">
          <div className="section-heading"><p className="section-kicker">Conferences & books</p><h2>Full publication record</h2></div>
          <div><p>A curated list of conference papers and book chapters will be added as the archive is expanded.</p><a className="text-link" href={profileUrl} target="_blank" rel="noreferrer">View the official Ewha record <ArrowIcon /></a></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
