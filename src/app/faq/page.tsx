import { Container } from "@/components";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/shared";

export default function FaqPage() {
  const faqs: { question: string; answer: string }[] = [];

  return (
    <>
      <Navbar />
      <main>
        <section className="ambient-section ambient-hero relative overflow-hidden py-24">
          <Container>
            <Reveal className="mx-auto max-w-3xl text-center" staggerChildren>
              <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Answers to common questions about how we work with startups and product teams.
              </p>
            </Reveal>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="mx-auto max-w-3xl space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-border bg-card/80 p-4 text-left text-sm text-muted backdrop-blur transition-colors duration-200 ease-out hover:border-primary/50 hover:bg-card/90 sm:p-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-foreground">
                    <span>{item.question}</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background/60 text-muted transition-transform duration-200 ease-out group-open:rotate-180">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3 w-3">
                        <path
                          d="M7 10l5 5 5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-3 border-t border-border/60 pt-3 text-sm leading-relaxed text-muted">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <Reveal className="mx-auto max-w-xl text-center" staggerChildren>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Still have questions?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Reach out and we’ll help you understand how LilByte can support your next product.
              </p>
              <div className="mt-6 flex justify-center">
                <a
                  href="/contact"
                  className="motion-button inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Contact Us
                </a>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

