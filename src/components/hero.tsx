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
              className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-primary/25 via-transparent to-transparent blur-2xl"
              aria-hidden="true"
            />

            <div className="rounded-2xl border border-border bg-card p-5 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                  <div className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                  <div className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
                </div>
                <div className="h-8 w-28 rounded-md bg-foreground/10" />
              </div>

              <div className="mt-5 grid gap-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="h-4 w-40 rounded bg-foreground/10" />
                  <div className="h-4 w-20 rounded bg-foreground/10" />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-border bg-background p-3">
                    <div className="h-3 w-16 rounded bg-foreground/10" />
                    <div className="mt-3 h-7 w-20 rounded bg-foreground/15" />
                  </div>
                  <div className="rounded-xl border border-border bg-background p-3">
                    <div className="h-3 w-16 rounded bg-foreground/10" />
                    <div className="mt-3 h-7 w-20 rounded bg-foreground/15" />
                  </div>
                  <div className="rounded-xl border border-border bg-background p-3">
                    <div className="h-3 w-16 rounded bg-foreground/10" />
                    <div className="mt-3 h-7 w-20 rounded bg-foreground/15" />
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-background p-4">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-24 rounded bg-foreground/10" />
                    <div className="h-3 w-12 rounded bg-foreground/10" />
                  </div>
                  <div className="mt-4 grid gap-3">
                    <div className="h-2.5 w-full rounded bg-foreground/10" />
                    <div className="h-2.5 w-11/12 rounded bg-foreground/10" />
                    <div className="h-2.5 w-10/12 rounded bg-foreground/10" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border bg-background p-4">
                    <div className="h-3 w-24 rounded bg-foreground/10" />
                    <div className="mt-4 h-20 rounded bg-gradient-to-tr from-primary/25 via-primary/10 to-transparent" />
                  </div>
                  <div className="rounded-xl border border-border bg-background p-4">
                    <div className="h-3 w-24 rounded bg-foreground/10" />
                    <div className="mt-4 h-20 rounded bg-gradient-to-tr from-primary/15 via-transparent to-transparent" />
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
