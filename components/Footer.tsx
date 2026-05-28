import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="container-narrow flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-muted">
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition hover:text-text"
            >
              GitHub
            </a>
          )}
          {profile.social.linkedin && (
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition hover:text-text"
            >
              LinkedIn
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            className="text-sm transition hover:text-text"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
