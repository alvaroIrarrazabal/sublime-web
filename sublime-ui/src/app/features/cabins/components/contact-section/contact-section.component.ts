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
  @Input() address = '';
  @Input() phone = '';
  @Input() email = '';
  @Input() whatsappUrl = '';
  

  @Input() mapUrl = '';

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

