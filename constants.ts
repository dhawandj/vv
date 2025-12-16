import { Service, Project, Testimonial } from './types';

export const COMPANY_NAME = "Avinya Ventures";
export const COMPANY_PHONE = "(555) 123-4567";
export const COMPANY_EMAIL = "contact@avinyaventures.com";
export const COMPANY_ADDRESS = "123 Construction Ave, Builder City, ST 90210";
// Using a dummy US number format for the WhatsApp link. 
// In production, replace this with your actual WhatsApp business number including country code (e.g., 15551234567).
export const WHATSAPP_NUMBER = "15551234567"; 

export const COMPANY_LOGO = "https://raw.githubusercontent.com/dhawandj/cec/is/vv1.png";

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Residential Construction',
    description: 'Custom homes built from the ground up with precision and care. We turn your dream home into reality.',
    icon: 'Home'
  },
  {
    id: '2',
    title: 'Commercial Renovation',
    description: 'Modernize your business space to increase productivity and appeal. Full-service office and retail fit-outs.',
    icon: 'Briefcase'
  },
  {
    id: '3',
    title: 'Industrial Projects',
    description: 'Heavy-duty construction for warehouses, factories, and industrial facilities requiring specialized engineering.',
    icon: 'Factory'
  },
  {
    id: '4',
    title: 'Project Management',
    description: 'End-to-end project oversight ensuring timeline adherence, budget management, and quality control.',
    icon: 'ClipboardCheck'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Manoranjan Residence',
    category: 'Luxury Villa',
    imageUrl: 'https://www.buildahome.in/images/landing-page/manoranjan-dream-home.webp',
    description: 'A contemporary masterpiece featuring open-plan living and sustainable design elements.'
  },
  {
    id: '2',
    title: 'Jainendra Estate',
    category: 'Modern Living',
    imageUrl: 'https://www.buildahome.in/images/landing-page/jainendra-dream-home.webp',
    description: 'Elegant architectural design maximizing natural light and spatial efficiency.'
  },
  {
    id: '3',
    title: 'Shwetha Madan Home',
    category: 'Residential',
    imageUrl: 'https://www.buildahome.in/images/landing-page/shwetha-madan-dream-home.webp',
    description: 'A perfect blend of traditional aesthetics and modern functional requirements.'
  },
  {
    id: '4',
    title: 'Chethan Heights',
    category: 'Structural',
    imageUrl: 'https://www.buildahome.in/images/landing-page/chethan-dream-home.webp',
    description: 'Multi-level residential project showcasing advanced structural engineering.'
  },
  {
    id: '5',
    title: 'Nikhil Kulkarni Villa',
    category: 'Premium Build',
    imageUrl: 'https://www.buildahome.in/images/landing-page/nikhil-kulkarni-dream-home.webp',
    description: 'High-end finishing and custom interior layouts for a bespoke living experience.'
  },
  {
    id: '6',
    title: 'Arvind Residence',
    category: 'Eco-Home',
    imageUrl: 'https://www.buildahome.in/images/landing-page/arvind-dream-home.webp',
    description: 'Sustainable construction utilizing eco-friendly materials and energy-efficient systems.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Homeowner',
    content: 'Avinya Ventures transformed our outdated kitchen into a culinary masterpiece. The team was professional, clean, and on time.',
    avatarUrl: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'CEO, TechFlow',
    content: 'Our office renovation was complex, but they handled every challenge with expertise. Highly recommended for commercial work.',
    avatarUrl: 'https://picsum.photos/100/100?random=11'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Property Developer',
    content: 'Reliable, honest, and skilled. I have used Avinya Ventures for three multi-family projects and they never disappoint.',
    avatarUrl: 'https://picsum.photos/100/100?random=12'
  }
];