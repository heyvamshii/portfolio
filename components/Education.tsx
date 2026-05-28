import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-narrow">
        <h2 className="section-heading">
          <span className="font-mono text-accent2 text-base mr-2">04.</span>
          Education
        </h2>
        <p className="section-subheading">
          Undergraduate Degree in Artificial Intelligence & Machine Learning.
        </p>

        <div className="space-y-6">
          {education.map((e, i) => (
            <article key={i} className="card p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                <h3 className="text-lg font-semibold">{e.school}</h3>
                <span className="font-mono text-xs text-muted">{e.period}</span>
              </div>
              <p className="mt-1 text-sm text-accent2">{e.degree}</p>

              {e.skills && e.skills.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {e.skills.map((s) => (
                    <li key={s} className="pill">
                      {s}
                    </li>
                  ))}
                </ul>
              )}

              {e.details && (
                <p className="mt-4 text-sm text-muted leading-relaxed">
                  {e.details}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
