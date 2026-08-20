import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { HeroComponent } from './features/cabins/components/hero/hero.component';
import { CabinsSectionComponent } from "./features/cabins/components/cabins-section/cabins-section.component";
import { ServicesSectionComponent } from "./features/cabins/components/services-section/services-section.component";
import { GallerySectionComponent } from "./features/cabins/components/gallery-section/gallery-section.component";
import { AboutSectionComponent } from "./features/cabins/components/about-section/about-section.component";
import { ContactSectionComponent } from "./features/cabins/components/contact-section/contact-section.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { CABINS_SITE_CONFIG } from './features/cabins/config/cabins-site.config';
import { ThemeService } from './shared/services/theme.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    CabinsSectionComponent,
    ServicesSectionComponent,
    GallerySectionComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly site = CABINS_SITE_CONFIG;

  constructor(private readonly themeService: ThemeService) {
    this.themeService.applyTheme(CABINS_SITE_CONFIG.theme);
  }
}
