import { readFileSync } from 'node:fs';
import { classifyPage } from './lib/handwritten-policy.mjs';

const files = [
  'content/v1.4.5/zh/api/campaign/BuildingModel.md',
  'content/v1.4.5/zh/api/campaign/BuildingScoreCalculationModel.md',
  'content/v1.4.5/zh/api/campaign/BuildingsCampaignBehavior.md',
  'content/v1.4.5/zh/api/campaign/BuildingType.md',
  'content/v1.4.5/zh/api/campaign/BuildingEffectEnum.md',
  'content/v1.4.5/zh/api/campaign/BuildingEffectIncrementType.md',
];

let allPass = true;
const results = [];
for (const f of files) {
  const text = readFileSync(f, 'utf8');
  const r = classifyPage(f, text);
  const ok = r.status === 'deep_pass';
  if (!ok) allPass = false;
  results.push({ file: f, status: r.status, reasons: r.reasons });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${f}  -> ${r.status}  [${r.reasons.join(', ')}]`);
}
console.log('---');
console.log(allPass ? 'ALL_DEEP_PASS=true' : 'ALL_DEEP_PASS=false');
process.exit(allPass ? 0 : 1);
