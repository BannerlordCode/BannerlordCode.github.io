// 只读测量（boss #8593）：已有 导航 的页，其行是否可推导 —— 两条判据都成立 ⇒ 可机械生成。
//  a 结构相同：条目数 / 行形状是否高度一致
//  b 可推导  ：条目内容能否在本页已有字段（File / Source / Namespace / Module / Type / Base / 同桶兄弟页名）找到出处
// ⚠ 只对 no_desc 791 页内的「已有 导航」页取样，避免把别的线的页混进来。
import fs from 'node:fs';
import path from 'node:path';
import { basename } from 'node:path';

const R = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const API = R + '/content/v1.4.5/zh/api';
const SHAPE_A = ['它有什么状态', '它允许你做什么', '它保存的状态'];
const SEC = [
  ['概述', ['概述']], ['心智模型', ['心智模型']],
  ['怎么用', ['如何使用', '使用示例', '怎么用', '如何用']],
  ['关键成员', ['关键成员', '主要方法', '主要属性', '成员说明']],
  ['真实示例', ['真实示例', '使用示例']],
  ['参见', ['依赖关系', '依赖图', '参见']], ['导航', ['导航']],
];

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (p.endsWith('.md') && !p.endsWith('_index.md')) files.push(p);
  }
})(API);

const parse = t => {
  const H = t.split(/\r?\n/).filter(l => /^##\s+/.test(l))
    .map(l => l.replace(/^##\s+/, '').split('（')[0].split('(')[0].trim());
  const P = new Set(H);
  const miss = SEC.filter(([, a]) => !a.some(x => P.has(x))).map(([c]) => c);
  // 导航小节的正文
  let nav = null;
  const idx = t.split(/\r?\n/).findIndex(l => /^##\s+导航\s*$/.test(l));
  if (idx >= 0) {
    const rest = t.split(/\r?\n/).slice(idx + 1);
    const end = rest.findIndex(l => /^##\s+/.test(l));
    nav = (end < 0 ? rest : rest.slice(0, end));
  }
  return { H, miss, nav };
};

const field = t => {
  const g = n => { const m = new RegExp('^' + n + '[：:]\\s*`?([^`\\r\\n]+)', 'm').exec(t); return m ? m[1].trim() : null; };
  return { File: g('\\*\\*File'), Source: g('\\*\\*Source'), Namespace: g('\\*\\*Namespace'), Module: g('\\*\\*Module'), Type: g('\\*\\*Type') };
};

const noDesc = [], withNav = [];
for (const f of files) {
  const t = fs.readFileSync(f, 'utf8');
  const d = /^description:\s*"(.*)"\s*$/m.exec(t);
  const hasDesc = !!d && d[1].includes('的自动生成类参考。');
  if (hasDesc && SHAPE_A.some(s => t.includes(s))) continue;
  if (hasDesc) continue;
  const rel = f.slice(R.length + 1).split('\\').join('/');
  const r = parse(t);
  const row = { page: rel, bucket: rel.split('/').slice(0, 5).join('/'), file: basename(f, '.md'), ...r, fields: field(t), bytes: Buffer.byteLength(t, 'utf8') };
  noDesc.push(row);
  if (r.nav) withNav.push(row);
}

console.log('=== 取样范围：no_desc ' + noDesc.length + ' 页，其中【已有 导航】= ' + withNav.length + ' 页 ===');

// —— 判据 a：结构相同 ——
const shapes = {};
const counts = {};
for (const r of withNav) {
  const lines = r.nav.map(l => l.trim()).filter(Boolean);
  const links = lines.filter(l => l.startsWith('-') || l.startsWith('*'));
  const shape = lines.map(l => (l.startsWith('-') ? 'L' : l.startsWith('#') ? 'H' : l === '' ? '' : 'T')).join('');
  shapes[shape] = (shapes[shape] || 0) + 1;
  counts[links.length] = (counts[links.length] || 0) + 1;
}
console.log('\n=== 判据 a · 结构相同？ ===');
console.log('  行形状种类 = ' + Object.keys(shapes).length + '  / ' + withNav.length + ' 页');
console.log('  前 6 种形状：');
Object.entries(shapes).sort((x, y) => y[1] - x[1]).slice(0, 6)
  .forEach(([k, v]) => console.log('    ' + String(v).padStart(4) + ' 页  ' + JSON.stringify(k.slice(0, 46))));
const cnt = Object.values(counts);
const mode = Object.entries(counts).sort((x, y) => y[1] - x[1])[0];
console.log('  条目数（链接行）分布：' + JSON.stringify(counts));
console.log('  众数 = ' + mode[0] + ' 条，占 ' + (mode[1] / withNav.length * 100).toFixed(1) + '%');
const aPass = Object.keys(shapes).length <= 3;
console.log('  ⇒ 判据 a ' + (aPass ? '【成立】' : '【不成立】') + '（形状 ' + Object.keys(shapes).length + ' 种 / 众数占比 ' + (mode[1] / withNav.length * 100).toFixed(0) + '%）');

// —— 判据 b：可推导 ——
console.log('\n=== 判据 b · 条目内容能否在本页已有字段里找到出处 ===');
const bucketSiblings = new Map();
for (const f of files) {
  const rel = f.slice(R.length + 1).split('\\').join('/');
  const b = rel.split('/').slice(0, 5).join('/');
  if (!bucketSiblings.has(b)) bucketSiblings.set(b, new Set());
  bucketSiblings.get(b).add(basename(f, '.md'));
}
let traced = 0, untraced = 0; const bad = [];
for (const r of withNav) {
  const targets = [];
  for (const line of r.nav) {
    const m = /\[([^\]]+)\]\(([^)]+)\)/.exec(line);
    if (m) targets.push(m[2].replace(/^\.\.\//, '').replace(/\/$/, ''));
  }
  const sib = bucketSiblings.get(r.bucket) || new Set();
  const fldVals = Object.values(r.fields).filter(Boolean).map(v => basename(v, '.cs'));
  const okAll = targets.length === 0 ? false : targets.every(t => sib.has(t) || fldVals.includes(t) || t === '.' || t === '');
  if (okAll) traced++; else { untraced++; if (bad.length < 4) bad.push({ page: r.page, targets }); }
}
const bPass = traced > 0 && traced >= untraced;
console.log('  全部条目可回溯到【同桶兄弟页名 或 本页字段】= ' + traced + ' 页');
console.log('  存在无法回溯的条目                    = ' + untraced + ' 页');
console.log('  ⇒ 判据 b ' + (bPass ? '【成立】' : '【不成立】'));
bad.forEach(x => console.log('    反例: ' + x.page + '  targets=' + JSON.stringify(x.targets).slice(0, 90)));

console.log('\n=== 结论 ===');
console.log('  判据 a ' + (aPass ? '成立' : '不成立') + ' · 判据 b ' + (bPass ? '成立' : '不成立'));
console.log('  ⇒ 180 页只缺「导航」的处置：' +
  (aPass && bPass ? '【可机械生成】—— 与 banner 同类，不属真写' : '【真写且形态不统一】—— 整桶降级为告示'));
console.log('\n=== 样例：一个已有 导航 的页，其导航行长什么样 ===');
if (withNav[0]) {
  console.log('  ' + withNav[0].page);
  console.log('  字段: ' + JSON.stringify(withNav[0].fields));
  console.log('  导航:');
  withNav[0].nav.slice(0, 6).forEach(l => console.log('    ' + l.slice(0, 100)));
}