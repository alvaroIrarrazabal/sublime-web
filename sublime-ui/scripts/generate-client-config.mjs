import { readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const clientsRoot = path.resolve('src/app/clients');
const outputPath = path.resolve('public/client-config.js');

const defaultClient = 'bosque-andino';

const entries = await readdir(clientsRoot, {
  withFileTypes: true,
});

const allowedClients = entries
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

const client = process.env.SUBLIME_CLIENT || defaultClient;

if (!allowedClients.includes(client)) {
  console.error(`Invalid SUBLIME_CLIENT: "${client}"`);
  console.error(`Allowed clients: ${allowedClients.join(', ')}`);
  process.exit(1);
}

const content = `window.__SUBLIME_CONFIG__ = {
  client: '${client}'
};
`;

await writeFile(outputPath, content, 'utf8');

console.log(`Active Sublime client: ${client}`);
