import { classifyPage } from '../tools/lib/handwritten-policy.mjs';
import fs from 'fs';
import path from 'path';

const p = process.argv[2];
if (!p) { console.error('usage: node _audit_l1/verify-en-leaf.mjs <relpath.md>'); process.exit(2); }
const txt = fs.readFileSync(p, 'utf8');
const r = classifyPage(p, txt);
const pad = (s, n) => String(s).padEnd(n);
console.log('classify: ' + pad(r.status, 8) + ' [' + r.reasons.join(', ') + ']');

// Zola serves a leaf page X.md as permalink dir .../X/ ; relative links resolve from there.
const pageDir = path.join(path.dirname(p), path.basename(p, '.md'));
const links = [...txt.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)]
  .map((m) => m[1])
  .filter((l) => !l.startsWith('http') && !l.startsWith('#') && !l.startsWith('mailto'));
let broken = 0;
for (const l of links) {
  const resolved = path.normalize(path.resolve(pageDir, l));
  const md = resolved.replace(/\/$/, '') + '.md';
  const idx = resolved.replace(/\/$/, '') + '/_index.md';
  if (!fs.existsSync(md) && !fs.existsSync(idx)) {
    broken++;
    console.log('  BROKEN: ' + l + ' -> ' + path.relative('.', md).replace(/\\/g, '/'));
  }
}
console.log('links checked: ' + links.length + ' broken: ' + broken);
process.exit(broken === 0 && r.status === 'deep_pass' ? 0 : 1);
