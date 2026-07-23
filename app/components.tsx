import { lab } from "../content/site-content";

export type ActivePage = "home" | "research" | "people" | "publications" | "awards" | "news" | "contact";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const githubPagesBasePath =
  process.env.BUILD_TARGET === "github-pages" && repositoryName
    ? `/${repositoryName}`
    : "";

export function siteHref(path: string) {
  return `${githubPagesBasePath}${path}`;
}

const navigation: Array<{ key: ActivePage; label: string; href: string }> = [
  { key: "home", label: "Home", href: "/" },
  { key: "research", label: "Research", href: "/research" },
  { key: "people", label: "People", href: "/people" },
  { key: "publications", label: "Publications", href: "/publications" },
  { key: "awards", label: "Awards", href: "/awards" },
  { key: "news", label: "News", href: "/news" },
  { key: "contact", label: "Join & Contact", href: "/contact" },
];

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

export function SiteHeader({ active }: { active: ActivePage }) {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <a className="wordmark" href={siteHref("/")} aria-label="SMILE Research Lab home">
          <span className="wordmark-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>SMILE Research Lab</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              className={active === item.key ? "nav-active" : undefined}
              href={siteHref(item.href)}
              aria-current={active === item.key ? "page" : undefined}
              key={item.key}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="site-shell footer-inner">
        <div>
          <strong>{lab.name}</strong>
          <span>{lab.affiliation}</span>
        </div>
        <div>
          <span>{lab.address}</span>
          <a href={`mailto:${lab.email}`}>{lab.email}</a>
        </div>
        <a className="back-to-top" href={siteHref("/")}>Home ↑</a>
      </div>
    </footer>
  );
}

export function TrackGlyph({ index }: { index: number }) {
  return (
    <span className={`track-glyph glyph-${index + 1}`} aria-hidden="true">
      <span className="glyph-orbit orbit-a" />
      <span className="glyph-orbit orbit-b" />
      <span className="glyph-center" />
      <span className="glyph-dot dot-a" />
      <span className="glyph-dot dot-b" />
      <span className="glyph-dot dot-c" />
    </span>
  );
}

export function LearningNetwork({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "network-art network-compact" : "network-art"} aria-hidden="true">
      <svg viewBox="0 0 700 580" role="presentation">
        <g className="network-orbits">
          <ellipse cx="373" cy="289" rx="279" ry="172" transform="rotate(-18 373 289)" />
          <ellipse cx="383" cy="288" rx="230" ry="278" transform="rotate(38 383 288)" />
          <ellipse className="dashed" cx="397" cy="296" rx="303" ry="154" transform="rotate(20 397 296)" />
          <ellipse className="soft" cx="373" cy="289" rx="174" ry="248" transform="rotate(-54 373 289)" />
        </g>
        <g className="connections">
          <path d="M43 302 178 213 288 123 409 282 589 180 673 241" />
          <path d="M99 516 210 391 409 282 548 325 645 444" />
          <path d="M178 213 210 391 330 511 548 325 589 180" />
          <path d="M288 123 413 107 589 180 645 444" />
          <path d="M99 516 330 511 645 444" />
          <path d="M409 282 436 448 548 325" />
          <path d="M210 391 294 288 409 282 436 448" />
          <path d="M294 288 288 123 413 107" />
        </g>
        <g className="minor-nodes">
          <circle cx="43" cy="302" r="12" className="teal-node" />
          <circle cx="178" cy="213" r="8" className="navy-node" />
          <circle cx="288" cy="123" r="7" className="navy-node" />
          <circle cx="413" cy="107" r="6" className="sky-node" />
          <circle cx="589" cy="180" r="7" className="teal-node" />
          <circle cx="673" cy="241" r="10" className="navy-node" />
          <circle cx="645" cy="444" r="10" className="teal-node" />
          <circle cx="548" cy="325" r="7" className="navy-node" />
          <circle cx="436" cy="448" r="9" className="sky-node" />
          <circle cx="330" cy="511" r="5" className="navy-node" />
          <circle cx="99" cy="516" r="9" className="teal-node" />
          <circle cx="210" cy="391" r="8" className="navy-node" />
          <circle cx="294" cy="288" r="5" className="sky-node" />
          <circle cx="511" cy="500" r="5" className="navy-node" />
          <circle cx="630" cy="101" r="5" className="sky-node" />
          <circle cx="356" cy="183" r="5" className="teal-node" />
        </g>
        <g className="anchor anchor-teal">
          <circle cx="409" cy="282" r="46" className="halo" />
          <circle cx="409" cy="282" r="24" className="ring" />
          <circle cx="409" cy="282" r="15" className="core" />
        </g>
        <g className="anchor anchor-sky">
          <circle cx="548" cy="325" r="40" className="halo" />
          <circle cx="548" cy="325" r="21" className="ring" />
          <circle cx="548" cy="325" r="13" className="core" />
        </g>
        <g className="anchor anchor-navy">
          <circle cx="210" cy="391" r="25" className="halo" />
          <circle cx="210" cy="391" r="18" className="ring" />
          <circle cx="210" cy="391" r="11" className="core" />
        </g>
      </svg>
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="page-hero">
      <div className="site-shell page-hero-inner">
        <div>
          <p className="eyebrow">{kicker}</p>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </div>
        <LearningNetwork compact />
      </div>
    </section>
  );
}

export function ContactCta() {
  return (
    <section className="contact-section">
      <div className="site-shell contact-inner">
        <div>
          <p className="section-kicker">Connect</p>
          <h2>Interested in learning with SMILE?</h2>
        </div>
        <div className="contact-copy">
          <p>
            We welcome conversations with prospective graduate students, educators,
            and research collaborators whose questions connect with our work.
          </p>
          <a className="button button-primary" href={siteHref("/contact")}>
            <span>Join or collaborate</span>
            <span className="button-arrow"><ArrowIcon /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
