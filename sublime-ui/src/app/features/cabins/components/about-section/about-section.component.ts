import { Component, Input } from '@angular/core';
import { ContainerComponent } from '../../../../shared/ui/container/container.component';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent {
  @Input() eyebrow = 'Sobre nosotros';

  @Input() title =
    'Un lugar pensado para descansar, desconectarse y disfrutar Pucón';

  @Input() description =
    'Bosque Andino nace con la idea de ofrecer una estadía acogedora, rodeada de naturaleza y con todo lo necesario para disfrutar el sur de Chile con tranquilidad.';

  @Input() image ='';

  @Input() highlights: string[] = [
    'Entorno natural y tranquilo',
    'Cerca de los principales atractivos de Pucón',
    'Espacios cómodos y equipados',
  ];
}
