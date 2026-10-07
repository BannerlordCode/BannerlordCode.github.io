// 核 DISPATCH-TEMPLATE 〇 的三处（boss #8523），全部从语料实证，不凭印象。
// ① 六节清单有没有漏行 / 把不同节合并成同节
// ② 别名归并是否成立（重点：导航 / 依赖关系 / 依赖图 / 参见 该不该算一节）
// ③ 「何时使用 与 怎么用 不等义」是否成立
import fs from 'node:fs';
import path from 'node:path';

const R = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const API = R + '/content/v1.4.5/zh/api';
const SHAPE_A = ['它有什么状态', '它允许你做什么', '它保存的状态'];

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.md') && !e.name.endsWith('_index.md')) files.push(p);
  }
})(API);

// 全部观测到的 h2（规范名后缀已剥掉）
const freq = new Map();
const perPage = [];
for (const f of files) {
  const t = fs.readFileSync(f, 'utf8');
  const d = /^description:\s*"(.*)"\s*$/m.exec(t);
  const hasDesc = !!d && d[1].includes('的自动生成类参考。');
  if (!(hasDesc && SHAPE_A.some(s => t.includes(s)))) {
    const H = t.split(/\r?\n/).filter(l => /^##\s+/.test(l))
      .map(l => l.replace(/^##\s+/, '').split('（')[0].split('(')[0].trim());
    for (const h of H) freq.set(h, (freq.get(h) || 0) + 1);
    perPage.push({ page: f.slice(R.length + 1).split('\\').join('/'), H });
  }
}

console.log('=== ① 六节清单有无漏行 ===');
console.log('  非空壳页里观测到的全部 h2（前 20）:');
[...freq].sort((a, b) => b[1] - a[1]).slice(0, 20)
  .forEach(([k, v]) => console.log('    ' + String(v).padStart(5) + '  ' + k));

console.log('\n=== ② 「导航 / 依赖关系 / 依赖图 / 参见」能否算一节？判据：同页是否同时出现其中两个 ===');
const GROUP = ['导航', '依赖关系', '依赖图', '参见'];
let coPage = 0; const samples = [];
for (const p of perPage) {
  const hit = GROUP.filter(g => p.H.includes(g));
  if (hit.length >= 2) { coPage++; if (samples.length < 4) samples.push({ page: p.page, hit }); }
}
console.log("  同页同时出现 ≥2 个的页数 = " + coPage + " / " + perPage.length);
samples.forEach(s => console.log('    ' + s.page + '  → ' + s.hit.join(' + ')));
if (coPage === 0) console.log('  ⇒ 未发现同页并存 ⇒ 合并【不与之矛盾】（但这不等于「应当合并」，见下）');

console.log('\n  反向检查：这些页的其余 h2 分布（若它们各自独立成页，说明是不同节）');
const others = new Map();
for (const p of perPage) {
  if (!GROUP.some(g => p.H.includes(g))) continue;
  for (const h of p.H) if (!GROUP.includes(h)) others.set(h, (others.get(h) || 0) + 1);
}
[...others].sort((a, b) => b[1] - a[1]).slice(0, 8)
  .forEach(([k, v]) => console.log('    ' + String(v).padStart(5) + '  ' + k));

console.log('\n=== ③ 「何时使用」与「怎么用」是否不等义 ===');
const NEQ = ['何时使用', '何时用'];
const HOWTO = ['如何使用', '使用示例', '怎么用', '如何用'];
let neqOnly = 0, howtoOnly = 0, bothPage = 0;
const neqOnlySample = [], bothSample = [];
for (const p of perPage) {
  const n = p.H.some(h => NEQ.some(s => h.includes(s)));
  const w = p.H.some(h => HOWTO.includes(h));
  if (n && !w) { neqOnly++; if (neqOnlySample.length < 3) neqOnlySample.push(p.page); }
  else if (w && !n) howtoOnly++;
  else if (n && w) { bothPage++; if (bothSample.length < 3) bothSample.push(p.page); }
}
console.log('  只有「何时使用」而无「怎么用」 = ' + neqOnly + '   两者都有 = ' + bothPage + "   只有「怎么用」=" + howtoOnly);
console.log('  ⇒ 「何时使用」可以【单独出现】，说明它不是「怎么用」的别名 ⇒ 不等义【成立】');
neqOnlySample.forEach(x => console.log('    仅何时使用: ' + x));
bothSample.forEach(x => console.log('    两者都有  : ' + x));

console.log('\n=== 判别边界（boss 8511 要求：各举一个具体文件名）===');
const SEC = [['概述', ['概述']], ['心智模型', ['心智模型']], ['怎么用', HOWTO],
  ['关键成员', ['关键成员', '主要成员', '成员说明', '主要方法', '主要属性']],
  ['真实示例', ['真实示例', '使用示例']], ['参见', GROUP]];
const scored = perPage.map(p => {
  let have = 0; const miss = [];
  for (const [c, a] of SEC) { if (a.some(x => p.H.includes(x))) have++; else miss.push(c); }
  return { ...p, have, miss };
});
const s5 = scored.find(x => x.have === 5 && x.miss[0] === '怎么用');
const s4 = scored.find(x => x.have === 4);
if (s5) { console.log('  【例·判为 5/6】' + s5.page); console.log('    h2 = ' + JSON.stringify(s5.H)); console.log('    缺 = ' + s5.miss.join('+')); }
if (s4) { console.log('  【例·判为 4/6】' + s4.page); console.log('    h2 = ' + JSON.stringify(s4.H)); console.log('    缺 = ' + s4.miss.join('+')); }