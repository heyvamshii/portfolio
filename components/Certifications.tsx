import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container-narrow">
        <h2 className="section-heading">
          <span className="font-mono text-accent2 text-base mr-2">05.</span>
          Certifications
        </h2>
        <p className="section-subheading">
          Hands-on training beyond the degree.
        </p>

        <div className="space-y-6">
          {certifications.map((c) => (
            <article key={c.title} className="card p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <span className="font-mono text-xs text-muted">{c.date}</span>
              </div>
              <p className="mt-1 text-sm text-accent2">{c.issuer}</p>

              <p className="mt-4 text-sm text-muted leading-relaxed max-w-3xl">
                {c.description}
              </p>

              {c.skills.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {c.skills.map((s) => (
                    <li key={s} className="pill">
                      {s}
                    </li>
                  ))}
                </ul>
              )}

              {c.url && (
                <div className="mt-6 flex justify-end">
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${c.title} credential verification`}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-sm font-semibold text-text transition hover:border-accent/60 hover:bg-surface hover:text-accent2"
                  >
                    Verify Credential
                    <ArrowIcon />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 17L17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
