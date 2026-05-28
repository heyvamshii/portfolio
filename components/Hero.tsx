import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24"
    >
      <div className="container-narrow relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
          <div className="animate-fade-up">
            <p className="mb-4 font-mono text-sm text-accent2">
              Hello, my name is
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              {profile.name}.
            </h1>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-5xl">
              <span className="gradient-text">{profile.title}</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base text-muted md:text-lg">
              {profile.tagline}
            </p>
            <p className="mt-3 max-w-2xl text-sm font-medium text-accent2 md:text-base">
              {profile.availability}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                View my work
                <ArrowIcon />
              </a>
              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5 text-muted">
              {profile.social.linkedin && (
                <Social href={profile.social.linkedin} label="LinkedIn">
                  <LinkedinIcon />
                </Social>
              )}
              {profile.social.github && (
                <Social href={profile.social.github} label="GitHub">
                  <GithubIcon />
                </Social>
              )}
              {profile.social.twitter && (
                <Social href={profile.social.twitter} label="Twitter">
                  <TwitterIcon />
                </Social>
              )}
              {profile.social.instagram && (
                <Social href={profile.social.instagram} label="Instagram">
                  <InstagramIcon />
                </Social>
              )}
            </div>
          </div>

          <div className="hidden md:block animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-accent to-accent2 blur-2xl opacity-30" />
              {profile.avatarImage ? (
                <img
                  src={profile.avatarImage}
                  alt={profile.name}
                  className="h-56 w-56 rounded-full border border-border object-cover"
                />
              ) : (
                <div className="flex h-56 w-56 items-center justify-center rounded-full border border-border bg-surface text-5xl font-bold tracking-tight">
                  <span className="gradient-text">{profile.avatarInitials}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="transition hover:text-text"
    >
      {children}
    </a>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43A2.06 2.06 0 1 1 5.34 3.3a2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.03 0c2.3-1.55 3.31-1.23 3.31-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.28 0 .32.22.7.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zM17.083 19.77h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
    </svg>
  );
}
