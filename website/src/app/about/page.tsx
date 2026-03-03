import { Container } from "@/components";
import { Reveal } from "@/components/shared";

export default function AboutPage() {
  return (
    <>
      <main>
        <section className="ambient-section ambient-hero relative overflow-hidden py-24">
          <Container>
            <Reveal className="mx-auto max-w-3xl text-center" staggerChildren>
              <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                About LilByte Tech Studio
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                LilByte is a small, focused team building AI-powered websites, dashboards, and
                SaaS products for startups that want to move fast without sacrificing quality.
              </p>
            </Reveal>
          </Container>
        </section>

        <section className="relative py-20">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.06),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(34,211,238,0.04),transparent_50%)]"
            aria-hidden="true"
          />
          <Container>
            <div className="grid gap-8 lg:grid-cols-2">
              <Reveal
                className="relative overflow-hidden rounded-2xl border border-border/60 bg-[linear-gradient(135deg,rgba(15,23,42,0.8),rgba(5,7,14,0.9))]/80 p-8 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                staggerChildren
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
                </div>
                <div className="relative">
                  <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    Story
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted/90">
                    LiL Byte started with a simple belief — startups deserve technology partners who understand both business and engineering. We saw founders struggling with slow agencies, fragile codebases, and disconnected tools. So we built a studio focused on scalable architecture, fast execution, and AI-first solutions.
                  </p>
                </div>
              </Reveal>

              <Reveal
                className="relative overflow-hidden rounded-2xl border border-border/60 bg-[linear-gradient(135deg,rgba(15,23,42,0.8),rgba(5,7,14,0.9))]/80 p-8 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                staggerChildren
                delayMs={100}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
                </div>
                <div className="relative">
                  <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    Mission
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted/90">
                    To help founders launch smarter products faster using scalable engineering, AI automation, and modern cloud systems.
                  </p>
                </div>
              </Reveal>

              <Reveal
                className="relative overflow-hidden rounded-2xl border border-border/60 bg-[linear-gradient(135deg,rgba(15,23,42,0.8),rgba(5,7,14,0.9))]/80 p-8 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                staggerChildren
                delayMs={200}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
                </div>
                <div className="relative">
                  <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    Values
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted/90">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                      <span>Build things that scale</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                      <span>Communicate like partners, not vendors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                      <span>Move fast but design for long-term</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                      <span>Automate wherever possible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                      <span>Always think product-first</span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal
                className="relative overflow-hidden rounded-2xl border border-border/60 bg-[linear-gradient(135deg,rgba(15,23,42,0.8),rgba(5,7,14,0.9))]/80 p-8 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                staggerChildren
                delayMs={300}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
                </div>
                <div className="relative">
                  <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    Process
                  </h2>
                  <div className="mt-3 space-y-3">
                    {[
                      "Discover the idea and goals",
                      "Architect the system properly", 
                      "Design for usability and conversion",
                      "Build with scalable tech stack",
                      "Launch and optimize continuously"
                    ].map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          {index + 1}
                        </div>
                        <p className="text-sm leading-relaxed text-muted/90">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <Reveal
              className="relative overflow-hidden rounded-2xl border border-border bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.22),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.14),transparent_55%),linear-gradient(180deg,rgba(15,23,42,0.85),rgba(5,7,14,0.9))] p-10 text-center"
              staggerChildren
            >
              <div
                className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.20),rgba(34,211,238,0.12),transparent_65%)] blur-3xl opacity-70"
                aria-hidden="true"
              />
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Building with an AI-first mindset
              </h2>
            </Reveal>
          </Container>
        </section>
      </main>
    </>
  );
}

