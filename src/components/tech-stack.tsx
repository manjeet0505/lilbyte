import { Container } from "@/components";
import { Reveal } from "@/components/shared";

type TechName =
  | "Next.js"
  | "React"
  | "Node.js"
  | "MongoDB"
  | "OpenAI"
  | "Stripe"
  | "React Native"
  | "AWS"
  | "Docker";

function TechLogo({ name }: { name: TechName }) {
  const base = "h-5 w-5 opacity-80";

  switch (name) {
    case "Next.js":
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          aria-hidden="true"
          fill="none"
        >
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M9 16V8l6 8V8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "React":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="1.4">
            <ellipse cx="12" cy="12" rx="9" ry="3.2" />
            <ellipse
              cx="12"
              cy="12"
              rx="9"
              ry="3.2"
              transform="rotate(60 12 12)"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="9"
              ry="3.2"
              transform="rotate(120 12 12)"
            />
          </g>
          <circle cx="12" cy="12" r="1.6" fill="currentColor" />
        </svg>
      );
    case "Node.js":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden="true" fill="none">
          <path
            d="M12 2.6 20 7.2v9.6l-8 4.6-8-4.6V7.2L12 2.6Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 14.8V9.4l4.8 5.4V9.4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "MongoDB":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden="true" fill="none">
          <path
            d="M12 3.2c2.6 2.9 4 6 4 9.2 0 4.2-2.1 7.3-4 8.6-1.9-1.3-4-4.4-4-8.6 0-3.2 1.4-6.3 4-9.2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12 6.2v15"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "OpenAI":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden="true" fill="none">
          <path
            d="M12 4.2a3.7 3.7 0 0 1 3.2 1.8 3.7 3.7 0 0 1 4 2 3.7 3.7 0 0 1-.9 4.4 3.7 3.7 0 0 1-1.1 4.2 3.7 3.7 0 0 1-4.3.6 3.7 3.7 0 0 1-5.8 0 3.7 3.7 0 0 1-4.3-.6 3.7 3.7 0 0 1-1.1-4.2 3.7 3.7 0 0 1-.9-4.4 3.7 3.7 0 0 1 4-2A3.7 3.7 0 0 1 12 4.2Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <path
            d="M9 8.8 12 7l3 1.8v3.6L12 14l-3-1.6V8.8Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "Stripe":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden="true" fill="none">
          <path
            d="M8.5 8.4c0-1.3 1.1-2.2 3-2.2 1.2 0 2.5.3 3.6.9v2.9c-1.1-.6-2.2-.9-3.5-.9-1 0-1.5.3-1.5.8 0 1.6 5.6.7 5.6 4.9 0 1.4-1.2 2.6-3.7 2.6-1.5 0-2.9-.3-4.1-1v-3c1.2.8 2.5 1.2 3.8 1.2 1 0 1.5-.3 1.5-.8 0-1.7-5.7-.8-5.7-5.4Z"
            fill="currentColor"
            opacity="0.85"
          />
        </svg>
      );
    case "React Native":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="1.4">
            <ellipse cx="12" cy="12" rx="9" ry="3.2" />
            <ellipse
              cx="12"
              cy="12"
              rx="9"
              ry="3.2"
              transform="rotate(60 12 12)"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="9"
              ry="3.2"
              transform="rotate(120 12 12)"
            />
          </g>
          <path
            d="M12 9.2c-1.6 1.3-2.2 2.7-2.2 3.7 0 1.7 1.5 3.1 3.3 3.1 1.9 0 3.4-1.4 3.4-3.1 0-1-.6-2.4-2.2-3.7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "AWS":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden="true" fill="none">
          <path
            d="M7.5 16.6 12 4.8l4.5 11.8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 12.6h5.6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M6.8 18.2c3.4 1.8 7 1.8 10.4 0"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      );
    case "Docker":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden="true" fill="none">
          <path
            d="M7.2 12.2h2.6v2.6H7.2v-2.6Zm3.2 0H13v2.6h-2.6v-2.6Zm3.2 0h2.6v2.6H13.6v-2.6ZM8.8 9.2h2.6v2.6H8.8V9.2Zm3.2 0h2.6v2.6H12V9.2Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          <path
            d="M5.2 15.2c.3 2.7 2.4 4.2 6.2 4.2 3.7 0 6.8-1.5 7.4-4.2h-3.2"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

const tech: TechName[] = [
  "Next.js",
  "React",
  "Node.js",
  "MongoDB",
  "OpenAI",
  "Stripe",
  "React Native",
  "AWS",
  "Docker",
];

function MarqueeRow({ reverse }: { reverse?: boolean }) {
  const items = [...tech, ...tech];

  return (
    <div className="marquee relative overflow-hidden">
      <div
        className={`marquee-track flex items-center gap-3 sm:gap-4 ${
          reverse ? "[animation-direction:reverse]" : ""
        } group-hover:[animation-play-state:paused]`}
      >
        {items.map((name, idx) => (
          <div
            key={`${name}-${idx}`}
            className="group/item inline-flex h-12 shrink-0 items-center gap-2 rounded-xl border border-border/70 bg-white/5 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-200"
          >
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.14),rgba(34,211,238,0.08),transparent_60%)] blur-md opacity-0 transition-opacity duration-200 group-hover/item:opacity-100"
                aria-hidden="true"
              />
              <div className="transition-all duration-200 [filter:grayscale(1)_saturate(0.7)_brightness(0.85)] group-hover/item:[filter:grayscale(0)_saturate(1)_brightness(1.1)]">
                <TechLogo name={name} />
              </div>
            </div>
            <span className="text-sm font-medium text-foreground/75 transition-all duration-200 group-hover/item:text-foreground group-hover/item:drop-shadow-[0_0_18px_rgba(59,130,246,0.20)]">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section className="py-16">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Built with Modern Tech
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            We use reliable technologies to build scalable websites, apps and
            AI-powered systems.
          </p>
        </Reveal>

        <Reveal className="relative mt-10">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[260px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.14),rgba(34,211,238,0.08),transparent_60%)] blur-3xl"
            aria-hidden="true"
          />

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-white/2 px-4 py-6 sm:px-6">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent"
              aria-hidden="true"
            />

            <MarqueeRow />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
