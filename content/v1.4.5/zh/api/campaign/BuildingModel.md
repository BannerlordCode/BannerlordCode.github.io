---
title: "BuildingModel"
description: "决定某个建筑类型（BuildingType）能否被加入指定城镇（Town）的规则模型，由 Campaign 在运行时通过 Campaign.Current.Models.BuildingModel 解析，仅被 BuildingsCampaignBehavior 在开局铺设定居点建筑时调用。"
---

# BuildingModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class BuildingModel : MBGameModel<BuildingModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BuildingModel.cs

## 概述

该模型集中裁决“在某城镇能否新增某一类建筑”：给定一个 `BuildingType` 与一个 `Town`，返回布尔值表示是否允许把该建筑类型作为可建造/已存在建筑加入该城镇。它只做纯判定，不持有任何会被写进存档的世界状态——真正的建筑列表保存在 `Town.Buildings` 上，由 `BuildingsCampaignBehavior` 在开局铺设定居点建筑与后续处理工程队列时读写。

## 心智模型

BuildingModel 是一个纯裁决的 Model 型扩展点：`Campaign` 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出 `DefaultBuildingModel` 唯一实例并缓存，运行时统一用 `Campaign.Current.Models.BuildingModel` 取得；它不参与存档序列化，也不在每个 tick 被重新构造。`BuildingsCampaignBehavior.BuildDevelopmentsAtGameStart` 在战役开局遍历每个定居点、对每个 `BuildingType.All` 成员先确认该城镇尚未拥有此类型，再调用 `CanAddBuildingTypeToTown` 决定是否把它作为一个初始 `Building` 加入 `Town.Buildings`。要改规则就继承并注册一个替换实现；要“执行”增建仍应走行为/工程队列，绝不要把模型当成写世界的入口或直接改 `Town.Buildings` 的写入路径。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“某建筑类型能否落在该城镇（城镇 vs 城堡区分）”的规则时，读取 `Campaign.Current.Models.BuildingModel.CanAddBuildingTypeToTown` 的返回值，或提供一个新的派生类覆盖该抽象成员并通过子模块注册替换默认实现。
- **不要使用**：不要用模型去“执行”增建——它只会判定，真正往 `Town.Buildings` 里加建筑、推进工程队列的是 `[BuildingsCampaignBehavior](../BuildingsCampaignBehavior)`。不要亲自给 `Town.Buildings` 赋值了事；也不要把模型返回值当作持久世界状态（它是无状态的纯函数）。若只替换模型却不更新行为的写入逻辑，会出现“判定通过却界面不显示”或建筑类型与城镇等级脱节。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<BuildingModel>()` 解析并缓存实例（`GameModels.cs` 第 241 行暴露 `BuildingModel` 属性、第 378 行完成解析赋值）。
- [DefaultBuildingModel](../DefaultBuildingModel) —— 默认实现，由 `SandBoxManager.AddModel(new DefaultBuildingModel())` 在战役装配时注册。

下游与协同系统（调用方）：

- [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) —— 唯一在运行时调用本模型的类，于 `BuildDevelopmentsAtGameStart` 第 167 行对每个定居点、每种 `BuildingType` 调用 `CanAddBuildingTypeToTown` 决定初始建筑铺设。
- [Town](../Town) —— 判定目标（参数），其 `Buildings` 集合是被真正写入的建筑列表。
- [Settlement](../Settlement) —— 城镇所在定居点，是遍历与铺设建筑的上下文。
- [BuildingType](../BuildingType) —— 被判定能否加入城镇的建筑类型，自身带有 `StartLevel`、`VarianceChance` 等属性。
- [Building](../Building) —— 判定通过后被实例化的具体建筑对象，加入 `Town.Buildings`。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— `BuildingsCampaignBehavior` 的基类，是实际驱动调用方。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.BuildingModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类放宽了城镇/城堡的建筑限制，但真正把 `Building` 加入 `Town.Buildings` 的是 `BuildingsCampaignBehavior`。只替换模型、却让行为按旧假设处理建筑队列，会出现“判定通过却流程不推进”或城镇/城堡显示错配。
- **`town.IsTown`/`town.IsCastle` 的口径依赖**：默认实现把建筑类型按“城镇建筑/城堡建筑/每日建筑”分类，分别要求 `town.IsTown` 或 `town.IsCastle`。覆盖此方法时若忽略城镇与城堡的类型差异，会把本应只属于城堡的建筑错误地允许到城镇（或反之）。

## 成员说明

### 建筑可建性判定

- **`CanAddBuildingTypeToTown(BuildingType buildingType, Town town)`**
  - 用途：判断给定的 `buildingType` 是否允许被加入 `town`。默认实现 `DefaultBuildingModel` 把建筑类型按归属分类：城镇专属建筑（如 `SettlementFortifications`、`SettlementBarracks`、`SettlementMarketplace`、`SettlementDailyHousing` 等）要求 `town.IsTown`；城堡专属建筑（如 `CastleFortifications`、`CastleBarracks`、`CastleDailyDrills` 等）要求 `town.IsCastle`；不属于上述任何一组的其它类型直接返回 `true`。
  - 副作用：无，纯判定。
  - 调用时机：仅由 `BuildingsCampaignBehavior.BuildDevelopmentsAtGameStart` 在战役开局对每个定居点、每种 `BuildingType` 调用，与“该城镇尚未拥有此类型”的前置条件（`town.Buildings.All(b => b.BuildingType != buildingType)`）相与后决定是否实例化新的 `Building` 加入 `Town.Buildings`。

## 示例

在尝试为某城镇铺设建筑前，先用模型做一次类型是否匹配该城镇的守卫：

```csharp
Town town = Settlement.CurrentSettlement.Town;
BuildingType type = DefaultBuildingTypes.SettlementMarketplace;
if (Campaign.Current.Models.BuildingModel.CanAddBuildingTypeToTown(type, town))
{
    // 判定通过；真正写入建筑列表应走 BuildingsCampaignBehavior 或 Town.Buildings 的写入路径
}
```

遍历某城镇允许承载的全部建筑类型：

```csharp
foreach (BuildingType candidate in BuildingType.All)
{
    bool allowed = Campaign.Current.Models.BuildingModel
        .CanAddBuildingTypeToTown(candidate, town);
}
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [DefaultBuildingModel](../DefaultBuildingModel) · [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) · [Town](../Town) · [Settlement](../Settlement) · [BuildingType](../BuildingType) · [Building](../Building) · [CampaignBehaviorBase](../CampaignBehaviorBase)
