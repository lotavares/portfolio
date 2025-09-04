export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "web" | "mobile" | "tools";
  hasDemo: boolean;
  demoComponent?: string;
  links: {
    demo: string;
    github: string;
  };
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export type Locale = "en" | "fr";

export interface NavItem {
  label: string;
  id: string;
  href?: string;
}
