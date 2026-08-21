import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { CardComponent } from '../../../../shared/ui/card/card.component';
import { ContainerComponent } from '../../../../shared/ui/container/container.component';
import { Cabin } from '../../models/cabin.model';



@Component({
  selector: 'app-cabins-section',
  standalone: true,
  imports: [ButtonComponent, CardComponent, ContainerComponent],
  templateUrl: './cabins-section.component.html',
  styleUrl: './cabins-section.component.scss',
})
export class CabinsSectionComponent {
  @Input() cabins: Cabin[] = [];
}
