/**
 * Demo products / portfolio – mirrors the website
 */

export type DemoProduct = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string; // Ionicons name
  color: string;
};

export const demoProducts: DemoProduct[] = [
  {
    id: 's3-dashboard',
    title: 'AI Powered S3 Dashboard',
    description:
      'Student success platform with resume analysis, job tracking, and AI-powered insights for career development.',
    tags: ['AI', 'Dashboard', 'Analytics'],
    icon: 'school-outline',
    color: '#3B82F6',
  },
  {
    id: 'senior-junior',
    title: 'Senior Junior Connect',
    description:
      'AI-driven mentorship platform with intelligent matching, real-time chat, and structured guidance pathways.',
    tags: ['AI', 'Social', 'Mentorship'],
    icon: 'people-outline',
    color: '#22D3EE',
  },
  {
    id: 'resume-analyzer',
    title: 'AI Resume Analyzer',
    description:
      'Smart candidate scoring system with detailed resume insights, skill matching, and improvement suggestions.',
    tags: ['AI', 'HR Tech', 'Automation'],
    icon: 'document-text-outline',
    color: '#38BDF8',
  },
  {
    id: 'startup-analytics',
    title: 'Startup Analytics Dashboard',
    description:
      'Real-time business metrics and performance insights dashboard for data-driven decision making.',
    tags: ['Analytics', 'Dashboard', 'SaaS'],
    icon: 'trending-up-outline',
    color: '#22C55E',
  },
];
