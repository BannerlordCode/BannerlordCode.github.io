// tools/generate-relkey-map.mjs
//
// Build a mapping from "relative paths after version/lang" to the set of
// existing page permutations. This lets the topnav version / language
// pick an equivalent page when one exists, and fall back to a version home
// page otherwise.
//
// Run from repo root:
//   node tools/generate-relkey-map.mjs
// Output:
//   data/relkey_map.json

import { readdirSync, statSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const CONTENT_ROOT = join(REPO_ROOT, 'content');
const OUT_PATH = join(REPO_ROOT, 'data', 'relkey_map.json');

const VERSIONS = ['v1.3.15', 'v1.3.0', 'v1.4.5'];
const LANGS = ['zh', 'en'];

const map = {};

function walk(dir, cb) {
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name.startsWith('.')) continue;
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      walk(full, cb);
    } else if (e.isFile() && e.name.endsWith('.md')) {
      cb(full);
    }
  }
}

for (const ver of VERSIONS) {
  for (const lang of LANGS) {
    const base = join(CONTENT_ROOT, ver, lang);
    if (!statSync(base, { throwIfNoEntry: false })?.isDirectory()) continue;
    walk(base, (fullPath) => {
      const rel = relative(base, fullPath).replace(/\\/g, '/');
      // relkey is everything except the version/lang prefix.
      // _index.md becomes the section itself, anything else keeps its slug.
      const relkey = rel.endsWith('/_index.md') ? rel.slice(0, -'_index.md'.length) : rel.replace(/\.md$/, '/');
      if (!relkey) return;
      const url = `/${ver}/${lang}/${relkey}`;
      map[relkey] ??= {};
      map[relkey][ver] ??= {};
      map[relkey][ver][lang] = url;
    });
  }
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, JSON.stringify(map, null, 2), 'utf8');

console.log(`Wrote ${OUT_PATH}`);
console.log(`Unique relkeys: ${Object.keys(map).length}`);
