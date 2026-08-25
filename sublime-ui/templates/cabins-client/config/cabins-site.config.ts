import { CabinsSiteConfig } from '../../../features/cabins/models/cabins-site.model';
export const CABINS_SITE_CONFIG: CabinsSiteConfig = {
  brand: {
    name: 'Nuevo Cliente',
    logoUrl: '',
    logoAlt: 'Nuevo Cliente',
  },

  contact: {
    phone: '',
    email: '',
    whatsappUrl: '',
    address: '',
    mapUrl: '',
  },

  hero: {
    eyebrow: 'Ubicación',
    title: 'Título principal',
    description: 'Descripción principal del alojamiento.',
    backgroundImage: '',

    primaryLabel: 'Ver cabañas',
    primaryHref: '#cabanas',

    secondaryLabel: 'Contactar',
    secondaryHref: '#contacto',
  },

  about: {
    eyebrow: 'Sobre nosotros',
    title: 'Un lugar pensado para descansar',
    description: 'Descripción del negocio.',
    image: '',
    highlights: [
      'Característica destacada 1',
      'Característica destacada 2',
      'Característica destacada 3',
    ],
  },

  footer: {
    description: 'Descripción breve del alojamiento.',
  },

  social: {
    instagramUrl: '',
    facebookUrl: '',
  },

  theme: {
    primary: '37 99 235',
    primaryDark: '29 78 216',
    primarySoft: '96 165 250',
    primaryLight: '219 234 254',

    brandDark: '15 23 42',
    brandSurface: '255 255 255',
    brandBackground: '248 250 252',
  },
};
