/**
 * FAQ data – mirrors the website
 */

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: '1',
    question: 'What kind of startups do you work with?',
    answer:
      'We work with early-stage to growth-stage startups across industries. Whether you\'re pre-revenue building your first MVP, or a funded startup scaling your product, we adapt our approach to your stage and goals.',
  },
  {
    id: '2',
    question: 'How long does a typical project take?',
    answer:
      'Most projects range from 2-8 weeks depending on complexity. A landing page or MVP can be done in 2-3 weeks, while a full SaaS product typically takes 6-8 weeks. We\'ll give you a clear timeline during our discovery call.',
  },
  {
    id: '3',
    question: 'Do you offer ongoing support after launch?',
    answer:
      'Yes! We offer maintenance and support packages after launch. We can handle bug fixes, feature additions, performance monitoring, and scaling support as your product grows.',
  },
  {
    id: '4',
    question: 'What technologies do you use?',
    answer:
      'We primarily use Next.js, React, Node.js, and TypeScript for web development. For AI, we integrate OpenAI, custom models, and various ML services. Our infrastructure runs on AWS, with Docker for containerization.',
  },
  {
    id: '5',
    question: 'How does pricing work?',
    answer:
      'We offer three tiers: Starter ($800-$1,500), Growth ($2,000-$5,000), and Full SaaS Launch ($6,000+). Payment is 50% upfront and 50% on completion. We provide detailed quotes after understanding your requirements.',
  },
  {
    id: '6',
    question: 'Do I own the source code?',
    answer:
      'Absolutely. You own 100% of the source code, designs, and all deliverables we create for you. We believe in full transparency and ownership for our clients.',
  },
  {
    id: '7',
    question: 'Can you integrate AI into my existing product?',
    answer:
      'Yes! We specialize in AI integration. Whether it\'s adding a chatbot, building recommendation systems, or automating workflows with AI, we can integrate these capabilities into your existing product stack.',
  },
];
