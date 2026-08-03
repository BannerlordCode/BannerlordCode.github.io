// Pre-compute the section/page-count tree used by the sidebar.
//
//   node tools/generate-section-tree.mjs
//   node tools/generate-section-tree.mjs --check
//   node tools/generate-section-tree.mjs --content-root <dir> --out <file>

import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const DEFAULT_CONTENT_ROOT = join(REPO_ROOT, 'content');
const DEFAULT_OUT_PATH = join(REPO_ROOT, 'data', 'section-tree.json');

function argValue(args, name, fallback) {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
}

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

function walk(dir, cb) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  const sorted = entries.slice().sort((a, b) => {
    if (a.name === '_index.md') return -1;
    if (b.name === '_index.md') return 1;
    return a.name.localeCompare(b.name);
  });
  for (const entry of sorted) {
    if (entry.name.startsWith('.')) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, cb);
    else cb(full, entry.name);
  }
}

export function buildSectionTree(contentRoot) {
  const tree = { sections: {}, byRoute: {} };

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

  walk(contentRoot, (fullPath, name) => {
    const rel = relative(contentRoot, fullPath).replace(/\\/g, '/');
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

    const parentRel = dirname(rel).replace(/\\/g, '/');
    const parentRoute = '/' + (parentRel === '.' ? '' : parentRel + '/');
    const section = ensureRoute(parentRoute, parentRoute.split('/').filter(Boolean).pop());
    section.pages++;
  });

  for (const route of Object.keys(tree.byRoute)) {
    if (route === '/') continue;
    const parts = route.split('/').filter(Boolean);
    parts.pop();
    const parentRoute = parts.length ? '/' + parts.join('/') + '/' : '/';
    const parent = ensureRoute(parentRoute, parts.length ? parts[parts.length - 1] : 'Home');
    if (!parent.subsections.includes(route)) parent.subsections.push(route);
  }

  for (const route of Object.keys(tree.byRoute)) {
    tree.byRoute[route].subsections.sort((a, b) => {
      const wa = tree.byRoute[a]?.weight ?? 0;
      const wb = tree.byRoute[b]?.weight ?? 0;
      if (wa !== wb) return wa - wb;
      return a.localeCompare(b);
    });
  }

  return tree;
}

function main() {
  const args = process.argv.slice(2);
  if (args.includes('--help')) {
    console.log('Usage: node tools/generate-section-tree.mjs [--content-root DIR] [--out FILE] [--check]');
    return;
  }

  const contentRoot = resolve(argValue(args, '--content-root', DEFAULT_CONTENT_ROOT));
  const outPath = resolve(argValue(args, '--out', DEFAULT_OUT_PATH));
  const check = args.includes('--check');
  const tree = buildSectionTree(contentRoot);
  const rendered = JSON.stringify(tree, null, 2) + '\n';

  if (check) {
    if (!existsSync(outPath)) {
      console.error(`Section tree is missing: ${outPath}`);
      process.exitCode = 1;
      return;
    }
    let current;
    try {
      current = readFileSync(outPath, 'utf8');
    } catch (error) {
      console.error(`Unable to read section tree ${outPath}: ${error.message}`);
      process.exitCode = 1;
      return;
    }
    if (current !== rendered) {
      console.error(`Section tree is stale or mismatched: ${outPath}`);
      console.error(`Expected ${Object.keys(tree.byRoute).length} routes from ${contentRoot}`);
      process.exitCode = 1;
      return;
    }
    console.log(`SECTION_TREE_OK routes=${Object.keys(tree.byRoute).length}`);
    return;
  }

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, rendered, 'utf8');
  const totalPages = Object.values(tree.byRoute).reduce((sum, section) => sum + section.pages, 0);
  console.log(`Wrote ${outPath}`);
  console.log(`Sections: ${Object.keys(tree.byRoute).length}`);
  console.log(`Leaf pages counted: ${totalPages}`);
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  main();
}
