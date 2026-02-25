import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/shared";
import { getTeamMemberBySlug } from "@/data/team";

function SocialIcon({
  type,
  className,
}: {
  type: "linkedin" | "github" | "email";
  className?: string;
}) {
  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
        <path
          fill="currentColor"
          d="M6.2 6.2a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0ZM3.6 8.6h2.6V21H3.6V8.6Zm6.2 0h2.5v1.7h.1c.4-.7 1.5-1.9 3.3-1.9 3.6 0 4.3 2.4 4.3 5.5V21h-2.6v-6.1c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9.8V8.6Z"
        />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
        <path
          fill="currentColor"
          d="M12 2.2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-3 .7-3.6-1.3-3.6-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.8-.8 2.2-1.3-.8-.1-1.6-.4-2.1-.9-1.6-1.6-.1-4.5.4-5.2-.2-.5-.7-2 .1-4 0 0 1.2-.4 3.8 1.4 1.1-.3 2.2-.4 3.4-.4 1.1 0 2.3.1 3.4.4 2.6-1.8 3.8-1.4 3.8-1.4.8 2 .3 3.5.1 4 .5.7 2 3.6.4 5.2-.6.6-1.4.8-2.2.9.5.4.8 1.2.8 2.4v3.5c0 .3.2.6.7.5A10 10 0 0 0 12 2.2Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M4.5 6.4h15a2 2 0 0 1 2 2v9.2a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2V8.4a2 2 0 0 1 2-2Zm.5 2.2v.3l7 4.5 7-4.5v-.3l-7 4.4-7-4.4Z"
      />
    </svg>
  );
}

function ToolChip({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs font-medium text-muted">
      {name}
    </span>
  );
}

export default async function TeamProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) notFound();

  return (
    <>
      <Navbar />

      <main>
        <section className="ambient-section ambient-hero relative overflow-hidden py-20">
          <Container>
            <Reveal className="mb-10" staggerChildren>
              <Link
                href="/team"
                className="motion-button inline-flex h-10 items-center justify-center rounded-full border border-border bg-background/40 px-4 text-sm font-semibold text-foreground transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Back to Team
              </Link>
            </Reveal>

            <div className="grid items-start gap-10 lg:grid-cols-2">
              <Reveal className="relative" delayMs={120}>
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="relative h-[360px] overflow-hidden bg-[radial-gradient(circle_at_30%_15%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_75%_25%,rgba(34,211,238,0.10),transparent_55%),linear-gradient(180deg,rgb(9,12,20),rgb(6,8,12))]">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-full w-full object-cover"
                      loading="eager"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03),inset_0_-80px_120px_rgba(0,0,0,0.55)]"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal className="flex flex-col" delayMs={200} staggerChildren>
                <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  {member.name}
                </h1>
                <p className="mt-3 text-base text-muted sm:text-lg">{member.role}</p>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                  {member.intro}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <ToolChip key={skill} name={skill} />
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      className="motion-button inline-flex h-10 items-center gap-2 rounded-full border border-border bg-background/40 px-4 text-sm font-semibold text-foreground/85 hover:text-foreground"
                      aria-label="LinkedIn"
                    >
                      <SocialIcon type="linkedin" className="h-4 w-4" />
                      LinkedIn
                    </a>
                  ) : null}
                  {member.github ? (
                    <a
                      href={member.github}
                      className="motion-button inline-flex h-10 items-center gap-2 rounded-full border border-border bg-background/40 px-4 text-sm font-semibold text-foreground/85 hover:text-foreground"
                      aria-label="GitHub"
                    >
                      <SocialIcon type="github" className="h-4 w-4" />
                      GitHub
                    </a>
                  ) : null}
                  {member.email ? (
                    <a
                      href={`mailto:${member.email}`}
                      className="motion-button inline-flex h-10 items-center gap-2 rounded-full border border-border bg-background/40 px-4 text-sm font-semibold text-foreground/85 hover:text-foreground"
                      aria-label="Email"
                    >
                      <SocialIcon type="email" className="h-4 w-4" />
                      Email
                    </a>
                  ) : null}
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-7" staggerChildren>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  About
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                  {member.bio}
                </p>

                <h2 className="mt-10 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  What they build
                </h2>
                <ul className="mt-4 space-y-3">
                  {member.whatTheyBuild.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted">
                      <span className="mt-2 inline-flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span className="text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="lg:col-span-5" staggerChildren delayMs={120}>
                <div className="motion-card relative overflow-hidden rounded-2xl border border-border bg-card p-7 [--motion-card-shadow:0_22px_80px_-36px_rgba(59,130,246,0.55)]">
                  <div
                    className="pointer-events-none absolute -inset-8 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.22),rgba(34,211,238,0.12),transparent_65%)] blur-3xl opacity-70"
                    aria-hidden="true"
                  />
                  <div className="text-sm font-semibold text-foreground">Tech stack</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.tools.map((tool) => (
                      <ToolChip key={tool} name={tool} />
                    ))}
                  </div>

                  <div className="mt-8 text-sm font-semibold text-foreground">
                    Experience highlights
                  </div>
                  <ul className="mt-4 space-y-3">
                    {member.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-muted">
                        <span className="mt-2 inline-flex h-2 w-2 shrink-0 rounded-full bg-primary/80" />
                        <span className="text-sm leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 rounded-xl border border-border bg-background/40 p-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Fun line
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-foreground/85">
                      {member.funLine}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}

