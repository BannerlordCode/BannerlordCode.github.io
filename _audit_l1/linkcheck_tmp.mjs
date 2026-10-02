import fs from 'fs';
import path from 'path';
const file = 'content/v1.3.15/zh/api/campaign-ext/SettlementTaxModel.md';
// Zola treats the .md as its own URL directory: campaign-ext/SettlementTaxModel/
const pageDir = path.join(path.dirname(file), path.basename(file, '.md'));
const t = fs.readFileSync(file, 'utf8');
const re = /\[[^\]]+\]\(([^)]+)\)/g;
let m, bad = [], good = 0;
while ((m = re.exec(t))) {
  const p = m[1].trim().replace(/\/$/, '');
  if (/^https?:\/\//.test(p) || p.startsWith('#')) { good++; continue; }
  const target = path.resolve(pageDir, p);
  const candidates = [target + '.md', path.join(target, '_index.md'), target];
  if (candidates.some((c) => fs.existsSync(c))) good++;
  else bad.push(p + '  ->  ' + target);
}
console.log('resolved links:', good);
console.log('BROKEN:', bad.length ? bad : 'none');
