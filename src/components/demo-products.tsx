import { Container } from "@/components";
import { Reveal } from "@/components/shared";

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

const previewImages: Record<(typeof products)[number]["name"], string> = {
  "AI Powered S3 Dashboard": "/projects/s3.png",
  "Senior Junior Connect (AI Powered)": "/projects/connect.png",
  "AI Resume Analyzer": "/projects/resume.png",
  "Startup Analytics Dashboard": "/projects/analytics.png",
};

export function DemoProducts() {
  return (
    <section className="ambient-section ambient-demo py-24">
      <div className="ambient-layer ambient-layer--demo" aria-hidden="true">
        <span className="ambient-demo-texture" />
        <span className="ambient-demo-scan" />
        <span className="ambient-demo-grid" />
      </div>
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center" staggerChildren>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Demo Products
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Examples of digital products and systems we build for startups.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, index) => (
            <Reveal key={p.name} delayMs={120 + index * 90}>
              <div className="motion-card group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/40 [--motion-card-shadow:0_20px_70px_-28px_rgba(59,130,246,0.6)]">
                <div className="border-b border-border bg-background">
                  <div className="relative h-[220px] overflow-hidden rounded-t-2xl bg-[linear-gradient(180deg,rgb(10,12,18),rgb(6,8,12))]">
                    <div className="flex h-9 items-center gap-2 border-b border-border bg-[linear-gradient(180deg,rgb(14,16,22),rgb(10,12,18))] px-3">
                      <div className="flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                        <div className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="ml-auto h-2.5 w-20 rounded bg-slate-800" />
                    </div>

                    <div className="relative h-[calc(220px-36px)] p-2">
                      <div className="relative h-full overflow-hidden rounded-xl border border-border/70 bg-[linear-gradient(180deg,rgb(15,18,26),rgb(8,10,14))] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                        <img
                          src={previewImages[p.name]}
                          alt={p.name}
                          className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                          loading={p.name === "AI Powered S3 Dashboard" ? "eager" : "lazy"}
                        />

                        <div
                          className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03),inset_0_-40px_60px_rgba(0,0,0,0.55)]"
                          aria-hidden="true"
                        />
                        <div
                          className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/35 to-transparent"
                          aria-hidden="true"
                        />
                      </div>

                      <div
                        className="pointer-events-none absolute inset-x-6 bottom-2 h-8 bg-[linear-gradient(90deg,rgba(59,130,246,0.20),rgba(34,211,238,0.12),transparent)] blur-lg opacity-60"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-6 pb-7 pt-6">
                  <h3 className="text-base font-semibold text-foreground">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>

                  <div className="mt-4 flex min-h-[56px] flex-wrap items-start gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex max-w-full items-center rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted"
                      >
                        <span className="max-w-[9rem] truncate">{t}</span>
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-7">
                    <a
                      href="#demo"
                      className="motion-button inline-flex h-10 w-full items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      View Demo
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
