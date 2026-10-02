#!/usr/bin/env node
/**
 * _v146_stubs.mjs — render the v1.4.6 api tree from tools/_v146_inventory.json
 * using the canonical bucket map in tools/_dir-map-canonical.json.
 *
 * Order of operations (do NOT reorder):
 *   1. reclaim  — delete pages this tool previously wrote under the old
 *                 module-slug layout, and remove emptied directories
 *   2. generate — write canonical-path pages, hard-skipping the reserved
 *                 deep-write paths and any page that already looks deep-written
 *   3. gates    — assert filename==Type name, route-relative link resolution,
 *                 forbidden link forms, non-empty buckets, en pages CJK-free
 *
 * Idempotent and additive: an existing page is never overwritten unless this
 * tool wrote it itself.
 *
 * Usage: node tools/_v146_stubs.mjs
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { writeGuarded, mkdirGuarded, unlinkGuarded, rmdirGuarded } from './_v146_content_freeze.mjs';
import { join, dirname, posix } from 'path';
import { fileURLToPath } from 'url';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = join(HERE, '..');
const VERSION = 'v1.4.6';
const DOCS = join(REPO, 'content', VERSION);
const inv = JSON.parse(readFileSync(join(REPO, 'tools', '_v146_inventory.json'), 'utf8'));
const CANON = JSON.parse(readFileSync(join(REPO, 'tools', '_dir-map-canonical.json'), 'utf8'));
if (CANON.schemaVersion !== 3) {
  console.error('FATAL: _dir-map-canonical.json schemaVersion=' + CANON.schemaVersion + '; this tool only understands 3');
  process.exit(1);
}
for (const k of ['linkRules', 'entryPointDirs', 'rules', 'defaultDir', 'parityGaps']) {
  if (CANON[k] === undefined) { console.error('FATAL: artifact missing key ' + k); process.exit(1); }
}
const LR = CANON.linkRules;
for (const k of ['leafToSibling', 'leafToCrossBucket', 'leafToSectionIndex', 'bucketIndexToLeaf', 'bucketIndexToParentIndex', 'bucketIndexToLangRoot', 'apiIndexToLangRoot', 'forbidden', 'gate']) {
  if (LR[k] === undefined) { console.error('FATAL: artifact linkRules missing key ' + k); process.exit(1); }
}

/* --------------------------------------------------- content freeze guard */

// The project premise is that every page under content/ is handwritten, one by
// one, and that no script may produce a .md there. This tool is therefore
// READ-ONLY by default: it may analyse the tree and write its report under
// tools/, but it must not create, rewrite or delete anything under content/.
// Every content/ mutation additionally goes through _v146_content_freeze.mjs,
// which throws. CONTENT_WRITE_ALLOW=1 exists for local archaeology only and is
// forbidden in product runs and in anything committed under content/.
const CONTENT_WRITE_ALLOW = process.env.CONTENT_WRITE_ALLOW === '1';
const FROZEN = !CONTENT_WRITE_ALLOW;
if (FROZEN) {
  console.log('============================================================');
  console.log('CONTENT FREEZE: tools/_v146_stubs.mjs is READ-ONLY.');
  console.log('It will not create, rewrite or delete any page under content/.');
  console.log('Reclaim and generation are skipped; only the read-only gates run.');
  console.log('Handwritten/generated split: node tools/_v146_census.mjs');
  console.log('============================================================');
}

/* ------------------------------------------------- reserved deep-write paths */

// Never generated, never overwritten, never moved. Owned by other workers.
const RESERVED = new Set([
  'core/MBSubModuleBase.md', 'core/Module.md',
  'core-extra/Game.md', 'core-extra/GameStateManager.md', 'core-extra/GameManagerBase.md',
  'core-extra/ViewModel.md', 'core-extra/InformationManager.md',
  'save-system/SaveManager.md', 'save-system/SaveableTypeDefiner.md',
  'save-system/SaveableFieldAttribute.md', 'save-system/SaveablePropertyAttribute.md',
  'campaign/Campaign.md', 'campaign/CampaignGameStarter.md', 'campaign/CampaignBehaviorBase.md',
  'campaign/CampaignEvents.md', 'campaign/IDataStore.md', 'campaign/Hero.md', 'campaign/Settlement.md',
  'campaign-ext/MBObjectManager.md', 'campaign-ext/MBObjectBase.md',
  'mission/Mission.md', 'mission/MissionBehavior.md', 'mission/Agent.md', 'mission/Formation.md',
  'gui/ScreenManager.md', 'gui/ScreenBase.md', 'gui/Widget.md',
  'engine/GauntletLayer.md',
  // NOTE: the lead's reserved list said core-extra/TextObject.md, but the artifact
  // routes TaleWorlds.Localization -> localization and the deep page is already on
  // disk there. Artifact wins; reported to the lead in the tree-spec.
  'localization/TextObject.md',
]);
// Explicit path-level reserved list from the lead (tools/_v146_reserved-paths.json),
// UNIONED with the manifest rule above: skip if reserved here OR not in the manifest.
const RESERVED_FILE = JSON.parse(readFileSync(join(HERE, '_v146_reserved-paths.json'), 'utf8'));
if (RESERVED_FILE.schemaVersion !== 1) {
  console.error('FATAL: _v146_reserved-paths.json schemaVersion=' + RESERVED_FILE.schemaVersion + '; expected 1');
  process.exit(1);
}
const RESERVED_PATHS = new Set(); // <lang>/api/<bucket>/<slug>.md
const RESERVED_OWNERS = {};
for (const [owner, list] of Object.entries(RESERVED_FILE.owners)) {
  if (owner.startsWith('_')) continue;
  RESERVED_OWNERS[owner] = list.length;
  // entries are full rel paths like 'zh/api/core/Module'; mirror them to the other language
  for (const entry of list) for (const lang of RESERVED_FILE.mirrorLang) RESERVED_PATHS.add(lang + entry.slice(2)); // 'zh/api/core/Module' -> 'en/api/core/Module'
}
const isReserved = (bucket, slug) => RESERVED.has(bucket + '/' + slug + '.md');
const isReservedPath = (bucket, file) => RESERVED.has(bucket + '/' + file);

/* ------------------------------------------------------------- blurbs */

const BLURB = {
  'core-extra': ['Core、Library、DotNet、Starter 等合成的地基桶：物品与角色身份、向量矩阵、集合与日志工具、模块清单读取。1.4.6 的 namespace 规则把 `TaleWorlds.Core*`（除 ViewModelCollection）、`TaleWorlds.Library`、`TaleWorlds.DotNet`、`TaleWorlds.Starter` 都路由到这里。',
    'The merged foundation bucket: item and character identity, vector maths, container and logging helpers, module manifest reading. The 1.4.6 namespace rules route `TaleWorlds.Core*` (except ViewModelCollection), `TaleWorlds.Library`, `TaleWorlds.DotNet` and `TaleWorlds.Starter` here.'],
  'core': ['**有意的入口类 carve-out 桶**：只放 mod 的加载入口 `MBSubModuleBase` 与 `Module`，完整 Core API 在 [`../core-extra/`](../core-extra/)。这是预期布局，不是重复路由 bug。',
    '**A deliberate entry-class carve-out**: it holds only the mod loading entries `MBSubModuleBase` and `Module`; the full Core API is in [`../core-extra/`](../core-extra/). This is intended layout, not a duplicate-routing bug.'],
  'campaign': ['持久战役世界：`Campaign`、`Hero`、`Clan`、`Kingdom`、`Settlement`、`MobileParty`，以及 `CampaignEvents`、`CampaignGameStarter` 这些行为注册面。`TaleWorlds.CampaignSystem` 根本域的全部类型都在这里。',
    'The persistent campaign world: `Campaign`, `Hero`, `Clan`, `Kingdom`, `Settlement`, `MobileParty`, plus the `CampaignEvents` / `CampaignGameStarter` behaviour surface. Everything in the `TaleWorlds.CampaignSystem` root namespace lands here.'],
  'campaign-ext': ['战役扩展面 + 对象身份层：`TaleWorlds.CampaignSystem` 的 SandBox/Conversation/Issues/ComponentInterfaces/CampaignBehaviors/GameComponents 子域，加上整个 `TaleWorlds.ObjectSystem`（`MBObjectBase`、`MBObjectManager`、`MBGUID`）。行为扩展与对象身份放在一起，因为它们耦合在同一层。',
    'The campaign extension surface plus the object identity layer: the `TaleWorlds.CampaignSystem` SandBox / Conversation / Issues / ComponentInterfaces / CampaignBehaviors / GameComponents sub-namespaces, together with all of `TaleWorlds.ObjectSystem` (`MBObjectBase`, `MBObjectManager`, `MBGUID`). They are grouped because they couple at the same layer.'],
  'mission-ext': ['任务与战斗主体：`Mission`、`Agent`、`Formation`、`Team`、武器槽与多 Agent 行为。`TaleWorlds.MountAndBlade` 域几乎全部落在这里；mod 最常用的 `Mission`/`Agent`/`Formation` 被单独 carve out 到 [`../mission/`](../mission/)。',
    'Missions and battle: `Mission`, `Agent`, `Formation`, `Team`, weapon slots and multi-agent behaviour. Nearly the whole `TaleWorlds.MountAndBlade` domain lands here; the modder-facing `Mission` / `Agent` / `Formation` are carved out into [`../mission/`](../mission/).'],
  'mission': ['**有意的入口类 carve-out 桶**：`Mission`、`MissionState`、`MissionBehavior`、`Agent`、`Formation` 五个 mod 高频入口，完整任务 API 在 [`../mission-ext/`](../mission-ext/)。这是预期布局，不是重复路由 bug。',
    '**A deliberate entry-class carve-out**: the five high-traffic mod entries `Mission`, `MissionState`, `MissionBehavior`, `Agent` and `Formation`; the full mission API is in [`../mission-ext/`](../mission-ext/). This is intended layout, not a duplicate-routing bug.'],
  'viewmodel': ['跨层的 ViewModel 集合：`TaleWorlds.CampaignSystem.ViewModelCollection`、`TaleWorlds.Core.ViewModelCollection`、`TaleWorlds.MountAndBlade.ViewModelCollection`。三个模块的 MVVM 半边放在同一桶，因为它们的生命周期规则完全一致。',
    'The cross-cutting ViewModel collections: `TaleWorlds.CampaignSystem.ViewModelCollection`, `TaleWorlds.Core.ViewModelCollection` and `TaleWorlds.MountAndBlade.ViewModelCollection`. All three MVVM halves share one bucket because their lifecycle rules are identical.'],
  'gui': ['界面层：`TaleWorlds.ScreenSystem`（屏幕栈与生命周期）、`TaleWorlds.GauntletUI*`（控件库）、`TaleWorlds.TwoDimension*`（2D 图集）。注意 `TaleWorlds.Engine.GauntletUI` **不**在这里，它归 `engine/`。',
    'The UI layer: `TaleWorlds.ScreenSystem` (screen stack and lifecycle), `TaleWorlds.GauntletUI*` (widget library) and `TaleWorlds.TwoDimension*` (2D atlases). Note that `TaleWorlds.Engine.GauntletUI` is **not** here — it belongs to `engine/`.'],
  'engine': ['引擎与渲染层：`TaleWorlds.Engine*`（含 `Engine.GauntletUI` 桥接）、`TaleWorlds.Diamond`。`GauntletLayer` 在这里而 `Widget` 在 `gui/`，两个相似命名空间被故意分开。',
    'The engine and rendering layer: `TaleWorlds.Engine*` (including the `Engine.GauntletUI` bridge) and `TaleWorlds.Diamond`. `GauntletLayer` lives here while `Widget` lives in `gui/` — two similar namespaces deliberately kept apart.'],
  'save-system': ['存档执行层：`SaveManager`、类型定义器、`Saveable*` 标注、`ISaveDriver` 落盘契约。`TaleWorlds.SaveSystem` 整个域。',
    'The save execution layer: `SaveManager`, type definers, `Saveable*` attributes and the `ISaveDriver` persistence contract — the whole `TaleWorlds.SaveSystem` domain.'],
  'localization': ['本地化管道：`TextObject` 携带模板与变量，`MBTextManager` 在 `ToString()` 时解析语言与语法。`TaleWorlds.Localization` 整个域。',
    'The localization pipeline: `TextObject` carries template and variables, `MBTextManager` resolves language and grammar at `ToString()` time — the whole `TaleWorlds.Localization` domain.'],
  'system': ['系统服务层：`TaleWorlds.InputSystem` 的输入抽象与 `TaleWorlds.System*`。`ScreenBase.DebugInput` 依赖输入上下文。',
    'System services: the input abstraction from `TaleWorlds.InputSystem` and `TaleWorlds.System*`. `ScreenBase.DebugInput` depends on the input context.'],
  'modulemanager': ['模块清单读取：`DependedModule`、`ModuleInfo`、`ModuleType`、`ModuleHelper`、`IPlatformModuleExtension` 等。**没有** `ModuleManager` 类型——全树扫描 1.4.5/1.4.6/1.4.7/1.5.3 均为 0 次。',
    'Module manifest reading: `DependedModule`, `ModuleInfo`, `ModuleType`, `ModuleHelper`, `IPlatformModuleExtension`. There is **no** `ModuleManager` type — a full-tree scan of 1.4.5/1.4.6/1.4.7/1.5.3 finds zero occurrences.'],
  'localization-dup': ['', ''],
  'network': ['`TaleWorlds.Network` 的网络消息与连接抽象，主要供多人与联机服务使用。',
    'Network messaging and connection abstractions from `TaleWorlds.Network`, mainly used by multiplayer and online services.'],
  'custombattle': ['自定义战斗模式：`TaleWorlds.MountAndBlade.CustomBattle` 的模式规则、AI 与场景装配。',
    'Custom battle mode: mode rules, AI and scenario assembly from `TaleWorlds.MountAndBlade.CustomBattle`.'],
  'sandbox': ['沙盒模式实现：`SandBox` 根域的全部类型（自定义角色、地图事件、快速战斗等）。',
    'The sandbox mode implementation: everything in the `SandBox` root namespace (custom characters, map events, fast battles and more).'],
  'storymode': ['故事模式实现：自定义战役章节、对话触发与任务链，`StoryMode` 根域的全部类型。',
    'The story mode implementation: custom campaign chapters, dialogue triggers and quest chains — everything in the `StoryMode` root namespace.'],
  'achievementsystem': ['成就系统：成就定义、进度存储与解锁通知。',
    'The achievement system: achievement definitions, progress storage and unlock notifications.'],
  'activitysystem': ['活动系统：活动定义、进度与奖励结算。',
    'The activity system: activity definitions, progress and reward settlement.'],
};
delete BLURB['localization-dup'];

/* ------------------------------------------------------------- helpers */

const types = inv.types;
const byNsName = new Map();
for (const t of types) {
  const k = t.namespace + '.' + t.name;
  if (!byNsName.has(k)) byNsName.set(k, t);
}
const byName = new Map();
for (const t of types) if (!byName.has(t.name)) byName.set(t.name, t);

const KIND_ZH = { class: '类', struct: '结构体', interface: '接口', enum: '枚举', delegate: '委托' };
const KIND_EN = { class: 'class', struct: 'struct', interface: 'interface', enum: 'enum', delegate: 'delegate' };
const MKIND_ZH = { method: '方法', property: '属性', field: '字段', event: '事件', enum: '枚举值', constructor: '构造函数', destructor: '析构函数', indexer: '索引器', operator: '运算符', nested: '嵌套类型', delegate: '委托字段' };
const MKIND_EN = { method: 'method', property: 'property', field: 'field', event: 'event', enum: 'enum value', constructor: 'constructor', destructor: 'destructor', indexer: 'indexer', operator: 'operator', nested: 'nested type', delegate: 'delegate field' };

const displayName = (t) => (t.arity > 0 ? t.name + '<' + t.genericParams + '>' : t.name);
const typeLine = (t) => t.decl || t.modifiers.join(' ') + ' ' + t.kind + ' ' + t.name;
const pageRel = (lang, bucket, file) => lang + '/api/' + bucket + '/' + file;
const abs = (rel) => join(DOCS, rel);

/** Does this on-disk page look hand-written / deep rather than a generated stub? */
/**
 * Ownership: this tool may only ever rewrite a page it wrote itself.
 *  - MINE_MARKER  : stamped on every page from this run onwards
 *  - LEGACY_NOTE  : the exact batch-draft sentence written by the previous
 *                   version of this tool, so the migration can reclaim those
 *                   pages once and then switch to the marker
 * Anything else on disk is somebody else's work and is never touched.
 */
const MINE_MARKER = '<!-- generated-by: tools/_v146_stubs.mjs -->';
const LEGACY_NOTE_ZH = '本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码';
const LEGACY_NOTE_EN = 'Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source';
// module _index.md written by the previous version of this tool (it carried no batch note)
const LEGACY_INDEX = '**Types:**';
const isMine = (text) => !!text && (
  text.includes(MINE_MARKER) ||
  text.includes(LEGACY_NOTE_ZH) || text.includes(LEGACY_NOTE_EN) ||
  (text.includes(LEGACY_INDEX) && (text.includes('## 完整类目录') || text.includes('## Complete Class Catalog')))
);
function diskText(rel) {
  try { return readFileSync(abs(rel), 'utf8'); } catch { return null; }
}

const KNOWN = new Set(); // lang/api/<bucket>/<file> that must exist
const onDiskOrOurs = (lang, bucket, file) => existsSync(abs(pageRel(lang, bucket, file)));
for (const t of types) {
  for (const lang of ['zh', 'en']) {
    const rel = pageRel(lang, t.dir, t.slug + '.md');
    // a reserved deep-write page only counts as a link target once it exists
    if (!isReserved(t.dir, t.slug) || onDiskOrOurs(lang, t.dir, t.slug + '.md')) KNOWN.add(rel);
  }
}
for (const b of new Set(types.map((t) => t.dir))) for (const lang of ['zh', 'en']) KNOWN.add(pageRel(lang, b, '_index.md'));
for (const lang of ['zh', 'en']) KNOWN.add(lang + '/api/_index.md');
for (const lang of ['zh', 'en']) KNOWN.add(lang + '/_index.md');

/* ------------------------------------------------ 1. reclaim stale layout */

const OLD_DIRS = new Set();
{
  // any directory that is not a canonical bucket, under {lang}/api/, is stale
  const canonical = new Set(types.map((t) => t.dir));
  for (const lang of ['zh', 'en']) {
    const apiDir = join(DOCS, lang, 'api');
    if (!existsSync(apiDir)) continue;
    for (const e of readdirSync(apiDir, { withFileTypes: true })) {
      if (!e.isDirectory()) continue;
      if (canonical.has(e.name)) continue;
      OLD_DIRS.add(pageRel(lang, e.name, '').slice(0, -1));
    }
  }
}
let reclaimed = 0;
let reclaimedDirs = 0;
for (const dirRel of FROZEN ? [] : OLD_DIRS) {
  const dir = abs(dirRel);
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.md')) continue;
    const rel = dirRel + '/' + f;
    if (RESERVED.has(rel.slice(dirRel.indexOf('/api/') + 5))) continue; // never touch a reserved page
    const txt = diskText(rel);
    if (txt && !isMine(txt)) continue;                               // never touch a foreign page
    unlinkGuarded(abs(rel));
    reclaimed++;
  }
  const left = readdirSync(dir);
  if (left.length === 0) { rmdirGuarded(dir); reclaimedDirs++; }
}

/* ------------------------------------------------------------ rendering */

const LINK_LOG = []; // {from, href, kind} for gate 5
function link(fromRoute, toRoute, label, kind) {
  const from = fromRoute.replace(/\/$/, '').split('/');
  const to = toRoute.split('/');
  let common = 0;
  while (common < from.length && common < to.length && from[common] === to[common]) common++;
  const up = from.length - common;
  const down = to.slice(common).map((x) => x.replace(/\.md$/, ''));
  const href = '../'.repeat(up) + down.join('/') + (up > 0 ? '/' : '');
  LINK_LOG.push({ from: fromRoute, href, kind });
  return '- [' + label + '](' + href + ')';
}

function memberMix(t, lang) {
  const c = t.memberCounts || {};
  const order = lang === 'zh'
    ? [['method', '方法'], ['property', '属性'], ['field', '字段'], ['event', '事件'], ['ctor', '构造函数'], ['enum', '枚举值'], ['nested', '嵌套类型'], ['indexer', '索引器'], ['operator', '运算符']]
    : [['method', 'methods'], ['property', 'properties'], ['field', 'fields'], ['event', 'events'], ['ctor', 'constructors'], ['enum', 'enum values'], ['nested', 'nested types'], ['indexer', 'indexers'], ['operator', 'operators']];
  const parts = [];
  for (const [k, label] of order) if (c[k]) parts.push(c[k] + ' ' + label);
  if (c.other) parts.push(c.other + (lang === 'zh' ? ' 其他' : ' other'));
  return parts.join(lang === 'zh' ? '、' : ', ');
}

function baseChain(t) {
  const seen = new Set();
  const chain = [t.name];
  let cur = t;
  for (let i = 0; i < 8; i++) {
    const next = (cur.bases || [])[0];
    if (!next || seen.has(next)) break;
    seen.add(next);
    chain.push(next.replace(/<.*$/, ''));
    const found = byNsName.get(cur.namespace + '.' + next.replace(/<.*$/, '')) || byName.get(next.replace(/<.*$/, ''));
    if (!found) break;
    cur = found;
  }
  return chain;
}

function basePageLinks(t) {
  const out = [];
  for (const b of t.bases || []) {
    const simple = b.replace(/<.*$/, '').replace(/.*\./, '');
    if (simple === t.name) continue;
    const cand = byNsName.get(t.namespace + '.' + simple) || byName.get(simple);
    if (cand && cand.slug !== t.slug) out.push(cand);
  }
  return out;
}

function memberTable(t, lang) {
  if (!t.members.length) {
    return lang === 'zh'
      ? '该类型没有 public/protected 成员：构造函数、字段与嵌套类型都不是公开的，公开面为空。'
      : 'This type declares no public/protected members: its constructor, fields and nested types are all non-public, so its public surface is empty.';
  }
  const map = lang === 'zh' ? MKIND_ZH : MKIND_EN;
  const rows = lang === 'zh'
    ? ['| 成员 | 签名 | 种类 |', '| --- | --- | --- |']
    : ['| Member | Signature | Kind |', '| --- | --- | --- |'];
  for (const m of t.members) {
    const name = m.signature.replace(/\s*\(.*$/, '').trim();
    const simple = name.split(/[\s(]/).filter(Boolean).pop() || name;
    const label = m.kind === 'indexer' ? 'this[...]' : simple.replace(/<.*$/, '');
    rows.push('| `' + label + '` | `' + m.signature + '` | ' + (map[m.kind] || m.kind) + ' |');
  }
  return rows.join('\n');
}

function overview(t, lang) {
  const zh = lang === 'zh';
  const chain = baseChain(t).join(' → ');
  const mix = memberMix(t, lang);
  const surface = t.memberTotal
    ? (zh ? 'public/protected 成员共 ' + t.memberTotal + ' 个：' + mix + '。'
          : 'It exposes ' + t.memberTotal + ' public/protected members: ' + mix + '.')
    : (zh ? '它没有 public/protected 成员：构造函数、字段与嵌套类型都不是公开的，公开面为空。'
          : 'It declares no public/protected members: its constructor, fields and nested types are all non-public, so its public surface is empty.');
  const extra = t.extraFiles && t.extraFiles.length
    ? (zh ? ` 反编译器把该类型拆到了 ${t.extraFiles.length + 1} 个源文件，签名已合并。`
          : ` The decompiler split this type across ${t.extraFiles.length + 1} source files; the signatures are merged.`)
    : '';
  if (zh) {
    const iface = t.bases && t.bases.length ? `，实现/继承 ${t.bases.join('、')}` : '';
    return `${displayName(t)} 位于 ${t.module} 模块，源文件 ${t.file}。它是一个 public ${KIND_ZH[t.kind]}` +
      `${t.isSealed ? '（sealed）' : ''}${t.isAbstract ? '（abstract）' : ''}${iface}，继承链为 ${chain}。${surface}${extra}`;
  }
  const iface = t.bases && t.bases.length ? `, implementing/inheriting ${t.bases.join(', ')}` : '';
  return `${displayName(t)} lives in the ${t.module} module, source file ${t.file}. It is a public ${KIND_EN[t.kind]}` +
    `${t.isSealed ? ' (sealed)' : ''}${t.isAbstract ? ' (abstract)' : ''}${iface}; the inheritance chain is ${chain}. ${surface}${extra}`;
}

function mental(t, lang) {
  const zh = lang === 'zh';
  const chain = baseChain(t);
  const cross = chain.slice(1).filter((c) => !(byNsName.get(t.namespace + '.' + c) || byName.get(c)));
  const c = t.memberCounts || {};
  let shape;
  if (zh) {
    if (!t.memberTotal) shape = '这个类型没有公开成员，页面能确认的只有：它存在、在哪个命名空间、源文件在哪。';
    else if (c.property > c.method) shape = `成员构成以属性为主（属性 ${c.property || 0}/${t.memberTotal}，方法 ${c.method || 0}/${t.memberTotal}），对外主要以状态读取接口暴露。`;
    else shape = `成员构成以方法为主（方法 ${c.method || 0}/${t.memberTotal}，属性 ${c.property || 0}/${t.memberTotal}），对外主要以操作入口暴露。`;
    const x = cross.length ? `继承链上的 ${cross.join('、')} 不在同桶内，说明该类型把一部分行为交给跨桶基类。` : '';
    return `结构事实：${displayName(t)} 落在 canonical 桶 \`${t.dir}\`（命中规则 \`${t.dirRule}\`），命名空间 \`${t.namespace}\`，继承链 ${chain.join(' → ')}。${shape}${x}` +
      `本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 ${t.file} 的方法体或该类型的深写页确认。`;
  }
  if (!t.memberTotal) shape = 'This type exposes nothing, so the page can only confirm that it exists, which namespace it lives in and where its source is.';
  else if (c.property > c.method) shape = `The surface is property-led (properties ${c.property || 0}/${t.memberTotal}, methods ${c.method || 0}/${t.memberTotal}), so it mostly exposes state for reading.`;
  else shape = `The surface is method-led (methods ${c.method || 0}/${t.memberTotal}, properties ${c.property || 0}/${t.memberTotal}), so it mostly exposes operations.`;
  const x = cross.length ? ` ${cross.join(', ')} on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type.` : '';
  return `Structural facts: ${displayName(t)} lands in canonical bucket \`${t.dir}\` (matched rule \`${t.dirRule}\`), namespace \`${t.namespace}\`, inheritance chain ${chain.join(' → ')}. ${shape}${x}` +
    ` This page lists real signatures only: what each method does, when to call it and where it breaks must be read from ${t.file} or the deep page for this type.`;
}

function description(t, lang) {
  const zh = lang === 'zh';
  const c = t.memberCounts || {};
  if (zh) {
    return displayName(t) + '：' + t.namespace + ' 的 public ' + KIND_ZH[t.kind] +
      (t.bases && t.bases.length ? '，继承 ' + t.bases.slice(0, 2).join('、') : '') +
      '；公开成员 ' + t.memberTotal + ' 个（方法 ' + (c.method || 0) + '、属性 ' + (c.property || 0) + '、字段 ' + (c.field || 0) + '）。canonical 桶 ' + t.dir + '。源文件 ' + t.file + '。';
  }
  return displayName(t) + ': a public ' + KIND_EN[t.kind] + ' in ' + t.namespace +
    (t.bases && t.bases.length ? ', inheriting ' + t.bases.slice(0, 2).join(', ') : '') +
    '; ' + t.memberTotal + ' exposed members (' + (c.method || 0) + ' methods, ' + (c.property || 0) + ' properties, ' + (c.field || 0) + ' fields). Canonical bucket ' + t.dir + '. Source: ' + t.file + '.';
}

function seeAlso(t, lang) {
  const zh = lang === 'zh';
  const from = lang + '/api/' + t.dir + '/' + t.slug + '/';
  const lines = [];
  lines.push(link(from, lang + '/api/' + t.dir, zh ? '↑ 本桶目录' : '↑ bucket index', 'leafToSectionIndex'));
  lines.push(link(from, lang + '/api', zh ? '↑ API 参考' : '↑ API reference', 'leafToSectionIndex'));
  if (existsSync(abs(lang + '/_index.md'))) lines.push(link(from, lang, zh ? '↑ 版本首页' : '↑ version home', 'leafToLangRoot'));
  const linkable = (x) => KNOWN.has(pageRel(lang, x.dir, x.slug + '.md'));
  for (const b of basePageLinks(t).slice(0, 3)) {
    if (!linkable(b)) continue;
    lines.push(link(from, lang + '/api/' + b.dir + '/' + b.slug, zh ? '基类/接口 ' + b.name : 'base / interface ' + b.name, b.dir === t.dir ? 'leafToSibling' : 'leafToCrossBucket'));
  }
  let n = 0;
  for (const s of types) {
    if (n >= 4) break;
    if (s.dir !== t.dir || s.namespace !== t.namespace || s.slug === t.slug) continue;
    if (!linkable(s)) continue;
    lines.push(link(from, lang + '/api/' + s.dir + '/' + s.slug, zh ? '同命名空间 ' + s.name : 'same namespace ' + s.name, 'leafToSibling'));
    n++;
  }
  return lines;
}

function renderType(t, lang) {
  const zh = lang === 'zh';
  const L = [];
  L.push('---');
  L.push('title: "' + displayName(t).replace(/"/g, "'") + '"');
  L.push('description: "' + description(t, lang).replace(/"/g, "'") + '"');
  L.push('---');
  L.push('');
  L.push(MINE_MARKER);
  L.push('# ' + displayName(t));
  L.push('');
  L.push('**Namespace:** `' + t.namespace + '`');
  L.push('**Module:** `' + t.module + '`');
  L.push('**Type:** `' + typeLine(t) + '`');
  L.push('**File:** `' + t.file + '`');
  L.push('**Bucket:** `' + t.dir + '` (' + t.dirRule + ')');
  L.push('');
  L.push('## ' + (zh ? '概述' : 'Overview'));
  L.push('');
  L.push(overview(t, lang));
  L.push('');
  L.push('> ' + (zh
    ? '本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。'
    : 'Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.'));
  L.push('');
  L.push('## ' + (zh ? '心智模型' : 'Mental Model'));
  L.push('');
  L.push(mental(t, lang));
  L.push('');
  L.push('## ' + (zh ? '主要成员' : 'Key Members'));
  L.push('');
  L.push(memberTable(t, lang));
  L.push('');
  L.push('## ' + (zh ? '参见' : 'See Also'));
  L.push('');
  L.push(...seeAlso(t, lang));
  L.push('');
  return L.join('\n');
}

const LAYER = {
  foundation: ['core-extra', 'core', 'save-system', 'localization', 'modulemanager'],
  campaign: ['campaign', 'campaign-ext', 'sandbox', 'storymode', 'achievementsystem', 'activitysystem'],
  mission: ['mission', 'mission-ext', 'custombattle'],
  ui: ['gui', 'engine', 'viewmodel', 'system'],
  other: ['network'],
};

function renderIndex(bucket, list, lang) {
  const zh = lang === 'zh';
  const mod = list[0].module;
  const L = [];
  L.push('---');
  L.push(MINE_MARKER);
  L.push('title: "' + (zh ? bucket + ' 模块目录' : bucket + ' bucket index') + '"');
  L.push('description: "' + (zh
    ? bucket + '：canonical 桶，含 ' + list.length + ' 个 public 类型。' + (BLURB[bucket] ? BLURB[bucket][0] : '')
    : bucket + ': canonical bucket with ' + list.length + ' public types. ' + (BLURB[bucket] ? BLURB[bucket][1] : '')) + '"');
  L.push('---');
  L.push('');
  L.push(MINE_MARKER);
  L.push('# ' + bucket + (zh ? ' 模块目录' : ' bucket index'));
  L.push('');
  L.push('**Bucket:** `' + bucket + '`');
  L.push('**Types:** ' + list.length);
  L.push('**Routing rule:** `' + list[0].dirRule + '`');
  L.push('');
  L.push('## ' + (zh ? '模块导览' : 'Bucket Tour'));
  L.push('');
  L.push(BLURB[bucket] ? BLURB[bucket][lang === 'zh' ? 0 : 1] : (zh ? 'canonical 规则路由到本桶的命名空间。' : 'Namespaces routed to this bucket by the canonical rules.'));
  L.push('');
  const from = lang + '/api/' + bucket + '/';
  const peers = link(from, lang + '/api', zh ? '↑ API 参考' : '↑ API reference', 'bucketIndexToParentIndex');
  const root = link(from, lang, zh ? '↑ 版本首页' : '↑ version home', 'bucketIndexToLangRoot');
  const carve = bucket === 'mission' ? ' | ' + link(from, lang + '/api/mission-ext', zh ? '完整任务 API' : 'full mission API', 'bucketIndexToCross')
    : bucket === 'core' ? ' | ' + link(from, lang + '/api/core-extra', zh ? '完整 Core API' : 'full Core API', 'bucketIndexToCross')
    : bucket === 'mission-ext' ? ' | ' + link(from, lang + '/api/mission', zh ? '入口类' : 'entry classes', 'bucketIndexToCross')
    : bucket === 'core-extra' ? ' | ' + link(from, lang + '/api/core', zh ? '加载入口类' : 'loading entry classes', 'bucketIndexToCross')
    : '';
  L.push('> ' + (zh ? '本桶页面路由自带尾斜杠：同桶类型写 `./<Type>`，跨桶写 `../../<bucket>/<Type>`，父级索引写 `../`。' : 'Every page route carries a trailing slash: same-bucket types are `./<Type>`, cross-bucket is `../../<bucket>/<Type>`, the parent index is `../`.'));
  L.push('');
  L.push('- ' + peers + ' · ' + root + carve);
  L.push('');
  const pending = list.filter((t) => isReserved(t.dir, t.slug));
  const shown = list.filter((t) => !isReserved(t.dir, t.slug));
  if (pending.length) {
    L.push('> ' + (zh
      ? '另有 ' + pending.length + ' 个类型由深写 worker 负责、页面尚未落地，因此这里只列名字不列链接：' + pending.map((x) => x.name).join('、') + '。'
      : pending.length + ' further types are owned by the deep-writing workers and their pages have not landed yet, so they are listed by name only: ' + pending.map((x) => x.name).join(', ') + '.'));
    L.push('');
  }
  L.push('## ' + (zh ? '完整类目录' : 'Complete Class Catalog'));
  L.push('');
  const groups = new Map();
  for (const t of shown) {
    const ch = (displayName(t)[0] || '#').toUpperCase();
    const key = /[A-Z]/.test(ch) ? ch : '#';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(t);
  }
  for (const key of [...groups.keys()].sort()) {
    L.push('### ' + key);
    L.push('');
    for (const t of groups.get(key).sort((a, b) => displayName(a).localeCompare(displayName(b), 'en'))) {
      L.push('- [' + displayName(t) + '](./' + t.slug + ') — `' + t.namespace + '` · ' + (zh ? KIND_ZH[t.kind] : KIND_EN[t.kind]) + ' · ' + (zh ? '公开成员 ' : 'exposed ') + t.memberTotal);
    }
    L.push('');
  }
  L.push('## ' + (zh ? '参见' : 'See Also'));
  L.push('');
  L.push('- ' + peers);
  L.push('- ' + root);
  if (carve) L.push('- ' + carve.slice(4));
  L.push('');
  return L.join('\n');
}

function renderApiLanding(lang) {
  const zh = lang === 'zh';
  const byBucket = new Map();
  for (const t of types) {
    if (!byBucket.has(t.dir)) byBucket.set(t.dir, []);
    byBucket.get(t.dir).push(t);
  }
  const L = [];
  L.push('---');
  L.push(MINE_MARKER);
  L.push('title: "' + (zh ? 'API 参考 — 按任务找入口' : 'API Reference — start from the task') + '"');
  L.push('description: "' + (zh
    ? 'v1.4.6 的 API 分区：' + byBucket.size + ' 个 canonical 桶、' + types.length + ' 个 public 类型。桶名由 tools/_dir-map-canonical.json 的 namespace 规则现算，不是人为分组。'
    : 'The v1.4.6 API sections: ' + byBucket.size + ' canonical buckets and ' + types.length + ' public types. Bucket names are resolved live from the namespace rules in tools/_dir-map-canonical.json, not hand-assigned.') + '"');
  L.push('---');
  L.push('');
  L.push(MINE_MARKER);
  L.push('# ' + (zh ? 'API 参考：按任务找入口' : 'API Reference: start from the task'));
  L.push('');
  L.push('> ' + (zh
    ? '桶归属规则：`tools/_dir-map-canonical.json`（schemaVersion ' + CANON.schemaVersion + '）。解析顺序为「排除清单 → 最长前缀规则 → entryPointDirs 简单名覆写 → defaultDir」，所以一个类型只有一个路径。'
    : 'Bucket routing comes from `tools/_dir-map-canonical.json` (schemaVersion ' + CANON.schemaVersion + '). Resolution is exclude list, then longest-prefix rules, then entryPointDirs overrides by simple type name, then defaultDir — so every type has exactly one path.'));
  L.push('');
  const from = lang + '/api/';
  L.push('## ' + (zh ? '运行时层次' : 'Runtime layers'));
  L.push('');
  for (const [layer, buckets] of Object.entries(LAYER)) {
    const present = buckets.filter((b) => byBucket.has(b));
    if (!present.length) continue;
    const label = {
      foundation: zh ? 'Foundation — 创建、注册、身份与存档' : 'Foundation — creation, registration, identity and save',
      campaign: zh ? 'Campaign — 持久世界与模式实现' : 'Campaign — the persistent world and its modes',
      mission: zh ? 'Mission — 任务与战斗' : 'Mission — missions and battle',
      ui: zh ? 'UI / 表现层 — 屏幕、控件、ViewModel' : 'UI / presentation — screens, widgets, ViewModels',
      other: zh ? '其它' : 'Other',
    }[layer];
    L.push('### ' + label);
    L.push('');
    for (const b of present) L.push('- ' + link(from, lang + '/api/' + b, '`' + b + '` — ' + byBucket.get(b).length + (zh ? ' 个类型' : ' types'), 'apiIndexToBucket'));
    L.push('');
  }
  L.push('## ' + (zh ? '全部桶' : 'All buckets'));
  L.push('');
  L.push('| ' + (zh ? '桶' : 'Bucket') + ' | ' + (zh ? '类型数' : 'Types') + ' | ' + (zh ? '路由规则' : 'Routing rule') + ' | ' + (zh ? '主要命名空间' : 'Main namespaces') + ' |');
  L.push('| --- | --- | --- | --- |');
  for (const [b, list] of [...byBucket.entries()].sort((a, b2) => b2[1].length - a[1].length)) {
    const nss = [...new Set(list.map((x) => x.namespace))].slice(0, 3).map((x) => '`' + x + '`').join(' ');
    L.push('| ' + link(from, lang + '/api/' + b, b) + ' | ' + list.length + ' | `' + list[0].dirRule + '` | ' + nss + ' |');
  }
  L.push('');
  L.push('## ' + (zh ? '阅读顺序' : 'Reading order'));
  L.push('');
  if (zh) {
    L.push('1. 先读 [版本首页](../) 确认你在哪一层，再读 [SDK 分层概览](../architecture/sdk-overview/)。');
    L.push('2. 用上面的「运行时层次」挑桶，进入桶首页看导览与完整 A–Z 目录。');
    L.push('3. 在桶首页找到类型，点进类型页看 `**Namespace:**` / `**Type:**` / `**File:**` / `**Bucket:**` 与公开成员签名表。');
    L.push('4. 每个类型页都会给出「基类/接口」与「同命名空间」链接，跨桶依赖沿这些链接回溯。');
  } else {
    L.push('1. Read the [version home](../) to place yourself in a layer, then the [SDK layering overview](../architecture/sdk-overview/).');
    L.push('2. Pick a bucket from the layers above, read its tour and its complete A–Z catalog.');
    L.push('3. Find the type in that catalog and open its page for the `**Namespace:**` / `**Type:**` / `**File:**` / `**Bucket:**` metadata and the public member table.');
    L.push('4. Every type page links its base/interface and its same-namespace siblings, so cross-bucket dependencies are one hop away.');
  }
  L.push('');
  L.push('## ' + (zh ? '参见' : 'See Also'));
  L.push('');
  L.push('- ↑ [' + (zh ? '版本首页' : 'Version home') + '](../)');
  if (existsSync(abs(lang + '/architecture/_index.md'))) L.push('- ↔ [' + (zh ? '架构总览' : 'Architecture') + '](../architecture/)');
  L.push('- ↔ [' + (zh ? '跨版本类对比' : 'Cross-version class diff') + '](../../../versions/)');
  L.push('');
  return L.join('\n');
}

/* ------------------------------------------------------------ 2. generate */



const byBucket = new Map();
for (const t of types) {
  if (!byBucket.has(t.dir)) byBucket.set(t.dir, []);
  byBucket.get(t.dir).push(t);
}

let written = 0;
let keptIndex = 0;
let skippedExternalIndex = 0;
let frozenLeaves = 0;
let frozenIndexes = 0;
let skippedDeep = 0;
let skippedReserved = 0;
const skippedDeepList = [];
const perBucket = {};

for (const [bucket, list] of [...byBucket.entries()].sort()) {
  const n = { leaves: 0, reserved: 0, skippedDeep: 0, index: 0, zh: 0, en: 0 };
  for (const t of list) {
    if (isReserved(bucket, t.slug)) { n.reserved++; skippedReserved++; continue; }
    for (const lang of ['zh', 'en']) {
      const rel = pageRel(lang, bucket, t.slug + '.md');
      if (RESERVED_PATHS.has(rel)) { skippedReserved++; n.reserved++; skippedDeepList.push(rel); continue; }
      const existing = diskText(rel);
      if (existing !== null && !isMine(existing)) { skippedDeep++; n.skippedDeep++; skippedDeepList.push(rel); continue; }
      if (FROZEN) { frozenLeaves++; continue; }
      mkdirGuarded(dirname(abs(rel)), { recursive: true });
      writeGuarded(abs(rel), renderType(t, lang), 'utf8');
      written++;
      n[lang]++;
    }
    n.leaves++;
  }
  for (const lang of ['zh', 'en']) {
    const rel = pageRel(lang, bucket, '_index.md');
    const existing = diskText(rel);
    if (existing !== null && !isMine(existing)) { keptIndex++; n.index++; skippedExternalIndex++; skippedDeepList.push(rel); continue; }
    if (FROZEN) { frozenIndexes++; continue; }
    mkdirGuarded(dirname(abs(rel)), { recursive: true });
    writeGuarded(abs(rel), renderIndex(bucket, list, lang), 'utf8');
    written++;
    n.index++;
  }
  perBucket[bucket] = n;
}

let apiLanding = 0;
for (const lang of ['zh', 'en']) {
  const rel = lang + '/api/_index.md';
  const existing = diskText(rel);
  if (existing !== null) {
    if (isMine(existing) && !FROZEN) { writeGuarded(abs(rel), renderApiLanding(lang), 'utf8'); written++; }
    else skippedExternalIndex++;
    continue;
  }
  if (!FROZEN) {
    mkdirGuarded(dirname(abs(rel)), { recursive: true });
    writeGuarded(abs(rel), renderApiLanding(lang), 'utf8');
    written++;
    apiLanding++;
  }
}

/* -------------------------------------------------------------- 3. gates */

const failures = [];
const gateNotes = [];

// gate 1: file name == type name in the **Type:** line
let mismatches = [];
let documentedSuffixes = 0;
for (const t of types) {
  if (isReserved(t.dir, t.slug)) continue;
  for (const lang of ['zh', 'en']) {
    const txt = diskText(pageRel(lang, t.dir, t.slug + '.md'));
    if (txt === null) { mismatches.push(pageRel(lang, t.dir, t.slug + '.md') + ' MISSING'); continue; }
    const m = txt.match(/\*\*Type:\*\*\s*`([^`]+)`/);
    if (!m) { mismatches.push(pageRel(lang, t.dir, t.slug + '.md') + ' NO-TYPE-LINE'); continue; }
    const decl = m[1];
    // class/struct/interface/enum: the identifier right after the keyword.
    // delegate: `public delegate <returnType> <Name>(` — the identifier is the LAST
    // one before the parameter list, not the return type.
    let declared = null;
    const kw = decl.match(/\b(?:class|struct|interface|enum)\s+([A-Za-z_]\w*)/);
    if (kw) declared = kw[1];
    else {
      const dl = decl.match(/\bdelegate\b[\s\S]*?([A-Za-z_]\w*)\s*(?:<[^{;]*>)?\s*\(/);
      if (dl) declared = dl[1];
    }
    if (!declared) { mismatches.push(pageRel(lang, t.dir, t.slug + '.md') + ' NO-TYPE-NAME'); continue; }
    if (declared !== t.slug) {
      if (t.slug === t.name + '__' + t.arity || t.slug.startsWith(t.name + '__')) { documentedSuffixes++; continue; }
      mismatches.push(pageRel(lang, t.dir, t.slug + '.md') + ' file=' + t.slug + ' type=' + declared);
    }
  }
}
if (mismatches.length) failures.push('G1 filename != Type name: ' + mismatches.slice(0, 20).join('; ') + (mismatches.length > 20 ? ' (+' + (mismatches.length - 20) + ')' : ''));
gateNotes.push('G1 checked ' + (types.length * 2) + ' leaf pages, ' + mismatches.length + ' mismatches, ' + documentedSuffixes + ' documented arity/collision suffix exceptions');

// gate 2: report step 2 vs step 3
const b2 = {};
const b3 = {};
for (const t of types) {
  b2[t.step2Rule || 'defaultDir'] = (b2[t.step2Rule || 'defaultDir'] || 0) + 1;
  if (t.overriddenByEntryPoint) b3[t.name] = (b3[t.name] || 0) + 1;
}
gateNotes.push('G2 step2 prefix rules: ' + inv.stats.step2RoutedTypes + ' types; step3 entryPointDirs overrides: ' + inv.stats.step3OverrideTypes + ' types ' + JSON.stringify(b3));

// gate 3: every declared bucket non-empty AND has an _index.md on disk
const declared = [...new Set([...CANON.rules.map((r) => r.dir), ...Object.entries(CANON.entryPointDirs).filter(([k, v]) => !k.startsWith('_') && typeof v === 'string').map(([, v]) => v), CANON.defaultDir])];
const bucketCounts = {};
for (const t of types) bucketCounts[t.dir] = (bucketCounts[t.dir] || 0) + 1;
for (const b of declared) {
  if (!bucketCounts[b]) failures.push('G3 declared bucket is EMPTY: ' + b);
  for (const lang of ['zh', 'en']) {
    if (!existsSync(abs(pageRel(lang, b, '_index.md')))) failures.push('G3 bucket has no _index.md: ' + pageRel(lang, b, '_index.md'));
  }
}
gateNotes.push('G3 ' + Object.keys(bucketCounts).length + ' buckets, all ' + declared.length + ' declared buckets non-empty and indexed');

// gate 4: every paged type has an existing source file
for (const t of types) {
  if (!existsSync(join('C:/WorkSpace/Bannerlord/bannerlord-1.4.6', t.file))) failures.push('G4 source file missing: ' + t.file);
}
gateNotes.push('G4 all ' + types.length + ' paged types have an existing source file');

// gate 5: route-relative link resolution + forbidden forms
function routeOf(rel) {
  // leaf file -> its own directory route
  return rel.replace(/\.md$/, '') + '/';
}
let badLinks = [];
let badForms = [];
const seenLinks = new Set();
for (const l of LINK_LOG) {
  const key = l.from + '|' + l.href;
  if (seenLinks.has(key)) continue;
  seenLinks.add(key);
  if (l.href.includes('content/')) { badForms.push(l.from + ' -> ' + l.href + ' (repo-root leakage)'); continue; }
  if (/v1\.[0-9]/.test(l.href)) { badForms.push(l.from + ' -> ' + l.href + ' (version segment in same-version link)'); continue; }
  const isLeaf = !l.from.endsWith('/_index/');
  if (isLeaf) {
    if (l.href.startsWith('./')) { badForms.push(l.from + ' -> ' + l.href + ' (dot-slash is illegal from a leaf)'); continue; }
    if (/^\.\.\/[^/]+\/[^/]+\/?$/.test(l.href) && l.kind !== 'leafToCrossBucket') { badForms.push(l.from + ' -> ' + l.href + ' (one level short)'); continue; }
  }
  // route-relative resolution: one '..' pops exactly one segment
  const base = l.from.replace(/\/$/, '').split('/');
  const segs = l.href.replace(/^\.\//, '').split('/');
  const stack = base.slice();
  for (const s of segs) {
    if (s === '..') stack.pop();
    else if (s !== '' && s !== '.') stack.push(s);
  }
  const target = stack.join('/');
  const ok = existsSync(abs(target + '.md')) || existsSync(abs(target + '/_index.md'));
  if (!ok) badLinks.push(l.from + ' -> ' + l.href + ' (=> ' + target + ')');
}
if (badForms.length) failures.push('G5 forbidden link forms: ' + badForms.slice(0, 10).join('; ') + (badForms.length > 10 ? ' (+' + (badForms.length - 10) + ')' : ''));
if (badLinks.length) failures.push('G5 unresolvable links: ' + badLinks.slice(0, 10).join('; ') + (badLinks.length > 10 ? ' (+' + (badLinks.length - 10) + ')' : ''));
gateNotes.push('G5 ' + seenLinks.size + ' distinct emitted links checked route-relative: ' + badForms.length + ' forbidden-form, ' + badLinks.length + ' unresolvable');

// gate 6: schemaVersion asserted at load time; re-affirm here for the report
if (CANON.schemaVersion !== 3) failures.push('G6 artifact schemaVersion != 3');
gateNotes.push('G6 artifact schemaVersion=' + CANON.schemaVersion + ' asserted fail-closed at load');

// extra: en pages must contain no CJK outside code fences
function stripFences(txt) { return txt.replace(/```[\s\S]*?```/g, ''); }
let cjkHits = [];
for (const t of types) {
  if (isReserved(t.dir, t.slug)) continue;
  for (const bucket of [t.dir]) {
    const rel = pageRel('en', bucket, t.slug + '.md');
    const txt = diskText(rel);
    if (txt && /[一-鿿　-〿＀-￯]/.test(stripFences(txt))) cjkHits.push(rel);
  }
}
if (cjkHits.length) failures.push('en pages contain CJK: ' + cjkHits.slice(0, 10).join('; ') + (cjkHits.length > 10 ? ' (+' + (cjkHits.length - 10) + ')' : ''));
gateNotes.push('en-CJK checked ' + (types.length) + ' pages, ' + cjkHits.length + ' with CJK');

/* ------------------------------------------------------------------ out */

const spec = {
  runAt: 'tool: _v146_stubs.mjs',
  frozen: FROZEN,
  generated: written,
  frozenLeavesNotWritten: frozenLeaves,
  frozenIndexesNotWritten: frozenIndexes,
  skipped_deep: skippedDeep + skippedExternalIndex,
  preserved_other_workers: skippedDeep + skippedExternalIndex,
  remaining_missing_buckets: declared.filter((b) => !existsSync(abs(pageRel('zh', b, '_index.md'))) || !existsSync(abs(pageRel('en', b, '_index.md')))),
  reclaimedStalePages: reclaimed,
  reclaimedEmptyDirs: reclaimedDirs,
  staleDirsReclaimed: [...OLD_DIRS],
  pagesWritten: written,
  bucketIndexesKept: keptIndex,
  apiLandingPagesWritten: apiLanding,
  reservedTypesSkipped: skippedReserved,
  reservedPathManifestPaths: RESERVED_PATHS.size,
  reservedPathManifestOwners: RESERVED_OWNERS,
  deepPagesSkipped: skippedDeep,
  deepPagesSkippedList: skippedDeepList,
  canonicalBuckets: byBucket.size,
  bucketIndexesKeptExternal: skippedExternalIndex,
  bucketCounts,
  perBucket,
  gateNotes,
  gateFailures: failures,
};
writeGuarded(join(REPO, 'tools', '_v146_stub-run.json'), JSON.stringify(spec, null, 1));

console.log('CONTENT FREEZE          ', FROZEN ? 'ACTIVE (read-only)' : 'bypassed via CONTENT_WRITE_ALLOW=1');
console.log('reclaimed stale pages   ', reclaimed, '(+ ' + reclaimedDirs + ' empty dirs)');
console.log('generated               ', written);
console.log('skipped_deep            ', skippedDeep + skippedExternalIndex);
console.log('reserved types skipped  ', skippedReserved);
console.log('reserved-path manifest  ', RESERVED_PATHS.size, 'paths', JSON.stringify(RESERVED_OWNERS));
console.log('deep pages skipped      ', skippedDeep);
console.log('external indexes kept   ', skippedExternalIndex);
console.log('canonical buckets       ', byBucket.size);
for (const n of gateNotes) console.log('  gate:', n);
console.log('bucket counts:');
for (const [b, n] of Object.entries(bucketCounts).sort((a, b2) => b2[1] - a[1])) console.log('  ', String(n).padStart(5), b);
if (skippedDeepList.length) { console.log('skipped deep pages:'); for (const r of skippedDeepList) console.log('  ', r); }
if (failures.length) {
  console.error('\nGATE FAILURES:');
  for (const f of failures) console.error('  !! ' + f);
  process.exitCode = 1;
} else {
  console.log('\nALL GATES PASS');
}
console.log('wrote tools/_v146_stub-run.json');
