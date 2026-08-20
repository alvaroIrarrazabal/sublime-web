import { NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';


export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';

export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input()
  variant: ButtonVariant = 'primary';

  @Input()
  size: ButtonSize = 'md';

  @Input()
  disabled = false;

  @Input() href?: string;

  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Input() target: '_self' | '_blank' | '_parent' | '_top' = '_self';

  @Input() rel?: string;

  get buttonClasses(): string {
    return [
      'inline-flex',
      'items-center',
      'justify-center',
      'font-semibold',
      'rounded-lg',
      'transition',
      'duration-200',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      'disabled:cursor-not-allowed',
      'disabled:opacity-50',

      this.getVariantClasses(),
      this.getSizeClasses(),
    ].join(' ');
  }

  private getVariantClasses(): string {
    switch (this.variant) {
      case 'secondary':
        return 'bg-slate-900 text-white hover:bg-slate-800';

      case 'outline':
        return 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50';

      case 'danger':
        return 'bg-red-600 text-white hover:bg-red-700';

      case 'primary':
      default:
        return 'bg-blue-600 text-white hover:bg-blue-700';
    }
  }

  private getSizeClasses(): string {
    switch (this.size) {
      case 'sm':
        return 'px-3 py-2 text-sm';

      case 'lg':
        return 'px-6 py-3 text-lg';

      case 'md':
      default:
        return 'px-4 py-2.5 text-base';
    }
  }
}
