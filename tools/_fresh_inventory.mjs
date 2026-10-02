import { readFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative } from 'node:path';
import { classifyPage } from './lib/handwritten-policy.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const apiRoot = join(root, 'content/v1.4.5/zh/api');

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if (entry.endsWith('.md')) out.push(full);
  }
  return out;
}

const files = walk(apiRoot);
const tally = { deep_pass: 0, family_entry_pass: 0, noise: 0, stub: 0 };
const byDir = {};        // top-level api subdir -> {stub, deep}
const stubList = [];

for (const abs of files) {
  let text;
  try { text = readFileSync(abs, 'utf8'); } catch { continue; }
  const rel = relative(root, abs).split('\\').join('/');
  const res = classifyPage(rel, text);
  tally[res.status] = (tally[res.status] || 0) + 1;
  const top = rel.split('/')[3] || '(root)';
  byDir[top] = byDir[top] || { stub: 0, deep: 0, fam: 0, noise: 0 };
  if (res.status === 'stub') {
    byDir[top].stub++;
    if (!rel.endsWith('_index.md')) stubList.push({ rel, reasons: res.reasons.slice(0, 3) });
  } else if (res.status === 'deep_pass') byDir[top].deep++;
  else if (res.status === 'family_entry_pass') byDir[top].fam++;
  else byDir[top].noise++;
}

console.log('=== FRESH INVENTORY v1.4.5 zh/api (classifyPage) ===');
console.log('total pages scanned:', files.length);
console.log('tally:', JSON.stringify(tally));
console.log('\n=== stub count by top-level dir (non-index class pages) ===');
const dirs = Object.entries(byDir).sort((a, b) => b[1].stub - a[1].stub);
for (const [d, c] of dirs) {
  console.log(`${d.padEnd(16)} stub=${String(c.stub).padStart(4)} deep=${String(c.deep).padStart(4)} fam=${String(c.fam).padStart(4)} noise=${String(c.noise).padStart(4)}`);
}
console.log(`\n=== total non-index stub class pages: ${stubList.length} ===`);
// Print first 120 stubs with reasons
for (const s of stubList.slice(0, 120)) {
  console.log(`${s.rel}  [${s.reasons.join('|')}]`);
}
