// 核对标注完整性并出分类统计。
//   node tools/_v146_ruler_classify.mjs M1
// 量纲说明：n = 该 unique 标识符在多少个不同页面出现；pages = 页面数；instances = 出现次数。
import fs from 'node:fs';
import path from 'node:path';
import { LABELS } from './_v146_ruler_labels_M1.mjs';

const mode = process.argv[2] || 'M1';
const res = JSON.parse(fs.readFileSync(path.resolve('tools/_v146_ruler_result.json'), 'utf8'));
const ctx = res[`ctx_${mode}`];

const flat = new Map();
for (const [k, v] of Object.entries(LABELS)) for (const id of v) {
  if (flat.has(id)) throw new Error('重复标注: ' + id);
  flat.set(id, k);
}
const unlabeled = ctx.filter((r) => !flat.has(r.id)).map((r) => r.id);
const stale = [...flat.keys()].filter((id) => !ctx.some((r) => r.id === id));
if (unlabeled.length) { console.error('漏标 ' + unlabeled.length + ' 条: ' + unlabeled.join(', ')); process.exit(2); }
if (stale.length) { console.error('多标 ' + stale.length + ' 条（语料里已不存在）: ' + stale.join(', ')); process.exit(2); }

const rows = ctx.map((r) => ({ ...r, label: flat.get(r.id) }));
const byLabel = new Map();
for (const r of rows) {
  if (!byLabel.has(r.label)) byLabel.set(r.label, { uniq: 0, pages: 0, instances: 0 });
  const b = byLabel.get(r.label);
  b.uniq++; b.pages += r.n; b.instances += r.n;
}
const totPages = rows.reduce((a, b) => a + b.n, 0);
const sorted = [...byLabel.entries()].sort((a, b) => b[1].pages - a[1].pages);
console.log(`档位 ${mode} | 统计对象 = ${mode} 档 unique 标识符（逐词在 1.4.6 .cs 树未命中）`);
console.log(`unique=${rows.length} 个 | 出现于 ${new Set(ctx.map((r) => r.page)).size} 个页面 | 累计出现 ${totPages} 次\n`);
console.log('类别'.padEnd(16) + 'unique数'.padEnd(10) + '页面数'.padEnd(10) + '占比');
for (const [k, b] of sorted) {
  console.log(k.padEnd(16) + String(b.uniq).padEnd(10) + String(b.pages).padEnd(10) + (100 * b.pages / totPages).toFixed(1) + '%');
}
const real = sorted.find(([k]) => k === 'REAL_ERROR');
console.log(`\n真缺陷（REAL_ERROR）: ${real[1].pages} / ${totPages} 页面次 = ${(100 * real[1].pages / totPages).toFixed(1)}%`);
console.log(`噪声（其余全部）: ${totPages - real[1].pages} / ${totPages} 页面次 = ${(100 * (totPages - real[1].pages) / totPages).toFixed(1)}%`);
fs.writeFileSync(path.resolve(`tools/_v146_ruler_labeled_${mode}.json`), JSON.stringify(rows, null, 1), 'utf8');
