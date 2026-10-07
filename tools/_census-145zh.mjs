// 只读普查尺 —— 量 content/v1.4.5/zh/api/** 的门禁形状。
// 用门禁自己的 classifyPage 判定，不用 grep 数标题（grep 会把中文「关键成员」段全漏掉）。
// 用法: node tools/_census-145zh.mjs [桶名 ...]      不带参数 = 全桶
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { classifyPage } from './lib/handwritten-policy.mjs';

const BS = String.fromCharCode(92);
const root = 'content/v1.4.5/zh/api';
const only = new Set(process.argv.slice(2));
const files = [];
(function walk(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    const s = statSync(p);
    if (s.isDirectory()) walk(p); else if (p.endsWith('.md')) files.push(p);
  }
})(root);

const buckets = new Map();
let fffd = 0;
for (const f of files) {
  const b = f.split(BS).join('/').split('/')[4];
  if (only.size && !only.has(b)) continue;
  const t = readFileSync(f, 'utf8');
  if (t.includes('\uFFFD')) { fffd++; console.error('FFFD@ ' + f); }
  const c = classifyPage(f, t);
  if (!buckets.has(b)) buckets.set(b, { n: 0, deep: 0, stub: 0, bp: 0, five: 0, usage: 0, mem: 0, cs: 0, ov: 0, mm: 0 });
  const x = buckets.get(b);
  x.n++; x.deep += c.status === 'deep_pass' ? 1 : 0; x.stub += c.status === 'stub' ? 1 : 0;
  x.bp += c.reasons.includes('boilerplate-mental-model') ? 1 : 0;
  const ov = /^## 概述/m.test(t), mm = /^## 心智模型/m.test(t);
  const us = /^## .*(如何|用法)/m.test(t), me = /^## .*(关键成员|主要成员|成员说明)/m.test(t);
  const cs = /```csharp/m.test(t);
  x.ov += ov; x.mm += mm; x.usage += us; x.mem += me; x.cs += cs;
  if (ov && mm && us && me && cs) x.five++;
}
console.log(['bucket', 'total', 'deep_pass', 'stub', 'boilerplate', '五节齐全', '无概述', '无心智模型', '无如何/用法', '无关键成员', '无csharp'].join('\t'));
let T = 0, D = 0, B = 0, F = 0;
for (const [b, x] of [...buckets].sort((a, c) => c[1].n - a[1].n)) {
  T += x.n; D += x.deep; B += x.bp; F += x.five;
  console.log([b, x.n, x.deep, x.stub, x.bp, x.five, x.n - x.ov, x.n - x.mm, x.n - x.usage, x.n - x.mem, x.n - x.cs].join('\t'));
}
console.log(['TOTAL', T, D, T - D, B, F, '', '', '', '', ''].join('\t'));
console.error('FFFD pages: ' + fffd);
