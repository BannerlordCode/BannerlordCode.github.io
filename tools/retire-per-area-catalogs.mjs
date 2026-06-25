// tools/retire-per-area-catalogs.mjs
// Legacy per-area catalog leaf pages (catalog-core, catalog-engine, etc.) were
// removed in favor of a single api/catalog section. Rewrite the remaining link
// targets that pointed to those leaf files so they point to api/catalog instead.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import { REPO_ROOT } from './lib/paths.mjs';

const CONTENT = join(REPO_ROOT, 'content');

// catalog-campaign is intentionally excluded because api/catalog-campaign is a
// real section.
const LEGACY_CATALOGS = new Set([
  'catalog-core', 'catalog-engine', 'catalog-gameplay', 'catalog-input',
  'catalog-library', 'catalog-localization', 'catalog-mountandblade',
  'catalog-other', 'catalog-save', 'catalog-system', 'catalog-ui',
]);

// Match a relative link URL containing one of the legacy catalog names.
// Captures optional leading ../ or ./ so we can preserve depth.
const pattern = new RegExp(
  `(\\.{0,2}/)(${[...LEGACY_CATALOGS].join('|')})(/|\\b)`,
  'g'
);

function walkMd(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const p = join(dir, entry.name);
    if (entry.isDirectory()) {
      walkMd(p, acc);
    } else if (entry.name.endsWith('.md')) {
      acc.push(p);
    }
  }
  return acc;
}

let changedFiles = 0;
let changedLinks = 0;
for (const file of walkMd(CONTENT)) {
  const original = readFileSync(file, 'utf8');
  let updated = original;
  let localChanges = 0;
  updated = updated.replace(pattern, (match, prefix, catalogName, suffix) => {
    localChanges++;
    return `${prefix}catalog${suffix}`;
  });
  if (updated !== original) {
    writeFileSync(file, updated, 'utf8');
    changedFiles++;
    changedLinks += localChanges;
  }
}
console.log(`Rewrote ${changedLinks} legacy catalog links in ${changedFiles} files.`);
