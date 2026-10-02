import { readFileSync } from 'node:fs';
import { classifyPage } from './lib/handwritten-policy.mjs';

const files = [
  'content/v1.4.5/zh/api/campaign/CampaignObjectBase.md',
  'content/v1.4.5/zh/api/campaign/CampaignEntityComponent.md',
  'content/v1.4.5/zh/api/campaign/CampaignData.md',
  'content/v1.4.5/zh/api/campaign/CampaignGameMode.md',
  'content/v1.4.5/zh/api/campaign/CampaignTimeModel.md',
  'content/v1.4.5/zh/api/campaign/CampaignOptions.md',
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
