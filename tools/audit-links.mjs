import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, normalize, resolve, sep, posix } from 'path';

/**
 * Link auditor for Zola content tree.
 *
 * Authors historically wrote file-directory-relative links from leaf pages
 * (e.g. campaign-ext/Foo.md → ../campaign/Hero). Zola emits clean URLs with
 * a trailing segment (.../Foo/), so browser resolution needs one extra "../"
 * (../../campaign/Hero). Section _index.md pages have matching file/URL dirs.
 *
 * Default mode: URL-route resolve (product truth for the live site).
 * Also reports file-dir-only false comfort metrics so we can migrate.
 *
 * Env:
 *   AUDIT_MODE=url|file|either  (default: url)
 */

const root = resolve(process.env.AUDIT_CONTENT_ROOT || join(process.cwd(), 'content'));
const SLASH = '/';
const MODE = (process.env.AUDIT_MODE || 'url').toLowerCase();

function walk(dir, acc = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    let s;
    try {
      s = statSync(p);
    } catch {
      continue;
    }
    if (s.isDirectory()) {
      if (!e.startsWith('.') && e !== 'public') walk(p, acc);
    } else if (e.endsWith('.md') || e.endsWith('.txt')) acc.push(p);
  }
  return acc;
}

const reSep = new RegExp(sep === '\\' ? '\\\\' : sep, 'g');
function toPosix(p) {
  return p.replace(reSep, SLASH);
}

function fileToRoute(f) {
  const rel = toPosix(f).replace(toPosix(root) + SLASH, '');
  const dir = posix.dirname(rel);
  const base = posix.basename(rel);
  if (base === '_index.md') return dir + SLASH;
  return rel.replace(/\.md$/, SLASH);
}

const allFiles = walk(root);
const files = allFiles.map((f) => {
  const rel = toPosix(f).replace(toPosix(root) + SLASH, '');
  return { rel, route: fileToRoute(f) };
});

const linkRe = /\[([^\]]*)\]\(([^)\s]+)\)/g;
const allLinks = [];
for (const f of files) {
  const txt = readFileSync(join(root, f.rel), 'utf8');
  let m;
  while ((m = linkRe.exec(txt))) {
    let href = m[2].split(/\s/)[0];
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) continue;
    allLinks.push({ from: f.rel, route: f.route, href, text: m[1] });
  }
}

function resolveTarget(fromBase, href) {
  let h = href.split('#')[0];
  if (!h) return null;
  let rel;
  if (h.startsWith(SLASH)) {
    rel = h.replace(/^\//, '');
  } else {
    // Ensure directory semantics: trailing slash so ".." climbs from the page folder.
    const base = fromBase.endsWith(SLASH) ? fromBase : fromBase + SLASH;
    rel = posix.normalize(posix.join(base, h)).replace(/^\//, '');
  }
  return normalize(join(root, rel)).replace(/[\\/]+$/, '');
}

function existsAsPage(t) {
  if (t === null) return false;
  const cands = [t + '.md', normalize(join(t, '_index.md'))];
  for (const c of cands) {
    if (existsSync(normalize(c))) return true;
  }
  return false;
}

function isSelfLink(hrefPath) {
  return hrefPath === '' || hrefPath === '.' || hrefPath === './';
}

const broken = [];
let okUrl = 0;
let okFile = 0;
let okEither = 0;
let okBoth = 0;
let okUrlOnly = 0;
let okFileOnly = 0;
let okNeither = 0;

for (const l of allLinks) {
  const hrefPath = l.href.split('#')[0];
  if (isSelfLink(hrefPath)) continue;

  // URL-style: resolve from clean page route (.../Page/ or .../section/)
  const fromUrl = l.route.endsWith(SLASH) ? l.route : l.route + SLASH;
  // File-style: resolve from markdown file directory
  const fromFile = posix.dirname(l.from) + SLASH;

  const tUrl = resolveTarget(fromUrl, l.href);
  const tFile = resolveTarget(fromFile, l.href);
  const foundUrl = existsAsPage(tUrl);
  const foundFile = existsAsPage(tFile);

  if (foundUrl) okUrl++;
  if (foundFile) okFile++;
  if (foundUrl || foundFile) okEither++;
  if (foundUrl && foundFile) okBoth++;
  else if (foundUrl) okUrlOnly++;
  else if (foundFile) okFileOnly++;
  else okNeither++;

  let found = false;
  let t = tUrl;
  if (MODE === 'file') {
    found = foundFile;
    t = tFile;
  } else if (MODE === 'either') {
    found = foundUrl || foundFile;
    t = foundUrl ? tUrl : tFile;
  } else {
    // default: url (product / browser truth with clean URLs)
    found = foundUrl;
    t = tUrl;
  }

  if (!found) broken.push({ ...l, target: t, foundUrl, foundFile });
}

console.log('FILES=' + files.length);
console.log('TOTAL_LINKS=' + allLinks.length);
console.log('AUDIT_MODE=' + MODE);
console.log('BROKEN_LINKS=' + broken.length);
console.log('RESOLVE_OK_URL=' + okUrl);
console.log('RESOLVE_OK_FILE=' + okFile);
console.log('RESOLVE_OK_EITHER=' + okEither);
console.log('RESOLVE_OK_BOTH=' + okBoth);
console.log('RESOLVE_URL_ONLY=' + okUrlOnly);
console.log('RESOLVE_FILE_ONLY=' + okFileOnly);
console.log('RESOLVE_NEITHER=' + okNeither);

const byFrom = {};
for (const b of broken) (byFrom[b.from] = byFrom[b.from] || []).push(b.href);
const sortedFrom = Object.keys(byFrom).sort();
console.log('FILES_WITH_BROKEN=' + sortedFrom.length);
for (const f of sortedFrom) {
  const hs = [...new Set(byFrom[f])];
  console.log('\n## ' + f + '  (' + hs.length + ')');
  for (const h of hs) console.log('   -> ' + h);
}

process.exitCode = broken.length > 0 ? 1 : 0;
