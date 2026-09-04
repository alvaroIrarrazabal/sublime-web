import { Cabin } from '../../../features/cabins/models/cabin.model';

export const CABINS: Cabin[] = [
  {
    name: 'Cabaña Arrayán',
    description:
      'Una cabaña acogedora para parejas que buscan tranquilidad y descanso rodeados de naturaleza.',
    image: 'assets/clients/cabanas-lago-azul/cabins/arrayan.png',
    capacity: 2,
    priceFrom: 65000,
  },
  {
    name: 'Cabaña Coihue',
    description:
      'Ideal para familias pequeñas, con espacios cómodos para disfrutar una estadía inolvidable en Pucón.',
    image: 'assets/clients/cabanas-lago-azul/cabins/coihue.png',
    capacity: 4,
    priceFrom: 85000,
  },
  {
    name: 'Cabaña Araucaria',
    description:
      'Nuestra cabaña más amplia, perfecta para familias o grupos de amigos que quieren disfrutar juntos del sur de Chile.',
    image: 'assets/clients/cabanas-lago-azul/cabins/araucaria.png',
    capacity: 6,
    priceFrom: 110000,
  },
];
