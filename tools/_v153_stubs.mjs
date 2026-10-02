// tools/_v153_stubs.mjs — v1.5.3 zh/api 类参考树生成器（目录结构初稿）。
//
// 消费 tools/_v153_inventory.json，按 tools/_dir-map-canonical.json 落盘：
//   - 每个 public 类型一页 <TypeName>.md（真实声明行 / 真实签名，无占位）
//   - 每个桶一页 _index.md（按字母分组链全部叶子页）
//   - content/v1.5.3/zh/api/_index.md 总索引
//
// 硬规则：已存在的 .md 一律不覆盖（深写波次的页面原样保留）。
// 幂等：重复跑结果一致，只补缺失文件。
//
// Usage: node tools/_v153_stubs.mjs [--only dir1,dir2] [--inventory tools/_v153_inventory.json]

import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync, statSync, rmSync } from 'node:fs';
import { join, resolve, relative, sep } from 'node:path';

const REPO_ROOT = resolve(import.meta.dirname, '..');
const VER = '1.5.3';
const API_ZH = join(REPO_ROOT, 'content', 'v' + VER, 'zh', 'api');
const INVENTORY = resolve(REPO_ROOT, argValue('--inventory', 'tools/_v153_inventory.json'));

function argValue(name, fallback) {
  const i = process.argv.indexOf(name);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

const only = argValue('--only', '');
const onlyDirs = only ? new Set(only.split(',').map((s) => s.trim()).filter(Boolean)) : null;

// 桶说明：标题 / 心智模型 / 命名空间提示。新桶按 tools/_dir-map-canonical.json 建立。
const DIR_META = {
  'campaign': { title: 'campaign 目录', desc: 'TaleWorlds.CampaignSystem 根命名空间的战役世界状态层类参考目录', model: '战役世界状态层：持有沙盒地图上的全部事实（谁在哪、谁属于谁、钱从哪来），本身不渲染界面。所有世界逻辑最终都要回到这里读写。' },
  'campaign-ext': { title: 'campaign-ext 目录', desc: 'TaleWorlds.ObjectSystem 与 TaleWorlds.CampaignSystem 行为/组件子域的类参考目录', model: '战役扩展层：行为框架（CampaignBehaviors）、Actions、Models、Issues、Conversation，以及 TaleWorlds.ObjectSystem 这套 MBObjectBase 对象身份与序列化底座。它决定“什么时候、由谁”去改 campaign 层的数据。' },
  'core': { title: 'core 目录', desc: '模块加载入口（MBSubModuleBase / Module / ModuleManager）类参考目录', model: '模块加载入口层：MBSubModuleBase 与 Module 决定 mod 在游戏哪个阶段被装载，是所有 mod 的第一个挂钩点。', note: '> **本桶只放 mod 入口类**：`MBSubModuleBase` 与 `Module`。\n> **完整 API 在 [Core-Extra](../core-extra/)**：`Game`、`GameStateManager`、`GameManagerBase`、`TextObject`、`ViewModel` 等运行时基础类型都在那边。\n> 回到 [Core 桶首页](./)。\n>\n> 这是**预期布局，不是重复路由 bug**：canonical 映射先把 `TaleWorlds.MountAndBlade*` 归入 `mission-ext`、`TaleWorlds.Core*` 归入 `core-extra`，再由 `entryPointDirs` 把模块加载入口抽到 `core`。另外 1.4.5 的 `core/Game.md` 在本版按规则移到了 [Core-Extra](../core-extra/Game/)，这是唯一一处 1.4.5 → 1.5.3 归属变化。' },
  'core-extra': { title: 'core-extra 目录', desc: 'TaleWorlds.Core / Library / DotNet / Starter 运行时基础类型类参考目录', model: '运行时基础层：Game 生命周期、InformationManager、装备与技能数据、文本对象 ViewModel 基础设施，以及 TaleWorlds.Library / DotNet 的底层工具类型。', note: '> 本桶是核心类型的**完整 API**（`TaleWorlds.Core*` / `TaleWorlds.Library*` / `TaleWorlds.DotNet*` / `TaleWorlds.Starter*`，以及未命中任何前缀规则的命名空间）。\n> 模块加载入口 [MBSubModuleBase](./../core/MBSubModuleBase)、[Module](./../core/Module) 被单独抽到 [Core 桶](../core/)，**预期布局、非重复路由**，一个类型只落盘一次。\n> 回到 [Core-Extra 桶首页](./)。' },
  'engine': { title: 'engine 目录', desc: 'TaleWorlds.Engine 引擎层类参考目录', model: '引擎边界层：渲染、输入、场景与 Gauntlet 的引擎侧接线类型。业务逻辑不要直接下沉到这里。' },
  'gui': { title: 'gui 目录', desc: 'TaleWorlds.ScreenSystem / GauntletUI / TwoDimension 界面层类参考目录', model: '界面层：ScreenManager 驱动屏幕栈，ScreenBase/ScreenLayer 组成页面，GauntletLayer 与 Widget 树负责渲染与输入。' },
  'localization': { title: 'localization 目录', desc: 'TaleWorlds.Localization 本地化类参考目录', model: '本地化层：TextObject 是全游戏唯一合法的可显示文本载体，所有面向玩家的字符串都应经过它。' },
  'mission': { title: 'mission 目录', desc: '战斗场景门面类型（Mission / Agent / Formation）类参考目录', model: '战斗门面层：Mission 是战斗场景本身，Agent 是战斗单位，Formation 是阵型。mod 面向玩家的战斗扩展从这里进入。', note: '> **本桶只放 mod 入口类**，即 [Mission](./Mission)、[Agent](./Agent)、[Formation](./Formation) 这三个门面类型。\n> **完整 API 在 [Mission-Ext](../mission-ext/)**：`MissionBehavior`、`MissionLogic`、`AgentComponent`、`AgentAI`、场景扩展点等全部在那边。\n> 回到 [Mission 桶首页](./)。\n>\n> 这是**预期布局，不是重复路由 bug**：canonical 映射先把 `TaleWorlds.MountAndBlade*` / `TaleWorlds.Mission*` 归入 `mission-ext`，再由 `entryPointDirs` 把 mod 最常直接引用的三个门面类抽到 `mission`，目的是让“入口在哪、完整实现在哪”在导航上直接可见。同一个类型只落盘一次。' },
  'mission-ext': { title: 'mission-ext 目录', desc: 'TaleWorlds.MountAndBlade / TaleWorlds.Mission 战斗扩展类参考目录', model: '战斗扩展层：MissionBehavior、AgentComponent、MissionLogic、AgentAI 与场景扩展点，是战斗行为注册与每帧逻辑的主要落点。', note: '> 本桶是战斗类的**完整 API**（`TaleWorlds.MountAndBlade*` / `TaleWorlds.Mission*` 全量）。\n> mod 入口类 [Mission](./../mission/Mission)、[Agent](./../mission/Agent)、[Formation](./../mission/Formation) 被单独抽到 [Mission 桶](../mission/)，**预期布局、非重复路由**，一个类型只落盘一次。\n> 回到 [Mission-Ext 桶首页](./)。' },
  'save-system': { title: 'save-system 目录', desc: 'TaleWorlds.SaveSystem 存档系统类参考目录', model: '存档层：SaveManager / SaveContext / ISaveDriver 决定哪些字段被写入存档。给自定义行为加持久化字段必须走这里，绕过它会坏档。' },
  'system': { title: 'system 目录', desc: 'TaleWorlds.InputSystem / TaleWorlds.System 系统层类参考目录', model: '系统层：输入路由与底层系统桥接类型。' },
  'viewmodel': { title: 'viewmodel 目录', desc: 'ViewModelCollection 视图模型类参考目录', model: '视图模型层：属性通知与命令绑定，把游戏状态映射成 Gauntlet 可绑定的属性。' },
  'sandbox': { title: 'sandbox 目录', desc: 'SandBox 沙盒模块类参考目录', model: '沙盒模块层：原版战役的具体实现（行为、任务、菜单、AI），不是通用 API 层。' },
  'storymode': { title: 'storymode 目录', desc: 'StoryMode 故事模式模块类参考目录', model: '故事模式模块层：战役剧本、对话与任务实现，属于游戏内容而非通用 API。' },
  'custombattle': { title: 'custombattle 目录', desc: 'TaleWorlds.MountAndBlade.CustomBattle 自定义战斗类参考目录', model: '自定义战斗层：跳过战役直接开战时的场景与规则扩展点。' },
  'network': { title: 'network 目录', desc: 'TaleWorlds.Network 网络层类参考目录', model: '网络层：连接与传输基础设施。多数单机 mod 不需要直接触碰。' },
  'activitysystem': { title: 'activitysystem 目录', desc: 'TaleWorlds.ActivitySystem 活动系统类参考目录', model: '活动系统：动态活动（比武、旅拍等）的生命周期与参与者管理。' },
  'achievementsystem': { title: 'achievementsystem 目录', desc: 'TaleWorlds.AchievementSystem 成就系统类参考目录', model: '成就系统：成就解锁条件与展示状态。' },
  'modulemanager': { title: 'modulemanager 目录', desc: 'TaleWorlds.ModuleManager 模块管理类参考目录', model: '模块管理：子模块装载顺序与模块间依赖查询的底层类型；入口门面 ModuleManager 已按入口规则移到 core。' },
  'gameplay': { title: 'gameplay 目录', desc: 'Gameplay 玩法类参考目录', model: '玩法层：面向玩家行为的玩法规则类型。' },
  'perks': { title: 'perks 目录', desc: 'Perks 特性类参考目录', model: '特性层：角色特性/天赋相关类型。' },
  'view': { title: 'view 目录', desc: 'View 视图类参考目录', model: '视图层：非 ViewModel 的可视化辅助类型。' },
  'final': { title: 'final 目录', desc: 'Final 收尾阶段类参考目录', model: '收尾阶段：游戏结束、结算与退出流程相关类型。' },
};

// ------------------------------------------------------------------ helpers

const nsLeaf = (ns) => String(ns || '').split('.').filter(Boolean).pop() || 'Global';

function cell(text) {
  return String(text).replace(/\|/gu, '\\|');
}

function code(text) {
  return '`' + String(text).replace(/`/gu, '') + '`';
}

// 按方法名分组，避免同页出现重复的 ### 标题（重载合并到同一个小节）。
function groupByName(members) {
  const map = new Map();
  for (const m of members) {
    if (!map.has(m.name)) map.set(m.name, []);
    const list = map.get(m.name);
    if (!list.includes(m.signature)) list.push(m.signature);
  }
  return [...map.entries()];
}

function renderPage(type) {
  const lines = [];
  lines.push('---');
  lines.push(`title: "${type.typeName}"`);
  lines.push(`description: "${type.typeName} 的自动生成类参考。"`);
  lines.push('---');
  lines.push(`# ${type.typeName}`);
  lines.push('');
  lines.push(`**Namespace:** ${type.namespace}`);
  lines.push(`**Module:** ${type.module}`);
  lines.push(`**Type:** ${code(type.declaration)}`);
  lines.push(`**Base:** ${type.base || 'System.Object'}`);
  lines.push(`**Source:** ${type.sourceFile}`);
  lines.push('');
  lines.push('## 概述');
  lines.push('');
  lines.push(`${code(type.typeName)} 的自动生成类参考页面。声明来自 ${code(type.sourceFile)}（ILSpy 反编译产物，已剥离 Token/RVA 注释）。`);
  lines.push('');
  lines.push('## 心智模型');
  lines.push('');
  lines.push('自动生成的初始占位段落，后续由深写波次替换。');
  lines.push('');

  if (type.properties.length) {
    lines.push('## 主要属性');
    lines.push('');
    lines.push('| Name | Signature |');
    lines.push('|------|-----------|');
    for (const p of type.properties) {
      lines.push(`| ${code(p.name)} | ${code(cell(p.signature))} |`);
    }
    lines.push('');
  }

  if (type.methods.length) {
    lines.push('## 主要方法');
    lines.push('');
    for (const [name, sigs] of groupByName(type.methods)) {
      lines.push(`### ${name}`);
      for (const s of sigs) lines.push(code(s));
      lines.push('');
    }
  }

  lines.push('## 参见');
  lines.push('');
  lines.push('- [本区域目录](../)');
  lines.push('- [API 参考](../../)');
  lines.push('');
  return lines.join('\n');
}

// ------------------------------------------------------------------ load

const inv = JSON.parse(readFileSync(INVENTORY, 'utf8'));
const types = inv.types.slice().sort(
  (a, b) => a.dir.localeCompare(b.dir) || a.namespace.localeCompare(b.namespace) || a.typeName.localeCompare(b.typeName)
);

// 桶内同名冲突：按 1.4.5 惯例，首个（命名空间字典序最小）保留裸名，其余加 <nsLeaf>__。
const nameCount = new Map();
for (const t of types) {
  const k = t.dir + '\0' + t.typeName;
  nameCount.set(k, (nameCount.get(k) || 0) + 1);
}
const claimed = new Map();
for (const t of types) {
  const bare = t.typeName;
  const dup = (nameCount.get(t.dir + '\0' + bare) || 0) > 1;
  if (!dup) {
    t.pageName = bare;
  } else {
    const taken = claimed.get(t.dir + '\0' + bare) || 0;
    t.pageName = (taken === 0 ? bare : nsLeaf(t.namespace) + '__' + bare);
    if (taken > 0) {
      // nsLeaf 也撞了就再退一步用完整命名空间
      let n = nsLeaf(t.namespace);
      let guard = 0;
      while (claimed.get(t.dir + '\0' + n + '__' + bare) && guard++ < 20) n += '_';
      t.pageName = n + '__' + bare;
    }
  }
  claimed.set(t.dir + '\0' + bare, (claimed.get(t.dir + '\0' + bare) || 0) + 1);
  claimed.set(t.dir + '\0' + nsLeaf(t.namespace) + '__' + bare, 1);
  t.pagePath = join(API_ZH, t.dir, t.pageName + '.md');
}

// 我的 stub 页特征：用来区分「已存在的自己写的页」与「别人手写深写页」。
const STUB_MARK = '的自动生成类参考页面。';
function isMyStub(file) {
  try {
    return readFileSync(file, 'utf8').includes(STUB_MARK);
  } catch {
    return false;
  }
}

const stats = { written: 0, skipped: 0, pruned: 0, dirs: new Map(), prunedFiles: [] };

// --- 自愈：清理自己生成、但因 canonical 映射变更而变成残渣的页面 ---
// 只删带 STUB_MARK 的文件；别人的手写深写页永不触碰。
function walkMd(dir, acc = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walkMd(p, acc);
    else if (e.endsWith('.md')) acc.push(p);
  }
  return acc;
}

const expected = new Set(types.map((t) => t.pagePath));
for (const file of walkMd(API_ZH)) {
  if (file.endsWith('_index.md')) continue;
  if (expected.has(file)) continue;
  if (!isMyStub(file)) continue; // 手写深写页：保留
  rmSync(file);
  stats.pruned++;
  stats.prunedFiles.push(relative(API_ZH, file).split(sep).join('/'));
}

// ------------------------------------------------------------------ leaves

for (const t of types) {
  if (onlyDirs && !onlyDirs.has(t.dir)) {
    t.pageStatus = 'missing';
    continue;
  }
  if (existsSync(t.pagePath)) {
    // 硬规则：已存在的 .md 一律不改写。自己的 stub 保持 stub，别人的手写页记为 deep。
    t.pageStatus = isMyStub(t.pagePath) ? 'stub' : 'deep';
    stats.skipped++;
    stats.dirs.set(t.dir, (stats.dirs.get(t.dir) || 0) + 1);
    continue;
  }
  mkdirSync(join(API_ZH, t.dir), { recursive: true });
  writeFileSync(t.pagePath, renderPage(t), 'utf8');
  t.pageStatus = 'stub';
  stats.written++;
  stats.dirs.set(t.dir, (stats.dirs.get(t.dir) || 0) + 1);
}

const skippedExisting = types.filter((t) => t.pageStatus === 'deep').map((t) => t.dir + '/' + t.pageName + '.md');

// ------------------------------------------------------------------ indexes

const bucketDirs = [...new Set(types.map((t) => t.dir))].sort();
const collisionsByDir = {};
for (const t of types) {
  if (t.pageName.includes('__')) (collisionsByDir[t.dir] ||= []).push(t.pageName.replace(/\.md$/u, ''));
}

// 保留 BEGIN 标记之前的手写前言，只重建生成的列表块。
function preambleOf(file) {
  if (!existsSync(file)) return '';
  const text = readFileSync(file, 'utf8');
  const i = text.indexOf('<!-- BEGIN SECTION INDEX -->');
  if (i < 0) return '';
  const head = text.slice(0, i).replace(/\s+$/u, '');
  const fm = head.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/u);
  const rest = fm ? head.slice(fm[0].length).trim() : head.trim();
  return rest ? rest + '\n\n' : '';
}

function renderDirIndex(dir) {
  const meta = DIR_META[dir] || { title: dir + ' 目录', desc: `${dir} 类参考目录`, model: '' };
  const files = readdirSync(join(API_ZH, dir)).filter((f) => f.endsWith('.md') && f !== '_index.md').sort();
  const groups = new Map();
  for (const f of files) {
    const c = f[0].toUpperCase();
    const key = /[A-Z]/.test(c) ? c : '#';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(f.replace(/\.md$/u, ''));
  }
  const letters = [...groups.keys()].sort();

  const out = [];
  out.push(preambleOf(join(API_ZH, dir, '_index.md')));
  out.push('---');
  out.push(`title: "${meta.title}"`);
  out.push(`description: "${meta.desc}"`);
  out.push('---');
  if (meta.model) {
    out.push('## 模块心智模型');
    out.push('');
    out.push(meta.model);
    out.push('');
  }
  if (meta.note) {
    out.push(meta.note);
    out.push('');
  }
  out.push('<!-- BEGIN SECTION INDEX -->');
  out.push('## ↑ 上级导航');
  out.push('');
  out.push('- [API 参考](../)');
  out.push('- [版本首页](../../)');
  out.push('');
  out.push(`## ↓ 子类列表 — 按字母分组（共 ${files.length} 个类型页）`);
  out.push('');
  for (const letter of letters) {
    out.push('### ' + letter);
    out.push('');
    for (const page of groups.get(letter).sort()) out.push(`- [${page}](./${page})`);
    out.push('');
  }
  if (collisionsByDir[dir]) {
    out.push('### 同名类型命名约定');
    out.push('');
    out.push('本目录存在跨命名空间同名类型。桶内按命名空间字典序，首个类型保留裸文件名，其余加 `<命名空间末段>__<类型名>` 后缀；同名页面在下方字母分组中已全部列出。');
    out.push('');
    for (const name of collisionsByDir[dir].sort()) out.push(`- \`${name}\``);
    out.push('');
  }
  out.push('<!-- END SECTION INDEX -->');
  return out.join('\n');
}

for (const dir of bucketDirs) {
  const idx = join(API_ZH, dir, '_index.md');
  if (!existsSync(join(API_ZH, dir))) continue;
  // 索引块由本工具拥有（必须能重建才能自愈）；BEFORE 标记之前的手写前言保留。
  const old = existsSync(idx) ? readFileSync(idx, 'utf8') : '';
  if (old && !old.includes('<!-- BEGIN SECTION INDEX -->')) { stats.indexSkipped = (stats.indexSkipped || 0) + 1; continue; }
  mkdirSync(join(API_ZH, dir), { recursive: true });
  writeFileSync(idx, renderDirIndex(dir), 'utf8');
}

// ------------------------------------------------------------------ api index

const apiIndex = join(API_ZH, '_index.md');
const API_INDEX_MARK = '<!-- BEGIN API INDEX -->';
{
  const lines = [];
  lines.push('---');
  lines.push('title: "API 参考 — v1.5.3"');
  lines.push('description: "Bannerlord v1.5.3 API 参考入口：按子系统目录进入类型页，目录划分来自 tools/_dir-map-canonical.json 的权威命名空间映射。"');
  lines.push('---');
  lines.push(API_INDEX_MARK);
  lines.push('# API 参考：v1.5.3');
  lines.push('');
  lines.push('本树由 `tools/_v153_inventory.mjs` 扫描 `bannerlord-1.5.3` 反编译源码生成清单，再由 `tools/_v153_stubs.mjs` 落盘页面。类型页中的 `Type:` 声明行与成员签名均照抄源码（已剥离 ILSpy 的 Token/RVA 注释）；页面正文目前是自动生成占位，后续波次会替换为手写深写。');
  lines.push('');
  lines.push('## 目录命名规则');
  lines.push('');
  lines.push('- 目录名（小写 slug）由权威表 `tools/_dir-map-canonical.json` 决定：先查 `entryPointDirs`（按类型名小写匹配的门面类），再按**最长命名空间前缀**匹配，最后落到 `defaultDir: core-extra`。');
  lines.push('- 一个类型只对应一个页面路径，不重复落盘。桶内跨命名空间同名时按 `<命名空间末段>__<类型名>` 命名，约定写在各目录索引页。');
  lines.push('- 页面若已存在（深写波次产物）则原样保留，生成器只补缺失文件。');
  lines.push('');
  lines.push('## 子目录');
  lines.push('');
  lines.push('| 目录 | 类型页数 | 说明 |');
  lines.push('| --- | --- | --- |');
  for (const dir of bucketDirs) {
    const meta = DIR_META[dir] || { desc: `${dir} 类参考目录` };
    const count = readdirSync(join(API_ZH, dir)).filter((f) => f.endsWith('.md') && f !== '_index.md').length;
    lines.push(`| [${dir}](./${dir}/) | ${count} | ${meta.desc} |`);
  }
  lines.push('');
  lines.push('## 参见');
  lines.push('');
  // 从 zh/api/ 往上两级是版本根目录 content/v1.5.3/（无 _index.md）；版本首页是上一级 zh/。
  lines.push('- ↑ [版本首页](../)');
  lines.push('');
  mkdirSync(API_ZH, { recursive: true });
  writeFileSync(apiIndex, lines.join('\n'), 'utf8');
}

// ------------------------------------------------------------------ writeback

const byDirCounts = {};
for (const t of types) {
  byDirCounts[t.dir] ||= { total: 0, stub: 0, deep: 0, missing: 0 };
  byDirCounts[t.dir].total++;
  byDirCounts[t.dir][t.pageStatus]++;
}
inv.pageCoverage = {
  byDir: byDirCounts,
  totals: {
    types: types.length,
    stub: types.filter((t) => t.pageStatus === 'stub').length,
    deep: types.filter((t) => t.pageStatus === 'deep').length,
    missing: types.filter((t) => t.pageStatus === 'missing').length,
  },
  skippedExistingFiles: skippedExisting,
  prunedStaleFiles: stats.prunedFiles,
  generator: 'tools/_v153_stubs.mjs',
};
writeFileSync(INVENTORY, JSON.stringify(inv, null, 2) + '\n');

console.log('buckets=' + bucketDirs.length + ' -> ' + bucketDirs.join(', '));
console.log('stubWritten=' + stats.written);
console.log('prunedStale=' + stats.pruned + (stats.prunedFiles.length ? ' [' + stats.prunedFiles.join(', ') + ']' : ''));
console.log('skippedExisting=' + stats.skipped + (skippedExisting.length ? ' [' + skippedExisting.join(', ') + ']' : ''));
console.log('missing=' + (inv.pageCoverage.totals.missing));
for (const dir of bucketDirs) {
  const c = byDirCounts[dir];
  console.log(`  ${dir.padEnd(16)} total=${String(c.total).padStart(5)} stub=${String(c.stub).padStart(5)} deep=${c.deep} missing=${c.missing}`);
}