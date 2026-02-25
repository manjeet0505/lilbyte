import { Container } from "@/components";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/shared";

export default function AboutPage() {
  return (
    <>
      <Navbar />
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

        <section className="py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-2">
              <Reveal
                className="rounded-2xl border border-border bg-card/90 p-8 backdrop-blur-sm"
                staggerChildren
              >
                <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                  Story
                </h2>
              </Reveal>

              <Reveal
                className="rounded-2xl border border-border bg-card/90 p-8 backdrop-blur-sm"
                staggerChildren
              >
                <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                  Mission
                </h2>
              </Reveal>

              <Reveal
                className="rounded-2xl border border-border bg-card/90 p-8 backdrop-blur-sm"
                staggerChildren
              >
                <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                  Values
                </h2>
              </Reveal>

              <Reveal
                className="rounded-2xl border border-border bg-card/90 p-8 backdrop-blur-sm"
                staggerChildren
              >
                <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                  Process
                </h2>
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
      <Footer />
    </>
  );
}

