import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./shared/ui/button/button.component";
import { CardComponent } from './shared/ui/card/card.component';
import { ContainerComponent } from "./shared/ui/container/container.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { HeroComponent } from './features/cabins/components/hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, CardComponent, ContainerComponent, NavbarComponent,HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sublime-ui';
}
