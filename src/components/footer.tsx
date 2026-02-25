import Link from "next/link";

import { Container } from "@/components";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-[radial-gradient(circle_at_0%_0%,rgba(15,23,42,0.9),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(15,23,42,0.9),transparent_55%),linear-gradient(180deg,rgb(5,7,14),rgb(2,6,23))] py-16">
      <div
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-[radial-gradient(circle_at_50%_0,rgba(59,130,246,0.6),transparent_60%)]"
        aria-hidden="true"
      />
      <Container>
        <div className="grid gap-10 border-border/60 pb-10 lg:grid-cols-[minmax(0,2.2fr)_repeat(3,minmax(0,1.1fr))_minmax(0,1.8fr)] lg:border-b">
          {/* Brand column */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <img
                src="/logo/lilbyte-logo.png"
                alt="LilByte Tech Studio"
                height={28}
                className="h-7 w-auto"
                loading="lazy"
              />
              <div className="font-display text-lg font-semibold text-foreground">
                LilByte Tech Studio
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              We build AI-powered websites, dashboards and SaaS products for modern startups.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@lilbyte.tech"
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                lilbyteorg@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com"
                aria-label="LilByte on LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-muted transition-colors hover:border-primary hover:text-foreground"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                  <path
                    fill="currentColor"
                    d="M6.2 6.2a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0ZM3.6 8.6h2.6V21H3.6V8.6Zm6.2 0h2.5v1.7h.1c.4-.7 1.5-1.9 3.3-1.9 3.6 0 4.3 2.4 4.3 5.5V21h-2.6v-6.1c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9.8V8.6Z"
                  />
                </svg>
              </a>
              <a
                href="https://github.com"
                aria-label="LilByte on GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-muted transition-colors hover:border-primary hover:text-foreground"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                  <path
                    fill="currentColor"
                    d="M12 2.2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-3 .7-3.6-1.3-3.6-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.8-.8 2.2-1.3-.8-.1-1.6-.4-2.1-.9-1.6-1.6-.1-4.5.4-5.2-.2-.5-.7-2 .1-4 0 0 1.2-.4 3.8 1.4 1.1-.3 2.2-.4 3.4-.4 1.1 0 2.3.1 3.4.4 2.6-1.8 3.8-1.4 3.8-1.4.8 2 .3 3.5.1 4 .5.7 2 3.6.4 5.2-.6.6-1.4.8-2.2.9.5.4.8 1.2.8 2.4v3.5c0 .3.2.6.7.5A10 10 0 0 0 12 2.2Z"
                  />
                </svg>
              </a>
              <a
                href="mailto:hello@lilbyte.tech"
                aria-label="Email LilByte"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-muted transition-colors hover:border-primary hover:text-foreground"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                  <path
                    fill="currentColor"
                    d="M4.5 6.4h15a2 2 0 0 1 2 2v9.2a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2V8.4a2 2 0 0 1 2-2Zm.5 2.2v.3l7 4.5 7-4.5v-.3l-7 4.4-7-4.4Z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Product / Services */}
          <div className="space-y-3 text-sm">
            <div className="font-semibold text-foreground">Product & Services</div>
            <Link
              href="/#products"
              className="block text-muted transition-all duration-200 hover:text-foreground hover:underline hover:underline-offset-4 hover:decoration-primary/60"
            >
              Startup Websites
            </Link>
            <Link
              href="/#products"
              className="block text-muted transition-all duration-200 hover:text-foreground hover:underline hover:underline-offset-4 hover:decoration-primary/60"
            >
              SaaS Platforms
            </Link>
            <Link
              href="/#products"
              className="block text-muted transition-all duration-200 hover:text-foreground hover:underline hover:underline-offset-4 hover:decoration-primary/60"
            >
              AI Automation
            </Link>
            <Link
              href="/#products"
              className="block text-muted transition-all duration-200 hover:text-foreground hover:underline hover:underline-offset-4 hover:decoration-primary/60"
            >
              MVP Development
            </Link>
          </div>

          {/* Company */}
          <div className="space-y-3 text-sm">
            <div className="font-semibold text-foreground">Company</div>
            <Link
              href="/about"
              className="block text-muted transition-all duration-200 hover:text-foreground hover:underline hover:underline-offset-4 hover:decoration-primary/60"
            >
              About
            </Link>
            <Link
              href="/team"
              className="block text-muted transition-all duration-200 hover:text-foreground hover:underline hover:underline-offset-4 hover:decoration-primary/60"
            >
              Team
            </Link>
            <Link
              href="/faq"
              className="block text-muted transition-all duration-200 hover:text-foreground hover:underline hover:underline-offset-4 hover:decoration-primary/60"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="block text-muted transition-all duration-200 hover:text-foreground hover:underline hover:underline-offset-4 hover:decoration-primary/60"
            >
              Contact
            </Link>
          </div>

          {/* Resources */}
          <div className="space-y-3 text-sm">
            <div className="font-semibold text-foreground">Resources</div>
            <Link
              href="/faq"
              className="block text-muted transition-all duration-200 hover:text-foreground hover:underline hover:underline-offset-4 hover:decoration-primary/60"
            >
              FAQ
            </Link>
            <Link
              href="/terms"
              className="block text-muted transition-all duration-200 hover:text-foreground hover:underline hover:underline-offset-4 hover:decoration-primary/60"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/privacy"
              className="block text-muted transition-all duration-200 hover:text-foreground hover:underline hover:underline-offset-4 hover:decoration-primary/60"
            >
              Privacy Policy
            </Link>
          </div>

          {/* CTA column */}
          <div className="space-y-4 text-sm">
            <div className="font-semibold text-foreground">Ready to build?</div>
            <p className="text-sm leading-relaxed text-muted">
              Book a call and we’ll explore how LilByte can help you ship your next product.
            </p>
            <Link
              href="/contact"
              className="motion-button inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Book a Call
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-xs text-muted sm:flex-row">
          <p>© 2026 LilByte Tech Studio. All rights reserved.</p>
          <p className="text-[11px]">
            Crafted with an AI-first mindset for ambitious founders.
          </p>
        </div>
      </Container>
    </footer>
  );
}
