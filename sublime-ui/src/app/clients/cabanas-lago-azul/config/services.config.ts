import { CabinService } from '../../../features/cabins/models/cabin-service.model';

export const CABIN_SERVICES: CabinService[] = [
  {
    name: 'WiFi',
    description: 'Conexión WiFi disponible durante toda tu estadía.',
    icon: 'wifi',
  },
  {
    name: 'Estacionamiento',
    description: 'Estacionamiento privado disponible para nuestros huéspedes.',
    icon: 'parking',
  },
  {
    name: 'Calefacción',
    description:
      'Cabañas equipadas con calefacción para disfrutar cómodamente todo el año.',
    icon: 'heating',
  },
  {
    name: 'Cocina equipada',
    description:
      'Cocina equipada para preparar tus comidas durante la estadía.',
    icon: 'kitchen',
  },
  {
    name: 'Tinaja caliente',
    description:
      'Relájate en una tinaja caliente y disfruta del paisaje del sur de Chile.',
    icon: 'hot-tub',
  },
  {
    name: 'Parrilla',
    description:
      'Espacio habilitado para disfrutar asados en familia o con amigos.',
    icon: 'grill',
  },
];
