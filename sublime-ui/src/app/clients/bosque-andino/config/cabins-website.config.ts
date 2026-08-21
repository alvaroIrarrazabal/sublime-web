

import { CABINS_SITE_CONFIG } from './cabins-site.config';
import { CABINS } from './cabins.config';
import { CABIN_SERVICES } from './services.config';
import { GALLERY_IMAGES } from './gallery.config';
import { CabinsWebsiteConfig } from '../../../features/cabins/models/cabins-website-config.model';  

export const CABINS_WEBSITE_CONFIG: CabinsWebsiteConfig = {
  site: CABINS_SITE_CONFIG,
  cabins: CABINS,
  services: CABIN_SERVICES,
  gallery: GALLERY_IMAGES,
};

