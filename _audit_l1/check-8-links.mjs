// Scoped link checker for the 8 L4 Settlement/economy model pages.
// Mirrors Zola serving semantics: a page file content/.../api/<bucket>/<Type>.md
// is served at /<ver>/<lang>/api/<bucket>/<Type>/ ; relative links resolve from there.
import fs from 'fs';
import path from 'path';

const API_ROOT = 'content/v1.3.15/zh/api';
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

// Resolve a relative link against the served URL of `file` (a page served at /<bucket>/<Type>/).
const PREFIX = '/v1.3.15/zh/api/'; // full site-relative root for these api pages
function resolveTarget(file, link) {
  // served dir for this page (file is relative to API_ROOT):
  const servedDir = PREFIX + path.dirname(file) + '/' + path.basename(file, '.md') + '/';
  let url = servedDir + link; // naive join
  // normalize against site root (leading slash already present)
  const parts = url.split('/').filter(Boolean);
  const out = [];
  for (const p of parts) {
    if (p === '.') continue;
    if (p === '..') out.pop();
    else out.push(p);
  }
  // out = normalized URL path from site root, e.g.
  //   v1.3.15/zh/api/campaign-ext/Sibling   (in-bucket)
  //   v1.3.15/zh/api/campaign/Name          (cross-bucket)
  //   v1.3.15/zh/guide/campaign-system      (guide, outside api/)
  // Map to filesystem: content/<normalized>
  const norm = out.join('/');
  const candidates = [
    path.join('content', norm) + '.md',
    path.join('content', norm, '_index.md'),
  ];
  return { rel: norm, candidates };
}

function exists(p) {
  try { return fs.statSync(p).isFile(); } catch { return false; }
}

let broken = 0, checked = 0;
const linkRe = /\[[^\]]*\]\(([^)#]+)(?:#[^)]*)?\)/g;
for (const f of files) {
  const abs = path.join(API_ROOT, f);
  const txt = fs.readFileSync(abs, 'utf8');
  let m;
  while ((m = linkRe.exec(txt))) {
    let link = m[1].trim();
    if (!link || link.startsWith('http') || link.startsWith('mailto')) continue;
    if (link.startsWith('/')) continue; // absolute internal — skip for this scope
    checked++;
    const { rel, candidates } = resolveTarget(f, link);
    const ok = candidates.some(exists);
    if (!ok) {
      broken++;
      console.log(`BROKEN  ${f}  ->  (${link})  candidates: ${candidates.join(' | ')}`);
    }
  }
}
console.log(`\nChecked ${checked} relative links across ${files.length} pages. Broken: ${broken}`);
process.exit(broken === 0 ? 0 : 1);
