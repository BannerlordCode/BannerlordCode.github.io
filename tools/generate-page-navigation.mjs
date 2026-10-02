// Build contextual navigation for every Markdown leaf page.
//
//   node tools/generate-page-navigation.mjs
//   node tools/generate-page-navigation.mjs --check
//   node tools/generate-page-navigation.mjs --content-root DIR --out FILE

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
const DEFAULT_OUT_PATH = join(REPO_ROOT, 'data', 'page-navigation.json');
const DEFAULT_NAVIGATION_PATH = join(REPO_ROOT, 'data', 'navigation.json');

function argValue(args, name, fallback) {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
}

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

function routeFor(relativePath, isIndex = false) {
  const withoutExtension = relativePath.replace(/\.md$/iu, '');
  if (isIndex) {
    const directory = withoutExtension.replace(/_index$/iu, '').replace(/\/+$/u, '');
    return directory ? `/${directory}/` : '/';
  }
  return `/${withoutExtension}/`;
}

function fallbackTitle(route) {
  const parts = route.split('/').filter(Boolean);
  return parts.at(-1) || 'Home';
}

function routeLabel(navigation, route, language) {
  const node = navigation?.routes?.[route];
  return node?.label?.[language] || node?.label?.en || fallbackTitle(route);
}

function sortLeaves(a, b) {
  const weightA = a.weight ?? 0;
  const weightB = b.weight ?? 0;
  if (weightA !== weightB) return weightA - weightB;
  const titleOrder = a.title.localeCompare(b.title);
  return titleOrder || a.route.localeCompare(b.route);
}

function readNavigation(path) {
  if (!path || !existsSync(path)) return { routes: {} };
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (error) {
    throw new Error(`Unable to parse navigation data ${path}: ${error.message}`);
  }
}

export function buildPageNavigation(contentRoot, navigation = { routes: {} }, language = 'en') {
  const sections = new Map();
  const leaves = [];

  walk(contentRoot, (fullPath, name) => {
    if (!name.endsWith('.md')) return;
    const relativePath = relative(contentRoot, fullPath).replace(/\\/g, '/');
    const isIndex = name === '_index.md';
    const route = routeFor(relativePath, isIndex);
    const frontmatter = parseFrontmatter(readFileSync(fullPath, 'utf8'));
    if (isIndex) {
      sections.set(route, {
        route,
        title: frontmatter.title || fallbackTitle(route),
        weight: frontmatter.weight,
      });
      return;
    }
    const parentPath = relativePath.slice(0, relativePath.lastIndexOf('/'));
    const parentRoute = parentPath ? `/${parentPath}/` : '/';
    leaves.push({
      route,
      parentRoute,
      title: frontmatter.title || name.replace(/\.md$/iu, ''),
      weight: frontmatter.weight,
    });
  });

  // A directory without an _index.md is still a valid structural parent. Keep
  // it in the output so every leaf has a usable escape route.
  for (const leaf of leaves) {
    if (!sections.has(leaf.parentRoute)) {
      sections.set(leaf.parentRoute, {
        route: leaf.parentRoute,
        title: fallbackTitle(leaf.parentRoute),
        weight: null,
      });
    }
  }

  const byParent = new Map();
  for (const leaf of leaves) {
    const siblings = byParent.get(leaf.parentRoute) || [];
    siblings.push(leaf);
    byParent.set(leaf.parentRoute, siblings);
  }
  for (const siblings of byParent.values()) siblings.sort(sortLeaves);

  const routes = {};
  for (const leaf of leaves.sort((a, b) => a.route.localeCompare(b.route))) {
    const siblings = byParent.get(leaf.parentRoute);
    const index = siblings.indexOf(leaf);
    const previous = siblings[index - 1];
    const next = siblings[index + 1];
    const section = sections.get(leaf.parentRoute);
    routes[leaf.route] = {
      title: leaf.title,
      parent: {
        route: leaf.parentRoute,
        title: section?.title || routeLabel(navigation, leaf.parentRoute, language),
      },
      previous: previous ? { route: previous.route, title: previous.title } : null,
      next: next ? { route: next.route, title: next.title } : null,
    };
  }

  return {
    schema_version: '1.0.0',
    leafCount: Object.keys(routes).length,
    routes,
  };
}

export function renderPageNavigation(contentRoot, navigationPath, language = 'en') {
  const navigation = readNavigation(navigationPath);
  return `${JSON.stringify(buildPageNavigation(contentRoot, navigation, language), null, 2)}\n`;
}

function main() {
  const args = process.argv.slice(2);
  if (args.includes('--help')) {
    console.log('Usage: node tools/generate-page-navigation.mjs [--content-root DIR] [--out FILE] [--navigation FILE] [--language zh|en] [--check]');
    return;
  }

  const contentRoot = resolve(argValue(args, '--content-root', DEFAULT_CONTENT_ROOT));
  const outPath = resolve(argValue(args, '--out', DEFAULT_OUT_PATH));
  const navigationPath = resolve(argValue(args, '--navigation', DEFAULT_NAVIGATION_PATH));
  const language = argValue(args, '--language', 'en');
  const rendered = renderPageNavigation(contentRoot, navigationPath, language);

  if (args.includes('--check')) {
    if (!existsSync(outPath)) {
      console.error(`Page navigation is missing: ${outPath}`);
      process.exitCode = 1;
      return;
    }
    const current = readFileSync(outPath, 'utf8');
    if (current !== rendered) {
      console.error(`Page navigation is stale or mismatched: ${outPath}`);
      process.exitCode = 1;
      return;
    }
    const data = JSON.parse(rendered);
    console.log(`PAGE_NAVIGATION_OK leaves=${data.leafCount}`);
    return;
  }

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, rendered, 'utf8');
  const data = JSON.parse(rendered);
  console.log(`Wrote ${outPath}`);
  console.log(`Leaf pages indexed: ${data.leafCount}`);
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  main();
}
