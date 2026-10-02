import { classifyPage } from '../tools/lib/handwritten-policy.mjs';
import fs from 'fs';
import path from 'path';
const p = 'content/v1.3.15/en/api/gui/Brush.md';
const txt = fs.readFileSync(p, 'utf8');
const r = classifyPage(p, txt);
const pad = (s, n) => String(s).padEnd(n);
console.log('classify: ' + pad(r.status, 8) + ' [' + r.reasons.join(', ') + ']');
// Zola serves a leaf page Brush.md as permalink dir .../api/gui/Brush/ .
// Relative links resolve from that directory, NOT from the parent of the .md file.
const pageDir = path.join(path.dirname(p), path.basename(p, '.md'));
const links = [...txt.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)]
  .map((m) => m[1])
  .filter((l) => !l.startsWith('http') && !l.startsWith('#') && !l.startsWith('mailto'));
let broken = 0;
for (const l of links) {
  const resolved = path.normalize(path.resolve(pageDir, l));
  const md = resolved.replace(/\/$/, '') + '.md';
  const idx = resolved.replace(/\/$/, '') + '/_index.md';
  const ok = fs.existsSync(md) || fs.existsSync(idx);
  if (!ok) {
    broken++;
    console.log('  BROKEN: ' + l + ' -> ' + path.relative('.', md).replace(/\\/g, '/'));
  }
}
console.log('links checked: ' + links.length + ' broken: ' + broken);
