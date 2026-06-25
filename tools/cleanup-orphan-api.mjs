// Remove API leaf pages that are no longer present in the current type inventory.
// Only touches content/<version>/<lang>/api/<area>/*.md; keeps _index.md and catalog pages.

import { readFileSync } from 'fs';
import { readdirSync, statSync, rmSync, rmdirSync } from 'fs';
import { join, relative, sep, dirname } from 'path';

const repoRoot = import.meta.dirname.replace(/[\\/]tools$/, '');
const invPath = join(repoRoot, 'tools', 'data', 'type-inventory.json');
const inv = JSON.parse(readFileSync(invPath, 'utf8'));

const keepNameRe = /^_index\.md$|^catalog|actions-index/i;
const knownAreas = new Set();

function normalize(p) {
  return p.replace(/\\/g, '/');
}

function walk(dir, acc = []) {
  let entries;
  try { entries = readdirSync(dir); } catch { return acc; }
  for (const e of entries) {
    const p = join(dir, e);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, acc);
    else if (e.endsWith('.md')) acc.push(p);
  }
  return acc;
}

// Build set of valid page paths from the current inventory.
const validPaths = new Set();
for (const version of Object.keys(inv)) {
  for (const lang of Object.keys(inv[version])) {
    const nsMap = inv[version][lang];
    for (const ns of Object.keys(nsMap)) {
      for (const typeName of Object.keys(nsMap[ns])) {
        const entry = nsMap[ns][typeName];
        if (entry.pagePath) validPaths.add(normalize(entry.pagePath));
      }
    }
  }
}

let removed = 0;
let kept = 0;

const contentRoot = join(repoRoot, 'content');
for (const dirVer of readdirSync(contentRoot)) {
  const dirVerPath = join(contentRoot, dirVer);
  if (!statSync(dirVerPath).isDirectory()) continue;
  const invKey = dirVer.replace(/^v/, '');
  if (!inv[invKey]) continue;

  for (const lang of readdirSync(dirVerPath)) {
    const apiRoot = join(dirVerPath, lang, 'api');
    if (!statSync(apiRoot, { throwIfNoEntry: false })?.isDirectory()) continue;

    const files = walk(apiRoot);
    for (const abs of files) {
      const rel = normalize(relative(repoRoot, abs));
      if (keepNameRe.test(rel)) { kept++; continue; }
      if (validPaths.has(rel)) { kept++; continue; }
      rmSync(abs);
      removed++;
    }

    for (const area of readdirSync(apiRoot)) {
      const areaDir = join(apiRoot, area);
      try {
        if (!statSync(areaDir).isDirectory()) continue;
        if (readdirSync(areaDir).length === 0) rmdirSync(areaDir);
      } catch { /* ignore */ }
    }
  }
}

console.log(`API orphan cleanup: removed ${removed} files, kept ${kept} files.`);
