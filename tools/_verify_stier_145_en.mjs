// Verify the 48 S-tier EN deep pages for v1.4.5.
// For each canonical target path: read the page (if present), classify it via
// handwritten-policy, and additionally apply the en-s-tier BANS/THIN checks.
import { readFileSync, existsSync } from 'node:fs';
import { classifyPage } from './lib/handwritten-policy.mjs';

const API = 'content/v1.4.5/en/api';

// canonical sub-paths for the 48 S-tier types (isomorphic to v1.3.15/en)
const TARGETS = [
  ['MBGameManager', 'mission-ext/MBGameManager.md'],
  ['MBObjectManager', 'campaign-ext/MBObjectManager.md'],
  ['TextObject', 'localization/TextObject.md'],
  ['SaveableTypeDefiner', 'save-system/SaveableTypeDefiner.md'],
  ['SaveableField', 'save-system/SaveableFieldAttribute.md'],
  ['SaveableProperty', 'save-system/SaveablePropertyAttribute.md'],
  ['ViewModel', 'core-extra/ViewModel.md'],
  ['ScreenBase', 'campaign-ext/ScreenBase.md'],
  ['ScreenManager', 'gui/ScreenManager.md'],
  ['GauntletLayer', 'engine/GauntletLayer.md'],
  ['SaveManager', 'save-system/SaveManager.md'],
  ['CampaignEvents', 'campaign-ext/CampaignEvents.md'],
  ['CampaignEventReceiver', 'campaign-ext/CampaignEventReceiver.md'],
  ['CampaignBehaviorBase', 'campaign-ext/CampaignBehaviorBase.md'],
  ['CampaignGameStarter', 'campaign-ext/CampaignGameStarter.md'],
  ['Team', 'mission/Team.md'],
  ['Formation', 'mission/Formation.md'],
  ['Hero', 'campaign/Hero.md'],
  ['CharacterObject', 'campaign/CharacterObject.md'],
  ['Clan', 'campaign/Clan.md'],
  ['Kingdom', 'campaign/Kingdom.md'],
  ['Settlement', 'campaign/Settlement.md'],
  ['Town', 'campaign/Town.md'],
  ['Village', 'campaign/Village.md'],
  ['MobileParty', 'campaign/MobileParty.md'],
  ['PartyBase', 'campaign/PartyBase.md'],
  ['Army', 'campaign-ext/Army.md'],
  ['SiegeEvent', 'campaign-ext/SiegeEvent.md'],
  ['TroopRoster', 'campaign-ext/TroopRoster.md'],
  ['ItemRoster', 'campaign-ext/ItemRoster.md'],
  ['Equipment', 'core-extra/Equipment.md'],
  ['ItemObject', 'core/ItemObject.md'],
  ['SkillObject', 'core-extra/SkillObject.md'],
  ['CultureObject', 'campaign-ext/CultureObject.md'],
  ['Banner', 'core-extra/Banner.md'],
  ['Workshop', 'campaign/Workshop.md'],
  ['KillCharacterAction', 'campaign-ext/KillCharacterAction.md'],
  ['ChangeRelationAction', 'campaign-ext/ChangeRelationAction.md'],
  ['ChangeKingdomAction', 'campaign-ext/ChangeKingdomAction.md'],
  ['DeclareWarAction', 'campaign-ext/DeclareWarAction.md'],
  ['MakePeaceAction', 'campaign-ext/MakePeaceAction.md'],
  ['GiveGoldAction', 'campaign-ext/GiveGoldAction.md'],
  ['AddHeroToPartyAction', 'campaign-ext/AddHeroToPartyAction.md'],
  ['DestroyPartyAction', 'campaign-ext/DestroyPartyAction.md'],
  ['TakePrisonerAction', 'campaign-ext/TakePrisonerAction.md'],
  ['MarriageAction', 'campaign-ext/MarriageAction.md'],
  ['ChangeOwnerOfSettlementAction', 'campaign-ext/ChangeOwnerOfSettlementAction.md'],
  ['StartBattleAction', 'campaign-ext/StartBattleAction.md'],
];

// en-s-tier BANS (from en-s-tier-quality.mjs) — boilerplate that must not appear
const BANS = [
  { id: 'public-type', re: /is a public type (?:in|under)\s+TaleWorlds\.\S+/iu },
  { id: 'somevalue', re: /\bSomeValue\b/ },
  { id: 'obtain-instance', re: /Obtain an instance of this type from the relevant subsystem API/iu },
  { id: 'zh-boilerplate', re: /是\s+TaleWorlds\.\S+\s+(?:下|中)的公开类型/ },
  { id: 'ellipsis-assign', re: /\w+\s*=\s*\.\.\.;/ },
];

let pass = 0;
let fail = 0;
const missing = [];
const failed = [];

for (const [name, rel] of TARGETS) {
  const p = `${API}/${rel}`;
  if (!existsSync(p)) {
    missing.push(name);
    console.log(`MISSING  ${name.padEnd(28)} ${rel}`);
    continue;
  }
  const text = readFileSync(p, 'utf8');
  const c = classifyPage(p, text);
  const bans = BANS.filter((b) => b.re.test(text)).map((b) => b.id);
  const len = text.length;
  const thin = !/^#{2}\s+(?:心智模型|Mental\s*Model)\s*$/imu.test(text) || len < 2500;
  const ok = c.status === 'deep_pass' && bans.length === 0 && !thin;
  if (ok) {
    pass++;
    console.log(`OK       ${name.padEnd(28)} ${rel}  [${c.reasons.join(', ')}]`);
  } else {
    fail++;
    const reasons = [...c.reasons, ...bans.map((b) => `BAN:${b}`), ...(thin ? ['THIN'] : [])];
    failed.push({ name, rel, reasons });
    console.log(`FAIL     ${name.padEnd(28)} ${rel}  status=${c.status} reasons=${reasons.join('; ')} len=${len}`);
  }
}

console.log('\n==== SUMMARY ====');
console.log(`total targets : ${TARGETS.length}`);
console.log(`present       : ${TARGETS.length - missing.length}`);
console.log(`missing       : ${missing.length}  -> ${missing.join(', ')}`);
console.log(`deep_pass OK  : ${pass}`);
console.log(`failed        : ${fail}`);
if (failed.length) {
  console.log('\nFAILED DETAIL:');
  for (const f of failed) console.log(`  - ${f.name} (${f.rel}): ${f.reasons.join('; ')}`);
}
