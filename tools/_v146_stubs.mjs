#!/usr/bin/env node
/**
 * _v146_stubs.mjs — render the v1.4.6 api tree from tools/_v146_inventory.json.
 *
 * Writes content/v1.4.6/{zh,en}/api/<module-slug>/{_index,<Type>.md}.
 * Idempotent: existing files that are NOT owned by this tool are never touched.
 * Links are emitted only against the set of files this run will create plus
 * files already on disk, so the run cannot introduce a dead link.
 *
 * Usage: node tools/_v146_stubs.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = join(HERE, '..');
const VERSION = 'v1.4.6';
const DOCS = join(REPO, 'content', VERSION);
const API = join(DOCS, 'api');
const LANG_API = (lang) => join(DOCS, lang, 'api');
const inv = JSON.parse(readFileSync(join(REPO, 'tools', '_v146_inventory.json'), 'utf8'));

/* ------------------------------------------------------------------ blurbs */

const BLURB = {
  'core': ['运行时地基：物品/角色/装备身份、向量矩阵、图像与调试基元、模块加载契约。全局单例和静态工厂集中在这里。',
    'Runtime foundation: item/character identity, vector maths, image and debug primitives, module loading contracts. Global singletons and static factories live here.'],
  'core-viewmodelcollection': ['Core 的 MVVM 半边：属性通知、命令绑定与 ScreenBase 的 ViewModel 基类，供 `ScreenManager.PushScreen` 使用。',
    'The MVVM half of Core: property notification, command binding and ScreenBase ViewModel base classes used with `ScreenManager.PushScreen`.'],
  'library': ['跨模块工具箱：容器、数学、日志、文件 IO、XML 与反射辅助。几乎每个模块都 `using TaleWorlds.Library`，但它本身不含游戏规则。',
    'Cross-module toolbox: containers, maths, logging, file IO, XML and reflection helpers. Nearly every module imports it, yet it holds no game rules.'],
  'modulemanager': ['模块加载与依赖顺序：`MBSubModuleBase` 的宿主，负责按 XML 声明装载各模块程序集并决定初始化顺序。',
    'Module loading and dependency order: the host for `MBSubModuleBase`, loading module assemblies from XML and fixing init order.'],
  'campaignsystem': ['持久战役世界：`Campaign`、`Hero`、`Clan`、`Kingdom`、`Settlement`、`MobileParty` 以及 `CampaignEvents`/`CampaignGameStarter` 行为注册面。1.4.6 中最大的模块。',
    'The persistent campaign world: `Campaign`, `Hero`, `Clan`, `Kingdom`, `Settlement`, `MobileParty`, plus the `CampaignEvents` / `CampaignGameStarter` behaviour surface. Largest module in 1.4.6.'],
  'campaignsystem-fastmode': ['战役快速模式（FastMode）的子模块入口，用于跳过部分加载以缩短进入战场的等待。',
    'Campaign fast-mode submodule entry, used to skip part of loading and shorten the wait into battle.'],
  'campaignsystem-viewmodelcollection': ['战役层的 ViewModel 集合：菜单、地图追踪、角色创建与结算界面的绑定类型。',
    'Campaign-layer ViewModel collection: menu, map tracker, character creation and settlement screen binding types.'],
  'campaignsystem-viewmodelcollection-birthanddeath': ['出生与死亡界面的 ViewModel 绑定，被战役主 ViewModel 集合引用。',
    'Birth-and-death screen ViewModel bindings, referenced from the main campaign ViewModel collection.'],
  'objectsystem': ['`MBObjectBase` / `MBObjectManager` 对象身份层：所有可序列化世界对象的注册表与 GUID 标识来源。',
    'The `MBObjectBase` / `MBObjectManager` identity layer: registry and GUID source for every serializable world object.'],
  'savesystem': ['存档执行层：`SaveManager`、类型定义器、`Saveable*` 标注，以及 `ISaveDriver` 落盘契约。',
    'Save execution layer: `SaveManager`, type definers, `Saveable*` attributes and the `ISaveDriver` persistence contract.'],
  'localization': ['本地化管道：`TextObject` 携带模板与变量，`MBTextManager` 在 `ToString()` 时解析语言与语法。',
    'Localization pipeline: `TextObject` carries template and variables, `MBTextManager` resolves language and grammar at `ToString()` time.'],
  'screensystem': ['1.4.6 新增模块：屏幕栈与层的所有权归 `ScreenManager`，`ScreenBase` 定义单个屏幕的生命周期。',
    'New in 1.4.6: `ScreenManager` owns the screen stack and layers, `ScreenBase` defines one screen lifecycle.'],
  'inputsystem': ['输入抽象：`IInputContext`、`InputKey` 与各平台输入后端的统一入口，`ScreenBase.DebugInput` 依赖它。',
    'Input abstraction: `IInputContext`, `InputKey` and the unified entry to per-platform input backends; `ScreenBase.DebugInput` depends on it.'],
  'engine': ['渲染与场景层：`Scene`、`RenderingSystem`、材质与骨骼蒙皮类型；模组能读到但大多不能安全改写。',
    'Rendering and scene layer: `Scene`, `RenderingSystem`, material and skinning types. Mods can read them but rarely rewrite them safely.'],
  'engine-gauntletui': ['引擎侧的 Gauntlet 桥：`GauntletLayer`、`GauntletUI` 帧驱动与 `Widget` 的底层挂载点。',
    'Engine-side Gauntlet bridge: `GauntletLayer`, `GauntletUI` frame driving and the low-level `Widget` attach point.'],
  'gauntletui': ['Gauntlet 控件库：`Widget` 基类、布局属性与动画类型。`TaleWorlds.GauntletUI.BaseTypes` 等子命名空间都归此模块目录。',
    'Gauntlet widget library: the `Widget` base class, layout properties and animation types. Sub-namespaces such as `TaleWorlds.GauntletUI.BaseTypes` all live in this module directory.'],
  'gauntletui-data': ['Gauntlet 预制数据与布局描述类型，被 PrefabSystem 读取。',
    'Gauntlet prefab data and layout description types consumed by the prefab system.'],
  'gauntletui-extrawidgets': ['官方界面额外控件（进度条、列表、滚动容器等）的 C# 包装。',
    'C# wrappers for the extra widgets shipped with official screens (bars, lists, scroll containers).'],
  'gauntletui-prefabsystem': ['Prefab 声明与实例化解析：把 XML 里的界面预制片段还原成运行时控件树。',
    'Prefab declaration and instantiation: turns XML interface prefab fragments back into runtime widget trees.'],
  'mountandblade': ['任务与战斗：`Mission`、`Agent`、`Formation`、`Team`、武器物品槽与多 Agent 行为。1.4.6 中第二大模块。',
    'Mission and battle: `Mission`, `Agent`, `Formation`, `Team`, weapon slots and multi-agent behaviours. Second largest module in 1.4.6.'],
  'mountandblade-custombattle': ['自定义战斗模式的实现层：模式规则、AI 与场景装配。',
    'Custom battle mode implementation: mode rules, AI and scenario assembly.'],
  'mountandblade-gauntletui': ['战斗内界面（计分板、选择菜单、部署界面）的 View 层类型。',
    'In-mission interface (scoreboard, selection menus, deployment screen) view-layer types.'],
  'mountandblade-gauntletui-widgets': ['战斗界面的具体控件实现集合，数量最多的纯 UI 模块。',
    'Concrete widget implementations for the battle interface — the largest purely visual module.'],
  'mountandblade-steamworkshop': ['Steam 创意工坊相关的数据与查询类型。',
    'Steam Workshop data and query types.'],
  'mountandblade-view': ['任务与战斗的 View 集合：世界信息浮层、选择层、阵型面板等纯展示类型。',
    'Mission/battle View collection: world-info overlays, selection layers and formation panels — presentation only.'],
  'mountandblade-viewmodelcollection': ['战斗 ViewModel 集合：计分、命令、目标选择等屏幕的绑定层。',
    'Battle ViewModel collection: score, command and target-selection screen bindings.'],
  'dotnet': ['P/Invoke 与原生对象包装：`NativeObject`、`WeakNativeObjectReference`、字符串与数组编组辅助。',
    'P/Invoke and native object wrappers: `NativeObject`, `WeakNativeObjectReference`, string and array marshalling helpers.'],
  'twodimension': ['2D 渲染与图集类型，供头像、图标与 UI 贴图使用。',
    '2D rendering and atlas types used for portraits, icons and UI textures.'],
  'sandbox': ['沙盒模式实现：`SandBoxCampaign` 行为、地图事件、快速战斗与自定义角色定义。',
    'Sandbox mode implementation: `SandBoxCampaign` behaviours, map events, fast battles and custom character definitions.'],
  'sandbox-gauntletui': ['沙盒专属界面（战役地图、队伍管理、城堡界面）的 View 层类型。',
    'Sandbox-only screens (campaign map, party management, castle screens) view-layer types.'],
  'sandbox-view': ['沙盒 View 集合：地图实体可视化、地图追踪与地图事件图标。',
    'Sandbox View collection: map entity visuals, map tracker and map event icons.'],
  'sandbox-viewmodelcollection': ['沙盒 ViewModel 集合：地图追踪项、菜单与地图交互绑定。',
    'Sandbox ViewModel collection: map tracker items, menus and map interaction bindings.'],
  'storymode': ['故事模式实现：自定义战役章节、对话触发与任务链。',
    'Story mode implementation: custom campaign chapters, dialogue triggers and quest chains.'],
  'storymode-gauntletui': ['故事模式专属界面（章节选择、对话选项）的 View 层类型。',
    'Story-mode-only screens (chapter select, dialogue options) view-layer types.'],
  'storymode-view': ['故事模式 View 集合。',
    'Story mode View collection.'],
  'storymode-viewmodelcollection': ['故事模式 ViewModel 集合。',
    'Story mode ViewModel collection.'],
  'achievementsystem': ['成就系统：成就定义、进度存储与解锁通知。',
    'Achievement system: achievement definitions, progress storage and unlock notifications.'],
  'activitysystem': ['活动系统：活动定义、进度与奖励结算。',
    'Activity system: activity definitions, progress and reward settlement.'],
  'starter-library': ['游戏进程入口壳（`Program.Main` 与 MBDotNet 引导），模组不直接引用。',
    'Process entry shell (`Program.Main` and the MBDotNet bootstrap). Mods do not reference it directly.'],
};

const KIND_ZH = { class: '类', struct: '结构体', interface: '接口', enum: '枚举', delegate: '委托' };
const KIND_EN = { class: 'class', struct: 'struct', interface: 'interface', enum: 'enum', delegate: 'delegate' };
const MKIND_ZH = {
  method: '方法', property: '属性', field: '字段', event: '事件', enum: '枚举值',
  constructor: '构造函数', destructor: '析构函数', indexer: '索引器', operator: '运算符',
  nested: '嵌套类型', delegate: '委托字段',
};
const MKIND_EN = {
  method: 'method', property: 'property', field: 'field', event: 'event', enum: 'enum value',
  constructor: 'constructor', destructor: 'destructor', indexer: 'indexer', operator: 'operator',
  nested: 'nested type', delegate: 'delegate field',
};

/* -------------------------------------------------------- reserved (skip) */

// Owned by other workers. Never generated, never overwritten.
// NOTE: `MBSubModuleBase` / `Module` live in TaleWorlds.MountAndBlade, so their
// real slug is `mountandblade/`, not the `core/` path quoted in the lead brief.
// See tools/_v146_tree-spec.md -> Reserved paths.
const RESERVED = new Set([
  'mountandblade/MBSubModuleBase.md', 'mountandblade/Module.md',
  'core/Game.md', 'core/GameStateManager.md', 'core/GameManagerBase.md',
  'library/ViewModel.md', 'library/InformationManager.md',
  'savesystem/SaveManager.md', 'savesystem/SaveableTypeDefiner.md', 'savesystem/SaveableFieldAttribute.md', 'savesystem/SaveablePropertyAttribute.md',
  'localization/TextObject.md',
  'campaignsystem/Campaign.md', 'campaignsystem/CampaignGameStarter.md', 'campaignsystem/CampaignBehaviorBase.md',
  'campaignsystem/CampaignEvents.md', 'campaignsystem/IDataStore.md', 'campaignsystem/Hero.md', 'campaignsystem/Settlement.md',
  'objectsystem/MBObjectManager.md', 'objectsystem/MBObjectBase.md',
  'mountandblade/Mission.md', 'mountandblade/MissionBehavior.md', 'mountandblade/Agent.md', 'mountandblade/Formation.md',
  'screensystem/ScreenManager.md', 'screensystem/ScreenBase.md',
  'engine-gauntletui/GauntletLayer.md', 'gauntletui/Widget.md',
]);

/* ------------------------------------------------------------- page target */

const types = inv.types;
const bySlug = new Map(); // `${moduleSlug}/${slug}` -> type
for (const t of types) bySlug.set(t.moduleSlug + '/' + t.slug, t);

// type lookup by namespace + simple name, for base-type links
const byNsName = new Map();
for (const t of types) {
  const k = t.namespace + '.' + t.name;
  if (!byNsName.has(k)) byNsName.set(k, t);
  // decompiled base lists often say `MBObjectManager.IObjectTypeRecord` or a bare
  // simple name; also index bare names per module as a fallback
  const simple = t.moduleSlug + ':' + t.name;
  if (!byNsName.has('#' + simple)) byNsName.set('#' + simple, t);
}

// every .md already on disk under content/v1.4.6, relative to DOCS. Pages owned
// by other workers therefore stay linkable, and re-running this tool picks them
// up without regenerating anything else.
function walkExisting(dir, acc = new Set(), base = dir) {
  if (!existsSync(dir)) return acc;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const q = join(dir, e.name);
    if (e.isDirectory()) walkExisting(q, acc, base);
    else if (e.name.endsWith('.md')) acc.add(relative(base, q).replace(/\\/g, '/'));
  }
  return acc;
}
const EXISTING = walkExisting(DOCS);

const isReserved = (moduleSlug, slug) => RESERVED.has(moduleSlug + '/' + slug + '.md');
const pageExists = (lang, moduleSlug, slug) =>
  EXISTING.has(lang + '/api/' + moduleSlug + '/' + slug + '.md') || !isReserved(moduleSlug, slug);

/** Relative link from `fromRel` (relative to DOCS) to a type page, or null. */
/** Relative link from the page at `fromRel` (relative to DOCS) to a type page. */
function linkTarget(fromRel, lang, moduleSlug, slug) {
  if (!pageExists(lang, moduleSlug, slug)) return null;
  const to = lang + '/api/' + moduleSlug + '/' + slug + '.md';
  // A Zola leaf route is a directory (`.../Foo/`), so the page's own folder name
  // stays in the prefix and one `../` always steps out of it.
  const fromParts = fromRel.split('/');
  const toParts = to.split('/');
  let common = 0;
  while (common < fromParts.length && common < toParts.length && fromParts[common] === toParts[common]) common++;
  const up = fromParts.length - common;
  const down = toParts.slice(common);
  return '../'.repeat(up) + down.map((x, i) => (i === down.length - 1 ? x.replace(/\.md$/, '') : x)).join('/');
}

/* --------------------------------------------------------------- rendering */

function displayName(t) {
  return t.arity > 0 ? t.name + '<' + t.genericParams + '>' : t.name;
}

function typeLine(t) {
  // `decl` already carries the base/interface list; do not append it twice.
  return t.decl || t.modifiers.join(' ') + ' ' + t.kind + ' ' + t.name;
}

function memberMix(t, lang) {
  const c = t.memberCounts || {};
  const order =
    lang === 'zh'
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
    const found = byNsName.get(cur.namespace + '.' + next.replace(/<.*$/, '')) || byNsName.get('#' + cur.moduleSlug + ':' + next.replace(/<.*$/, ''));
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
    const cand = byNsName.get(t.namespace + '.' + simple) || byNsName.get('#' + t.moduleSlug + ':' + simple);
    if (cand) out.push(cand);
  }
  return out;
}

function siblingLinks(t, lang, n = 4) {
  return types
    .filter((x) => x.moduleSlug === t.moduleSlug && x.namespace === t.namespace && x.slug !== t.slug)
    .filter((x) => pageExists(lang, x.moduleSlug, x.slug))
    .slice(0, n);
}

function seeAlso(t, lang) {
  const zh = lang === 'zh';
  const lines = [];
  const L = (rel, label) => lines.push('- [' + label + '](' + rel + ')');
  L('../', zh ? '↑ ' + t.moduleSlug + ' 模块目录' : '↑ ' + t.moduleSlug + ' module index');
  if (EXISTING.has(lang + '/api/_index.md')) L('../../', zh ? '↑ API 参考' : '↑ API reference');
  if (EXISTING.has(lang + '/_index.md')) L('../../../', zh ? '↑ 版本首页' : '↑ Version home');
  for (const b of basePageLinks(t).slice(0, 3)) {
    const rel = linkTarget(t._rel, lang, b.moduleSlug, b.slug);
    if (rel) L(rel, zh ? '基类/接口 ' + b.name : 'base / interface ' + b.name);
  }
  for (const s of siblingLinks(t, lang)) {
    const rel = linkTarget(t._rel, lang, s.moduleSlug, s.slug);
    if (rel) L(rel, zh ? '同命名空间 ' + s.name : 'same namespace ' + s.name);
  }
  return lines;
}

function overview(t, lang) {
  const zh = lang === 'zh';
  const kindZh = KIND_ZH[t.kind];
  const chain = baseChain(t).join(' → ');
  const n = t.memberTotal;
  const mix = memberMix(t, lang);
  const extra = t.extraFiles && t.extraFiles.length ? (zh ? `反编译器把该类型拆到了 ${t.extraFiles.length + 1} 个源文件，签名已合并。` : `The decompiler split this type across ${t.extraFiles.length + 1} source files; signatures are merged.`) : '';
  if (zh) {
    const iface = t.bases && t.bases.length ? `，实现/继承 ${t.bases.join('、')}` : '';
    return (
      `${displayName(t)} 位于 ${t.module} 模块，源文件 ${t.file}。它是一个 public ${kindZh}` +
      `${t.isSealed ? '（sealed）' : ''}${t.isAbstract ? '（abstract）' : ''}` +
      `${iface}，继承链为 ${chain}。public/protected 成员共 ${n} 个：${mix}。${extra}`
    );
  }
  const iface = t.bases && t.bases.length ? `, implementing/inheriting ${t.bases.join(', ')}` : '';
  return (
    `${displayName(t)} lives in the ${t.module} module, source file ${t.file}. It is a public ${KIND_EN[t.kind]}` +
    `${t.isSealed ? ' (sealed)' : ''}${t.isAbstract ? ' (abstract)' : ''}` +
    `${iface}; the inheritance chain is ${chain}. It exposes ${n} public/protected members: ${mix}. ${extra}`
  ).trim();
}

function mental(t, lang) {
  const zh = lang === 'zh';
  const chain = baseChain(t);
  const cross = chain.slice(1).filter((c) => {
    const found = byNsName.get(t.namespace + '.' + c) || byNsName.get('#' + t.moduleSlug + ':' + c);
    return !found;
  });
  const c = t.memberCounts || {};
  let shape;
  if (zh) {
    if (!t.memberTotal) {
      shape = '这个类型没有公开成员，页面能确认的只有：它存在、在哪个命名空间、源文件在哪。';
    } else if (c.property > c.method) {
      shape = `成员构成以属性为主（属性 ${c.property || 0}/${t.memberTotal}，方法 ${c.method || 0}/${t.memberTotal}），对外主要以状态读取接口暴露。`;
    } else {
      shape = `成员构成以方法为主（方法 ${c.method || 0}/${t.memberTotal}，属性 ${c.property || 0}/${t.memberTotal}），对外主要以操作入口暴露。`;
    }
    const x = cross.length ? `继承链上的 ${cross.join('、')} 不在本模块内，说明该类型把一部分行为交给跨模块基类。` : '';
    return (
      `结构事实：${displayName(t)} 是 ${t.module} 的顶层类型，命名空间与模块目录${t.namespace === t.module ? '一致' : '不同（' + t.namespace + '）'}，` +
      `继承链 ${chain.join(' → ')}。${shape}${x}` +
      `本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 ${t.file} 的方法体或该类型的深写页确认。`
    );
  }
  if (!t.memberTotal) {
    shape = 'This type exposes nothing, so the page can only confirm that it exists, which namespace it lives in and where its source is.';
  } else if (c.property > c.method) {
    shape = `The surface is property-led (properties ${c.property || 0}/${t.memberTotal}, methods ${c.method || 0}/${t.memberTotal}), so it mostly exposes state for reading.`;
  } else {
    shape = `The surface is method-led (methods ${c.method || 0}/${t.memberTotal}, properties ${c.property || 0}/${t.memberTotal}), so it mostly exposes operations.`;
  }
  const x = cross.length ? ` ${cross.join(', ')} on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type.` : '';
  return (
    `Structural facts: ${displayName(t)} is a top-level type in ${t.module}, ` +
    `namespace ${t.namespace === t.module ? 'matching' : 'differing from (' + t.namespace + ')'} the module directory; inheritance chain ${chain.join(' → ')}. ` +
    `${shape}${x} This page lists real signatures only: what each method does, when to call it and where it breaks must be read from ${t.file} or the deep page for this type.`
  );
}

function memberTable(t, lang) {
  if (!t.members.length) {
    return lang === 'zh'
      ? '该类型没有 public/protected 成员（构造函数、字段与嵌套类型均非公开），公开面为空。'
      : 'This type declares no public/protected members (constructor, fields and nested types are all non-public), so its public surface is empty.';
  }
  const map = lang === 'zh' ? MKIND_ZH : MKIND_EN;
  const rows = ['| 成员 | 签名 | 种类 |', '| --- | --- | --- |'];
  for (const m of t.members) {
    const name = m.signature.replace(/\s*\(.*$/, '').trim();
    const simple = name.split(/[\s(]/).filter(Boolean).pop() || name;
    const label = m.kind === 'indexer' ? 'this[...]' : simple.replace(/<.*$/, '');
    rows.push('| `' + label + '` | `' + m.signature + '` | ' + (map[m.kind] || m.kind) + ' |');
  }
  return rows.join('\n');
}

function description(t, lang) {
  const zh = lang === 'zh';
  const c = t.memberCounts || {};
  if (zh) {
    return (
      displayName(t) + '：' + t.module + ' 的 public ' + KIND_ZH[t.kind] +
      (t.bases && t.bases.length ? '，继承 ' + t.bases.slice(0, 2).join('、') : '') +
      '；公开成员 ' + t.memberTotal + ' 个（方法 ' + (c.method || 0) + '、属性 ' + (c.property || 0) + '、字段 ' + (c.field || 0) + '）。源文件 ' + t.file + '。'
    );
  }
  return (
    displayName(t) + ': a public ' + KIND_EN[t.kind] + ' in ' + t.module +
    (t.bases && t.bases.length ? ', inheriting ' + t.bases.slice(0, 2).join(', ') : '') +
    '; ' + t.memberTotal + ' exposed members (' + (c.method || 0) + ' methods, ' + (c.property || 0) + ' properties, ' + (c.field || 0) + ' fields). Source: ' + t.file + '.'
  );
}

function renderType(t, lang) {
  t._rel = lang + '/api/' + t.moduleSlug + '/' + t.slug + '.md';
  const zh = lang === 'zh';
  const L = [];
  L.push('---');
  L.push('title: "' + displayName(t).replace(/"/g, "'") + '"');
  L.push('description: "' + description(t, lang).replace(/"/g, "'") + '"');
  L.push('---');
  L.push('# ' + displayName(t));
  L.push('');
  L.push('**Namespace:** `' + t.namespace + '`');
  L.push('**Module:** `' + t.module + '`');
  L.push('**Type:** `' + typeLine(t) + '`');
  L.push('**File:** `' + t.file + '`');
  L.push('');
  L.push('## ' + (zh ? '概述' : 'Overview'));
  L.push('');
  L.push(overview(t, lang));
  L.push('');
  L.push('> ' + (zh
    ? '本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。'
    : 'Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.'));
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

/* ------------------------------------------------------------------ indexes */

function renderIndex(moduleSlug, mod, list, lang) {
  const zh = lang === 'zh';
  const L = [];
  const blurbs = BLURB[moduleSlug] || [mod, mod];
  L.push('---');
  L.push('title: "' + (zh ? mod + ' 模块目录' : mod + ' module index') + '"');
  L.push('description: "' + (zh
    ? mod + '：' + list.length + ' 个 public 类型，' + blurbs[0]
    : mod + ': ' + list.length + ' public types. ' + blurbs[1]) + '"');
  L.push('---');
  L.push('# ' + mod + (zh ? ' 模块目录' : ' module index'));
  L.push('');
  L.push('**Module:** `' + mod + '`');
  L.push('**Types:** ' + list.length);
  L.push('');
  L.push('## ' + (zh ? '模块导览' : 'Module Tour'));
  L.push('');
  L.push(blurbs[lang === 'zh' ? 0 : 1]);
  L.push('');
  const pending = list.filter((t) => !pageExists(lang, t.moduleSlug, t.slug));
  const shown = list.filter((t) => pageExists(lang, t.moduleSlug, t.slug));
  L.push('> ' + (zh
    ? '下面是该模块的完整 A–Z 类目录。每条链接指向一个真实类型页，页面里的 `**Namespace:**` / `**Type:**` / `**File:**` 都取自 bannerlord-1.4.6 源码，签名未改写。'
    : 'Below is the complete A–Z class catalog for this module. Each link points at a real type page whose `**Namespace:**` / `**Type:**` / `**File:**` metadata comes straight from the bannerlord-1.4.6 source, with signatures unmodified.'));
  L.push('');
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
  L.push('- [' + (zh ? 'API 参考' : 'API Reference') + '](../)');
  if (EXISTING.has(lang + '/_index.md')) L.push('- [' + (zh ? '版本首页' : 'Version home') + '](../../)');
  L.push('');
  return L.join('\n');
}

/* ------------------------------------------------------------- api landing */

const LAYER = {
  foundation: ['core', 'core-viewmodelcollection', 'library', 'modulemanager', 'objectsystem', 'savesystem', 'localization', 'dotnet'],
  campaign: ['campaignsystem', 'campaignsystem-fastmode', 'campaignsystem-viewmodelcollection', 'campaignsystem-viewmodelcollection-birthanddeath', 'sandbox', 'sandbox-gauntletui', 'sandbox-view', 'sandbox-viewmodelcollection', 'storymode', 'storymode-gauntletui', 'storymode-view', 'storymode-viewmodelcollection', 'achievementsystem', 'activitysystem'],
  mission: ['mountandblade', 'mountandblade-custombattle', 'mountandblade-view', 'mountandblade-viewmodelcollection', 'mountandblade-steamworkshop'],
  ui: ['screensystem', 'inputsystem', 'engine', 'engine-gauntletui', 'gauntletui', 'gauntletui-data', 'gauntletui-extrawidgets', 'gauntletui-prefabsystem', 'mountandblade-gauntletui', 'mountandblade-gauntletui-widgets'],
  other: ['twodimension', 'starter-library'],
};

function renderApiLanding(lang) {
  const zh = lang === 'zh';
  const L = [];
  L.push('---');
  L.push('title: "' + (zh ? 'API 参考 — 按任务找入口' : 'API Reference — start from the task') + '"');
  L.push('description: "' + (zh
    ? 'v1.4.6 的 API 分区：39 个源码模块、' + types.length + ' 个 public 类型。先选层与模块，再进类型页；各模块页底部保留完整 A–Z 目录用于补查。'
    : 'The v1.4.6 API sections: 39 source modules and ' + types.length + ' public types. Pick a layer and module first, then open a type page; every module index keeps a full A–Z catalog for lookups.') + '"');
  L.push('---');
  L.push('# ' + (zh ? 'API 参考：按任务找入口' : 'API Reference: start from the task'));
  L.push('');
  L.push('> ' + (zh
    ? '这不是签名墙。1.4.6 的源码顶层目录就是模块目录，本站的 api 目录名与之一一对应（`TaleWorlds.CampaignSystem` → `campaignsystem`）。先确定层次与模块，再进类型页。'
    : 'This is not a signature wall. In 1.4.6 every top-level source directory is a module, and each API section here maps one to one onto it (`TaleWorlds.CampaignSystem` → `campaignsystem`). Decide the layer and the module first, then open a type page.'));
  L.push('');
  L.push('## ' + (zh ? '运行时层次' : 'Runtime layers'));
  L.push('');
  for (const [layer, mods] of Object.entries(LAYER)) {
    const present = mods.filter((m) => byModule.has(m));
    if (!present.length) continue;
    const label = {
      foundation: zh ? 'Foundation — 创建、注册、身份与存档' : 'Foundation — creation, registration, identity and save',
      campaign: zh ? 'Campaign — 持久世界与模式实现' : 'Campaign — the persistent world and its modes',
      mission: zh ? 'Mission — 任务与战斗' : 'Mission — missions and battle',
      ui: zh ? 'UI — 屏幕、输入与 Gauntlet 控件' : 'UI — screens, input and Gauntlet widgets',
      other: zh ? '其它' : 'Other',
    }[layer];
    L.push('### ' + label);
    L.push('');
    for (const m of present) {
      const n = byModule.get(m).length;
      L.push('- [' + m + '](./' + m + '/) — ' + (zh ? '`' + byModule.get(m)[0].module + '` · ' : '`' + byModule.get(m)[0].module + '` · ') + n + (zh ? ' 个类型' : ' types'));
    }
    L.push('');
  }
  L.push('## ' + (zh ? '全部模块' : 'All modules'));
  L.push('');
  L.push('| ' + (zh ? '模块目录' : 'Module') + ' | ' + (zh ? '文档分区' : 'Section') + ' | ' + (zh ? 'public 类型数' : 'Public types') + ' | ' + (zh ? '源码目录' : 'Source directory') + ' |');
  L.push('| --- | --- | --- | --- |');
  for (const [slug, list] of [...byModule.entries()].sort()) {
    L.push('| `' + list[0].module + '` | [' + slug + '](./' + slug + '/) | ' + list.length + ' | `bannerlord-1.4.6/' + list[0].module + '/` |');
  }
  L.push('');
  L.push('## ' + (zh ? '阅读顺序' : 'Reading order'));
  L.push('');
  if (zh) {
    L.push('1. 先读 [版本首页](../) 确认你在哪一层，再读 [SDK 分层概览](../architecture/sdk-overview/)。');
    L.push('2. 用上面的「运行时层次」挑模块，进入模块页看导览与核心入口类型。');
    L.push('3. 在模块页底部的 A–Z 目录里找到类型，点进类型页看 `**Namespace:**` / `**Type:**` / `**File:**` 与公开成员签名表。');
    L.push('4. 每个类型页都会给出「基类」与「同命名空间」链接，跨模块依赖沿这些链接回溯。');
  } else {
    L.push('1. Read the [version home](../) to place yourself in a layer, then the [SDK layering overview](../architecture/sdk-overview/).');
    L.push('2. Pick a module from the layers above and read its tour and core entry types.');
    L.push('3. Find the type in that module’s A–Z catalog and open its page for the `**Namespace:**` / `**Type:**` / `**File:**` metadata and the public member table.');
    L.push('4. Every type page links its base type and same-namespace siblings, so cross-module dependencies are one hop away.');
  }
  L.push('');
  L.push('## ' + (zh ? '参见' : 'See Also'));
  L.push('');
  L.push('- ↑ [' + (zh ? '版本首页' : 'Version home') + '](../)');
  if (EXISTING.has(lang + '/architecture/_index.md')) L.push('- ↔ [' + (zh ? '架构总览' : 'Architecture') + '](../architecture/)');
  L.push('- ↔ [' + (zh ? '跨版本类对比' : 'Cross-version class diff') + '](../../../versions/)');
  L.push('');
  return L.join('\n');
}

function writeApiLanding() {
  for (const lang of ['zh', 'en']) {
    const out = join(LANG_API(lang), '_index.md');
    if (existsSync(out)) continue;
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, renderApiLanding(lang), 'utf8');
    written++;
    apiLanding++;
  }
}

/* -------------------------------------------------------------------- main */

const byModule = new Map();
for (const t of types) {
  if (!byModule.has(t.moduleSlug)) byModule.set(t.moduleSlug, []);
  byModule.get(t.moduleSlug).push(t);
}

let written = 0;
let skippedReserved = 0;
let keptExisting = 0;
let apiLanding = 0;
const perDir = {};

for (const [moduleSlug, list] of [...byModule.entries()].sort()) {
  const mod = list[0].module;
  const n = { leaves: 0, reserved: 0, index: 0, zh: 0, en: 0 };
  for (const t of list) {
    if (isReserved(moduleSlug, t.slug)) {
      n.reserved++;
      skippedReserved++;
      continue;
    }
    for (const lang of ['zh', 'en']) {
      const out = join(LANG_API(lang), moduleSlug, t.slug + '.md');
      mkdirSync(dirname(out), { recursive: true });
      writeFileSync(out, renderType(t, lang), 'utf8');
      written++;
      n[lang]++;
    }
    n.leaves++;
  }
  for (const lang of ['zh', 'en']) {
    const out = join(LANG_API(lang), moduleSlug, '_index.md');
    if (existsSync(out)) {
      keptExisting++;
      n.index++;
      continue;
    }
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, renderIndex(moduleSlug, mod, list, lang), 'utf8');
    written++;
    n.index++;
  }
  perDir[moduleSlug] = n;
}

writeApiLanding();

console.log('pages written   :', written);
console.log('existing kept   :', keptExisting);
console.log('types reserved  :', skippedReserved);
console.log('module dirs     :', byModule.size);
const spec = { generatedPages: written, apiLandingPages: apiLanding, reservedTypes: skippedReserved, moduleDirs: byModule.size, perDir };writeFileSync(join(REPO, 'tools', '_v146_stub-run.json'), JSON.stringify(spec, null, 1));
console.log('wrote tools/_v146_stub-run.json');
