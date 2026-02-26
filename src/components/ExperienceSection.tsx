import type { Experience } from "../types";

type ExperienceSectionProps = {
  experiences: Experience[];
};

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
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
  );
}
