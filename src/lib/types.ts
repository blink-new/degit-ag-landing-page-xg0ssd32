// Define types for our components

export interface SocialLink {
  platform: 'twitter' | 'mastodon' | 'bluesky' | 'threads' | 'github' | 'linkedin' | 'xing';
  url: string;
}

export interface Skill {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export interface TeamMember {
  id: number;
  nameKey: string;
  positionKey: string;
  descriptionKey: string;
  bioKey: string;
  imageSrc: string;
  skills: Skill[];
  socialLinks?: SocialLink[];
}

export interface Service {
  id: number;
  titleKey: string;
  teaserKey: string;
  descriptionKey: string;
  imageSrc: string;
}

export interface AboutPoint {
  id: number;
  titleKey: string;
  textKey: string;
  icon: string;
}

// Section IDs for navigation and highlighting
export enum SectionId {
  Hero = 'hero',
  About = 'about',
  Services = 'services',
  Team = 'team',
  Contact = 'contact'
}

// Theme types
export type Theme = 'dark' | 'light' | 'system';