export type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export type SkillGroup = {
  heading: string;
  items: string[];
};

export type RepoLink = {
  label: string;
  url: string;
};

export type Project = {
  name: string;
  stack: string;
  summary: string;
  highlights: string[];
  repoLinks: RepoLink[];
};

export type MilitaryRole = {
  period: string;
  title: string;
  highlights: string[];
};

export type SocialLink = {
  label: string;
  url: string;
  iconUrl: string;
};

export type EducationEntry = {
  campus: string;
  program: string;
  detail: string;
  honors?: string;
};
