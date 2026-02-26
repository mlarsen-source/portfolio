import type { EducationEntry } from "../types";

type EducationSectionProps = {
  educationEntries: EducationEntry[];
};

export default function EducationSection({ educationEntries }: EducationSectionProps) {
  return (
    <section className="section reveal education" aria-labelledby="education-heading">
      <h2 id="education-heading">Education</h2>
      {educationEntries.map((entry) => (
        <article key={`${entry.campus}-${entry.program}`} className="education-entry">
          <p className="education-campus">{entry.campus}</p>
          <p>{entry.program}</p>
          <p>{entry.detail}</p>
          {entry.honors ? <p>{entry.honors}</p> : null}
        </article>
      ))}
    </section>
  );
}
