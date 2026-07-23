import type { Metadata } from "next";
import { newsItems } from "../../content/site-content";
import { ArrowIcon, PageHero, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = { title: "News | SMILE Research Lab" };

export default function NewsPage() {
  return (
    <main>
      <SiteHeader active="news" />
      <PageHero
        kicker="News"
        title="Updates from the SMILE community"
        description="Recent publications, presentations, awards, and milestones from our researchers."
      />
      <section className="content-section news-page">
        <div className="site-shell news-list">
          {newsItems.map((item) => (
            <article className="news-list-item" key={`${item.year}-${item.title}`}>
              <p className="news-meta"><span>{item.year}</span>{item.category}</p>
              <div className="news-list-copy">
                <h2>{item.title}</h2>
                {"originalTitle" in item && item.originalTitle && (
                  <p className="news-original-title" lang="ko">{item.originalTitle}</p>
                )}
                <p className="news-description">{item.description}</p>
                {"url" in item && item.url && (
                  <a className="text-link news-source-link" href={item.url} target="_blank" rel="noreferrer">
                    Read the original article <ArrowIcon />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
