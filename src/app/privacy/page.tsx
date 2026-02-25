import { Container } from "@/components";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/shared";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="ambient-section ambient-hero relative overflow-hidden py-24">
          <Container>
            <Reveal className="mx-auto max-w-3xl text-center" staggerChildren>
              <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                How we handle data and protect the privacy of founders, teams, and users.
              </p>
            </Reveal>

            <div className="mt-10 mx-auto max-w-3xl rounded-2xl border border-border bg-card/90 p-8 text-sm leading-relaxed text-muted backdrop-blur-sm sm:p-10">
              <div className="space-y-6">
                <p>
                  How we handle data and protect the privacy of founders, teams, and users.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

