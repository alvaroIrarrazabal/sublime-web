import { Injectable } from '@angular/core';
import { SiteTheme } from '../models/site-theme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  applyTheme(theme: SiteTheme): void {
    const root = document.documentElement;

    root.style.setProperty('--color-primary', theme.primary);
    root.style.setProperty('--color-primary-dark', theme.primaryDark);
    root.style.setProperty('--color-primary-soft', theme.primarySoft);
    root.style.setProperty('--color-primary-light', theme.primaryLight);

    root.style.setProperty('--color-brand-dark', theme.brandDark);
    root.style.setProperty('--color-brand-surface', theme.brandSurface);
    root.style.setProperty('--color-brand-background', theme.brandBackground);
  }
}
