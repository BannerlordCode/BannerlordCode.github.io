// Deterministic link-depth fixer for L2 batch #1 pages.
// Detects broken links via the audit-links.mjs URL-mode logic, then rewrites
// each broken href to the correct relative clean-URL path computed from the
// target page's real route (basename -> route map). Dry-run by default.
//
// Usage: node _audit_l1/fix-links-l2b1.mjs            (dry-run, prints plan)
//        node _audit_l1/fix-links-l2b1.mjs --apply     (writes files)

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, normalize, posix } from 'path';

const root = join(process.cwd(), 'content');
const API = 'v1.3.15/zh/api';
const apiRoot = join(root, API);
const APPLY = process.argv.includes('--apply');

function walk(dir, acc = []) {
  for (const e of readdirSync(dir)) {
    if (e.startsWith('.')) continue;
    const p = join(dir, e);
    let s; try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) walk(p, acc);
    else if (e.endsWith('.md')) acc.push(p);
  }
  return acc;
}

// basename -> route (clean URL ending with /)
const basenameToRoute = new Map();
const all = walk(apiRoot);
for (const f of all) {
  const rel = f.slice(root.length + 1).split('\\').join('/'); // v1.3.15/zh/api/.../X.md
  const dir = posix.dirname(rel);
  const base = posix.basename(rel);
  if (base === '_index.md') {
    const sec = posix.basename(dir);
    basenameToRoute.set(sec, dir + '/');
  } else {
    const name = base.replace(/\.md$/, '');
    basenameToRoute.set(name, rel.replace(/\.md$/, '/'));
  }
}

function fileToRoute(rel) {
  const dir = posix.dirname(rel);
  const base = posix.basename(rel);
  if (base === '_index.md') return dir + '/';
  return rel.replace(/\.md$/, '/');
}

function resolveTarget(fromUrl, href) {
  let h = href.split('#')[0];
  if (!h) return null;
  let rel;
  if (h.startsWith('/')) rel = h.replace(/^\//, '');
  else {
    const base = fromUrl.endsWith('/') ? fromUrl : fromUrl + '/';
    rel = posix.normalize(posix.join(base, h)).replace(/^\//, '');
  }
  return normalize(join(root, rel)).replace(/[\\/]+$/, '');
}

function existsAsPage(t) {
  if (t === null) return false;
  return existsSync(t + '.md') || existsSync(normalize(join(t, '_index.md')));
}

const targets = [
  'v1.3.15/zh/api/campaign/Town.md',
  'v1.3.15/zh/api/campaign/Village.md',
  'v1.3.15/zh/api/campaign/PartyBase.md',
  'v1.3.15/zh/api/campaign/MapEvent.md',
  'v1.3.15/zh/api/campaign-ext/TroopRoster.md',
  'v1.3.15/zh/api/campaign-ext/ItemRoster.md',
];

const linkRe = /\[([^\]]*)\]\(\s*(\S+?)(?:\s+"([^"]*)")?\s*\)/g;
let totalFixed = 0, totalUnfixable = 0;

for (const t of targets) {
  const fileRoute = fileToRoute(t);
  const txt = readFileSync(join(root, t), 'utf8');
  const fixes = [];
  let m;
  linkRe.lastIndex = 0;
  while ((m = linkRe.exec(txt))) {
    const text = m[1], href = m[2], title = m[3];
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) continue;
    const tgt = resolveTarget(fileRoute, href);
    if (existsAsPage(tgt)) continue; // already resolves
    // broken -> compute correct href from target basename
    const seg = href.split('#')[0].replace(/\/+$/, '').split('/').filter(Boolean);
    const cand = seg[seg.length - 1];
    const correctRoute = basenameToRoute.get(cand);
    if (!correctRoute) { fixes.push({ href, status: 'UNFIXABLE: no route for ' + cand }); totalUnfixable++; continue; }
    const newHref = posix.relative(fileRoute.replace(/\/$/, ''), correctRoute.replace(/\/$/, '')) + '/';
    if (newHref === href) { continue; }
    fixes.push({ href, newHref, title, text, status: 'FIX' });
    totalFixed++;
  }
  console.log('\n### ' + t.split('/').slice(-1)[0] + ' (' + fixes.length + ' changes)');
  for (const f of fixes) {
    if (f.status.startsWith('UNFIXABLE')) console.log('   UNFIXABLE: ' + f.href + ' -> ' + f.status);
    else console.log('   ' + f.href + '  =>  ' + f.newHref);
  }
  if (APPLY && fixes.length) {
    let out = txt;
    // apply from longest/last to avoid index shift; simpler: rebuild via regex replace with map
    const map = new Map(fixes.filter(f => f.status === 'FIX').map(f => [f.href, f]));
    out = out.replace(linkRe, (mm, t1, h, ti) => {
      if (h.startsWith('http') || h.startsWith('mailto:') || h.startsWith('#')) return mm;
      const f = map.get(h);
      if (!f) return mm;
      return ti ? `[${t1}](${f.newHref} "${ti}")` : `[${t1}](${f.newHref})`;
    });
    writeFileSync(join(root, t), out, 'utf8');
  }
}

console.log('\n=== SUMMARY ===');
console.log('APPLY mode: ' + APPLY);
console.log('Proposed/Applied fixes: ' + totalFixed);
console.log('Unfixable: ' + totalUnfixable);
