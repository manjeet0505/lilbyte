"use client";

import { useEffect, useId, useState } from "react";

import { Container } from "@/components";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Team", href: "/team" },
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
    <header className="sticky top-0 z-50 bg-gradient-to-b from-[rgba(5,7,14,0.85)] via-[rgba(5,7,14,0.75)] to-transparent backdrop-blur-md supports-[backdrop-filter]:bg-gradient-to-b supports-[backdrop-filter]:from-[rgba(5,7,14,0.8)] supports-[backdrop-filter]:via-[rgba(5,7,14,0.7)] supports-[backdrop-filter]:to-transparent transition-all duration-300 ease-out">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" aria-hidden="true" />
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="group inline-flex items-center"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-xl" aria-hidden="true" />
              <img
                src="/logo/lilbyte-logo.png"
                alt="LilByte Tech Studio"
                height={38}
                className="relative h-[38px] w-auto transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                loading="eager"
              />
            </div>
          </a>
        </div>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted transition-all duration-200 hover:text-foreground hover:text-blue-400 group"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <a
            href="#contact"
            className="group relative inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/90 px-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="relative z-10">Book a Call</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-md" aria-hidden="true" />
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
