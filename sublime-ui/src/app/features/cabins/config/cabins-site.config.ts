import { CabinsSiteConfig } from '../models/cabins-site.model';

export const CABINS_SITE_CONFIG: CabinsSiteConfig = {
  brand: {
    name: 'Bosque Andino',
    logoUrl: 'assets/clients/bosque-andino/logo/logo-cabanas-sur.webp',
    logoAlt: 'Bosque Andino',
  },

  contact: {
    phone: '+56 9 1234 5678',
    email: 'reservas@bosqueandino.cl',
    whatsappUrl: 'https://wa.me/56912345678',
    address: 'Pucón, Región de La Araucanía',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.4200285591965!2d-71.9676779242316!3d-39.27872397164506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96147f434250b48b%3A0xb6e0048742073d4c!2sLos%20Pellines%20230%2C%204920868%20Pucon%2C%20Puc%C3%B3n%2C%20Araucan%C3%ADa!5e0!3m2!1ses!2scl!4v1787182432349!5m2!1ses!2scl',
  },

  hero: {
    eyebrow: 'Pucón · Chile',
    title: 'Descansa rodeado de naturaleza',
    description:
      'Cabañas acogedoras a minutos del centro de Pucón, ideales para desconectarte y disfrutar del sur de Chile.',
    backgroundImage:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739',

    primaryLabel: 'Ver cabañas',
    primaryHref: '#cabanas',

    secondaryLabel: 'Contactar',
    secondaryHref: '#contacto',
  },

  about: {
    eyebrow: 'Sobre nosotros',
    title: 'Un lugar pensado para descansar, desconectarse y disfrutar Pucón',

    description:
      'Bosque Andino nace con la idea de ofrecer una estadía acogedora, rodeada de naturaleza y con todo lo necesario para disfrutar el sur de Chile con tranquilidad.',

    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8',

    highlights: [
      'Entorno natural y tranquilo',
      'Cerca de los principales atractivos de Pucón',
      'Espacios cómodos y equipados',
    ],
  },

  footer: {
    description: 'Cabañas acogedoras rodeadas de naturaleza en Pucón.',
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


