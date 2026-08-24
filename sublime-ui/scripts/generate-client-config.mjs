const allowedClients = [
  'bosque-andino',
  'cabanas-volcan-sur',
  'cabanas-curarehue',
];

const defaultClient = 'bosque-andino';

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

await import('node:fs/promises').then(async ({ writeFile }) => {
  await writeFile('public/client-config.js', content, 'utf8');
});

console.log(`✓ Active Sublime client: ${client}`);
