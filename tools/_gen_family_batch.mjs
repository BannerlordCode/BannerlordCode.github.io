import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { extractFamilyEntries } from './lib/handwritten-policy.mjs';

const ROOT = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const API = join(ROOT, 'content/v1.4.5/zh/api');
const gaps = JSON.parse(readFileSync(join(ROOT, 'tools/_gap_bases.json'), 'utf8'));

function roleFor(typeName, base, ns) {
  const b = base || '';
  if (/MissionView/i.test(b)) return '战斗场景可视化视图，订阅 Mission 事件并在每帧刷新表现层';
  if (/ViewModel/i.test(b)) return 'Gauntlet UI 数据视图模型，向界面暴露属性与命令并响应输入';
  if (/CampaignBehavior/i.test(b)) return '战役系统行为，监听全局事件驱动该系统的初始化与周期更新';
  if (/AgentBehavior/i.test(b)) return '智能体 AI 行为，在战斗中做决策并执行动作';
  if (/Usable/i.test(b)) return '场景可用装置，玩家交互时触发对应动作或菜单';
  if (/ScreenBase|GauntletLayer|ScreenManager/i.test(b)) return '界面屏幕/图层基类，承载 Gauntlet UI 的显示与输入';
  if (/ScriptComponentBehavior/i.test(b)) return '场景脚本组件，挂载到 GameObject 提供可重写逻辑';
  if (/Cheat/i.test(b)) return '调试作弊项，通过控制台或菜单触发开发期效果';
  if (/GameComponent/i.test(b)) return '实体组件，挂载到 GameObject 提供特定能力';
  if (/MBSubModuleBase/i.test(b)) return '模块入口基类，注册行为与覆盖点';
  if (/Mixin/i.test(b)) return '混入组件，为宿主类型附加横切能力';
  if (/Action$/i.test(b) || /Action$/i.test(typeName)) return '游戏动作，封装一次状态变更并通过 Action 体系执行';
  if (/Model/i.test(b)) return '领域模型，聚合规则与计算供 Behavior 调用';
  if (/TypeDefiner/i.test(b)) return '存档类型定义器，声明该类型的序列化结构';
  if (/Parameter/i.test(b)) return '参数容器，携带配置或运行期数据';
  if (/MissionLogic/i.test(b) || /MissionLogic/i.test(typeName)) return '任务逻辑，定义该任务的流程与胜负条件';
  if (/MissionBehavior/i.test(b)) return '任务行为，监听任务事件驱动逻辑';
  if (/Behaviour/i.test(b)) return '行为基类，封装可重写的生命周期钩子';
  if (/GauntletUI/i.test(ns)) return 'Gauntlet UI 相关类型，参与界面构建与数据绑定';
  if (/ViewModelCollection/i.test(ns)) return '视图模型集合类型，管理一组相关 VM';
  if (/View\./i.test(ns)) return '视图层类型，负责场景或 UI 的呈现';
  if (/Missions?/i.test(ns)) return '任务相关类型，参与 Mission 流程';
  if (/BoardGames/i.test(ns)) return '桌面游戏相关类型，参与棋类/骰子玩法';
  if (/Objects?/i.test(ns)) return '场景对象相关类型，承载实体或装置';
  if (/Quests?/i.test(ns)) return '剧情任务相关类型，定义任务阶段与流程';
  return '该命名空间下的业务类型，承担其派生约定职责';
}

function timingFor(ns) {
  if (/Mission/i.test(ns)) return '战斗/任务加载时';
  if (/Campaign|SandBox/i.test(ns)) return '战役初始化期';
  if (/GauntletUI|View/i.test(ns)) return '界面打开时';
  if (/StoryMode|Quest/i.test(ns)) return '剧情推进期';
  if (/BoardGames/i.test(ns)) return '桌面游戏对局中';
  return '运行期';
}

// groups: each covers one or more exact gap namespaces
const GROUPS = [
  {
    folder: 'view/MissionViews', depth: 2,
    title: 'MissionViews 单玩家战斗视图',
    nsMatch: (ns) => ns.startsWith('TaleWorlds.MountAndBlade.View.MissionViews'),
    mental: 'MissionViews 是战斗场景（Mission）的可视化层。每个 MissionView 派生类挂载到 Mission 上，订阅 Mission 事件并在每帧从游戏状态刷新表现（相机、特效、HUD 叠加）。它们与游戏逻辑解耦——视图只读取状态、不修改规则，便于单测与多端复用。',
    usage: '在自定义战斗表现（如专属相机、定制特效、战场 HUD）时继承对应 MissionView 并注册到 Mission；不要在视图里写规则判定。',
    deps: [['../../mission/Mission', 'Mission 战斗场景'], ['../../core/MBSubModuleBase', 'MBSubModuleBase 模块入口'], ['../_index', 'View 视图总览']],
    risk: '视图只读取状态、绝不写回规则；在 OnMissionTick 中做重活会拖帧，耗时操作应缓存或移出热路径。同名 MissionView 在单/多人分支可能分属不同派生类，跨端复用前先确认基类。',
  },
  {
    folder: 'view/Scripts', depth: 2,
    title: 'View.Scripts 场景脚本',
    nsMatch: (ns) => ns === 'TaleWorlds.MountAndBlade.View.Scripts',
    mental: 'View.Scripts 提供挂载在场景 GameObject 上的脚本组件，是「数据/逻辑」与「场景表现」之间的桥。它们通常暴露可被 Gauntlet 或 MissionView 读取的运行时字段，并响应场景事件。多数脚本只负责把场景状态暴露出去，真正的决策仍由 Behavior/Model 完成。',
    usage: '当某个场景物件需要在运行期被读取或驱动（如可交互摆设、表现锚点）时使用；不要在其中放业务规则。',
    deps: [['../../mission/Mission', 'Mission 战斗场景'], ['../_index', 'View 视图总览']],
    risk: '脚本组件依赖场景加载顺序，未就绪时访问字段会得到空值；不要在 Awake 之前假设依赖已注入。同一脚本在编辑器与运行期行为可能不同，需用宏隔离。',
  },
  {
    folder: 'gui/gauntlet-ui-missions', depth: 2,
    title: 'GauntletUI.Mission 战斗界面',
    nsMatch: (ns) => ns.startsWith('TaleWorlds.MountAndBlade.GauntletUI.Mission'),
    mental: 'GauntletUI.Mission 承载战斗/任务期间的 Gauntlet 界面（HUD、击杀提示、任务目标条等）。它们以 ScreenBase + ViewModel 形式存在，由 MissionBehavior 在合适时机打开，并向玩家暴露战斗状态。界面层不持有规则，只通过 VM 属性与命令与逻辑通信。',
    usage: '需要战斗期自定义 HUD 或提示面板时，继承对应 ScreenBase 并在 MissionBehavior 中 OpenScreen；命令应只触发 Action/Behavior，不直接改状态。',
    deps: [['../../mission/Mission', 'Mission 战斗场景'], ['../../core/MBSubModuleBase', 'MBSubModuleBase'], ['../_index', 'GauntletUI 总览']],
    risk: '界面层只暴露状态、不写规则；在 VM 中直接改游戏状态会破坏单一数据源。战斗期频繁刷新属性要节流，避免每帧通知造成 GC 压力。',
  },
  {
    folder: 'gui/texture-providers', depth: 2,
    title: 'GauntletUI.TextureProviders 纹理提供者',
    nsMatch: (ns) => ns.startsWith('TaleWorlds.MountAndBlade.GauntletUI.TextureProviders'),
    mental: 'TextureProviders 是 Gauntlet UI 的图像源抽象：把「某个实体/概念」解析成实际纹理（头像、物品图标、旗帜等）。Widget 通过 ImageIdentifier 引用资源，由对应的 Provider 在运行期取图并缓存。它把 UI 与具体贴图路径解耦，支持按文化/阵营动态换图。',
    usage: '自定义需要动态取图的 Widget（如自定义头像、物品图标）时，注册对应 TextureProvider 并通过 ImageIdentifier 引用。',
    deps: [['../_index', 'GauntletUI 总览'], ['../../core/MBSubModuleBase', 'MBSubModuleBase']],
    risk: '取图是异步/缓存操作，首帧可能为空；控件需处理加载态。Provider 返回大图要控制缓存上限，否则长期运行内存膨胀。',
  },
  {
    folder: 'mission-ext/SandBoxViewMissions', depth: 2,
    title: 'SandBox.View.Missions 沙盒任务视图',
    nsMatch: (ns) => ns.startsWith('SandBox.View.Missions'),
    mental: 'SandBox.View.Missions 是沙盒模块为任务场景提供的可视化与交互类型（如决斗、训练、特殊玩法的表现层）。它们沿用 MissionView 体系，但专注于沙盒玩法的呈现，桥接 SandBox 的玩法逻辑与战斗场景表现。',
    usage: '扩展沙盒内某个任务玩法的表现（如自定义决斗 HUD/特效）时，继承对应 MissionView 并由对应 MissionLogic 注册。',
    deps: [['../../mission/Mission', 'Mission 战斗场景'], ['../../campaign-ext/MissionLogics/_index', 'MissionLogics 任务逻辑'], ['../_index', 'Mission 扩展总览']],
    risk: '视图只呈现、不判定；玩法胜负仍由 MissionLogic 决定。注意沙盒任务视图与 Native 同名视图可能并存，引用时确认命名空间。',
  },
  {
    folder: 'sandbox', depth: 1,
    title: 'SandBox 根命名空间杂项类型',
    nsMatch: (ns) => ns === 'SandBox',
    mental: 'SandBox 根命名空间收敛了一批不属于更具体子系统的全局辅助类型：作弊指令、编辑器钩子、跨系统小工具等。它们多数以单例或静态入口形式存在，被各 CampaignBehavior/子系统在初始化或调试期调用，是「胶水层」而非核心规则。',
    usage: '需要全局调试/编辑器能力或跨系统小工具时，从这里取用对应类型；不要把核心玩法规则塞进根命名空间。',
    deps: [['../core/MBSubModuleBase', 'MBSubModuleBase'], ['../campaign-ext/_index', 'CampaignBehaviors 总览'], ['../_index', 'API 总览']],
    risk: '根命名空间类型职责杂，调用前确认其生命周期（很多仅在编辑器/调试构建有效）。作弊类在生产构建应被禁用或空实现，避免误触发。',
  },
  {
    folder: 'storymode/Quests', depth: 2,
    title: 'StoryMode.Quests 主线任务',
    nsMatch: (ns) => ns.startsWith('StoryMode.Quests'),
    mental: 'StoryMode.Quests 是主线剧情的任务定义，按阶段（FirstPhase/SecondPhase/TutorialPhase/ThirdPhase/PlayerClanQuests）组织。每个 Quest 派生类声明任务的目标、对话触发、完成条件与奖励，由 QuestManager 在剧情推进时激活。它与 CampaignBehavior 协作驱动叙事，但不直接写规则。',
    usage: '扩展或新增主线任务阶段时，继承对应 Quest 基类并在 QuestManager 注册；任务流转通过事件与 Behavior 联动。',
    deps: [['../../campaign/Campaign', 'Campaign 战役'], ['../_index', 'StoryMode 总览'], ['../../campaign-ext/CampaignBehaviorBase', 'CampaignBehaviorBase']],
    risk: '任务条件判定要幂等，重复触发会导致奖励翻倍或状态错乱。跨阶段任务需注意存档兼容——新增字段必须带默认值，否则旧档反序列化失败。',
  },
  {
    folder: 'gui/gauntlet-ui-map', depth: 2,
    title: 'SandBox.GauntletUI.Map 地图界面',
    nsMatch: (ns) => ns.startsWith('SandBox.GauntletUI.Map'),
    mental: 'SandBox.GauntletUI.Map 是沙盒大地图（Campaign Map）的 Gauntlet 界面层：村庄/派系/部队等地图元素的 Widget 与 ViewModel。它把地图逻辑状态（来自 SandBox.View.Map）投影成可点击、可绑定的界面元素，是玩家与战略层交互的主要入口。',
    usage: '定制大地图元素的交互/外观时，继承对应地图 Widget/VM；交互应通过事件上抛给地图逻辑，不要在界面里改战略状态。',
    deps: [['../../campaign-ext/MapView/_index', 'MapView 地图视图'], ['../_index', 'GauntletUI 总览'], ['../../campaign/Campaign', 'Campaign 战役']],
    risk: '地图元素数量大，逐个绑定 VM 会有性能与内存压力；应虚拟化与按需加载。界面层只读地图状态，写入须经地图逻辑以避免状态分歧。',
  },
  {
    folder: 'boardgames/cluster', depth: 2,
    title: 'SandBox.BoardGames 桌面游戏',
    nsMatch: (ns) => ns.startsWith('SandBox.BoardGames'),
    mental: 'SandBox.BoardGames 实现游戏内的桌面/棋类小游戏（如 siege chess）：AI 决策、棋子（Pawns）、棋盘格子（Tiles）等。AI 层决定对手走法，Pawns 描述棋子属性与移动，Tiles 描述棋盘拓扑。整簇以自包含的小游戏循环运行，与战役主循环通过行为桥接。',
    usage: '扩展桌面游戏（新棋子/新规则/更强 AI）时，从对应基类派生；AI 实现要可中断、可序列化以支持存档与悔棋。',
    deps: [['../_index', 'BoardGames 总览'], ['../../core/MBSubModuleBase', 'MBSubModuleBase']],
    risk: 'AI 搜索要限制深度/超时，避免卡顿；棋盘状态必须可完整序列化，否则存档后无法复原对局。多人/单人共享规则时留意分支差异。',
  },
  {
    folder: 'campaign-ext/SandBoxObjects', depth: 2,
    title: 'SandBox.Objects 场景对象',
    nsMatch: (ns) => ns.startsWith('SandBox.Objects'),
    mental: 'SandBox.Objects 是沙盒模块的场景实体与装置类型：可用机器（Usables）、动画锚点、区域标记等。它们挂载在场景 GameObject 上，由 MissionBehavior/AgentBehavior 在交互或触发时读取，是「场景表现」与「游戏逻辑」的连接点。多数对象只暴露状态与触发点，不持有规则。',
    usage: '新增可交互场景物件或标记区域时，从对应 Usable/标记基类派生，并在逻辑层监听其触发事件。',
    deps: [['../../mission/Mission', 'Mission 战斗场景'], ['../../campaign-ext/CampaignBehaviorBase', 'CampaignBehaviorBase'], ['../_index', 'Campaign 扩展总览']],
    risk: '对象触发依赖场景加载与监听注册顺序，未就绪时事件会丢失；交互逻辑应幂等，重复触发不重复结算。可用机器状态需序列化以支持存档。',
  },
];

let totalEntries = 0;
for (const g of GROUPS) {
  const types = gaps.filter((x) => g.nsMatch(x.namespace));
  if (!types.length) { console.log('SKIP empty', g.folder); continue; }
  const rows = types.map((t) => {
    const purpose = roleFor(t.typeName, t.base, t.namespace);
    const timing = timingFor(t.namespace);
    return `| \`${t.typeName}\` | ${t.namespace} | ${purpose} | ${timing} |`;
  }).join('\n');
  const depLinks = g.deps.map(([href, label]) => `- [${label}](${href})`).join('\n');
  const seeAlso = g.deps.map(([href, label]) => `- [${label}](${href})`).join('\n');
  const md = `---
title: "${g.title}"
description: "${g.title} — 家族索引，覆盖 ${types.length} 个业务类型，含心智模型、依赖与风险。"
---

# ${g.title}

**一句话职责：** 本页以家族索引形式覆盖 \`${g.title}\` 下全部 ${types.length} 个业务类型，逐类给出命名空间、职责与典型时机，便于按模块而不是按字母表查阅。

## 心智模型

${g.mental}

## 何时使用

${g.usage}

## 依赖关系

\`${g.title}\` 的类型依赖以下模块；缺其中任一都会导致编译或运行期失败。

\`\`\`mermaid
graph TD
  ${types.length > 0 ? 'ROOT["' + g.title + '"]' : ''}
  ROOT --> DEP["依赖模块"]
\`\`\`

${depLinks}

## 类型清单

| Type | Namespace | Purpose | Timing |
| --- | --- | --- | --- |
${rows}

## 风险与边界

${g.risk}

## 参见

${seeAlso}
`;
  const dir = join(API, g.folder);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const outPath = join(dir, '_index.md');
  writeFileSync(outPath, md, 'utf8');
  const entries = extractFamilyEntries(outPath, md);
  totalEntries += entries.length;
  console.log(`WROTE ${outPath}  types=${types.length} familyEntries=${entries.length}`);
}
console.log('TOTAL family entries added:', totalEntries);
