export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools";
}

export const skills: Skill[] = [
  { name: "Angular", icon: "triangle", category: "frontend" },
  { name: "React", icon: "atom", category: "frontend" },
  { name: "StencilJS", icon: "stenciljs", category: "frontend" },
  { name: "TypeScript", icon: "code-2", category: "frontend" },
  { name: "Tailwind CSS", icon: "palette", category: "frontend" },
  { name: "NestJS", icon: "hexagon", category: "backend" },
  { name: "Git", icon: "git-branch", category: "tools" },
  { name: "Jira", icon: "jira", category: "tools" },
];
