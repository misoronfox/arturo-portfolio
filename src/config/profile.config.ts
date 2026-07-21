export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "twitter" | "resume";
}

export interface Principle {
  code: string;
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

/**
 * Portfolio profile configuration
 */

export const profile = {
  name: "Arturo Eduardo Palomera Stevens",

  role: "Software Engineer",

  location: "Santiago, Chile · Remote",

  availability: {
    open: true,
    label: "Available for work",
  },

  githubUsername: "misoronfox",

  tagline:
    "I build thoughtful software that blends engineering, design, and craftsmanship—creating products that feel as polished as they are functional.",

  summary:
    "I'm a Software Developer from Chile focused on building modern full-stack web applications with React, TypeScript, Python, and AI integrations. I enjoy solving complex problems, designing clean user experiences, and creating software that remains maintainable as it grows. Outside software, I'm also a silversmith, and many of the same principles of precision, craftsmanship, and attention to detail shape the way I write code.",

  email: "arturoedo@gmail.com",

  resumeUrl: "/resume.pdf",

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/misoronfox",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/arturopalomera",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:arturoedo@gmail.com",
      icon: "mail",
    },
  ] as SocialLink[],

  principles: [
    {
      code: "01",
      title: "Craftsmanship",
      description:
        "Whether I'm writing software or making jewelry, I believe quality comes from patience, precision, and attention to the smallest details.",
    },
    {
      code: "02",
      title: "Scalable Thinking",
      description:
        "I design software that can evolve over time instead of solving only today's problem.",
    },
    {
      code: "03",
      title: "User Experience",
      description:
        "Technology should feel intuitive. Every interaction should be fast, understandable, and purposeful.",
    },
    {
      code: "04",
      title: "Continuous Learning",
      description:
        "I constantly expand my skills through personal projects, new technologies, and challenging ideas.",
    },
  ] as Principle[],

  stats: [
    {
      label: "Years programming",
      value: 4,
      suffix: "+",
    },
    {
      label: "Personal projects",
      value: 15,
      suffix: "+",
    },
  ] as Stat[],

  skills: {
    Frontend: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "HTML5",
      "CSS3",
    ],

    Backend: [
      "Python",
      "Flask",
      "REST APIs",
      "SQLAlchemy",
      "JWT Authentication",
    ],

    Databases: [
      "MongoDB",
      "SQLite",
      "Oracle SQL",
      "MySQL",
    ],

    DevOps: [
      "Docker",
      "Linux",
      "Git",
      "GitHub",
      "Oracle Cloud",
      "Nginx",
      "SSH",
    ],

    AI: [
      "OpenAI API",
      "Prompt Engineering",
      "AI Integrations",
    ],

    Other: [
      "Java",
      "C#",
      "C++",
      "Unreal Engine 5",
    ],
  } as Record<string, string[]>,

  projects: {
    maxRepos: 6,

    excludeForks: true,

    featured: [
      "AdventurersHub",
      "mi-portafolio",
      "Proyecto-Economia",
      "Curriculum-Optimizer",
    ] as string[],

    exclude: [] as string[],
  },
} as const;

export type Profile = typeof profile;