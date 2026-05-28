import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-narrow">
        <h2 className="section-heading">
          <span className="font-mono text-accent2 text-base mr-2">01.</span>
          {about.heading}
        </h2>

        <div className="space-y-4 text-muted leading-relaxed max-w-3xl">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
