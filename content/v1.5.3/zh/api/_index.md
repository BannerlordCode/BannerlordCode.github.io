---
title: "API 参考 — 已手写覆盖到哪里"
description: "v1.5.3 的 API 类参考层：8 个有页面的桶、74 篇手写类型深写页的按任务阅读路径，以及 6 824 个类型下的诚实缺口。"
---

# API 参考：已手写覆盖到哪里

## 这一层在整站里的位置

三层结构，从上往下读：

1. **上一级是 [架构](../architecture/)。** 先在大局观里确认两件事：这个对象活多久（`Game` / `Campaign` / `Mission` 各是哪个生命周期）、
   该引哪个程序集。分不清这两件事就直接翻类型页，会在「为什么我的 Behavior 没被调用」上卡很久。
   模块地图见 [模块地图](../architecture/module-map)，跨版本差异见 [从 1.4.5 迁移](../architecture/migration-from-1.4.5)。
2. **同级的 [版本首页](../)。** 19 个桶的完整缺口表在那里，本页只讲「哪 8 个桶已经有页」。
3. **这一层之下是具体类型页。** 目前 **74 篇**，全部手写，每篇是「这个类负责什么 → 每个成员干什么用 → 心智模型 → 能跑的示例」。

> **桶索引页不存在。** `api/<桶>/` 这种目录索引页（`mission-ext/`、`sandbox/`、`viewmodel/` 等）在 v1.5.3 下
> **一张都没有**，所以本页所有链接直接落到类型页，桶名不可点。旧版本文档里「点桶名进目录」的走法在这里走不通，
> 要确认某个类型属于哪一桶，去 [模块地图](../architecture/module-map) 查。

## mod 作者从哪进（按任务）

下面每一行都是一张真实存在的类型页。先挑任务，再挑页，不要从 A–Z 类表里猜。

| 我要做的事 | 打开这张页 | 桶 |
| --- | --- | --- |
| 让 mod 在正确阶段加载、拿到 `IGameStarter` | [MBSubModuleBase](./core/MBSubModuleBase) | `core` |
| 给战役挂一个自己的行为 | [ICampaignBehavior](./campaign/ICampaignBehavior) · [CampaignBehaviorBase](./campaign/CampaignBehaviorBase) · [CampaignBehaviorManager](./campaign-ext/CampaignBehaviorManager) | `campaign-ext` / `campaign` |
| 在注册阶段挂行为 / 换模型 / 加菜单项 | [CampaignGameStarter](./campaign/CampaignGameStarter) | `campaign` |
| 读写世界状态（英雄、聚落、部队、时间推进） | [Campaign](./campaign/Campaign) · [CampaignData](./campaign/CampaignData) | `campaign` |
| 替换游戏默认的算法模型 | [DefaultSettlementProsperityModel](./campaign-ext/DefaultSettlementProsperityModel) · [GameModels](./campaign/GameModels) · [GameModel](./core-extra/GameModel) · [MBGameModel](./core-extra/MBGameModel) · [GameModelsManager](./core-extra/GameModelsManager) | `campaign-ext` / `campaign` / `core-extra` |
| 在战役里算时间：现在、到期判断、日/周/季/年换算 | [CampaignTime](./campaign/CampaignTime) | `campaign` |
| 读懂「一个数值由哪些项累加而来」（所有模型覆写都返回它） | [ExplainedNumber](./campaign/ExplainedNumber) | `campaign` |
| 改部队与驻军的规模上限（成员 / 战俘 / 驻军） | [PartySizeLimitModel](./campaign-ext/PartySizeLimitModel) · [DefaultPartySizeLimitModel](./campaign-ext/DefaultPartySizeLimitModel) | `campaign-ext` |
| 改聚落忠诚度曲线（阈值、叛乱、税收与繁荣联动） | [SettlementLoyaltyModel](./campaign-ext/SettlementLoyaltyModel) · [DefaultSettlementLoyaltyModel](./campaign-ext/DefaultSettlementLoyaltyModel) | `campaign-ext` |
| 监听或主动派发战役事件 | [CampaignEventDispatcher](./campaign/CampaignEventDispatcher) · [CampaignEventReceiver](./campaign/CampaignEventReceiver) · [CampaignEvents](./campaign/CampaignEvents) · [MBCampaignEvent](./campaign/MBCampaignEvent) | `campaign` |
| 做一个周期性战役 tick | [CampaignPeriodicEventManager](./campaign/CampaignPeriodicEventManager) | `campaign` |
| 定义一个战役游戏模式 | [CampaignGameMode](./campaign/CampaignGameMode) | `campaign` |
| 处理一场战斗里的东西 | [Mission](./mission/Mission) · [MissionState](./mission/MissionState) | `mission` |
| 加一个界面并管理屏幕栈 | [ScreenManager](./gui/ScreenManager) · [ScreenBase](./gui/ScreenBase) · [GauntletLayer](./engine/GauntletLayer) | `gui` / `engine` |
| 让自定义数据能存进存档 | [SaveManager](./save-system/SaveManager) · [ISaveDriver](./save-system/ISaveDriver) · [SaveableTypeDefiner](./save-system/SaveableTypeDefiner) · [SaveContext](./save-system/SaveContext) | `save-system` |
| 读 StoryMode 覆写的战役模型 | [StoryModeNotableSpawnModel](./storymode/StoryModeNotableSpawnModel) · [StoryModePartySizeLimitModel](./storymode/StoryModePartySizeLimitModel) | `storymode` |
| 查建筑进度、完工天数、提升建造或换默认工程 | [BuildingHelper](./core-extra/BuildingHelper) | `core-extra` |
| 按文化抽商队模板（区分陆路 / 海路） | [CaravanHelper](./core-extra/CaravanHelper) | `core-extra` |
| 让 AI 部队在陆路与海路之间选路、估航行代价 | [AiHelper](./core-extra/AiHelper) | `core-extra` |
| 按队伍/聚落角色取技能加成并写进可解释数值 | [SkillHelper](./core-extra/SkillHelper) | `core-extra` |
| 查战事日志、战俘、同盟与「发过誓不攻击」 | [DiplomacyHelper](./core-extra/DiplomacyHelper) | `core-extra` |
| 比较两件武器是否可比、生成伤害/数量文本 | [ItemHelper](./core-extra/ItemHelper) | `core-extra` |
| 列出可锻造同伴、开关锻造界面 | [CraftingHelper](./core-extra/CraftingHelper) | `core-extra` |
| 判海路劫掠、藏身处两阶段挑兵、脱离战斗 | [MapEventHelper](./core-extra/MapEventHelper) | `core-extra` |
| 打开「巷子驻军管理」界面、限制可转移兵种 | [AlleyHelper](./core-extra/AlleyHelper) | `core-extra` |
| 自动配平交易栏（补差额 / 削减多余项） | [BarterHelper](./core-extra/BarterHelper) | `core-extra` |
| 取陆路/海路最短距离、含上岸下海切换代价 | [DistanceHelper](./core-extra/DistanceHelper) | `core-extra` |
| 取船的旗帜/帆色、按分数把船分配给氏族部队 | [ShipHelper](./core-extra/ShipHelper) | `core-extra` |
| 开港口界面（交易 / 掠夺 / 受限 / 剧情 / 管理舰队） | [PortStateHelper](./core-extra/PortStateHelper) | `core-extra` |
| 把一套装备复制到英雄的对应装备位 | [EquipmentHelper](./core-extra/EquipmentHelper) | `core-extra` |
| 把文化特性加成按 Add/AddFactor 写进可解释数值 | [FeatHelper](./core-extra/FeatHelper) | `core-extra` |
| 把人格特质效果按 Add/AddFactor 写进可解释数值 | [TraitEffectHelper](./core-extra/TraitEffectHelper) | `core-extra` |
| 读 XML 成 XmlDocument、生成随机战役 id | [MiscHelper](./core-extra/MiscHelper) | `core-extra` |
| 问城里有哪些人可会见、查食物与物价偏离 | [TownHelpers](./core-extra/TownHelpers) | `core-extra` |
| 驼峰/下划线转换、去变音符号、把对象写进对话文本变量 | [StringHelpers](./core-extra/StringHelpers) | `core-extra` |
| 按当前对话对象解析文本 id 写进对话变量 | [DialogHelper](./core-extra/DialogHelper) | `core-extra` |
| 按种子从列表里可复现地取一个元素 | [IncidentHelper](./core-extra/IncidentHelper) | `core-extra` |
| 取说服结果对应的默认反应文本 | [PersuasionHelper](./core-extra/PersuasionHelper) | `core-extra` |
| 查正在传送的英雄还有几小时到目的地 | [TeleportationHelper](./core-extra/TeleportationHelper) | `core-extra` |
| 把战斗上下文翻成一条本地化 tooltip id | [TooltipHelper](./core-extra/TooltipHelper) | `core-extra` |
| 下棋类小游戏：AI 难度档与结局枚举的容器 | [BoardGameHelper](./core-extra/BoardGameHelper) | `core-extra` |
| 选棋类 AI 难度（Easy / Normal / Hard） | [AIDifficulty](./core-extra/AIDifficulty) | `core-extra` |
| 取一局棋的结局（None / Win / Loss / Draw） | [BoardGameState](./core-extra/BoardGameState) | `core-extra` |
| 任务替代方案判定、强征后果、宣战导致任务失败 | [QuestHelper](./core-extra/QuestHelper) | `core-extra` |
| 战斗/遭遇状态机：聚落部队参战、附近 NPC 加入、战后是否续战 | [MapEventComponentHelper](./core-extra/MapEventComponentHelper) | `core-extra` |
| 取英雄最近聚落、生成百科「最后所见」文本、判领主密谋/招募/可靠性 | [HeroHelper](./core-extra/HeroHelper) | `core-extra` |
| 生成角色死亡通知、随机身体属性、面部 idle、兵种升级根 | [CharacterHelper](./core-extra/CharacterHelper) | `core-extra` |
| 估算派系强度、敌国/驻军/宣战/附庸/雇佣兵判定、终结敌对行为 | [FactionHelper](./core-extra/FactionHelper) | `core-extra` |
| 找最近聚落/城镇/城堡/村庄/藏身处、驻军变化、随机聚落 | [SettlementHelper](./core-extra/SettlementHelper) | `core-extra` |
| 按 Tier 排序部队名册、部队规模文本、速度限制、物品名册摘要 | [PartyBaseHelper](./core-extra/PartyBaseHelper) | `core-extra` |
| 生成领主部队、分配经验、随机伤兵、按物品重量匹配速度 | [MobilePartyHelper](./core-extra/MobilePartyHelper) | `core-extra` |
| 打开部队界面（普通/作弊/赎金/战利品/管理/捐赠/任务模式） | [PartyScreenHelper](./core-extra/PartyScreenHelper) | `core-extra` |
| 清除技能 perk、给部队/角色/城镇加 perk 加成、取总督 perk | [PerkHelper](./core-extra/PerkHelper) | `core-extra` |
| 判导航有效性、找可达点、取上/下船数据、区域内找点 | [NavigationHelper](./core-extra/NavigationHelper) | `core-extra` |
| 设置菜单选项属性、遭遇战攻击/捕获条件与后果、议题任务数据 | [MenuHelper](./core-extra/MenuHelper) | `core-extra` |
| 打开物品栏界面（部队/战利品/藏匿/仓库/交易/锻造分解模式） | [InventoryScreenHelper](./core-extra/InventoryScreenHelper) | `core-extra` |
| 物品类型位标志（武器/盾/盔甲/马/货物/书/动物等，含组合值） | [InventoryItemType](./core-extra/InventoryItemType) | `core-extra` |

**枢纽页只有几张。** 绝大多数 mod 真正需要读透的是 [MBSubModuleBase](./core/MBSubModuleBase)（mod 什么时候拿到游戏对象）、
[CampaignBehaviorBase](./campaign/CampaignBehaviorBase)（行为什么时候被回调）、[SaveManager](./save-system/SaveManager)（字段怎么进存档），
加上作为上下文的 [Mission](./mission/Mission)、[Campaign](./campaign/Campaign)、[ScreenManager](./gui/ScreenManager)。

## 8 个有页面的桶

「1.5.3 类型数」来自只读实测报告 `tools/_v153_inventory.json`（生成于 `bannerlord-1.5.3/`，
按权威桶表 `tools/_dir-map-canonical.json` 的命名空间规则归桶）。
「已撰写」是本目录 `api/` 下实际存在的 `.md` 文件数。**桶名不可点** —— 没有桶索引页。

| 桶 | 已撰写 | 1.5.3 类型数 | 这一桶装的是什么 |
| --- | ---: | ---: | --- |
| `campaign` | 14 | 706 | `TaleWorlds.CampaignSystem` 根命名空间（129 个类型）加 38 个子命名空间：`Actions`、`LogEntries`、`CharacterDevelopment`、`MapNotificationTypes`、`GameState`、`MapEvents`、`Siege`、`Settlements`(+.Buildings/.Locations/.Workshops)、`Party`(+.PartyComponents)、`GameMenus`、`Incidents`、`Inventory`、`Election`、`Roster`、`TournamentGames`… —— 也就是**战役世界状态本身**：英雄、聚落、部队、地图事件、围城、日志、菜单的具体规则类型。 |
| `campaign-ext` | 6 | 771 | 12 个命名空间里全是**可被替换的契约与扩展点**：`CampaignBehaviors`(169)、`Issues`(+`IssueQuestTasks`, 158)、`ComponentInterfaces`(144)、`GameComponents`(128)、`Conversation.Persuasion`、`.Conversation.Tags`(97)，加上 `TaleWorlds.ObjectSystem`。mod 在这里插行为、实现组件接口、替换默认模型、造 Issue 与对话议题，以及管理 `MBObjectManager` 那套对象身份；游戏本体不在这桶里。 |
| `core-extra` | 44 | 516 | `TaleWorlds.Core`(273)、`TaleWorlds.Library`(171)、`TaleWorlds.DotNet`(29)、`Library.CodeGeneration`、`Library.EventSystem`、`Library.Graph`、`Library.Http`、`Library.Information`、`Library.NewsManager`、`LinQuick`、`Starter.Library` —— **跨系统地基**：`GameModel` 抽象、ViewModel 与绑定路径、事件总线、面向玩家的信息提示、图与代码生成工具。不属于任何一个玩法层，任何一层都要往下依赖它。 |
| `gui` | 2 | 273 | `TaleWorlds.ScreenSystem`(屏幕栈)、`TaleWorlds.GauntletUI`(59，加 `BaseTypes`/`Data`/`ExtraWidgets`/`GauntletInput`/`Layout`)、`TaleWorlds.TwoDimension`(51，含 `Standalone.Native.Windows`) —— **屏幕栈 + 控件树 + 2D 绘制层**。 |
| `engine` | 1 | 216 | `TaleWorlds.Engine`(135，含 `Options`/`Screens`/`GauntletUI`)、`TaleWorlds.Diamond`(37，含 `ClientApplication`/`Rest`) —— **平台与渲染底层**：引擎绑定、选项与输入、Diamond 客户端，以及渲染产物 `GauntletLayer`（在 `TaleWorlds.Engine.GauntletUI`）。 |
| `save-system` | 4 | 56 | `TaleWorlds.SaveSystem`(27)、`.Definition`(15)、`.Save`(5)、`.Load`(6)、`.Resolvers`(3) —— **存档的一条纵切链**：类型定义 → 序列化/反序列化上下文 → 读写驱动。 |
| `mission` | 2 | 5 | **刻意的入口类 carve-out**：`TaleWorlds.MountAndBlade` 里的 5 个战斗门面类 `Mission` / `MissionState` / `MissionBehavior` / `Agent` / `Formation`。只留「谁调用我」的那一层；战斗控件、`MissionLogic`、`Behavior*`、多人组件全在 `mission-ext` 桶（本树**尚无任何页面**）。 |
| `core` | 1 | 2 | **刻意的入口类 carve-out**：`TaleWorlds.MountAndBlade` 里的 `MBSubModuleBase` / `Module`，即 mod 的程序集入口。`core-extra` 才是 `TaleWorlds.Core` / `TaleWorlds.Library` 的地盘，两个桶名字像、装的东西完全不同。 |

`mission-ext` 与 `core-extra` 是本任务里最容易被误解的两个名字：前者的完整 API 尚未撰写，后者的桶本身也只有 44 页。

## 缺口：74 页 / 6 824 个类型 ≈ 1.1%

1.5.3 源码在排除噪声命名空间后扫描到 **6 824 个 public 类型**，本版本只有 **74 篇**类型页。

**这个 1.1% 的前提要讲清楚**，否则会被当成「覆盖率被低估了」或「被高估了」：

- 它默认**一类型一页**。而 `GameModels`、`CampaignEvents` 这类是**门面聚合页**，一页覆盖多个类型
  （例如 `GameModels` 一页串起战役侧所有模型类型的注册与取用路径），所以 74 页实际覆盖的类型数 > 74。
- 因此**真实缺口页数只会比 6 750 更小，不会更大**。1.1% 是页数占比，不是类型覆盖率。
- 逐桶的完整缺口表在 [版本首页](../)，那里 19 个桶全列了；本页只覆盖有页面的 8 个。

## 四个已裁决的归属问题（省得你按名字找错桶）

1. **`TaleWorlds.ScreenSystem` 归 `gui`**，不另建桶 —— 屏幕栈与 UI 控件树放一起读。
2. **`GauntletLayer` 归 `engine` 不归 `gui`** —— 它在 `TaleWorlds.Engine.GauntletUI` 命名空间里，是引擎的渲染产物，
   不是控件。按类型名猜会点错方向。
3. **`gameplay/`、`boardgames/` 是 1.4.5 树里的历史目录**，1.5.3 不建对应桶 —— 找不到不是遗漏，是版本之间确实没有对应物。
4. **`ICampaignBehavior` 归 `campaign` 不归 `campaign-ext`** —— 它的命名空间是 `TaleWorlds.CampaignSystem` 根命名空间（源文件 `TaleWorlds.CampaignSystem/ICampaignBehavior.cs`），按命名空间规则就落在 `campaign`，页面也在 `api/campaign/`。反过来 `CampaignBehaviorManager` 在 `TaleWorlds.CampaignSystem.CampaignBehaviors` 下，归 `campaign-ext`，页面也在 `api/campaign-ext/`。按类型名里的 "Behavior" 去猜桶会两边都点错。
   桶名只用来查缺口；找页面以本页链接为准。

## 最短起步路径

下面每个签名都能在 `bannerlord-1.5.3/` 的 `.cs` 里逐行对上：
`MBSubModuleBase.OnGameStart(Game, IGameStarter)` 在 `TaleWorlds.MountAndBlade/MBSubModuleBase.cs`（第 46 行），
`CampaignGameStarter.AddBehavior(CampaignBehaviorBase)` / `AddModel<T>(MBGameModel<T>)` 在
`TaleWorlds.CampaignSystem/CampaignGameStarter.cs`（第 48 / 95 行，`T` 传抽象契约、实现类作参数，
与游戏自己 `SandBoxManager.cs:238` 起的写法一致），
`ScreenManager.PushScreen(ScreenBase)` 在 `TaleWorlds.ScreenSystem/ScreenManager.cs`（第 610 行，静态方法），
`SaveManager.Save(object, MetaData, string, ISaveDriver)` 在 `TaleWorlds.SaveSystem/SaveManager.cs`（第 69 行）。

```csharp
public class MySubModule : MBSubModuleBase
{
    protected internal override void OnGameStart(Game game, IGameStarter gameStarterObject)
    {
        base.OnGameStart(game, gameStarterObject);

        CampaignGameStarter starter = (CampaignGameStarter)gameStarterObject;
        starter.AddBehavior(new MyCampaignBehavior());                        // 战役行为：回调时机见 CampaignBehaviorBase
        starter.AddModel<SettlementProsperityModel>(new MyProsperityModel()); // 换默认算法：T 传抽象契约
    }
}
```

三个入口怎么串起来：`MBSubModuleBase` 决定你什么时候拿到游戏对象 → `CampaignGameStarter` 决定你挂什么 →
`CampaignBehaviorBase` 决定这些东西什么时候被回调。存档侧独立一条线，见 [SaveManager](./save-system/SaveManager)。

## 参见

- ↑ [版本首页](../) —— 19 个桶的完整缺口表、本版本页面总清单
- ↔ [架构总览](../architecture/) —— 分层模型、模块地图、迁移指南
- ↔ [SDK 分层概览](../architecture/sdk-overview) —— 先判断对象活多久，再进类型页
- ↔ [模块地图](../architecture/module-map) —— 68 个 `TaleWorlds.*` 程序集的归属与文档位置
- ↔ [跨版本类对比](../../../versions/) —— 同一个类在 1.4.5 / 1.3.15 上的差异