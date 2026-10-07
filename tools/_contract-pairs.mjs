// 定向核对：boss 点名的几对 + 扫描漏掉的候选对。输出逐对的标题相似度与正文重合度。
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
const norm = s => s.replace(/[`（）()·—:：\s、，。｜|]/g, '').replace(/lead-\d+|boss|worker-\d+|§\S+/gi, '').toLowerCase();
function dice(a, b, n = 3) {
  const A = new Set(), B = new Set();
  for (let i = 0; i + n <= a.length; i++) A.add(a.slice(i, i + n));
  for (let i = 0; i + n <= b.length; i++) B.add(b.slice(i, i + n));
  if (!A.size || !B.size) return 0;
  let inter = 0; for (const g of A) if (B.has(g)) inter++;
  return 2 * inter / (A.size + B.size);
}
function grams(a, n = 10) { const s = a.replace(/\s+/g, ''); const g = new Set(); for (let i = 0; i + n <= s.length; i++) g.add(s.slice(i, i + n)); return g; }
function bodyRatio(a, b) {
  const ga = grams(a), gb = grams(b);
  if (!ga.size || !gb.size) return 0;
  let inter = 0; for (const g of ga) if (gb.has(g)) inter++;
  return inter / Math.min(ga.size, gb.size);
}
const pairs = [
  ['4h', '6t',  'boss 点名：正数也要带口径'],
  ['4f', '6s',  '扫描漏掉：区间引用两端都核'],
  ['4i', '7p',  'boss 归丙：归属 ≠ 授权'],
  ['4v', '6y',  '工具边界两形态'],
  ['4w', '6l',  '计数口径 vs 形状不存在'],
  ['6x', '6b',  '两层都要报 vs 前提'],
  ['4c', '4w',  '乙候选：报数口径'],
  ['4d', '4k',  '乙候选：正则匹配到 0'],
  ['4s', '4w',  '乙候选：两种形态'],
  ['4t', '4w',  '乙候选：counting_convention'],
  ['6o', '6r',  '否定式断言 vs 我没找到'],
  ['6f', '6o',  '修正是新写入 vs 否定式断言'],
];
const get = id => secs.find(s => s.id === id);
console.log('对  标题  正文   行数        说明');
for (const [a, b, note] of pairs) {
  const A = get(a), B = get(b);
  if (!A || !B) { console.log(`§${a}/§${b}  —— 找不到`); continue; }
  const t = dice(norm(A.title), norm(B.title));
  const r = bodyRatio(A.body, B.body);
  console.log(`§${a}↔§${b}  ${(t * 100).toFixed(0).padStart(3)}%  ${(r * 100).toFixed(0).padStart(3)}%   ${String(A.len).padStart(3)}/${String(B.len).padEnd(3)}   ${note}`);
}
