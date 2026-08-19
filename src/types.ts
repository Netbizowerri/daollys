export interface TravelPackage {
  id: string;
  title: string;
  flag: string;
  subtitle: string;
  description?: string;
  steps?: string[];
  timeline?: string;
  fees?: {
    application?: string;
    processing?: string;
    dependent?: string;
    proofOfFunds?: string;
  };
  contentNeeded?: boolean;
  imageUrl?: string;
  inclusions?: string[];
  howToBook?: string;
  totalCost?: string;
}

export interface SubService {
  slug: string;
  title: string;
  subtitle: string;
  shortCopy: string;
  iconName: string;
  overviewCopy: string;
  imageTheme: string;
  imageUrl: string;
  videoUrl?: string;
  whatsIncluded: string[];
  processSteps: { title: string; description: string }[];
  ctaText: string;
  bookingUrl: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  iconName: string; // Lucide icon name string
  shortCopy: string;
  overviewCopy: string;
  imageTheme: string; // Theme description for visuals
  imageUrl: string; // Fallback stock-image URL or elegant illustration placeholder
  videoUrl?: string; // YouTube video URL for service spotlight
  whatsIncluded: string[];
  processSteps: {
    title: string;
    description: string;
  }[];
  ctaText: string;
  bookingUrl: string;
  bannerUrl?: string;
  subServices?: SubService[];
}

export interface WorkProgramStat {
  icon: string;
  label: string;
  value: string;
}

export interface WorkProgramPosition {
  title: string;
  salary?: string;
  details?: string[];
}

export interface WorkProgramBenefit {
  heading: string;
  items: string[];
}

export interface WorkProgram {
  id: string;
  title: string;
  flag: string;
  badge: string;
  category: string;
  description: string;
  themePoints: string[];
  imageUrl: string;
  stats: WorkProgramStat[];
  positions: WorkProgramPosition[];
  benefits: WorkProgramBenefit[];
  note?: string;
  ctaText: string;
  destination: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
}
