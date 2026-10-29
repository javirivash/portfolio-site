export interface Project {
  id: string;
  title: string;
  period?: string;
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
    id: "organic-nails",
    title: "Organic Nails",
    period: "Apr 2026 – Present",
    description:
      "Course booking, payments and studio management platform for a nail-training business in Mexico. Designed, built and run solo.",
    tags: ["Next.js", "Supabase", "Stripe", "Full-Stack"],
    context:
      "Organic Nails is a nail-products distributor and training studio in Tepic, Mexico, selling multi-week course packages taught to groups. The studio ran on spreadsheets and WhatsApp threads. I've worked with the client since April 2026 and started development in June 2026 as the sole developer.",
    approach:
      "Online booking and Stripe Checkout (deposits, full and idempotent balance payments) with seat holds and transactional writes on payment confirmation. A full admin panel for catalog, group and session scheduling with capacity limits, in-person sales, roll call, kit hand-off and a signed per-student MXN ledger. Email (Resend) and WhatsApp (Twilio) reminders from scheduled jobs. Core business rules live in Postgres as transactional PL/pgSQL with Row-Level Security across 29 versioned migrations; money is stored as integer centavos and packages are frozen entitlements.",
    outcome:
      "Live in production with 89 accounts, 81 packages sold and 406 course bookings. 353 merged PRs, about 1,090 automated tests (704 unit, 387 database integration), CI and a production smoke suite on every PR, and a nightly schema-drift check. Infrastructure under MXN $1,000/month.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "Vitest",
      "GitHub Actions",
      "Vercel",
    ],
    liveUrl: "https://organicnailstepic.com",
  },
  {
    id: "datarobot-platform",
    title: "DataRobot AI Platform",
    period: "2021 – 2025",
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
    period: "2021",
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
