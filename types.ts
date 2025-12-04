import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  items: ServiceItem[];
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  sector: string;
  result: string;
  description: string;
  image: string;
  category: string;
}

export interface BlogPost {
  id: string;
  category: string;
  date: string;
  title: string;
  image: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}