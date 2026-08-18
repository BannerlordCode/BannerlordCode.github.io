---
title: "BuildingScoreCalculationModel"
description: "决定城镇（Town）在每日结算时应当推进哪一个常规建筑工程、以及哪一个“每日工程”（daily project）成为默认工程的规则模型，由 Campaign 在运行时通过 Campaign.Current.Models.BuildingScoreCalculationModel 解析，被 BuildingsCampaignBehavior 在选取建筑队列与设定每日默认工程时调用。"
---

# BuildingScoreCalculationModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class BuildingScoreCalculationModel : MBGameModel<BuildingScoreCalculationModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BuildingScoreCalculationModel.cs

## 概述

该模型负责决定每座城镇在每日结算时应当“接下来建造什么”：一类是常规建筑工程（非每日工程、未达满级、且尚未进入建造队列），另一类是标记为“每日工程”的默认工程。它只做纯计算、挑出下一个目标建筑，真正的入队与施工推进由 [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) 完成；建筑本身的等级、效果与花费则由 [Building](../Building)、[BuildingType](../BuildingType) 与 [BuildingModel](../BuildingModel) 等描述。

## 心智模型

BuildingScoreCalculationModel 是一个纯挑选型扩展点：`Campaign` 在启动时通过 `GameModels` 从已注册 `GameModel` 集合中按类型解析出 `DefaultBuildingScoreCalculationModel` 唯一实例并缓存（见 `GameModels.cs` 第 350 行 `BuildingScoreCalculationModel = GetGameModel<BuildingScoreCalculationModel>()`），运行时统一用 `Campaign.Current.Models.BuildingScoreCalculationModel` 取得，它不参与存档序列化，也不在每个 tick 被重新构造。领地行为 `BuildingsCampaignBehavior` 在每日结算时为每个非玩家拥有的城镇调用 `DecideDailyProject`（经 `GetNextDailyBuilding` 选出当日默认工程，并写入 `Town.CurrentDefaultBuilding`）与 `DecideBuildingQueue`（当 `Town.BuildingsInProgress` 为空时经 `GetNextBuilding` 选出下一个常规工程并入队）。要改“选哪个建筑”的规则就继承并注册替换实现；要“真正推进施工 / 加等级”应走建筑写入路径而非模型——模型只回答“下一个是谁”，不修改任何世界状态。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义城镇“下一步该建哪个常规工程 / 哪个每日工程作为默认”的挑选规则时，读取 `Campaign.Current.Models.BuildingScoreCalculationModel` 的返回值，或提供新的派生类覆盖两个抽象方法并通过子模块注册替换默认实现。
- **不要使用**：不要直接给 `Town.BuildingsInProgress` 赋值或直接改 `Town.CurrentDefaultBuilding` 来“指定建造目标”——写入应经 `BuildingsCampaignBehavior` / `BuildingHelper.ChangeDefaultBuilding` 等既有路径（模型是无状态纯函数，真正的状态在 [Town](../Town) 上）；也不要在 `Mission` / 战斗层或战役未启动前访问本模型；更不要把模型当成读取建筑等级 / 花费 / 效果的入口（那属于 [Building](../Building)、[BuildingType](../BuildingType) 与 [BuildingModel](../BuildingModel)）。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<BuildingScoreCalculationModel>()` 解析并缓存实例。

下游与协同系统（调用方）：

- [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) —— 实际调用方：`DecideDailyProject` 调用 `GetNextDailyBuilding` 选出当日默认工程；`DecideBuildingQueue` 在建造队列为空时调用 `GetNextBuilding` 选常规工程并入队 `Town.BuildingsInProgress`。
- [Town](../Town) —— 参数与状态载体：`Town.Buildings`、`Town.BuildingsInProgress`、`Town.CurrentDefaultBuilding` 参与挑选并接收结果。
- [Settlement](../Settlement) —— 行为以 `Settlement.IsFortification` 过滤，仅处理城镇定居点的每日结算。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— `BuildingsCampaignBehavior` 的基类，是实际驱动每日挑选的调用者。

相关类型与模型：

- [Building](../Building) —— 两个方法的返回类型；`Building.CurrentLevel` 被 `GetNextBuilding` 用于“未满级”判定。
- [BuildingType](../BuildingType) —— `BuildingType.IsDailyProject` 区分每日工程与常规工程。
- [BuildingModel](../BuildingModel) —— 同属建筑规则簇，描述建筑等级 / 花费 / 效果，常与之一并替换。
- [DefaultBuildingScoreCalculationModel](../DefaultBuildingScoreCalculationModel) —— 默认实现，含两方法的默认挑选逻辑。
- [BuildingConstructionModel](../BuildingConstructionModel) / [BuildingEffectModel](../BuildingEffectModel) —— 建筑建造与效果规则簇，常一并派生替换。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.BuildingScoreCalculationModel` 在每次新战役 / 读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission / 战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改变挑选偏好，但真正入队 `Town.BuildingsInProgress`、设定 `Town.CurrentDefaultBuilding`（经 `BuildingHelper.ChangeDefaultBuilding`）以及施工推进都由 `BuildingsCampaignBehavior` 完成。只替换模型、却让行为按旧假设处理队列，会出现“挑出了却没推进”或界面与预测脱节。
- **`GetNextBuilding` 的等概率随机性**：默认实现对所有 `CurrentLevel < 3` 且不在队列中的常规建筑等概率随机选取（`GetRandomElementInefficiently`），完全不考虑花费、收益或优先级。过度定制随机性会让某些建筑长期不被选中。
- **与 `Town.CurrentDefaultBuilding` 相等时跳过切换**：`DecideDailyProject` 在 `nextDailyBuilding == town.CurrentDefaultBuilding` 时不会切换；若 `GetNextDailyBuilding` 总是返回当前默认工程（例如城镇只剩一个每日工程），每日工程将不会被重置 / 通知变更。

## 成员说明

### 常规建筑工程挑选

- **`GetNextBuilding(Town town)`**
  - 用途：从 `town.Buildings` 中挑出下一个应当进入建造队列的常规工程。默认实现 `DefaultBuildingScoreCalculationModel` 先筛选：排除 `BuildingType.IsDailyProject` 为真的每日工程、排除 `CurrentLevel >= 3`（已达满级）的建筑、排除已处于 `Town.BuildingsInProgress` 中的建筑，再从中等概率随机返回一个（`GetRandomElementInefficiently`）。返回 `null` 表示暂时没有可建目标。
  - 副作用：无，纯计算、不修改任何世界状态。
  - 调用时机：仅由 `BuildingsCampaignBehavior.DecideBuildingQueue` 在 `Town.BuildingsInProgress` 为空（`IsEmpty()`）时调用，结果经 `Town.BuildingsInProgress.Enqueue(nextBuilding)` 入队。

### 每日默认工程挑选

- **`GetNextDailyBuilding(Town town)`**
  - 用途：从 `town.Buildings` 中挑出一个标记为每日工程（`BuildingType.IsDailyProject == true`）的建筑作为当日默认工程。默认实现 `DefaultBuildingScoreCalculationModel` 用 `GetRandomElementWithPredicate(b => b.BuildingType.IsDailyProject)` 等概率随机返回。
  - 副作用：无，纯计算。
  - 调用时机：仅由 `BuildingsCampaignBehavior.DecideDailyProject` 调用，结果若非 `null` 且与 `Town.CurrentDefaultBuilding` 不同，则经 `BuildingHelper.ChangeDefaultBuilding` 写入城镇默认工程。

## 示例

查询某城镇下一步应建造的常规工程：

```csharp
Town town = Settlement.CurrentSettlement.Town;
Building nextProject = Campaign.Current.Models.BuildingScoreCalculationModel
    .GetNextBuilding(town);
// nextProject 为 null 表示当前没有可排队的常规工程（都已满级或已在建）
```

查询城镇当日的默认工程：

```csharp
Building dailyProject = Campaign.Current.Models.BuildingScoreCalculationModel
    .GetNextDailyBuilding(town);
// 若 dailyProject 与 town.CurrentDefaultBuilding 不同，行为会经
// BuildingHelper.ChangeDefaultBuilding 把它设为当日默认工程
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [Town](../Town) · [Settlement](../Settlement) · [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [Building](../Building) · [BuildingType](../BuildingType) · [BuildingModel](../BuildingModel) · [DefaultBuildingScoreCalculationModel](../DefaultBuildingScoreCalculationModel) · [BuildingConstructionModel](../BuildingConstructionModel) · [BuildingEffectModel](../BuildingEffectModel)
