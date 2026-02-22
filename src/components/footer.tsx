import { Container } from "@/components";

const primaryLinks = [
  { label: "Products", href: "#products" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Book a Call", href: "#contact" },
] as const;

const socialLinks = [
  { label: "LinkedIn", href: "#linkedin" },
  { label: "Twitter", href: "#twitter" },
  { label: "GitHub", href: "#github" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="font-display text-lg font-semibold text-foreground">
              LilByte Tech Studio
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              We build AI-powered digital products for startups worldwide.
            </p>
            <a
              href="mailto:hello@lilbyte.tech"
              className="mt-5 inline-flex text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              hello@lilbyte.tech
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 sm:justify-items-end">
            <div className="space-y-3">
              {primaryLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-muted">
          © 2026 LilByte Tech Studio. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
