#!/usr/bin/env node
// Rewrite relative .md links in content/ to Zola route links.
//   ./SomePage.md          -> ./SomePage
//   ../other/SomePage.md   -> ../other/SomePage
//   ./index.md             -> ./
//   ../other/index.md      -> ../other/
//   ./_index.md            -> ./
//   ../other/_index.md     -> ../other/
// Anchors are preserved.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, resolve, dirname } from 'node:path';

const __dirname = dirname(process.argv[1]);
const root = resolve(__dirname, '..', 'content');

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(path);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      yield path;
    }
  }
}

function rewriteTarget(target) {
  // Skip absolute URLs and anchors-only
  if (/^[a-z][a-z0-9+.-]*:/i.test(target) || target.startsWith('#')) return target;

  const hashMatch = target.match(/^(.*?)(#[^#]*)?$/);
  const base = hashMatch[1];
  const hash = hashMatch[2] || '';

  if (base.endsWith('.md')) {
    let route = base.slice(0, -3);
    // index or _index as section root
    if (route.endsWith('/index') || route === 'index') {
      route = route === 'index' ? './' : route.replace(/\/index$/, '/');
    }
    return route + hash;
  }
  return target;
}

function rewriteLinks(text) {
  return text.replace(/\]\(([^)]+)\)/g, (match, target) => {
    const rewritten = rewriteTarget(target);
    return rewritten === target ? match : `](${rewritten})`;
  });
}

let changedFiles = 0;
let changedLinks = 0;

for await (const file of walk(root.pathname)) {
  const original = await readFile(file, 'utf8');
  const updated = rewriteLinks(original);
  if (updated !== original) {
    await writeFile(file, updated, 'utf8');
    changedFiles++;
    // Count actual changes
    const originalMatches = [...original.matchAll(/\]\([^)]+\.md[^)]*\)/g)].length;
    changedLinks += originalMatches;
  }
}

console.log(`Fixed ${changedLinks} .md links across ${changedFiles} files.`);
