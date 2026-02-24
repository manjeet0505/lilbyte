"use client";

import { useEffect, useId, useState } from "react";

import { Container } from "@/components";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavId = useId();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="group inline-flex items-center"
          >
            <img
              src="/logo/lilbyte-logo.png"
              alt="LilByte Tech Studio"
              height={38}
              className="mr-2 h-[38px] w-auto transition-[opacity,filter] duration-200 group-hover:opacity-90 group-hover:drop-shadow-[0_10px_28px_rgba(59,130,246,0.35)]"
              loading="eager"
            />
          </a>
        </div>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Book a Call
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-controls={mobileNavId}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      {isOpen ? (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />

          <div
            id={mobileNavId}
            className="fixed inset-x-0 top-16 z-50 border-b border-border bg-background"
            role="dialog"
            aria-modal="true"
          >
            <Container className="py-4">
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-card hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  className="mt-2 inline-flex h-10 items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  onClick={() => setIsOpen(false)}
                >
                  Book a Call
                </a>
              </nav>
            </Container>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M4 7H20M4 12H20M4 17H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
