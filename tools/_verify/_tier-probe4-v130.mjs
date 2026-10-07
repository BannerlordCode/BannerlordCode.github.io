// Probe 4: full cross-tab marker x classifyPage + deep-body-with-marker pages (read-only).
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { classifyPage } from '../lib/handwritten-policy.mjs';

function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

for (const lang of ['zh', 'en']) {
  const files = walk(`content/v1.3.0/${lang}`);
  const markers = lang === 'zh'
    ? ['的自动生成类参考', '的自动生成战役动作参考']
    : ['Auto-generated class reference', 'Auto-generated campaign action reference'];
  const cross = new Map();
  const deepWithMarker = [];
  for (const f of files) {
    const t = readFileSync(f, 'utf8');
    const hasMarker = markers.some((s) => t.includes(s));
    const cp = classifyPage(f, t);
    const key = `${hasMarker ? 'M' : '-'}:${cp.status}`;
    cross.set(key, (cross.get(key) || 0) + 1);
    if (hasMarker && cp.status === 'deep_pass') {
      deepWithMarker.push(f);
    }
  }
  console.log(`=== ${lang} ===`);
  for (const [k, n] of [...cross].sort()) console.log(`  ${k}: ${n}`);
  console.log(`  deep_pass WITH marker: ${deepWithMarker.length}`);
  for (const f of deepWithMarker.slice(0, 5)) console.log('    ' + f);
}
