// 只读普查：全仓含【否定式断言】的页，按桶分组，供按作者复查。
// 否定式断言 = 「零 / 没有 / 无 / 0 处 / 从未 / 唯一 / 查不到」这类断言。
// 它错起来没有症状：没异常、没门禁失败、没断链 —— 所以要单独扫。
//
// 用法: node tools/_census-negative-claims.mjs [桶名 ...]
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join } from 'node:path';

const API = 'content/v1.4.5/zh/api';
// 否定式模式：要求附近有断言语气，避免把普通「无」字算进去
const PATTERNS = [
  ['零消费', /零\s*消费|没有消费|无消费点|0\s*个消费/],
  ['零命中/零处', /零\s*命中|0\s*处命中|零\s*处|0\s*处/],
  ['从未/从未被', /从未|从没|一次都没|一次也没有/],
  ['唯一', /唯一\s*(?:的|入口|一处|路径|入口点)/],
  ['不存在', /不存在|查不到|没有找到|找不到|在\s*1\.4\.5\s*里没有/],
  ['无引用/未引用', /无引用|未引用|没有引用|零引用/],
  ['没有实现', /没有实现|未实现|空\s*实现|全是空体/],
];

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
const byBucket = new Map();
const rows = [];

for (const pg of files) {
  const rel = pg.replace(/\\/g, '/');
  const b = rel.split('/')[4];
  if (only.size && !only.has(b)) continue;
  const t = readFileSync(pg, 'utf8');
  const hits = [];
  for (const [name, re] of PATTERNS) {
    const m = t.match(new RegExp(re.source, 'g'));
    if (m) hits.push(name + '×' + m.length);
  }
  if (!hits.length) continue;
  // 只统计「有实质内容」的页：跳过 29 行空壳与桶首页
  const lines = t.split(/\r?\n/).length;
  const isIndex = /_index\.md$/.test(pg);
  if (isIndex) continue;
  if (!byBucket.has(b)) byBucket.set(b, { pages: 0, dirty: 0, hits: 0 });
  const x = byBucket.get(b);
  x.pages++; x.hits += hits.length;
  if (dirty.has(rel)) x.dirty++;
  rows.push({ rel, hits, lines, isDirty: dirty.has(rel) });
}

console.log('判据：页正文含否定式断言（零消费/零命中/从未/唯一/不存在/无引用/未实现）');
console.log('排除：桶首页 _index.md');
console.log('');
console.log(['桶', '含否定式断言的页', '其中本轮已改', '断言总数'].join('\t'));
let P = 0, D = 0, H = 0;
for (const [b, x] of [...byBucket].sort((a, c) => c[1].dirty - a[1].dirty || c[1].pages - a[1].pages)) {
  console.log([b, x.pages, x.dirty, x.hits].join('\t'));
  P += x.pages; D += x.dirty; H += x.hits;
}
console.log(['TOTAL', P, D, H].join('\t'));
console.log('');
console.log(`全仓含否定式断言的页 = ${P}；其中本轮已被改写 = ${D}（这 ${D} 页是复查的第一批）`);
console.log('');
console.log('本轮已改写、且含否定式断言的页（按桶）：');
const d2 = rows.filter(r => r.isDirty).sort((a, b) => a.rel.localeCompare(b.rel));
const g = new Map();
for (const r of d2) { const b = r.rel.split('/')[4]; if (!g.has(b)) g.set(b, []); g.get(b).push(r); }
for (const [b, rs] of g) {
  console.log(`\n[${b}] ${rs.length} 页`);
  for (const r of rs) console.log('   ' + r.rel.split('/').pop() + '   ' + r.hits.join(' '));
}
