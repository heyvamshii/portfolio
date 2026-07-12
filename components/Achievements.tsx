import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container-narrow">
        <h2 className="section-heading">
          <span className="font-mono text-accent2 text-base mr-2">06.</span>
          Achievements
        </h2>
        <p className="section-subheading">
          Leadership and initiatives beyond coursework.
        </p>

        <div className="card p-6 md:p-8">
          <ul className="space-y-4 max-w-3xl">
            {achievements.map((item) => (
              <li key={item} className="flex gap-3 text-muted leading-relaxed">
                <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
