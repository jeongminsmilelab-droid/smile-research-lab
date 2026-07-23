import type { Metadata } from "next";
import { awardDetails } from "../../content/award-details";
import {
  awardEnglishEvents,
  awardEnglishNames,
  awardEnglishTitles,
} from "../../content/bilingual-content";
import { awards } from "../../content/site-content";
import { PageHero, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Awards | SMILE Research Lab",
};

export default function AwardsPage() {
  const years = [...new Set(awards.map((item) => item.year))];

  return (
    <main>
      <SiteHeader active="awards" />
      <PageHero
        kicker="Recognition"
        title="Awards and honors from the SMILE community"
        description="Selected recognition received by our students and research teams from 2018 to 2026. English translations are presented with official Korean titles retained for reference."
      />

      <section className="content-section awards-section" aria-label="Awards by year">
        <div className="site-shell awards-intro">
          <div>
            <p className="section-kicker">2018–2026</p>
          </div>
          <p>
            The record includes paper and poster awards, student researcher honors,
            dissertation recognition, and a selected research competition.
          </p>
        </div>

        <div className="site-shell award-years">
          {years.map((year) => (
            <section className="award-year" key={year} aria-labelledby={`awards-${year}`}>
              <h2 id={`awards-${year}`}>{year}</h2>
              <div className="award-list">
                {awards.filter((item) => item.year === year).map((item) => (
                  <article className="award-item" key={`${item.award}-${item.title}`}>
                    <div className="award-meta">
                      <span>
                        {awardEnglishNames[item.award] ?? item.award}
                        {awardEnglishNames[item.award] && <small lang="ko">{item.award}</small>}
                      </span>
                      <span>{item.type}</span>
                    </div>
                    <h3>{awardEnglishTitles[item.title] ?? item.title}</h3>
                    {awardEnglishTitles[item.title] && (
                      <p className="original-title" lang="ko">{item.title}</p>
                    )}
                    <p className="award-event">
                      {awardEnglishEvents[item.event] ?? item.event}
                      {awardEnglishEvents[item.event] && (
                        <span className="award-event-original" lang="ko">{item.event}</span>
                      )}
                    </p>
                    <p className="award-recipients"><strong>Recipient(s)</strong>{item.recipients}, Jeongmin Lee (이정민)</p>
                    <details className="award-details">
                      <summary>View details</summary>
                      <div>
                        {awardDetails[item.title].map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </details>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
