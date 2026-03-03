"use client";

import { Container } from "@/components";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden ambient-section ambient-hero py-24 md:py-32"
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-2xl">
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Build AI-Powered <br />
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Digital Products
              </span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              LilByte Tech Studio helps startups launch scalable websites,
              SaaS platforms, dashboards, and intelligent automation systems
              worldwide.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Start Your Product
              </a>

              <a
                href="/#demo"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-transparent px-7 text-sm font-semibold text-foreground transition hover:bg-card"
              >
                View Demo
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[320px] sm:w-[420px] lg:w-[500px] xl:w-[560px]">
              
              {/* Glow Background */}
              <div
                className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_60%_40%,rgba(59,130,246,0.35),transparent_70%)] blur-3xl opacity-80"
                aria-hidden="true"
              />

              <img
                src="/hero/ai-illustration.png"
                alt="AI product illustration"
                className="w-full object-contain drop-shadow-[0_60px_120px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}