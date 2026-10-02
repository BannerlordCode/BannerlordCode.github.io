// DEPRECATED — do not use as part of the tool contract.
//
// Recomputes every `children` array in data/navigation.json from the `parent`
// pointers. Keeps navigation.json self-consistent but does NOT check that a route
// has a content page, so it happily preserves dead routes.
//
// Kept for historical reference only. Use `node tools/generate-section-tree.mjs --check`,
// which reports dead routes (NAVIGATION_ROUTES_DEAD) without rewriting anything.

import { join } from 'node:path';

const NAV = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io/data/navigation.json';
const nav = JSON.parse(readFileSync(NAV, 'utf8'));
const routes = nav.routes;

// Recompute children from parent pointers (guarantees reciprocity).
const childrenOf = {};
for (const route of Object.keys(routes)) childrenOf[route] = [];
for (const route of Object.keys(routes)) {
  const parent = routes[route].parent;
  if (parent && routes[parent]) childrenOf[parent].push(route);
}
for (const route of Object.keys(routes)) {
  const seen = new Set();
  const uniq = childrenOf[route].filter((c) => (seen.has(c) ? false : (seen.add(c), true)));
  uniq.sort();
  routes[route].children = uniq;
}
writeFileSync(NAV, JSON.stringify(nav, null, 2) + '\n', 'utf8');
console.log('Fixed reciprocal edges for', Object.keys(routes).length, 'routes');
