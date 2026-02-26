import type { SkillGroup } from "../types";

type SkillsSectionProps = {
  skillGroups: SkillGroup[];
};

export default function SkillsSection({ skillGroups }: SkillsSectionProps) {
  return (
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
  );
}
