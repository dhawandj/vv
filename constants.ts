import { Service, Project, Testimonial } from './types';

export const COMPANY_NAME = "Avinya Ventures";
export const COMPANY_PHONE = "9986633447";
export const COMPANY_EMAIL = "contact@avinyaventures.com";
export const COMPANY_ADDRESS = "135, M.K.S Layout, Doddakallasandra, J. P. Nagar, Bengaluru, Karnataka 560062";
// Using a dummy US number format for the WhatsApp link. 
// In production, replace this with your actual WhatsApp business number including country code (e.g., 15551234567).
export const WHATSAPP_NUMBER = "9986633447"; 

export const COMPANY_LOGO = "https://raw.githubusercontent.com/dhawandj/cec/is/vv1.png";

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Project Management',
    description:
      'Projects are planned with clear structure and carried out step by step. We ensure design intent, execution quality, and cost decisions remain balanced throughout the process.',
    points: [
      'Structured planning and scheduling',
      'Proper coordination between design and execution',
      'Cost-aware and practical decision making'
    ],
    icon: 'ClipboardCheck'
  },
  {
    id: '2',
    title: 'Realty',
    description:
      'Guidance for buying and selling sites and residential homes. Property details are carefully reviewed before any recommendation is made to the client.',
    points: [
      'Buying and selling of sites',
      'Buying and selling of residential homes',
      'Document and detail verification before guidance'
    ],
    icon: 'Landmark'
  },
  {
    id: '3',
    title: 'Residential',
    description:
      'Homes are shaped through thoughtful planning and disciplined execution, focusing on comfort, aesthetics, and long-term living quality.',
    points: [
      'Practical and well-planned layouts',
      'Controlled stage-wise execution of work',
      'Sustainable and premium quality finishes'
    ],
    icon: 'Home'
  },
  {
    id: '4',
    title: 'Commercial',
    description:
      'Commercial spaces are developed with attention to functionality, efficient planning, and smooth execution, keeping both usability and costs in control.',
    points: [
      'Office and retail space development',
      'Efficient use of space and resources',
      'Economical and practical execution approach'
    ],
    icon: 'Briefcase'
  },
  {
    id: '5',
    title: 'Industrial & Sports',
    description:
      'Facilities are delivered with a focus on strength, safety, and performance, where durability and cost efficiency are equally important.',
    points: [
      'Industrial buildings and utility facilities',
      'Indoor and outdoor sports facilities',
      'Badminton courts and related infrastructure'
    ],
    icon: 'Factory'
  }
]

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Manoranjan Home',
    category: 'Luxury Villa',
    imageUrl: 'https://www.buildahome.in/images/landing-page/manoranjan-dream-home.webp',
    description: 'A contemporary masterpiece featuring open-plan living and sustainable design elements.'
  },
  {
    id: '2',
    title: 'Jainendra Residence',
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
    title: 'Chethan residence',
    category: 'Structural',
    imageUrl: 'https://www.buildahome.in/images/landing-page/chethan-dream-home.webp',
    description: 'Multi-level residential project showcasing advanced structural engineering.'
  },
  {
    id: '5',
    title: 'Nikhil Kulkarni Home',
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
    name: 'Ramesh Iyer',
    role: 'Homeowner',
    content:
      'Avinya Ventures did an excellent job renovating our kitchen. The planning was clear, the team was well-organised, and the work was completed on time without any hassle.',
    avatarUrl: 'https://picsum.photos/100/100?random=21'
  },
  {
    id: '2',
    name: 'Anita Sharma',
    role: 'Founder, TechFlow Solutions',
    content:
      'Our office renovation required careful coordination, and Avinya Ventures handled everything professionally. The execution quality and cost management were well balanced.',
    avatarUrl: 'https://picsum.photos/100/100?random=22'
  },
  {
    id: '3',
    name: 'Vikram Rao',
    role: 'Property Developer',
    content:
      'I have worked with Avinya Ventures on multiple residential projects. Their approach is practical, transparent, and reliable from planning to final handover.',
    avatarUrl: 'https://picsum.photos/100/100?random=23'
  }
];
