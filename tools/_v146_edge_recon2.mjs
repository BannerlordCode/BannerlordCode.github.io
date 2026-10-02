// 对账用：marker-only 分类（模拟另一种「手写」判定）下的出链与指向 marker 生成页的条数
import fs from 'node:fs';
import path from 'node:path';
const ROOT = 'content/v1.4.6';
function walk(d, acc = []) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) walk(p, acc); else if (e.name.endsWith('.md')) acc.push(p); } return acc; }
const files = walk(ROOT);
const routeOf = (rel) => { const p = rel.split(path.sep).join('/').replace(/\.md$/, ''); return p.endsWith('_index') ? p.replace(/_index$/, '') : p + '/'; };
const markerRoutes = new Set();
for (const f of files) if (fs.readFileSync(f, 'utf8').includes('<!-- generated-by:')) markerRoutes.add(routeOf(path.relative(ROOT, f)));
function resolve(fromRoute, href) {
  if (/^(https?:|#|mailto:)/.test(href)) return null;
  const h = href.split('#')[0]; if (!h) return null;
  const segs = fromRoute.split('/').filter(Boolean);
  for (const part of h.split('/')) { if (part === '.' || part === '') continue; if (part === '..') segs.pop(); else segs.push(part); }
  const r = segs.join('/'); return r.endsWith('/') ? r : r + '/';
}
const hand = files.filter((f) => !fs.readFileSync(f, 'utf8').includes('<!-- generated-by:'));
let out = 0, toMarker = 0, distinct = 0; const pairs = new Set();
for (const f of hand) {
  const rel = path.relative(ROOT, f); const t = fs.readFileSync(f, 'utf8');
  const re = /\[[^\]]*\]\(([^)\s]+)\)/g; let m;
  while ((m = re.exec(t))) { out++; const tg = resolve(routeOf(rel), m[1]); if (tg && markerRoutes.has(tg)) { toMarker++; pairs.add(rel + ' -> ' + tg); } }
}
distinct = pairs.size;
console.log('marker_only_hand_files=' + hand.length);
console.log('marker_only_outgoing_total=' + out);
console.log('marker_only_occurrences_to_marker_generated=' + toMarker);
console.log('marker_only_distinct_pairs=' + distinct);
