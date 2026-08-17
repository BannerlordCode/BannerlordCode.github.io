---
title: "BuildingEffectModel"
description: "计算单个建筑（Building）对某一类产出（如忠诚、安全、繁荣、食物、税收、驻军容量）的净效果值的规则模型，由 Campaign 在运行时通过 Campaign.Current.Models.BuildingEffectModel 解析，被各定居点规则模型与巡逻队模型在结算时调用。"
---

# BuildingEffectModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class BuildingEffectModel : MBGameModel<BuildingEffectModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BuildingEffectModel.cs

## 概述

该模型把“某座已建造建筑对某种 `BuildingEffectEnum`（忠诚、安全、繁荣、食物、税收、驻军容量、巡逻队强度……）贡献多少”这一计算集中起来：先取建筑在对应等级的基础值，再叠加总督专长加成，并对按附属村庄炉灶数结算的收入类建筑做缩放。它本身是无状态纯计算，真正的建筑等级与状态保存在 [Building](../Building) / [Town](../Town) 上，由各定居点规则模型在每日结算时经 `Town.AddEffectOfBuildings` 聚合读取。

## 心智模型

BuildingEffectModel 是一个纯计算的规则扩展点：`Campaign` 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出唯一实例（`DefaultBuildingEffectModel`）并持有，运行时统一用 `Campaign.Current.Models.BuildingEffectModel` 取得；它不参与存档序列化，也不在每个 tick 被重新构造。各定居点规则模型（如 `DefaultSettlementLoyaltyModel`、`DefaultSettlementSecurityModel`、`DefaultSettlementMilitiaModel`、`DefaultSettlementProsperityModel`、`DefaultSettlementTaxModel`、`DefaultSettlementFoodModel`）在结算 `Town` 的 `Loyalty` / `Security` / `Militia` / `Prosperity` / `Tax` 等属性时，调用 `Town.AddEffectOfBuildings(effect, ref result)` → 逐建筑 `Building.AddEffectOfBuilding` → 最终落到 `BuildingEffectModel.GetBuildingEffect`，把每个建筑的效果并入一个 `ExplainedNumber`。`DefaultSettlementPatrolModel` 则直接读取 `PatrolPartyStrength` 决定巡逻队模板等级。要改“建筑产出多少”就继承并注册一个替换实现；要读结果走模型，绝不要把模型当成写世界的入口或直接改建筑字段。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“某座建筑对某种产出的贡献值”时，读取 `Campaign.Current.Models.BuildingEffectModel.GetBuildingEffect(building, effect)` 的返回值，或提供一个新的派生类覆盖 `GetBuildingEffect` 并通过子模块注册替换默认实现。
- **不要使用**：不要用模型去“改”建筑产出——它只返回数值，真实的世界状态（建筑等级、炉灶数、总督）在 [Building](../Building) / [Town](../Town) / [Settlement](../Settlement) 上。要改变建筑等级应走建造行为或对应的 `*Action`，而不是指望覆盖模型来影响存档；也不要把模型返回值当作持久世界状态（它是无状态的纯函数）。在 `Mission` 或战斗逻辑里取 `Campaign.Current.Models` 是错误的访问层。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<BuildingEffectModel>()` 解析并缓存实例。
- [Building](../Building) —— 被计算对象；`AddEffectOfBuilding` 是调用本模型的实际入口（依据 `BuildingEffectIncrementType` 决定累加还是乘因子）。
- [BuildingType](../BuildingType) —— `GetBuildingEffect` 内部用 `GetBaseBuildingEffectAmount(effect, building.CurrentLevel)` 取该建筑类型在对应等级的基础值。
- [Town](../Town) —— `AddEffectOfBuildings` 聚合所有建筑的效果；`DefaultBuildingEffectModel` 读取 `building.Town.Villages` 与总督专长。
- [Settlement](../Settlement) —— 建筑所属定居点，作为规则结算的上下文。

下游与协同系统（调用方）：

- [DefaultBuildingEffectModel](../DefaultBuildingEffectModel) —— 默认实现，定义基础值、绑定村庄炉灶缩放与总督专长加成。
- [SettlementLoyaltyModel](../SettlementLoyaltyModel) —— `DefaultSettlementLoyaltyModel` 调用 `AddEffectOfBuildings(BuildingEffectEnum.Loyalty, …)`。
- [SettlementSecurityModel](../SettlementSecurityModel) —— `DefaultSettlementSecurityModel` 调用 `AddEffectOfBuildings(BuildingEffectEnum.SecurityPerDay, …)`。
- [SettlementMilitiaModel](../SettlementMilitiaModel) —— `DefaultSettlementMilitiaModel` 调用 `AddEffectOfBuildings(BuildingEffectEnum.Militia / MilitiaReduction / MilitiaVeterancyChance, …)`。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 各定居点规则模型与 `CaravansCampaignBehavior` 均继承自它，是实际驱动读取的一方。
- [ExplainedNumber](../ExplainedNumber) —— `GetBuildingEffect` 的返回类型，用于携带带说明项的效果数值。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.BuildingEffectModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改变了效果公式，但建筑等级、炉灶、总督这些真实状态仍由建造行为与定居点对象维护。只替换模型、却让调用方按旧假设处理各项产出，会出现界面数值与预测不一致。
- **`BuildingEffectIncrementType` 路由依赖 `BuildingType.HasEffect`**：`Building.AddEffectOfBuilding` 只有当 `BuildingType.HasEffect(effect)` 为真、且等级在 `[StartLevel, 3]` 区间、且（非每日工程或该建筑是 `Town.CurrentDefaultBuilding`）时才调用本模型。覆盖 `GetBuildingEffect` 却没让建筑类型声明对应效果，或不参与每日工程选择，计算会完全被跳过。
- **`DenarByBoundVillageHeartPerDay` 的炉灶缩放**：该效果的基础值会被 `building.Town.Villages` 的炉灶总数重新乘算，而非简单叠加。覆盖默认实现时若沿用基础值却忽略炉灶项，会严重低估该类收入建筑的实际产出。

## 成员说明

### 建筑效果计算（唯一抽象成员）

- **`GetBuildingEffect(Building building, BuildingEffectEnum effect)`**
  - 用途：返回指定建筑对指定 `BuildingEffectEnum` 的净效果值（`ExplainedNumber`）。默认实现 `DefaultBuildingEffectModel` 的流程是：先取 `building.BuildingType.GetBaseBuildingEffectAmount(effect, building.CurrentLevel)` 作为基准；若效果是 `DenarByBoundVillageHeartPerDay`，则把基准乘以该城镇所有附属村庄炉灶数之和；若效果是 `FoodStock` 且建筑为城堡粮仓或聚落仓库，叠加工程专长 `Battlements` 加成；始终叠加管家专长 `Contractors`；若是每日工程类建筑，叠加管家 `MasterOfPlanning`；若建筑是集市或每日节庆竞技场，叠加魅力专长 `PublicSpeaker`。
  - 副作用：无，纯计算；仅读取 `Building` / `Town` / 总督专长，不改任何世界状态。
  - 调用时机：由 `Building.AddEffectOfBuilding` 在聚合路径中调用（分数经 `BuildingEffectIncrementType.Add` 累加或 `AddFactor` 乘因子并入结果）；由 `DefaultSettlementPatrolModel.GetPartyTemplateForPatrolParty` 直接调用读取 `PatrolPartyStrength`。

## 示例

读取某城镇集市建筑对食物储备的每日贡献（含专长加成分解）：

```csharp
Building marketplace = town.Buildings.FirstOrDefault(
    b => b.BuildingType == DefaultBuildingTypes.SettlementMarketplace);
if (marketplace != null)
{
    ExplainedNumber foodStock = Campaign.Current.Models.BuildingEffectModel
        .GetBuildingEffect(marketplace, BuildingEffectEnum.FoodStock);
    float foodStockPerDay = foodStock.ResultNumber;
}
```

直接读取巡逻队营房对巡逻队强度的等级，供巡逻队模型选择模板：

```csharp
float strength = Campaign.Current.Models.BuildingEffectModel
    .GetBuildingEffect(guardHouse, BuildingEffectEnum.PatrolPartyStrength).ResultNumber;
int tier = (int)strength;
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [Building](../Building) · [BuildingType](../BuildingType) · [Town](../Town) · [Settlement](../Settlement) · [DefaultBuildingEffectModel](../DefaultBuildingEffectModel) · [SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementSecurityModel](../SettlementSecurityModel) · [SettlementMilitiaModel](../SettlementMilitiaModel) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [ExplainedNumber](../ExplainedNumber)
