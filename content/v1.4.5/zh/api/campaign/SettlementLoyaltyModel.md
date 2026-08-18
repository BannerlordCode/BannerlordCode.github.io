---
title: "SettlementLoyaltyModel"
description: "计算城镇忠诚度的每日增减构成（粮食、安全、文化、政策、建筑、议题、要人关系、总督专长等）并暴露叛变/叛乱阈值与高忠诚税收加成规则的计算模型，由 Campaign 在运行时通过 Campaign.Current.Models.SettlementLoyaltyModel 解析，被城镇每日结算、叛乱行为、要人关系行为与税收/繁荣/民兵模型在运行时调用。"
---

# SettlementLoyaltyModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class SettlementLoyaltyModel : MBGameModel<SettlementLoyaltyModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementLoyaltyModel.cs

## 概述

该模型集中推导每个城镇（[Town](../Town)）每日忠诚度的净变化率，并把变化拆解为粮食储备、安全度、所有者/总督文化、王国政策、建筑效果、议题效果、要人关系、总督专长与回归中位数的“漂移”等可解释项；同时暴露叛变、叛乱与高忠诚税收加成所需的若干阈值常量。它只做纯计算，真正的忠诚度累加发生在 [Town](../Town) 的每日结算里，而“忠诚度过低则发动叛乱”的判定由 [RebellionsCampaignBehavior](../RebellionsCampaignBehavior) 读取其阈值后执行。

## 心智模型

SettlementLoyaltyModel 是一个纯计算的规则扩展点：`Campaign` 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出唯一实例（`DefaultSettlementLoyaltyModel`）并持有，运行时统一用 `Campaign.Current.Models.SettlementLoyaltyModel` 取得；它不参与存档序列化，也不会在每个 tick 被重新构造。`Campaign` 的每日推进循环（`DailyTickSettlementEvent` 中调用 `settlement.Town.DailyTick()`）会读取 [Town](../Town) 的 `LoyaltyChange` 属性，而该属性内部正是调用 `CalculateLoyaltyChange(this)` 后把结果累加进 `Town.Loyalty`。同期的 [RebellionsCampaignBehavior](../RebellionsCampaignBehavior) 也读取 `RebellionStartLoyaltyThreshold` 与 `RebelliousStateStartLoyaltyThreshold` 来决定是否发起叛乱、标记 `Town.InRebelliousState`。[DefaultSettlementTaxModel](../DefaultSettlementTaxModel)、[SettlementProsperityModel](../SettlementProsperityModel)、[SettlementMilitiaModel](../SettlementMilitiaModel) 则反向读取本模型的阈值来调整税收、繁荣与民兵。要改规则就继承并注册一个替换实现；要“执行”忠诚度变化必须走 [Town](../Town) 的每日结算或对应的 Action，绝不要把模型当成写世界的入口或直接改 `Town.Loyalty`。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“城镇忠诚度如何变化 / 何时算叛乱”的规则时，读取 `Campaign.Current.Models.SettlementLoyaltyModel` 的返回值或阈值常量，或提供一个新的派生类覆盖其抽象成员并通过子模块注册替换默认实现。
- **不要使用**：不要亲自给 `Town.Loyalty` 赋值来“让某城变忠诚”——模型是无状态纯函数，真正的状态累加由 `Town.DailyTick()` 完成。要改变世界状态应走城镇每日结算或对应的 `*Action`，而不是篡改模型；也不要在 `Mission`/战斗层取 `Campaign.Current.Models` 去读忠诚度，那是错误的访问层。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<SettlementLoyaltyModel>()` 解析并缓存实例。
- [IssueModel](../IssueModel) —— `DefaultSettlementLoyaltyModel` 在议题效果分解中调用 `Campaign.Current.Models.IssueModel.GetIssueEffectsOfSettlement(DefaultIssueEffects.SettlementLoyalty, …)`。
- [SettlementSecurityModel](../SettlementSecurityModel) —— 同属定居点规则模型簇；安全度是忠诚度的输入之一（见 `HighSecurityLoyaltyEffect` / `LowSecurityLoyaltyEffect`）。
- [Settlement](../Settlement) / [Town](../Town) / [Village](../Village) —— 调用方，[Town](../Town) 通过 `LoyaltyChange` / `LoyaltyChangeExplanation` 属性暴露本模型的返回值。

建筑相关（忠诚度分解项的重要来源）：

- [BuildingModel](../BuildingModel) —— 定义建筑及其每级效果；忠诚度分解通过 `Town.AddEffectOfBuildings(BuildingEffectEnum.Loyalty, …)` 读取各忠诚类建筑的加成数值，其具体幅度由各建筑经 `BuildingModel` 计算。
- [BuildingEffectModel](../BuildingEffectModel) —— 提供 `BuildingEffectEnum.Loyalty` 对应的每级效果值，是上述 `AddEffectOfBuildings` 的数据来源。
- [BuildingEffectEnum](../BuildingEffectEnum) —— `Loyalty` 枚举值即忠诚分解项“建筑”的键。
- [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) —— 负责建筑升级与每日结算；建筑升级会改变 `AddEffectOfBuildings` 输出的忠诚加成。
- [BuildingConstructionModel](../BuildingConstructionModel) —— 裁决建筑能否开建，间接决定哪些忠诚建筑会被建起并参与分解。

下游与协同系统（调用方）：

- [Town](../Town) —— `LoyaltyChange` 与 `LoyaltyChangeExplanation` 属性直接调用 `CalculateLoyaltyChange(this[, includeDescriptions])`；`DailyTick()` 把 `LoyaltyChange` 累加进 `Loyalty`。
- [RebellionsCampaignBehavior](../RebellionsCampaignBehavior) —— 读取 `RebellionStartLoyaltyThreshold`、`RebelliousStateStartLoyaltyThreshold`、`LoyaltyBoostAfterRebellionStartValue` 来决定发动叛乱、标记反叛状态及叛乱后的忠诚回弹。
- [CharacterRelationCampaignBehavior](../CharacterRelationCampaignBehavior) —— 读取 `ThresholdForNotableRelationBonus` 与 `DailyNotableRelationBonus` 给与城镇高忠诚要人关系好的领主每日加关系。
- [DefaultSettlementTaxModel](../DefaultSettlementTaxModel) —— 读取 `ThresholdForTaxBoost`、`ThresholdForTaxCorruption`、`ThresholdForHigherTaxCorruption` 以及 `CalculateGoldGainDueToHighLoyalty` / `CalculateGoldCutDueToLowLoyalty` 计算税收增减。
- [SettlementProsperityModel](../SettlementProsperityModel) —— 读取 `ThresholdForProsperityBoost`、`ThresholdForProsperityPenalty`、`HighLoyaltyProsperityEffect`、`LowLoyaltyProsperityEffect` 把忠诚映射到繁荣变化。
- [SettlementMilitiaModel](../SettlementMilitiaModel) —— 读取 `RebelliousStateStartLoyaltyThreshold` 与 `MilitiaBoostPercentage` 计算叛变状态下民兵的涨幅。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 上述行为的基类，是实际驱动调用方。
- [Hero](../Hero) —— 要人（notable）关系是忠诚度的输入之一（`ThresholdForNotableRelationBonus` / `DailyNotableRelationBonus` 围绕其关系运作）。
- [Clan](../Clan) / [Kingdom](../Kingdom) —— 所有者文化、总督文化与王国政策是忠诚度分解的关键来源。
- [ExplainedNumber](../ExplainedNumber) —— `CalculateLoyaltyChange` 的返回类型，用于携带带说明项的数值。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.SettlementLoyaltyModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models.SettlementLoyaltyModel` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改变了忠诚公式或阈值，但真正累加 `Town.Loyalty` 的是 `Town.DailyTick()`，真正发动叛乱的是 [RebellionsCampaignBehavior](../RebellionsCampaignBehavior)。只替换模型、却让行为按旧假设处理忠诚数值，会出现“判定通过却流程不推进”或忠诚与界面/叛乱不一致。
- **阈值常量的连带效应**：税收、繁荣、民兵模型都读取本模型的阈值；只改 `RebellionStartLoyaltyThreshold` 而不改税收/繁荣模型的对应阈值，会让经济系统仍按旧忠诚区间运作，造成规则间的割裂。
- **文化与政策的本地假设**：默认实现中所有者文化与定居点文化不同会一次性扣 `SettlementOwnerDifferentCultureLoyaltyEffect`（默认 `-3`），且若干政策（如 `ImperialTowns`、`Citizenship`）按文化同异给出正负项。覆盖这些常量时要同步考虑其对叛乱节奏的整体影响。
- **建筑与忠诚的双向沉默**：忠诚度分解依赖 `Town.AddEffectOfBuildings(BuildingEffectEnum.Loyalty, …)`，而建筑等级又由 [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) 在每日结算里推进。若你替换了 [BuildingModel](../BuildingModel) 却改了 `Loyalty` 效果，或替换了本模型却没同步建筑效果，忠诚的“建筑项”会和界面/预期脱节。

## 成员说明

### 忠诚度每日变化计算

- **`CalculateLoyaltyChange(Town town, bool includeDescriptions = false)`**
  - 用途：返回该城镇每日忠诚度净变化的详细构成（`ExplainedNumber`）。默认实现依次累加：饥饿惩罚（断粮 `-1`，断粮超过 `AdditionalStarvationPenaltyStartDay`/14 天再 `-1`）、总督文化（同文化 `+1`、异文化 `-1`）、所有者文化（异文化 `-3`）、王国各项政策（如 `ForgivenessOfDebts` +2、`GrazingRights` +0.5、`TrialByJury` +0.5、`TribunesOfThePeople` +1、`ImperialTowns` 依是否统治家族 ±1、`DebasementOfTheCurrency` -1、`HuntingRights` -0.2、`Citizenship` 依文化同异 ±0.5）、建筑忠诚效果（`Town.AddEffectOfBuildings(BuildingEffectEnum.Loyalty, …)`，数据来自 [BuildingEffectModel](../BuildingEffectModel)）、议题效果（`IssueModel.GetIssueEffectsOfSettlement(DefaultIssueEffects.SettlementLoyalty, …)`）、安全度（高于 `SettlementLoyaltyChangeDueToSecurityThreshold`/50 时按 `HighSecurityLoyaltyEffect`、低于时按 `LowSecurityLoyaltyEffect` 映射）、要人关系（支持所有者部族 `+0.5`、支持交战部族 `-0.5`）、总督专长（经 `PerkHelper.AddPerkBonusForTown` 累加 `HeroicLeader`、`PhysicianOfPeople`、`Durable`、`Discipline`、`WellStraped` 及主队/领袖的 `Charm.Parade` 等），以及回归中位数的漂移 `-0.1 * (Loyalty - LoyaltyDriftMedium)`。
  - 副作用：无，纯计算；传入 `includeDescriptions: true` 时返回的 `ExplainedNumber` 会带有各项说明文本，供界面或调试使用。
  - 调用时机：[Town](../Town) 的 `LoyaltyChange` 与 `LoyaltyChangeExplanation` 属性在每日结算与界面刷新时读取；`TownManagementVM` 用它预览次日忠诚度变化；[RebellionsCampaignBehavior](../RebellionsCampaignBehavior) 在判断反叛状态时也读取带说明版本的符号。

### 高/低忠诚对税收的加成与惩罚

- **`CalculateGoldGainDueToHighLoyalty(Town town, ref ExplainedNumber explainedNumber)`**
  - 用途：向传入的税收解释数累加“高忠诚税收增益”因子。默认实现按 `MBMath.Map(town.Loyalty, ThresholdForTaxBoost/75, 100, 0, 0.2)` 映射出 `0~0.2` 的因子（忠诚越高增益越大），并以“Loyalty”文本记录。
  - 副作用：只修改 `ref` 传入的 `ExplainedNumber`，不改动任何世界状态。
  - 调用时机：仅由 [DefaultSettlementTaxModel](../DefaultSettlementTaxModel) 在计算城镇税收时调用。

- **`CalculateGoldCutDueToLowLoyalty(Town town, ref ExplainedNumber explainedNumber)`**
  - 用途：向传入的税收解释数累加“低忠诚税收腐败”因子。默认实现按 `MBMath.Map(town.Loyalty, ThresholdForHigherTaxCorruption/25, ThresholdForTaxCorruption/50, -0.5, 0)` 映射出 `-0.5~0` 的因子（忠诚越低扣得越多），并以“Corruption”文本记录。
  - 副作用：只修改 `ref` 传入的 `ExplainedNumber`，不改动任何世界状态。
  - 调用时机：仅由 [DefaultSettlementTaxModel](../DefaultSettlementTaxModel) 在计算城镇税收时调用。

### 阈值与常量（抽象属性）

- **`RebellionStartLoyaltyThreshold`**（`int`，默认 `15`）
  - 用途：忠诚度降到该值即视为“可发起叛乱”的硬阈值。[RebellionsCampaignBehavior](../RebellionsCampaignBehavior) 据此判断是否真正发动叛乱。
  - 副作用：无。调用时机：叛乱行为每日判定读取。

- **`RebelliousStateStartLoyaltyThreshold`**（`int`，默认 `25`）
  - 用途：忠诚度降到该值即进入“反叛状态”并标记 `Town.InRebelliousState`；同时是民兵模型计算叛变涨幅的起点。多个 UI（如 `TownManagementVM`、`SettlementMenuOverlayVM`、`KingdomSettlementItemVM`、`ClanSettlementItemVM`）用它显示叛变警告。
  - 副作用：无。调用时机：叛乱行为、[SettlementMilitiaModel](../SettlementMilitiaModel)、城镇管理界面读取。

- **`LoyaltyBoostAfterRebellionStartValue`**（`int`，默认 `5`）
  - 用途：叛乱开始后，每经过一天（最多 30 天）按 `MBMath.Map(days-1, 0, 30, 该值, 0)` 给忠诚度一个回弹加成，模拟叛军被镇压后的忠诚回升。
  - 副作用：无。调用时机：[RebellionsCampaignBehavior](../RebellionsCampaignBehavior) 在叛乱期间每日累加。

- **`MilitiaBoostPercentage`**（`int`，默认 `200`）
  - 用途：叛变状态下民兵可获得的涨幅百分比上限，被 [SettlementMilitiaModel](../SettlementMilitiaModel) 用 `MBMath.Map(loyalty, 0, RebelliousStateStartLoyaltyThreshold, 该值, 0)` 映射。
  - 副作用：无。调用时机：[SettlementMilitiaModel](../SettlementMilitiaModel) 计算民兵时读取。

- **`ThresholdForTaxBoost` / `ThresholdForTaxCorruption` / `ThresholdForHigherTaxCorruption`**（`int`，默认 `75` / `50` / `25`）
  - 用途：税收系统的三个忠诚分界：高于 `ThresholdForTaxBoost` 才有税收增益，低于 `ThresholdForTaxCorruption` 出现轻度腐败，低于 `ThresholdForHigherTaxCorruption` 腐败最重。被 `CalculateGoldGainDueToHighLoyalty` / `CalculateGoldCutDueToLowLoyalty` 与 [DefaultSettlementTaxModel](../DefaultSettlementTaxModel) 共用。
  - 副作用：无。调用时机：税收计算读取。

- **`ThresholdForProsperityBoost` / `ThresholdForProsperityPenalty`**（`int`，默认 `75` / `25`）
  - 用途：繁荣系统的两个忠诚分界：忠诚高于 `ThresholdForProsperityBoost` 时按 `HighLoyaltyProsperityEffect`（默认 `0.5`）加成繁荣，低于 `ThresholdForProsperityPenalty` 时按 `LowLoyaltyProsperityEffect`（默认 `-1`）扣减繁荣。
  - 副作用：无。调用时机：[SettlementProsperityModel](../SettlementProsperityModel) 计算繁荣时读取。

- **`HighLoyaltyProsperityEffect` / `LowLoyaltyProsperityEffect`**（`float` / `int`，默认 `0.5` / `-1`）
  - 用途：高/低忠诚对应繁荣变化的幅度，配合上面的繁荣阈值使用。
  - 副作用：无。调用时机：[SettlementProsperityModel](../SettlementProsperityModel) 读取。

- **`SettlementLoyaltyChangeDueToSecurityThreshold`**（`int`，默认 `50`）
  - 用途：安全度对忠诚影响的转折点：安全高于它按 `HighSecurityLoyaltyEffect`（默认 `+1`）映射、低于它按 `LowSecurityLoyaltyEffect`（默认 `-2`）映射。
  - 副作用：无。调用时机：`CalculateLoyaltyChange` 内部的安全项读取。

- **`HighSecurityLoyaltyEffect` / `LowSecurityLoyaltyEffect`**（`float`，默认 `1` / `-2`）
  - 用途：安全度高于/低于阈值时对忠诚的边际效应，配合 `SettlementLoyaltyChangeDueToSecurityThreshold` 使用。
  - 副作用：无。调用时机：`CalculateLoyaltyChange` 内部读取。

- **`GovernorSameCultureLoyaltyEffect` / `GovernorDifferentCultureLoyaltyEffect`**（`float`，默认 `1` / `-1`）
  - 用途：有总督时，总督文化与城镇文化相同则 `+1`、不同则 `-1`。
  - 副作用：无。调用时机：`CalculateLoyaltyChange` 内部读取。

- **`SettlementOwnerDifferentCultureLoyaltyEffect`**（`float`，默认 `-3`）
  - 用途：所有者部族文化与城镇文化不同时一次性扣除的忠诚（默认 `-3`），是默认实现里单项最大的持续惩罚。
  - 副作用：无。调用时机：`CalculateLoyaltyChange` 内部读取。

- **`MaximumLoyaltyInSettlement` / `LoyaltyDriftMedium`**（`int`，默认 `100` / `50`）
  - 用途：忠诚度上限与“漂移中位”——忠诚度会以 `-0.1 * (Loyalty - LoyaltyDriftMedium)` 的速率向 `50` 回归，是每日变化的主要稳定项。
  - 副作用：无。调用时机：`CalculateLoyaltyChange` 内部读取。

- **`AdditionalStarvationPenaltyStartDay` / `AdditionalStarvationLoyaltyEffect`**（`int`，默认 `14` / `-1`）
  - 用途：断粮超过 `AdditionalStarvationPenaltyStartDay` 天后再追加 `AdditionalStarvationLoyaltyEffect`（默认 `-1`）的忠诚惩罚。
  - 副作用：无。调用时机：`CalculateLoyaltyChange` 内部的饥饿项读取。

- **`ThresholdForNotableRelationBonus` / `DailyNotableRelationBonus`**（`float` / `int`，默认 `75` / `1`）
  - 用途：城镇忠诚高于 `ThresholdForNotableRelationBonus` 时，[CharacterRelationCampaignBehavior](../CharacterRelationCampaignBehavior) 会每日给与该城镇要人关系好的领主 `DailyNotableRelationBonus`（默认 `+1`）的关系增量。
  - 副作用：无，纯判定常量；真正的加关系由行为调用 `ChangeRelationAction` 完成。调用时机：行为每日判定读取。

## 示例

在决定是否处理叛乱前，先用模型暴露的阈值常量做守卫（注意不要在模型上缓存实例，直接走 `Campaign.Current.Models`）：

```csharp
Town town = Settlement.CurrentSettlement.Town;
if (town.Loyalty <= (float)Campaign.Current.Models.SettlementLoyaltyModel.RebellionStartLoyaltyThreshold)
{
    // 忠诚度已跌破叛变阈值，RebellionsCampaignBehavior 会据此发起叛乱
}
```

读取某城镇明日忠诚度的带说明分解，可用于城镇管理界面或调试：

```csharp
ExplainedNumber loyaltyChange = Campaign.Current.Models.SettlementLoyaltyModel
    .CalculateLoyaltyChange(town, includeDescriptions: true);
float dailyDelta = loyaltyChange.ResultNumber;
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [Town](../Town) · [Settlement](../Settlement) · [Village](../Village) · [RebellionsCampaignBehavior](../RebellionsCampaignBehavior) · [CharacterRelationCampaignBehavior](../CharacterRelationCampaignBehavior) · [DefaultSettlementTaxModel](../DefaultSettlementTaxModel) · [SettlementProsperityModel](../SettlementProsperityModel) · [SettlementMilitiaModel](../SettlementMilitiaModel) · [SettlementSecurityModel](../SettlementSecurityModel) · [IssueModel](../IssueModel) · [BuildingModel](../BuildingModel) · [BuildingEffectModel](../BuildingEffectModel) · [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) · [BuildingConstructionModel](../BuildingConstructionModel) · [BuildingEffectEnum](../BuildingEffectEnum) · [DefaultSettlementLoyaltyModel](../DefaultSettlementLoyaltyModel) · [Hero](../Hero) · [Clan](../Clan) · [Kingdom](../Kingdom) · [ExplainedNumber](../ExplainedNumber) · [CampaignBehaviorBase](../CampaignBehaviorBase)
