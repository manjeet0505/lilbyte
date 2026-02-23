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
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${p.gradient}`}
                  aria-hidden="true"
                />

                <div className="absolute inset-0 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                      <div className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                      <div className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
                    </div>
                    <div className="h-7 w-24 rounded-md bg-foreground/10" />
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="rounded-xl border border-border bg-card p-3">
                      <div className="h-3 w-16 rounded bg-foreground/10" />
                      <div className="mt-3 h-6 w-20 rounded bg-foreground/15" />
                    </div>
                    <div className="rounded-xl border border-border bg-card p-3">
                      <div className="h-3 w-16 rounded bg-foreground/10" />
                      <div className="mt-3 h-6 w-20 rounded bg-foreground/15" />
                    </div>
                    <div className="rounded-xl border border-border bg-card p-3">
                      <div className="h-3 w-16 rounded bg-foreground/10" />
                      <div className="mt-3 h-6 w-20 rounded bg-foreground/15" />
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
