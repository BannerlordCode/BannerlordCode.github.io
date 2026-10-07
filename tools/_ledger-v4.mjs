// 权威台账 v3 —— 三类交付 + 甲/乙分档（boss #7145 定稿）
//
// v3 → v4 的变更，由 boss #7162 逼出来：
//   ③ 键从「桶 + 页名」改成【完整仓库相对路径】。
//      实测依据：全树 7,166 个页名中 7,165 个出现 >1 次，最多 22 份副本；
//      桶之上还有版本与语言两层 ⇒ 加桶不解决任何问题。
//      这是我今天第三次栽在同一个坑上（类型名 → 桶+页名 → 默认它唯一）。
//   ① 交付分类必须覆盖【本项目所有算交付的形态】，否则分母偏小，
//      差额会以「未归属 / 异常」的形式出现在报表里 —— 而那档在读者眼里是「有问题」，实际是「没记账」
//   ② 「磁盘脏而无人声明」不等于「无主」：先问它是否满足「只改一行」或「回修缺陷」，
//      是则销账进对应 worker（注明事后补记）；否则它必须出现在某人的收口清单里，
//      若无人声明 ⇒ 那个 worker 的清单不完整，回去补，而不是划为无主
//
// 键 = 【完整仓库相对路径】（§4w3：桶+页名仍不唯一 —— 本仓单个页名最多 22 份副本，
//      桶之上还有版本与语言两层。「桶 + 页名」是被我实测否掉的中间版本，不是最终版）
const key = (bucket, name) => `${API}/${bucket}/${name}.md`;
// 版本：LEDGER_VERSION 每次改口径必须同步改
import { execSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';

export const LEDGER_VERSION = 'v4-fullpath-key';

const R = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const API = 'content/v1.4.5/zh/api';
const exec = c => { try { return execSync(c, { cwd: R, encoding: 'utf8', maxBuffer: 1 << 28 }); } catch { return ''; } };

export const CLAIMED = {
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

// worker → 它负责的桶（用于给未认领页提示「该问谁」）
const OWNS = {
  'worker-34': ['localization', 'gameplay', 'mission'],
  'worker-36': ['save-system'],
  'worker-43': ['mission-ext', 'viewmodel'],
};

export function classifyDelta(add, del) {
  if (add === 1 && del === 1) return 'B';   // 只改一行（字段值/指针）
  if (add >= 40) return 'A';                // 内容页（新写或重写）
  return 'C';                               // 回修缺陷 / 小改
}
export const CLASS_NAME = { A: '内容页', B: '只改一行', C: '回修缺陷/小改' };

export function run() {
  const claimedKeys = new Set(Object.values(CLAIMED).flat().map(k => `${API}/${k}.md`));
  const tally = {};
  for (const w of Object.keys(CLAIMED)) tally[w] = { A: 0, B: 0, C: 0, missing: [] };

  for (const [w, list] of Object.entries(CLAIMED)) {
    for (const [bucket, name] of [...new Set(list)].map(k => k.split('/'))) {
      const k = key(bucket, name);
      if (!existsSync(`${R}/${k}`)) { tally[w].missing.push(k); continue; }
      const d = exec(`git diff --numstat -- "${k}"`).trim();
      if (!d) { tally[w].missing.push(k + ' (diff 空)'); continue; }
      const [a, b] = d.split('\t').map(x => parseInt(x || '0', 10));
      tally[w][classifyDelta(a, b)]++;
    }
  }

  const statusOut = exec('git status --porcelain -z -- ' + API);   // 不用 sh()：trim 会吃掉首条记录
  // -z 下 rename 会输出【两条】记录，第二条是裸路径（无状态前缀）。slice(3) 会啃掉路径开头。
  const BOOKF = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io/tools/data/_ledger-bookings.json';
  let booked = {};
  try { booked = JSON.parse(readFileSync(BOOKF, 'utf8')); } catch { }
  const dirty = statusOut.split('\0').filter(Boolean)
    .filter(rec => /^[ MADRCU?!]{2} /.test(rec))
    .map(rec => rec.slice(3).split(String.fromCharCode(92)).join('/'))
    .filter(k => k.endsWith('.md') && !k.endsWith('/_index.md') && k.startsWith(API + '/') && !k.includes('/ontent/'));

  const unclaimed = [];
  for (const k of dirty) {
    if (claimedKeys.has(k)) continue;
    if (booked[k.slice(API.length + 1)]) continue;              // 已销账
    const d = exec(`git diff --numstat -- "${k}"`).trim();
    if (!d) continue;
    const [a, b] = d.split('\t').map(x => parseInt(x || '0', 10));
    const rel = k.slice(API.length + 1);            // 桶 + 页名，仅用于【分组显示】
    const bucket = rel.split('/')[0];
    const owner = Object.entries(OWNS).find(([, bs]) => bs.includes(bucket))?.[0] || '(需人工指认)';
    unclaimed.push({ key: k, disp: rel, cls: classifyDelta(a, b), add: a, del: b, bucket, owner });
  }

  const jia = unclaimed.filter(u => u.cls === 'B');           // 甲：可立即销账的「只改一行」
  const yi = unclaimed.filter(u => u.cls !== 'B');            // 乙候选：内容页或回修

  // 销账（--book）：把甲写进 bookings 文件，不靠人手重打一遍页名。
  // 人手重打就是本台账出错三次的来源（类型名 → 桶+页名 → 默认唯一）。
  const BOOK = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io/tools/data/_ledger-bookings.json';
  if (process.argv.includes('--book')) {
    let prev = {};
    try { prev = JSON.parse(readFileSync(BOOK, 'utf8')); } catch { }
    for (const u of jia) {
      if (!prev[u.disp]) prev[u.disp] = { owner: u.owner, form: 'B 只改一行', at: '事后补记' };
    }
    mkdirSync('C:/WorkSpace/Bannerlord/BannerlordCode.github.io/tools/data', { recursive: true });
    writeFileSync(BOOK, JSON.stringify(prev, null, 1), 'utf8');
    console.log(`\n>>> 已销账 ${jia.length} 条甲到 ${BOOK}`);
  }

  const sum = w => tally[w].A + tally[w].B + tally[w].C;
  const T = { A: 0, B: 0, C: 0, miss: 0 };
  for (const w of Object.keys(tally)) { T.A += tally[w].A; T.B += tally[w].B; T.C += tally[w].C; T.miss += tally[w].missing.length; }

  console.log(`台账版本 = ${LEDGER_VERSION}`);
  console.log('集合定义 = 已写页 ∩ 磁盘存在 ∩ diff 非空，按【桶 + 页名】去重\n');
  console.log('worker     A内容页  B只改一行  C回修/小改   合计  磁盘无/空');
  for (const w of Object.keys(tally)) {
    const t = tally[w];
    console.log(`${w.padEnd(11)} ${String(t.A).padStart(6)} ${String(t.B).padStart(9)} ${String(t.C).padStart(10)} ${String(sum(w)).padStart(6)} ${String(t.missing.length).padStart(8)}`);
  }
  console.log(`${'合计'.padEnd(11)} ${String(T.A).padStart(6)} ${String(T.B).padStart(9)} ${String(T.C).padStart(10)} ${String(T.A + T.B + T.C).padStart(6)} ${String(T.miss).padStart(8)}`);

  console.log(`\n=== 甲（磁盘脏 + 无人声明 + 形态为「只改一行」）= ${jia.length}  ⇒ 应销账进对应 worker，注明事后补记`);
  const jiaBy = {};
  jia.forEach(u => { jiaBy[u.owner] = (jiaBy[u.owner] || 0) + 1; });
  for (const [o, n] of Object.entries(jiaBy)) console.log(`  ${o.padEnd(14)} ${n}`);

  console.log(`\n=== 乙候选（磁盘脏 + 无人声明 + 不是「只改一行」）= ${yi.length}`);
  const yiBy = {};
  yi.forEach(u => { const k = u.bucket + '/' + u.cls; yiBy[k] = (yiBy[k] || 0) + 1; });
  for (const [k, n] of Object.entries(yiBy).sort((a, b) => b[1] - a[1])) console.log(`  ${k.padEnd(20)} ${n}`);
  console.log('\n  ⇒ 按 boss 的判据：这些【必须出现在某人的收口清单里】；');
  console.log('     若无人声明，是那个 worker 的清单不完整，回去补 —— 而不是划为无主。');
  return { tally, T, jia, yi, total: T.A + T.B + T.C };
}

if (import.meta.url === `file:///${process.argv[1].replace(/\\/g, '/')}`) run();
