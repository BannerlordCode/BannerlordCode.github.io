---
title: "BuildingsCampaignBehavior"
description: "驱动城镇与城堡建筑每日建造、升级与完工的战役行为：在每日 tick 中为 AI 领主决定建设队列与每日工程、推进当前建筑进度、处理易主清空队列与新建游戏时的初始建筑，并在建筑升级时触发总督专长与队伍花名册刷新。"
---

# BuildingsCampaignBehavior

**命名空间：** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块：** TaleWorlds.CampaignSystem
**类型：** public class BuildingsCampaignBehavior : CampaignBehaviorBase
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/BuildingsCampaignBehavior.cs

## 概述

该行为负责驱动每一座城镇与城堡建筑的每日运转：在每日 tick 中推进当前在建建筑的进度、为 AI 领主按概率决定下一个排队建筑与“每日工程”、在建筑易主时清空对方的在建队列、并在新游戏创建时为所有据点补齐初始建筑与随机方差升级。它直接读写 `Town`/`Building` 的世界状态（进度、队列、等级），与只做计算的 [BuildingModel](../BuildingModel)、[BuildingScoreCalculationModel](../BuildingScoreCalculationModel)、[BuildingConstructionModel](../BuildingConstructionModel) 形成“执行 vs 算数”的分工。

## 心智模型

BuildingsCampaignBehavior 是一个有状态的 Campaign 层行为，由 `SandBoxManager` 在战役启动时通过 `gameStarter.AddBehavior(new BuildingsCampaignBehavior())` 注册（位于 `SandBoxManager.cs` 第 43 行），运行时统一用 `Campaign.Current.CampaignBehaviorManager.GetBehavior<BuildingsCampaignBehavior>()` 取得实例。它在 `RegisterEvents` 中通过 `CampaignEvents` 的各 `AddNonSerializedListener` 订阅四件事：`DailyTickSettlementEvent`（每日对每个据点推进建筑）、`OnSettlementOwnerChangedEvent`（易主清队列）、`OnNewGameCreatedEvent`（开局补建筑）、`OnBuildingLevelChangedEvent`（升级副作用）。它本身不持有需要序列化的字段——`SyncData` 为空实现，真正的进度与队列都保存在 [Town](../Town) 与 [Building](../Building) 上，因此重载后会随这些对象一起恢复。需要干预建筑系统时应继承它或订阅同样事件，而不是去改模型；模型只会告诉你“下一个该建什么”，真正把建筑进度累加、把队列出队、触发升级副作用的是这个行为。注意它对所有据点的建筑都做 `HitPointChanged(10f)`（非被围困时），并在非玩家城镇以 10%/1% 的每日概率决定排队与每日工程——这意味着你要做确定性的建筑节奏修改，要么替换模型评分，要么自己接管这些 tick 路径。

## 何时使用 / 何时不要使用

- **使用**：需要在建筑进度、排队、升级时机上做干预时——例如自定义某个城镇每日起始队列、在 `OnBuildingLevelChanged` 时挂自定义效果、或在子模块里注册一个监听建筑事件的新行为。读取建筑进度/队列请走 [Town](../Town) 与 [Building](../Building)，行为本身通过 `GetBehavior` 取。
- **不要使用**：不要用它去“算数”——判断某建筑类型能否加入城镇、下个建筑评分、建造成本，这些属于 [BuildingModel](../BuildingModel)/[BuildingScoreCalculationModel](../BuildingScoreCalculationModel)/[BuildingConstructionModel](../BuildingConstructionModel)。不要在 Mission/战斗层或战役未启动时访问；不要在 tick 回调之外手动重入 `DecideBuildingQueue` 这类私有逻辑，或假设队列顺序与每日随机一致。

## 依赖图

上游类型与系统：

- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 本行为的直接基类，提供 `RegisterEvents`/`SyncData` 契约与 `GetCampaignBehavior<T>()` 辅助。
- [Campaign](../Campaign) —— 通过 `CampaignBehaviorManager` 持有并分派所有行为；`GetBehavior<T>()` 是运行时入口。
- [CampaignBehaviorManager](../CampaignBehaviorManager) —— 实际登记与解析行为实例的容器，`GetBehavior` 的最终落点。
- [CampaignGameStarter](../CampaignGameStarter) —— `SandBoxManager` 用它 `AddBehavior` 注册本行为。
- [GameModels](../GameModels) —— 与其相对的是模型解析容器；本行为内部读取的模型都来自 `Campaign.Current.Models`。

下游与协同系统（被交互/写入的对象）：

- [Town](../Town) —— 主要被改写对象：`Buildings`、`BuildingsInProgress` 队列、`CurrentBuilding`、`BoostBuildingProcess`、`Construction`、`Prosperity`。
- [Settlement](../Settlement) —— `DailyTickSettlement` 的入参；据点是否要塞（`IsFortification`/`IsUnderSiege`）决定建筑是否推进。
- [Building](../Building) —— `BuildingProgress`、`CurrentLevel`、`HitPointChanged`、`LevelUp`、`BuildingType` 被直接读写。
- [BuildingType](../BuildingType) —— 开局遍历 `BuildingType.All` 决定可添加的建筑种类。
- [BuildingModel](../BuildingModel) —— `BuildDevelopmentsAtGameStart` 调用 `CanAddBuildingTypeToTown` 决定某类型能否加入某城镇。
- [BuildingScoreCalculationModel](../BuildingScoreCalculationModel) —— `DecideDailyProject`/`DecideBuildingQueue` 用 `GetNextDailyBuilding`/`GetNextBuilding` 决定 AI 城镇的下一个目标。
- [BuildingConstructionModel](../BuildingConstructionModel) —— `TickCurrentBuildingForTown` 用 `TownBoostCost`/`CastleBoostCost` 计算加速消耗。
- [ChangeRelationAction](../../campaign-ext/ChangeRelationAction) —— 升级/每日工程经总督专长触发英雄关系变化。
- [SkillLevelingManager](../SkillLevelingManager) —— `OnBuildingLevelChanged` 在升级完成后调用 `OnSettlementProjectFinished` 结算工程技能经验。

## 风险

- **行为是运行期单例，但状态在 Town/Building 上**：`GetBehavior<BuildingsCampaignBehavior>()` 返回的是当前战役注册的那一个；跨战役/读档后实例会重新解析。不要把它缓存进静态字段或长生命周期对象，重载后会指向已销毁的旧实例。行为内部没有 `[SaveableField]`，`SyncData` 是空实现——建筑进度之所以能恢复，是因为 [Town](../Town)/[Building](../Building) 自己被序列化，而非本行为保存。
- **事件注册时机**：所有订阅都在 `RegisterEvents` 里通过 `AddNonSerializedListener` 完成。自定义行为若忘了挂监听，对应的每日/升级逻辑就不会触发；非序列化监听在重载后由框架重新注册，不要手动重复订阅以免双触发。
- **在 tick 期间修改世界状态的安全性**：`DailyTickSettlement` 内会 `Dequeue`/`Enqueue` 队列、`LevelUp` 建筑，并触发 [ChangeRelationAction](../../campaign-ext/ChangeRelationAction) 与花名册 `UpdateVersion`。你自己的 `OnBuildingLevelChanged` 监听器若再从外部并发改写同一 [Town](../Town) 的队列或建筑等级，可能与本行为的出队/完成逻辑冲突，导致队列错乱或重复升级。把自定义写入收敛到事件回调内、避免跨行为重入。
- **加载阶段访问限制**：`OnNewGameCreated` 时据点集合已就绪，但 `BuildDevelopmentsAtGameStart` 会遍历 `Settlement.All` 并对每个要塞补建筑——如果你在自定义行为的更早阶段（如构造器）就访问 `Town.Buildings`，可能遇到尚未初始化的城镇。务必等到 `RegisterEvents` 订阅的事件被触发后再读建筑状态。
- **坏档风险**：虽然本行为自身不序列化，但它对 [Building](../Building) 的 `LevelUp` 和队列改动都落进存档。自定义行为若在升级回调里抛异常或把 `LevelChange` 算错，可能把建筑卡在非法等级或让 `BuildingsInProgress` 出现空/重复项，读档时难以自愈。对升级副作用的写入要幂等、可重入。
- **AI 城镇的随机性**：非玩家据点队列/每日工程由 `MBRandom.RandomFloat < 0.1f`/`0.01f` 触发，且依赖模型评分。只替换评分模型却不理解这些概率门槛，会以为“该建却没建”；反过来强行清空 AI 队列会破坏据点发展节奏。

## 成员说明

### 生命周期与事件订阅

- **`RegisterEvents()`**
  - 用途：向 `CampaignEvents` 注册四个 `AddNonSerializedListener`——`OnSettlementOwnerChanged`、`OnNewGameCreated`、`DailyTickSettlement`、`OnBuildingLevelChanged`；这是行为被激活的唯一入口。
  - 副作用：无，只挂监听；真正的世界写入发生在各回调里。
  - 调用时机：行为由 `CampaignGameStarter.AddBehavior` 登记后，框架在战役初始化阶段自动调用一次。

- **`SyncData(IDataStore dataStore)`**
  - 用途：存档/读档钩子，但本行为实现为空——因为它不持有需要单独持久化的字段，状态都在 [Town](../Town)/[Building](../Building) 上随对象序列化。
  - 副作用：无。
  - 调用时机：每次存/读档时由存档系统调用；保持空实现即可，不要误以为这里能恢复行为内部状态。

### 每日推进（核心循环）

- **`DailyTickSettlement(Settlement settlement)`**
  - 用途：每个据点每日推进建筑的主入口。非要塞直接返回；要塞下先给所有建筑 `HitPointChanged(10f)`（当 owner 据点未被围困时）；对非玩家家族据点，以 `MBRandom.RandomFloat < 0.1f` 决定排队（`DecideBuildingQueue`）、以 `< 0.01f` 决定每日工程（`DecideDailyProject`）；最后若当前建筑非每日工程则 `TickCurrentBuildingForTown`，否则在总督具 `Charm.Virile` 专长时随机给总督家族领袖与一名要人加 1 点关系。
  - 副作用：写建筑耐久、可能改动 `Town.BuildingsInProgress`、推进 `BuildingProgress`、调用 [ChangeRelationAction](../../campaign-ext/ChangeRelationAction)。
  - 调用时机：引擎每日结算对每个据点派发 `DailyTickSettlementEvent` 时。

- **`TickCurrentBuildingForTown(Town town)`**
  - 用途：推进“当前在建建筑”的进度：若队首建筑已满级（`CurrentLevel == 3`）先出队；若据点被围困或队列空则跳过；否则给队首建筑累加 `town.Construction` 点，并按 `TownBoostProcess` 扣除 [BuildingConstructionModel](../BuildingConstructionModel) 的 `TownBoostCost`/`CastleBoostCost` 加速成本，最后 `BuildingHelper.CheckIfBuildingIsComplete` 判定完工。
  - 副作用：写 `Building.BuildingProgress`、可能出队、可能触发升级（进而走 `OnBuildingLevelChanged`）。
  - 调用时机：由 `DailyTickSettlement` 在非每日工程建筑上调用。

- **`DecideBuildingQueue(Town town)`**（私有）
  - 用途：当 `BuildingsInProgress` 为空时，调用 `Campaign.Current.Models.BuildingScoreCalculationModel.GetNextBuilding(town)` 决定下一个排队建筑并 `Enqueue`。
  - 副作用：可能改变队列；纯由模型评分驱动，行为本身不评分。
  - 调用时机：仅非玩家据点的每日低概率（`0.1f`）分支调用。

- **`DecideDailyProject(Town town)`**（私有）
  - 用途：用 `BuildingScoreCalculationModel.GetNextDailyBuilding(town)` 计算下一个“每日工程”，若与当前默认建筑不同则 `BuildingHelper.ChangeDefaultBuilding` 切换。
  - 副作用：可能改变 `Town.CurrentDefaultBuilding`。
  - 调用时机：开局 `BuildDevelopmentsAtGameStart` 与每日极低概率（`0.01f`）分支。

### 易主与开局初始化

- **`OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)`**
  - 用途：当据点易主且新主人不是玩家家族时，清空 `settlement.Town.BuildingsInProgress`，避免被征服方继续把前领主的建筑建完。
  - 副作用：清空在建队列（玩家据点除外）。
  - 调用时机：`OnSettlementOwnerChangedEvent` 派发时。

- **`OnNewGameCreated(CampaignGameStarter starter)`**
  - 用途：新游戏创建后调用 `BuildDevelopmentsAtGameStart` 为所有据点补初始建筑。
  - 副作用：间接写入所有据点的 `Town.Buildings`。
  - 调用时机：`OnNewGameCreatedEvent` 派发（早于常规每日 tick）。

- **`BuildDevelopmentsAtGameStart()`**（私有）
  - 用途：遍历 `Settlement.All` 的每个要塞，对每个尚未拥有且经 [BuildingModel](../BuildingModel)`CanAddBuildingTypeToTown` 许可的 `BuildingType` 新建 `Building(buildingType, town, 0f, StartLevel)`；再按 `VarianceChance` 掷骰把部分建筑随机 `LevelUp`；最后 `DecideDailyProject`/`DecideBuildingQueue` 设好开局节奏。
  - 副作用：大规模初始化建筑集合与初始队列/每日工程。
  - 调用时机：仅 `OnNewGameCreated` 调用一次。

### 建筑升级副作用

- **`OnBuildingLevelChanged(Town town, Building building, int levelChange)`**
  - 用途：建筑升级/降级后的副作用处理。若建筑影响驻军/监狱容量，刷新对应花名册 `UpdateVersion`；当 `levelChange > 0` 且存在总督时，按 `Charm.MoralLeader`（给所有要人加关系）、`Engineering.Foreman`（给城镇加繁荣度）专长触发效果，并调用 `SkillLevelingManager.OnSettlementProjectFinished` 结算工程技能经验。
  - 副作用：写 `Town.Prosperity`、触发 [ChangeRelationAction](../../campaign-ext/ChangeRelationAction)、刷新花名册版本、结算技能经验。
  - 调用时机：`OnBuildingLevelChangedEvent` 派发（由 `BuildingHelper.CheckIfBuildingIsComplete` 等升级路径触发），也是自定义监听的最佳挂点。

## 示例

从战役中取得该行为并读取某城镇的在建队列与进度（直接访问 [Town](../Town)/[Building](../Building) 的状态）：

```csharp
BuildingsCampaignBehavior buildings = Campaign.Current
    .CampaignBehaviorManager.GetBehavior<BuildingsCampaignBehavior>();
Town town = Settlement.CurrentSettlement.Town;
foreach (Building building in town.BuildingsInProgress)
{
    // 当前在建建筑的进度与等级
    float progress = building.BuildingProgress;
    int level = building.CurrentLevel;
}
```

在自己的子模块中注册一个监听建筑升级的行为，对“玩家据点的建筑完工升级”做自定义反应：

```csharp
public class MyBuildingsWatcherBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnBuildingLevelChangedEvent
            .AddNonSerializedListener(this, OnBuildingLevelChanged);
    }

    private void OnBuildingLevelChanged(Town town, Building building, int levelChange)
    {
        if (levelChange > 0 &&
            town.OwnerClan == Clan.PlayerClan &&
            building.BuildingType.HasEffect(BuildingEffectEnum.GarrisonCapacity))
        {
            // 玩家要塞的驻军容量建筑升级后，触发你的自定义逻辑
            InformPlayerOfGarrisonUpgrade(town, building);
        }
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

在子模块的 `OnGameStart` 里把上面的行为登记进战役（与 `SandBoxManager` 注册 `BuildingsCampaignBehavior` 的方式一致）：

```csharp
protected override void OnGameStart(Game game)
{
    var starter = (CampaignGameStarter)game.GameStarter;
    starter.AddBehavior(new MyBuildingsWatcherBehavior());
}
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[CampaignBehaviorBase](../CampaignBehaviorBase) · [Campaign](../Campaign) · [CampaignBehaviorManager](../CampaignBehaviorManager) · [CampaignGameStarter](../CampaignGameStarter) · [GameModels](../GameModels) · [Town](../Town) · [Settlement](../Settlement) · [Building](../Building) · [BuildingType](../BuildingType) · [BuildingModel](../BuildingModel) · [BuildingScoreCalculationModel](../BuildingScoreCalculationModel) · [BuildingConstructionModel](../BuildingConstructionModel) · [ChangeRelationAction](../../campaign-ext/ChangeRelationAction) · [SkillLevelingManager](../SkillLevelingManager)
