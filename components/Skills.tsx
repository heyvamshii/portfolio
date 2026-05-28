import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-narrow">
        <h2 className="section-heading">
          <span className="font-mono text-accent2 text-base mr-2">02.</span>
          Skills & Tech
        </h2>
        <p className="section-subheading">
          A mix of the tools I reach for daily and the technologies I&apos;ve
          shipped real work with.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category} className="card p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent2">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="pill">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
