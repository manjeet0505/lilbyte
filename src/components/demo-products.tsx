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
                <div className="absolute inset-0 p-4">
                  <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-[linear-gradient(180deg,rgb(10,12,18),rgb(6,8,12))]">
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-[linear-gradient(90deg,rgba(59,130,246,0.35),rgba(34,211,238,0.22),transparent)] blur-md opacity-70"
                      aria-hidden="true"
                    />

                    <div className="relative h-full transition-transform duration-300 ease-out group-hover:scale-[1.03]">
                      <div className="flex items-center gap-2 border-b border-border bg-[linear-gradient(180deg,rgb(16,18,26),rgb(10,12,18))] px-3 py-2">
                        <div className="flex items-center gap-2">
                          <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                          <div className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <div className="ml-auto h-2.5 w-16 rounded bg-slate-700" />
                      </div>

                      <div className="px-3 py-3">
                        <div className="h-5 rounded-lg bg-[linear-gradient(90deg,rgb(17,24,39),rgb(10,12,18))]" />

                        {p.name === "AI Powered S3 Dashboard" ? (
                          <div className="mt-3 grid grid-cols-12 gap-2">
                            <div className="col-span-4 rounded-lg border border-border bg-[linear-gradient(180deg,rgb(15,23,42),rgb(10,12,18))] p-2">
                              <div className="flex items-center gap-2">
                                <div className="h-5 w-5 rounded-md bg-[linear-gradient(180deg,rgb(59,130,246),rgb(34,211,238))]" />
                                <div className="h-2 w-14 rounded bg-slate-700" />
                              </div>
                              <div className="mt-3 space-y-2">
                                <div className="h-2 w-full rounded bg-slate-800" />
                                <div className="h-2 w-11/12 rounded bg-slate-800" />
                                <div className="h-2 w-9/12 rounded bg-slate-800" />
                                <div className="h-2 w-10/12 rounded bg-slate-800" />
                              </div>
                            </div>
                            <div className="col-span-8">
                              <div className="grid grid-cols-3 gap-2">
                                <div className="rounded-lg border border-border bg-[linear-gradient(180deg,rgb(17,24,39),rgb(10,12,18))] p-2">
                                  <div className="h-2 w-12 rounded bg-slate-700" />
                                  <div className="mt-2 h-3.5 w-14 rounded bg-slate-600" />
                                </div>
                                <div className="rounded-lg border border-border bg-[linear-gradient(180deg,rgb(17,24,39),rgb(10,12,18))] p-2">
                                  <div className="h-2 w-12 rounded bg-slate-700" />
                                  <div className="mt-2 h-3.5 w-14 rounded bg-slate-600" />
                                </div>
                                <div className="rounded-lg border border-border bg-[linear-gradient(180deg,rgb(17,24,39),rgb(10,12,18))] p-2">
                                  <div className="h-2 w-12 rounded bg-slate-700" />
                                  <div className="mt-2 h-3.5 w-14 rounded bg-slate-600" />
                                </div>
                              </div>
                              <div className="mt-2 rounded-lg border border-border bg-[linear-gradient(180deg,rgb(15,23,42),rgb(10,12,18))] p-2">
                                <div className="flex items-center justify-between">
                                  <div className="h-2 w-24 rounded bg-slate-700" />
                                  <div className="h-2 w-10 rounded bg-slate-800" />
                                </div>
                                <div className="mt-2 grid grid-cols-12 items-end gap-1">
                                  <div className="col-span-2 h-6 rounded bg-[linear-gradient(180deg,rgb(59,130,246),rgb(14,165,233))]" />
                                  <div className="col-span-2 h-9 rounded bg-[linear-gradient(180deg,rgb(59,130,246),rgb(34,211,238))]" />
                                  <div className="col-span-2 h-5 rounded bg-[linear-gradient(180deg,rgb(14,165,233),rgb(34,211,238))]" />
                                  <div className="col-span-2 h-10 rounded bg-[linear-gradient(180deg,rgb(34,211,238),rgb(59,130,246))]" />
                                  <div className="col-span-2 h-7 rounded bg-[linear-gradient(180deg,rgb(59,130,246),rgb(14,165,233))]" />
                                  <div className="col-span-2 h-8 rounded bg-[linear-gradient(180deg,rgb(14,165,233),rgb(34,211,238))]" />
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null}

                        {p.name === "Senior Junior Connect (AI Powered)" ? (
                          <div className="mt-3 grid grid-cols-12 gap-2">
                            <div className="col-span-5 rounded-lg border border-border bg-[linear-gradient(180deg,rgb(15,23,42),rgb(10,12,18))] p-2">
                              <div className="h-2 w-16 rounded bg-slate-700" />
                              <div className="mt-2 space-y-2">
                                <div className="flex items-center gap-2 rounded-lg bg-[linear-gradient(180deg,rgb(17,24,39),rgb(10,12,18))] p-2">
                                  <div className="h-5 w-5 rounded-full bg-slate-800" />
                                  <div className="h-2 w-16 rounded bg-slate-700" />
                                </div>
                                <div className="flex items-center gap-2 rounded-lg bg-[linear-gradient(180deg,rgb(17,24,39),rgb(10,12,18))] p-2">
                                  <div className="h-5 w-5 rounded-full bg-slate-800" />
                                  <div className="h-2 w-14 rounded bg-slate-700" />
                                </div>
                                <div className="flex items-center gap-2 rounded-lg bg-[linear-gradient(180deg,rgb(17,24,39),rgb(10,12,18))] p-2">
                                  <div className="h-5 w-5 rounded-full bg-slate-800" />
                                  <div className="h-2 w-12 rounded bg-slate-700" />
                                </div>
                              </div>
                            </div>

                            <div className="col-span-7 rounded-lg border border-border bg-[linear-gradient(180deg,rgb(15,23,42),rgb(10,12,18))] p-2">
                              <div className="flex items-center justify-between">
                                <div className="h-2 w-20 rounded bg-slate-700" />
                                <div className="h-2 w-10 rounded bg-slate-800" />
                              </div>
                              <div className="mt-2 space-y-2">
                                <div className="w-[82%] rounded-xl bg-[linear-gradient(180deg,rgb(17,24,39),rgb(10,12,18))] px-3 py-2">
                                  <div className="h-2 w-28 rounded bg-slate-700" />
                                  <div className="mt-2 h-2 w-36 rounded bg-slate-800" />
                                </div>
                                <div className="ml-auto w-[76%] rounded-xl bg-[linear-gradient(180deg,rgb(30,41,59),rgb(10,12,18))] px-3 py-2">
                                  <div className="h-2 w-24 rounded bg-slate-700" />
                                  <div className="mt-2 h-2 w-32 rounded bg-slate-800" />
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null}

                        {p.name === "AI Resume Analyzer" ? (
                          <div className="mt-3 grid grid-cols-12 gap-2">
                            <div className="col-span-7 rounded-lg border border-border bg-[linear-gradient(180deg,rgb(15,23,42),rgb(10,12,18))] p-2">
                              <div className="flex items-center justify-between">
                                <div className="h-2 w-20 rounded bg-slate-700" />
                                <div className="h-2 w-10 rounded bg-slate-800" />
                              </div>
                              <div className="mt-2 rounded-lg border border-border bg-[linear-gradient(180deg,rgb(17,24,39),rgb(10,12,18))] p-2">
                                <div className="h-2 w-24 rounded bg-slate-700" />
                                <div className="mt-2 space-y-2">
                                  <div className="h-2 w-full rounded bg-slate-800" />
                                  <div className="h-2 w-11/12 rounded bg-slate-800" />
                                  <div className="h-2 w-10/12 rounded bg-slate-800" />
                                  <div className="h-2 w-9/12 rounded bg-slate-800" />
                                </div>
                                <div className="mt-2 h-6 rounded-md bg-[linear-gradient(90deg,rgb(59,130,246),rgb(34,211,238))]" />
                              </div>
                            </div>
                            <div className="col-span-5 rounded-lg border border-border bg-[linear-gradient(180deg,rgb(15,23,42),rgb(10,12,18))] p-2">
                              <div className="flex items-center justify-between">
                                <div className="h-2 w-16 rounded bg-slate-700" />
                                <div className="rounded-full bg-slate-800 px-2 py-1 text-[10px] text-slate-200">
                                  Score
                                </div>
                              </div>
                              <div className="mt-2 rounded-lg border border-border bg-[linear-gradient(180deg,rgb(17,24,39),rgb(10,12,18))] p-2">
                                <div className="text-lg font-semibold text-slate-100">82</div>
                                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                                  <div className="h-full w-4/5 rounded-full bg-[linear-gradient(90deg,rgb(34,211,238),rgb(59,130,246))]" />
                                </div>
                                <div className="mt-2 rounded-md border border-border bg-[linear-gradient(180deg,rgb(15,23,42),rgb(10,12,18))] p-2">
                                  <div className="h-2 w-20 rounded bg-slate-700" />
                                  <div className="mt-2 h-2 w-14 rounded bg-slate-800" />
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null}

                        {p.name === "Startup Analytics Dashboard" ? (
                          <div className="mt-3 grid grid-cols-12 gap-2">
                            <div className="col-span-12 grid grid-cols-3 gap-2">
                              <div className="rounded-lg border border-border bg-[linear-gradient(180deg,rgb(17,24,39),rgb(10,12,18))] p-2">
                                <div className="h-2 w-14 rounded bg-slate-700" />
                                <div className="mt-2 h-3.5 w-16 rounded bg-slate-600" />
                              </div>
                              <div className="rounded-lg border border-border bg-[linear-gradient(180deg,rgb(17,24,39),rgb(10,12,18))] p-2">
                                <div className="h-2 w-14 rounded bg-slate-700" />
                                <div className="mt-2 h-3.5 w-16 rounded bg-slate-600" />
                              </div>
                              <div className="rounded-lg border border-border bg-[linear-gradient(180deg,rgb(17,24,39),rgb(10,12,18))] p-2">
                                <div className="h-2 w-14 rounded bg-slate-700" />
                                <div className="mt-2 h-3.5 w-16 rounded bg-slate-600" />
                              </div>
                            </div>

                            <div className="col-span-8 rounded-lg border border-border bg-[linear-gradient(180deg,rgb(15,23,42),rgb(10,12,18))] p-2">
                              <div className="flex items-center justify-between">
                                <div className="h-2 w-24 rounded bg-slate-700" />
                                <div className="h-2 w-10 rounded bg-slate-800" />
                              </div>
                              <div className="mt-2 rounded-lg border border-border bg-[linear-gradient(180deg,rgb(17,24,39),rgb(10,12,18))] p-2">
                                <div className="mt-2 grid grid-cols-12 items-end gap-1">
                                  <div className="col-span-2 h-6 rounded bg-[linear-gradient(180deg,rgb(59,130,246),rgb(14,165,233))]" />
                                  <div className="col-span-2 h-10 rounded bg-[linear-gradient(180deg,rgb(59,130,246),rgb(34,211,238))]" />
                                  <div className="col-span-2 h-5 rounded bg-[linear-gradient(180deg,rgb(14,165,233),rgb(34,211,238))]" />
                                  <div className="col-span-2 h-11 rounded bg-[linear-gradient(180deg,rgb(34,211,238),rgb(59,130,246))]" />
                                  <div className="col-span-2 h-7 rounded bg-[linear-gradient(180deg,rgb(59,130,246),rgb(14,165,233))]" />
                                  <div className="col-span-2 h-8 rounded bg-[linear-gradient(180deg,rgb(14,165,233),rgb(34,211,238))]" />
                                </div>
                              </div>
                            </div>

                            <div className="col-span-4 rounded-lg border border-border bg-[linear-gradient(180deg,rgb(15,23,42),rgb(10,12,18))] p-2">
                              <div className="h-2 w-16 rounded bg-slate-700" />
                              <div className="mt-2 space-y-2">
                                <div className="rounded-lg border border-border bg-[linear-gradient(180deg,rgb(17,24,39),rgb(10,12,18))] p-2">
                                  <div className="h-2 w-14 rounded bg-slate-700" />
                                  <div className="mt-2 h-2 w-full rounded bg-slate-800" />
                                </div>
                                <div className="rounded-lg border border-border bg-[linear-gradient(180deg,rgb(17,24,39),rgb(10,12,18))] p-2">
                                  <div className="h-2 w-10 rounded bg-slate-700" />
                                  <div className="mt-2 h-2 w-10/12 rounded bg-slate-800" />
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div className="px-6 pb-7 pt-7">
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

                <div className="mt-7">
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
