import { CLIENTS, ClientKey } from './client-registry.config';

const runtimeClient = window.__SUBLIME_CONFIG__?.client;

const defaultClient: ClientKey = 'bosque-andino';

export const ACTIVE_CLIENT: ClientKey =
  runtimeClient && runtimeClient in CLIENTS
    ? (runtimeClient as ClientKey)
    : defaultClient;

export const ACTIVE_CLIENT_CONFIG = CLIENTS[ACTIVE_CLIENT];
