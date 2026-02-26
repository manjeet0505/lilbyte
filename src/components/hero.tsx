"use client";

import { Container } from "@/components";

export function Hero() {
  return (
    <section
      id="home"
      className="hero-enter ambient-section ambient-hero relative overflow-hidden py-16 sm:py-20 md:py-24"
      style={{paddingTop: '120px'}}
    >
      <Container>
        <div className="grid items-center gap-8 lg:gap-14 lg:grid-cols-2 overflow-x-hidden px-4 sm:px-6 md:px-0">
          <div className="flex flex-col items-start">
            <h1
              className="hero-item font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl"
              style={{ "--enter-delay": "0ms" } as never}
            >
              Build AI-Powered Digital Products
            </h1>

            <p
              className="hero-item mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base md:text-lg"
              style={{ "--enter-delay": "120ms" } as never}
            >
              LilByte Tech Studio helps startups launch scalable websites,
              SaaS platforms, dashboards and automation systems worldwide.
            </p>

            <div
              className="hero-item mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ "--enter-delay": "240ms" } as never}
            >
              <a
                href="#contact"
                className="motion-button inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Start Your Product
              </a>

              <a
                href="#demo"
                className="motion-button inline-flex h-11 items-center justify-center rounded-full border border-border bg-transparent px-6 text-sm font-semibold text-foreground transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View Demo
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="relative mx-auto w-full">
              <div className="hero-illustration__glow" aria-hidden="true" />
              <img
                src="/hero/ai-illustration.png"
                alt="AI product illustration"
                className="hero-illustration__img w-full h-auto max-w-full object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
