import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../ui/button/button.component';


export interface NavItem {
  label: string;
  href: string;
}
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() brandName = 'Sublime';

  @Input() logoUrl = '';

  @Input() logoAlt = 'Sublime';

  @Input() items: NavItem[] = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Cabañas', href: '#cabanas' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Sobre Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ];

  @Input() ctaLabel = 'Reservar';

  @Input() ctaUrl = '#contacto';

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
