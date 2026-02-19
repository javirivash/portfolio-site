export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS/Less"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "React Router", "React Query"],
  },
  {
    category: "Testing",
    items: ["Cypress", "Jest", "Testing Library"],
  },
  {
    category: "Tools",
    items: ["Git", "Figma", "Jira", "Firebase", "CI/CD", "REST APIs"],
  },
];
