import type { MilitaryRole } from "../types";

type MilitarySectionProps = {
  militaryHistory: MilitaryRole[];
};

export default function MilitarySection({ militaryHistory }: MilitarySectionProps) {
  return (
    <section className="section reveal" aria-labelledby="military-heading">
      <h2 id="military-heading">Complete Military History</h2>
      <p className="panel-role">United States Army (2002 - 2024)</p>
      <div className="card-grid military-grid">
        {militaryHistory.map((role) => (
          <article key={role.title} className="panel">
            <p className="panel-period">{role.period}</p>
            <h3>{role.title}</h3>
            <ul>
              {role.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
