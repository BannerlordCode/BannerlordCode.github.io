#!/usr/bin/env node
// tools/_v146_nav-check.mjs
//
// Validates the v1.4.6 navigation contract described in tools/_v146_nav-spec.json:
//   1. every required route resolves to a real content file
//   2. every required edge (parent / child / sibling / cross-version) has both ends present
//   3. every link on worker-10's own pages resolves, except links into the parallel
//      worker's api/** sections, which are reported separately as PENDING
//
// Usage:  node tools/_v146_nav-check.mjs            (checks the spec contract)
//         AUDIT_LINKS=0 node tools/_v146_nav-check.mjs   (spec contract only)
//
// Exit code 1 when a required route/edge is missing or an owned page links to
// something missing outside the allowed pending prefixes.

import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT_ROOT = join(REPO_ROOT, 'content');
const SPEC_PATH = join(REPO_ROOT, 'tools', '_v146_nav-spec.json');

const spec = JSON.parse(readFileSync(SPEC_PATH, 'utf8'));
const SLASH = '/';

function normalize(p) {
  return p.replace(/\\/g, SLASH);
}

/** Route ("/v1.4.6/zh/") -> existing content file, or null. */
function routeToFile(route) {
  const rel = route.replace(/^\//, '');
  const candidates = [join(CONTENT_ROOT, rel + '_index.md'), join(CONTENT_ROOT, rel.replace(/\/$/, '') + '.md')];
  for (const c of candidates) if (existsSync(c)) return normalize(c.slice(REPO_ROOT.length + 1));
  return null;
}

/** Markdown file -> route (route is treated as a directory, trailing slash). */
function fileToRoute(file) {
  const rel = normalize(file).replace(/^content\//, '').replace(/\.md$/, '');
  return SLASH + (rel.endsWith('_index') ? rel.slice(0, -'_index'.length) : rel + SLASH);
}

/** Same resolution rule as tools/audit-links.mjs (url mode). */
function resolveTarget(fromRoute, href) {
  let h = href.split('#')[0];
  if (!h) return null;
  let rel;
  if (h.startsWith(SLASH)) rel = h.replace(/^\//, '');
  else rel = normalize(join(fromRoute.endsWith(SLASH) ? fromRoute : fromRoute + SLASH, h)).replace(/^\//, '');
  return normalize(join(CONTENT_ROOT, rel)).replace(/[\\/]+$/, '');
}

function targetExists(target) {
  if (!target) return false;
  return existsSync(target + '.md') || existsSync(join(target, '_index.md'));
}

function pageLinks(file) {
  const text = readFileSync(join(REPO_ROOT, file), 'utf8');
  const out = [];
  const fence = text.replace(/```[\s\S]*?```/g, '');
  for (const m of fence.matchAll(/\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
    const href = m[1];
    if (/^(https?:|mailto:|#)/.test(href)) continue;
    out.push(href);
  }
  return out;
}

// ---------------------------------------------------------------- 1. routes
let missingRoutes = 0;
console.log('== required routes ==');
for (const r of spec.required_routes) {
  const file = routeToFile(r.route);
  const expected = normalize(r.file);
  const ok = file === expected;
  if (!ok) {
    missingRoutes++;
    console.log(`  MISSING ${r.route}  expected ${expected}${r.pending ? '  (pending: ' + r.owner + ')' : ''}`);
  } else {
    console.log(`  ok      ${r.route}  -> ${file}`);
  }
}

// ---------------------------------------------------------------- 2. edges
const pendingPrefixes = spec.pending_link_policy.allowed_missing_prefixes;
const isPending = (route) => pendingPrefixes.some((p) => route.startsWith(p));

let missingEdges = 0;
console.log('\n== required edges (bidirectional reachability) ==');
for (const e of spec.required_edges) {
  const from = routeToFile(e.from);
  const to = routeToFile(e.to);
  if (!from || !to) {
    const which = [!from && e.from, !to && e.to].filter(Boolean).join(', ');
    missingEdges++;
    console.log(`  MISSING ${e.kind}: ${e.from} -> ${e.to}   (absent: ${which}${e.pending ? ', declared pending' : ''})`);
  } else {
    console.log(`  ok      ${e.kind}: ${e.from} -> ${e.to}`);
  }
}

// ---------------------------------------------------------------- 3. own pages
let ok = 0;
let broken = 0;
let pending = 0;
const brokenList = [];
const pendingList = [];
console.log('\n== links on worker-10 pages ==');
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
    for (const href of pageLinks(page)) {
      const target = resolveTarget(fromRoute, href);
      if (targetExists(target)) {
        ok++;
      } else {
        const rel = normalize(target).slice(normalize(CONTENT_ROOT).length + 1);
        if (isPending(rel)) {
          pending++;
          pendingList.push(`${page} -> ${href}`);
        } else {
          broken++;
          brokenList.push(`${page} -> ${href}   (resolved to content/${rel})`);
        }
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
if (pendingList.length) {
  console.log('\n-- pending targets (owned by the api worker) --');
  for (const l of pendingList) console.log(`  ${l}`);
}
if (brokenList.length) {
  console.log('\n-- broken (must be 0) --');
  for (const l of brokenList) console.log(`  ${l}`);
}

process.exitCode = missingRoutes + missingEdges + broken > 0 ? 1 : 0;