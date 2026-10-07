// CONTRACT.md 标题级重复检测：n-gram 对正文不敏感（实测 <35%），
// 所以用标题 + 首句做相似度。输出供人工分 甲/乙/丙。
import { readFileSync } from 'node:fs';
const P = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io/CONTRACT.md';
const L = readFileSync(P, 'utf8').split(/\r?\n/);
const secs = [];
for (let i = 0; i < L.length; i++) {
  const m = /^##\s+(\S+)\.\s*(.+)$/.exec(L[i]);
  if (m) secs.push({ id: m[1], title: m[2], start: i, body: [] });
}
for (let i = 0; i < secs.length; i++) {
  const end = i + 1 < secs.length ? secs[i + 1].start : L.length;
  secs[i].body = L.slice(secs[i].start + 1, end).join('\n');
  secs[i].len = end - secs[i].start;
}
const norm = s => s.replace(/[`（）()·—\-—:：\s、，。｜|｜]|lead-\d+|boss|worker-\d+|#\d+/gi, '').toLowerCase();
function dice(a, b, n = 4) {
  const A = new Set(), B = new Set();
  for (let i = 0; i + n <= a.length; i++) A.add(a.slice(i, i + n));
  for (let i = 0; i + n <= b.length; i++) B.add(b.slice(i, i + n));
  if (!A.size || !B.size) return 0;
  let inter = 0; for (const g of A) if (B.has(g)) inter++;
  return 2 * inter / (A.size + B.size);
}
console.log('=== 标题高度相似的节对（dice >= 0.25）===');
const pairs = [];
for (let i = 0; i < secs.length; i++) for (let j = i + 1; j < secs.length; j++) {
  const s = dice(norm(secs[i].title), norm(secs[j].title));
  if (s >= 0.25) pairs.push({ a: secs[i], b: secs[j], s });
}
pairs.sort((x, y) => y.s - x.s);
for (const p of pairs) console.log(`  ${(p.s * 100).toFixed(0)}%  §${p.a.id} (${p.a.len}行) ↔ §${p.b.id} (${p.b.len}行)\n        「${p.a.title.slice(0, 52)}」\n        「${p.b.title.slice(0, 52)}」`);
if (!pairs.length) console.log('  （无）');
console.log('\n=== 正文 n-gram 重合 ≥ 0.20 的节对（实测语义重复的强度）===');
function grams(a, n = 10) { const s = a.replace(/\s+/g, ''); const g = new Set(); for (let i = 0; i + n <= s.length; i++) g.add(s.slice(i, i + n)); return g; }
const bp = [];
for (let i = 0; i < secs.length; i++) for (let j = i + 1; j < secs.length; j++) {
  const ga = grams(secs[i].body), gb = grams(secs[j].body);
  if (!ga.size || !gb.size) continue;
  let inter = 0; for (const g of ga) if (gb.has(g)) inter++;
  const r = inter / Math.min(ga.size, gb.size);
  if (r >= 0.12) bp.push({ a: secs[i], b: secs[j], r });
}
bp.sort((x, y) => y.r - x.r);
for (const p of bp) console.log(`  ${(p.r * 100).toFixed(0)}%  §${p.a.id} ↔ §${p.b.id}   「${p.a.title.slice(0, 34)}」 ↔ 「${p.b.title.slice(0, 34)}」`);
if (!bp.length) console.log('  （无）');
