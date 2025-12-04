import { LucideIcon } from 'lucide-react';

export interface I18nString {
  tr: string;
  en: string;
}

export interface NavItem {
  id: string;
  label: I18nString; // Changed to support i18n
  href: string;
  type: 'link' | 'dropdown' | 'button';
  children?: NavItem[];
}

export interface ContactConfig {
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  address: string;
  mapLink: string;
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
  challenge: string;
  solution: string;
  result: string;
  description: string;
  image: string;
  category: string;
}

export interface BlogPost {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  image: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TrustLogo {
  id: string;
  name: string;
  sector: string; // Added sector for tooltip/aria
  alt: string;
}

export interface HeroPillar {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  icon: LucideIcon;
}

export interface HeroContent {
  badge: string;
  title: {
    line1: string;
    highlight: string;
    line2: string;
  };
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  pillars: HeroPillar[];
}