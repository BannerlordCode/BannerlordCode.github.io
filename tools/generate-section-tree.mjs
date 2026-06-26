// tools/generate-section-tree.mjs
//
// Pre-compute the section/page-count tree for the sidebar so the theme does
// not need to call get_section() on every render. Run after content generation.
//
//   node tools/generate-section-tree.mjs
// Output:
//   data/section-tree.json

import { readdirSync, statSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const CONTENT_ROOT = join(REPO_ROOT, 'content');
const OUT_PATH = join(REPO_ROOT, 'data', 'section-tree.json');

function walk(dir, cb) {
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); } catch { return; }
  for (const e of entries) {
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

let leafCount = 0;
walk(CONTENT_ROOT, (fullPath, name) => {
  const rel = relative(CONTENT_ROOT, fullPath).replace(/\\/g, '/');
  if (!rel.endsWith('.md')) return;

  if (name === '_index.md') {
    const route = '/' + rel.slice(0, -'_index.md'.length);
    const fm = parseFrontmatter(readFileSync(fullPath, 'utf8'));
    tree.byRoute[route] = {
      title: fm.title || route.split('/').filter(Boolean).pop(),
      weight: fm.weight,
      pages: 0,
      subsections: [],
    };
    return;
  }
  leafCount++;

  // Count this non-index page against its parent section route.
  const parentRel = dirname(rel).replace(/\\/g, '/');
  const parentRoute = '/' + (parentRel === '.' ? '' : parentRel + '/');
  if (!tree.byRoute[parentRoute]) {
    // Section index missing; add a placeholder so counts still work.
    tree.byRoute[parentRoute] = { title: parentRoute.split('/').filter(Boolean).pop(), pages: 0, subsections: [] };
  }
  if (leafCount < 6 || rel.includes('save-system/SaveManager')) {
    console.log({ rel, parentRel, parentRoute, exists: !!tree.byRoute[parentRoute], before: tree.byRoute[parentRoute].pages });
  }
  tree.byRoute[parentRoute].pages++;
  if (leafCount < 6 || rel.includes('save-system/SaveManager')) {
    console.log('after:', tree.byRoute[parentRoute].pages);
  }
});

console.log('After walk save-system pages:', tree.byRoute['/v1.3.15/zh/api/save-system/']?.pages, 'key exists:', '/v1.3.15/zh/api/save-system/' in tree.byRoute);
console.log('After walk core pages:', tree.byRoute['/v1.3.15/zh/api/core/']?.pages);
console.log('Matching save keys after walk:', Object.keys(tree.byRoute).filter(k => k.includes('save-system')));

// Wire up subsection lists.
for (const route of Object.keys(tree.byRoute)) {
  if (route === '/') continue;
  const parts = route.split('/').filter(Boolean);
  parts.pop();
  const parentRoute = parts.length ? '/' + parts.join('/') + '/' : '/';
  if (!tree.byRoute[parentRoute]) {
    tree.byRoute[parentRoute] = { title: parts.length ? parts[parts.length - 1] : 'Home', pages: 0, subsections: [] };
  }
  tree.byRoute[parentRoute].subsections.push(route);
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

console.log(`Leaf markdown files seen: ${leafCount}`);
console.log('Sample save-system pages:', tree.byRoute['/v1.3.15/zh/api/save-system/']?.pages);
console.log('Sample core pages:', tree.byRoute['/v1.3.15/zh/api/core/']?.pages);

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, JSON.stringify(tree, null, 2), 'utf8');
console.log(`Wrote ${OUT_PATH}`);
console.log(`Sections: ${Object.keys(tree.byRoute).length}`);
