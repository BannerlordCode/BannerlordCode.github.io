// Probe: structural distribution of v1.3.0 pages (read-only).
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
  const stats = { total: files.length, marker: 0, markerNoH3: 0, markerNoH3NoProp: 0, noMarker: 0, noMarkerDeep: 0, noMarkerNotDeep: 0 };
  const noDeepSamples = [];
  for (const f of files) {
    const t = readFileSync(f, 'utf8');
    const m = t.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
    const body = m ? t.slice(m[0].length) : t;
    const hasMarker = markers.some((s) => t.includes(s));
    const h3 = (body.match(/^###\s+/gm) || []).length;
    const propRows = (body.match(/^\|\s*[`|]?\w/gm) || []).length;
    if (hasMarker) {
      stats.marker++;
      if (h3 === 0) {
        stats.markerNoH3++;
        if (propRows === 0) stats.markerNoH3NoProp++;
      }
    } else {
      stats.noMarker++;
      const cp = classifyPage(f, t);
      const bodyBytes = Buffer.byteLength(body, 'utf8');
      const h2h3 = (body.match(/^#{2,3}\s+/gm) || []).length;
      if (cp.status === 'deep_pass' || (bodyBytes > 2500 && h2h3 >= 1)) stats.noMarkerDeep++;
      else {
        stats.noMarkerNotDeep++;
        if (noDeepSamples.length < 8) {
          noDeepSamples.push({
            f: f.split('\\').join('/'),
            cp: cp.status,
            reasons: cp.reasons.slice(0, 4),
            bodyBytes,
            h2h3,
          });
        }
      }
    }
  }
  console.log(`=== ${lang} ===`);
  console.log(JSON.stringify(stats));
  console.log('no-marker not-deep samples:');
  for (const s of noDeepSamples) console.log('  ', s.f, s.cp, s.bodyBytes + 'B', 'h2h3=' + s.h2h3, s.reasons.join(','));
}
