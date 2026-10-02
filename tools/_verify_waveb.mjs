// Wave #B verification: classify the 5 central L2 campaign entities.
// Usage: node tools/_verify_waveB.mjs
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { classifyPage } from './lib/handwritten-policy.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const targets = [
  'content/v1.4.5/zh/api/campaign/Hero.md',
  'content/v1.4.5/zh/api/campaign/MobileParty.md',
  'content/v1.4.5/zh/api/campaign/Settlement.md',
  'content/v1.4.5/zh/api/campaign/Clan.md',
  'content/v1.4.5/zh/api/campaign/Kingdom.md',
];

let allDeep = true;
const rows = [];
for (const rel of targets) {
  const abs = join(root, rel);
  let text;
  try {
    text = readFileSync(abs, 'utf8');
  } catch (e) {
    rows.push({ rel, status: 'MISSING', reasons: [String(e.message)] });
    allDeep = false;
    continue;
  }
  const res = classifyPage(rel, text);
  if (res.status !== 'deep_pass') allDeep = false;
  rows.push({ rel, status: res.status, reasons: res.reasons });
}

console.log('=== Wave #B classifyPage results ===');
for (const r of rows) {
  console.log(`${r.status.toUpperCase().padEnd(12)} ${r.rel}`);
  console.log(`   reasons: ${r.reasons.join(', ')}`);
}
console.log(`\nSUMMARY: ${(rows.filter((r) => r.status === 'deep_pass').length)}/${rows.length} deep_pass`);
process.exit(allDeep ? 0 : 1);
