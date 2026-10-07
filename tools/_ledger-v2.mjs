// 权威台账 v2 —— 三处修正，全部来自 worker-36 的实测诊断：
//   ① 键必须是【桶 + 页名】。页名只在桶内唯一（worker-36 实测：MissionAgentSpawnLogic /
//      MetaData / ElementLoadData 三页全部因错桶而错位）
//   ② 不归属的页【单独成行】，绝不默认归给某人（§4w：看起来正常的数）
//   ③ 台账来源是「worker 声明的清单」，不是 git diff 全量抓 —— 后者会把别人的产出算进某人名下
//
// 用法: node tools/_ledger-v2.mjs
import { execSync } from 'node:child_process';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const R = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const API = 'content/v1.4.5/zh/api';
const sh = c => { try { return execSync(c, { cwd: R, encoding: 'utf8', maxBuffer: 1 << 28 }).trim(); } catch { return ''; } };

// 各 worker 声明的【桶 + 页名】。键一律写成 bucket/page。
const claimed = {
  'worker-34': [
    ...['TextExpression','SimpleExpression','SimpleText','TextIdExpression','SimpleNumberExpression','NumeralExpression','ParanthesisExpression','QualifiedIdentifierExpression','LangaugeMarkerExpression','MBTextModel','MBTextToken','DefaultTextProcessor','ArithmeticExpression','ComparisonExpression','ConditionExpression','FunctionCall','SelectionExpression','FieldExpression','ArithmeticOperation'].map(n => 'localization/' + n),
    ...['NameplateSize','ModuleCheckResult','SandBoxEditorMissionTester','DefeatHideoutBossObjective','MapAudioManager','ArenaPreloadView','GauntletStoryModeMapCheatsView','PlayerAlleyData','OppositionData','HideoutCinematicAgentInfo','MissionHideoutAmbushBossFightCinematicView','HideoutVisualOrderProvider'].map(n => 'gameplay/' + n),
    ...['HitType','ThumbnailDebugUtility','ItemInnerData','ItemList','MultiplayerCultureColorInfo','ScriptingInterfaceBase','AgentHelper','DropExtraWeaponOnStopUsageComponent','DefineGameNetworkMessageType','DefineSynchedMissionObjectType','ItemType','Target','TacticOption','MBNetworkPeer','PlayerTypes','DynamicNavmeshLocalIds','PerkAssemblyCollection','ProximityMapSearchStructInternal','IMBAgent','IMBMission','IMBNetwork','IMBWorld','IMBTestRun','AgentCreationResult','BannerTextureCreator','IAdminPanelTickable','IAdminPanelActionInternal','IAdminPanelOptionInternal'].map(n => 'mission/' + n),
  ],
  'worker-36': [
    ...['SaveContext','DefinitionContext','TypeDefinition','TypeDefinitionBase','LoadContext','ObjectSaveData','VariableSaveData','VariableLoadData','ObjectLoadData','ContainerSaveData','PropertySaveData','FieldSaveData','ElementSaveData','ContainerSaveId','SaveId','TypeSaveId','MemberTypeId','CustomField','GenericSaveId','MemberSaveData','SavedMemberType','InterfaceDefinition','StructDefinition','EnumDefinition','StringSerializer','BoolBasicTypeSerializer','IntBasicTypeSerializer','Vec3BasicTypeSerializer','ColorBasicTypeSerializer','MatrixFrameBasicTypeSerializer','ArchiveSerializer','ArchiveDeserializer','MetaData','ElementLoadData'].map(n => 'save-system/' + n),
  ],
  'worker-43': [
    ...['BattleSpawnLogic','AgentProximityMap','BattleDeploymentMissionController','AgentStatCalculateModel','FormationQuerySystem','BattleSpawnModel','MapCheckHelpers','MPCombatPerkEffect','HandPose','DedicatedServerConsoleCommandManager','CharacterThumbnailCache','CampaignSounds','ViewCreatorManager','MBDebugManager','MissionManager'].map(n => 'mission-ext/' + n),
    'mission-ext/MissionAgentSpawnLogic',
  ],
};

const diffInfo = p => {
  const d = sh(`git diff --numstat -- "${p}"`);
  if (!d) return null;
  const [a, b] = d.split('\t').map(x => (x || '').trim());
  return { add: +a || 0, del: +b || 0 };
};

let totalClaimed = 0, written = 0, missing = [], emptyDiff = [];
const byWorker = {};
for (const [w, list] of Object.entries(claimed)) {
  const uniq = [...new Set(list)];            // 桶内去重，不再按页名去重
  const seen = new Set(); const dupes = [];
  for (const k of uniq) { if (seen.has(k)) dupes.push(k); seen.add(k); }
  byWorker[w] = { claimed: uniq.length, ok: 0, dupes, missing: [], empty: [] };
  totalClaimed += uniq.length;
  for (const k of uniq) {
    const p = `${API}/${k}.md`;
    if (!existsSync(`${R}/${p}`)) { missing.push(`${w}: ${k}`); byWorker[w].missing.push(k); continue; }
    const d = diffInfo(p);
    if (!d || (d.add === 0 && d.del === 0)) { emptyDiff.push(`${w}: ${k}`); byWorker[w].empty.push(k); continue; }
    byWorker[w].ok++; written++;
  }
}

console.log('=== 权威台账 v2（键 = 桶 + 页名）===\n');
for (const [w, x] of Object.entries(byWorker)) {
  console.log(`  ${w.padEnd(11)} 声明 ${String(x.claimed).padStart(3)}  ·  已写 ${String(x.ok).padStart(3)}  ·  桶内重名 ${x.dupes.length}  ·  磁盘无 ${x.missing.length}  ·  diff 空 ${x.empty.length}`);
}
console.log(`\n  声明合计 ${totalClaimed}   已写 ${written}   磁盘无 ${missing.length}   diff 空 ${emptyDiff.length}`);

// 不归属的页：树里脏、但不在任何人的清单里
// ⚠ 两个真实的坑，都已踩：
//   ① sh() 里的 .trim() 会吃掉【第一条记录】的前导空格（porcelain 是「2 个状态字符 + 1 空格 + 路径」），
//      于是第一条路径被 slice(3) 削掉首字母，凭空冒出一个叫「ontent」的桶 —— 看起来完全正常。
//   ② core.quotepath 会给含特殊字符的路径加引号，短格式下又错一列。-z 两种都避开。
// ⇒ 这里【不】用 sh()，直接 execSync，不 trim。
const allClaimed = new Set(Object.values(claimed).flat());
let statusOut;
try {
  statusOut = execSync('git status --porcelain -z -- ' + API, { cwd: R, encoding: 'utf8', maxBuffer: 1 << 28 });
} catch { statusOut = ''; }
const dirty = statusOut.split('\0').filter(Boolean).map(rec => {
  const p = rec.slice(3).replace(/\\/g, '/');            // -z 下恒为 2 状态 + 1 空格 + 路径
  const real = p.includes(' -> ') ? p.split(' -> ').pop() : p;
  return real.startsWith(API + '/') ? real.slice(API.length + 1) : real;
}).filter(k => k.endsWith('.md') && !k.endsWith('/_index.md') && k.includes('/') && !k.startsWith('ontent/'));

const unattributed = dirty.filter(k => !allClaimed.has(k));
const byBucket = {};
for (const k of unattributed) { const b = k.split('/')[0]; byBucket[b] = (byBucket[b] || 0) + 1; }
console.log(`\n=== 树里脏但【不在任何 worker 清单】的页 = ${unattributed.length}  （§4w：不归属的页单独成行，不默认归给某人）`);
for (const [b, n] of Object.entries(byBucket).sort((a, b) => b[1] - a[1])) console.log(`  ${b.padEnd(14)} ${n}`);

console.log('\n=== 需要人工定性的三处 ===');
missing.forEach(x => console.log('  磁盘上不存在   ' + x));
emptyDiff.forEach(x => console.log('  存在但 diff 空 ' + x));
if (!missing.length && !emptyDiff.length) console.log('  （无）');
