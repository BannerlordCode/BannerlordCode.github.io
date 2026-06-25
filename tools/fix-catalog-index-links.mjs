// tools/fix-catalog-index-links.mjs
// The custom prose in api/catalog and api/catalog-campaign indexes links to
// sibling API areas with ./area/, but those areas live one level up. Rewrite
// them to ../area/.
import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { REPO_ROOT } from './lib/paths.mjs';

const CONTENT = join(REPO_ROOT, 'content');

function apiDirs() {
  const out = [];
  for (const ver of readdirSync(CONTENT)) {
    const verPath = join(CONTENT, ver);
    if (!statSync(verPath).isDirectory()) continue;
    for (const lang of readdirSync(verPath)) {
      const langPath = join(verPath, lang);
      if (!statSync(langPath).isDirectory()) continue;
      const apiPath = join(langPath, 'api');
      if (statSync(apiPath).isDirectory()) out.push(apiPath);
    }
  }
  return out;
}

let fixed = 0;
for (const apiDir of apiDirs()) {
  for (const name of ['catalog', 'catalog-campaign']) {
    const idx = join(apiDir, name, '_index.md');
    try {
      const text = readFileSync(idx, 'utf8');
      const updated = text.replace(/\]\(\s*\.\//g, '](../');
      if (updated !== text) {
        writeFileSync(idx, updated, 'utf8');
        fixed++;
      }
    } catch { /* ignore missing */ }
  }
}
console.log(`Fixed sibling links in ${fixed} catalog index files.`);
