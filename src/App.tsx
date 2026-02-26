type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

type SkillGroup = {
  heading: string;
  items: string[];
};

type Project = {
  name: string;
  stack: string;
  summary: string;
  highlights: string[];
};

const experiences: Experience[] = [
  {
    company: "CRE8 Labs Internship",
    role: "Front-End / Full-Stack Intern",
    period: "Jan 2026 - Present",
    highlights: [
      "Built 10+ reusable TypeScript UI components with React, Next.js, and Storybook to reduce duplicate implementation.",
      "Integrated Strapi CMS and backend APIs to deliver dynamic content in production features.",
      "Translated complex Figma specifications into responsive, high-performance components using GitHub Flow and Agile sprint workflows.",
    ],
  },
  {
    company: "CodeDay Labs Internship",
    role: "Software Development Intern",
    period: "Jan 2025 - Mar 2025",
    highlights: [
      "Improved reliability with Mocha + Chai unit tests, increasing coverage and reducing regressions.",
      "Onboarded into an unfamiliar codebase and delivered features aligned with existing architecture and testing standards.",
    ],
  },
  {
    company: "United States Army",
    role: "Senior Logistics and Operations Leader",
    period: "2002 - 2024",
    highlights: [
      "Led large-scale logistics, training, and operational missions while mentoring future leaders.",
      "Managed multimillion-dollar equipment and supply chains with automated tracking and data reporting.",
      "Improved transportation, maintenance, and distribution processes under high-pressure conditions.",
    ],
  },
];

const skillGroups: SkillGroup[] = [
  {
    heading: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    heading: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Storybook", "Figma", "Chromatic"],
  },
  {
    heading: "Backend & Data",
    items: ["Node.js", "Express.js", "REST APIs", "MySQL", "Strapi CMS", "Drizzle ORM"],
  },
  {
    heading: "Tools & DevOps",
    items: ["Docker", "Git/GitHub", "Vercel", "Postman", "Maven", "PM2", "FFmpeg", "Mocha", "Chai", "JUnit"],
  },
];

const projects: Project[] = [
  {
    name: "Salamander Centroid Finder",
    stack: "Java, JavaScript, Node.js, React, Next.js, Docker",
    summary:
      "A Dockerized video analysis platform that extracts frames, performs centroid detection, and returns analytical outputs through a modern UI + API architecture.",
    highlights: [
      "Designed a full-stack workflow connecting React/Next.js UI with an Express API layer.",
      "Implemented Java-based video processing and Maven-driven builds for reproducible execution.",
      "Containerized services to support scalable local and remote deployments.",
    ],
  },
  {
    name: "Hi-Res Meta Cleaner",
    stack: "Node.js, Express, MySQL, multer, music-metadata",
    summary:
      "An audio metadata management system for bulk upload, extraction, normalization, and export across large hi-res music libraries.",
    highlights: [
      "Built automated cleanup workflows for inconsistent or missing metadata tags.",
      "Implemented batch editing and normalization tools to speed up large-library maintenance.",
      "Added export capabilities to support long-term archival and data portability.",
    ],
  },
];

const statChips = [
  "BAS Software Development - June 2026",
  "Front-End / Full-Stack Intern",
  "22 Years U.S. Army Leadership",
];

export default function App() {
  const profilePhoto = `${import.meta.env.BASE_URL}profile.jpg`;
  const currentYear = new Date().getFullYear();

  return (
    <div className="site">
      <div className="bg-orb bg-orb-one" aria-hidden="true" />
      <div className="bg-orb bg-orb-two" aria-hidden="true" />

      <header className="hero section">
        <div className="hero-copy reveal">
          <p className="kicker">Software Engineering Portfolio</p>
          <h1>Matthew Larsen</h1>
          <p className="subtitle">
            Software Development BAS student and intern building production-grade React, Next.js, and Dockerized
            applications.
          </p>
          <div className="chip-row">
            {statChips.map((chip) => (
              <span key={chip} className="chip">
                {chip}
              </span>
            ))}
          </div>
          <div className="hero-cta">
            <a href="https://github.com/mlarsen-source" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/mlarsen-source" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:mlarsen123180@yahoo.com?subject=Resume%20Request" rel="noreferrer">
              Request Resume
            </a>
          </div>
        </div>

        <div className="profile-card reveal">
          <img src={profilePhoto} alt="Portrait of Matthew Larsen" />
          <p>Federal Way, WA</p>
          <a href="mailto:mlarsen123180@yahoo.com">mlarsen123180@yahoo.com</a>
          <a href="tel:+13603591357">360-359-1357</a>
          <a href="https://mlarsen-source.github.io/portfolio/" target="_blank" rel="noreferrer">
            mlarsen-source.github.io/portfolio
          </a>
        </div>
      </header>

      <main>
        <section className="section reveal" aria-labelledby="about-heading">
          <h2 id="about-heading">Summary</h2>
          <p className="lead">
            I am transitioning from military leadership to software engineering with current internship experience in
            production web apps. I focus on scalable UI architecture, API/CMS integration, and collaborative delivery
            through code reviews and Agile workflows.
          </p>
        </section>

        <section className="section reveal" aria-labelledby="experience-heading">
          <h2 id="experience-heading">Experience</h2>
          <div className="card-grid">
            {experiences.map((item) => (
              <article key={item.company} className="panel">
                <p className="panel-period">{item.period}</p>
                <h3>{item.company}</h3>
                <p className="panel-role">{item.role}</p>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" aria-labelledby="projects-heading">
          <h2 id="projects-heading">Featured Projects</h2>
          <div className="card-grid">
            {projects.map((project) => (
              <article key={project.name} className="panel">
                <h3>{project.name}</h3>
                <p className="stack">{project.stack}</p>
                <p>{project.summary}</p>
                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" aria-labelledby="skills-heading">
          <h2 id="skills-heading">Technical Skills</h2>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article key={group.heading} className="panel">
                <h3>{group.heading}</h3>
                <ul className="tag-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal education" aria-labelledby="education-heading">
          <h2 id="education-heading">Education</h2>
          <p>Green River College, Auburn, Washington</p>
          <p>Bachelor of Applied Science in Software Development</p>
          <p>Expected Graduation: June 2026</p>
        </section>
      </main>

      <footer className="section footer">
        <p>Copyright {currentYear} Matthew Larsen</p>
      </footer>
    </div>
  );
}
