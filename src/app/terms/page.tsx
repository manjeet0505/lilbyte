import { Container } from "@/components";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/shared";

export default function TermsPage() {
  const sections = [
    {
      title: "Introduction",
      content: "These Terms & Conditions govern your use of LilByte Tech Studio's services and website. By accessing our services, you agree to be bound by these terms. This agreement constitutes a legally binding contract between you and LilByte Tech Studio."
    },
    {
      title: "Services Scope",
      content: "LilByte Tech Studio provides AI integration services, custom web and mobile app development, and cloud solutions architecture. All services are delivered according to the specifications outlined in project proposals and statements of work. Service timelines and deliverables are subject to mutual agreement."
    },
    {
      title: "Payment Terms",
      content: "Payment terms are typically 50% upfront and 50% upon project completion, unless otherwise agreed. All invoices are due within 30 days of receipt. Late payments may incur interest at 1.5% per month. Prices are exclusive of applicable taxes unless specified."
    },
    {
      title: "Client Responsibilities",
      content: "Clients are responsible for providing timely feedback, necessary assets, and access to required systems. Clients must ensure all provided content is legally owned or properly licensed. Delays in client deliverables may affect project timelines and costs."
    },
    {
      title: "Intellectual Property",
      content: "Upon full payment, clients own the final deliverables and custom code created for their project. LilByte retains rights to reusable components, tools, and methodologies. We reserve the right to display completed work in our portfolio with client confidentiality maintained."
    },
    {
      title: "Confidentiality",
      content: "Both parties agree to maintain confidentiality of all proprietary information shared during the project. This includes business strategies, technical specifications, and any sensitive data. Confidentiality obligations survive project completion."
    },
    {
      title: "Limitation of Liability",
      content: "LilByte Tech Studio's liability is limited to the total value of services rendered. We are not liable for indirect, consequential, or punitive damages. Service availability is provided on an 'as is' basis, and we do not guarantee uninterrupted operation."
    },
    {
      title: "Termination Terms",
      content: "Either party may terminate the agreement with 30 days written notice. Clients are responsible for payment for all work completed up to termination date. Upon termination, deliverables paid for will be provided to the client."
    },
    {
      title: "Governing Law",
      content: "These terms are governed by the laws of the jurisdiction where LilByte Tech Studio operates. Any disputes will be resolved through binding arbitration. Legal proceedings, if necessary, will be conducted in the agreed jurisdiction."
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="ambient-section ambient-hero relative overflow-hidden py-24">
          <Container>
            <Reveal className="mx-auto max-w-3xl text-center" staggerChildren>
              <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Terms &amp; Conditions
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Legal information about working with LilByte Tech Studio and using our services.
              </p>
            </Reveal>
          </Container>
        </section>

        <section className="relative py-16">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.06),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.04),transparent_50%)]"
            aria-hidden="true"
          />
          <Container>
            <div className="mx-auto max-w-3xl space-y-4">
              {sections.map((section, index) => (
                <Reveal key={section.title} delayMs={index * 80}>
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
                      <span className="pr-8">{section.title}</span>
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
                        {section.content}
                      </div>
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

