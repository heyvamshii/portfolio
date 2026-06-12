import { projects, type Project } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-narrow">
        <h2 className="section-heading">
          <span className="font-mono text-accent2 text-base mr-2">03.</span>
          My Projects
        </h2>
        <p className="section-subheading">
          A few things I&apos;ve built while learning.
        </p>

        <div className="space-y-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card p-6 md:p-8 relative">
      <h3 className="text-xl font-bold pr-28">{project.title}</h3>
      <p className="mt-3 text-muted leading-relaxed max-w-3xl">
        {project.description}
      </p>

      {project.bullets && project.bullets.length > 0 && (
        <ul className="mt-4 space-y-2 max-w-3xl">
          {project.bullets.map((b) => (
            <li
              key={b.label}
              className="flex gap-3 text-sm text-muted leading-relaxed"
            >
              <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent2" />
              <span>
                <span className="font-semibold text-text">{b.label}:</span>{" "}
                {b.text}
              </span>
            </li>
          ))}
        </ul>
      )}

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li key={t} className="pill">
            {t}
          </li>
        ))}
      </ul>

      {(project.live || project.github) && (
        <div className="mt-6 flex justify-end gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live site`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-sm font-semibold text-text transition hover:border-accent/60 hover:bg-surface hover:text-accent2"
            >
              <GlobeIcon />
              Live Site
              <ArrowIcon />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-sm font-semibold text-text transition hover:border-accent/60 hover:bg-surface hover:text-accent2"
            >
              <GithubIcon />
              GitHub
              <ArrowIcon />
            </a>
          )}
        </div>
      )}
    </article>
  );
}

function GlobeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" strokeLinecap="round" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.03 0c2.3-1.55 3.31-1.23 3.31-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.28 0 .32.22.7.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
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
