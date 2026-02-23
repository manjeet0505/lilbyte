import { Container } from "@/components";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-[-240px] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-[-280px] right-[-200px] h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-[620px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),rgba(34,211,238,0.10),transparent_60%)] blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="flex flex-col items-start">
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
              Build AI-Powered Digital Products
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              LilByte Tech Studio helps startups launch scalable websites,
              SaaS platforms, dashboards and automation systems worldwide.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Start Your Product
              </a>

              <a
                href="#demo"
                className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-transparent px-6 text-sm font-semibold text-foreground transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View Demo
              </a>
            </div>
          </div>

          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-10 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_35%_30%,rgba(59,130,246,0.32),rgba(34,211,238,0.16),transparent_62%)] blur-3xl"
              aria-hidden="true"
            />

            <div className="relative h-[440px]">
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.22),rgba(34,211,238,0.14),transparent_60%)] blur-3xl"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute left-16 top-14 h-[2px] w-56 rotate-[10deg] bg-gradient-to-r from-blue-500/0 via-cyan-400/35 to-blue-500/0 blur-[0.6px]"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute right-12 top-44 h-[2px] w-56 rotate-[-18deg] bg-gradient-to-r from-blue-500/0 via-sky-500/30 to-blue-500/0 blur-[0.6px]"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute left-36 bottom-16 h-[2px] w-64 rotate-[-8deg] bg-gradient-to-r from-blue-500/0 via-cyan-400/25 to-blue-500/0 blur-[0.6px]"
                aria-hidden="true"
              />

              <div className="absolute left-8 top-6 w-[360px] rounded-2xl border border-border bg-card shadow-xl [animation:float-slow_10s_ease-in-out_infinite]">
                <div className="rounded-t-2xl border-b border-border bg-[linear-gradient(135deg,rgba(59,130,246,0.18),rgba(34,211,238,0.08),transparent_60%)] px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                      <div className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                      <div className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-14 rounded bg-foreground/15" />
                      <div className="h-2.5 w-10 rounded bg-foreground/10" />
                      <div className="h-7 w-16 rounded-full bg-primary/20" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="h-4 w-56 rounded bg-foreground/15" />
                    <div className="mt-2 h-3 w-72 rounded bg-foreground/10" />
                    <div className="mt-2 h-3 w-64 rounded bg-foreground/10" />
                  </div>
                </div>

                <div className="p-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2 rounded-xl border border-border bg-background/50 p-3">
                      <div className="h-3 w-24 rounded bg-foreground/15" />
                      <div className="mt-3 h-8 w-full rounded-lg bg-gradient-to-r from-blue-500/20 via-sky-500/15 to-transparent" />
                      <div className="mt-3 h-3 w-40 rounded bg-foreground/10" />
                    </div>
                    <div className="rounded-xl border border-border bg-background/50 p-3">
                      <div className="h-3 w-14 rounded bg-foreground/15" />
                      <div className="mt-3 h-10 w-10 rounded-lg bg-foreground/10" />
                      <div className="mt-3 h-3 w-full rounded bg-foreground/10" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute right-8 top-16 w-[210px] rotate-[8deg] rounded-[28px] border border-border bg-card shadow-xl [animation:float-slow_11s_ease-in-out_infinite]">
                <div className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-foreground/15" />
                <div className="mx-3 mt-3 rounded-2xl border border-border bg-background/60 p-3">
                  <div className="flex items-center justify-between">
                    <div className="h-2.5 w-16 rounded bg-foreground/15" />
                    <div className="h-6 w-6 rounded-full bg-foreground/10" />
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="h-3 w-full rounded bg-foreground/10" />
                    <div className="h-3 w-11/12 rounded bg-foreground/10" />
                    <div className="h-3 w-10/12 rounded bg-foreground/10" />
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="h-10 rounded-xl bg-gradient-to-b from-blue-500/18 to-transparent" />
                    <div className="h-10 rounded-xl bg-gradient-to-b from-cyan-400/14 to-transparent" />
                  </div>
                </div>
                <div className="mx-3 mt-3 mb-4 rounded-2xl border border-border bg-background/60 p-3">
                  <div className="h-3 w-20 rounded bg-foreground/15" />
                  <div className="mt-3 h-8 w-full rounded-lg bg-foreground/10" />
                </div>
              </div>

              <div className="absolute left-2 bottom-10 w-[280px] rounded-2xl border border-border bg-card shadow-xl [animation:float-slow_12s_ease-in-out_infinite]">
                <div className="flex items-center justify-between border-b border-border px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-cyan-400/70" />
                    <div className="text-xs font-semibold text-foreground">AI Chat</div>
                  </div>
                  <div className="rounded-full border border-border bg-background px-2 py-1 text-[10px] text-muted">
                    AI
                  </div>
                </div>

                <div className="space-y-3 p-4">
                  <div className="w-[82%] rounded-2xl bg-background/60 px-3 py-2">
                    <div className="h-2.5 w-32 rounded bg-foreground/15" />
                    <div className="mt-2 h-2.5 w-44 rounded bg-foreground/10" />
                  </div>
                  <div className="ml-auto w-[76%] rounded-2xl bg-primary/15 px-3 py-2">
                    <div className="h-2.5 w-28 rounded bg-foreground/15" />
                    <div className="mt-2 h-2.5 w-36 rounded bg-foreground/10" />
                  </div>
                  <div className="w-[84%] rounded-2xl bg-background/60 px-3 py-2">
                    <div className="h-2.5 w-40 rounded bg-foreground/15" />
                    <div className="mt-2 h-2.5 w-28 rounded bg-foreground/10" />
                  </div>
                </div>
              </div>

              <div className="absolute right-24 bottom-6 w-[240px] translate-y-2 scale-[0.98] rounded-2xl border border-border bg-card shadow-xl [animation:float-slow_13s_ease-in-out_infinite]">
                <div className="flex items-center justify-between border-b border-border px-4 py-3">
                  <div>
                    <div className="text-xs font-semibold text-foreground">Mini Dashboard</div>
                    <div className="mt-0.5 text-[11px] text-muted">Analytics snapshot</div>
                  </div>
                  <div className="h-7 w-16 rounded-full bg-foreground/5" />
                </div>

                <div className="p-4">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-lg border border-border bg-background/50 p-2">
                      <div className="h-2.5 w-10 rounded bg-foreground/15" />
                      <div className="mt-2 h-3.5 w-12 rounded bg-foreground/20" />
                    </div>
                    <div className="rounded-lg border border-border bg-background/50 p-2">
                      <div className="h-2.5 w-10 rounded bg-foreground/15" />
                      <div className="mt-2 h-3.5 w-12 rounded bg-foreground/20" />
                    </div>
                    <div className="rounded-lg border border-border bg-background/50 p-2">
                      <div className="h-2.5 w-10 rounded bg-foreground/15" />
                      <div className="mt-2 h-3.5 w-12 rounded bg-foreground/20" />
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl border border-border bg-background/50 p-3">
                    <div className="flex items-center justify-between">
                      <div className="h-3 w-20 rounded bg-foreground/15" />
                      <div className="h-3 w-12 rounded bg-foreground/10" />
                    </div>
                    <div className="mt-3 grid grid-cols-12 items-end gap-1">
                      <div className="col-span-2 h-8 rounded bg-gradient-to-t from-blue-500/75 via-sky-500/35 to-transparent" />
                      <div className="col-span-2 h-11 rounded bg-gradient-to-t from-blue-500/80 via-sky-500/40 to-transparent" />
                      <div className="col-span-2 h-7 rounded bg-gradient-to-t from-sky-500/75 via-cyan-400/30 to-transparent" />
                      <div className="col-span-2 h-12 rounded bg-gradient-to-t from-cyan-400/75 via-sky-500/30 to-transparent" />
                      <div className="col-span-2 h-9 rounded bg-gradient-to-t from-blue-500/75 via-sky-500/35 to-transparent" />
                      <div className="col-span-2 h-10 rounded bg-gradient-to-t from-sky-500/75 via-cyan-400/30 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
