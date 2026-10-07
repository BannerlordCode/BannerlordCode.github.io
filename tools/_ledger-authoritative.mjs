// 权威交付数：台账 ∩ 磁盘存在 ∩ 本轮内容确实改变（git diff 非空）。
// 三层过滤，任何一层不过就不计入 —— 这正是 §4w 的实践。
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const REPO = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const R = REPO + '/content/v1.4.5/zh/api';

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
      'ArchiveSerializer','ArchiveDeserializer','ArrayBasicTypeSerializer',
      // 第三批新页组（mtime=2026-08-14 的未达标存量页，走改写路径，非复查）
      'MetaData','ElementLoadData'],
  },
  'worker-43': {
    'mission-ext': ['BattleSpawnLogic','AgentProximityMap','BattleDeploymentMissionController',
      'AgentStatCalculateModel','FormationQuerySystem','BattleSpawnModel','MissionLogic','MapCheckHelpers',
      'MPCombatPerkEffect','HandPose','DedicatedServerConsoleCommandManager','CharacterThumbnailCache',
      'CampaignSounds','ViewCreatorManager','MBDebugManager','MissionManager','AgentHelper'],
  },
};

// 归一：一个页名 = 一个身份，跨桶同名算同一页（§4w）
const claimed = new Map();
for (const [w, buckets] of Object.entries(ledger))
  for (const [b, names] of Object.entries(buckets))
    for (const n of names) {
      if (!claimed.has(n)) claimed.set(n, []);
      claimed.get(n).push(`${w}/${b}`);
    }

const sh = c => { try { return execSync(c, { cwd: REPO, encoding: 'utf8', maxBuffer: 1 << 28 }).trim(); } catch { return ''; } };
const dirtySet = new Set(sh('git status --porcelain -- content/v1.4.5/zh/api')
  .split(/\r?\n/).filter(Boolean).map(l => l.slice(3).trim().replace(/\\/g, '/').replace('content/v1.4.5/zh/api/', '')));

let counted = 0;
const missingOnDisk = [], notDirty = [], dupPages = [];
for (const [name, where] of claimed) {
  if (where.length > 1) dupPages.push(`${name}  被报了 ${where.length} 次: ${where.join(' , ')}`);
  const loc = where.map(w => w.split('/')[1]).filter(Boolean);
  const onDisk = loc.filter(b => existsSync(`${R}/${b}/${name}.md`));
  if (!onDisk.length) { missingOnDisk.push(`${name}  (${where.join(',')})`); continue; }
  const isDirty = onDisk.some(b => dirtySet.has(`${b}/${name}.md`));
  if (!isDirty) { notDirty.push(`${name}  (${onDisk.join(',')})`); continue; }
  counted++;
}

console.log('=== 权威交付数（三层过滤后）===');
console.log('  台账声明页名（去重）      = ' + claimed.size);
console.log('  − 磁盘上不存在            = ' + missingOnDisk.length);
console.log('  − 存在但内容未变          = ' + notDirty.length);
console.log('  ⇒ 本轮实际交付            = ' + counted);
console.log('');
if (dupPages.length) { console.log('=== 同一页被多线重复计数（§4w）==='); dupPages.forEach(x => console.log('  ' + x)); console.log(''); }
if (missingOnDisk.length) { console.log('=== 台账有、磁盘无 ==='); missingOnDisk.forEach(x => console.log('  ' + x)); }
if (notDirty.length) { console.log('=== 存在但内容未变 ==='); notDirty.forEach(x => console.log('  ' + x)); }
