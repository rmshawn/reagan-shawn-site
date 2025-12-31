export interface ExperienceItem {
  id: string;
  company: string;
  role: string | string[];
  duration: string;
  description: string;
  highlights: string[];
  logoInitials?: string;
  image?: string;
}

export interface SkillItem {
  id: string;
  category: 'Design' | 'Engineering' | 'AI Strategy';
  name: string;
  description: string;
}

export interface EssayPlaceholder {
  id: string;
  title: string;
  date: string;
  summary: string;
}