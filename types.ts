export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export enum Page {
  HOME = 'HOME',
  SERVICES = 'SERVICES',
  PROJECTS = 'PROJECTS',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
  PLANNING = 'PLANNING'
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}