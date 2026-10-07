// 产出复查清单的那一步：只判「有没有出示证据」，不判对错。
// 用法: node tools/_census-claim-evidence.mjs [桶名 ...]
//
// 为什么这把尺只判证据：
//   它判不了「这个断言对不对」，所以它不会伪装成能判对错的那把尺。
//   它的输出是【可派工的清单】：无证据的那些断言，就是复查的对象。
//
// 判据：
//   否定式断言 = 零消费 / 零命中 / 从未 / 唯一 / 不存在 / 无引用 / 未实现 / 查不到
//   证据痕迹   = 同一段（以空行分隔）内出现命令或搜索量词
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join } from 'node:path';

const API = 'content/v1.4.5/zh/api';

const CLAIM = [
  ['零消费', /零\s*消费|没有消费|无消费点|0\s*个消费/],
  ['零命中/零处', /零\s*命中|0\s*处命中|零\s*处|0\s*处/],
  ['从未', /从未|从没|一次都没|一次也没有/],
  ['唯一', /唯一\s*(?:的|入口|一处|路径|入口点)/],
  ['不存在', /不存在|查不到|没有找到|找不到|在\s*1\.4\.5\s*里没有/],
  ['无引用', /无引用|未引用|没有引用|零引用/],
  ['未实现', /没有实现|未实现|空\s*实现|全是空体/],
];

// 证据痕迹：命令、搜索量词、显式范围
const EVIDENCE = [
  /`?grep\b/i, /`?findstr\b/i, /`?ripgrep\b|\brg\s+-/i, /`?find\s+\S*\.cs/i,
  /`?sed\s+-n/i, /`?awk\b/i, /`?wc\s+-l/i, /`?dir\s+\/s/i, /`?cmd\s+\/c/i,
  /全树|整个源码树|整个树|整棵树|全\s*1\.4\.5/,
  /命中\s*\d|\d\s*处命中|出现\s*\d\s*次|\d\s*次命中/,
  /搜索|检索|查得|查过|实测\s*\d/,
];

function hasEvidence(para) {
  return EVIDENCE.some(re => re.test(para));
}

const files = [];
(function walk(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    const s = statSync(p);
    if (s.isDirectory()) walk(p); else if (p.endsWith('.md')) files.push(p);
  }
})(API);

let dirty = new Set();
try {
  dirty = new Set(execSync('git status --porcelain -- ' + API, { encoding: 'utf8', maxBuffer: 1 << 26 })
    .split(/\r?\n/).filter(Boolean).map(l => l.slice(3).trim().replace(/\\/g, '/')));
} catch { }

const only = new Set(process.argv.slice(2));
const stats = new Map();
let totClaims = 0, totEv = 0, totNo = 0;
const todo = [];
let scannedPages = 0, claimPages = 0;

for (const pg of files) {
  const rel = pg.replace(/\\/g, '/');
  const b = rel.split('/')[4];
  if (only.size && !only.has(b)) continue;
  if (/_index\.md$/.test(pg)) continue;
  scannedPages++;
  const t = readFileSync(pg, 'utf8');
  // 以空行分段：断言与它的证据通常在同一段
  const paras = t.split(/\n\s*\n/);
  let ev = 0, no = 0;
  for (const para of paras) {
    const kinds = CLAIM.filter(([, re]) => re.test(para)).map(([n]) => n);
    if (!kinds.length) continue;
    if (hasEvidence(para)) ev++; else { no++; todo.push({ page: rel, bucket: b, kind: kinds.join(','), line: para.split('\n')[0].slice(0, 80) }); }
  }
  if (ev + no === 0) continue;
  claimPages++;
  if (!stats.has(b)) stats.set(b, { pages: 0, dirtyPages: 0, ev: 0, no: 0 });
  const x = stats.get(b);
  x.pages++; ev && (x.dirtyPages += dirty.has(rel) ? 1 : 0);
  x.ev += ev; x.no += no;
  totClaims += ev + no; totEv += ev; totNo += no;
}

console.log('这把尺只判「有没有出示证据」，不判断言对错 —— 它判不了的东西不伪装成它判得了的');
console.log('命令：node tools/_census-claim-evidence.mjs');
console.log('');
console.log(['桶', '含断言的页', '其中本轮改写', '有证据', '无证据'].join('\t'));
for (const [b, x] of [...stats].sort((a, c) => (c[1].no - a[1].no) || (c[1].ev - a[1].ev))) {
  console.log([b, x.pages, x.dirtyPages, x.ev, x.no].join('\t'));
}
console.log(['TOTAL', claimPages, '', totEv, totNo].join('\t'));
console.log('');
console.log(`扫描页数 = ${scannedPages}    含否定式断言的页 = ${claimPages}`);
console.log(`断言总数 = ${totClaims}    有证据 = ${totEv} (${(totEv / totClaims * 100).toFixed(1)}%)    无证据 = ${totNo} (${(totNo / totClaims * 100).toFixed(1)}%)`);
console.log(`⇒ 可派工的复查清单 = ${totNo} 条断言（分布在 ${new Set(todo.map(t => t.page)).size} 页）`);
console.log('');
console.log('无证据断言最多的页（前 20，每页按无证据条数）：');
const byPage = new Map();
for (const t of todo) { if (!byPage.has(t.page)) byPage.set(t.page, []); byPage.get(t.page).push(t); }
for (const [page, ts] of [...byPage].sort((a, b) => b[1].length - a[1].length).slice(0, 20)) {
  console.log(`  ${String(ts.length).padStart(3)}  ${page}  [${[...new Set(ts.map(t => t.kind))].join(',')}]`);
}
