import { Component, Input } from '@angular/core';

import {
  LucideAngularModule,
  Wifi,
  Car,
  CookingPot,
  Flame,
  Waves,
  UtensilsCrossed
} from 'lucide-angular';

export type IconName =
  | 'wifi'
  | 'parking'
  | 'kitchen'
  | 'heating'
  | 'hot-tub'
  | 'grill';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {

   @Input() name: IconName = 'wifi';
  @Input() size = 28;

  readonly icons = {
    wifi: Wifi,
    parking: Car,
    kitchen: CookingPot,
    heating: Flame,
    'hot-tub': Waves,
    grill: UtensilsCrossed,
  };

}
