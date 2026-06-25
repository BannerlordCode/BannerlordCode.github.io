// tools/normalize-leaf-links.mjs
// Fix relative links in leaf class/doc pages that were authored relative to the
// section directory but now live one level deeper under Zola clean URLs.
//
// Usage: node tools/normalize-leaf-links.mjs [--dry-run]
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, posix } from 'path';
import { REPO_ROOT, getArg } from './lib/paths.mjs';

const CONTENT = join(REPO_ROOT, 'content');
const dryRun = process.argv.includes('--dry-run');

const EXTERNAL_URL_SCHEMES = /^(?:https?:|mailto:|tel:|data:)/i;

/**
 * Recursively collect all Markdown files under a directory.
 * @param {string} dir
 * @param {string[]} acc
 * @returns {string[]}
 */
function walkMd(dir, acc = []) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    if (entry.startsWith('.')) continue;
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) {
      walkMd(p, acc);
    } else if (entry.endsWith('.md')) {
      acc.push(p);
    }
  }
  return acc;
}

/**
 * Convert a Markdown file path into the public route it produces.
 * @param {string} filePath
 * @returns {string}
 */
function fileToRoute(filePath) {
  const rel = filePath.replace(CONTENT, '').replace(/\\/g, '/');
  if (rel.endsWith('/_index.md')) {
    return rel.replace(/\/_index\.md$/, '/');
  }
  return rel.replace(/\.md$/, '/');
}

/**
 * Build a set of all routes coming from Markdown content, plus static assets.
 * @returns {Set<string>}
 */
function buildRouteSet() {
  const routes = new Set();
  for (const file of walkMd(CONTENT)) {
    routes.add(fileToRoute(file));
  }
  return routes;
}

/**
 * Strip any fragment/hash from a URL.
 * @param {string} url
 * @returns {{href: string, hash: string}}
 */
function splitHash(url) {
  const idx = url.indexOf('#');
  if (idx < 0) return { href: url, hash: '' };
  return { href: url.slice(0, idx), hash: url.slice(idx) };
}

/**
 * Normalize a relative URL against a base route and return the absolute route
 * it targets, or null if it does not point inside the site.
 * @param {string} baseRoute - route ending in `/`
 * @param {string} href
 * @returns {string | null}
 */
function resolveRoute(baseRoute, href) {
  if (!href) return null;
  if (EXTERNAL_URL_SCHEMES.test(href)) return null;
  if (href.startsWith('/')) {
    const normalized = posix.normalize(href).replace(/\/$/, '');
    return normalized ? normalized + '/' : '/';
  }
  const combined = posix.join(baseRoute, href);
  const normalized = posix.normalize(combined).replace(/\/$/, '');
  return normalized ? normalized + '/' : '/';
}

/**
 * Compute a relative URL from one route to another, including trailing slash convention.
 * @param {string} fromRoute
 * @param {string} toRoute
 * @returns {string}
 */
function relativeRouteUrl(fromRoute, toRoute) {
  let rel = posix.relative(fromRoute.replace(/\/$/, ''), toRoute.replace(/\/$/, ''));
  if (!rel) rel = '.';
  return rel + '/';
}

/**
 * Determine the section route for a file (parent directory route for leaf pages).
 * @param {string} filePath
 * @param {string} fileRoute
 * @returns {string}
 */
function sectionRoute(filePath, fileRoute) {
  const basename = filePath.replace(/\\/g, '/').split('/').pop();
  if (basename === '_index.md') return fileRoute;
  return posix.join(fileRoute, '../');
}

const MD_LINK_RE = /!?\[([^\]]*)\]\(([^)]+)\)/g;
const REF_LINK_RE = /^\s*\[([^\]]+)\]:\s+(\S+)/gm;

/**
 * Normalize all relative links inside one Markdown file.
 * @param {string} filePath
 * @param {string} content
 * @param {Set<string>} routeSet
 * @returns {{newContent: string, changed: boolean, reports: string[]}}
 */
function normalizeFile(filePath, content, routeSet) {
  const fileRoute = fileToRoute(filePath);
  const sectRoute = sectionRoute(filePath, fileRoute);
  const reports = [];
  let changed = false;

  function replaceUrl(url) {
    const { href, hash } = splitHash(url);
    if (!href || EXTERNAL_URL_SCHEMES.test(href) || href.startsWith('/')) {
      return url;
    }

    const leafTarget = resolveRoute(fileRoute, href);
    const sectTarget = resolveRoute(sectRoute, href);

    if (leafTarget && routeSet.has(leafTarget)) {
      return url;
    }
    if (sectTarget && routeSet.has(sectTarget)) {
      const corrected = relativeRouteUrl(fileRoute, sectTarget) + hash.slice(1);
      if (corrected !== href + hash) {
        reports.push(`${href} -> ${corrected}`);
        changed = true;
        return corrected;
      }
    }
    return url;
  }

  const newContent = content
    .replace(MD_LINK_RE, (match, text, url) => {
      const newUrl = replaceUrl(url);
      return newUrl === url ? match : `[${text}](${newUrl})`;
    })
    .replace(REF_LINK_RE, (match, id, url) => {
      const newUrl = replaceUrl(url);
      return newUrl === url ? match : `[${id}]: ${newUrl}`;
    });

  return { newContent, changed, reports };
}

const routeSet = buildRouteSet();
const files = walkMd(CONTENT);
let changedFiles = 0;
let totalReplacements = 0;
const unresolved = [];

for (const file of files) {
  const content = readFileSync(file, 'utf8');
  const { newContent, changed, reports } = normalizeFile(file, content, routeSet);
  if (changed) {
    changedFiles++;
    totalReplacements += reports.length;
    const rel = file.replace(CONTENT, '').replace(/\\/g, '/');
    console.log(`[fix] ${rel} (${reports.length})`);
    if (!dryRun) {
      writeFileSync(file, newContent, 'utf8');
    }
  }
}

console.log('');
console.log(`Files scanned: ${files.length}`);
console.log(`Files changed: ${changedFiles}`);
console.log(`Links fixed: ${totalReplacements}`);
if (dryRun) {
  console.log('Dry run: no files written.');
}
