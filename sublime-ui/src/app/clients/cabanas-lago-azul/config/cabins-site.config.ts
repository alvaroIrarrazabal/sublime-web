import { CabinsSiteConfig } from '../../../features/cabins/models/cabins-site.model';
export const CABINS_SITE_CONFIG: CabinsSiteConfig = {
  brand: {
    name: 'Cabañas Lago Azul',
    logoUrl: 'assets/clients/cabanas-lago-azul/logo/logo.png',
    logoAlt: 'Cabañas Lago Azul',
  },

  contact: {
    phone: '+56 9 8765 4321',
    email: 'reservas@cabanaslagoazul.cl',
    whatsappUrl: 'https://wa.me/56987654321',
    address: 'Camino al Lago, Pucón, Región de La Araucanía',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.4684813988833!2d-71.97968469999999!3d-39.27762489999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96147f3e3b9feda5%3A0x8defeae3907b23af!2sMirador%20La%20Poza!5e0!3m2!1ses!2scl!4v1788480539808!5m2!1ses!2scl',
  },
  hero: {
    eyebrow: 'PUCÓN · CHILE',
    title: 'Descansa junto a la naturaleza',
    description:  
      'Cabañas cómodas y acogedoras para disfrutar Pucón en familia o con amigos.',
    backgroundImage: 'assets/clients/cabanas-lago-azul/hero/hero.png',

    primaryLabel: 'Ver cabañas',
    primaryHref: '#cabanas',

    secondaryLabel: 'Contactar',
    secondaryHref: '#contacto',
  },

  about: {
    eyebrow: 'Sobre nosotros',
    title: 'Cabañas Lago Azul',
    description:
      'Un rincón pensado para desconectarse de la rutina y disfrutar la tranquilidad del sur de Chile. En Cabañas Lago Azul encontrarás espacios cómodos, un entorno natural privilegiado y todo lo necesario para vivir una estadía inolvidable en Pucón.',
    image: 'assets/clients/cabanas-lago-azul/about/about.png',
    highlights: [
      'Entorno natural y tranquilo',
      'Alojamiento para parejas, familias y grupos',
      'A minutos de los principales atractivos de Pucón',
    ],
  },

  footer: {
    description:
      'Descanso, naturaleza y comodidad para disfrutar una experiencia inolvidable en Pucón.',
  },

  social: {
    instagramUrl: 'https://instagram.com/cabanaslagoazul',
    facebookUrl: 'https://facebook.com/cabanaslagoazul',
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
