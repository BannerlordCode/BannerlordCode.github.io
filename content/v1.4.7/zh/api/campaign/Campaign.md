---
title: "Campaign"
description: "战役世界的根聚合对象（GameType 子类）：地图几何与速度常量、全部 Manager 与 Default* 模型、Behavior 与 EntityComponent 注册表、玩家队伍与存档句柄，以及地图层与战斗层之间的分界点。模组读取战役状态的统一入口。"
---
# Campaign

**命名空间：** `TaleWorlds.CampaignSystem`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class Campaign : GameType`
**基类：** `TaleWorlds.Core.GameType`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Campaign.cs`（声明见第 42 行）

## 概述

`Campaign` 是整个战役地图世界（campaign map）的根聚合对象，也是 `TaleWorlds.Core.GameType` 的四层之一。在引擎的分层里，最底层的 `Core` 提供时钟、文本、对象系统这些跨模式设施；往上一层是 `TaleWorlds.MountAndBlade` 的战斗与任务（mission）运行时；再往上是 `Campaign`，承载大地图的战略状态；而最上面的 `Game`（其 `GameType` 在战役模式下即本类）负责菜单、存档、加载与整个游戏的生命周期。`Campaign` 实例由引擎创建，模组不能 `new`；入口永远是静态的 `Campaign.Current`。

它承担四类职责：一是**地图几何与速度常量**（`MapDiagonal`、`MapMinimumPosition`、`AverageWage`、`Estimated*PartySpeed` 等），二是**各子系统 Manager 的持有者**（`FactionManager`、`QuestManager`、`MapEventManager`、`SiegeEventManager`、`KingdomManager`、`GameMenuManager` 等上百个只读属性），三是**扩展注册表**（Behavior、EntityComponent、CustomManager、CampaignEventReceiver），四是**玩家与存档句柄**（`MainParty`、`SaveHandler`，存档动作本身由 `Game` 层驱动）。判断「某件事属于战役层还是战斗层」时，`Campaign` 就是那条线：地图上的城镇、部队、王国、外交是 `Campaign`；进入战场后的 Agent、投射物、命中判定是 `Mission`。

## 心智模型

把 `Campaign` 想成**战役层的 service locator 加唯一全局状态**，而不是一个可以随手改的数据对象。模组拿到它的正确顺序永远是：

1. **先确认存在再取**。`Campaign.Current` 只在战役已经加载完成后才非空——主菜单、模块加载阶段、存档读取过程、以及 `Game.OnDestroy` 之后它都是 `null`。任何入口都要 `if (Campaign.Current == null) return;`，尤其不要把它写进静态字段或构造函数里缓存。
2. **只取不造**。构造函数是 `public Campaign(CampaignGameMode gameMode)`，但那是引擎内部路径；模组永远通过 `Game.Current.GameType` 或 [MBSubModuleBase](../../core/MBSubModuleBase) 回调拿引用。
3. **扩展只在指定时机注册**。Behavior 走 [CampaignGameStarter](../CampaignGameStarter) 的 `AddBehavior` / `AddModel` / `AddGameMenu`；EntityComponent 在 `AddEntityComponent<T>()` 时挂上，并且**必须在存档前 `RemoveEntityComponent<T>()`**，否则会序列化出引用已死对象的存档。
4. **Manager 只读，状态要走系统动作**。`Campaign.FactionManager`、`QuestManager` 这些属性本身是权威读入口，但要改变世界状态，应该走对应的 Behavior 或 `Campaign.ActionManager` 动作，让事件广播出去；直接改字段会绕过事件，UI 与存档都不一致。

常见错误：把 `Campaign.Current` 当构造函数参数提前求值；在 `Mission` 的 tick 里频繁访问 `Campaign.Current`（战斗层已有 `Mission.Current`，两层交叉访问要克制）；在 `RegisterEvents` 里做重活（此时很多 Manager 还没装配完）；以及忘记 EntityComponent 的移除。

## 何时使用 / 何时不要使用

- **使用**：读取任意 Manager（`Campaign.Current.FactionManager`、`QuestManager`、`MapEventManager`、`SiegeEventManager`、`KingdomManager`）；取得 Behavior（`GetCampaignBehavior<T>()`）；挂载自定义 Manager（`AddCustomManager<T>()`）；读写地图速度常量；控制时间流速（`SetTimeSpeed`、`SetTimeControlModeLock`）。
- **使用（作为入口）**：在 `MBSubModuleBase` 的生命周期回调里判断「现在是不是在战役里」，用 `Campaign.Current != null` 比读 `Game.Current.GameType` 更直观。
- **不要**：不要 `new Campaign(...)`；不要在存档前忘记移除 EntityComponent；不要把任务（mission）内的对象带出任务边界——任务结束时 `Mission.Current` 变 null，而 `Campaign.Current` 往往仍然有效，这个不对称性正是 bug 来源。
- **不要**：不要用 `Campaign.Current.IsMainHeroDisguised`、`EnabledCheatsBefore` 这类内部 / 调试开关做正式逻辑判断；它们是引擎内部状态位，不是给 mod 的稳定契约。

## 成员说明

`Campaign` 的公开成员超过 130 项，按 modder 的实际用法分成六组。

### 一、全局入口与地图常量

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `static Campaign Current` | 战役根对象的当前实例，由引擎在加载完成时赋值、在 `OnDestroy` 时清空。**唯一**的取用入口；非战役场景（主菜单、模块加载、联机大厅、加载中）一律为 `null`。 |
| `Campaign(CampaignGameMode gameMode)` | 构造函数，引擎专用。`gameMode` 决定后续装配哪一套 Manager 与 Behavior 集合。模组不要调用。 |
| `GameType`（继承成员） | `Campaign` 本身就是一种游戏类型；[Game](../../core-extra/Game) 的 `Game.GameType` 在战役模式下即指向它。用于判断「当前是否战役模式」。 |
| `static float MapDiagonal` / `MapDiagonalSquared` | 地图对角线长度及其平方，用于把归一化坐标转成距离。参与大量距离比较的模组代码必须用这一对常量，不要自己硬编码地图尺寸。 |
| `static Vec2 MapMinimumPosition` / `MapMaximumPosition` / `static float MapMaximumHeight` | 地图包围盒。判断坐标是否越界、把世界坐标夹回地图内时使用。 |
| `AverageWage`、`EstimatedMaximumLordPartySpeedExceptPlayer`、`EstimatedAverageLordPartySpeed`、`EstimatedAverageCaravanPartySpeed`、`EstimatedAverageVillagerPartySpeed`、`EstimatedAverageBanditPartySpeed`、`EstimatedAverageLordPartyNavalSpeed`、`EstimatedAverageCaravanPartyNavalSpeed`、`EstimatedAverageVillagerPartyNavalSpeed`、`EstimatedAverageBanditPartyNavalSpeed` | 经济与 AI 速度估计值。`AverageWage` 由各领主的薪资模型算出，用于经济类 UI；`Estimated*PartySpeed` 由各 Party 组件的平均值反推，AI 与距离预估依赖它们。这些属性**可写**，是引擎给内部模块回填的槽位，一般不改。 |

### 二、子系统 Manager（只读持有者）

这一组是 `Campaign` 存在的核心理由。它们全部是 `{ get; private set; }` 的只读属性，实例由 `Campaign` 在初始化阶段装配。

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `FactionManager` | 所有 [IFaction](../IFaction) 实现的注册表：查询派系、创建新派系、触发派系生命周期。 |
| `KingdomManager` | 王国的注册表；外交与王国决策由它背后 Behavior 驱动。 |
| `QuestManager` / `IssueManager` | 任务与问题的运行时容器；新增任务走 `QuestManager`，不要自己 new 一个 QuestBase 挂上去。 |
| `MapEventManager` / `SiegeEventManager` | 地图遭遇战与攻城事件的注册表；进入战斗 / 攻城后对应的 `Mission` 由它们协调。 |
| `MapMarkerManager` | 地图标记（图标点）。 |
| `MapStateData` | 迷雾 / 已知区域状态，控制「玩家能看到哪些格子」。 |
| `SaveHandler` | 战役存档钩子，负责把战役特有的对象纳入存档。mod 自定义数据应通过 Behavior 的 `SyncData` 走这里，而不是自己写文件。 |
| `CampaignObjectManager` | 战役层自己的 MBObjectManager 分支，管理不参与通用 XML 注册的战役对象。 |
| `GameMenuManager` / `GameMenuCallbackManager` | 菜单系统；`CampaignGameStarter.AddGameMenu` 注入的菜单最终由它们托管。 |
| `ConversationManager` | 对话系统；`CampaignGameStarter.AddDialogFlow` 的目标。 |
| `SandBoxManager` | 沙盒专属管理器（只在沙盒战役非空），如任务进度调节。 |
| `TournamentManager` | 比赛管理器。 |
| `CharacterRelationManager` | 角色关系（好感 / 敌意）统计。 |
| `Romance` / `PlayerCaptivity` / `PlayerEncounter` / `BarterManager` | 恋爱、被俘状态、遭遇战状态、以物易物。 |
| `MapSceneCreator`（可写） | 地图场景（3D 地图）构建器，可替换。 |
| `VisualCreator` / `VisualTrackerManager` / `CampaignInformationManager` / `EncyclopediaManager` | 视觉资源创建、视觉表现追踪、信息面板与百科。 |
| `SkillLevelingManager` / `CampaignMissionManager`（均可写） | 技能成长与从战役进入任务的调度。 |
| `DefaultPerks`、`DefaultTraits`、`DefaultPolicies`、`DefaultBuildingTypes`、`DefaultIssueEffects`、`DefaultItems`、`DefaultFigureheads`、`DefaultSiegeStrategies`、`DefaultSkillEffects`、`DefaultVillageTypes`、`DefaultCulturalFeats` | 「默认值容器」：它们把 XML 里定义的 perk / trait / policy / 物品 / 建筑 等静态定义组织起来并提供按名查找。查找定义用它们，不要自己遍历 XML。 |
| `GameMenuCallbackManager`、`DeadBattleEquipment`、`DeadCivilianEquipment`、`DefaultStealthEquipment` | 战斗死亡装备、平民装备与潜行默认装备。潜行流程依赖 `DefaultStealthEquipment`。 |

### 三、Behavior / Manager / Receiver 注册表

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `T GetCampaignBehavior<T>()` | 按类型取 Behavior。**没注册就返回 `null`**，而不是抛异常——这是模组最常见的 NRE 来源。 |
| `IEnumerable<T> GetCampaignBehaviors<T>()` | 取同一泛型的全部实例。`AllianceCampaignBehavior` 之类可能有多个实例时用它。 |
| `void AddCampaignBehaviorManager(ICampaignBehaviorManager manager)` | 直接把一个 Manager 注册为 Behavior（内部走 `CampaignBehaviorManager`）。模组通常用 `CampaignGameStarter.AddBehavior`，但需要在 Behavior 之外动态添加时用它。 |
| `void AddCampaignEventReceiver(CampaignEventReceiver receiver)` | 注册一个全局事件接收器，它的所有 `override OnXxx` 方法都会被引擎在对应时机调用。 |
| `T AddCustomManager<T>() where T : ICustomSystemManager, new()` | 创建一个自定义系统 Manager 并挂到 `Campaign` 上。 |
| `T GetCustomManager<T>()` | 取回上面创建的 Manager；未创建返回 `null`。 |

### 四、EntityComponent 扩展槽

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `TComponent AddEntityComponent<TComponent>() where TComponent : CampaignEntityComponent, new()` | 新建并挂载一个 EntityComponent。**存档前必须移除**，否则存档会持有悬空引用。 |
| `TComponent GetEntityComponent<TComponent>()` | 取已挂载的组件；不存在返回 `null`。 |
| `List<TComponent> GetComponents<TComponent>()` | 枚举全部该类型的组件。 |
| `void RemoveEntityComponent<TComponent>()` / `RemoveEntityComponent<TComponent>(TComponent component)` | 移除组件（生命周期结束、读档后清理时调用）。 |

### 五、玩家与进度

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `MainParty` | 玩家队伍。所有队伍相关逻辑的锚点；玩家在地图上「不存在」时（例如战斗内）它依然存在但 `MainParty.MainAgent` 为 null。 |
| `void InitializeMainParty()` | 在角色创建完成后初始化玩家队伍；由引擎调用，重载玩家角色后可能需要它。 |
| `bool OnPlayerCharacterChanged(out bool isMainPartyChanged)` | 换主角后的重初始化入口。 |
| `void SetPlayerFormationPreference(CharacterObject character, FormationClass formation)` | 记录「玩家用这个角色时默认编队」。 |
| `PlayerFormationPreferences` | 上述偏好的只读字典。 |
| `PlayerTraitDeveloper` | 玩家特殊特质的开发器（trait 平衡 mod 用）。 |
| `void UnlockFigurehead(Figurehead figurehead)` | 解锁船头像；配套的 `UnlockedFigureheadsByMainHero` 字段保存解锁记录。 |
| `PlayerProgress`、`int CurrentTickCount`、`bool GameStarted` | 战役进度 / 已推进 tick 数 / 是否已进入正式游玩。`GameStarted` 常用于区分「刚 new 出战役」与「可交互的战役」。 |
| `bool IsMainHeroDisguised`（可写） | 玩家是否处于伪装状态（潜行动线）。 |
| `bool EnabledCheatsBefore`（可写） | 引擎内部：进入战役前是否启用了作弊开关。**不要依赖**。 |
| `bool TrueSight`、`bool IsMapTooltipLongForm`、`bool IsCraftingEnabled`、`bool IsBannerEditorEnabled`、`bool IsFaceGenEnabled`（均可写） | 功能开关。`IsFaceGenEnabled = false` 可跳过捏脸流程直接进入战役，这是绕过角色创建最直接的方式。 |

### 六、时间流速与加载生命周期

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `void SetTimeSpeed(int speed)` | 设置时间流速档位（0 = 暂停，正数为推进速度）。UI 时间控件走这里。 |
| `float SpeedUpMultiplier`（可写，默认 4f） | 快进倍率，影响「加速」时 `SetTimeSpeed` 的实际换算。 |
| `bool TimeControlModeLock` / `void SetTimeControlModeLock(bool isLocked)` | 时间控制模式锁：锁定后玩家不能再改流速（剧情 / 战斗序列常用）。 |
| `CampaignTimeControlMode GetSimplifiedTimeControlMode()` | 把当前时间模式归一化，用于判断「现在是可交互 / 只读 / 被锁」。 |
| `LastTimeControlMode`（字段） | 上一次的时间控制模式，恢复时使用。 |
| `void SetLoadingParameters(GameLoadingType gameLoadingType)` | 声明本次是「新战役」还是「读档」，影响注册与加载分支。 |
| `void InitializeSinglePlayerReferences()` / `InitializeGamePlayReferences()` / `InitializeParameters()` | 分阶段装配引用。mod 覆盖这些方法时**必须调用 `base`**，否则引擎依赖的引用不会被初始化。 |
| `override void BeforeRegisterTypes(MBObjectManager objectManager)` / `override void OnRegisterTypes(MBObjectManager objectManager)` | MBObject 类型注册钩子；自定义类型在这里注册。 |
| `override GameTypeLoadingStates DoLoadingForGameType(GameTypeLoadingStates gameTypeLoadingState, out GameTypeLoadingStates nextState)` | 读档分片状态机。返回下一状态，不要在其中做长耗时工作。 |
| `override void OnMissionIsStarting(string missionName, MissionInitializerRecord rec)` | 从战役切入任务时的钩子。 |
| `override void OnStateChanged(GameState oldState)` / `override void OnDestroy()` | 游戏状态切换与销毁。`OnDestroy` 是清理静态引用、解除事件订阅的最后时机。 |
| `void OnGameOver()` | 战役失败处理。 |
| `void WaitAsyncTasks()` | 等待异步任务收尾，避免切场景时竞态。 |
| `static void LateAITick()` | 战役 AI 的「迟到 tick」，由引擎在主 tick 之后调用；模组不要手动调用。 |
| `const float ConfigTimeMultiplier = 0.25f`、静态字段 `PlayerRegionSwitchCostFromLandToSea`、`PathFindingMaxCostLimit` | 平衡与寻路相关常量。`PathFindingMaxCostLimit` 是寻路代价上限，调大能覆盖更远但更慢。 |
| 字段 `Options`（`CampaignOptions`，readonly）、`ITask CampaignLateAITickTask`、`MinSettlementX/MaxSettlementX/MinSettlementY/MaxSettlementY`、`IsSinglePlayerReferencesInitialized`、`MainHeroIllDays`、`DefaultWeatherNodeDimension`、`CurrentConversationContext` | 运行时配置与状态位。`MainHeroIllDays` 记录主角患病天数（声望类 mod 会读）；`Options` 承载全局玩法开关。 |

## 示例

### 示例 1：在任务结束后安全地读战役状态

任务销毁时 `Mission.Current` 已为 null，但 `Campaign.Current` 通常仍然有效——前提是你确实在战役里。关键是先判空再取，并且不要把 `Campaign` 缓存进任务对象。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.MountAndBlade;

// 在任意模块生命周期回调里：先判空，再取用
if (Campaign.Current == null)
{
    return;                       // 主菜单 / 加载中 / 战役尚未建立
}

var factions = Campaign.Current.FactionManager;        // IFaction 注册表
var quests    = Campaign.Current.QuestManager;         // 任务运行时
var behaviors = Campaign.Current.GetCampaignBehaviors<IUIPrerequisite>(); // 全部同类型 Behavior
```

### 示例 2：读取 Behavior 与地图常量

`GetCampaignBehavior<T>()` 不存在时返回 `null`，必须判空。

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;

if (Campaign.Current == null) return;

var alliance = Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>();
if (alliance != null && Hero.MainHero.Kingdom != null)
{
    bool allied = Hero.MainHero.Kingdom.IsAllyWith(Hero.MainHero.Clan);
}

// 地图几何：判断一个坐标是否还在地图内
Vec2 min = Campaign.MapMinimumPosition;
Vec2 max = Campaign.MapMaximumPosition;
bool insideMap = Hero.MainHero.Position.x >= min.x && Hero.MainHero.Position.x <= max.x
              && Hero.MainHero.Position.y >= min.y && Hero.MainHero.Position.y <= max.y;
```

### 示例 3：EntityComponent 的挂载与存档前移除

EntityComponent 会进入存档，因此在战役结束 / 存档前必须移除。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

// 下面这个类型是「读者自己写的」，不是游戏 API
public class MyProgressionTracker : CampaignEntityComponent
{
    private int _visitedCount;

    public int VisitedCount => _visitedCount;

    public void MarkVisit(Settlement settlement)
    {
        _visitedCount++;
    }
}

// 挂载（需要在 Campaign 初始化之后）
var tracker = Campaign.Current.AddEntityComponent<MyProgressionTracker>();

// 使用（MarkVisit 是上面这个示例类自己的方法）
tracker.MarkVisit(Hero.MainHero.HomeSettlement);

// 存档 / 战役结束前清理，避免存档里留下悬空组件
Campaign.Current.RemoveEntityComponent<MyProgressionTracker>();
```

## 风险与边界

- **`Campaign.Current` 为 null 的窗口**：主菜单、模块加载、存档读取过程、`OnDestroy` 之后。缓存 `Campaign.Current` 到静态字段是 1.4.x 最常见的崩溃源，因为它把「一次性存在」的对象变成了「永久存在」的假设。
- **单线程假设**：`Campaign` 及其所有 Manager 都在主游戏线程上访问。联机模式下，网络线程收到的数据必须转投主线程后再读写 `Campaign`，否则会撞上集合正在被枚举。
- **存档时序**：`SaveHandler` 与各 Behavior 的 `SyncData` 在存档时调用；在此之前必须完成 EntityComponent 的状态整理。读档时 `GetCampaignBehavior<T>()` 在 Behavior 尚未全部 `AddBehavior` 之前返回 `null`，不要在 `SyncData` 里互相调用 `GetCampaignBehavior`。
- **加载状态机耦合**：覆盖 `DoLoadingForGameType`、`InitializeGamePlayReferences` 等而不调用 `base` 会让引擎内部引用缺失，表现是进战役后某个 Manager 为 null 而非立刻报错。
- **战斗层耦合**：`Campaign` 与 `Mission` 是两个独立生命周期。任务结束时 `Mission.Current` 为 null，而任务里持有的 `Agent`、`MissionAgentHandler`、`MissionWeapon` 全部失效——绝不要跨越任务边界长期持有这些引用。
- **常量不是配置**：`AverageWage`、`Estimated*PartySpeed`、`PlayerRegionSwitchCostFromLandToSea`、`PathFindingMaxCostLimit` 属于引擎内部平衡值，改动它们会让官方内容与 mod 内容的行为不可预测。
- **未公开字段**：`MinSettlementX`、`UnlockedFigureheadsByMainHero`、`LastTimeControlMode` 等 `public` 字段没有兼容性保证，跨版本移植前必须重新对照反编译源码。

## 依赖关系

- 上游 / 提供者：
  - [Game](../../core-extra/Game) 持有 `Game.GameTypeManager`，战役模式下即为 `Campaign` 实例，并驱动它的 `OnDestroy` / `OnStateChanged`。
  - [MBSubModuleBase](../../core/MBSubModuleBase) 通过 `OnGameStart(game, gameStarterObject)` 把 `IGameStarter`（实际是 [CampaignGameStarter](../CampaignGameStarter)）交给 mod，用来往战役里注册 Behavior 与菜单。
  - [MBObjectManager](../../campaign-ext/MBObjectManager) 承接 `Campaign.OnRegisterTypes` 的类型注册请求。
- 相互 / 下游：
  - [CampaignBehaviorBase](../CampaignBehaviorBase) 是挂在 `Campaign` 上的扩展基类；[CampaignEvents](../CampaignEvents) 是战役层事件的唯一广播入口。
  - [IFaction](../IFaction) 描述派系（Clan / Kingdom）的统一只读视图，由 `FactionManager` 持有。
  - [MissionState](../../mission/MissionState) 与 [Mission](../../mission/Mission) 属于战斗层，从 `Campaign` 进入任务时被 `CampaignMissionManager` 调度。
  - [SaveManager](../../save-system/SaveManager) 是存档的静态门面，最终经 `Campaign.SaveHandler` 落到战役数据。

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[CampaignBehaviorBase](../CampaignBehaviorBase) · [CampaignEvents](../CampaignEvents) · [CampaignGameStarter](../CampaignGameStarter) · [IFaction](../IFaction) · [Game](../../core-extra/Game) · [MBSubModuleBase](../../core/MBSubModuleBase) · [MissionState](../../mission/MissionState) · [SaveManager](../../save-system/SaveManager)