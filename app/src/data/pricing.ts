/**
 * Pricing plans – mirrors the website
 */

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  description: string;
  target: string;
  features: string[];
  highlighted: boolean;
  cta: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Build',
    price: '$800 – $1,500',
    description: 'Perfect for small startups and landing-based products.',
    target: 'Small startups',
    features: [
      'Startup website / landing page',
      'Basic dashboard / admin panel',
      'Deployment & hosting support',
      'Source code ownership',
      '2 rounds of revisions',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    id: 'growth',
    name: 'Growth Product',
    price: '$2,000 – $5,000',
    description: 'For funded startups building real, scalable products.',
    target: 'Funded startups',
    features: [
      'Full product UI & UX',
      'Backend APIs & database',
      'Dashboard system',
      'AI integration options',
      'Priority support',
      '4 rounds of revisions',
    ],
    highlighted: true,
    cta: 'Most Popular',
  },
  {
    id: 'saas',
    name: 'Full SaaS Launch',
    price: '$6,000+',
    description: 'For teams launching complete, scalable SaaS platforms.',
    target: 'Teams & enterprises',
    features: [
      'Complete SaaS architecture',
      'Auth + Database + APIs',
      'Dashboard + automation systems',
      'Payment integration',
      'Launch & scaling support',
      'Dedicated project manager',
    ],
    highlighted: false,
    cta: 'Contact Us',
  },
];
