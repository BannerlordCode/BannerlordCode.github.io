import { readFileSync } from 'fs';
import { join } from 'path';
import { classifyPage } from './lib/handwritten-policy.mjs';

const targets = [
  'SettlementMenuOverlayModel',
  'PartyMoraleModel',
  'PartyWageModel',
  'PartySizeLimitModel',
  'MobilePartyAIModel',
  'AgeModel',
];
const base = 'content/v1.4.5/zh/api/campaign';
let allPass = true;
for (const t of targets) {
  const p = join(base, `${t}.md`);
  let text;
  try { text = readFileSync(p, 'utf8'); } catch (e) { console.log(`${t}: MISSING`); allPass = false; continue; }
  const r = classifyPage(p, text);
  const status = r.status || r.classification || JSON.stringify(r);
  const ok = status === 'deep_pass';
  if (!ok) allPass = false;
  console.log(`${t}: ${status}` + (ok ? '' : `  detail=${JSON.stringify(r).slice(0, 200)}`));
}
console.log('ALL_DEEP_PASS=' + allPass);
