import { Container } from "@/components";
import { Reveal } from "@/components/shared";

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
    <section id="products" className="ambient-section ambient-modules py-24">
      <div className="ambient-layer ambient-layer--modules" aria-hidden="true">
        <span className="ambient-panel ambient-panel--a" />
        <span className="ambient-panel ambient-panel--b" />
        <span className="ambient-panel ambient-panel--c" />
        <span className="ambient-node ambient-node--a" />
        <span className="ambient-node ambient-node--b" />
        <span className="ambient-node ambient-node--c" />
      </div>
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center" staggerChildren>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What We Build
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Digital products designed for scale, automation and growth.
          </p>
        </Reveal>

        <div className="relative mt-14 overflow-hidden">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),rgba(34,211,238,0.10),transparent_60%)] blur-3xl"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((item, index) => (
              <Reveal key={item.title} delayMs={140 + index * 90}>
                <div className="group relative rounded-2xl p-[1px] transition-all duration-300 ease-out hover:-translate-y-[6px]">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/25 via-cyan-400/18 to-transparent opacity-25 blur-[0.4px] transition-opacity duration-300 ease-out group-hover:opacity-60"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/22 via-cyan-400/14 to-transparent opacity-20 transition-opacity duration-300 ease-out group-hover:opacity-45"
                    aria-hidden="true"
                  />

                  <div className="relative h-full rounded-2xl p-6 transition-all duration-300 ease-out group-hover:shadow-[0_26px_90px_-45px_rgba(59,130,246,0.55)]">
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent"
                      aria-hidden="true"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.06),transparent_55%)] opacity-60"
                      aria-hidden="true"
                    />

                    <div
                      className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-blue-400/0 via-cyan-400/45 to-transparent opacity-55"
                      aria-hidden="true"
                    />

                    <div className="relative flex items-start gap-4">
                      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-primary/10">
                        <div
                          className="pointer-events-none absolute -inset-2 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),rgba(34,211,238,0.18),transparent_65%)] blur-lg opacity-70 transition-opacity duration-300 ease-out group-hover:opacity-90"
                          aria-hidden="true"
                        />
                        <div className="relative h-4 w-4 rounded bg-primary/40" />
                      </div>
                      <div className="relative">
                        <h3 className="text-base font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
