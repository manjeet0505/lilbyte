import { Container } from "@/components";
import { Reveal } from "@/components/shared";

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you contact us through our website or email. This includes your name, email address, company information, and project details. We also collect technical information automatically, including IP address, browser type, and usage patterns."
    },
    {
      title: "How We Use Data",
      content: "We use your information to provide and improve our services, respond to inquiries, and communicate with you about projects. Data helps us understand client needs, customize solutions, and ensure optimal service delivery. We never sell your personal information to third parties."
    },
    {
      title: "Cookies & Tracking",
      content: "Our website uses essential cookies for functionality and analytics cookies to understand usage patterns. These help us improve user experience and site performance. You can control cookie settings through your browser preferences. We do not use tracking cookies for advertising purposes."
    },
    {
      title: "Third-party Tools",
      content: "We integrate with trusted third-party services for project management, communication, and analytics. These include Calendly for scheduling, analytics platforms for usage insights, and development tools for project delivery. All third-party services are vetted for privacy compliance."
    },
    {
      title: "Data Security",
      content: "We implement industry-standard security measures to protect your information. This includes encryption for data transmission, secure storage solutions, and access controls. Our team follows security best practices and regular security audits. Data is retained only as long as necessary for service delivery."
    },
    {
      title: "User Rights",
      content: "You have the right to access, update, or delete your personal information. You can request data export or opt-out of communications at any time. To exercise these rights, contact us at lilbyteorg@gmail.com. We respond to all privacy requests within 30 days."
    },
    {
      title: "Contact Information",
      content: "For privacy-related questions or concerns, contact our Data Protection Officer at lilbyteorg@gmail.com. We are committed to addressing privacy issues promptly and transparently. Our privacy practices are regularly reviewed and updated to ensure compliance."
    }
  ];

  return (
    <>
      <main>
        <section className="ambient-section ambient-hero relative overflow-x-hidden py-24">
          <Container>
            <Reveal className="mx-auto max-w-3xl text-center" staggerChildren>
              <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                How we handle data and protect the privacy of founders, teams, and users.
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
            <div className="mx-auto max-w-3xl space-y-6">
              {sections.map((section, index) => (
                <Reveal key={section.title} delayMs={index * 80}>
                  <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-[linear-gradient(135deg,rgba(15,23,42,0.8),rgba(5,7,14,0.9))]/80 p-6 backdrop-blur-md transition-all duration-300 ease-out hover:border-primary/30 hover:bg-[linear-gradient(135deg,rgba(15,23,42,0.85),rgba(5,7,14,0.95))]/90 hover:shadow-lg hover:shadow-primary/5">
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5" />
                    </div>
                    <div className="relative">
                      <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                        {section.title}
                      </h3>
                      <div className="mt-3 border-t border-border/40 pt-3">
                        <p className="text-sm leading-relaxed text-muted/90">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

