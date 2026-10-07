// CONTRACT.md 合并同类清单：按 甲(真重复) / 乙(总纲+实例) / 丙(各管一件事) 三层分。
// 只读，不动文件。每节给出：保留 / 合并入 / 降为实例指向。
import { readFileSync } from 'node:fs';

const P = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io/CONTRACT.md';
const t = readFileSync(P, 'utf8');
const L = t.split(/\r?\n/);

// 切出所有二级节（## N. 标题）及其正文
const secs = [];
for (let i = 0; i < L.length; i++) {
  const m = /^##\s+(\S+)\.\s*(.+)$/.exec(L[i]);
  if (m) secs.push({ id: m[1], title: m[2].trim(), start: i, body: [] });
}
for (let i = 0; i < secs.length; i++) {
  const end = i + 1 < secs.length ? secs[i + 1].start : L.length;
  secs[i].body = L.slice(secs[i].start + 1, end);
  secs[i].len = end - secs[i].start;
}

console.log('=== CONTRACT.md 规模 ===');
console.log('  ' + L.length + ' 行 / ' + Buffer.byteLength(t, 'utf8') + ' bytes / ' + secs.length + ' 个二级节');
console.log('');

// 主题关键词 → 用于识别同一族
const themes = {
  '报数口径/未计入项': /口径|未计入|合计还是子集|带口径|报数|相加|总数|计数/,
  '归属（谁写的）': /归属|作者|git 脏|最后修改者|授权/,
  '尺的范围/边界': /尺|量具|回落到|看不见|视野|枚举不全|猜了|前提不成立/,
  '取证要求': /取证|命令|证据|复现|阳性对照|实测/,
};
for (const [k, re] of Object.entries(themes)) {
  const hit = secs.filter(s => re.test(s.title + s.body.join('\n')));
  console.log('  主题「' + k + '」命中 ' + hit.length + ' 节: ' + hit.map(h => '§' + h.id).join(' '));
}
console.log('');

console.log('=== 逐节一览（id · 行数 · 标题）===');
secs.forEach(s => console.log('  §' + String(s.id).padEnd(5) + String(s.len).padStart(4) + ' 行  ' + s.title.slice(0, 56)));

// 找出标题/正文几乎等价的节（真重复候选）
console.log('');
console.log('=== 真重复候选：两节正文的 12-gram 高度重合 ===');
function grams(a, n = 12) {
  const s = a.replace(/\s+/g, '');
  const g = new Set();
  for (let i = 0; i + n <= s.length; i++) g.add(s.slice(i, i + n));
  return g;
}
for (let i = 0; i < secs.length; i++) {
  for (let j = i + 1; j < secs.length; j++) {
    const A = secs[i], B = secs[j];
    if (A.len < 8 || B.len < 8) continue;
    const ga = grams(A.body.join('\n')), gb = grams(B.body.join('\n'));
    if (!ga.size || !gb.size) continue;
    let inter = 0;
    for (const g of ga) if (gb.has(g)) inter++;
    const ratio = inter / Math.min(ga.size, gb.size);
    if (ratio > 0.35) console.log('  §' + A.id + ' ↔ §' + B.id + '   重合度 ' + (ratio * 100).toFixed(0) + '%   「' + A.title.slice(0, 30) + '」 ↔ 「' + B.title.slice(0, 30) + '」');
  }
}
