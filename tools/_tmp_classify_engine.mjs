// One-shot engine namespace classifier (mirrors _tmp_classify_save.mjs).
// Prints TOTAL / deep_pass / stub / noise counts + stub list with reasons.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { classifyPage } from './lib/handwritten-policy.mjs';

const ENGINE_DIR = 'content/v1.3.15/zh/api/engine';
const files = readdirSync(ENGINE_DIR).filter((f) => f.endsWith('.md'));

let total = 0, deep = 0, stub = 0, noise = 0, other = 0;
const stubList = [];
const deepList = [];

for (const f of files) {
  const p = join(ENGINE_DIR, f);
  const text = readFileSync(p, 'utf8');
  const r = classifyPage(p, text);
  total++;
  if (r.status === 'deep_pass') { deep++; deepList.push(f); }
  else if (r.status === 'stub') { stub++; stubList.push({ f, reasons: r.reasons.join(',') }); }
  else if (r.status === 'noise') { noise++; }
  else { other++; }
}

console.log(`TOTAL=${total} deep_pass=${deep} stub=${stub} noise=${noise} other=${other}`);
console.log('\n--- DEEP_PASS pages (link targets) ---');
console.log(deepList.sort().join('\n'));
console.log('\n--- STUB pages (candidates) ---');
for (const s of stubList.sort((a, b) => a.f.localeCompare(b.f))) {
  console.log(`${s.f}\t[${s.reasons}]`);
}
