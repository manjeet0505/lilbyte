import { Container } from "@/components";

const tech = [
  "Next.js",
  "React",
  "Node.js",
  "MongoDB",
  "OpenAI",
  "Stripe",
  "React Native",
  "AWS",
  "Docker",
] as const;

export function TechStack() {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Built with Modern Tech
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            We use reliable technologies to build scalable websites, apps and
            AI-powered systems.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tech.map((name) => (
            <div
              key={name}
              className="rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
