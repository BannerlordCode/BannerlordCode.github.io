#!/usr/bin/env node
// tools/_v146_nav-check.mjs
//
// Validates the v1.4.6 navigation contract owned by worker-10.
//
// Gate 1  dir map parsed fail-closed: schemaVersion assertion + required-key assertion
//         (never silently ignore an unknown shape).
// Gate 2  every required route resolves to a real content file.
// Gate 3  every required edge (parent / child / sibling / language / cross-version) has
//         both ends present.
// Gate 4  every link on worker-10's own pages resolves ROUTE-RELATIVELY: one '..' pops
//         exactly one route segment. fs.existsSync on the joined path is NOT a valid check,
//         because wrong-level links exist as files.
// Gate 5  reverse assertions on the same links (self-reference, 'content/' leakage,
//         './' inside a leaf page, single-level '../<bucket>/<Name>' inside an api leaf,
//         a cross-version link that does not pop its full route depth) plus every
//         api/<bucket>/ reference being a bucket the dir map can actually produce.
// Gate 6  the dir-map contract above (identical to gate 1; both are asserted).
//
// Usage:  node tools/_v146_nav-check.mjs
//         AUDIT_LINKS=0 node tools/_v146_nav-check.mjs   (skip the page-link gates)
//
// Exit codes: 0 clean · 1 contract/link violation · 2 fail-closed dir-map parse.

import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT_ROOT = join(REPO_ROOT, 'content');
const SPEC_PATH = join(REPO_ROOT, 'tools', '_v146_nav-spec.json');
const DIR_MAP_PATH = join(REPO_ROOT, 'tools', '_dir-map-canonical.json');
const SLASH = '/';

const spec = JSON.parse(readFileSync(SPEC_PATH, 'utf8'));

function failClosed(message) {
  console.error(`\nFAIL-CLOSED: ${message}`);
  process.exit(2);
}

// ------------------------------------------------- Gate 1/6: dir map, fail-closed
// The dir map is a Boss-owned artifact with an explicit parse contract. Assert the schema
// version and every key we consume; abort on an unknown shape. A consumer that silently
// ignores an unrecognised key is how an entire override layer once vanished unnoticed.
const REQUIRED_DIR_MAP_KEYS = ['rules', 'defaultDir', 'entryPointDirs', 'linkRules', 'excludeNamespaces', 'excludeSuffixes', 'resolutionOrder'];

function loadDirMap() {
  const raw = JSON.parse(readFileSync(DIR_MAP_PATH, 'utf8'));
  const expected = spec.dirMapSchemaVersion;
  if (typeof expected !== 'number') failClosed(`spec.dirMapSchemaVersion must be a number (got ${JSON.stringify(expected)})`);
  if (raw.schemaVersion !== expected) {
    failClosed(`dir map schemaVersion ${raw.schemaVersion} != spec.dirMapSchemaVersion ${expected}. Re-read tools/_dir-map-canonical.json; update the spec deliberately instead of degrading silently.`);
  }
  for (const key of REQUIRED_DIR_MAP_KEYS) {
    if (!(key in raw)) failClosed(`dir map is missing required key "${key}"`);
  }
  if (!Array.isArray(raw.rules) || raw.rules.some((r) => typeof r.prefix !== 'string' || typeof r.dir !== 'string')) {
    failClosed('dir map rules[] has an unexpected shape');
  }
  if (typeof raw.defaultDir !== 'string') failClosed('dir map defaultDir must be a string');
  if (typeof raw.linkRules !== 'object' || !Array.isArray(raw.linkRules.forbidden)) failClosed('dir map linkRules.forbidden is missing');
  if (typeof raw.entryPointDirs !== 'object') failClosed('dir map entryPointDirs must be an object of typeName -> dir');
  return raw;
}

const dirMap = loadDirMap();
const canonicalBuckets = new Set([
  ...dirMap.rules.map((r) => r.dir),
  dirMap.defaultDir,
  // entryPointDirs mixes real overrides (key = type name, value = bucket) with _-prefixed
  // prose keys (_match/_why/_parityGaps/...). Take only unprefixed keys whose value looks
  // like a bucket slug; a prose value would otherwise become a phantom bucket.
  ...Object.entries(dirMap.entryPointDirs)
    .filter(([k, v]) => !k.startsWith('_') && typeof v === 'string' && /^[a-z][a-z0-9-]*$/.test(v))
    .map(([, v]) => v),
]);
const overriddenTypes = new Set(Object.keys(dirMap.entryPointDirs).filter((k) => !k.startsWith('_')));
console.log(`dir map OK: schemaVersion=${dirMap.schemaVersion} rules=${dirMap.rules.length} buckets=${canonicalBuckets.size} overrides=${overriddenTypes.size}`);

const normalize = (p) => p.replace(/\\/g, SLASH);

/** Route ("/v1.4.6/zh/") -> existing content file (repo-relative), or null. */
function routeToFile(route) {
  const rel = route.replace(/^\//, '');
  for (const c of [join(CONTENT_ROOT, rel + '_index.md'), join(CONTENT_ROOT, rel.replace(/\/$/, '') + '.md')]) {
    if (existsSync(c)) return normalize(c.slice(REPO_ROOT.length + 1));
  }
  return null;
}

/** Markdown file -> route. Every page route is its own directory, trailing slash. */
function fileToRoute(file) {
  const rel = normalize(file).replace(/^content\//, '').replace(/\.md$/, '');
  return SLASH + (rel.endsWith('_index') ? rel.slice(0, -'_index'.length) : rel + SLASH);
}

/** Route-relative resolution: one '..' pops exactly one route segment. */
function resolveTarget(fromRoute, href) {
  const h = href.split('#')[0];
  if (!h) return null;
  let rel;
  if (h.startsWith(SLASH)) rel = h.replace(/^\//, '');
  else rel = normalize(join(fromRoute.endsWith(SLASH) ? fromRoute : fromRoute + SLASH, h)).replace(/^\//, '');
  return normalize(join(CONTENT_ROOT, rel)).replace(/[\\/]+$/, '');
}

const targetExists = (t) => !!t && (existsSync(t + '.md') || existsSync(join(t, '_index.md')));

/** Route segments of the page itself; popToSiteRoot == that count. */
const routeDepth = (route) => normalize(route).split('/').filter(Boolean).length;

function pageLinks(file) {
  const text = readFileSync(join(REPO_ROOT, file), 'utf8').replace(/```[\s\S]*?```/g, '');
  const out = [];
  for (const m of text.matchAll(/\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
    if (!/^(https?:|mailto:|#)/.test(m[1])) out.push(m[1]);
  }
  return out;
}

const isLeaf = (page) => !page.endsWith('/_index.md');
const isApiPage = (page) => page.includes('/api/');

// ------------------------------------------------- Gate 2: required routes
let missingRoutes = 0;
console.log('\n== required routes ==');
for (const r of spec.required_routes) {
  const file = routeToFile(r.route);
  if (file === normalize(r.file)) console.log(`  ok      ${r.route} -> ${file}`);
  else {
    missingRoutes++;
    console.log(`  MISSING ${r.route}  expected ${normalize(r.file)}  (${r.pending ? 'declared pending: ' + r.owner : 'required'})`);
  }
}

// ------------------------------------------------- Gate 3: required edges
const pendingPrefixes = spec.pending_link_policy.allowed_missing_prefixes;
const isPending = (rel) => pendingPrefixes.some((p) => rel.startsWith(p));
let missingEdges = 0;
console.log('\n== required edges (bidirectional reachability) ==');
for (const e of spec.required_edges) {
  const from = routeToFile(e.from);
  const to = routeToFile(e.to);
  if (from && to) console.log(`  ok      ${e.kind}: ${e.from} -> ${e.to}`);
  else {
    missingEdges++;
    console.log(`  MISSING ${e.kind}: ${e.from} -> ${e.to}  (absent: ${[!from && e.from, !to && e.to].filter(Boolean).join(', ')}${e.pending ? ', declared pending' : ''})`);
  }
}

// ------------------------------------------------- Gate 4/5: owned pages
let ok = 0;
let pending = 0;
let broken = 0;
const brokenList = [];
const pendingList = [];
const violations = [];
const bucketsUsed = new Set();

console.log('\n== links on worker-10 pages (route-relative gate) ==');
if (process.env.AUDIT_LINKS === '0') {
  console.log('  (skipped, AUDIT_LINKS=0)');
} else {
  for (const page of spec.owned_pages) {
    if (!existsSync(join(REPO_ROOT, page))) {
      console.log(`  MISSING PAGE ${page}`);
      broken++;
      continue;
    }
    const fromRoute = fileToRoute(page);
    const depth = routeDepth(fromRoute);
    for (const href of pageLinks(page)) {
      const target = resolveTarget(fromRoute, href);
      const rel = normalize(target).slice(normalize(CONTENT_ROOT).length + 1);

      // --- existence (route-relative)
      if (targetExists(target)) ok++;
      else if (isPending(rel)) { pending++; pendingList.push(`${page} -> ${href}`); }
      else { broken++; brokenList.push(`${page} -> ${href}  (resolves to content/${rel})`); }

      // --- reverse assertions
      if (/content\//.test(href)) violations.push(`repo-root-relative leakage: ${page} -> ${href}`);
      if (href === '.' || href === './' || normalize(target) === normalize(CONTENT_ROOT)) continue;
      if (normalize(target) === normalize(join(CONTENT_ROOT, fromRoute.replace(/^\//, '').replace(/\/$/, '')))) {
        violations.push(`self-reference: ${page} -> ${href}`);
      }
      if (isLeaf(page) && href.startsWith('./')) violations.push(`'./' inside a leaf page: ${page} -> ${href}`);
      if (isApiPage(page) && /^\.\.\/[a-z0-9-]+\/[A-Za-z]/.test(href)) {
        violations.push(`single-level cross-bucket link in an api leaf (one level short): ${page} -> ${href}`);
      }
      if (isLeaf(page) && /^\.\.\/[a-z0-9-]+\/[A-Za-z]/.test(href) && !isApiPage(page) && !/^\.\.\/\.\.\//.test(href)) {
        // architecture -> api/<bucket>/ must be two levels; a single level here is one short
        violations.push(`possible one-level-short cross-section link: ${page} -> ${href}`);
      }
      // --- cross-version links must pop the full route depth
      if (/^\.\.\/(\.\.\/)*v\d/.test(href)) {
        const pops = (href.match(/\.\.\//g) || []).length;
        if (pops !== depth) violations.push(`cross-version link pops ${pops} of ${depth} route segments: ${page} -> ${href}`);
      }
      // --- api bucket must be canonical
      const m = href.match(/^\.\.\/api\/([a-z0-9-]+)\//) || href.match(/^\.\.\/\.\.\/api\/([a-z0-9-]+)\//);
      if (m) {
        bucketsUsed.add(m[1]);
        if (!canonicalBuckets.has(m[1])) violations.push(`non-canonical api bucket "${m[1]}" (not producible by _dir-map-canonical.json): ${page} -> ${href}`);
      }
    }
  }
  console.log(`  ok=${ok} pending=${pending} broken=${broken}`);
}

console.log('\n== summary ==');
console.log(`ROUTES_MISSING=${missingRoutes}`);
console.log(`EDGES_MISSING=${missingEdges}`);
console.log(`OWNED_LINKS_OK=${ok}`);
console.log(`OWNED_LINKS_PENDING=${pending}`);
console.log(`OWNED_LINKS_BROKEN=${broken}`);
console.log(`LINK_RULE_VIOLATIONS=${violations.length}`);
console.log(`API_BUCKETS_REFERENCED=${[...bucketsUsed].sort().join(',') || '(none)'}`);
if (pendingList.length) {
  console.log('\n-- pending targets (owned by the api batch) --');
  for (const l of pendingList) console.log(`  ${l}`);
}
if (brokenList.length) {
  console.log('\n-- broken links (must be 0) --');
  for (const l of brokenList) console.log(`  ${l}`);
}
if (violations.length) {
  console.log('\n-- link rule violations (must be 0) --');
  for (const l of violations) console.log(`  ${l}`);
}

process.exitCode = missingRoutes + missingEdges + broken + violations.length > 0 ? 1 : 0;