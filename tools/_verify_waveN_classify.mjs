import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { classifyPage } from './lib/handwritten-policy.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const targets = [
  'content/v1.4.5/zh/api/campaign/MapTimeTracker.md',
  'content/v1.4.5/zh/api/campaign/LocatorGrid.md',
  'content/v1.4.5/zh/api/campaign/NavigationCacheElement.md',
  'content/v1.4.5/zh/api/campaign/PeriodicTicker.md',
  'content/v1.4.5/zh/api/campaign/CachedPartyVariables.md',
  'content/v1.4.5/zh/api/campaign/BehaviorSaveData.md',
];
let allPass = true;
for (const rel of targets) {
  const abs = join(root, rel);
  let text;
  try { text = readFileSync(abs, 'utf8'); } catch (e) { console.log(`${rel}: MISSING (${e.message})`); allPass = false; continue; }
  const res = classifyPage(rel, text);
  const ok = res.status === 'deep_pass';
  if (!ok) allPass = false;
  console.log(`${ok ? 'PASS' : 'FAIL'} ${rel} -> ${res.status} [${res.reasons.join('|')}]`);
}
console.log(allPass ? '\nALL_DEEP_PASS' : '\nNOT_ALL_DEEP_PASS');
