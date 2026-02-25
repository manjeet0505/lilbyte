export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  photoFile?: string;
  intro: string;
  skills: string[];
  linkedin?: string;
  github?: string;
  email?: string;
  bio: string;
  tools: string[];
  funLine: string;
  slug: string;
  highlights: string[];
  whatTheyBuild: string[];
};

function svgAvatarDataUri({
  name,
  role,
}: {
  name: string;
  role: string;
}) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  const safeInitials = (initials || "LB").replace(/[^A-Z]/g, "");
  const safeRole = role.replace(/[<>]/g, "");

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0B1220"/>
      <stop offset="0.55" stop-color="#0F1B37"/>
      <stop offset="1" stop-color="#060A14"/>
    </linearGradient>
    <radialGradient id="glowA" cx="30%" cy="25%" r="65%">
      <stop offset="0" stop-color="#3B82F6" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#3B82F6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowB" cx="78%" cy="35%" r="70%">
      <stop offset="0" stop-color="#22D3EE" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#22D3EE" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg)"/>
  <rect width="1200" height="800" fill="url(#glowA)"/>
  <rect width="1200" height="800" fill="url(#glowB)"/>
  <g opacity="0.35">
    <path d="M80 610 C 260 520, 380 520, 560 610 S 860 700, 1120 610" fill="none" stroke="rgba(148,163,184,0.28)" stroke-width="1"/>
    <path d="M120 520 C 280 450, 420 440, 620 520 S 900 600, 1100 520" fill="none" stroke="rgba(148,163,184,0.22)" stroke-width="1"/>
  </g>
  <g>
    <circle cx="220" cy="230" r="140" fill="rgba(59,130,246,0.12)"/>
    <circle cx="980" cy="210" r="170" fill="rgba(34,211,238,0.10)"/>
    <circle cx="860" cy="650" r="230" fill="rgba(59,130,246,0.08)"/>
  </g>
  <g transform="translate(110,140)">
    <rect x="0" y="0" width="430" height="520" rx="36" fill="rgba(255,255,255,0.04)" stroke="rgba(148,163,184,0.14)"/>
    <text x="60" y="200" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial" font-weight="700" font-size="120" fill="rgba(226,232,240,0.92)">${safeInitials}</text>
    <text x="60" y="260" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial" font-weight="600" font-size="34" fill="rgba(148,163,184,0.92)">${safeRole}</text>
  </g>
</svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Manjeet Kumar Mishra",
    role: "Founder & Full Stack / AI Engineer",
    photo: svgAvatarDataUri({
      name: "Manjeet Kumar Mishra",
      role: "Full Stack / AI",
    }),
    photoFile: "/team/manjeet.jpg",
    intro:
      "Leads product engineering and builds AI-powered systems, from SaaS platforms to automation tools.",
    skills: [
      "Full Stack",
      "React",
      "Node",
      "AI Integration",
      "SaaS Architecture",
      "System Design",
    ],
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
    email: "lilbyteorg@gmail.com",
    bio: "Manjeet leads product engineering at LilByte Tech Studio. He specializes in full-stack web development and building AI-powered systems including automation tools, SaaS platforms, and scalable digital products. He focuses on turning ideas into production-ready solutions with strong architecture and performance.",
    whatTheyBuild: [
      "End-to-end SaaS products and dashboards",
      "AI-assisted workflows and automation layers",
      "Foundational architecture for new product lines",
    ],
    tools: ["Next.js", "React", "Node.js", "OpenAI", "AWS", "Docker"],
    highlights: [
      "Combines product thinking with strong engineering fundamentals.",
      "Ships from prototype to production with observability and stability.",
      "Designs architectures that stay maintainable as products grow.",
    ],
    funLine: "Loves turning messy product ideas into clean, shippable systems.",
    slug: "manjeet-kumar-mishra",
  },
  {
    name: "Muskan Chauhan",
    role: "Co‑Founder | Web Developer & Data Analyst",
    photo: svgAvatarDataUri({
      name: "Muskan Chauhan",
      role: "Web & Data",
    }),
    photoFile: "/team/muskan.jpg",
    intro:
      "Bridges web development, analytics, and client communication for data-informed products.",
    skills: [
      "Web Development",
      "Data Analytics",
      "Communication",
      "UX Thinking",
      "Client Strategy",
    ],
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
    email: "team@lilbyte.tech",
    bio: "Muskan works across product development and analytics at LilByte. She combines strong web development skills with data analysis and user insight generation. She also plays a key role in communication, client interaction, and shaping product direction with a user-focused mindset.",
    whatTheyBuild: [
      "Web experiences informed by analytics and user signals",
      "Reports and views that help founders understand product usage",
      "Client-facing deliverables that keep projects aligned and moving",
    ],
    tools: ["React", "TypeScript", "SQL", "Analytics Tools"],
    highlights: [
      "Connects qualitative feedback with quantitative product data.",
      "Keeps stakeholders aligned through clear communication and reporting.",
      "Helps prioritise roadmaps based on real usage and impact.",
    ],
    funLine: "Enjoys turning raw data into clear, human-friendly stories.",
    slug: "muskan-chauhan",
  },
  {
    name: "Mayank Yadav",
    role: "Data Analytics Lead",
    photo: svgAvatarDataUri({
      name: "Mayank Yadav",
      role: "Data Analytics",
    }),
    photoFile: "/team/mayank.jpg",
    intro:
      "Leads analytics direction and builds data views that support AI and product decisions.",
    skills: [
      "Data Analytics",
      "Dashboards",
      "Data Processing",
      "Business Insights",
      "Visualization",
    ],
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
    email: "data@lilbyte.tech",
    bio: "Mayank leads the analytics direction at LilByte. He focuses on extracting meaningful insights from data, building dashboards, and supporting AI systems with structured datasets and analysis pipelines that drive smarter product decisions.",
    whatTheyBuild: [
      "Product and business dashboards for founders and teams",
      "Data pipelines that clean and prepare information for AI",
      "Analytics layers that connect metrics to real decisions",
    ],
    tools: ["SQL", "Python", "BI Tools", "Dashboards"],
    highlights: [
      "Designs data models that stay understandable and reliable.",
      "Translates raw metrics into clear narratives for stakeholders.",
      "Works closely with engineering to keep analytics in sync with product.",
    ],
    funLine: "Believes every strong product has a strong analytics backbone.",
    slug: "mayank-yadav",
  },
  {
    name: "Manisha",
    role: "App Developer & Cloud Security Specialist",
    photo: svgAvatarDataUri({
      name: "Manisha",
      role: "Apps & Cloud",
    }),
    photoFile: "/team/manisha.jpg",
    intro:
      "Builds applications and secures cloud environments for reliable product deployments.",
    skills: [
      "App Development",
      "Cloud Security",
      "Data Science",
      "Deployment",
      "Backend Systems",
    ],
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
    email: "engineering@lilbyte.tech",
    bio: "Manisha works on mobile and cloud-based systems at LilByte. She specializes in application development, secure cloud deployment, and integrating data science workflows into real products to ensure scalability and reliability.",
    whatTheyBuild: [
      "Secure application backends and services",
      "Cloud infrastructure that is hardened and monitored",
      "Pipelines that bring data science work into production",
    ],
    tools: ["Cloud Platforms", "Node.js", "Containers", "Security Tooling"],
    highlights: [
      "Designs app architectures with security and performance in mind.",
      "Implements best practices for secrets, access, and monitoring.",
      "Helps teams ship faster without compromising on resilience.",
    ],
    funLine: "Thinks good security should feel invisible to users.",
    slug: "manisha",
  },
];

export function getTeamMemberBySlug(slug: string) {
  return teamMembers.find((m) => m.slug === slug);
}

