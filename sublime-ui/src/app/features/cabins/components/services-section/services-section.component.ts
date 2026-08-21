import { Component, Input } from '@angular/core';
import { ContainerComponent } from "../../../../shared/ui/container/container.component";
import { IconComponent, IconName } from "../../../../shared/ui/icon/icon.component";
import { CabinService } from '../../models/cabin-service.model';



@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [ContainerComponent, IconComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
})
export class ServicesSectionComponent {

  @Input() services: CabinService[] = [];
  
}
