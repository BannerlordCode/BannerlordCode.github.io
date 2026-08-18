---
title: "DefaultBuildingEffectModel"
description: "建筑每日效果（忠诚、治安、民兵、税收、食物、繁荣、驻军容量等）的默认计算实现，由 Campaign 在运行时通过 Campaign.Current.Models.BuildingEffectModel 解析，被各定居点规则模型在每日结算时经 Town.AddEffectOfBuildings 循环调用。"
---

# DefaultBuildingEffectModel

**命名空间：** TaleWorlds.CampaignSystem.GameComponents
**模块：** TaleWorlds.CampaignSystem
**类型：** public class DefaultBuildingEffectModel : BuildingEffectModel
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultBuildingEffectModel.cs

## 概述

该类型是 `BuildingEffectModel` 抽象契约的默认实现，负责把“一座已建成的建筑在某效果维度上每日应产出多少”折算成一个带明细项的 `ExplainedNumber`。它本身不持有任何世界状态，真正的累加发生在各定居点规则模型（`SettlementLoyaltyModel`、`SettlementSecurityModel`、`SettlementMilitiaModel`、`DefaultSettlementTaxModel` 等）每日调用 `Town.AddEffectOfBuildings` 时，由各建筑经 `Building.AddEffectOfBuilding` 把本模型的返回值求和到对应指标上。

## 心智模型

DefaultBuildingEffectModel 是建筑效果这一扩展点的默认实现：`SandBoxManager` 在构造 `Game` 时用 `AddModel(new DefaultBuildingEffectModel())` 把它注册进 `GameModels`，战役启动时 `GameModels` 通过 `GetGameModel<BuildingEffectModel>()` 解析并把唯一实例缓存到 `BuildingEffectModel` 属性，运行时统一用 `Campaign.Current.Models.BuildingEffectModel` 取得——它不参与存档序列化，也不会在每个 tick 被重新构造。每日结算时，各定居点规则模型（忠诚/治安/民兵/税收/食物/繁荣等）调用 `Town.AddEffectOfBuildings(BuildingEffectEnum, ref ExplainedNumber)`，后者遍历城镇里的建筑、对每座 `Building.AddEffectOfBuilding` 调用 `GetBuildingEffect`，再按 `BuildingEffectIncrementType`（`Add` 或 `AddFactor`）把结果并入 `ExplainedNumber`。要改某类建筑的产出就继承 `BuildingEffectModel` 并在子模块里用 `Game.Current.ReplaceModel` 替换默认实现；要“执行”实际产出应走对应规则模型/行为，绝不要把本模型当成写世界状态的入口，也不要直接去改 `Building` 上的字段。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“某座建筑在某个 `BuildingEffectEnum` 维度上每日产出多少”的计算规则时，读取 `Campaign.Current.Models.BuildingEffectModel.GetBuildingEffect(...)` 的返回值，或提供一个新的派生类覆盖 `GetBuildingEffect` 并通过子模块注册替换默认实现。
- **不要使用**：不要用本模型去“执行”建筑产出——它只做纯折算，真正的忠诚/治安/民兵/税收等数值由 `Town` 与各定居点规则模型累加在世界状态上。不要直接给 `Building` 的任何字段赋值来制造效果，也不要换掉模型后却让调用方（`Town.AddEffectOfBuildings` 与各规则模型）按旧假设解读 `Add`/`AddFactor` 的增量类型；更不要在 `Mission` 或战斗层里取 `Campaign.Current.Models`。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<BuildingEffectModel>()` 解析并缓存实例。
- [BuildingEffectModel](../BuildingEffectModel) —— 本类型的抽象基契约（仅一个抽象方法 `GetBuildingEffect`）。
- [BuildingEffectEnum](../BuildingEffectEnum) —— `GetBuildingEffect` 的第二个参数，枚举出全部建筑效果维度（忠诚、治安、民兵、税收等）。
- [BuildingEffectIncrementType](../BuildingEffectIncrementType) —— 决定 `Building.AddEffectOfBuilding` 如何把本模型结果并入 `ExplainedNumber`：`Add` 叠加值，或 `AddFactor` 叠加因子。

下游与协同系统（调用方）：

- [Building](../Building) —— `AddEffectOfBuilding` 内部调用本模型并据 `BuildingEffectIncrementType` 累加结果；`_currentLevel != 0` 且（非每日项目或正为当前默认项目）且拥有该效果时才计入。
- [BuildingType](../BuildingType) —— 提供 `GetBaseBuildingEffectAmount(effect, level)` 作为基础量，并声明 `IsDailyProject` 与具体的效果维度。
- [Town](../Town) / [Settlement](../Settlement) —— `Town.AddEffectOfBuildings` 是每日效果汇总的真正循环，被约 25 个规则模型调用。
- [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) —— 驱动建筑升级与每日项目推进，是建筑进入“已建成/当前默认项目”状态的实际管理者。
- [SettlementLoyaltyModel](../SettlementLoyaltyModel) —— 在 `Town.AddEffectOfBuildings(BuildingEffectEnum.Loyalty, ...)` 中调用本模型。
- [SettlementSecurityModel](../SettlementSecurityModel) —— 在 `Town.AddEffectOfBuildings(BuildingEffectEnum.SecurityPerDay, ...)` 中调用本模型。
- [BuildingModel](../BuildingModel) —— 同属建筑系统模型簇，负责建造/升级成本与条件，与本模型常被一起阅读。
- [DefaultBuildingTypes](../DefaultBuildingTypes) —— 提供 `CastleGranary`、`SettlementWarehouse`、`SettlementMarketplace`、`SettlementDailyFestivalAndGames` 等用于特殊加成判定的建筑类型常量。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.BuildingEffectModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改变了基础量或加成，但真正把结果累加进忠诚/治安/民兵/税收等的是 `Town.AddEffectOfBuildings` 与各规则模型。只替换模型、却让调用方按旧假设处理 `Add`/`AddFactor`，会出现界面预测与实际数值不一致。
- **`DenarByBoundVillageHeartPerDay` 依赖炉灶数**：该维度的基础量会被“所有附属村庄 `Village.Hearth` 之和 × 基础量”重写。若你的派生类忽略这点、只返回固定基础量，绑定的税收/收入会比原版低得多或高得多，且对村庄被毁/易主的响应会失真。
- **`BuildingEffectIncrementType` 的差异**：同一座建筑在 `Loyalty` 上可能是 `Add`（叠加绝对值），在另一些维度上是 `AddFactor`（叠加比例因子）。错误地假设所有维度都是加法，会把因子当成绝对值加入，放大或缩小效果。
- **未建成或越级建筑为空产出**：`Building.AddEffectOfBuilding` 在 `_currentLevel == 0`（未建成）或 `> 3`，以及每日项目但非 `Town.CurrentDefaultBuilding` 时直接跳过本模型。覆盖 `GetBuildingEffect` 时若假定一定会被调用，会在这些分支上得不到预期结果。

## 成员说明

### 建筑效果折算

- **`GetBuildingEffect(Building building, BuildingEffectEnum effect)`**
  - 用途：返回该建筑在指定效果维度上的每日产出（`ExplainedNumber`，含可展开的加成明细）。计算顺序为：先取基础量 `building.BuildingType.GetBaseBuildingEffectAmount(effect, building.CurrentLevel)`；若 `effect == DenarByBoundVillageHeartPerDay`，则把基础量重写为“该城镇所有附属村庄 `Village.Hearth` 之和 × 基础量”；若 `effect == FoodStock` 且建筑类型是 `CastleGranary` 或 `SettlementWarehouse`，叠加工程专长 `Engineering.Battlements`；随后无条件叠加管理专长 `Steward.Contractors`；若建筑是每日项目（`BuildingType.IsDailyProject`）再叠加 `Steward.MasterOfPlanning`；若建筑是 `SettlementMarketplace` 或 `SettlementDailyFestivalAndGames` 再叠加魅力专长 `Charm.PublicSpeaker`。所有加成均经 `PerkHelper.AddPerkBonusForTown` 计算。
  - 副作用：无；纯折算，只构造并返回 `ExplainedNumber`，不写任何世界状态。
  - 调用时机：经由 `Building.AddEffectOfBuilding` 在 `Town.AddEffectOfBuildings` 每日循环中被调用；也由 `DefaultSettlementPatrolModel` 直接调用以取得 `PatrolPartyStrength`（守备巡逻队强度）。

## 示例

查询某座建筑在“忠诚”维度上的每日产出（含专长加成明细）：

```csharp
Town town = Settlement.CurrentSettlement.Town;
Building market = town.Buildings.GetRandomElement(); // 取城镇中的一座建筑
ExplainedNumber loyaltyEffect = Campaign.Current.Models.BuildingEffectModel
    .GetBuildingEffect(market, BuildingEffectEnum.Loyalty);
float dailyLoyalty = loyaltyEffect.ResultNumber;
```

再现各规则模型在每日结算时汇总建筑效果的循环（来自 `Town.AddEffectOfBuildings`）：

```csharp
// 治安每日变化：遍历所有建筑，经 Building.AddEffectOfBuilding 调用 GetBuildingEffect 后并入结果
ExplainedNumber security = new ExplainedNumber();
town.AddEffectOfBuildings(BuildingEffectEnum.SecurityPerDay, ref security);
float dailySecurity = security.ResultNumber;
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [BuildingEffectModel](../BuildingEffectModel) · [BuildingEffectEnum](../BuildingEffectEnum) · [BuildingEffectIncrementType](../BuildingEffectIncrementType) · [Building](../Building) · [BuildingType](../BuildingType) · [Town](../Town) · [Settlement](../Settlement) · [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) · [SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementSecurityModel](../SettlementSecurityModel) · [BuildingModel](../BuildingModel) · [DefaultBuildingTypes](../DefaultBuildingTypes)
