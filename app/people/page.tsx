import type { Metadata } from "next";
import { lab, team } from "../../content/site-content";
import { PageHero, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = { title: "People | SMILE Research Lab" };

export default function PeoplePage() {
  return (
    <main>
      <SiteHeader active="people" />
      <PageHero
        kicker="People"
        title="People who make learning move forward"
        description="Meet the director, current members, doctoral candidates, and alumni of the SMILE Research Lab."
      />
      <section className="people-section content-section" aria-labelledby="director-title">
        <div className="site-shell">
          <div className="section-heading compact-heading">
            <p className="section-kicker">Director</p>
            <h2 id="director-title">Lab Director</h2>
          </div>
          <article className="director-card">
            <div className="avatar avatar-director" aria-hidden="true">{team.director.initials}</div>
            <div>
              <p className="person-role">Director</p>
              <h3>{team.director.name}, <span>{team.director.degree}</span></h3>
              <p className="director-affiliation">
                {team.director.role}<br />
                {team.director.institution}
              </p>
              <a href={`mailto:${lab.email}`}>{lab.email}</a>
            </div>
            <div className="director-orbit" aria-hidden="true"><i /><i /><i /></div>
          </article>

          <div className="section-heading member-heading">
            <p className="section-kicker">Research community</p>
            <h2>Current Members</h2>
          </div>
          <div className="member-grid">
            {team.currentMembers.map((member) => (
              <article className="member-card" key={member.name}>
                <div className="avatar" aria-hidden="true">{member.initials}</div>
                <div><h3>{member.name}</h3></div>
              </article>
            ))}
          </div>

          <div className="section-heading group-heading">
            <p className="section-kicker">Advanced doctoral researchers</p>
            <h2>Doctoral Candidates <span>(ABD)</span></h2>
          </div>
          <div className="member-grid">
            {team.doctoralCandidates.map((member) => (
              <article className="member-card" key={member.name}>
                <div className="avatar" aria-hidden="true">{member.initials}</div>
                <div><h3>{member.name}</h3></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="alumni-section content-section">
        <div className="site-shell">
          <div className="section-heading alumni-heading">
            <p className="section-kicker">Alumni</p>
            <h2>Our growing research community</h2>
          </div>

          <section className="alumni-group" aria-labelledby="phd-alumni-title">
            <h3 id="phd-alumni-title">Ph.D. Alumni</h3>
            <div className="alumni-list">
              {team.alumni.phd.map((alum) => (
                <article className="alumni-card" key={alum.name}>
                  <h4>{alum.name}</h4>
                  <p>{alum.affiliation}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="alumni-group" aria-labelledby="masters-alumni-title">
            <h3 id="masters-alumni-title">Master’s Alumni</h3>
            <div className="alumni-list">
              {team.alumni.masters.map((alum) => (
                <article className="alumni-card" key={alum.name}>
                  <h4>{alum.name}</h4>
                  {alum.affiliation && <p>{alum.affiliation}</p>}
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
