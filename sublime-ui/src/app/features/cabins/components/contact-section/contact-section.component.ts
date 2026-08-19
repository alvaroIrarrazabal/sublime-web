import { Component, Input, SimpleChanges } from '@angular/core';
import { ContainerComponent } from '../../../../shared/ui/container/container.component';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { IconComponent } from '../../../../shared/ui/icon/icon.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ContainerComponent, ButtonComponent, IconComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  @Input() address = 'Pucón, Región de La Araucanía';
  @Input() phone = '+56 9 1234 5678';
  @Input() email = 'reservas@bosqueandino.cl';
  @Input() whatsappUrl = 'https://wa.me/56990984538';
  

  @Input() mapUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.4200285591965!2d-71.9676779242316!3d-39.27872397164506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96147f434250b48b%3A0xb6e0048742073d4c!2sLos%20Pellines%20230%2C%204920868%20Pucon%2C%20Puc%C3%B3n%2C%20Araucan%C3%ADa!5e0!3m2!1ses!2scl!4v1787182432349!5m2!1ses!2scl';

  safeMapUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.updateMapUrl();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mapUrl']) {
      this.updateMapUrl();
    }
  }

  private updateMapUrl(): void {
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.mapUrl,
    );
  }
}

