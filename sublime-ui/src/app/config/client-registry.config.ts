import { CABINS_WEBSITE_CONFIG as BOSQUE_ANDINO } from '../clients/bosque-andino/config/cabins-website.config';

import { CABINS_WEBSITE_CONFIG as VOLCAN_SUR } from '../clients/cabanas-volcan-sur/config/cabins-website.config';

import { CABINS_WEBSITE_CONFIG as CURARREHUE } from '../clients/cabanas-curarehue/config/cabins-website.config';

export const CLIENTS = {
  'bosque-andino': BOSQUE_ANDINO,
  'cabanas-volcan-sur': VOLCAN_SUR,
  'cabanas-curarrehue': CURARREHUE,
} as const;

export type ClientKey = keyof typeof CLIENTS;
