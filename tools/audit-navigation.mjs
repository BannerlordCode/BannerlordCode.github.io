#!/usr/bin/env node

// Read-only navigation invariant audit. It compares the generated section tree
// with the content filesystem and checks reciprocal edges in the curated graph.

import { readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildSectionTree } from './generate-section-tree.mjs';

const SCRIPT_DIR = resolve(fileURLToPath(new URL('.', import.meta.url)));
const REPO_ROOT = join(SCRIPT_DIR, '..');

function argValue(args, name, fallback) {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
}

function readJson(path, label) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (error) {
    throw new Error(`Unable to read ${label} ${path}: ${error.message}`);
  }
}

function parentRoute(route) {
  if (route === '/') return null;
  const parts = route.split('/').filter(Boolean);
  parts.pop();
  return parts.length ? `/${parts.join('/')}/` : '/';
}

function compareArrays(actual, expected) {
  return actual.length === expected.length && actual.every((value, index) => value === expected[index]);
}

function collectLeafRoutes(contentRoot, dir = contentRoot, routes = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      collectLeafRoutes(contentRoot, full, routes);
      continue;
    }
    if (!entry.isFile() || !entry.name.endsWith('.md') || entry.name === '_index.md') continue;
    const rel = full.slice(contentRoot.length).replace(/\\/g, '/').replace(/^\/+/, '');
    routes.push(`/${rel.slice(0, -3)}/`);
  }
  return routes;
}

function checkSectionTree(contentRoot, tree, errors) {
  const expected = buildSectionTree(contentRoot).byRoute;
  const actual = tree?.byRoute;
  if (!actual || typeof actual !== 'object') {
    errors.push('section-tree.json is missing a byRoute object');
    return { expectedRoutes: Object.keys(expected), actualRoutes: [] };
  }

  const expectedRoutes = Object.keys(expected).sort();
  const actualRoutes = Object.keys(actual).sort();
  for (const route of expectedRoutes) {
    if (!Object.prototype.hasOwnProperty.call(actual, route)) errors.push(`missing section route ${route}`);
  }
  for (const route of actualRoutes) {
    if (!Object.prototype.hasOwnProperty.call(expected, route)) errors.push(`stale section route ${route}`);
  }

  for (const route of expectedRoutes) {
    if (!actual[route]) continue;
    const expectedSection = expected[route];
    const actualSection = actual[route];
    if (actualSection.pages !== expectedSection.pages) {
      errors.push(`pages mismatch ${route}: expected ${expectedSection.pages}, got ${actualSection.pages}`);
    }
    const expectedChildren = [...expectedSection.subsections].sort();
    const actualChildren = Array.isArray(actualSection.subsections) ? [...actualSection.subsections].sort() : [];
    if (!compareArrays(actualChildren, expectedChildren)) {
      errors.push(`subsections mismatch ${route}`);
    }
  }

  return { expectedRoutes, actualRoutes };
}

function checkNavigationGraph(nav, errors, actualRoutes, leafRoutes) {
  const routes = nav?.routes;
  if (!routes || typeof routes !== 'object') {
    errors.push('navigation.json is missing a routes object');
    return 0;
  }
  const routeSet = new Set([...actualRoutes, ...leafRoutes]);
  const keys = Object.keys(routes);
  for (const route of keys) {
    if (!routeSet.has(route)) errors.push(`navigation route is not a content section: ${route}`);
    const node = routes[route] || {};
    const children = Array.isArray(node.children) ? node.children : [];
    if (new Set(children).size !== children.length) errors.push(`duplicate navigation children ${route}`);
    if (route !== '/' && node.parent === null) errors.push(`navigation route has no parent ${route}`);
    if (node.parent !== null && node.parent !== undefined) {
      if (!routes[node.parent]) errors.push(`navigation parent is missing ${route} -> ${node.parent}`);
      else if (!(routes[node.parent].children || []).includes(route)) {
        errors.push(`navigation parent does not reference child ${node.parent} -> ${route}`);
      }
    }
    for (const child of children) {
      if (!routes[child]) errors.push(`navigation child is missing ${route} -> ${child}`);
      else if (routes[child].parent !== route) errors.push(`navigation child has wrong parent ${route} -> ${child}`);
    }
  }

  const state = new Map();
  function visit(route) {
    if (state.get(route) === 'active') {
      errors.push(`navigation cycle detected at ${route}`);
      return;
    }
    if (state.get(route) === 'done') return;
    state.set(route, 'active');
    for (const child of routes[route]?.children || []) if (routes[child]) visit(child);
    state.set(route, 'done');
  }
  for (const route of keys) visit(route);
  return keys.length;
}

function checkLandingDistance(expected, errors, maxAllowed) {
  let maxDistance = 0;
  let maxRoute = '/';
  for (const route of Object.keys(expected)) {
    const parts = route.split('/').filter(Boolean);
    if (parts.length < 2 || !/^v\d/.test(parts[0])) continue;
    const landing = `/${parts[0]}/${parts[1]}/`;
    let cursor = route;
    let distance = 0;
    while (cursor && cursor !== landing) {
      cursor = parentRoute(cursor);
      distance++;
      if (distance > maxAllowed + 1) break;
    }
    if (cursor !== landing) {
      errors.push(`section has no language landing ancestor ${route}`);
      continue;
    }
    if (distance > maxDistance) {
      maxDistance = distance;
      maxRoute = route;
    }
  }
  if (maxDistance > maxAllowed) errors.push(`landing distance exceeds ${maxAllowed}: ${maxRoute} (${maxDistance})`);
  return maxDistance;
}

function main() {
  const args = process.argv.slice(2);
  if (args.includes('--help')) {
    console.log('Usage: node tools/audit-navigation.mjs [--content-root DIR] [--section-tree FILE] [--navigation FILE]');
    return;
  }

  const contentRoot = resolve(argValue(args, '--content-root', join(REPO_ROOT, 'content')));
  const treePath = resolve(argValue(args, '--section-tree', join(REPO_ROOT, 'data', 'section-tree.json')));
  const navPath = resolve(argValue(args, '--navigation', join(REPO_ROOT, 'data', 'navigation.json')));
  const errors = [];
  let tree;
  let nav;
  try {
    tree = readJson(treePath, 'section tree');
    nav = readJson(navPath, 'navigation graph');
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
    return;
  }

  const { expectedRoutes, actualRoutes } = checkSectionTree(contentRoot, tree, errors);
  const leafRoutes = collectLeafRoutes(contentRoot);
  const navRoutes = checkNavigationGraph(nav, errors, expectedRoutes, leafRoutes);
  const maxDistance = checkLandingDistance(buildSectionTree(contentRoot).byRoute, errors, 3);

  console.log(`CONTENT_SECTIONS=${expectedRoutes.length}`);
  console.log(`TREE_SECTIONS=${actualRoutes.length}`);
  console.log(`CONTENT_LEAVES=${leafRoutes.length}`);
  console.log(`NAV_ROUTES=${navRoutes}`);
  console.log(`MAX_LANDING_DISTANCE=${maxDistance}`);
  if (errors.length) {
    console.error(`NAVIGATION_ERRORS=${errors.length}`);
    for (const error of errors.slice(0, 50)) console.error(`- ${error}`);
    if (errors.length > 50) console.error(`- ... ${errors.length - 50} more`);
    process.exitCode = 1;
    return;
  }
  console.log('NAVIGATION_OK');
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) main();
