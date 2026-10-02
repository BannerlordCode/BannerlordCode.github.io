// EN-adapted scoped link checker (mirrors check-8-links.mjs, lang=en).
import fs from 'fs';
import path from 'path';

const API_ROOT = 'content/v1.3.15/en/api';
const files = [
  'campaign-ext/SettlementLoyaltyModel.md',
  'campaign-ext/SettlementSecurityModel.md',
  'campaign-ext/SettlementProsperityModel.md',
  'campaign-ext/SettlementEconomyModel.md',
  'campaign-ext/SettlementFoodModel.md',
  'campaign-ext/SettlementGarrisonModel.md',
  'campaign-ext/SettlementTaxModel.md',
  'campaign-ext/MobilePartyFoodConsumptionModel.md',
];

const PREFIX = '/v1.3.15/en/api/';
function resolveTarget(file, link) {
  const servedDir = PREFIX + path.dirname(file) + '/' + path.basename(file, '.md') + '/';
  const parts = (servedDir + link).split('/').filter(Boolean);
  const out = [];
  for (const p of parts) {
    if (p === '.') continue;
    if (p === '..') out.pop();
    else out.push(p);
  }
  const norm = out.join('/');
  if (norm.endsWith('.md')) {
    return [path.join('content', norm)];
  }
  return [
    path.join('content', norm) + '.md',
    path.join('content', norm, '_index.md'),
  ];
}
function exists(p) { try { return fs.statSync(p).isFile(); } catch { return false; } }

let broken = 0, checked = 0;
const linkRe = /\[[^\]]*\]\(([^)#]+)(?:#[^)]*)?\)/g;
for (const f of files) {
  const txt = fs.readFileSync(path.join(API_ROOT, f), 'utf8');
  let m;
  while ((m = linkRe.exec(txt))) {
    let link = m[1].trim();
    if (!link || link.startsWith('http') || link.startsWith('mailto') || link.startsWith('/')) continue;
    checked++;
    const cands = resolveTarget(f, link);
    if (!cands.some(exists)) {
      broken++;
      console.log(`BROKEN  ${f}  ->  (${link})  ${cands.join(' | ')}`);
    }
  }
}
console.log(`\nEN: Checked ${checked} relative links across ${files.length} pages. Broken: ${broken}`);
process.exit(broken === 0 ? 0 : 1);
