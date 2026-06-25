import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname, normalize, sep, posix } from 'path';

const root = join(process.cwd(), 'content');
const SLASH = '/';
function walk(dir, acc=[]) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    let s; try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) { if(!e.startsWith('.') && e!=='public') walk(p, acc); }
    else if (e.endsWith('.md') || e.endsWith('.txt')) acc.push(p);
  }
  return acc;
}
const reSep = new RegExp(sep === '\\' ? '\\\\' : sep, 'g');
function toPosix(p) { return p.replace(reSep, SLASH); }
function fileToRoute(f) {
  const rel = toPosix(f).replace(toPosix(root) + SLASH, '');
  const dir = posix.dirname(rel);
  const base = posix.basename(rel);
  if (base === '_index.md') return dir + SLASH;
  return rel.replace(/\.md$/, SLASH);
}
const allFiles = walk(root);
const files = allFiles.map(f => {
  const rel = toPosix(f).replace(toPosix(root) + SLASH, '');
  return { rel, route: fileToRoute(f) };
});

const linkRe = /\[([^\]]*)\]\(([^)\s]+)\)/g;
const allLinks = [];
for (const f of files) {
  const txt = readFileSync(join(root, f.rel),'utf8');
  let m;
  while ((m = linkRe.exec(txt))) {
    let href = m[2].split(/\s/)[0];
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) continue;
    allLinks.push({from:f.rel, route:f.route, href, text:m[1]});
  }
}

function resolveTarget(fromFileDir, href) {
  let h = href.split('#')[0];
  if (!h) return null;
  let rel;
  if (h.startsWith(SLASH)) {
    rel = h.replace(/^\//, '');
  } else {
    rel = posix.normalize(posix.join(fromFileDir, h)).replace(/^\//, '');
  }
  // Strip trailing slash so candidates like <target>.md resolve to the leaf file.
  return normalize(join(root, rel)).replace(/[\\/]+$/, '');
}

function isSelfLink(hrefPath) {
  return hrefPath === '' || hrefPath === '.' || hrefPath === './';
}

const broken = [];
for (const l of allLinks) {
  const hrefPath = l.href.split('#')[0];
  if (isSelfLink(hrefPath)) continue;
  const fromFileDir = posix.dirname(l.from);
  const t = resolveTarget(fromFileDir, l.href);
  if (t===null) continue;
  let found = false;
  // A Zola clean URL can point to either <path>.md (leaf) or <path>/_index.md (section).
  const cands = [t + '.md', normalize(join(t, '_index.md'))];
  const seen = new Set();
  for (const c of cands) {
    const norm = normalize(c);
    if (seen.has(norm)) continue;
    seen.add(norm);
    if (existsSync(norm)) { found = true; break; }
  }
  if (!found) broken.push({...l, target:t});
}

console.log('FILES='+files.length);
console.log('TOTAL_LINKS='+allLinks.length);
console.log('BROKEN_LINKS='+broken.length);
const byFrom = {};
for (const b of broken) (byFrom[b.from] = byFrom[b.from]||[]).push(b.href);
const sortedFrom = Object.keys(byFrom).sort();
console.log('FILES_WITH_BROKEN='+sortedFrom.length);
for (const f of sortedFrom) {
  const hs = [...new Set(byFrom[f])];
  console.log('\n## '+f+'  ('+hs.length+')');
  for (const h of hs) console.log('   -> '+h);
}
