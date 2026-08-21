import { CabinService } from '../../../features/cabins/models/cabin-service.model';

export const CABIN_SERVICES: CabinService[] = [
  {
    name: 'WiFi',
    description:
      'Conexión estable para mantenerte conectado durante tu estadía.',
    icon: 'wifi',
  },
  {
    name: 'Tinaja',
    description: 'Relájate en una tinaja caliente rodeado de naturaleza.',
    icon: 'hot-tub',
  },
  {
    name: 'Estacionamiento',
    description: 'Espacio privado y seguro para tu vehículo.',
    icon: 'parking',
  },
  {
    name: 'Cocina equipada',
    description: 'Todo lo necesario para preparar tus comidas cómodamente.',
    icon: 'kitchen',
  },
  {
    name: 'Calefacción',
    description: 'Ambientes cálidos y confortables durante todo el año.',
    icon: 'heating',
  },
  {
    name: 'Quincho',
    description: 'Un espacio ideal para compartir en familia o con amigos.',
    icon: 'grill',
  },
];
