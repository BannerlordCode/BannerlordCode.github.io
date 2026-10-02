import { readFileSync, existsSync } from 'fs';
import { dirname, resolve, join, basename } from 'path';

const pages = [
  'content/v1.3.15/zh/api/campaign-ext/PartyHealingModel.md',
  'content/v1.3.15/zh/api/campaign-ext/PartyMoraleModel.md',
  'content/v1.3.15/zh/api/campaign-ext/ClanFinanceModel.md',
  'content/v1.3.15/zh/api/campaign-ext/SettlementMilitiaModel.md',
  'content/v1.3.15/zh/api/campaign-ext/SmithingModel.md',
  'content/v1.3.15/zh/api/campaign-ext/CombatXpModel.md',
  'content/v1.3.15/zh/api/mission-ext/AgentApplyDamageModel.md',
  'content/v1.3.15/zh/api/mission-ext/BattleMoraleModel.md',
];

const linkRe = /\[[^\]]*\]\(([^)]+)\)/g;
let totalBroken = 0;

for (const p of pages) {
  const md = readFileSync(p, 'utf8');
  // Zola clean-URL: page served at .../api/<bucket>/<Type>/  (leaf dir = name without .md)
  const leafDir = join(dirname(p), basename(p, '.md')); // e.g. content/.../campaign-ext/PartyHealingModel
  const links = [...md.matchAll(linkRe)].map((m) => m[1]);
  const broken = [];
  for (const raw of links) {
    // skip external / anchors / mailto
    if (/^(https?:|mailto:|#|\/)/.test(raw)) continue;
    if (raw.startsWith('../') === false && raw.startsWith('./') === false && raw.startsWith('../../') === false) {
      // could be a same-dir ./Name/ written without ./
    }
    // resolve relative to leaf dir
    let rel = raw;
    if (rel.startsWith('./')) rel = rel.slice(2);
    const abs = resolve(leafDir, rel);
    // strip trailing slash
    const clean = abs.endsWith('/') ? abs.slice(0, -1) : abs;
    const candidates = [clean + '.md', join(clean, '_index.md'), clean];
    if (!candidates.some((c) => existsSync(c))) {
      broken.push(raw);
    }
  }
  const status = broken.length ? 'BROKEN' : 'OK';
  if (broken.length) totalBroken += broken.length;
  console.log(`${status}  ${p}  (links=${links.length}${broken.length ? ', broken=' + broken.join(', ') : ''})`);
}

console.log(`\nTOTAL_BROKEN = ${totalBroken}`);
process.exit(totalBroken === 0 ? 0 : 1);
