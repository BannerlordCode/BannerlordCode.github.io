import { readFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative } from 'node:path';
import { classifyPage } from './lib/handwritten-policy.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const scanRoot = join(root, 'content/v1.4.5/zh/api');

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (e.endsWith('.md') && e !== '_index.md') out.push(p);
  }
  return out;
}

const files = walk(scanRoot);
const counts = { deep_pass: 0, family_entry_pass: 0, noise: 0, stub: 0, missing: 0 };
const stubs = [];
for (const f of files) {
  let text;
  try { text = readFileSync(f, 'utf8'); } catch { counts.missing++; continue; }
  const rel = relative(root, f).split('\\').join('/');
  const res = classifyPage(rel, text);
  counts[res.status] = (counts[res.status] || 0) + 1;
  if (res.status === 'stub') stubs.push(rel);
}
const total = files.length;
console.log('TOTAL_FILES', total);
console.log('COUNTS', JSON.stringify(counts));
console.log('STUB_COUNT', stubs.length);
// dump stub list for next-wave selection
import { writeFileSync } from 'node:fs';
writeFileSync(join(__dirname, '_fresh_stubs_145zh.txt'), stubs.join('\n') + '\n');
console.log('WROTE _fresh_stubs_145zh.txt with', stubs.length, 'stubs');
