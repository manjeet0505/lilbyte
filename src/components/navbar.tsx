"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";

import { Container } from "@/components";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#products" },
  { label: "Workflow", href: "/#workflow" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/#contact" },
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
    document.body.style.overflowX = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50" style={{background: 'transparent', backdropFilter: 'blur(6px)', position: 'fixed', top: '0', left: '0', width: '100%', zIndex: '50'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px'}}>
        <div style={{display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: 'fit-content'}}>
          <Link
            href="/"
            className="group inline-flex items-center"
          >
            <div className="relative" style={{display: 'flex', alignItems: 'center', flexShrink: '0'}}>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-xl" aria-hidden="true" />
              <img
                src="/logo/lilbyte-logo.png"
                alt="LilByte Tech Studio"
                height={52}
                className="relative transition-transform duration-250 ease-out group-hover:scale-105"
                style={{filter: 'drop-shadow(0 0 12px rgba(80,120,255,0.35))', height: '52px', width: 'auto', objectFit: 'contain'}}
                loading="eager"
              />
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 lg:gap-12" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted transition-all duration-200 hover:text-foreground hover:text-blue-400 group whitespace-nowrap"
              style={{fontSize: '14px'}}
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <Link
            href="/#contact"
            className="group relative inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/90 px-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background flex-shrink-0"
            style={{flexShrink: '0', minWidth: 'fit-content'}}
          >
            <span className="relative z-10">Book a Call</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-md" aria-hidden="true" />
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-controls={mobileNavId}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          style={{flexShrink: '0'}}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isOpen ? (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />

          <div
            id={mobileNavId}
            className="fixed inset-x-0 top-16 z-50 bg-background/95 backdrop-blur-md border-b border-border"
            role="dialog"
            aria-modal="true"
          >
            <Container className="py-4">
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-card hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="/#contact"
                  className="mt-2 inline-flex h-10 items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  onClick={() => setIsOpen(false)}
                >
                  Book a Call
                </Link>
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
