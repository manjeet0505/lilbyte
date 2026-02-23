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
        <div className="absolute left-1/2 top-1/3 h-[620px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),rgba(34,211,238,0.10),transparent_60%)] blur-3xl" />
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
              className="pointer-events-none absolute -inset-10 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_35%_30%,rgba(59,130,246,0.32),rgba(34,211,238,0.16),transparent_62%)] blur-3xl"
              aria-hidden="true"
            />

            <div className="relative h-[440px]">
              <div className="relative mx-auto w-full max-w-xl">
                <div
                  className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_35%_30%,rgba(59,130,246,0.28),rgba(34,211,238,0.14),transparent_62%)] blur-3xl"
                  aria-hidden="true"
                />

                <div className="group relative overflow-hidden rounded-2xl border border-border shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                  <video
                    className="h-[440px] w-full object-cover"
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
      </Container>
    </section>
  );
}
