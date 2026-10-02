// Scoped URL-mode link verifier for L2 batch #1 pages.
// Mirrors audit-links.mjs resolution exactly; reports broken links per file.
import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, normalize, posix } from 'path';

const root = join(process.cwd(), 'content');
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
function fileToRoute(rel) {
  const dir = posix.dirname(rel), base = posix.basename(rel);
  if (base === '_index.md') return dir + '/';
  return rel.replace(/\.md$/, '/');
}
function resolveTarget(fromUrl, href) {
  let h = href.split('#')[0];
  if (!h) return null;
  let rel;
  if (h.startsWith('/')) rel = h.replace(/^\//, '');
  else { const base = fromUrl.endsWith('/') ? fromUrl : fromUrl + '/'; rel = posix.normalize(posix.join(base, h)).replace(/^\//, ''); }
  return normalize(join(root, rel)).replace(/[\\/]+$/, '');
}
function existsAsPage(t) { return t !== null && (existsSync(t + '.md') || existsSync(normalize(join(t, '_index.md')))); }

const targets = [
  'v1.3.15/zh/api/campaign/Town.md',
  'v1.3.15/zh/api/campaign/Village.md',
  'v1.3.15/zh/api/campaign/PartyBase.md',
  'v1.3.15/zh/api/campaign/MapEvent.md',
  'v1.3.15/zh/api/campaign-ext/TroopRoster.md',
  'v1.3.15/zh/api/campaign-ext/ItemRoster.md',
];
const linkRe = /\[([^\]]*)\]\(([^)\s]+)\)/g;
let total = 0;
for (const t of targets) {
  const fr = fileToRoute(t);
  const txt = readFileSync(join(root, t), 'utf8');
  const broken = [];
  let m;
  while ((m = linkRe.exec(txt))) {
    let href = m[2].split(/\s/)[0];
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) continue;
    if (!existsAsPage(resolveTarget(fr, href))) broken.push(href);
  }
  total += broken.length;
  console.log(t.split('/').slice(-1)[0] + ': ' + (broken.length ? 'BROKEN(' + broken.length + '): ' + broken.join(', ') : 'OK (0 broken)'));
}
console.log('TOTAL_BROKEN_FOR_6=' + total);
process.exit(total > 0 ? 1 : 0);
