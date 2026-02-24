import { Container } from "@/components";
import { Reveal } from "@/components/shared";

const tiers = [
  {
    name: "Starter Build",
    tagline: "For small startups or landing-based products",
    price: "$800 – $1500",
    features: [
      "Startup website or landing page",
      "Basic dashboard or admin panel",
      "Deployment support",
    ],
    highlighted: false,
  },
  {
    name: "Growth Product",
    tagline: "For funded startups building real products",
    price: "$2000 – $5000",
    features: [
      "Full product UI",
      "Backend APIs",
      "Dashboard system",
      "AI integration options",
    ],
    highlighted: true,
  },
  {
    name: "Full SaaS Launch",
    tagline: "For teams launching scalable platforms",
    price: "$6000+",
    features: [
      "Complete SaaS architecture",
      "Auth + database + APIs",
      "Dashboard + automation systems",
      "Launch & scaling support",
    ],
    highlighted: false,
  },
] as const;

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center" staggerChildren>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Product Build Packages
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Flexible packages designed for startups at different growth stages.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Reveal key={tier.name} delayMs={140 + (tier.highlighted ? 90 : 0)}>
              <div
                className={
                  tier.highlighted
                    ? "motion-card relative rounded-2xl border border-primary bg-card p-8 shadow-2xl [--motion-card-shadow:0_22px_80px_-30px_rgba(59,130,246,0.65)]"
                    : "motion-card rounded-2xl border border-border bg-card p-8 hover:border-primary/40 [--motion-card-shadow:0_18px_60px_-25px_rgba(59,130,246,0.55)]"
                }
              >
                {tier.highlighted ? (
                  <div
                    className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-primary/20 blur-2xl"
                    aria-hidden="true"
                  />
                ) : null}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {tier.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {tier.tagline}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="font-display text-3xl font-semibold tracking-tight text-foreground">
                    {tier.price}
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-border bg-background">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                      </span>
                      <span className="text-sm leading-relaxed text-muted">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href="#contact"
                    className={
                      tier.highlighted
                        ? "motion-button inline-flex h-11 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        : "motion-button inline-flex h-11 w-full items-center justify-center rounded-full border border-border bg-transparent px-6 text-sm font-semibold text-foreground transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    }
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
