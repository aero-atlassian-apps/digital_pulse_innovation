export type Language = 'en' | 'fr' | 'es' | 'ar';

export interface NavItem {
  label: string;
  path: string;
}

export interface Client {
  name: string;
  logo: string; // URL
}

export interface CaseStudy {
  title: string;
  subtitle: string;
  description: string;
  metricValue: string;
  metricLabel: string;
  tags: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  specialties: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}