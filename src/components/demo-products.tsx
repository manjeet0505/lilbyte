import { Container } from "@/components";

const products = [
  {
    name: "AI Powered S3 Dashboard",
    description:
      "An intelligent student success platform with resume analysis, job tracking, and AI insights.",
    tags: ["AI", "Dashboard", "SaaS"],
    gradient: "from-primary/35 via-primary/10 to-transparent",
  },
  {
    name: "Senior Junior Connect (AI Powered)",
    description:
      "A networking and mentorship platform with AI-driven matching and real-time chat features.",
    tags: ["AI", "Automation", "Platform"],
    gradient: "from-primary/25 via-transparent to-transparent",
  },
  {
    name: "AI Resume Analyzer",
    description: "Smart candidate scoring and resume insights system.",
    tags: ["AI", "Automation", "Insights"],
    gradient: "from-primary/30 via-primary/10 to-transparent",
  },
  {
    name: "Startup Analytics Dashboard",
    description: "Real-time business metrics and performance insights.",
    tags: ["Dashboard", "Analytics", "SaaS"],
    gradient: "from-primary/20 via-transparent to-transparent",
  },
] as const;

export function DemoProducts() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Demo Products
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Examples of digital products and systems we build for startups.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div
              key={p.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_70px_-28px_rgba(59,130,246,0.6)]"
            >
              <div className="relative h-44 border-b border-border bg-background">
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(59,130,246,0.18),rgba(34,211,238,0.08),transparent_60%)] opacity-60"
                  aria-hidden="true"
                />
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${p.gradient}`}
                  aria-hidden="true"
                />

                <div
                  className="pointer-events-none absolute inset-3 rounded-2xl border border-border bg-card/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-18px_30px_rgba(0,0,0,0.45)]"
                  aria-hidden="true"
                />

                <div className="absolute inset-0 p-4 transition-transform duration-200 group-hover:-translate-y-0.5">
                  <div className="overflow-hidden rounded-2xl border border-border bg-card/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                    <div className="flex items-center justify-between border-b border-border bg-background/40 px-3 py-2">
                      <div className="flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                        <div className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                        <div className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
                      </div>
                      <div className="h-2.5 w-20 rounded bg-foreground/10" />
                    </div>

                    <div className="relative px-3 py-3">
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent"
                        aria-hidden="true"
                      />

                      {p.name === "AI Powered S3 Dashboard" ? (
                        <div className="relative grid grid-cols-12 gap-3">
                          <div className="col-span-3 hidden rounded-xl border border-border bg-background/40 p-2 sm:block">
                            <div className="h-2.5 w-12 rounded bg-foreground/15" />
                            <div className="mt-3 space-y-2">
                              <div className="h-2.5 w-full rounded bg-foreground/10" />
                              <div className="h-2.5 w-10/12 rounded bg-foreground/10" />
                              <div className="h-2.5 w-8/12 rounded bg-foreground/10" />
                            </div>
                          </div>

                          <div className="col-span-12 sm:col-span-9">
                            <div className="grid grid-cols-3 gap-2">
                              <div className="rounded-xl border border-border bg-background/40 p-2">
                                <div className="h-2.5 w-10 rounded bg-foreground/15" />
                                <div className="mt-2 h-4 w-12 rounded bg-foreground/20" />
                              </div>
                              <div className="rounded-xl border border-border bg-background/40 p-2">
                                <div className="h-2.5 w-10 rounded bg-foreground/15" />
                                <div className="mt-2 h-4 w-12 rounded bg-foreground/20" />
                              </div>
                              <div className="rounded-xl border border-border bg-background/40 p-2">
                                <div className="h-2.5 w-10 rounded bg-foreground/15" />
                                <div className="mt-2 h-4 w-12 rounded bg-foreground/20" />
                              </div>
                            </div>

                            <div className="mt-3 rounded-xl border border-border bg-background/40 p-3">
                              <div className="flex items-center justify-between">
                                <div className="h-2.5 w-20 rounded bg-foreground/15" />
                                <div className="h-2.5 w-10 rounded bg-foreground/10" />
                              </div>
                              <div className="mt-3 grid grid-cols-12 items-end gap-1">
                                <div className="col-span-2 h-7 rounded bg-gradient-to-t from-blue-500/75 via-sky-500/35 to-transparent" />
                                <div className="col-span-2 h-10 rounded bg-gradient-to-t from-blue-500/80 via-sky-500/40 to-transparent" />
                                <div className="col-span-2 h-6 rounded bg-gradient-to-t from-sky-500/75 via-cyan-400/30 to-transparent" />
                                <div className="col-span-2 h-11 rounded bg-gradient-to-t from-cyan-400/75 via-sky-500/30 to-transparent" />
                                <div className="col-span-2 h-8 rounded bg-gradient-to-t from-blue-500/75 via-sky-500/35 to-transparent" />
                                <div className="col-span-2 h-9 rounded bg-gradient-to-t from-sky-500/75 via-cyan-400/30 to-transparent" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : null}

                      {p.name === "Senior Junior Connect (AI Powered)" ? (
                        <div className="relative grid grid-cols-12 gap-3">
                          <div className="col-span-12 rounded-xl border border-border bg-background/40 p-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center -space-x-1">
                                <div className="h-6 w-6 rounded-full border border-border bg-background/60" />
                                <div className="h-6 w-6 rounded-full border border-border bg-background/60" />
                                <div className="h-6 w-6 rounded-full border border-border bg-background/60" />
                              </div>
                              <div className="h-2.5 w-20 rounded bg-foreground/10" />
                            </div>

                            <div className="mt-3 space-y-2">
                              <div className="w-[78%] rounded-2xl bg-background/60 px-3 py-2">
                                <div className="h-2.5 w-28 rounded bg-foreground/15" />
                                <div className="mt-2 h-2.5 w-40 rounded bg-foreground/10" />
                              </div>
                              <div className="ml-auto w-[72%] rounded-2xl bg-primary/15 px-3 py-2">
                                <div className="h-2.5 w-24 rounded bg-foreground/15" />
                                <div className="mt-2 h-2.5 w-36 rounded bg-foreground/10" />
                              </div>
                              <div className="w-[84%] rounded-2xl bg-background/60 px-3 py-2">
                                <div className="h-2.5 w-34 rounded bg-foreground/15" />
                                <div className="mt-2 h-2.5 w-28 rounded bg-foreground/10" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : null}

                      {p.name === "AI Resume Analyzer" ? (
                        <div className="relative grid grid-cols-12 gap-3">
                          <div className="col-span-7 rounded-xl border border-border bg-background/40 p-3">
                            <div className="h-2.5 w-24 rounded bg-foreground/15" />
                            <div className="mt-3 rounded-xl border border-border bg-background/60 p-3">
                              <div className="flex items-center justify-between">
                                <div className="h-2.5 w-16 rounded bg-foreground/15" />
                                <div className="h-6 w-6 rounded-lg bg-foreground/10" />
                              </div>
                              <div className="mt-3 h-8 rounded-lg bg-gradient-to-r from-blue-500/15 via-sky-500/10 to-transparent" />
                              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-foreground/10">
                                <div className="h-full w-7/12 rounded-full bg-gradient-to-r from-blue-500/70 via-sky-500/60 to-cyan-400/60" />
                              </div>
                            </div>
                          </div>

                          <div className="col-span-5 rounded-xl border border-border bg-background/40 p-3">
                            <div className="flex items-center justify-between">
                              <div className="h-2.5 w-14 rounded bg-foreground/15" />
                              <div className="rounded-full bg-primary/15 px-2 py-1 text-[10px] text-muted">
                                Score
                              </div>
                            </div>
                            <div className="mt-4 rounded-xl border border-border bg-background/60 p-3">
                              <div className="text-lg font-semibold text-foreground">82</div>
                              <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-foreground/10">
                                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-cyan-400/60 via-sky-500/60 to-blue-500/60" />
                              </div>
                              <div className="mt-2 h-2.5 w-20 rounded bg-foreground/10" />
                            </div>
                          </div>
                        </div>
                      ) : null}

                      {p.name === "Startup Analytics Dashboard" ? (
                        <div className="relative grid grid-cols-12 gap-3">
                          <div className="col-span-12 grid grid-cols-3 gap-2">
                            <div className="rounded-xl border border-border bg-background/40 p-2">
                              <div className="h-2.5 w-12 rounded bg-foreground/15" />
                              <div className="mt-2 h-4 w-14 rounded bg-foreground/20" />
                            </div>
                            <div className="rounded-xl border border-border bg-background/40 p-2">
                              <div className="h-2.5 w-12 rounded bg-foreground/15" />
                              <div className="mt-2 h-4 w-14 rounded bg-foreground/20" />
                            </div>
                            <div className="rounded-xl border border-border bg-background/40 p-2">
                              <div className="h-2.5 w-12 rounded bg-foreground/15" />
                              <div className="mt-2 h-4 w-14 rounded bg-foreground/20" />
                            </div>
                          </div>

                          <div className="col-span-7 rounded-xl border border-border bg-background/40 p-3">
                            <div className="flex items-center justify-between">
                              <div className="h-2.5 w-20 rounded bg-foreground/15" />
                              <div className="h-2.5 w-10 rounded bg-foreground/10" />
                            </div>
                            <div className="mt-3 grid grid-cols-12 items-end gap-1">
                              <div className="col-span-2 h-6 rounded bg-gradient-to-t from-blue-500/70 via-sky-500/30 to-transparent" />
                              <div className="col-span-2 h-9 rounded bg-gradient-to-t from-blue-500/75 via-sky-500/35 to-transparent" />
                              <div className="col-span-2 h-5 rounded bg-gradient-to-t from-sky-500/70 via-cyan-400/25 to-transparent" />
                              <div className="col-span-2 h-10 rounded bg-gradient-to-t from-cyan-400/70 via-sky-500/25 to-transparent" />
                              <div className="col-span-2 h-7 rounded bg-gradient-to-t from-blue-500/70 via-sky-500/30 to-transparent" />
                              <div className="col-span-2 h-8 rounded bg-gradient-to-t from-sky-500/70 via-cyan-400/25 to-transparent" />
                            </div>
                          </div>

                          <div className="col-span-5 rounded-xl border border-border bg-background/40 p-3">
                            <div className="h-2.5 w-16 rounded bg-foreground/15" />
                            <div className="mt-3 space-y-2">
                              <div className="grid grid-cols-12 items-center gap-2">
                                <div className="col-span-6 h-2.5 rounded bg-foreground/10" />
                                <div className="col-span-3 h-2.5 rounded bg-foreground/10" />
                                <div className="col-span-3 h-2.5 rounded bg-foreground/10" />
                              </div>
                              <div className="grid grid-cols-12 items-center gap-2">
                                <div className="col-span-5 h-2.5 rounded bg-foreground/10" />
                                <div className="col-span-4 h-2.5 rounded bg-foreground/10" />
                                <div className="col-span-3 h-2.5 rounded bg-foreground/10" />
                              </div>
                              <div className="grid grid-cols-12 items-center gap-2">
                                <div className="col-span-7 h-2.5 rounded bg-foreground/10" />
                                <div className="col-span-2 h-2.5 rounded bg-foreground/10" />
                                <div className="col-span-3 h-2.5 rounded bg-foreground/10" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div className="p-6">
                <h3 className="text-base font-semibold text-foreground">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href="#demo"
                    className="inline-flex h-10 w-full items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
