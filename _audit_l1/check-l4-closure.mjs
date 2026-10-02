// Scoped broken-link checker for the L4 ZH closure pages.
// Mirrors Zola clean-URL serving semantics: a leaf page at
// /v1.3.15/zh/api/<bucket>/<Type>/ resolves relative links against that dir.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const PREFIX = '/v1.3.15/zh/api/campaign-ext/';
const files = [
  'MobilePartyAIModel', 'PartyDesertionModel', 'BuildingModel', 'BuildingConstructionModel',
  'SettlementLoyaltyModel', 'SettlementSecurityModel', 'SettlementProsperityModel',
  'SettlementEconomyModel', 'SettlementFoodModel', 'SettlementGarrisonModel', 'SettlementTaxModel',
];

function existsAsPage(p) {
  // p is a normalized absolute content path (no trailing slash)
  return fs.existsSync(p + '.md') || fs.existsSync(p + '/_index.md') || fs.existsSync(p + '/index.md');
}

let total = 0, broken = 0;
const brokenList = [];
for (const f of files) {
  const src = path.join(ROOT, 'content', 'v1.3.15/zh/api/campaign-ext', f + '.md');
  if (!fs.existsSync(src)) { console.log('MISSING FILE', src); continue; }
  const html = fs.readFileSync(src, 'utf8');
  // virtual dir of this page under the site
  const pageVirtual = PREFIX + f + '/';
  const re = /\[[^\]]+\]\(([^)]+)\)/g;
  let m;
  while ((m = re.exec(html))) {
    const href = m[1].trim();
    if (!href.startsWith('.')) continue; // skip absolute / external
    if (href.startsWith('mailto:')) continue;
    total++;
    // resolve relative to pageVirtual using posix URL rules
    const resolved = path.posix.normalize(path.posix.join(pageVirtual, href));
    // strip trailing slash
    const norm = resolved.replace(/\/$/, '');
    const contentPath = path.join(ROOT, 'content', norm);
    if (!existsAsPage(contentPath)) {
      broken++;
      brokenList.push({ page: f, href, resolved: norm });
    }
  }
}
console.log(`Checked ${files.length} pages · links=${total} · Broken=${broken}`);
for (const b of brokenList) console.log('  BROKEN', b.page, '->', b.href, '(', b.resolved, ')');
