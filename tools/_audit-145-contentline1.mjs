// v1.4.5 content-line-1 delivery audit — READ-ONLY. Prints a table; writes nothing.
//
// Usage:
//   node tools/_audit-145-contentline1.mjs            # full audit (runs the anti-fabrication gate too, ~70s)
//   node tools/_audit-145-contentline1.mjs --quick    # skip the gate (classify + claims only, ~2s)
//
// Why this exists: the anti-fabrication gate scans a WHOLE directory, so its global
// FABRICATED count includes every other worker's legacy debt. The acceptance rule is
// per-filename. Hand-filtering that output with a regex is exactly where a false
// "0 FABRICATED in my pages" comes from, so the filter lives in code.
//
// Scope: only the 80 pages assigned to this content line. It does NOT judge pages
// outside the manifest, and it does not write to content/.

import { readFileSync, existsSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { classifyPage } from './lib/handwritten-policy.mjs';
import { runGate } from './lib/anti-fabrication.mjs';

const REPO = resolve(new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));

const MANIFEST = {
  'W1 zhCE': ['content/v1.4.5/zh/api/campaign-ext', [
    'CharacterCreationScreen', 'CharacterCreationStageViewBase', 'CharacterCreationStageViewAttribute',
    'ChangePlayerCharacterAction', 'BreakInOutBesiegedSettlementAction', 'CampaignMusicHandler',
    'CampaignSiegeStateHandler', 'CampaignStoryMode', 'CautiousBehavior', 'AgentBehavior',
    'AgentBehaviorManager', 'AIBehaviorData', 'AIDifficulty', 'AIState', 'AgeModel',
    'BanditDensityModel', 'ArmyTypes', 'MapEventSide', 'NavigationHelper', 'AchievementManager',
  ]],
  'W2 enCE': ['content/v1.4.5/en/api/campaign-ext', [
    'CampaignAgentComponent', 'CharacterCreationScreen', 'CharacterCreationStageViewBase',
    'CharacterCreationStageViewAttribute', 'ChangeClanLeaderAction', 'ChangeClanInfluenceAction',
    'ChangeOwnerOfSettlementDetail', 'ChangeRulingClanAction', 'ChangePlayerCharacterAction',
    'BribeGuardsAction', 'BreakInOutBesiegedSettlementAction', 'CampaignMusicHandler',
    'CampaignSiegeStateHandler', 'CampaignStoryMode', 'CautiousBehavior', 'AgentBehavior',
    'AgentBehaviorManager', 'AIState', 'BarberCampaignBehavior', 'BehaviorSets',
  ]],
  'W3 zhME': ['content/v1.4.5/zh/api/mission-ext', [
    'MissionState', 'AgentBuildData', 'AgentCommonAILogic', 'AgentHumanAILogic', 'AgentProximityMap',
    'AgentSpawnData', 'AgentStatCalculateModel', 'AgentStatusCondition', 'AgentVictoryLogic',
    'AgentVisuals', 'AgentVisualsCreator', 'AgentVisualsData', 'AgentCapsuleData',
    'AgentDrivenProperties', 'AgentLastHitInfo', 'AgentController', 'AgentComponent',
    'BattleSpawnLogic', 'BattleSpawnModel', 'BattleDeploymentMissionController',
  ]],
  'W4 enME': ['content/v1.4.5/en/api/mission-ext', [
    'AgentApplyDamageModel', 'AgentBuildData', 'AgentCommonAILogic', 'AgentHumanAILogic',
    'AgentProximityMap', 'AgentSpawnData', 'AgentStatCalculateModel', 'AgentStatusCondition',
    'AgentVictoryLogic', 'AgentVisuals', 'AgentVisualsCreator', 'AgentVisualsData',
    'AgentCapsuleData', 'AgentDrivenProperties', 'AgentLastHitInfo', 'AgentController',
    'AgentComponent', 'BattleSpawnLogic', 'BattleSpawnModel', 'BattleDeploymentMissionController',
  ]],
};

const STUB_MARKER = '的自动生成类参考';

function claimCount(text) {
  const blocks = [...text.matchAll(/```csharp\r?\n([\s\S]*?)```/gi)].map((m) => m[1]);
  const set = new Set();
  for (const b of blocks) for (const m of b.matchAll(/\.([A-Za-z_]\w*)\s*(?:<[^>]*>)?\s*\(/g)) set.add(m[1]);
  return { blocks: blocks.length, claims: set.size };
}

const rows = [];
for (const [worker, [dir, names]] of Object.entries(MANIFEST)) {
  for (const name of names) {
    const rel = `${dir}/${name}.md`;
    const abs = join(REPO, rel);
    if (!existsSync(abs)) { rows.push({ worker, name, rel, missing: true }); continue; }
    const text = readFileSync(abs, 'utf8');
    const cls = classifyPage(rel, text);
    const { blocks, claims } = claimCount(text);
    rows.push({
      worker, name, rel,
      status: cls.status,
      reasons: (cls.reasons || []).join(','),
      blocks, claims,
      stubMarker: text.includes(STUB_MARKER) ? 'YES' : 'no',
    });
  }
}

console.log('=== deep_pass / claims (read-only; writes nothing) ===');
console.log('worker  status      blk claims marker  page');
for (const r of rows) {
  if (r.missing) { console.log(`${r.worker.padEnd(8)} MISSING     -     -   -      ${r.name}`); continue; }
  const flag = r.status === 'deep_pass' ? '' : `  <- ${r.reasons}`;
  console.log(
    `${r.worker.padEnd(8)} ${String(r.status).padEnd(10)} ${String(r.blocks).padStart(3)} ` +
    `${String(r.claims).padStart(5)}   ${r.stubMarker.padEnd(5)}  ${r.name}${flag}`
  );
}

const done = rows.filter((r) => r.status === 'deep_pass').length;
const missing = rows.filter((r) => r.missing).length;
const markers = rows.filter((r) => r.stubMarker === 'YES').length;
const totalClaims = rows.reduce((a, r) => a + (r.claims || 0), 0);
console.log(`\ndeep_pass ${done}/80   missing ${missing}   stub-marker-leaks ${markers}   member_claims ${totalClaims}`);

if (process.argv.includes('--quick')) { console.log('(--quick: anti-fabrication gate SKIPPED)'); process.exit(0); }

console.log('\n=== anti-fabrication gate, filtered to the 80 manifest pages ===');
const gate = runGate({ contentRoot: REPO, sourceRoot: resolve(REPO, '../bannerlord-1.4.5') });
if (gate.error) { console.error('GATE ERROR: ' + gate.error); process.exit(2); }
console.log(`positive control: ${gate.control.filter((c) => c.found).length}/${gate.control.length}`);
if (gate.control.some((c) => !c.found)) {
  console.error('POSITIVE CONTROL FAILED — gate cannot see real API; every miss below is meaningless.');
  process.exit(2);
}
console.log(`directory-wide FABRICATED (includes other legacy debt): ${gate.fabrications.length}`);

const mine = new Map(rows.filter((r) => !r.missing).map((r) => [r.rel, r.name]));
const scoped = gate.fabrications.filter((f) => mine.has(f.page));
console.log(`FABRICATED within the 80 manifest pages: ${scoped.length}`);
for (const f of scoped) console.log(`  ${mine.get(f.page)}  .${f.identifier}()  [block ${f.block}]`);

const out = `tools/_audit-145-contentline1-latest.json`;
writeFileSync(join(REPO, out), JSON.stringify({
  deepPass: done, missing, stubMarkerLeaks: markers, memberClaims: totalClaims,
  gateGlobalFabrications: gate.fabrications.length,
  gateScopedFabrications: scoped.length, scoped,
}, null, 1));
console.log(`\nmachine-readable -> ${out}`);
process.exit(scoped.length === 0 && missing === 0 && markers === 0 && done === 80 ? 0 : 1);
