import { lab, newsItems, publications, researchTracks } from "../content/site-content";
import { publicationEnglishTitles } from "../content/bilingual-content";
import {
  ArrowIcon,
  ContactCta,
  LearningNetwork,
  SiteFooter,
  SiteHeader,
  TrackGlyph,
  siteHref,
} from "./components";

export default function Home() {
  return (
    <main>
      <SiteHeader active="home" />

      <div className="site-shell">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Educational Technology · Ewha Womans University</p>
            <h1 id="hero-title">
              Designing learning environments where people regulate, collaborate, and thrive.
            </h1>
            <div className="hero-actions">
              <a className="button button-primary" href={siteHref("/research")}>
                <span>Explore our research</span>
                <span className="button-arrow"><ArrowIcon /></span>
              </a>
              <a className="button button-secondary" href={siteHref("/people")}>Meet the team</a>
            </div>
          </div>
          <LearningNetwork />
        </section>

        <section className="track-rail" aria-labelledby="tracks-heading">
          <div className="section-label-row">
            <h2 id="tracks-heading">Research tracks</h2>
            <span />
          </div>
          <div className="track-grid">
            {researchTracks.map((track, index) => (
              <a className={`track-item ${track.tone}`} href={siteHref(`/research#track-${index + 1}`)} key={track.number}>
                <TrackGlyph index={index} />
                <span className="track-copy">
                  <span className="track-number">{track.number}</span>
                  <span className="track-name">{track.shortTitle}</span>
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>

      <section className="about-section content-section home-about">
        <div className="site-shell about-grid">
          <div className="section-heading">
            <p className="section-kicker">About SMILE</p>
            <h2>Learning technology should strengthen human agency.</h2>
          </div>
          <div className="about-copy">
            <p className="lead-copy">
              {lab.expandedName} is a research community in the Department of
              Educational Technology at Ewha Womans University.
            </p>
            <a className="light-link" href={siteHref("/research")}>Discover our research approach <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="content-section home-publications">
        <div className="site-shell preview-heading">
          <div className="section-heading">
            <p className="section-kicker">Selected publications</p>
            <h2>Recent work</h2>
          </div>
          <a className="text-link" href={siteHref("/publications")}>View all publications <ArrowIcon /></a>
        </div>
        <div className="site-shell publication-preview-grid">
          {publications.slice(0, 3).map((publication) => (
            <article className="publication-preview-card" key={`${publication.year}-${publication.title}`}>
              <div className="publication-meta">
                <span>{publication.year}</span>
                <span className="publication-tag">{publication.label}</span>
              </div>
              <h3>{publicationEnglishTitles[publication.title] ?? publication.title}</h3>
              {publicationEnglishTitles[publication.title] && (
                <p className="original-title" lang="ko">{publication.title}</p>
              )}
              <p>{publication.venue}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section home-news">
        <div className="site-shell preview-heading">
          <div className="section-heading">
            <p className="section-kicker">News</p>
            <h2>Latest from SMILE</h2>
          </div>
          <a className="text-link" href={siteHref("/news")}>All news <ArrowIcon /></a>
        </div>
        <div className="site-shell news-preview-grid">
          {newsItems.slice(0, 3).map((item) => (
            <article className="news-card" key={`${item.year}-${item.title}`}>
              <p className="news-meta"><span>{item.year}</span>{item.category}</p>
              <h3>{item.title}</h3>
              {"originalTitle" in item && item.originalTitle && (
                <p className="news-original-title" lang="ko">{item.originalTitle}</p>
              )}
              <p className="news-description">{item.description}</p>
              {"url" in item && item.url && (
                <a className="text-link news-source-link" href={item.url} target="_blank" rel="noreferrer">
                  Read article <ArrowIcon />
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <ContactCta />
      <SiteFooter />
    </main>
  );
}
