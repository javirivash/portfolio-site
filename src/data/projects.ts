export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  context: string;
  approach: string;
  outcome: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "datarobot-platform",
    title: "DataRobot AI Platform",
    description:
      "Production-scale frontend features for an enterprise AI/ML platform.",
    tags: ["React", "TypeScript", "Cypress", "Design Systems"],
    context:
      "DataRobot is an enterprise AI platform used by Fortune 500 companies. The frontend serves a complex, monolithic application with cloud and on-premises deployments.",
    approach:
      "Led 5 feature projects end-to-end — from technical spec writing through testing and stakeholder sign-off. Managed feature lifecycle using feature flags for controlled rollout. Refactored legacy components during a multi-year UI overhaul.",
    outcome:
      "Shipped features used by thousands of enterprise customers. Contributed to the Design System library and improved test coverage by migrating 20+ test suites from Jasmine to Jest.",
    stack: ["React", "TypeScript", "JavaScript", "Cypress", "Jest", "Less"],
  },
  {
    id: "youtubit",
    title: "YouTubit",
    description:
      "Full-featured video app built with the YouTube API during a React bootcamp at Wizeline.",
    tags: ["React", "Firebase", "Styled Components"],
    context:
      "A capstone project for the Wizeline React Bootcamp, building a YouTube-like video application from scratch with authentication and personalization features.",
    approach:
      "Implemented video search, playback, and user authentication with persistent login via React Context. Designed public/private route architecture and a favorites system with user-specific data stored in Firebase.",
    outcome:
      "Delivered a fully functional video app with search, playback, auth, favorites, and responsive design.",
    stack: [
      "React",
      "React Router",
      "Styled Components",
      "Firebase",
      "YouTube API",
    ],
    githubUrl: "https://github.com/javirivash", // TODO: Replace with actual repo URL
  },
  {
    id: "portfolio-site",
    title: "Portfolio Site",
    description:
      "This site — an editorial-style portfolio built with Next.js, Tailwind, and Framer Motion.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    context:
      "A personal portfolio designed to showcase frontend engineering work in a magazine-inspired editorial format, with cursor-driven interactions and smooth scroll animations.",
    approach:
      "Built with Next.js App Router and Tailwind CSS for styling. Used Framer Motion for scroll-triggered animations and interactive cursor parallax in the hero section. Designed mockups in Google Stitch before implementation.",
    outcome:
      "A polished, accessible, and performant single-page portfolio with a distinctive editorial aesthetic.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/javirivash", // TODO: Replace with actual repo URL
  },
];
