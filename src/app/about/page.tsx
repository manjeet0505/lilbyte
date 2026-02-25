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
      </main>
      <Footer />
    </>
  );
}

