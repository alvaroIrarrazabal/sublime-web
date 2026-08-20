import { Component } from '@angular/core';
import { ContainerComponent } from "../../../../shared/ui/container/container.component";
import { IconComponent, IconName } from "../../../../shared/ui/icon/icon.component";
import { CabinService } from '../../models/cabin-service.model';
import { CABIN_SERVICES } from '../../config/services.config';



@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [ContainerComponent, IconComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
})
export class ServicesSectionComponent {

  
  readonly services: CabinService[] = CABIN_SERVICES;
  
}
