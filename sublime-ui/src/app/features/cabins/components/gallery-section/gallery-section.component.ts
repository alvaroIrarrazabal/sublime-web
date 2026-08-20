import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ContainerComponent } from '../../../../shared/ui/container/container.component';
import { GALLERY_IMAGES } from '../../config/gallery.config';
import { GalleryImage } from '../../models/gallery-image.model';



@Component({
  selector: 'app-gallery-section',
  standalone: true,
  imports: [NgClass, ContainerComponent],
  templateUrl: './gallery-section.component.html',
  styleUrl: './gallery-section.component.scss',
})
export class GallerySectionComponent {
  readonly images: GalleryImage[] = GALLERY_IMAGES;
}
