import { Container } from "@/components";

const modules = [
  {
    title: "Startup Websites",
    description:
      "Fast, scalable, conversion-focused websites for modern startups.",
  },
  {
    title: "AI Automation Systems",
    description:
      "Chatbots, AI tools and workflow automation for smarter businesses.",
  },
  {
    title: "Dashboards & SaaS Platforms",
    description: "Custom admin panels, analytics systems and internal tools.",
  },
  {
    title: "Mobile & Web Apps",
    description: "MVP builds for founders launching their first product.",
  },
] as const;

export function Modules() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What We Build
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Digital products designed for scale, automation and growth.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors duration-200 hover:bg-surface"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
                  <div className="h-4 w-4 rounded bg-primary/40" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
