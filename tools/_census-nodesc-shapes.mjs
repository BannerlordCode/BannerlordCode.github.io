// ① 量 no_desc 791 页的「缺哪几节」形态分布（boss #8577 第一步，只读不写）
// 判据 = tools/_verify/DISPATCH-TEMPLATE.md 〇.1（7 节，含独立的「导航」）
// 输出：按【缺失节的集合】分组 + 每组页数 + 每组一个具体文件名（判别边界）
import fs from 'node:fs';
import path from 'node:path';

const R = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const API = R + '/content/v1.4.5/zh/api';
const SHAPE_A = ['它有什么状态', '它允许你做什么', '它保存的状态'];
const SEC = [
  ['概述', ['概述']],
  ['心智模型', ['心智模型']],
  ['怎么用', ['如何使用', '使用示例', '怎么用', '如何用']],
  ['关键成员', ['关键成员', '主要方法', '主要属性', '成员说明']],
  ['真实示例', ['真实示例', '使用示例']],
  ['参见', ['依赖关系', '依赖图', '参见']],
  ['导航', ['导航']],
];

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.md') && !e.name.endsWith('_index.md')) files.push(p);
  }
})(API);

const groups = new Map();
let noDesc = 0, total = 0;
for (const f of files) {
  total++;
  const t = fs.readFileSync(f, 'utf8');
  const d = /^description:\s*"(.*)"\s*$/m.exec(t);
  const hasDesc = !!d && d[1].includes('的自动生成类参考。');
  const isShell = hasDesc && SHAPE_A.some(s => t.includes(s));
  if (isShell) continue;
  if (hasDesc) continue;      // desc_only 另算，不在本步
  noDesc++;
  const H = t.split(/\r?\n/).filter(l => /^##\s+/.test(l))
    .map(l => l.replace(/^##\s+/, '').split('（')[0].split('(')[0].trim());
  const P = new Set(H);
  const miss = SEC.filter(([, a]) => !a.some(x => P.has(x))).map(([c]) => c);
  const key = miss.length ? miss.join(' + ') : '(七节齐全)';
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push({ page: f.slice(R.length + 1).split('\\').join('/'), miss, bytes: Buffer.byteLength(t, 'utf8') });
}

console.log('=== no_desc 页的缺口形态分布（判据 = DISPATCH-TEMPLATE 〇.1，7 节）===');
console.log('全池叶页 ' + total + '   本步对象 no_desc = ' + noDesc);
console.log('形态种类 = ' + groups.size + (groups.size <= 3 ? '  ⇒ ≤3 种 ⇒ 可批处理' : '  ⇒ >3 种 ⇒ 逐页判断成本高于收益'));
console.log('');
const sorted = [...groups].sort((a, b) => b[1].length - a[1].length);
let acc = 0;
console.log('形态（缺的节）'.padEnd(52) + '页数  占比   累计');
for (const [k, v] of sorted) {
  acc += v.length;
  console.log(k.padEnd(52) + String(v.length).padStart(4) + '  ' +
    ((v.length / noDesc * 100).toFixed(1)).padStart(5) + '%  ' + (acc / noDesc * 100).toFixed(1) + '%');
}
console.log('');
console.log('=== 判别边界：前 3 形态各举一个具体文件名 ===');
for (const [k, v] of sorted.slice(0, 3)) {
  console.log('  【' + k + '】' + v.length + ' 页');
  console.log('    例: ' + v[0].page + '   (' + v[0].bytes + 'B)');
}
const top3 = sorted.slice(0, 3).reduce((s, [, v]) => s + v.length, 0);
console.log('');
console.log('前 3 形态覆盖 = ' + top3 + ' / ' + noDesc + ' = ' + (top3 / noDesc * 100).toFixed(1) + '%');
console.log('形态数 ' + groups.size + ' ⇒ 建议: ' + (groups.size <= 3 ? '批处理，取最大形态的 6 页' : '整桶降级为告示，不硬写'));