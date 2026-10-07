// Probe 2: joint distribution for shell criterion + _index.md status (read-only).
import { readFileSync, readdirSync } from 'node:fs';
import { join, basename } from 'node:path';
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
  // joint: hasMarker x hasH3 x hasPropRows x bodyBytes<=2500
  const cells = new Map();
  const indexStatus = new Map();
  for (const f of files) {
    const t = readFileSync(f, 'utf8');
    const m = t.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
    const body = m ? t.slice(m[0].length) : t;
    const hasMarker = markers.some((s) => t.includes(s));
    const h3 = (body.match(/^###\s+/gm) || []).length;
    const propRows = (body.match(/^\|\s*[`|]?\w/gm) || []).length;
    const small = Buffer.byteLength(body, 'utf8') <= 2500;
    const key = `${hasMarker ? 'M' : '-'}${h3 > 0 ? 'H' : '-'}${propRows > 0 ? 'P' : '-'}${small ? 'S' : '-'}`;
    cells.set(key, (cells.get(key) || 0) + 1);
    if (basename(f) === '_index.md') {
      const cp = classifyPage(f, t);
      const k2 = `${hasMarker ? 'M' : '-'}${cp.status}`;
      indexStatus.set(k2, (indexStatus.get(k2) || 0) + 1);
    }
  }
  console.log(`=== ${lang} ===`);
  console.log('joint cells (M=marker H=h3 P=proprows S=small<=2500B):');
  for (const [k, n] of [...cells].sort()) console.log(`  ${k}: ${n}`);
  console.log('_index.md classifyPage status:', JSON.stringify([...indexStatus]));
}
