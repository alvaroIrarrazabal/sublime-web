import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../ui/button/button.component';
import { ContainerComponent } from '../../ui/container/container.component';

export interface FooterLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ButtonComponent, ContainerComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() brand = 'Sublime';
  @Input() description =
    'Experiencias acogedoras y memorables en el sur de Chile.';

  @Input() links: FooterLink[] = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Cabañas', href: '#cabanas' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ];

  @Input() phone = '+56 9 1234 5678';
  @Input() email = 'reservas@bosqueandino.cl';

  @Input() whatsappUrl = 'https://wa.me/56912345678';

  @Input() instagramUrl = '';
  @Input() facebookUrl = '';

  readonly currentYear = new Date().getFullYear();
}
