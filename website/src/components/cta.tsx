import { Container } from "@/components";
import { Reveal } from "@/components/shared";

export function FinalCta() {
  return (
    <section id="final-cta" className="py-24 overflow-hidden">
      <Container>
        <Reveal
          className="relative rounded-2xl p-12 text-center overflow-hidden"
          staggerChildren
        >
          <div
            className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-transparent blur-2xl"
            aria-hidden="true"
          />
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let’s Build Your Next Digital Product
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Work with LilByte Tech Studio to turn your idea into a scalable
            website, app or SaaS platform.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="/#contact"
              className="motion-button inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Book a Free Consultation
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
