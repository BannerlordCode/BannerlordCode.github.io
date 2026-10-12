// Generate sharded prev/next navigation data for the Zola site.
//
//   node tools/gen-nav-shards.mjs            # write data/nav/*.json
//   node tools/gen-nav-shards.mjs --check    # verify shards are up to date
//
// Inputs (read-only):
//   data/page-navigation.json  — leaf pages: { title, parent, previous, next }
//   data/navigation.json       — sections:   { label, parent, children, ... }
//
// Output:
//   data/nav/<shard>.json      — { routes: {…}, sections: {…} } with
//                                LOWERCASED route keys (template lowercases
//                                page.path before lookup, so the two sides
//                                always agree regardless of path casing).
//
// Shard rule (MUST stay in sync with templates/macros/page-navigation.html):
//   segs  = route.split('/').filter(Boolean)
//   par   = segs[0 .. n-1)              # parent directory of the route
//   P     = par[0 .. 4)                 # truncate to 4 segments
//   base  = P.join('-')
//   if par.length >= 4:  shard = base + '-' + segs[n-1].slice(0,2).toLowerCase()
//   else:                shard = base || 'root'
//
// The content/ tree is also walked so every page/section route gets a shard
// file even when it is missing from stale data (empty shard => template
// renders nothing, no crash).

import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const PAGE_NAV_PATH = join(REPO_ROOT, 'data', 'page-navigation.json');
const NAVIGATION_PATH = join(REPO_ROOT, 'data', 'navigation.json');
const CONTENT_ROOT = join(REPO_ROOT, 'content');
const OUT_DIR = join(REPO_ROOT, 'data', 'nav');

const MAX_SHARD_BYTES = 200 * 1024;

function argValue(args, name, fallback) {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
}

function readJson(path) {
  if (!existsSync(path)) return null;
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (error) {
    throw new Error(`Unable to parse ${path}: ${error.message}`);
  }
}

// Shard rule — keep in sync with the Tera derivation in page-navigation.html.
export function shardName(route) {
  const segs = route.split('/').filter(Boolean);
  const n = segs.length;
  const par = segs.slice(0, n - 1);
  const P = par.slice(0, 4);
  const base = P.join('-');
  if (par.length >= 4) {
    const suffix = segs[n - 1].slice(0, 2).toLowerCase();
    return `${base}-${suffix}`;
  }
  return base === '' ? 'root' : base;
}

function walkContentRoutes(contentRoot) {
  const routes = [];
  if (!existsSync(contentRoot)) return routes;
  const walk = (dir) => {
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith('.md')) {
        const rel = full
          .slice(contentRoot.length + 1)
          .replace(/\\/g, '/')
          .replace(/\.md$/u, '');
        if (rel === '_index') {
          routes.push('/');
        } else if (rel.endsWith('/_index')) {
          const dir = rel.slice(0, -'/\_index'.length).replace(/\/+$/u, '');
          routes.push(dir ? `/${dir}/` : '/');
        } else {
          routes.push(`/${rel}/`);
        }
      }
    }
  };
  walk(contentRoot);
  return routes;
}

export function buildShards() {
  const pageNav = readJson(PAGE_NAV_PATH) || { routes: {} };
  const navigation = readJson(NAVIGATION_PATH) || { routes: {} };

  const shards = new Map();
  const ensure = (name) => {
    if (!shards.has(name)) shards.set(name, { routes: {}, sections: {} });
    return shards.get(name);
  };

  // Leaf entries from page-navigation.json (keys lowercased for lookup).
  for (const [route, entry] of Object.entries(pageNav.routes || {})) {
    ensure(shardName(route)).routes[route.toLowerCase()] = entry;
  }

  // Section entries from navigation.json, with parent/children labels
  // denormalized so the template never needs cross-shard lookups.
  for (const [route, sec] of Object.entries(navigation.routes || {})) {
    const parentLabel = sec?.parent
      ? navigation.routes[sec.parent]?.label ?? null
      : null;
    const children = (sec?.children || [])
      .map((childRoute) => ({
        route: childRoute,
        label: navigation.routes[childRoute]?.label ?? null,
      }))
      .filter((child) => child.label !== null);
    ensure(shardName(route)).sections[route.toLowerCase()] = {
      label: sec?.label ?? null,
      parent: sec?.parent ?? null,
      parent_label: parentLabel,
      children,
    };
  }

  // Ensure every content route has a shard file (empty if no data).
  for (const route of walkContentRoutes(CONTENT_ROOT)) {
    ensure(shardName(route));
  }

  return shards;
}

function renderShard(shard) {
  return `${JSON.stringify(shard)}\n`;
}

function stats(shards) {
  const rows = [];
  let total = 0;
  for (const [name, shard] of shards) {
    const bytes = renderShard(shard).length;
    rows.push({
      name,
      bytes,
      leaves: Object.keys(shard.routes).length,
      sections: Object.keys(shard.sections).length,
    });
    total += bytes;
  }
  rows.sort((a, b) => b.bytes - a.bytes);
  return { rows, total };
}

function main() {
  const args = process.argv.slice(2);
  const shards = buildShards();
  const { rows, total } = stats(shards);
  const over = rows.filter((r) => r.bytes > MAX_SHARD_BYTES);

  if (args.includes('--check')) {
    let stale = 0;
    let missing = 0;
    for (const [name, shard] of shards) {
      const file = join(OUT_DIR, `${name}.json`);
      if (!existsSync(file)) {
        missing += 1;
        continue;
      }
      if (readFileSync(file, 'utf8') !== renderShard(shard)) stale += 1;
    }
    if (missing > 0 || stale > 0) {
      console.error(`NAV_SHARDS_STALE missing=${missing} stale=${stale}`);
      process.exitCode = 1;
      return;
    }
    console.log(`NAV_SHARDS_OK shards=${rows.length}`);
    return;
  }

  mkdirSync(OUT_DIR, { recursive: true });
  for (const [name, shard] of shards) {
    writeFileSync(join(OUT_DIR, `${name}.json`), renderShard(shard), 'utf8');
  }

  const max = rows[0];
  console.log(`Wrote ${rows.length} shards to ${OUT_DIR}`);
  console.log(`Total size: ${(total / 1024).toFixed(1)} KB`);
  console.log(`Max shard: ${(max.bytes / 1024).toFixed(1)} KB (${max.name})`);
  console.log(`Shards over ${MAX_SHARD_BYTES / 1024} KB: ${over.length}`);
  console.log(`Empty shards: ${rows.filter((r) => r.leaves === 0 && r.sections === 0).length}`);
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  main();
}
