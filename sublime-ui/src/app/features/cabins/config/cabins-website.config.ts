import { CabinsWebsiteConfig } from '../models/cabins-website-config.model';

import { CABINS_SITE_CONFIG } from './cabins-site.config';
import { CABINS } from './cabins.config';
import { CABIN_SERVICES } from './services.config';
import { GALLERY_IMAGES } from './gallery.config';

export const CABINS_WEBSITE_CONFIG: CabinsWebsiteConfig = {
  site: CABINS_SITE_CONFIG,
  cabins: CABINS,
  services: CABIN_SERVICES,
  gallery: GALLERY_IMAGES,
};

