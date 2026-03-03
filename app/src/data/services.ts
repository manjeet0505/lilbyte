/**
 * Services / Modules data – mirrors the website
 */

export type ServiceModule = {
  id: string;
  title: string;
  description: string;
  icon: string; // Ionicons name
  features: string[];
};

export const services: ServiceModule[] = [
  {
    id: 'websites',
    title: 'Startup Websites',
    description: 'Fast, scalable, conversion-focused websites built for modern startups.',
    icon: 'globe-outline',
    features: [
      'Responsive & mobile-first design',
      'SEO & performance optimized',
      'CMS integration ready',
      'Analytics & tracking built-in',
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI Automation Systems',
    description: 'Chatbots, AI tools, and workflow automation that save time and scale operations.',
    icon: 'hardware-chip-outline',
    features: [
      'Custom AI chatbots',
      'Workflow automation',
      'Natural language processing',
      'Smart data extraction',
    ],
  },
  {
    id: 'dashboards',
    title: 'Dashboards & SaaS',
    description: 'Custom admin panels, analytics dashboards, and internal tools for your team.',
    icon: 'bar-chart-outline',
    features: [
      'Real-time data visualization',
      'Role-based access control',
      'Custom reporting',
      'API integrations',
    ],
  },
  {
    id: 'mobile-web-apps',
    title: 'Mobile & Web Apps',
    description: 'MVP builds for founders launching their first products to market.',
    icon: 'phone-portrait-outline',
    features: [
      'Cross-platform (iOS & Android)',
      'Rapid MVP development',
      'User authentication',
      'Push notifications',
    ],
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    description: 'Custom AI systems aligned with your business goals and data.',
    icon: 'sparkles-outline',
    features: [
      'OpenAI / LLM integration',
      'Custom model fine-tuning',
      'Recommendation engines',
      'Intelligent search',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    description: 'Secure, scalable cloud infrastructure architecture and deployment.',
    icon: 'cloud-outline',
    features: [
      'AWS / GCP / Azure setup',
      'CI/CD pipelines',
      'Container orchestration',
      'Security hardening',
    ],
  },
];
