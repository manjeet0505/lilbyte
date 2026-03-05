/**
 * Team member data – mirrors the website's team.ts
 */

/** Base URL for assets hosted on the website */
const SITE_BASE = 'https://lilbyte.vercel.app';

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  photo: string;
  intro: string;
  skills: string[];
  linkedin: string;
  github: string;
  email: string;
  bio: string;
  whatTheyBuild: string[];
  tools: string[];
  highlights: string[];
  slug: string;
  funLine?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Manjeet Kumar Mishra',
    role: 'Founder & CEO',
    initials: 'MK',
    photo: `${SITE_BASE}/team/manjeet.jpg`,
    intro:
      'Manjeet leads product engineering and builds AI-powered systems, from SaaS platforms to automation tools. He specializes in full-stack web development and building AI-powered systems including automation tools, SaaS platforms, and scalable digital products. He focuses on turning ideas into production-ready solutions with strong architecture and performance.',
    skills: ['Full Stack', 'React', 'Node', 'AI Integration', 'SaaS Architecture', 'System Design'],
    linkedin: 'https://www.linkedin.com/in/manjeet-mishra-175705260/',
    github: 'https://github.com',
    email: 'lilbyteorg@gmail.com',
    bio: 'Manjeet leads product engineering at LilByte Tech Studio. He specializes in full-stack web development and building AI-powered systems including automation tools, SaaS platforms, and scalable digital products. He focuses on turning ideas into production-ready solutions with strong architecture and performance.',
    whatTheyBuild: [
      'End-to-end SaaS products and dashboards',
      'AI-assisted workflows and automation layers',
      'Foundational architecture for new product lines',
    ],
    tools: ['Next.js', 'React', 'Node.js', 'OpenAI', 'AWS', 'Docker'],
    highlights: [
      'Combines product thinking with strong engineering fundamentals.',
      'Ships from prototype to production with observability and stability.',
      'Designs architectures that stay maintainable as products grow.',
    ],
    slug: 'manjeet-kumar-mishra',
  },
  {
    name: 'Muskan Chauhan',
    role: 'Co‑Founder | Web Developer & Data Analyst',
    initials: 'MC',
    photo: `${SITE_BASE}/team/muskan.jpg`,
    intro:
      'Bridges web development, analytics, and client communication for data-informed products.',
    skills: ['Web Development', 'Data Analytics', 'Communication', 'UX Thinking', 'Client Strategy'],
    linkedin: 'https://www.linkedin.com/in/muskan-chauhan/',
    github: 'https://github.com',
    email: 'lilbyteorg@gmail.com',
    bio: 'Muskan works across product development and analytics at LilByte. She combines strong web development skills with data analysis and user insight generation. She also plays a key role in communication, client interaction, and shaping product direction with a user-focused mindset.',
    whatTheyBuild: [
      'Web experiences informed by analytics and user signals',
      'Reports and views that help founders understand product usage',
      'Client-facing deliverables that keep projects aligned and moving',
    ],
    tools: ['React', 'TypeScript', 'SQL', 'Analytics Tools'],
    highlights: [
      'Connects qualitative feedback with quantitative product data.',
      'Keeps stakeholders aligned through clear communication and reporting.',
      'Helps prioritise roadmaps based on real usage and impact.',
    ],
    funLine: 'Enjoys turning raw data into clear, human-friendly stories.',
    slug: 'muskan-chauhan',
  },
  {
    name: 'Mayank Yadav',
    role: 'Data Analytics Lead',
    initials: 'MY',
    photo: `${SITE_BASE}/team/mayank.jpg`,
    intro:
      'Leads analytics direction and builds data views that support AI and product decisions.',
    skills: ['Data Analytics', 'Dashboards', 'Data Processing', 'Business Insights', 'Visualization'],
    linkedin: 'https://www.linkedin.com/in/mayankyaduvnsi/',
    github: 'https://github.com',
    email: 'data@lilbyte.tech',
    bio: 'Mayank leads the analytics direction at LilByte. He focuses on extracting meaningful insights from data, building dashboards, and supporting AI systems with structured datasets and analysis pipelines that drive smarter product decisions.',
    whatTheyBuild: [
      'Product and business dashboards for founders and teams',
      'Data pipelines that clean and prepare information for AI',
      'Analytics layers that connect metrics to real decisions',
    ],
    tools: ['SQL', 'Python', 'BI Tools', 'Dashboards'],
    highlights: [
      'Designs data models that stay understandable and reliable.',
      'Translates raw metrics into clear narratives for stakeholders.',
      'Works closely with engineering to keep analytics in sync with product.',
    ],
    funLine: 'Believes every strong product has a strong analytics backbone.',
    slug: 'mayank-yadav',
  },
  {
    name: 'Manisha',
    role: 'App Developer & Cloud Security Specialist',
    initials: 'MA',
    photo: `${SITE_BASE}/team/manisha.jpg`,
    intro:
      'Builds applications and secures cloud environments for reliable product deployments.',
    skills: ['App Development', 'Cloud Security', 'Data Science', 'Deployment', 'Backend Systems'],
    linkedin: 'https://www.linkedin.com/in/manisha-rai-810b022a6',
    github: 'https://github.com',
    email: 'engineering@lilbyte.tech',
    bio: 'Manisha works on mobile and cloud-based systems at LilByte. She specializes in application development, secure cloud deployment, and integrating data science workflows into real products to ensure scalability and reliability.',
    whatTheyBuild: [
      'Secure application backends and services',
      'Cloud infrastructure that is hardened and monitored',
      'Pipelines that bring data science work into production',
    ],
    tools: ['Cloud Platforms', 'Node.js', 'Containers', 'Security Tooling'],
    highlights: [
      'Designs app architectures with security and performance in mind.',
      'Implements best practices for secrets, access, and monitoring.',
      'Helps teams ship faster without compromising on resilience.',
    ],
    funLine: 'Thinks good security should feel invisible to users.',
    slug: 'manisha',
  },
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}
