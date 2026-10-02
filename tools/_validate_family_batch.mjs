import { classifyPage, extractFamilyEntries } from './lib/handwritten-policy.mjs';
import { readFileSync } from 'fs';

const files = [
  'content/v1.4.5/zh/api/perks/PerkEffects/_index.md',
  'content/v1.4.5/zh/api/view/Tableaus/_index.md',
  'content/v1.4.5/zh/api/mission-ext/AgentBehaviors/_index.md',
  'content/v1.4.5/zh/api/boardgames/_index.md',
  'content/v1.4.5/zh/api/gui/Nameplates/_index.md',
  'content/v1.4.5/zh/api/campaign-ext/SandBoxCampaignBehaviors/_index.md',
  'content/v1.4.5/zh/api/storymode/GameComponents/_index.md',
  'content/v1.4.5/zh/api/custombattle/_index.md',
  'content/v1.4.5/zh/api/view/Screens/_index.md',
];

let totalEntries = 0;
for (const f of files) {
  const txt = readFileSync(f, 'utf8');
  const r = classifyPage(f, txt);
  const entries = extractFamilyEntries(f, txt);
  totalEntries += entries.length;
  // show any entries missing a namespace (would NOT close gaps)
  const missingNs = entries.filter((e) => !e.namespace).map((e) => e.typeName);
  console.log(`${r.status.padEnd(16)} entries=${String(entries.length).padStart(3)}  ${f}`);
  if (missingNs.length) console.log(`   !! MISSING NAMESPACE for: ${missingNs.join(', ')}`);
  if (r.status !== 'family_entry_pass') console.log(`   reasons: ${JSON.stringify(r.reasons)}`);
}
console.log(`\nTOTAL family entries parsed: ${totalEntries}`);
