import { Container } from "@/components";

export function Hero() {
  return (
    <section id="home" className="hero-enter relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="hero-glow absolute left-1/2 top-[-240px] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="hero-glow absolute bottom-[-280px] right-[-200px] h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
        <div className="hero-glow absolute left-1/2 top-1/3 h-[620px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),rgba(34,211,238,0.10),transparent_60%)] blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="flex flex-col items-start">
            <h1
              className="hero-item font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl"
              style={{ "--enter-delay": "0ms" } as never}
            >
              Build AI-Powered Digital Products
            </h1>

            <p
              className="hero-item mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
              style={{ "--enter-delay": "120ms" } as never}
            >
              LilByte Tech Studio helps startups launch scalable websites,
              SaaS platforms, dashboards and automation systems worldwide.
            </p>

            <div
              className="mt-10 flex flex-col gap-3 sm:flex-row"
              aria-label="Primary calls to action"
            >
              <a
                href="#contact"
                className="hero-item motion-button inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                style={{ "--enter-delay": "240ms" } as never}
              >
                Start Your Product
              </a>

              <a
                href="#demo"
                className="hero-item motion-button inline-flex h-11 items-center justify-center rounded-full border border-border bg-transparent px-6 text-sm font-semibold text-foreground transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                style={{ "--enter-delay": "320ms" } as never}
              >
                View Demo
              </a>
            </div>
          </div>

          <div className="relative" style={{ "--enter-delay": "440ms" } as never}>
            <div className="relative h-[440px]">
              <div className="relative mx-auto w-full max-w-xl">
                <div
                  className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_35%_30%,rgba(59,130,246,0.28),rgba(34,211,238,0.14),transparent_62%)] blur-3xl"
                  aria-hidden="true"
                />

                <div className="hero-item hero-media-shell relative">
                  <div className="group hero-media relative overflow-hidden rounded-[28px]">
                    <div className="hero-media__topbar" aria-hidden="true">
                      <div className="hero-media__dots">
                        <span className="hero-media__dot hero-media__dot--red" />
                        <span className="hero-media__dot hero-media__dot--yellow" />
                        <span className="hero-media__dot hero-media__dot--green" />
                      </div>
                      <div className="hero-media__pill" />
                    </div>

                    <video
                      className="hero-media__video h-[440px] w-full object-cover"
                      src="/videos/hero.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
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
