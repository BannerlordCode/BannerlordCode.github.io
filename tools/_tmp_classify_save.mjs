import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { classifyPage } from './lib/handwritten-policy.mjs';

const dir = 'content/v1.3.15/zh/api/save-system';
const files = readdirSync(dir).filter((f) => f.endsWith('.md') && f !== '_index.md');
let stub = 0, deep = 0, other = 0;
const stubs = [];
for (const f of files) {
  const p = join(dir, f);
  const text = readFileSync(p, 'utf8');
  const r = classifyPage(p, text);
  if (r.status === 'stub') { stub++; stubs.push([f, r.reasons.join(',')]); }
  else if (r.status === 'deep_pass') deep++;
  else other++;
}
console.log(`TOTAL=${files.length} deep_pass=${deep} stub=${stub} other=${other}`);
console.log('--- STUBS (file : reasons) ---');
for (const [f, reasons] of stubs) console.log(`${f}\t${reasons}`);
