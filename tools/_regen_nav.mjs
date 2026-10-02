// DEPRECATED — do not use as part of the tool contract.
//
// Rewrites data/navigation.json from the content tree via generate-section-tree.mjs.
// navigation.json is hand-maintained by decision (lead-4, 2026-10-02): a generator
// would have to preserve every hand-tuned label/group/collapsed/order, which costs
// more than it buys. Kept for historical reference only.
//
// Losses if run: line 28 gives any NEW route `group: null`, and a `group: null`
// node under `/<version>/<lang>/` is invisible in the sidebar
// (templates/macros/sidebar.html matches on `node.group == group_key`).
// Lines 38 and 40 copy `meta` and `roots` verbatim, so it never adds a version.
//
// Use `node tools/generate-section-tree.mjs --check` instead: it reports dead
// routes in data/navigation.json without rewriting it.

import { join } from 'node:path';
import { buildSectionTree } from './generate-section-tree.mjs';

const REPO_ROOT = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const NAV = join(REPO_ROOT, 'data/navigation.json');

const tree = buildSectionTree(join(REPO_ROOT, 'content'));
const byRoute = tree.byRoute;

function parentRoute(route) {
  if (route === '/') return null;
  const parts = route.split('/').filter(Boolean);
  parts.pop();
  return parts.length ? `/${parts.join('/')}/` : '/';
}

const existing = JSON.parse(readFileSync(NAV, 'utf8'));
const existingRoutes = existing.routes || {};

const newRoutes = {};
for (const route of Object.keys(byRoute)) {
  const section = byRoute[route];
  const ex = existingRoutes[route];
  const label = ex?.label || { zh: section.title || route, en: section.title || route };
  newRoutes[route] = {
    label,
    group: ex?.group ?? null,
    collapsed: ex?.collapsed ?? false,
    order: ex?.order ?? 0,
    parent: parentRoute(route),
    children: [...(section.subsections || [])],
  };
}

const out = {
  schema_version: existing.schema_version || '1.0.0',
  meta: existing.meta || {},
  groups: existing.groups || {},
  roots: existing.roots || ['/'],
  routes: newRoutes,
};

writeFileSync(NAV, JSON.stringify(out, null, 2) + '\n', 'utf8');
console.log('Wrote navigation.json with', Object.keys(newRoutes).length, 'routes (was', Object.keys(existingRoutes).length, ')');
console.log('v1.4.5 routes now:', Object.keys(newRoutes).filter((k) => k.includes('v1.4.5')).length);
console.log('has native-1.3.15-src v1.4.5:', Boolean(newRoutes['/v1.4.5/zh/native-1.3.15-src/']));
