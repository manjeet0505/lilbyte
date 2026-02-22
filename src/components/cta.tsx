import { Container } from "@/components";

export function FinalCta() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-2xl border border-border bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-500/20 p-12 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let’s Build Your Next Digital Product
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Work with LilByte Tech Studio to turn your idea into a scalable
            website, app or SaaS platform.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
