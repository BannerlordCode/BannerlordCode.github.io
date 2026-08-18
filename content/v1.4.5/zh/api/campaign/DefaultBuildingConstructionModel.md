---
title: "DefaultBuildingConstructionModel"
description: "城镇与城堡每日建筑工程力（Construction Power）以及“储备加速”消耗/产出规则的具体默认实现，由 Campaign 在启动时通过 GameModels 注册并解析，由 Town.Construction 与 BuildingsCampaignBehavior 在每日结算时驱动。"
---

# DefaultBuildingConstructionModel

**命名空间：** TaleWorlds.CampaignSystem.GameComponents
**模块：** TaleWorlds.CampaignSystem
**类型：** public class DefaultBuildingConstructionModel : BuildingConstructionModel
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultBuildingConstructionModel.cs

## 概述

该模型是 `BuildingConstructionModel` 抽象契约的具体默认实现，负责推导每个城镇（Town）或城堡（Castle）每日可用于推进建筑工期的“建筑工程力”（Construction Power），并给出“储备加速”（Boost）的消耗成本与产出量。基础值来自定居点繁荣度，再叠加总督技能/专长、在建国建筑效果、市场产出、忠诚度、文化特性与储备加速；真正的建筑进度由 [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) 在每日结算时把 `Town.Construction` 累加到 `Building.BuildingProgress` 上。

## 心智模型

`DefaultBuildingConstructionModel` 是 `GameModels` 在战役启动时按类型解析并缓存的默认实现，运行时统一通过 `Campaign.Current.Models.BuildingConstructionModel` 取得（实例实际是 `DefaultBuildingConstructionModel`）。它本身不参与存档序列化，也不在每个 tick 被重新构造。`Town.Construction` 与 `Town.ConstructionExplanation` 这两个属性直接把每日建筑力委托给 `CalculateDailyConstructionPower`；而 [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) 在 `TickCurrentBuildingForTown` 中先把 `Town.Construction` 累加到当前在建工程，再用 `GetBoostCost` 从 `Town.BoostBuildingProcess` 储备中扣减加速消耗。要改建筑速度就继承 `BuildingConstructionModel` 并注册替换实现；要“读”建筑力直接走模型，绝不要手动给 `Building.BuildingProgress` 或 `Town.BoostBuildingProcess` 赋值来伪造进度——真正的写世界入口是建筑行为。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“某城镇每天能推进多少建筑进度”“加速储备如何换算成额外建筑力”“NPC 估算完工天数用哪种基础值”时，读取 `Campaign.Current.Models.BuildingConstructionModel` 的返回值，或提供新的派生类覆盖抽象成员并通过子模块注册替换默认实现。
- **不要使用**：不要用模型去直接改 `Building.BuildingProgress`、`Town.BoostBuildingProcess` 或任何世界状态——模型是无状态的纯计算，真正的累加由 [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) 与 [BuildingModel](../BuildingModel) 的建造流程完成。也不要在 `Mission`/战斗层取 `Campaign.Current.Models`，它属于 Campaign 层；更不要只替换模型而忽略写回路径（见风险）。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<BuildingConstructionModel>()` 解析并缓存实例。
- [BuildingConstructionModel](../BuildingConstructionModel) —— 抽象契约（本类的基类），定义全部抽象成员。

下游与协同系统（调用方）：

- [Town](../Town) —— `Town.Construction` 与 `Town.ConstructionExplanation` 直接调用 `CalculateDailyConstructionPower` 取得每日建筑力及分解。
- [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) —— 每日 `TickCurrentBuildingForTown` 把 `Town.Construction` 累加进在建工程进度，并用 `GetBoostCost` 消耗 `Town.BoostBuildingProcess` 储备。
- `BuildingHelper.GetDaysToComplete`（位于 `Helpers`）借助 `TownBoostCost`/`CastleBoostCost` 与 `CalculateDailyConstructionPowerWithoutBoost` 估算剩余工期，是建筑管理界面的工期数据源。

相关模型与类型：

- [BuildingModel](../BuildingModel) —— 同属建筑系统的规则模型，裁决某建筑类型能否加入城镇、建造上限等；常与建筑力一起派生替换。
- [BuildingType](../BuildingType) —— 建造流程迭代的建筑类型枚举；建筑力计算会读取当前在建 `Building.BuildingType` 是否为军事/市场项目以套用专长。
- [SettlementLoyaltyModel](../SettlementLoyaltyModel) —— 建筑力公式随 `Town.Loyalty` 给出加成/惩罚，与忠诚度模型共同塑造定居点发展速度。
- [SettlementSecurityModel](../SettlementSecurityModel) —— 同属定居点规则模型簇，常与建筑力模型一起被 mod 派生替换以统一调校城镇。
- [BuildingEffectEnum](../BuildingEffectEnum) —— `CalculateDailyConstructionPower` 通过 `Town.AddEffectOfBuildings(BuildingEffectEnum.ConstructionPerDay, …)` 汇总建筑效果。
- [ExplainedNumber](../ExplainedNumber) —— `CalculateDailyConstructionPower` 的返回类型，用于携带带说明项的建筑力分解。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.BuildingConstructionModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`；在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该实现是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改变了建筑力公式或加速量，但真正把 `Town.Construction` 累加到 `Building.BuildingProgress`、真正扣减 `Town.BoostBuildingProcess` 的是 [BuildingsCampaignBehavior](../BuildingsCampaignBehavior)。只替换模型、却让行为按旧假设处理进度/储备，会出现界面预估工期与实测推进不符。
- **极低忠诚度封顶为 0**：`CalculateDailyConstructionPower` 在 `Town.Loyalty <= 25f` 时调用 `result.LimitMax(0f)`，意味着叛心严重的城镇建筑力被直接钳制为 0。派生类若忽略这一点、只调高繁荣度基础值，仍会发现低忠诚城镇“算得出正数却实际不推进”。
- **加速量依赖储备与总督专长**：`GetBoostAmount` 与公式内的 boost 项都依赖 `Town.BoostBuildingProcess` 与总督的 `Steward.Relocation`/`Trade.SpringOfGold` 等专长；若你的 mod 移除了这些专长或不再维护储备字段，覆盖加速公式时会出现与默认完全不同的数值分布。

## 成员说明

### 每日建筑力计算

- **`CalculateDailyConstructionPower(Town town, bool includeDescriptions = false)`**
  - 用途：返回该城镇/城堡当日可用于推进建筑工期的建筑力（`ExplainedNumber`，最终以 `(int)ResultNumber` 取整）。汇总项包括：繁荣度基础值（`Town.Prosperity * 0.01f`）、储备加速项（`BoostBuildingProcess > 0` 时按 `GetBoostAmount(town) * Min(1, BoostBuildingProcess/GetBoostCost(town))` 计，城镇总督具 `Engineering.Clockwork` 再额外加成）、总督技能 `TownProjectBuildingBonus` 与专长 `Steward.ForcedLabor`（城镇）、监狱囚犯触发的 `ForcedLabor` 因子、城堡 `Engineering.MilitaryPlanner` / 城镇 `Engineering.Carpenters` 因子、对城墙/兵营类在建项目的 `Engineering.Stonecutters` 因子、市场产出物（`ItemCategory.Property.BonusToProduction` 求和后 `* 0.25f`）、军事项目 `TwoHanded.Confidence`、市场项目 `Trade.SelfMadeMan`、`Town.AddEffectOfBuildings(BuildingEffectEnum.ConstructionPerDay, …)`，以及忠诚度调节（≥75 给最高 +0.2 因子、25~50 给递减惩罚、≤25 直接 `LimitMax(0)`）与巴丹文化 `BattanianConstructionFeat`（忠诚>25 且拥有时加因子），最后 `LimitMin(0)`。
  - 副作用：无，纯计算。
  - 调用时机：由 [Town](../Town) 的 `Construction` 与 `ConstructionExplanation` 属性在每日结算与界面刷新时调用；传入 `includeDescriptions: true` 可得带说明项的分解（如“Construction from Market”“High Loyalty”等）。

- **`CalculateDailyConstructionPowerWithoutBoost(Town town)`**
  - 用途：返回不含储备加速项的建筑力整数（内部以 `omitBoost: true` 调用同一核心算法）。供工期估算 `GetDaysToComplete` 在“储备耗尽后”的剩余天数使用。
  - 副作用：无，纯计算。
  - 调用时机：仅由 `BuildingHelper.GetDaysToComplete` 在 `BoostBuildingProcess` 不足以覆盖剩余工期时调用，作为无加速状态下的日均推进量。

### 加速储备（Boost）

- **`TownBoostCost`**（属性，`int`，默认 `500`）
  - 用途：城镇在消耗一次储备加速时从 `Town.BoostBuildingProcess` 扣减的成本。被 `GetBoostCost` 在 `town` 非城堡时返回，并被 [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) 用于每日扣减、`GetDaysToComplete` 用于估算加速可覆盖的天数。
  - 副作用：无。调用时机：作为 `GetBoostCost` 与进度/工期逻辑的输入。

- **`TownBoostBonus`**（属性，`int`，默认 `50`）
  - 用途：城镇在储备充足时单日可额外获得的建筑力基数（再按 `BoostBuildingProcess/GetBoostCost` 比例缩放）。被 `GetBoostAmount` 在非城堡时作为基础量。
  - 副作用：无。

- **`CastleBoostCost`**（属性，`int`，默认 `250`）
  - 用途：城堡版 `TownBoostCost`，成本更低。被 `GetBoostCost` 在 `town.IsCastle` 时返回。
  - 副作用：无。

- **`CastleBoostBonus`**（属性，`int`，默认 `20`）
  - 用途：城堡版 `TownBoostBonus`，基数更小。被 `GetBoostAmount` 在 `town.IsCastle` 时作为基础量。
  - 副作用：无。

- **`GetBoostCost(Town town)`**
  - 用途：返回该定居点本次加速消耗的成本——`town.IsCastle` 取 `CastleBoostCost`(250)，否则 `TownBoostCost`(500)。
  - 副作用：无，纯查询。
  - 调用时机：[BuildingsCampaignBehavior](../BuildingsCampaignBehavior) 每日从 `Town.BoostBuildingProcess` 扣减该值；`BuildingHelper.GetDaysToComplete` 用它把储备折算成可加速天数。

- **`GetBoostAmount(Town town)`**
  - 用途：返回该定居点储备加速可提供的建筑力基数——城堡取 `CastleBoostBonus`(20)、城镇取 `TownBoostBonus`(50)，再叠加总督 `Steward.Relocation` 与 `Trade.SpringOfGold` 专长加成（`num + (int)(num * num2)`）。最终在 `CalculateDailyConstructionPower` 内按 `Min(1, BoostBuildingProcess/GetBoostCost)` 比例缩放后加入建筑力。
  - 副作用：无，纯查询。
  - 调用时机：仅被核心算法 `CalculateDailyConstructionPowerInternal` 在 `BoostBuildingProcess > 0` 时调用以计算加速项。

## 示例

读取某城镇今日的每日建筑力（含说明分解）：

```csharp
Town town = Settlement.CurrentSettlement.Town;
ExplainedNumber power = Campaign.Current.Models.BuildingConstructionModel
    .CalculateDailyConstructionPower(town, includeDescriptions: true);
float dailyConstruction = power.ResultNumber;
```

估算当前在建项目还需多少天，并读取加速一次所需的储备成本：

```csharp
Building current = town.BuildingsInProgress.Peek();
int daysLeft = BuildingHelper.GetDaysToComplete(current, town);
int oneBoostCost = Campaign.Current.Models.BuildingConstructionModel.GetBoostCost(town);
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[BuildingConstructionModel](../BuildingConstructionModel) · [BuildingModel](../BuildingModel) · [BuildingType](../BuildingType) · [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) · [Town](../Town) · [SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementSecurityModel](../SettlementSecurityModel) · [BuildingEffectEnum](../BuildingEffectEnum) · [ExplainedNumber](../ExplainedNumber) · [Campaign](../Campaign) · [GameModels](../GameModels)
