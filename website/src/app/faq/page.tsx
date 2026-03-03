import { Container } from "@/components";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/shared";

export default function FaqPage() {
  const faqs: { question: string; answer: string }[] = [
    {
      question: "What does LiL Byte actually do?",
      answer: "At LiL Byte, we build intelligent, scalable digital solutions. Our core services include AI integration services, custom web and mobile app development, and cloud solutions architecture. We help businesses transform ideas into high-performance digital products that are secure, scalable, and future-ready."
    },
    {
      question: "What business problems do you solve?",
      answer: "We help companies overcome outdated systems, inefficient workflows, poor scalability, and lack of automation. Whether you need AI-powered automation, a modern web application, or a reliable cloud infrastructure setup, we design solutions that reduce operational costs and improve performance."
    },
    {
      question: "How can AI integration improve my business operations?",
      answer: "Our AI integration solutions help automate repetitive tasks, enhance data-driven decision-making, improve customer engagement, and increase overall productivity. Instead of generic AI tools, we build customized AI systems aligned with your business goals."
    },
    {
      question: "Why choose LiL Byte as your technology partner?",
      answer: "We combine strategy, development, and cloud expertise to deliver complete digital transformation solutions. Our focus is on clean architecture, scalable systems, transparent communication, and measurable results."
    },
    {
      question: "What makes LiL Byte different from other development companies?",
      answer: "We build integrated ecosystems combining AI, cloud computing, and software engineering into one seamless solution. We prioritize performance, scalability, and long-term maintainability."
    },
    {
      question: "Do you work with startups and growing businesses?",
      answer: "Yes. We work with startups building MVPs, scaling companies optimizing infrastructure, and enterprises implementing advanced AI systems."
    },
    {
      question: "What is your development process like?",
      answer: "We follow a structured agile approach:\nDiscovery → Architecture → Design → Development → Testing → Deployment → Support."
    }
  ];

  return (
    <>
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

        <section className="relative py-16">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.06),transparent_50%)]"
            aria-hidden="true"
          />
          <Container>
            <div className="mx-auto max-w-3xl space-y-4">
              {faqs.map((item, index) => (
                <Reveal key={item.question} delayMs={index * 100}>
                  <details
                    className="group relative overflow-hidden rounded-2xl border border-border/60 bg-[linear-gradient(135deg,rgba(15,23,42,0.8),rgba(5,7,14,0.9))]/80 backdrop-blur-md transition-all duration-300 ease-out hover:border-primary/30 hover:bg-[linear-gradient(135deg,rgba(15,23,42,0.85),rgba(5,7,14,0.95))]/90 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5" />
                    </div>
                    <summary className="relative flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-medium text-foreground sm:p-6">
                      <span className="pr-8">{item.question}</span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border/60 bg-background/80 text-muted transition-all duration-300 ease-out group-open:rotate-180 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
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
                    <div className="relative px-5 pb-5 text-sm leading-relaxed text-muted/90 sm:px-6 sm:pb-6">
                      <div className="border-t border-border/40 pt-4">
                        {item.answer.includes('\n') ? (
                          item.answer.split('\n').map((line, i) => (
                            <div key={i}>{line}</div>
                          ))
                        ) : (
                          <div>{item.answer}</div>
                        )}
                      </div>
                    </div>
                  </details>
                </Reveal>
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
                Reach out and we'll help you understand how LilByte can support your next product.
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
    </>
  );
}

