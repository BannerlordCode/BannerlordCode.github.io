// tools/generate-section-tree.mjs
//
// Pre-compute the section/page-count tree for the sidebar so the theme does
// not need to call get_section() on every render. Run after content generation.
//
//   node tools/generate-section-tree.mjs
// Output:
//   data/section-tree.json

import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const CONTENT_ROOT = join(REPO_ROOT, 'content');
const OUT_PATH = join(REPO_ROOT, 'data', 'section-tree.json');

function walk(dir, cb) {
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); } catch { return; }
  // Process `_index.md` before other files so leaf counters are not overwritten.
  const sorted = entries.slice().sort((a, b) => {
    if (a.name === '_index.md') return -1;
    if (b.name === '_index.md') return 1;
    return a.name.localeCompare(b.name);
  });
  for (const e of sorted) {
    if (e.name.startsWith('.')) continue;
    const full = join(dir, e.name);
    if (e.isDirectory()) walk(full, cb);
    else cb(full, e.name);
  }
}

const tree = { sections: {}, byRoute: {} };

function parseFrontmatter(text) {
  if (!text.startsWith('---')) return { title: null, weight: null };
  const end = text.indexOf('---', 3);
  if (end === -1) return { title: null, weight: null };
  const fm = text.slice(3, end).trim();
  const titleM = fm.match(/^title:\s*["']?(.+?)["']?\s*$/m);
  const weightM = fm.match(/^weight:\s*(\d+)\s*$/m);
  return {
    title: titleM ? titleM[1].trim().replace(/^["']|["']$/g, '') : null,
    weight: weightM ? parseInt(weightM[1], 10) : null,
  };
}

function ensureRoute(route, fallbackTitle) {
  if (!tree.byRoute[route]) {
    tree.byRoute[route] = {
      title: fallbackTitle,
      weight: null,
      pages: 0,
      subsections: [],
    };
  }
  return tree.byRoute[route];
}

walk(CONTENT_ROOT, (fullPath, name) => {
  const rel = relative(CONTENT_ROOT, fullPath).replace(/\\/g, '/');
  if (!rel.endsWith('.md')) return;

  if (name === '_index.md') {
    const route = '/' + rel.slice(0, -'_index.md'.length);
    const fm = parseFrontmatter(readFileSync(fullPath, 'utf8'));
    const existing = tree.byRoute[route];
    tree.byRoute[route] = {
      title: fm.title || existing?.title || route.split('/').filter(Boolean).pop(),
      weight: fm.weight ?? existing?.weight ?? null,
      pages: existing?.pages ?? 0,
      subsections: existing?.subsections ?? [],
    };
    return;
  }

  // Count this non-index page against its parent section route.
  const parentRel = dirname(rel).replace(/\\/g, '/');
  const parentRoute = '/' + (parentRel === '.' ? '' : parentRel + '/');
  const section = ensureRoute(parentRoute, parentRoute.split('/').filter(Boolean).pop());
  section.pages++;
});

// Wire up subsection lists.
for (const route of Object.keys(tree.byRoute)) {
  if (route === '/') continue;
  const parts = route.split('/').filter(Boolean);
  parts.pop();
  const parentRoute = parts.length ? '/' + parts.join('/') + '/' : '/';
  const parent = ensureRoute(parentRoute, parts.length ? parts[parts.length - 1] : 'Home');
  if (!parent.subsections.includes(route)) {
    parent.subsections.push(route);
  }
}

// Sort subsections using a stable order.
for (const route of Object.keys(tree.byRoute)) {
  tree.byRoute[route].subsections.sort((a, b) => {
    const wa = tree.byRoute[a]?.weight ?? 0;
    const wb = tree.byRoute[b]?.weight ?? 0;
    if (wa !== wb) return wa - wb;
    return a.localeCompare(b);
  });
}

const totalPages = Object.values(tree.byRoute).reduce((sum, s) => sum + s.pages, 0);

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, JSON.stringify(tree, null, 2), 'utf8');
console.log(`Wrote ${OUT_PATH}`);
console.log(`Sections: ${Object.keys(tree.byRoute).length}`);
console.log(`Leaf pages counted: ${totalPages}`);
