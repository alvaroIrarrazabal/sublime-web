import { Cabin } from './cabin.model';
import { CabinService } from './cabin-service.model';
import { GalleryImage } from './gallery-image.model';
import { CabinsSiteConfig } from './cabins-site.model';

export interface CabinsWebsiteConfig {
  site: CabinsSiteConfig;
  cabins: Cabin[];
  services: CabinService[];
  gallery: GalleryImage[];
}
