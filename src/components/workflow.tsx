import { Container } from "@/components";

const steps = [
  {
    title: "Product Discovery",
    description: "We understand your idea, users and business goals.",
  },
  {
    title: "Architecture & Design",
    description: "We design scalable systems and modern product interfaces.",
  },
  {
    title: "Agile Development",
    description: "Rapid sprint-based development with clear milestones.",
  },
  {
    title: "AI & Automation Layer",
    description: "We integrate AI features and automation wherever useful.",
  },
  {
    title: "Launch & Scale",
    description: "Deployment, monitoring and growth support after launch.",
  },
] as const;

export function Workflow() {
  return (
    <section id="workflow" className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How We Build Products
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            A structured process designed to move your idea from concept to
            scalable product.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_-25px_rgba(59,130,246,0.55)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold text-foreground">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </div>

              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
