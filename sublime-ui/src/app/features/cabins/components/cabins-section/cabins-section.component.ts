import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { CardComponent } from '../../../../shared/ui/card/card.component';
import { ContainerComponent } from '../../../../shared/ui/container/container.component';

interface Cabin {
  name: string;
  description: string;
  image: string;
  capacity: number;
  priceFrom: number;
}

@Component({
  selector: 'app-cabins-section',
  standalone: true,
  imports: [ButtonComponent, CardComponent, ContainerComponent],
  templateUrl: './cabins-section.component.html',
  styleUrl: './cabins-section.component.scss',
})
export class CabinsSectionComponent {
  cabins: Cabin[] = [
    {
      name: 'Cabaña Arrayán',
      description: 'Ideal para parejas que buscan tranquilidad y naturaleza.',
      image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8',
      capacity: 2,
      priceFrom: 65000,
    },
    {
      name: 'Cabaña Coihue',
      description: 'Espacio acogedor para familias pequeñas cerca de Pucón.',
      image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739',
      capacity: 4,
      priceFrom: 85000,
    },
    {
      name: 'Cabaña Araucaria',
      description:
        'Nuestra cabaña más amplia para disfrutar en familia o con amigos.',
      image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e',
      capacity: 6,
      priceFrom: 110000,
    },
  ];
}
