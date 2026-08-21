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
import { ThemeService } from './shared/services/theme.service';
//import { CABINS_WEBSITE_CONFIG } from './clients/bosque-andino/config/cabins-website.config';
import { CABINS_WEBSITE_CONFIG } from './clients/cabanas-volcan-sur/config/cabins-website.config';

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
  readonly config = CABINS_WEBSITE_CONFIG;
  readonly site = this.config.site;

  constructor(private readonly themeService: ThemeService) {
    this.themeService.applyTheme(this.site.theme);
  }
}
