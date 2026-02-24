"use client";

import { Container } from "@/components";

import { useRef } from "react";

export function Hero() {
  const visualRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      id="home"
      className="hero-enter ambient-section ambient-hero relative overflow-hidden py-24"
    >
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

          <div className="relative">
            <div className="relative mx-auto w-full max-w-xl">
              <div
                ref={visualRef}
                className="hero-item hero-illustration"
                style={{ "--enter-delay": "440ms" } as never}
                onMouseMove={(e) => {
                  const el = visualRef.current;
                  if (!el) return;

                  const rect = el.getBoundingClientRect();
                  const px = (e.clientX - rect.left) / rect.width;
                  const py = (e.clientY - rect.top) / rect.height;

                  const tiltX = (0.5 - py) * 5;
                  const tiltY = (px - 0.5) * 7;

                  el.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
                  el.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
                }}
                onMouseLeave={() => {
                  const el = visualRef.current;
                  if (!el) return;
                  el.style.setProperty("--tilt-x", "0deg");
                  el.style.setProperty("--tilt-y", "0deg");
                }}
              >
                <div className="hero-illustration__glow" aria-hidden="true" />
                <img
                  src="/hero/ai-illustration.png"
                  alt="AI product illustration"
                  className="hero-illustration__img"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
