import Link from "next/link";

import type { TeamMember } from "@/data/team";

function IconLinkedIn(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path
        fill="currentColor"
        d="M6.2 6.2a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0ZM3.6 8.6h2.6V21H3.6V8.6Zm6.2 0h2.5v1.7h.1c.4-.7 1.5-1.9 3.3-1.9 3.6 0 4.3 2.4 4.3 5.5V21h-2.6v-6.1c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9.8V8.6Z"
      />
    </svg>
  );
}

function IconGitHub(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path
        fill="currentColor"
        d="M12 2.2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-3 .7-3.6-1.3-3.6-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.8-.8 2.2-1.3-.8-.1-1.6-.4-2.1-.9-1.6-1.6-.1-4.5.4-5.2-.2-.5-.7-2 .1-4 0 0 1.2-.4 3.8 1.4 1.1-.3 2.2-.4 3.4-.4 1.1 0 2.3.1 3.4.4 2.6-1.8 3.8-1.4 3.8-1.4.8 2 .3 3.5.1 4 .5.7 2 3.6.4 5.2-.6.6-1.4.8-2.2.9.5.4.8 1.2.8 2.4v3.5c0 .3.2.6.7.5A10 10 0 0 0 12 2.2Z"
      />
    </svg>
  );
}

function IconMail(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path
        fill="currentColor"
        d="M4.5 6.4h15a2 2 0 0 1 2 2v9.2a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2V8.4a2 2 0 0 1 2-2Zm.5 2.2v.3l7 4.5 7-4.5v-.3l-7 4.4-7-4.4Z"
      />
    </svg>
  );
}

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="motion-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/90 backdrop-blur-sm hover:border-primary/40 hover:bg-card/95 hover:backdrop-blur-xl [--motion-card-shadow:0_22px_80px_-34px_rgba(59,130,246,0.65)]">
      <Link
        href={`/team/${member.slug}`}
        className="absolute inset-0 z-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={`View ${member.name} profile`}
      >
        <span className="sr-only">View profile</span>
      </Link>

      <div className="relative z-10">
        <div className="relative flex h-40 items-center justify-center bg-[radial-gradient(circle_at_30%_15%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_75%_25%,rgba(34,211,238,0.10),transparent_55%),linear-gradient(180deg,rgb(9,12,20),rgb(6,8,12))]">
          <div className="relative h-20 w-20 rounded-full border border-border/70 bg-background/60 shadow-[0_18px_45px_rgba(15,23,42,0.85)]">
            <img
              src={member.photo}
              alt={member.name}
              className="h-full w-full rounded-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
              loading="lazy"
            />
            <div
              className="pointer-events-none absolute -inset-2 rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.32),rgba(34,211,238,0.18),transparent_70%)] opacity-40 blur-md transition-opacity duration-300 ease-out group-hover:opacity-80"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-base font-semibold text-foreground">{member.name}</div>
              <div className="mt-1 text-sm text-muted">{member.role}</div>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted">{member.intro}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {member.skills.slice(0, 5).map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs font-medium text-muted"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-5">
            <div className="flex items-center gap-3">
              {member.linkedin ? (
                <a
                  href={member.linkedin}
                  className="motion-button pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/40 text-foreground/80 hover:text-foreground"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <IconLinkedIn className="h-4 w-4" />
                </a>
              ) : null}
              {member.github ? (
                <a
                  href={member.github}
                  className="motion-button pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/40 text-foreground/80 hover:text-foreground"
                  aria-label={`${member.name} on GitHub`}
                >
                  <IconGitHub className="h-4 w-4" />
                </a>
              ) : null}
              {member.email ? (
                <a
                  href={`mailto:${member.email}`}
                  className="motion-button pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/40 text-foreground/80 hover:text-foreground"
                  aria-label={`Email ${member.name}`}
                >
                  <IconMail className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

