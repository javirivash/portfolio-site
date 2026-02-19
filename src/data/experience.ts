export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export const experience: Experience[] = [
  {
    company: "DataRobot",
    role: "Frontend Engineer II",
    period: "2024 – 2025",
    description:
      "Built and shipped production-scale UI features using React, JS and TS on a monolithic AI platform. Owned 5 feature projects from planning to release as Project Lead.",
  },
  {
    company: "DataRobot",
    role: "Frontend Engineer",
    period: "2023 – 2024",
    description:
      "Built Cypress E2E tests, refactored legacy components during a multi-year UI overhaul, and contributed to the Design System library.",
  },
  {
    company: "DataRobot",
    role: "Associate Frontend Engineer",
    period: "2021 – 2023",
    description:
      "Migrated 20+ test suites from Jasmine to Jest. Balanced critical fixes and bug backlog alongside feature development.",
  },
  {
    company: "Flex",
    role: "Program Administrator",
    period: "2019 – 2020",
    description:
      "Coordinated cross-functional teams in manufacturing operations to deliver objectives under tight deadlines.",
  },
];
