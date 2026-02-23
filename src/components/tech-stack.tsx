import { Container } from "@/components";

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
  const base = "h-4 w-4 opacity-80";

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

const tech: Array<{ name: TechName; hover: string }> = [
  { name: "Next.js", hover: "hover:bg-white/6 hover:shadow-[0_18px_70px_-40px_rgba(226,232,240,0.35)]" },
  { name: "React", hover: "hover:bg-cyan-400/10 hover:shadow-[0_18px_70px_-40px_rgba(34,211,238,0.40)]" },
  { name: "Node.js", hover: "hover:bg-emerald-400/8 hover:shadow-[0_18px_70px_-40px_rgba(52,211,153,0.35)]" },
  { name: "MongoDB", hover: "hover:bg-emerald-400/8 hover:shadow-[0_18px_70px_-40px_rgba(52,211,153,0.35)]" },
  { name: "OpenAI", hover: "hover:bg-slate-200/6 hover:shadow-[0_18px_70px_-40px_rgba(226,232,240,0.30)]" },
  { name: "Stripe", hover: "hover:bg-indigo-400/10 hover:shadow-[0_18px_70px_-40px_rgba(99,102,241,0.40)]" },
  { name: "React Native", hover: "hover:bg-cyan-400/10 hover:shadow-[0_18px_70px_-40px_rgba(34,211,238,0.40)]" },
  { name: "AWS", hover: "hover:bg-amber-400/8 hover:shadow-[0_18px_70px_-40px_rgba(251,191,36,0.28)]" },
  { name: "Docker", hover: "hover:bg-sky-400/10 hover:shadow-[0_18px_70px_-40px_rgba(56,189,248,0.40)]" },
];

export function TechStack() {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Built with Modern Tech
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            We use reliable technologies to build scalable websites, apps and
            AI-powered systems.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tech.map(({ name, hover }) => (
            <div
              key={name}
              className={`group flex items-center gap-2 rounded-xl border border-border bg-white/5 px-4 py-3 text-sm font-medium text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 ${hover}`}
            >
              <TechLogo name={name} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
