import type { Project } from "../types";

type ProjectsSectionProps = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="section reveal" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Featured Projects</h2>
      <div className="card-grid">
        {projects.map((project) => (
          <article key={project.name} className="panel">
            <h3>{project.name}</h3>
            <p className="stack">{project.stack}</p>
            <p>{project.summary}</p>
            <p className="project-links">
              {project.repoLinks.map((repo, index) => (
                <span key={repo.url}>
                  <a href={repo.url} target="_blank" rel="noreferrer">
                    {repo.label}
                  </a>
                  {index < project.repoLinks.length - 1 ? " | " : ""}
                </span>
              ))}
            </p>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
