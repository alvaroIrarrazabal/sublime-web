import { Component, Input } from '@angular/core';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent {

  @Input() size: ContainerSize = 'xl';

  get containerClasses(): string {
    const baseClasses = 'mx-auto w-full px-4 sm:px-6 lg:px-8';

    const sizeClasses: Record<ContainerSize, string> = {
      sm: 'max-w-3xl',
      md: 'max-w-5xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      full: 'max-w-none',
    };

    return `${baseClasses} ${sizeClasses[this.size]}`;
  }
}
