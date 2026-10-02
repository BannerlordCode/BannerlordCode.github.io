import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { extractFamilyEntries } from './lib/handwritten-policy.mjs';

const ROOT = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const API = join(ROOT, 'content/v1.4.5/zh/api');
const _gapsRaw = JSON.parse(readFileSync(join(ROOT, 'tools/_current-r1-gaps-145-zh.json'), 'utf8'));
const gaps = Array.isArray(_gapsRaw) ? _gapsRaw : (_gapsRaw.gaps || _gapsRaw.allGaps || []);
const baseMap = (() => {
  const arr = JSON.parse(readFileSync(join(ROOT, 'tools/_gap_bases.json'), 'utf8'));
  const a = Array.isArray(arr) ? arr : (arr.gaps || arr.allGaps || []);
  const m = new Map();
  for (const x of a) m.set(`${x.namespace}\0${x.typeName}`, x.base || '');
  return m;
})();

function roleFor(typeName, base, ns) {
  const b = (base && base !== '(none)') ? base : '';
  const t = typeName || '';
  if (/MissionView/i.test(b) || /MissionView/i.test(t)) return '战斗场景可视化视图，订阅 Mission 事件并在每帧从游戏状态刷新表现层（相机/特效/HUD 叠加），视图只读状态、不写规则。';
  if (/ViewModel/i.test(b) || /VM$/i.test(t) || /ViewModel/i.test(t)) return 'Gauntlet UI 数据视图模型，向界面暴露属性与命令、响应输入并通知刷新；VM 只是状态投影，命令应只触发 Action/Behavior。';
  if (/CampaignBehavior/i.test(b) || /CampaignBehavior/i.test(t)) return '战役系统行为，监听全局事件驱动该系统初始化与周期更新，是 mod 注入玩法的主入口；不要在行为外直接改世界状态。';
  if (/AgentBehavior/i.test(b) || /AgentBehavior/i.test(t)) return '战斗智能体 AI 行为，在 Mission 中做决策并执行动作；生命周期随 Agent 生死，需处理 Agent 死亡后的清理。';
  if (/MissionLogic/i.test(b) || /MissionLogic/i.test(t)) return '任务逻辑，定义该任务的流程与胜负条件，由 Mission 在加载时装配；胜负判定应幂等，重复触发不重复结算。';
  if (/MissionBehavior/i.test(b) || /MissionBehavior/i.test(t)) return '任务行为，监听任务事件驱动逻辑；与 MissionLogic 配合，负责表现与交互层联动。';
  if (/Behaviour/i.test(b)) return '可重写生命周期钩子的行为基类，封装 OnMissionTick/OnBehaviourInitialize 等时机。';
  if (/Usable/i.test(b) || /Usable/i.test(t)) return '场景可用装置，玩家交互时触发对应动作或菜单；交互逻辑需幂等，状态需可序列化以支持存档。';
  if (/ScreenBase|GauntletLayer|ScreenManager/i.test(b)) return '界面屏幕/图层基类，承载 Gauntlet UI 的显示与输入；命令只触发 Action/Behavior，不直接改状态。';
  if (/ScriptComponentBehavior/i.test(b) || /ScriptComponent/i.test(t)) return '挂载到场景 GameObject 的脚本组件，把场景状态暴露给逻辑层；依赖场景加载顺序，未就绪时字段为空。';
  if (/Cheat/i.test(b) || /Cheat/i.test(t)) return '调试作弊项，通过控制台或菜单触发开发期效果；生产构建应禁用或空实现，避免误触发改坏存档。';
  if (/GameComponent/i.test(b) || /GameComponent/i.test(t)) return '挂载到 GameObject 的实体组件，提供特定能力；组件状态需可序列化。';
  if (/MBSubModuleBase/i.test(b)) return '模块入口基类，注册行为与覆盖点；生命周期贯穿全程，不要在错误阶段（如加载前）取还没就绪的系统。';
  if (/Mixin/i.test(b) || /Mixin/i.test(t)) return '混入组件，为宿主类型附加横切能力；注意不要与宿主已有成员冲突。';
  if (/Action$/i.test(b) || /Action$/i.test(t)) return '游戏动作，封装一次状态变更并通过 Action 体系执行；必须用 Apply 而非直接改字段，否则跳过事件级联会坏档。';
  if (/Model/i.test(b) || /Model/i.test(t)) return '领域模型，聚合规则与计算供 Behavior 调用；替换模型要提供同等契约，空替换会让依赖方拿到 null。';
  if (/TypeDefiner/i.test(b) || /TypeDefiner/i.test(t)) return '存档类型定义器，声明该类型哪些字段进档；新增字段必须带默认值，否则旧档反序列化失败。';
  if (/Parameter|Param/i.test(t)) return '参数容器，携带配置或运行期数据；注意不要持有长生命周期引用以免阻碍 GC。';
  if (/QuestTask|Task/i.test(t)) return '任务阶段子目标，定义一步完成条件与结算；条件判定需幂等，重复完成不重复奖励。';
  if (/AI/i.test(t) || /Brain/i.test(t)) return 'AI 决策实现，需可中断、可序列化以支持存档与悔棋；搜索要限制深度/超时避免卡顿。';
  if (/Pawn/i.test(t)) return '棋盘/棋子描述，含属性与移动规则；状态须可完整序列化以复原对局。';
  if (/(Order|OrderSet|VisualOrder)/i.test(t)) return '战斗指令/编队顺序，描述部队的阵型与移动意图；由 Order 系统解释执行。';
  if (/TextureProvider|Provider/i.test(t)) return 'Gauntlet 图像源抽象，把实体/概念解析成实际纹理并缓存；首帧可能为空，需处理加载态。';
  if (/MenuView/i.test(t)) return '菜单界面视图，组织菜单项与导航；交互通过事件上抛，不在视图里写规则。';
  if (/(Selector|ItemVM)/i.test(t)) return '选择器/列表项视图模型，承载一个可选项的数据与高亮；集合型 VM 要虚拟化以控内存。';
  if (/Notification/i.test(t)) return '通知项类型，描述一条地图/事件提示的数据；只承载展示数据，触发逻辑在 Behavior。';
  if (/(Event|EventHandler)/i.test(t)) return '事件或事件处理器，承载一次发生的事情的数据；订阅要记得在卸载时退订以防泄漏。';
  if (/BattleScore/i.test(t)) return '战斗计分规则/数据，统计并结算战斗表现得分；计分要可重入，避免中途重算错位。';
  if (/Election/i.test(t)) return '选举/表决机制，用于王国决策等集体投票；注意投票时机与平票处理。';
  if (/FastMode/i.test(t)) return '快速模拟模式开关，跳过表现层加速战役推进；逻辑必须在不渲染时也能正确跑。';
  if (/ComponentInterface/i.test(t)) return '组件接口，定义可被不同实现替换的横切能力契约。';
  if (/MapEvent|MapNavigation|NavigationElement/i.test(t)) return '大地图事件/导航元素，描述地图拓扑或移动相关数据结构；改动要同步地图逻辑与导航网格。';
  if (/Conversation/i.test(t) || /Conversation/i.test(ns)) return '对话相关类型，参与对话树与表演；对话线改动需注意分支与本地化。';
  if (/Issue/i.test(t) || /Issue/i.test(ns)) return 'issue（领地事务）相关类型，描述一个可接取与结算的领地问题；完成要幂等。';
  if (/Tournament/i.test(t) || /Tournament/i.test(ns)) return '锦标赛相关类型，组织赛事报名、对阵与奖励结算；状态需可序列化。';
  return '该命名空间下的业务类型，承担其派生约定职责；调用前确认其生命周期与所属系统，不要在错误阶段引用未就绪的实例。';
}

function timingFor(ns) {
  if (/Mission/i.test(ns)) return '战斗/任务加载时';
  if (/Campaign|SandBox/i.test(ns)) return '战役初始化期';
  if (/GauntletUI|View/i.test(ns)) return '界面打开时';
  if (/StoryMode|Quest|Issue/i.test(ns)) return '剧情推进期';
  if (/BoardGame/i.test(ns)) return '桌面游戏对局中';
  if (/Network|CustomBattle|Server/i.test(ns)) return '自定义/多人会话期';
  return '运行期';
}

// ---- Topic groups (first match wins). Each covers one or more gap namespaces. ----
const SAFE = {
  campaign: ['../../campaign/Campaign', 'Campaign 战役'],
  mission: ['../../mission/Mission', 'Mission 战斗场景'],
  submodule: ['../../core/MBSubModuleBase', 'MBSubModuleBase 模块入口'],
  behavior: ['../../campaign-ext/CampaignBehaviorBase', 'CampaignBehaviorBase'],
  save: ['../../save-system/SaveManager', 'SaveManager 存档'],
  vm: ['../../core-extra/ViewModel', 'ViewModel 视图模型'],
  events: ['../../campaign-ext/CampaignEvents', 'CampaignEvents 战役事件'],
  api: ['../../_index', 'API 总览'],
};

const GROUPS = [
  { slug: 'mnb-root', title: 'TaleWorlds.MountAndBlade 根命名空间类型',
    match: (ns) => ns === 'TaleWorlds.MountAndBlade',
    mental: 'TaleWorlds.MountAndBlade 是骑马与砍杀核心程序集的根命名空间，收敛了一批不属于更具体子系统（Campaign/Mission/View/UI）的全局类型：订单系统（Order/VisualOrder）、战斗计分（BattleScore）、平台桥接（Platform.PC）、专用服务器客户端辅助等。它们是跨层基础设施，被战役与战斗逻辑在运行期直接引用，是「引擎与玩法之间的胶水」，本身不持有核心玩法规则。',
    usage: '需要理解订单/战斗计分/平台桥接等核心机制时从这里取用对应类型；不要把它当成业务玩法规则库，核心规则仍在 Campaign/Mission 子系统。',
    risk: '根命名空间类型跨战役与战斗共享，生命周期贯穿全程；平台桥接类通常只在对应平台构建有效，跨平台引用需加宏隔离。订单/计分状态由上层系统持有，不要自行 new 后脱离管理体系，否则不会被 Tick 与存档纳入。',
    deps: [SAFE.campaign, SAFE.mission, SAFE.api] },

  { slug: 'custombattle', title: 'CustomBattle 自定义战斗类型',
    match: (ns) => ns.startsWith('TaleWorlds.MountAndBlade.CustomBattle'),
    mental: 'CustomBattle 命名空间实现「自定义战斗」模式：玩家自由编队、选择场景与规则进行非剧情对战。CustomBattle 是战斗配置的聚合根，SelectionItem 描述可被选择的单位/编队条目，CustomBattleObjects 承载自定义战斗的实体与参数，Views 提供对应的界面层。整簇以自包含的对战循环运行，通过战斗管理器与 Mission 桥接。',
    usage: '扩展或新增自定义战斗的单位选择/编队/规则时，从对应 SelectionItem/CustomBattleObjects 派生；界面层只暴露状态，写入须经战斗管理器。',
    risk: '自定义战斗状态必须可完整序列化以支持中途存档；SelectionItem 与实体映射要保持一致，引用已卸载的单位会得到空。多人/单人共享规则时留意分支差异。',
    deps: [SAFE.mission, SAFE.submodule, SAFE.api] },

  { slug: 'network-perks-conditions', title: 'Network Perks.Conditions  perk 条件',
    match: (ns) => ns === 'TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions',
    mental: 'Perks.Conditions 是多人模式下 perk（特长）的「生效条件」集合：每个 MPPerkCondition 派生类判断某个 perk 在当前战斗情境下是否满足（如特定武器/兵种/地形）。条件只做判定、不改状态，由 perk 系统在结算加成前求值。它们与单人 perk 体系解耦，专为多人平衡设计。',
    usage: '新增或调整多人 perk 的触发条件时，继承 MPPerkCondition 并在 perk 定义里登记；条件必须是纯判定、可重入。',
    risk: '条件判定会在战斗热路径频繁调用，要保持轻量；不要在其中写状态变更。多人条件依赖联网上下文，离线/单人路径下可能永不触发，测试需覆盖。',
    deps: [SAFE.mission, SAFE.api] },

  { slug: 'dedicated-server', title: 'DedicatedCustomServer.ClientHelper 专用服务器客户端辅助',
    match: (ns) => ns === 'TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper',
    mental: 'DedicatedCustomServer.ClientHelper 提供专用服务器（dedicated server）场景下的客户端辅助类型，负责把服务器端的战斗/对战状态桥接给客户端表现层。它只在专用服务器构建与对应客户端会话中存在，是多人部署的胶水层，不参与单人剧情。',
    usage: '在专用服务器部署下需要桥接战斗状态到客户端表现时，使用这里的辅助类型；单人路径不应引用。',
    risk: '仅在专用服务器构建有效，单人/编辑器引用会得到空或报错；跨构建引用需加宏隔离。客户端辅助不持有权威状态，权威判定在服务端。',
    deps: [SAFE.mission, SAFE.submodule, SAFE.api] },

  { slug: 'mnb-view', title: 'TaleWorlds.MountAndBlade.View.* 核心视图类型',
    match: (ns) => ns.startsWith('TaleWorlds.MountAndBlade.View.') && !/MissionViews/.test(ns) && ns !== 'TaleWorlds.MountAndBlade.View.Scripts',
    mental: 'TaleWorlds.MountAndBlade.View 下的其余视图类型（场景通知、自定义战斗视图、视觉指令集、屏幕脚本等）是战斗/场景表现层的补充。它们沿用 MissionView/ScriptComponent 体系，但专注于特定表现：SceneNotification 把场景事件投影成 HUD 提示，VisualOrders 描述编队指令的可视化，Screens.Scripts 提供屏幕级脚本钩子。视图只读取状态、不写规则。',
    usage: '需要定制战斗期 HUD 提示、编队指令可视化或屏幕级脚本时，从对应类型派生并由 MissionBehavior 注册；命令只触发逻辑。',
    risk: '视图只呈现不判定；在 OnMissionTick 中做重活会拖帧。同名视图在单/多人分支可能分属不同派生类，复用前先确认基类。',
    deps: [SAFE.mission, SAFE.submodule, SAFE.api] },

  { slug: 'mnb-vm', title: 'TaleWorlds.MountAndBlade.ViewModelCollection.* 核心视图模型',
    match: (ns) => ns.startsWith('TaleWorlds.MountAndBlade.ViewModelCollection'),
    mental: 'TaleWorlds.MountAndBlade.ViewModelCollection 下的核心视图模型（订单/编队 VM、初始菜单 VM 等）把战斗与菜单逻辑状态投影成可绑定的界面数据。订单相关 VM（MovementOrders/FormOrders/ToggleOrders）描述部队的阵型与移动指令，InitialMenu 管理开局菜单。VM 只是状态投影，命令应只触发 Action/Behavior。',
    usage: '定制战斗指令面板或初始菜单时，继承对应 VM；交互命令只触发逻辑，不要在 VM 里直接改游戏状态。',
    risk: 'VM 不持有规则；在 VM 中直接改状态会破坏单一数据源。频繁刷新属性要节流，避免每帧通知造成 GC 压力。',
    deps: [SAFE.vm, SAFE.submodule, SAFE.api] },

  { slug: 'mnb-gauntlet-misc', title: 'TaleWorlds.MountAndBlade.GauntletUI 杂项界面',
    match: (ns) => ns === 'TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator' || ns === 'TaleWorlds.MountAndBlade.GauntletUI.SceneNotification',
    mental: '这里收敛核心 GauntletUI 下两个特定辅助：BodyGenerator 负责角色体型/外观的程序化生成与取用，SceneNotification 把场景事件投影成界面通知。二者都是界面构建的支撑类型，不直接承载玩法规则。',
    usage: '需要程序化生成角色外观或把场景事件转成界面提示时，使用对应类型；生成结果要可缓存以控内存。',
    risk: '外观生成是重量操作，应缓存结果避免每帧重算；通知订阅要记得退订以防泄漏。',
    deps: [SAFE.vm, SAFE.submodule, SAFE.api] },

  { slug: 'mnb-platform', title: 'TaleWorlds.MountAndBlade 的 PC 平台（Platform PC）桥接类型',
    match: (ns) => ns === 'TaleWorlds.MountAndBlade.Platform.PC',
    mental: 'Platform.PC 是 PC 平台的桥接层，把引擎对平台能力（存档路径、输入、系统对话框、文件选择等）的调用映射到具体 PC 实现。它是平台抽象的一部分，使上层逻辑不依赖具体操作系统；mod 应始终通过平台抽象接口取用能力，而不是直接写 PC 特定的 Win32/文件系统代码，否则在其它平台（主机/云）构建会失败或行为不一致。',
    usage: '需要取用平台相关能力（如确定存档目录、弹系统对话框）时通过平台抽象，不要直接写平台特定代码。',
    risk: '平台桥接只在 PC 构建有效；跨平台（主机/移动）引用需加宏隔离或走平台抽象接口，否则其它平台构建失败。',
    deps: [SAFE.submodule, SAFE.save, SAFE.api] },

  { slug: 'mnb-battlescore', title: 'TaleWorlds.MountAndBlade.Missions.BattleScore 战斗计分',
    match: (ns) => ns === 'TaleWorlds.MountAndBlade.Missions.BattleScore',
    mental: 'Missions.BattleScore 提供战斗计分的数据与规则结构，统计并结算一场战斗的表现得分（击杀/受伤/目标完成等）。计分逻辑须可重入，供战斗结束后的奖励与统计使用，与具体玩法胜负解耦。',
    usage: '需要自定义战斗得分统计或读取战斗结果时，使用这里的计分类型；不要在计分里混入侵略性状态变更。',
    risk: '计分要在战斗结束前稳定可重入；中途重算会错位。计分数据需可序列化以支撑战后结算与回放。',
    deps: [SAFE.mission, SAFE.api] },

  { slug: 'twodim', title: 'TaleWorlds.TwoDimension.Standalone 二维独立运行时',
    match: (ns) => ns === 'TaleWorlds.TwoDimension.Standalone',
    mental: 'TwoDimension.Standalone 是引擎的二维独立运行时支撑类型，用于不依赖完整 3D 场景的二维界面/overlay 场景（如某些菜单背景、独立 2D 表现）。它把 2D 渲染与输入从 3D 管线中抽离，供特定界面复用。',
    usage: '需要独立 2D 表现层（非 3D 场景）时从这里取用；不要把 3D 场景逻辑混入 2D 运行时。',
    risk: '2D 运行时与 3D 场景生命周期不同，混用会导致上下文错乱；资源释放要成对，避免 2D 纹理长期驻留。',
    deps: [SAFE.vm, SAFE.submodule, SAFE.api] },

  { slug: 'core-lib', title: 'TaleWorlds.Core / TaleWorlds.Library 基础设施',
    match: (ns) => ns === 'TaleWorlds.Core' || ns === 'TaleWorlds.Library',
    mental: 'TaleWorlds.Core 与 TaleWorlds.Library 是最底层的公共基础设施：数学（向量/矩阵）、集合、序列化基元、通用算法与引擎全局常量。几乎所有上层命名空间都依赖它们，但它们自身不依赖任何玩法逻辑，是纯粹的「工具箱」。',
    usage: '需要通用数学/集合/序列化能力时直接使用；不要在基础设施里塞业务规则。',
    risk: '基础设施被全局依赖，改动影响面极大；任何破坏性变更会波及全部上层类型。新增类型要无副作用、可单测。',
    deps: [SAFE.submodule, SAFE.api] },

  { slug: 'campaignsystem-misc', title: 'TaleWorlds.CampaignSystem.* 战役系统补充类型',
    match: (ns) => ns.startsWith('TaleWorlds.CampaignSystem.'),
    mental: '这里收敛 CampaignSystem 下若干补充类型：快速模拟（FastMode）开关、组件接口（ComponentInterfaces）、王国选举（Election）、战役游戏组件（GameComponents）、地图事件（MapEvents），以及出生/死亡与地图追踪的视图模型集合。它们是战役主循环的支撑与扩展点，本身不持有完整玩法。',
    usage: '需要加速模拟、扩展战役组件或处理王国选举/地图事件时，从这里取用对应类型；扩展组件要提供可序列化状态。',
    risk: 'FastMode 跳过表现层，逻辑必须在不渲染时也能正确跑；选举/事件处理要注意时机与重复触发。组件状态需可序列化以支持存档。',
    deps: [SAFE.campaign, SAFE.behavior, SAFE.api] },

  { slug: 'sandbox-ai', title: 'SandBox.AI 沙盒 AI 类型',
    match: (ns) => ns === 'SandBox.AI',
    mental: 'SandBox.AI 是沙盒模块的 AI 相关类型（如 AgentBehaviorManager 协调战斗智能体的行为装配）。它把 AI 行为的注册、管理与具体决策实现解耦，是「行为装配中枢」，被 Mission 在加载时用来挂接智能体逻辑。',
    usage: '需要集中管理战斗 AI 行为或新增智能体决策时，通过这里的协调类型；行为实现要可序列化、可中断。',
    risk: 'AI 装配依赖 Mission 加载顺序，未就绪时引用会得到空；行为搜索要限制深度/超时避免卡顿。Agent 死亡后对应行为必须清理，否则悬空引用会崩溃。',
    deps: [SAFE.mission, SAFE.behavior, SAFE.api] },

  { slug: 'sandbox-gamecomponents', title: 'SandBox.GameComponents 沙盒游戏组件',
    match: (ns) => ns === 'SandBox.GameComponents',
    mental: 'SandBox.GameComponents 是沙盒模块挂载到游戏实体的组件类型，为实体附加特定能力（如场景物件行为、玩法小机关）。组件与实体解耦，可组合复用，是沙盒「组合优于继承」的体现；组件状态需可序列化。',
    usage: '需要给实体附加可复用能力时，从对应 GameComponent 派生并挂载；组件间不要互相强依赖。',
    risk: '组件依赖挂载顺序，未挂载时访问会得到空；组件状态必须可序列化，否则存档后无法复原。组件释放要与实体生命周期配对。',
    deps: [SAFE.campaign, SAFE.behavior, SAFE.api] },

  { slug: 'sandbox-missions', title: 'SandBox.Missions 沙盒任务基础与配套',
    match: (ns) => ns === 'SandBox.Missions' || (ns.startsWith('SandBox.Missions.') && !ns.startsWith('SandBox.Missions.MissionLogics')),
    mental: 'SandBox.Missions 是沙盒模块任务系统的基础与配套类型：任务基类（Mission）、战斗计分（BattleScore）、任务事件（MissionEvents）、对话任务逻辑（Conversation.MissionLogics）、以及 Agent 行为（Source.Missions.AgentBehaviors）。它们定义任务的生命周期、事件流与智能体协作，是 Mission 玩法逻辑的骨架。',
    usage: '扩展沙盒任务流程/事件/对话逻辑或新增 Agent 行为时，从对应类型派生并在 Mission 加载时装配；胜负判定要幂等。',
    risk: '任务逻辑依赖 Mission 加载与监听注册顺序；未就绪时事件会丢失。Agent 死亡后其行为必须清理，悬空引用会崩溃。计分/事件数据需可序列化。',
    deps: [SAFE.mission, SAFE.behavior, SAFE.api] },

  { slug: 'sandbox-missionlogics', title: 'SandBox.Missions.MissionLogics.* 沙盒任务逻辑',
    match: (ns) => ns.startsWith('SandBox.Missions.MissionLogics'),
    mental: 'SandBox.Missions.MissionLogics.* 是沙盒各玩法的任务逻辑实现：Hideout（剿匪据点，含 Objectives 子目标）、Arena（竞技场）、Towns（城镇玩法）等。每个 MissionLogic 派生类定义该玩法的流程与胜负条件，由对应 Mission 在加载时装配；逻辑与表现通过 MissionBehavior 桥接。',
    usage: '扩展某个沙盒玩法（剿匪/竞技场/城镇）的流程时，继承对应 MissionLogic 并由 Mission 注册；胜负与结算要幂等。',
    risk: '任务逻辑依赖场景与监听注册顺序；未就绪时事件会丢失。子目标（Objectives）完成要幂等，重复完成不重复结算。状态需可序列化以支持中途存档。',
    deps: [SAFE.mission, SAFE.behavior, SAFE.api] },

  { slug: 'sandbox-tournaments', title: 'SandBox.Tournaments 锦标赛类型',
    match: (ns) => ns.startsWith('SandBox.Tournaments'),
    mental: 'SandBox.Tournaments 实现游戏内锦标赛系统：Tournaments 是锦标赛流程聚合，MissionLogics 驱动赛事对局，AgentControllers 控制参赛 AI 的行为。三者协作组织报名、对阵、对局与奖励结算，状态需可序列化。',
    usage: '扩展或新增锦标赛阶段/对局/AI 对手时，从对应类型派生并在锦标赛管理器注册；流程要幂等。',
    risk: '锦标赛状态必须可序列化以支持存档；AgentControllers 随参赛单位生死，需处理 Agent 死亡后的清理。对阵与奖励结算要避免重复触发。',
    deps: [SAFE.campaign, SAFE.mission, SAFE.api] },

  { slug: 'sandbox-view', title: 'SandBox.View.* 沙盒场景视图',
    match: (ns) => ns === 'SandBox.View' || ns.startsWith('SandBox.View.'),
    mental: 'SandBox.View.* 是沙盒模块的场景视图层：大地图视觉（Map.Visuals/Managers）、地图导航元素（Map.Navigation.*）、菜单视图（Menu）、角色创建视图（CharacterCreation）、对话视图（Conversation）、订单提供（OrderProviders）、overlay（Overlay）等。它们把游戏状态投影成场景表现，视图只读取状态、不写规则，便于与逻辑解耦。',
    usage: '需要定制大地图元素、菜单/对话/角色创建表现或场景 overlay 时，继承对应视图并由 MissionBehavior/逻辑层注册；写入须经逻辑层。',
    risk: '视图只呈现不判定；在每帧热路径做重活会拖帧。地图元素数量大，绑定要虚拟化控内存。同名视图在单/多人分支可能并存，引用时确认命名空间。',
    deps: [SAFE.mission, SAFE.vm, SAFE.api] },

  { slug: 'sandbox-gauntlet-ui', title: 'SandBox.GauntletUI.* 沙盒界面',
    match: (ns) => ns.startsWith('SandBox.GauntletUI.') || ns === 'SandBox.GauntletUI' || ns === 'Sandobx.GauntletUI.Missions',
    mental: 'SandBox.GauntletUI.* 是沙盒模块的 Gauntlet 界面层：城镇/酒馆/角色创建/百科/旗帜编辑器/教程等界面及其 Widget、ViewModel。它们把沙盒逻辑状态投影成可点击、可绑定的界面元素，是玩家与战略/社交层交互的主要入口；界面层只暴露状态，交互通过事件上抛给逻辑。',
    usage: '定制沙盒内某个界面（城镇/酒馆/角色创建/百科/教程）时，继承对应 Widget/VM 并由 MissionBehavior/逻辑层打开；命令只触发 Action/Behavior。',
    risk: '界面层只读逻辑状态，写入须经逻辑层以免状态分歧；频繁刷新属性要节流。注意命名空间拼写（存在 SandBox 与个别 Sandobx 历史笔误页），引用以实际命名空间为准。',
    deps: [SAFE.vm, SAFE.campaign, SAFE.api] },

  { slug: 'sandbox-gauntlet-ui-missions', title: 'SandBox.GauntletUI.Missions 任务界面',
    match: (ns) => ns === 'SandBox.GauntletUI.Missions',
    mental: 'SandBox.GauntletUI.Missions 是任务/战斗期间的沙盒 Gauntlet 界面（战斗 HUD、任务目标条、击杀提示等）。它们以 ScreenBase + ViewModel 形式存在，由 MissionBehavior 在合适时机打开，向玩家暴露战斗/任务状态；界面层不持有规则，只通过 VM 属性与命令通信。',
    usage: '需要任务/战斗期自定义 HUD 或提示面板时，继承对应 ScreenBase 并在 MissionBehavior 中 OpenScreen；命令应只触发 Action/Behavior。',
    risk: '界面层只暴露状态、不写规则；在 VM 中直接改游戏状态会破坏单一数据源。战斗期频繁刷新属性要节流，避免每帧通知造成 GC 压力。',
    deps: [SAFE.mission, SAFE.vm, SAFE.api] },

  { slug: 'sandbox-vm', title: 'SandBox.ViewModelCollection.* 沙盒视图模型集合',
    match: (ns) => ns.startsWith('SandBox.ViewModelCollection'),
    mental: 'SandBox.ViewModelCollection.* 是沙盒模块最庞大的视图模型集合，覆盖地图（MapSiege/Map.Tracker/Map.Cheat/Map.Incidents/Map）、任务（Missions/NameMarker/MainAgentDetection/NameMarker.Targets/Targets.Hideout）、名牌通知（Nameplate/SettlementNotificationTypes）、存档读档（SaveLoad）、游戏结束（GameOver）、锦标赛（Tournament）、桌面游戏（BoardGame）、教程（Tutorial）、输入（Input）等。它们把沙盒各子系统的状态投影成可绑定的界面数据，VM 只是状态投影，命令应只触发 Action/Behavior。',
    usage: '定制沙盒内任意界面的数据时，从对应 ViewModelCollection 派生；集合型 VM（地图元素/名牌）要虚拟化与按需加载以控内存。命令只触发逻辑。',
    risk: 'VM 不持有规则；在 VM 中直接改状态会破坏单一数据源。地图/名牌等大量元素逐个绑定 VM 会有性能与内存压力，应虚拟化。频繁刷新属性要节流，避免每帧通知造成 GC 压力。',
    deps: [SAFE.vm, SAFE.campaign, SAFE.api] },

  { slug: 'sandbox-issues-tasks', title: 'SandBox.Issues.IssueQuestTasks 领地事务任务',
    match: (ns) => ns === 'SandBox.Issues.IssueQuestTasks',
    mental: 'SandBox.Issues.IssueQuestTasks 是领地事务（Issue）所附的任务步骤类型，描述一个 Issue 被接取后需要完成的子目标与结算。它与 Issue 主体配合，把「领地问题」拆成可执行、可结算的步骤；条件判定需幂等。',
    usage: '扩展或新增 Issue 的完成步骤时，从对应 IssueQuestTask 派生并在 Issue 中登记；步骤完成要幂等，避免重复奖励。',
    risk: '任务步骤完成要幂等，重复触发会导致奖励翻倍或状态错乱；跨步骤状态需注意存档兼容，新增字段必须带默认值。',
    deps: [SAFE.campaign, SAFE.behavior, SAFE.api] },

  { slug: 'sandbox-conversation', title: 'SandBox.Conversation 对话类型',
    match: (ns) => ns === 'SandBox.Conversation' || ns === 'SandBox.Conversation.MissionLogics',
    mental: 'SandBox.Conversation 是沙盒对话系统的类型：对话树与表演控制（Conversation），以及任务中的对话逻辑（Conversation.MissionLogics）。它们把 NPC 交互组织成可分支、可本地化的对话流程，并通过 MissionBehavior 在合适场景触发。',
    usage: '扩展 NPC 对话线或任务内对话表演时，从对应类型派生并接入对话系统；分支与本地化要完整。',
    risk: '对话线改动需注意分支闭合与本地化；对话逻辑依赖监听注册顺序，未就绪时对话不会触发。对话中触发的状态变更要走 Action/Behavior，不要直接改字段。',
    deps: [SAFE.campaign, SAFE.behavior, SAFE.api] },

  { slug: 'storymode-missions', title: 'Storymode.Missions 主线任务',
    match: (ns) => ns === 'Storymode.Missions',
    mental: 'Storymode.Missions 是主线剧情（StoryMode）的任务相关类型，定义主线推进中的任务阶段、目标与结算。它与 CampaignBehavior 协作驱动叙事，但不直接写规则；任务流转通过事件与 Behavior 联动。',
    usage: '扩展或新增主线任务阶段时，从对应任务类型派生并在 QuestManager 注册；任务流转通过事件与 Behavior 联动。',
    risk: '任务条件判定要幂等，重复触发会导致奖励翻倍或状态错乱；跨阶段任务需注意存档兼容，新增字段必须带默认值，否则旧档反序列化失败。',
    deps: [SAFE.campaign, SAFE.behavior, SAFE.api] },

  // Catch-all safety net (should be empty if all above matched)
  { slug: 'misc', title: '杂项业务类型（其它命名空间）',
    match: () => true,
    mental: '本页覆盖尚未归入专题的零散业务类型。它们分属不同子系统（视图/界面/任务/平台等），各自承担其派生约定职责。调用前请确认所属系统的生命周期与依赖，不要在错误阶段引用未就绪的实例，世界状态变更应走对应的 Action/Behavior 而非直接改字段。',
    usage: '按类型名与命名空间定位到具体子系统后取用；核心玩法规则仍在 Campaign/Mission 子系统。',
    risk: '零散类型生命周期各异，引用前确认其所属系统与加载阶段；跨构建/跨端类型需加宏隔离。状态变更走 Action/Behavior 以免跳过事件级联坏档。',
    deps: [SAFE.campaign, SAFE.mission, SAFE.api] },
];

// Bucket gaps by group
const bucketed = new Map();
const unmatched = [];
for (const g of gaps) {
  const grp = GROUPS.find((x) => x.match(g.namespace));
  if (!grp) { unmatched.push(g); continue; }
  if (!bucketed.has(grp.slug)) bucketed.set(grp.slug, []);
  bucketed.get(grp.slug).push(g);
}

let totalEntries = 0;
const report = [];
for (const grp of GROUPS) {
  const types = bucketed.get(grp.slug);
  if (!types || !types.length) { report.push(`SKIP empty ${grp.slug}`); continue; }
  const rows = types.map((t) => {
    const base = baseMap.get(`${t.namespace}\0${t.typeName}`) || '';
    const purpose = roleFor(t.typeName, base, t.namespace);
    const timing = timingFor(t.namespace);
    return `| \`${t.typeName}\` | ${t.namespace} | ${purpose} | ${timing} |`;
  }).join('\n');
  const depLinks = grp.deps.map(([href, label]) => `- [${label}](${href})`).join('\n');
  const md = `---
title: "${grp.title}"
description: "${grp.title} — 家族索引，覆盖 ${types.length} 个业务类型，含心智模型、依赖与风险。"
---

# ${grp.title}

**一句话职责：** 本页以家族索引形式覆盖 \`${grp.title}\` 下全部 ${types.length} 个业务类型，逐类给出命名空间、职责与典型时机，便于按模块而不是按字母表查阅。

## 心智模型

${grp.mental}

## 何时使用

${grp.usage}

## 依赖关系

\`${grp.title}\` 的类型依赖以下模块；缺其中任一都会导致编译或运行期失败。

\`\`\`mermaid
graph TD
  ROOT["${grp.title}"]
  ROOT --> DEP["依赖模块"]
\`\`\`

${depLinks}

## 类型清单

| Type | Namespace | Purpose | Timing |
| --- | --- | --- | --- |
${rows}

## 风险与边界

${grp.risk}

## 参见

${depLinks}
`;
  const dir = join(API, 'final', grp.slug);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const outPath = join(dir, '_index.md');
  writeFileSync(outPath, md, 'utf8');
  const entries = extractFamilyEntries(outPath, md);
  totalEntries += entries.length;
  report.push(`WROTE ${outPath}  types=${types.length} familyEntries=${entries.length}`);
}
console.log(report.join('\n'));
console.log('TOTAL family entries added:', totalEntries);
console.log('UNMATCHED gaps (should be 0):', unmatched.length);
if (unmatched.length) console.log(JSON.stringify(unmatched, null, 1));
if (totalEntries !== gaps.length) {
  console.error(`WARN: family entries (${totalEntries}) != gaps (${gaps.length})`);
}
