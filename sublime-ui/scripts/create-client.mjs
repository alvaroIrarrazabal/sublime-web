import { mkdir, cp, readFile, writeFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';

const clientSlug = process.argv[2];

if (!clientSlug) {
  console.error('Usage: npm run create:client -- <client-slug>');
  process.exit(1);
}

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

if (!slugPattern.test(clientSlug)) {
  console.error(
    'Invalid client slug. Use lowercase letters, numbers and hyphens only.'
  );
  process.exit(1);
}

const sourceClient = 'bosque-andino';

const clientsRoot = path.resolve('src/app/clients');
const assetsRoot = path.resolve('src/assets/clients');

const sourceConfigDir = path.join(clientsRoot, sourceClient, 'config');
const targetClientDir = path.join(clientsRoot, clientSlug);
const targetConfigDir = path.join(targetClientDir, 'config');
const targetAssetsDir = path.join(assetsRoot, clientSlug);

const registryPath = path.resolve(
  'src/app/config/client-registry.config.ts'
);

async function exists(targetPath) {
  try {
    await access(targetPath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

if (await exists(targetClientDir)) {
  console.error(`Client "${clientSlug}" already exists.`);
  process.exit(1);
}

await mkdir(targetClientDir, { recursive: true });

await cp(sourceConfigDir, targetConfigDir, {
  recursive: true,
});

await mkdir(path.join(targetAssetsDir, 'logo'), { recursive: true });
await mkdir(path.join(targetAssetsDir, 'hero'), { recursive: true });
await mkdir(path.join(targetAssetsDir, 'cabins'), { recursive: true });
await mkdir(path.join(targetAssetsDir, 'gallery'), { recursive: true });

let registry = await readFile(registryPath, 'utf8');

const importName = clientSlug
  .replace(/-/g, '_')
  .toUpperCase();

const importLine =
  `import { CABINS_WEBSITE_CONFIG as ${importName} } ` +
  `from '../clients/${clientSlug}/config/cabins-website.config';`;

if (!registry.includes(importLine)) {
  const lastImportIndex = registry.lastIndexOf('import ');

  const importEndIndex = registry.indexOf('\n', lastImportIndex);

  registry =
    registry.slice(0, importEndIndex + 1) +
    importLine +
    '\n' +
    registry.slice(importEndIndex + 1);
}

const registryEntry = `  '${clientSlug}': ${importName},`;

if (!registry.includes(registryEntry)) {
  registry = registry.replace(
    '} as const;',
    `${registryEntry}\n} as const;`
  );
}

await writeFile(registryPath, registry, 'utf8');

console.log('');
console.log(`✓ Client created: ${clientSlug}`);
console.log(`✓ Config: src/app/clients/${clientSlug}/config`);
console.log(`✓ Assets: src/assets/clients/${clientSlug}`);
console.log('✓ Client registry updated');
console.log('');
console.log('Next:');
console.log(`1. Edit the configuration for "${clientSlug}".`);
console.log('2. Add logo and images.');
console.log(`3. Test with SUBLIME_CLIENT=${clientSlug}.`);
