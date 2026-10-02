import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, normalize, posix, resolve, sep } from 'node:path';

const root = resolve('content');
const files = [];
function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.md')) files.push(full);
  }
}
walk(root);

function relPath(file) {
  return file.slice(root.length + 1).split(sep).join('/');
}
function routeFor(file) {
  const rel = relPath(file);
  return rel.endsWith('/_index.md') ? rel.slice(0, -'_index.md'.length) + '/' : rel.slice(0, -3) + '/';
}
function existsPage(pathname) {
  const target = normalize(join(root, pathname));
  return existsSync(target + '.md') || existsSync(join(target, '_index.md'));
}
function resolveUrl(route, href) {
  const pathPart = href.split('#')[0];
  const base = route.endsWith('/') ? route : route + '/';
  return posix.normalize(posix.join(base, pathPart)).replace(/^\/+/, '');
}
function fixedHref(href) {
  const hash = href.indexOf('#');
  const pathPart = hash >= 0 ? href.slice(0, hash) : href;
  const fragment = hash >= 0 ? href.slice(hash) : '';
  if (!pathPart || pathPart.startsWith('/') || /^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(pathPart)) return href;
  const withoutMd = pathPart.replace(/\.md$/i, '');
  return `../${withoutMd}${fragment}`;
}

const broken = [];
const linkRe = /\[([^\]]*)\]\(([^)\s]+)\)/g;
for (const file of files) {
  const rel = relPath(file);
  const route = routeFor(file);
  const text = readFileSync(file, 'utf8');
  let match;
  while ((match = linkRe.exec(text))) {
    const href = match[2];
    if (!href || href.startsWith('#') || /^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(href)) continue;
    const urlTarget = resolveUrl(route, href);
    if (existsPage(urlTarget)) continue;
    const fixed = fixedHref(href);
    const fixedTarget = resolveUrl(route, fixed);
    if (!existsPage(fixedTarget)) {
      broken.push({ rel, href, fixed, fixedTarget });
    }
  }
}

console.log(`UNFIXED_AFTER_ONE_LEVEL=${broken.length}`);
for (const item of broken) console.log(`${item.rel}|${item.href}|${item.fixed}|${item.fixedTarget}`);
