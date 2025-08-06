import { BusinessCategory } from '@/types';

export const businessCategories: BusinessCategory[] = [
  {
    id: 'it-companies',
    title: 'IT Companies',
    description: 'Smart polo shirts and business attire with embedded contact info, GitHub profiles, and portfolio links.',
    icon: 'Users',
    href: '/it-companies',
    features: [
      'Employee profiles',
      'Company info',
      'Project showcases'
    ]
  },
  {
    id: 'small-businesses',
    title: 'Small Businesses',
    description: 'Cost-effective uniforms with no minimums. Perfect for startups and growing businesses.',
    icon: 'ShoppingBag',
    href: '/small-businesses',
    features: [
      'No minimum orders',
      'Budget-friendly',
      'Professional appearance'
    ]
  },
  {
    id: 'events',
    title: 'Events',
    description: 'Staff apparel that enhances networking with instant contact sharing and event information.',
    icon: 'Calendar',
    href: '/events',
    features: [
      'Event schedules',
      'Speaker info',
      'Networking tools'
    ]
  },
  {
    id: 'restaurants',
    title: 'Restaurants',
    description: 'Chef coats and server uniforms linking to menus, specials, and customer feedback forms.',
    icon: 'ChefHat',
    href: '/restaurants',
    features: [
      'Digital menus',
      'Special offers',
      'Customer reviews'
    ]
  },
  {
    id: 'fitness-professionals',
    title: 'Fitness Professionals',
    description: 'Workout gear that connects clients to training programs, nutrition guides, and booking systems.',
    icon: 'Dumbbell',
    href: '/fitness-professionals',
    features: [
      'Workout programs',
      'Nutrition guides',
      'Class schedules'
    ]
  },
  {
    id: 'schools',
    title: 'Schools',
    description: 'Educational uniforms and staff attire with links to resources, schedules, and communication tools.',
    icon: 'GraduationCap',
    href: '/schools',
    features: [
      'School resources',
      'Parent communication',
      'Event updates'
    ]
  }
];

export const features = [
  {
    id: 'no-minimum',
    title: 'No Minimum Orders',
    description: 'Start with as few as one piece. Perfect for testing, small teams, or individual needs.',
    icon: 'Package'
  },
  {
    id: 'weartap-tech',
    title: 'WearTap Technology',
    description: 'Revolutionary smart clothing technology that transforms how people connect and interact.',
    icon: 'Zap'
  },
  {
    id: 'personalization',
    title: 'Personalization at Scale',
    description: 'Custom designs and features tailored to your specific business needs and brand identity.',
    icon: 'Palette'
  },
  {
    id: 'fast-delivery',
    title: 'Fast Turnaround',
    description: 'Quick production and delivery times to meet your business deadlines and events.',
    icon: 'Clock'
  }
];