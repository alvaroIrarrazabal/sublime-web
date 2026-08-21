import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { ContainerComponent } from '../../../../shared/ui/container/container.component';

@Component({
  selector: 'app-cabins-hero',
  standalone: true,
  imports: [ButtonComponent, ContainerComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input() eyebrow = 'Pucón · Chile';

  @Input() title = 'Descansa rodeado de naturaleza';

  @Input() description =
    'Cabañas acogedoras a minutos del centro de Pucón, ideales para desconectarte y disfrutar del sur de Chile.';

  @Input() primaryLabel = 'Ver cabañas';
  @Input() primaryHref = '#cabanas';

  @Input() secondaryLabel = 'Contactar';
  @Input() secondaryHref = '#contacto';

  @Input() backgroundImage ='';
}
