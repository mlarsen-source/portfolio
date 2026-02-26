import type { SocialLink } from "../types";

type HeroProps = {
  profilePhoto: string;
  name: string;
  title: string;
  caption: string;
  kicker: string;
  summary: string;
  requestResumeUrl: string;
  socialLinks: SocialLink[];
};

export default function Hero({
  profilePhoto,
  name,
  title,
  caption,
  kicker,
  summary,
  requestResumeUrl,
  socialLinks,
}: HeroProps) {
  return (
    <header className="hero section">
      <div className="profile-card reveal">
        <img src={profilePhoto} alt={`Portrait of ${name}`} />
        <p className="profile-title">{title}</p>
        <p className="profile-caption">{caption}</p>
      </div>

      <div className="hero-copy reveal">
        <p className="kicker">{kicker}</p>
        <h1>{name}</h1>

        <section className="hero-summary" aria-labelledby="about-heading">
          <h2 id="about-heading">Summary</h2>
          <p className="lead">{summary}</p>
          <div className="summary-actions">
            <a href={requestResumeUrl} target="_blank" rel="noreferrer">
              Request Resume
            </a>
          </div>
        </section>

        <nav className="hero-links" aria-label="Profile links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
              <img
                src={link.iconUrl.startsWith("http") ? link.iconUrl : `${import.meta.env.BASE_URL}${link.iconUrl}`}
                alt=""
                width="18"
                height="18"
                aria-hidden="true"
              />
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
