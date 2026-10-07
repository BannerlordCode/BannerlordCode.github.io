// 台账与实测对账：找出「我台账里有、磁盘没有」与「磁盘上在册、但台账没列」的两类。
// 这是 §4w 的实践：N 必须能从逐页清单复现，而不是从总数相减。
import { readFileSync, readdirSync, existsSync } from 'node:fs';

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

// 磁盘侧：所有「本轮改过」且当前非 HEAD 原样的页
const declared = new Set();
for (const buckets of Object.values(ledger))
  for (const [b, names] of Object.entries(buckets)) names.forEach(n => declared.add(`${b}/${n}.md`));

console.log('=== A. 台账里有、磁盘上没有 ===');
let a = 0;
for (const k of [...declared].sort()) {
  if (!existsSync(R + '/' + k)) { console.log('  ✗ ' + k); a++; }
}
if (!a) console.log('  （无）');

console.log('\n=== B. 磁盘上本轮改过、但台账没列（按桶，逐页）===');
const { execSync } = await import('node:child_process');
const REPO = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const dirty = execSync('git status --porcelain -- content/v1.4.5/zh/api', { cwd: REPO, encoding: 'utf8', maxBuffer: 1 << 26 })
  .split(/\r?\n/).filter(Boolean).map(l => l.slice(3).trim().replace(/\\/g, '/'))
  .map(f => f.replace('content/v1.4.5/zh/api/', ''));

const unlisted = dirty.filter(k => !declared.has(k) && k.endsWith('.md'));
console.log('  脏页总数 = ' + dirty.length + '   台账已列 = ' + declared.size + '   未列 = ' + unlisted.length);
const byB = new Map();
for (const k of unlisted) { const b = k.split('/')[0]; if (!byB.has(b)) byB.set(b, []); byB.get(b).push(k.split('/').pop()); }
for (const [b, v] of byB) console.log('   ' + b.padEnd(12) + v.length + '  ' + v.slice(0, 12).join(', ') + (v.length > 12 ? ' …' : ''));
