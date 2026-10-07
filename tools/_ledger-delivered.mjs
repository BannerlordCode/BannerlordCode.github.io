// 已交付页台账：逐页去重，避免「同名页跨桶重复」把数算大。
// 数据来自各 worker 的收口报告（不是估算），逐页列出以便复核。
import { readFileSync, existsSync } from 'node:fs';

const R = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io/content/v1.4.5/zh/api';

const ledger = {
  'worker-34': {
    localization: ['TextExpression','SimpleExpression','SimpleText','TextIdExpression','SimpleNumberExpression',
      'NumeralExpression','ParanthesisExpression','QualifiedIdentifierExpression','LangaugeMarkerExpression',
      'MBTextModel','MBTextToken','DefaultTextProcessor','ArithmeticExpression','ComparisonExpression',
      'ConditionExpression','FunctionCall','SelectionExpression','FieldExpression','ArithmeticOperation'],
    gameplay: ['NameplateSize','ModuleCheckResult','SandBoxEditorMissionTester','DefeatHideoutBossObjective',
      'MapAudioManager','ArenaPreloadView','GauntletStoryModeMapCheatsView','PlayerAlleyData','OppositionData',
      'HideoutCinematicAgentInfo','MissionHideoutAmbushBossFightCinematicView','HideoutVisualOrderProvider'],
    mission: ['HitType','ThumbnailDebugUtility','ItemInnerData','ItemList','MultiplayerCultureColorInfo',
      'ScriptingInterfaceBase','AgentHelper','DropExtraWeaponOnStopUsageComponent','DefineGameNetworkMessageType',
      'DefineSynchedMissionObjectType','ItemType','Target','TacticOption','MBNetworkPeer','PlayerTypes',
      'DynamicNavmeshLocalIds','PerkAssemblyCollection','ProximityMapSearchStructInternal',
      'IMBAgent','IMBMission','IMBNetwork','IMBWorld','IMBTestRun','AgentCreationResult','BannerTextureCreator',
      'IAdminPanelTickable','IAdminPanelActionInternal','IAdminPanelOptionInternal'],
  },
  'worker-36': {
    'save-system': ['SaveContext','DefinitionContext','TypeDefinition','TypeDefinitionBase','LoadContext',
      'ObjectSaveData','VariableSaveData','VariableLoadData','ObjectLoadData','ContainerSaveData',
      'PropertySaveData','FieldSaveData','ElementSaveData','ContainerSaveId','SaveId','TypeSaveId','MemberTypeId',
      'CustomField','GenericSaveId','MemberSaveData','SavedMemberType','InterfaceDefinition','StructDefinition',
      'EnumDefinition','StringSerializer','BoolBasicTypeSerializer','IntBasicTypeSerializer',
      'Vec3BasicTypeSerializer','ColorBasicTypeSerializer','MatrixFrameBasicTypeSerializer',
      'ArchiveSerializer','ArchiveDeserializer','ArrayBasicTypeSerializer'],
  },
  'worker-43': {
    'mission-ext': ['BattleSpawnLogic','AgentProximityMap','BattleDeploymentMissionController',
      'AgentStatCalculateModel','FormationQuerySystem','BattleSpawnModel','MissionLogic','MapCheckHelpers',
      'MPCombatPerkEffect','HandPose','DedicatedServerConsoleCommandManager','CharacterThumbnailCache',
      'CampaignSounds','ViewCreatorManager','MBDebugManager','MissionManager','AgentHelper'],
  },
};

const all = new Map();
let dupes = [];
for (const [w, buckets] of Object.entries(ledger)) {
  for (const [bucket, names] of Object.entries(buckets)) {
    for (const n of names) {
      const key = n; // cross-bucket same name is the same page identity
      if (all.has(key)) dupes.push(`${n}  (${all.get(key).w}/${all.get(key).b} 与 ${w}/${bucket})`);
      else all.set(key, { w, b: bucket });
    }
  }
}

console.log('=== 已交付页台账（逐页去重）===');
console.log('  去重后总页数 = ' + all.size);
console.log('');
for (const [w, buckets] of Object.entries(ledger)) {
  let n = 0;
  for (const names of Object.values(buckets)) n += names.length;
  console.log('  ' + w.padEnd(11) + ' 报告 ' + String(n).padStart(3) + ' 条 → ' +
    Object.keys(buckets).map(b => `${b} ${buckets[b].length}`).join(' / '));
}
if (dupes.length) {
  console.log('\n=== 跨 worker / 跨桶重复计数（这就是 §4w 要排掉的那一类）===');
  for (const d of dupes) console.log('  ' + d);
}
let missing = [];
for (const [n, m] of all) {
  const p = `${R}/${m.b}/${n}.md`;
  if (!existsSync(p)) missing.push(`${m.w} 报称写了 ${m.b}/${n}.md —— 但磁盘上找不到`);
}
console.log('\n=== 台账 vs 磁盘 ===');
console.log('  台账中磁盘不存在的页 = ' + missing.length);
missing.forEach(x => console.log('    ' + x));
