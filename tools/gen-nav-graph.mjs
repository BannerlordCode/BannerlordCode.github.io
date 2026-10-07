// Pre-generate the navigation graph for all pages under content/.
//
// Output: data/nav-graph.json — consumed by Zola templates via load_data().
// The graph is a route → navigation-node map. Each node describes where you
// can go from that page: parent, prev/next sibling, cross-language, cross-version,
// related entries, and the up-chain to root.
//
//   node tools/gen-nav-graph.mjs           # generate (write data/nav-graph.json)
//   node tools/gen-nav-graph.mjs --check   # verify current file is up-to-date
//   node tools/gen-nav-graph.mjs --out FILE
//
// Design: tools/_verify/nav-M-navgraph.md
// Schema: tools/_verify/nav-M-navgraph-schema.json
//
// IDEMPOTENT: same content tree → same routes structure (generated_at may differ).
// Does NOT overwrite data/navigation.json, data/page-navigation.json,
// data/relkey_map.json, or data/section-tree.json.

import {
  existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync,
} from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const DEFAULT_CONTENT_ROOT = join(REPO_ROOT, 'content');
const DEFAULT_OUT_PATH = join(REPO_ROOT, 'data', 'nav-graph.json');
const DEFAULT_NAVIGATION_PATH = join(REPO_ROOT, 'data', 'navigation.json');

// ── arg parsing ──────────────────────────────────────────────────────────────

function argValue(args, name, fallback) {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
}

// ── frontmatter ──────────────────────────────────────────────────────────────

function parseFrontmatter(text) {
  if (!text.startsWith('---')) return { title: null, weight: null };
  const end = text.indexOf('---', 3);
  if (end === -1) return { title: null, weight: null };
  const frontmatter = text.slice(3, end);
  const titleMatch = frontmatter.match(/^title:\s*["']?(.+?)["']?\s*$/mu);
  const weightMatch = frontmatter.match(/^weight:\s*(\d+)\s*$/mu);
  return {
    title: titleMatch ? titleMatch[1].trim().replace(/^["']|["']$/g, '') : null,
    weight: weightMatch ? Number.parseInt(weightMatch[1], 10) : null,
  };
}

// ── file walking ─────────────────────────────────────────────────────────────

function walk(dir, callback) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  entries
    .filter((entry) => !entry.name.startsWith('.'))
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((entry) => {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) walk(fullPath, callback);
      else callback(fullPath, entry.name);
    });
}

// ── route folding (§1.3 of _NAV-ARCHITECTURE.md) ────────────────────────────

function routeFor(relativePath, isIndex = false) {
  const withoutExtension = relativePath.replace(/\.md$/iu, '');
  if (isIndex) {
    const directory = withoutExtension.replace(/_index$/iu, '').replace(/\/+$/u, '');
    return directory ? `/${directory}/` : '/';
  }
  return `/${withoutExtension}/`;
}

// ── title fallback ───────────────────────────────────────────────────────────

function fallbackTitle(route) {
  const parts = route.split('/').filter(Boolean);
  return parts.at(-1) || 'Home';
}

// ── sibling sorting (same as generate-page-navigation.mjs) ───────────────────

function sortSiblings(a, b) {
  const weightA = a.weight ?? 0;
  const weightB = b.weight ?? 0;
  if (weightA !== weightB) return weightA - weightB;
  const titleOrder = a.title.localeCompare(b.title);
  return titleOrder || a.route.localeCompare(b.route);
}

// ── navigation.json reader ──────────────────────────────────────────────────

function readNavigation(path) {
  if (!path || !existsSync(path)) return { routes: {} };
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (error) {
    throw new Error(`Unable to parse navigation data ${path}: ${error.message}`);
  }
}

// ── parent route ─────────────────────────────────────────────────────────────

function parentRouteOf(route) {
  if (route === '/') return null;
  // Remove last segment: /a/b/c/ → /a/b/ (trailing slash preserved)
  const segments = route.split('/').filter(Boolean);
  segments.pop();
  return segments.length ? `/${segments.join('/')}/` : '/';
}

// ── up chain ─────────────────────────────────────────────────────────────────

function upChainOf(route, allRoutes) {
  const chain = [];
  let current = parentRouteOf(route);
  while (current !== null) {
    chain.push(current);
    if (current === '/') break;
    current = parentRouteOf(current);
  }
  return chain;
}

// ── cross-language / cross-version ───────────────────────────────────────────

function crossLanguageRoutesOf(route, allRoutes) {
  // Only for routes with at least 3 segments: /<version>/<lang>/<suffix>
  const parts = route.split('/').filter(Boolean);
  if (parts.length < 3) return [];
  const [version, lang, ...suffix] = parts;
  const suffixStr = suffix.join('/');
  const result = [];
  for (const otherLang of ['zh', 'en']) {
    if (otherLang === lang) continue;
    const candidate = `/${version}/${otherLang}/${suffixStr}/`;
    if (allRoutes.has(candidate)) result.push(candidate);
  }
  return result.sort();
}

function crossVersionRoutesOf(route, allRoutes, versions) {
  // Only for routes with at least 3 segments: /<version>/<lang>/<suffix>
  const parts = route.split('/').filter(Boolean);
  if (parts.length < 3) return [];
  const [version, lang, ...suffix] = parts;
  const suffixStr = suffix.join('/');
  const result = [];
  for (const otherVersion of versions) {
    if (otherVersion === version) continue;
    const candidate = `/${otherVersion}/${lang}/${suffixStr}/`;
    if (allRoutes.has(candidate)) result.push(candidate);
  }
  return result.sort();
}

// ── main builder ─────────────────────────────────────────────────────────────

export function buildNavGraph(contentRoot, navigationPath) {
  const navigation = readNavigation(navigationPath);

  // 1. Walk content/, collect all .md files
  const pages = []; // { route, type, path, title, weight }
  const unclassifiable = [];

  walk(contentRoot, (fullPath, name) => {
    const relativePath = relative(contentRoot, fullPath).replace(/\\/g, '/');
    if (name.endsWith('.md')) {
      const isIndex = name === '_index.md';
      const route = routeFor(relativePath, isIndex);
      const frontmatter = parseFrontmatter(readFileSync(fullPath, 'utf8'));
      pages.push({
        route,
        type: isIndex ? 'index' : 'leaf',
        path: `content/${relativePath}`,
        title: frontmatter.title || (isIndex ? fallbackTitle(route) : name.replace(/\.md$/iu, '')),
        weight: frontmatter.weight,
      });
    } else {
      unclassifiable.push({
        path: `content/${relativePath}`,
        reason: `not a markdown file (.${name.split('.').pop()})`,
      });
    }
  });

  // 2. Build route set for O(1) lookup
  const allRoutes = new Set(pages.map((p) => p.route));

  // 3. Group by parent for prev/next
  const byParent = new Map();
  for (const page of pages) {
    const parent = parentRouteOf(page.route);
    if (!byParent.has(parent)) byParent.set(parent, []);
    byParent.get(parent).push(page);
  }
  for (const siblings of byParent.values()) siblings.sort(sortSiblings);

  // 4. Build route → prev/next map
  const prevNext = new Map();
  for (const [parent, siblings] of byParent) {
    for (let i = 0; i < siblings.length; i++) {
      const prev = i > 0 ? siblings[i - 1] : null;
      const next = i < siblings.length - 1 ? siblings[i + 1] : null;
      prevNext.set(siblings[i].route, {
        prevRoute: prev ? prev.route : null,
        nextRoute: next ? next.route : null,
      });
    }
  }

  // 5. Count dangling parent routes (parentRoute points to a route not in the set)
  let danglingParentRoutes = 0;
  for (const page of pages) {
    const parent = parentRouteOf(page.route);
    if (parent !== null && !allRoutes.has(parent)) danglingParentRoutes++;
  }

  // 6. Derive the version set once (hoisted out of the per-page loop)
  const versions = new Set();
  for (const r of allRoutes) {
    const p = r.split('/').filter(Boolean);
    if (p.length >= 1 && p[0].startsWith('v')) versions.add(p[0]);
  }

  // 7. Count cross-language and cross-version edges
  let crossLanguageEdges = 0;
  let crossVersionEdges = 0;

  // 7. Build the routes map (sorted by route)
  const sortedPages = [...pages].sort((a, b) => a.route.localeCompare(b.route));
  const routes = {};
  for (const page of sortedPages) {
    const parent = parentRouteOf(page.route);
    const pn = prevNext.get(page.route);
    const crossLang = crossLanguageRoutesOf(page.route, allRoutes);
    const crossVer = crossVersionRoutesOf(page.route, allRoutes, versions);
    crossLanguageEdges += crossLang.length;
    crossVersionEdges += crossVer.length;

    // relatedRoutes from navigation.json children
    const navNode = navigation?.routes?.[page.route];
    const related = navNode?.children
      ? [...navNode.children].filter((r) => allRoutes.has(r)).sort()
      : [];

    routes[page.route] = {
      route: page.route,
      type: page.type,
      path: page.path,
      title: page.title,
      parentRoute: parent,
      prevRoute: pn.prevRoute,
      nextRoute: pn.nextRoute,
      upChain: upChainOf(page.route, allRoutes),
      crossLanguageRoutes: crossLang,
      crossVersionRoutes: crossVer,
      relatedRoutes: related,
    };
  }

  // 8. Counts
  const indexPages = pages.filter((p) => p.type === 'index').length;
  const leafPages = pages.filter((p) => p.type === 'leaf').length;

  return {
    schema_version: '1.0.0',
    generated_at: new Date().toISOString(),
    content_root: 'content',
    route_folding: {
      leaf: 'content/a/b/Foo.md → /a/b/Foo/',
      index: 'content/a/b/_index.md → /a/b/',
    },
    counts: {
      total_md_files: pages.length,
      index_pages: indexPages,
      leaf_pages: leafPages,
      txt_files: unclassifiable.length,
      unclassifiable: unclassifiable.length,
      routes: Object.keys(routes).length,
      cross_language_edges: crossLanguageEdges,
      cross_version_edges: crossVersionEdges,
      dangling_parent_routes: danglingParentRoutes,
    },
    routes,
    unclassifiable: unclassifiable.sort((a, b) => a.path.localeCompare(b.path)),
  };
}

// ── render ───────────────────────────────────────────────────────────────────

export function renderNavGraph(contentRoot, navigationPath) {
  const data = buildNavGraph(contentRoot, navigationPath);
  return `${JSON.stringify(data, null, 2)}\n`;
}

// ── main ─────────────────────────────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);
  if (args.includes('--help')) {
    console.log('Usage: node tools/gen-nav-graph.mjs [--content-root DIR] [--out FILE] [--navigation FILE] [--check]');
    return;
  }

  const contentRoot = resolve(argValue(args, '--content-root', DEFAULT_CONTENT_ROOT));
  const outPath = resolve(argValue(args, '--out', DEFAULT_OUT_PATH));
  const navigationPath = resolve(argValue(args, '--navigation', DEFAULT_NAVIGATION_PATH));
  const rendered = renderNavGraph(contentRoot, navigationPath);

  if (args.includes('--check')) {
    if (!existsSync(outPath)) {
      console.error(`Nav graph is missing: ${outPath}`);
      process.exitCode = 1;
      return;
    }
    const current = readFileSync(outPath, 'utf8');
    // Compare ignoring generated_at line for idempotency check
    const stripTs = (s) => s.replace(/"generated_at":\s*"[^"]*"/, '"generated_at": "<ts>"');
    if (stripTs(current) !== stripTs(rendered)) {
      console.error(`Nav graph is stale or mismatched: ${outPath}`);
      process.exitCode = 1;
      return;
    }
    const data = JSON.parse(rendered);
    console.log(`NAV_GRAPH_OK routes=${data.counts.routes} crossLang=${data.counts.cross_language_edges} crossVer=${data.counts.cross_version_edges}`);
    return;
  }

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, rendered, 'utf8');
  const data = JSON.parse(rendered);
  console.log(`Wrote ${outPath}`);
  console.log(`Routes indexed: ${data.counts.routes}`);
  console.log(`  index pages: ${data.counts.index_pages}`);
  console.log(`  leaf pages: ${data.counts.leaf_pages}`);
  console.log(`  unclassifiable: ${data.counts.unclassifiable}`);
  console.log(`  cross-language edges: ${data.counts.cross_language_edges}`);
  console.log(`  cross-version edges: ${data.counts.cross_version_edges}`);
  console.log(`  dangling parent routes: ${data.counts.dangling_parent_routes}`);
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  main();
}
