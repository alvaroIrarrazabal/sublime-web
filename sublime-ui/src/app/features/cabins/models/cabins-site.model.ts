import { SiteTheme } from '../../../shared/models/site-theme.model';


export interface CabinsSiteConfig {
  brand: {
    name: string;
    logoUrl?: string;
    logoAlt?: string;
  };

  contact: {
    phone: string;
    email: string;
    whatsappUrl: string;
    address: string;
    mapUrl: string;
  };

  hero: {
    eyebrow: string;
    title: string;
    description: string;
    backgroundImage: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };

  about: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    highlights: string[];
  };

  footer: {
    description: string;
    instagramUrl?: string;
    facebookUrl?: string;
  };

  theme: SiteTheme;
}
