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

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  iconName: string; // Lucide icon name string
  shortCopy: string;
  overviewCopy: string;
  imageTheme: string; // Theme description for visuals
  imageUrl: string; // Fallback stock-image URL or elegant illustration placeholder
  whatsIncluded: string[];
  processSteps: {
    title: string;
    description: string;
  }[];
  ctaText: string;
  bookingUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
}
