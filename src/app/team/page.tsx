import Link from "next/link";

import { Container } from "@/components";
import { Contact } from "@/components/contact";
import { Reveal } from "@/components/shared";
import { teamMembers } from "@/data/team";

function CultureIcon({ variant }: { variant: "remote" | "ai" | "product" | "fast" }) {
  const base = "h-5 w-5 text-primary/80";
  switch (variant) {
    case "remote":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={base} fill="none">
          <path
            d="M8 18h8m-9-3.2V7.4A2.4 2.4 0 0 1 9.4 5h5.2A2.4 2.4 0 0 1 17 7.4v7.4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M6.5 19.2h11"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={base} fill="none">
          <path
            d="M9 9.2V7.6A2.6 2.6 0 0 1 11.6 5h.8A2.6 2.6 0 0 1 15 7.6v1.6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M7.2 10.6h9.6A2.2 2.2 0 0 1 19 12.8v3A2.2 2.2 0 0 1 16.8 18H7.2A2.2 2.2 0 0 1 5 15.8v-3a2.2 2.2 0 0 1 2.2-2.2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9 14.3h.01M12 14.3h.01M15 14.3h.01"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "product":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={base} fill="none">
          <path
            d="M6.6 7.4h10.8A2.2 2.2 0 0 1 19.6 9.6v7.8A2.2 2.2 0 0 1 17.4 19.6H6.6A2.2 2.2 0 0 1 4.4 17.4V9.6A2.2 2.2 0 0 1 6.6 7.4Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M8 10.2h8M8 13h5.6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "fast":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={base} fill="none">
          <path
            d="M12 3.8v6.2l4.2 2.4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 12a8 8 0 1 1-4.2-7.1"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

function CultureBlock({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: "remote" | "ai" | "product" | "fast";
}) {
  return (
    <div className="relative overflow-x-hidden rounded-2xl border border-border bg-card p-7 [--motion-card-shadow:0_22px_80px_-36px_rgba(59,130,246,0.55)]">
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.05),transparent_55%)] opacity-60"
        aria-hidden="true"
      />
      <div className="relative flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-primary/10">
          <CultureIcon variant={icon} />
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">{title}</div>
          <div className="mt-1 text-sm leading-relaxed text-muted">{text}</div>
        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  const sections = [
    {
      id: "leadership",
      title: "Leadership / Founders",
      description:
        "Founders who stay close to design, code, and client work while guiding product direction.",
      slugs: ["manjeet-kumar-mishra", "muskan-chauhan"],
    },
    {
      id: "ai-data",
      title: "Data & AI Team",
      description: "Analytics and data pipelines that keep our AI and product decisions grounded.",
      slugs: ["mayank-yadav"],
    },
    {
      id: "engineering",
      title: "Engineering / App Team",
      description:
        "Engineers building applications, cloud infrastructure, and secure deployment pipelines.",
      slugs: ["manisha"],
    },
  ] as const;

  return (
    <main>
      <section className="ambient-section ambient-hero hero-enter relative overflow-hidden py-16 sm:py-20 md:py-24">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-start">
              <h1
                className="hero-item font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl"
                style={{ "--enter-delay": "0ms" } as never}
              >
                Meet the Builders Behind LilByte
              </h1>

              <p
                className="hero-item mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base md:text-lg"
                style={{ "--enter-delay": "120ms" } as never}
              >
                AI-first engineers, designers, and builders crafting real products.
              </p>

              <div
                className="hero-item mt-8 flex flex-col gap-3 sm:flex-row"
                style={{ "--enter-delay": "240ms" } as never}
              >
                <Link
                  href="#contact"
                  className="motion-button inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Work With Our Team
                </Link>
              </div>
            </div>

            <div className="relative">
              <div
                className="hero-item relative mx-auto h-[300px] w-full max-w-sm sm:h-[360px] md:h-[440px] overflow-hidden"
                style={{ "--enter-delay": "440ms" } as never}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-[44px] bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.22),transparent_55%),radial-gradient(circle_at_78%_30%,rgba(34,211,238,0.14),transparent_55%),radial-gradient(circle_at_60%_80%,rgba(59,130,246,0.10),transparent_60%)]"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -inset-10 rounded-[44px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),rgba(34,211,238,0.10),transparent_65%)] blur-3xl opacity-80"
                  aria-hidden="true"
                />

                {/* Desktop / tablet collage */}
                <div className="relative w-full h-[440px] hidden md:block">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[44px] bg-[radial-gradient(circle_at_50%_48%,rgba(15,23,42,0.55),transparent_65%)]"
                    aria-hidden="true"
                  />

                  {/* Large center – Founder */}
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full border border-primary/60 bg-background/70 shadow-[0_24px_80px_rgba(15,23,42,0.9)] md:h-40 md:w-40 lg:h-44 lg:w-44"
                    style={{ animation: "float-slow 20s ease-in-out infinite" } as never}
                  >
                    <img
                      src="/team/manjeet.jpg"
                      alt="Manjeet Kumar Mishra"
                      className="h-full w-full rounded-full object-cover object-center"
                    />
                  </div>

                  {/* Medium – Data Lead */}
                  <div
                   className="absolute left-[10%] top-[28%] h-24 w-24 rounded-full border border-border/70 bg-background/80 shadow-[0_18px_60px_rgba(15,23,42,0.85)] md:h-28 md:w-28"
                    style={{ animation: "float-slow 26s ease-in-out infinite" } as never}
                  >
                    <img
                      src="/team/mayank.jpg"
                      alt="Mayank Yadav"
                      className="h-full w-full rounded-full object-cover object-center"
                    />
                  </div>

                  {/* Small – Engineering */}
                  <div
                    className="absolute left-[16%] bottom-[18%] h-20 w-20 rounded-full border border-border/70 bg-background/80 shadow-[0_16px_50px_rgba(15,23,42,0.85)] md:h-20 md:w-20"
                    style={{ animation: "float-slow 22s ease-in-out infinite" } as never}
                  >
                    <img
                      src="/team/manisha.jpg"
                      alt="Manisha"
                      className="h-full w-full rounded-full object-cover object-center"
                    />
                  </div>

                  {/* Small – Design */}
                  <div
                    className="absolute right-[10%] top-[20%] h-20 w-20 rounded-full border border-border/70 bg-background/80 shadow-[0_16px_50px_rgba(15,23,42,0.85)] md:h-20 md:w-20"
                    style={{ animation: "float-slow 24s ease-in-out infinite" } as never}
                  >
                    <img
                      src="/team/muskan.jpg"
                      alt="Muskan Chauhan"
                      className="h-full w-full rounded-full object-cover object-center"
                    />
                  </div>
                </div>
                {/* Mobile collage - Responsive Grid */}
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden md:hidden">
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div className="col-span-2 flex justify-center">
                      <div className="relative h-20 w-20 rounded-full border border-primary/60 bg-background/70 shadow-[0_20px_60px_rgba(15,23,42,0.9)]">
                        <img
                          src="/team/manjeet.jpg"
                          alt="Manjeet Kumar Mishra"
                          className="h-full w-full rounded-full object-cover object-center"
                          loading="lazy"
                        />
                        <div
                          className="pointer-events-none absolute -inset-2 rounded-full bg-[radial-gradient(circle_at_50_30,rgba(59,130,246,0.35),rgba(34,211,238,0.22),transparent_70)] opacity-70 blur-xl"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="relative h-16 w-16 rounded-full border border-border/70 bg-background/70 shadow-[0_16px_50px_rgba(15,23,42,0.85)]">
                        <img
                          src="/team/muskan.jpg"
                          alt="Muskan Chauhan"
                          className="h-full w-full rounded-full object-cover object-center"
                          loading="lazy"
                        />
                        <div
                          className="pointer-events-none absolute -inset-2 rounded-full bg-[radial-gradient(circle_at_50_30,rgba(59,130,246,0.32),rgba(34,211,238,0.18),transparent_70)] opacity-60 blur-lg"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="relative h-16 w-16 rounded-full border border-border/70 bg-background/70 shadow-[0_16px_50px_rgba(15,23,42,0.85)]">
                        <img
                          src="/team/mayank.jpg"
                          alt="Mayank Yadav"
                          className="h-full w-full rounded-full object-cover object-center"
                          loading="lazy"
                        />
                        <div
                          className="pointer-events-none absolute -inset-2 rounded-full bg-[radial-gradient(circle_at_50_30,rgba(59,130,246,0.3),rgba(34,211,238,0.2),transparent_70)] opacity-55 blur-lg"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="relative h-16 w-16 rounded-full border border-border/70 bg-background/70 shadow-[0_16px_50px_rgba(15,23,42,0.85)]">
                        <img
                          src="/team/manisha.jpg"
                          alt="Manisha"
                          className="h-full w-full rounded-full object-cover object-center"
                          loading="lazy"
                        />
                        <div
                          className="pointer-events-none absolute -inset-2 rounded-full bg-[radial-gradient(circle_at_50_30,rgba(59,130,246,0.28),rgba(34,211,238,0.16),transparent_70)] opacity-55 blur-lg"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center" staggerChildren>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Core Team
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base md:text-lg">
              A small, senior team focused on shipping real product outcomes.
            </p>
          </Reveal>

          <div className="mt-14 space-y-14">
            {sections.map((section) => {
             const members = teamMembers.filter((member) =>
  (section.slugs as readonly string[]).includes(member.slug),
);
                if (!members.length) return null;

                return (
                  <div key={section.id} className="border-t border-border/40 pt-10 first:border-t-0 first:pt-0">
                    <Reveal className="max-w-2xl" staggerChildren>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                        {section.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {section.description}
                      </p>
                    </Reveal>

                    <div className="mt-8 space-y-10 sm:space-y-12">
                      {members.map((member, index) => (
                        <Reveal key={member.slug} delayMs={120 + index * 80}>
                          <div
                            className={[
                              "group relative overflow-x-hidden rounded-2xl border bg-card/90 backdrop-blur-sm transition-colors duration-300 ease-out",
                              section.id === "leadership"
                                ? "border-primary/60 hover:border-primary/80 hover:bg-card/95 hover:backdrop-blur-2xl [--motion-card-shadow:0_26px_90px_-40px_rgba(59,130,246,0.85)]"
                                : "border-border hover:border-primary/40 hover:bg-card/95 hover:backdrop-blur-xl [--motion-card-shadow:0_22px_80px_-36px_rgba(59,130,246,0.65)]",
                              "p-7 sm:p-8",
                            ].join(" ")}
                          >
                            <div
                              className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_0%_0%,rgba(59,130,246,0.22),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(34,211,238,0.15),transparent_60%)] opacity-70"
                              aria-hidden="true"
                            />

                            <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center">
                              <div className="flex justify-center sm:block">
                                <div className="relative h-20 w-20 rounded-full border border-border/70 bg-background/70 shadow-[0_18px_45px_rgba(15,23,42,0.9)] sm:h-24 sm:w-24 lg:h-32 lg:w-32">
                                  <img
                                    src={member.photoFile ?? member.photo}
                                    alt={member.name}
                                    className="h-full w-full rounded-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                                    loading="lazy"
                                  />
                                  <div
                                    className="pointer-events-none absolute -inset-2 rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.35),rgba(34,211,238,0.22),transparent_70%)] opacity-40 blur-md transition-opacity duration-300 ease-out group-hover:opacity-80"
                                    aria-hidden="true"
                                  />
                                </div>
                              </div>

                              <div className="flex-1">
                                <div className="flex flex-wrap items-start justify-between gap-4">
                                  <div>
                                    <div className="text-base font-semibold text-foreground sm:text-lg">
                                      {member.name}
                                    </div>
                                    <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                                      {member.role}
                                    </div>
                                  </div>

                                  {member.linkedin ? (
                                    <a
                                      href={member.linkedin}
                                      className="motion-button inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-foreground/80 hover:text-foreground"
                                      aria-label={`${member.name} on LinkedIn`}
                                    >
                                      <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="h-4 w-4"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M6.2 6.2a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0ZM3.6 8.6h2.6V21H3.6V8.6Zm6.2 0h2.5v1.7h.1c.4-.7 1.5-1.9 3.3-1.9 3.6 0 4.3 2.4 4.3 5.5V21h-2.6v-6.1c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9.8V8.6Z"
                                        />
                                      </svg>
                                    </a>
                                  ) : null}
                                </div>

                                <p className="mt-4 text-sm leading-relaxed text-muted">
                                  {member.bio}
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                  {member.skills.slice(0, 6).map((skill) => (
                                    <span
                                      key={skill}
                                      className="inline-flex items-center rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs font-medium text-muted"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                  {member.tools.slice(0, 6).map((tool) => (
                                    <span
                                      key={tool}
                                      className="inline-flex items-center rounded-full border border-border/60 bg-surface/70 px-2.5 py-1 text-[11px] font-medium text-muted"
                                    >
                                      {tool}
                                    </span>
                                  ))}
                                </div>

                                <p className="mt-4 text-xs font-medium text-muted">
                                  {member.funLine}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 md:py-24">
          <Container>
            <Reveal className="mx-auto max-w-2xl text-center" staggerChildren>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                How We Work
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base md:text-lg">
                A focused, modern build process designed for speed and quality.
              </p>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Reveal delayMs={120}>
                <CultureBlock
                  icon="remote"
                  title="Remote-first team"
                  text="Async-friendly collaboration across time zones."
                />
              </Reveal>
              <Reveal delayMs={210}>
                <CultureBlock
                  icon="ai"
                  title="AI-assisted workflow"
                  text="Automation and copilots to move faster with confidence."
                />
              </Reveal>
              <Reveal delayMs={300}>
                <CultureBlock
                  icon="product"
                  title="Product mindset"
                  text="We optimize for outcomes, not just outputs."
                />
              </Reveal>
              <Reveal delayMs={390}>
                <CultureBlock
                  icon="fast"
                  title="Fast iteration culture"
                  text="Ship early, test quickly, improve continuously."
                />
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 md:py-24">
          <Container>
            <Reveal
              className="relative overflow-hidden rounded-2xl border border-border bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.22),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.14),transparent_55%),linear-gradient(180deg,rgba(15,23,42,0.85),rgba(5,7,14,0.9))] p-8 sm:p-10 md:p-12 text-center"
              staggerChildren
            >
              <div
                className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.20),rgba(34,211,238,0.12),transparent_65%)] blur-3xl opacity-70"
                aria-hidden="true"
              />
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                Want to build with us?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base md:text-lg">
                We collaborate with startups, founders, and teams building ambitious products.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href="#contact"
                  className="motion-button inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Start a Project
                </Link>
              </div>
            </Reveal>
          </Container>
        </section>

        <Contact />
      </main>
  );
}

