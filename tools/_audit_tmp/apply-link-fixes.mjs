import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, normalize, posix, resolve, sep } from 'node:path';

const root = resolve('content');
const auditPath = 'tools/_audit_tmp/current-link-audit2.txt';
const audit = readFileSync(auditPath, 'utf16le');
const broken = new Map();
let currentFile = '';
for (const raw of audit.split(/\r?\n/)) {
  const line = raw.trimEnd();
  if (line.startsWith('## ')) {
    currentFile = line.slice(3).split('  (')[0];
    broken.set(currentFile, new Set());
  } else if (line.trim().startsWith('-> ') && currentFile) {
    broken.get(currentFile).add(line.trim().slice(3));
  }
}

function routeFor(rel) {
  return rel.endsWith('/_index.md') ? rel.slice(0, -'_index.md'.length) + '/' : rel.slice(0, -3) + '/';
}
function existsPage(route) {
  const target = normalize(join(root, route)).replace(/[\\/]+$/, '');
  return existsSync(target + '.md') || existsSync(join(target, '_index.md'));
}
function resolveUrl(route, href) {
  const pathPart = href.split('#')[0];
  return posix.normalize(posix.join(route, pathPart)).replace(/^\/+/, '');
}
function fixHref(href) {
  const hash = href.indexOf('#');
  const pathPart = hash >= 0 ? href.slice(0, hash) : href;
  const fragment = hash >= 0 ? href.slice(hash) : '';
  return `../${pathPart.replace(/\.md$/i, '')}${fragment}`;
}

let changedFiles = 0;
let changedLinks = 0;
for (const [rel, hrefs] of broken) {
  const full = join(root, rel.split('/').join(sep));
  let text = readFileSync(full, 'utf8');
  const route = routeFor(rel);
  for (const href of hrefs) {
    const fixed = fixHref(href);
    const target = resolveUrl(route, fixed);
    if (!existsPage(target)) throw new Error(`${rel}: proposed ${href} -> ${fixed} resolves to missing ${target}`);
    const needle = `](${href}`;
    const occurrences = text.split(needle).length - 1;
    const next = text.split(needle).join(`](${fixed}`);
    if (next === text) throw new Error(`${rel}: could not find broken href ${href}`);
    changedLinks += occurrences;
    text = next;
  }
  writeFileSync(full, text, 'utf8');
  changedFiles++;
}

console.log(`CHANGED_FILES=${changedFiles}`);
console.log(`CHANGED_LINKS=${changedLinks}`);
