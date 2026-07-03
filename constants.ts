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
    title: '3D/Planning',
    description:
      'We provide comprehensive 3D modeling and planning services to visualize and strategize your construction projects effectively, ensuring clarity and precision in execution.',
    points: [
      '3D modeling for accurate visualization',
      'Detailed planning for efficient project execution',
      'Strategic guidance for construction management'
    ],
    icon: 'Cube'
  },
  {
    id: '2',
    title: 'Project Management',
    description:
      'Our project management services ensure that your construction projects are executed smoothly, on time, and within budget, with a focus on quality and client satisfaction.',
    points: [
      'Comprehensive project oversight and coordination',
      'Budget and timeline management for optimal results',
      'Quality assurance and risk mitigation throughout the project lifecycle'
    ],
    icon: 'ClipboardList'
  },
  {
    id: '3',
    title: 'Turn key Project',
    description:
      'We offer turnkey project solutions, handling every aspect of construction from design to completion, delivering a ready-to-use space that meets your specifications and expectations.',
    points: [
      'End-to-end project execution from design to delivery',
      'Customized solutions tailored to client needs',
      'Seamless integration of design, construction, and finishing for a complete solution'
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
    description: 'A contemporary masterpiece featuring open-plan living and sustainable design elements.',
    details: [
      '4BHK luxury residence with a sculpted facade and premium material palette.',
      'Integrated smart lighting, ventilated courtyards, and energy-efficient systems.',
      'Delivered with detailed planning, execution coordination, and premium finishing controls.'
    ]
  },
  {
    id: '2',
    title: 'Jainendra Residence',
    category: 'Modern Living',
    imageUrl: 'https://www.buildahome.in/images/landing-page/jainendra-dream-home.webp',
    description: 'Elegant architectural design maximizing natural light and spatial efficiency.',
    details: [
      'Contemporary elevation with large glazing and a strong indoor-outdoor flow.',
      'Efficient layouts tailored for family comfort and easy circulation.',
      'Focused on durable finishes and clear, practical construction sequencing.'
    ]
  },
  {
    id: '3',
    title: 'Shwetha Madan Home',
    category: 'Residential',
    imageUrl: 'https://www.buildahome.in/images/landing-page/shwetha-madan-dream-home.webp',
    description: 'A perfect blend of traditional aesthetics and modern functional requirements.',
    details: [
      'Balanced design language that combines timeless character with modern utility.',
      'Thoughtful room planning and premium detailing for daily living comfort.',
      'Executed with careful site coordination and quality-controlled delivery.'
    ]
  },
  {
    id: '4',
    title: 'Chethan residence',
    category: 'Structural',
    imageUrl: 'https://www.buildahome.in/images/landing-page/chethan-dream-home.webp',
    description: 'Multi-level residential project showcasing advanced structural engineering.',
    details: [
      'Complex multi-level planning with strong structural clarity and safe execution.',
      'Carefully calculated load paths and durable material selection.',
      'Designed to support both long-term performance and visual elegance.'
    ]
  },
  {
    id: '5',
    title: 'Nikhil Kulkarni Home',
    category: 'Premium Build',
    imageUrl: 'https://www.buildahome.in/images/landing-page/nikhil-kulkarni-dream-home.webp',
    description: 'High-end finishing and custom interior layouts for a bespoke living experience.',
    details: [
      'Luxury-focused interior planning with bespoke detailing and refined finishes.',
      'Smart space utilization for privacy, comfort, and visual balance.',
      'Delivered through meticulous project management and finish-level supervision.'
    ]
  },
  {
    id: '6',
    title: 'Arvind Residence',
    category: 'Eco-Home',
    imageUrl: 'https://www.buildahome.in/images/landing-page/arvind-dream-home.webp',
    description: 'Sustainable construction utilizing eco-friendly materials and energy-efficient systems.',
    details: [
      'Eco-conscious material selection and climate-responsive planning.',
      'Energy-efficient systems designed to reduce operating impact.',
      'Integrated sustainability principles without compromising architectural character.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Selling / buying ',
    role: 'Homeowner',
    content:
      'Avinya Ventures provided exceptional guidance during our property transaction. Their attention to detail and market knowledge ensured a smooth process, and we felt confident in their recommendations.',
    avatarUrl: 'https://picsum.photos/100/100?random=21'
  },
  {
    id: '2',
    name: 'Industrial/Sports Complex',
    role: 'Founder, TechFlow Solutions',
    content:
      'We engaged Avinya Ventures for our industrial complex project, and their expertise in project management was evident throughout. They coordinated multiple teams seamlessly, ensuring that the project was completed on time and within budget.',
    avatarUrl: 'https://picsum.photos/100/100?random=22'
  },
  {
    id: '3',
    name: 'Guidance',
    role: 'Property Developer',
    content:
      'Avinya Ventures provided invaluable guidance on our property development project. Their insights into zoning regulations and construction best practices helped us avoid potential pitfalls and optimize our design for both functionality and aesthetics.',
    avatarUrl: 'https://picsum.photos/100/100?random=23'
  }
];
