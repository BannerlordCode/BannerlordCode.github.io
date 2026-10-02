import { classifyPage } from './lib/handwritten-policy.mjs';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
const root = 'content/v1.4.5/zh/api';
function walk(d, acc = []) {
  for (const e of readdirSync(d)) {
    if (e.startsWith('.')) continue;
    const p = join(d, e);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, acc);
    else if (e.endsWith('.md')) acc.push(p);
  }
  return acc;
}
const files = walk(root);
const statusCount = {};
const reasonCount = {};
let total = 0;
for (const f of files) {
  const t = readFileSync(f, 'utf8');
  const { status, reasons } = classifyPage(f, t);
  statusCount[status] = (statusCount[status] || 0) + 1;
  if (status !== 'deep_pass') {
    for (const r of reasons || []) reasonCount[r] = (reasonCount[r] || 0) + 1;
  }
  total++;
}
console.log('TOTAL files:', total);
console.log('STATUS:', JSON.stringify(statusCount, null, 2));
console.log('STUB/non-deep REASONS (top):');
const sorted = Object.entries(reasonCount).sort((a, b) => b[1] - a[1]);
for (const [r, c] of sorted) console.log('  ' + String(c).padStart(6) + '  ' + r);
