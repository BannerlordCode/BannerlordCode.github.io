// Probe 3: inspect en M--- pages and _index.md content (read-only).
import { readFileSync, readdirSync } from 'node:fs';
import { join, basename } from 'node:path';

function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

const files = walk('content/v1.3.0/en');
const markers = ['Auto-generated class reference', 'Auto-generated campaign action reference'];
const mDash = [];
for (const f of files) {
  const t = readFileSync(f, 'utf8');
  if (!markers.some((s) => t.includes(s))) continue;
  const m = t.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  const body = m ? t.slice(m[0].length) : t;
  const h3 = (body.match(/^###\s+/gm) || []).length;
  const propRows = (body.match(/^\|\s*[`|]?\w/gm) || []).length;
  if (h3 === 0 && propRows === 0 && Buffer.byteLength(body, 'utf8') > 2500) mDash.push({ f, body });
}
console.log(`en M--- pages: ${mDash.length}`);
for (const x of mDash.slice(0, 3)) {
  console.log('=== ' + x.f + ' ===');
  console.log(x.body.slice(0, 900));
  console.log('...');
}
// _index.md sample
const idx = files.filter((f) => basename(f) === '_index.md');
console.log(`\n_index.md count: ${idx.length}`);
const s = idx.find((f) => f.includes('campaign/')) || idx[0];
console.log('=== sample _index: ' + s + ' ===');
console.log(readFileSync(s, 'utf8').slice(0, 1200));
