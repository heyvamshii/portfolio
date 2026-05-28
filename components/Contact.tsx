import { profile } from "@/lib/data";

export default function Contact() {
  const linkedinUrl = profile.social.linkedin || "#";

  return (
    <section id="contact" className="section">
      <div className="container-narrow text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          <span className="font-mono text-accent2 text-base mr-2">05.</span>
          Let&apos;s build something together
        </h2>

        <p className="mx-auto mt-2 max-w-xl text-muted leading-relaxed">
          I&apos;m open to internships and full-time roles on Python and AI
          toolkit-related projects. If you have an idea or just want to say hi,
          my inbox is always open.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Say hello
          </a>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group card flex items-center gap-4 px-6 py-4 w-full max-w-md text-left transition hover:border-accent/60"
            aria-label="Connect on LinkedIn"
          >
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#0a66c2] text-white">
              <LinkedinIcon />
            </span>
            <span className="flex flex-col">
              <span className="text-xs font-mono uppercase tracking-wide text-muted">
                LinkedIn
              </span>
              <span className="font-semibold">{profile.name}</span>
            </span>
            <span className="ml-auto text-muted transition group-hover:text-text">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function LinkedinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43A2.06 2.06 0 1 1 5.34 3.3a2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
